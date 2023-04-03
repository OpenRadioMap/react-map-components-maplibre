import { LayerSpecification, StyleSpecification } from 'maplibre-gl';
import React, { useEffect, useMemo } from 'react';
import { MlVectorTileLayerProps } from '../components/MlVectorTileLayer/MlVectorTileLayer';
import config from '../omt_styles/config';
import { MlWmsLoaderProps } from '../components/MlWmsLoader/MlWmsLoader';
import { MlGeoJsonLayerProps } from '../components/MlGeoJsonLayer/MlGeoJsonLayer';
import { v4 as uuidv4 } from 'uuid';

export interface LayerContextProps {
	children: React.ReactNode;
}

export type WmsLayerConfig = {
	type: 'wms';
	name?: string;
	id?: string;
	config: MlWmsLoaderProps;
};
export type GeojsonLayerConfig = {
	type: 'geojson';
	name?: string;
	id?: string;
	config: MlGeoJsonLayerProps;
};
export type VtLayerConfig = {
	type: 'vt';
	name?: string;
	id?: string;
	config: MlVectorTileLayerProps;
};

export type LayerConfig = WmsLayerConfig | GeojsonLayerConfig | VtLayerConfig;

export interface LayerContextType {
	layers: LayerConfig[];
	setLayers: (layers: LayerConfig[] | ((layers: LayerConfig[]) => LayerConfig[])) => void;
	backgroundLayers: MlVectorTileLayerProps['layers'];
	setBackgroundLayers: (
		layers:
			| MlVectorTileLayerProps['layers']
			| ((layers: MlVectorTileLayerProps['layers']) => MlVectorTileLayerProps['layers'])
	) => void;
	symbolLayers: MlVectorTileLayerProps['layers'];
	setSymbolLayers: (
		layers:
			| MlVectorTileLayerProps['layers']
			| ((layers: MlVectorTileLayerProps['layers']) => MlVectorTileLayerProps['layers'])
	) => void;
	updateStyle: (style: StyleSpecification) => void;
	vtLayerConfig: Partial<MlVectorTileLayerProps>;
	setTileUrl: (url: string) => void;
	tileUrl: string;
}

const LayerContext = React.createContext({} as LayerContextType);

function LayerContextProvider(props: LayerContextProps) {
	const [layers, setLayers] = React.useState<LayerConfig[]>([]);
	const [backgroundLayers, setBackgroundLayers] = React.useState<LayerSpecification[]>([]);
	const [symbolLayers, setSymbolLayers] = React.useState<LayerSpecification[]>([]);
	const [tileUrl, setTileUrl] = React.useState<string>(config.sourceOptions_tiles[0]);

	const vtLayerConfig = useMemo<Partial<MlVectorTileLayerProps>>(
		() => ({
			layerId: 'openmaptiles',
			sourceOptions: {
				type: 'vector' as const,
				tiles: [tileUrl],
			},
		}),
		[tileUrl]
	);

	const updateStyle = (style: StyleSpecification) => {
		if (!style) return;

		const backgroundLayers: LayerSpecification[] = [];
		const symbolLayers: LayerSpecification[] = [];
		style.layers.forEach((layer: LayerSpecification, idx: number) => {
			if (layer.type === 'symbol') {
				symbolLayers.push(layer);
			} else {
				if (idx === 0) layer.id = style.name || 'background';
				backgroundLayers.push(layer);
			}
		});
		setBackgroundLayers(backgroundLayers);
		setSymbolLayers(symbolLayers);
	};

	useEffect(() => {
		if (layers.filter((el) => !el?.id).length) {
			const _layers = [...layers];
			_layers.forEach((el) => {
				if (!el?.id) {
					el.id = uuidv4();
				}
			});
			setLayers(_layers);
		}
	}, [layers]);

	const value = {
		layers,
		setLayers,
		backgroundLayers,
		setBackgroundLayers,
		symbolLayers,
		setSymbolLayers,
		updateStyle,
		vtLayerConfig,
		tileUrl,
		setTileUrl,
	} as LayerContextType;

	return <LayerContext.Provider value={value}>{props.children}</LayerContext.Provider>;
}

export default LayerContext;
export { LayerContextProvider };
