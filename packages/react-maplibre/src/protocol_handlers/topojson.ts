import { LngLatLike, RequestParameters } from 'maplibre-gl';
import { Feature, FeatureCollection } from 'geojson';
import { feature as topojsonFeature } from 'topojson-client';
import protocolPathParser from './utils/protocolPathParser';
import getProtocolData from './utils/getProtocolData';
import { Topology } from 'topojson-specification';

type TopoJson = {
	type?: 'Topology';
	objects?: { key: string; features?: Feature | FeatureCollection };
	arcs?: LngLatLike[];
	transform?: { scale: [number, number]; translate: LngLatLike };
};

function reduceFeatures(geojson: FeatureCollection) {
	const newFeatures: Feature[] = [];
	geojson.features.forEach((e: any) => {
		if (!e.features) {
			newFeatures.push({
				type: e.type,
				geometry: e.geometry,
				properties: e.properties,
			});
		} else {
			e.features.forEach((el: Feature) => {
				newFeatures.push({ type: el.type, geometry: el.geometry, properties: el.properties });
			});
		}
	});
	return newFeatures as Feature[];
}

async function convertTopojson(params: { filename: string }): Promise<FeatureCollection> {
	/**
	 * Loads TopoJSON data and converts it into a GeoJSON FeatureCollection
	 */
	const geojson = await new Promise<FeatureCollection>((resolve) => {
		let topoJsonData: TopoJson = {
			type: 'Topology',
			objects: { key: '' },
			arcs: [],
		};

		getProtocolData(params.filename).then((rawData: any) => {
			try {
				topoJsonData = JSON.parse(rawData);
			} catch (e) {
				console.error('Error converting topojson', e);
				throw 'Invalid TopoJson';
			}
			// Convert the data
			let result: FeatureCollection = {
				type: 'FeatureCollection',
				features: [],
			};

			if (topoJsonData.type === 'Topology' && topoJsonData.objects !== undefined) {
				const topoJsonDataObjects: { [key: string]: any } = topoJsonData.objects;
				// add the "fromObject" property in each topojson feature
				Object.keys(topoJsonData.objects).map((key) => {
					if (topoJsonDataObjects?.[key].type === 'GeometryCollection') {
						topoJsonDataObjects?.[key].geometries?.forEach(
							(e: Feature) => (e.properties = { fromObject: key, ...e.properties })
						);
					} else if (
						topoJsonDataObjects?.[key] &&
						topoJsonDataObjects?.[key]?.type !== 'GeometryCollection'
					) {
						topoJsonDataObjects[key].properties = {
							fromObject: key,
							...topoJsonDataObjects?.[key].properties,
						};
					}
				});

				//convert the data into a geoJson object
				result = {
					type: 'FeatureCollection',
					features: Object.keys(topoJsonData.objects).map((key) =>
						topojsonFeature(topoJsonData as unknown as Topology, key)
					),
				};
				result.features = reduceFeatures(result);
			}

			resolve(result);
		});
	});

	return geojson;
}

const TopojsonProtocolHandler = async (params: RequestParameters) => {
	const parsedParams = protocolPathParser(params.url);

	const data = await convertTopojson(parsedParams);
	if (data !== undefined) {
		return { data: data };
	}
	throw new Error('Topojson not found ' + parsedParams.filename);
};

export { TopojsonProtocolHandler, convertTopojson };
