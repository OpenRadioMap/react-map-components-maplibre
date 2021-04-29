import React, { useContext, useRef, useEffect, useState } from "react";
import { MapContext } from "react-map-components-core";
import GeoJsonContext from "../MlGPXViewer/util/GeoJsonContext";
import { polygon,lineString } from "@turf/helpers";
import { distance,lineOffset } from "@turf/turf";



/**
 * MlSpatialElevationProfile returns a Button that will add a standard OSM tile layer to the maplibre-gl instance.
 */
const MlSpatialElevationProfile = ({elevationFactor = 1, mapId = null }) => {
  const mapContext = useContext(MapContext);
  const dataSource = useContext(GeoJsonContext);
  const sourceName = "elevationprofile";
  const layerName = "elevationprofile-layer";
 
  
  console.log(elevationFactor)

  const createStep = (x, y, z, x2, y2) => {
    const summand = 0.00020;
    const line = lineString([[x,y], [x2,y2]]);
    const offsetLine = lineOffset(line,5, {units: 'meters'});
    const x3 = offsetLine.geometry.coordinates[0][0];
    const y3 = offsetLine.geometry.coordinates[0][1];
    const x4 = offsetLine.geometry.coordinates[1][0];
    const y4 = offsetLine.geometry.coordinates[1][1];
    
    return polygon(
      [
        [
          [x, y],
          [x2, y2],
          
          [x4, y4],
          [x3,y3],
          [x, y],
        ],
      ],
      { height: (z) * elevationFactor }
    );
  };

  const cleanUp = () => {
    const map = mapContext.maps[mapId] || mapContext.map;
    [layerName].forEach((layerName) => {
      if (map.getLayer(layerName)) {
        map.removeLayer(layerName);
      }
    });

    if (map.getSource(sourceName)) {
      map.removeSource(sourceName);
    }
  };
  useEffect(() => {
    const map = mapContext.maps[mapId] || mapContext.map;
    if (!map) return;
    map.addSource(sourceName, {
      type: "geojson",
      data: dataSource.data,
    });
    map.addLayer({
      id: layerName,
      source: sourceName,
      type: "fill-extrusion",
      paint: {
        "fill-extrusion-height": ["get", "height"],
        "fill-extrusion-opacity": 0.9,
        "fill-extrusion-color": [
          "interpolate",
          ["linear"],
          ["get", "height"],
          0,
          "rgba(0, 0, 255, 0)",
          0.1,
          "royalblue",
          0.3,
          "cyan",
          0.5,
          "lime",
          0.7,
          "yellow",
          1,
          "yellow",
        ],
      },
    });

    return cleanUp;
  }, [mapContext.map]);

  useEffect(() => {
    const map = mapContext.maps[mapId] || mapContext.map;
    if (!map) return;
    const { data } = dataSource;

    const line = data.features.find((element) => {
      return element.geometry.type === "LineString";
    });
    const heights = line.geometry.coordinates.map((coordinate, index) => {
      return coordinate[2];
    });
    
    const min = Math.min(...heights);
   
    let max = Math.max(...heights)-min;
    
    max = max ===0 ? 1 : max;
   
    map.setPaintProperty(layerName, "fill-extrusion-color", [
      "interpolate",
      ["linear"],
      ["get", "height"],
      0,
      "rgb(0,255,55)",
      (max)*elevationFactor,
      "rgb(255,0,0)",
    ]);
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    const points = [];

    line.geometry.coordinates.forEach((coordinate, index) => {
      //const point = createPoint(coordinate[0],coordinate[1],coordinate[2]-min);
      //points.push(point);
      if (line.geometry.coordinates[index + 1]) {
        const wayLength = distance(
          [coordinate[0], coordinate[1]],
          [
            line.geometry.coordinates[index + 1][0],
            line.geometry.coordinates[index + 1][1],
          ],
          { units: "kilometers" }
        );
        let listLength = ~~((wayLength * 1000) / 10);
        listLength = listLength < 1 ? 1 : listLength;
        for (let i = 0; i < listLength; i++) {
          const x = lerp(
            line.geometry.coordinates[index][0],
            line.geometry.coordinates[index + 1][0],
            i / listLength
          );
          const y = lerp(
            line.geometry.coordinates[index][1],
            line.geometry.coordinates[index + 1][1],
            i / listLength
          );
          const z = lerp(
            line.geometry.coordinates[index][2] - min,
            line.geometry.coordinates[index + 1][2] - min,
            i / listLength
          );

          const x2 = lerp(
            line.geometry.coordinates[index][0],
            line.geometry.coordinates[index + 1][0],
            (i + 1) / listLength
          );
          const y2 = lerp(
            line.geometry.coordinates[index][1],
            line.geometry.coordinates[index + 1][1],
            (i + 1) / listLength
          );

          const point = createStep(x, y, z, x2, y2);
          points.push(point);
        }
      }
    });

    const newData = dataSource.getEmptyFeatureCollection();
    newData.features = points;
    
    map.getSource(sourceName)?.setData(newData);
  }, [dataSource.data]);

  return <></>;
};

export default MlSpatialElevationProfile;