import{j as r}from"./index-nGUg9nSI.js";import{a3 as s,a4 as m}from"./style-DnMtoM4T.js";import{d as o}from"./MultiMapContextDecorator-Dwu2onAn.js";import"./iframe-O9DyGZK0.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CYTFyfAa.js";const y={title:"MapComponents/MlLayerMagnify",component:s,argTypes:{},decorators:o},i=e=>r.jsxs(r.Fragment,{children:[r.jsx(m,{url:"https://www.wms.nrw.de/geobasis/wms_nw_uraufnahme",urlParameters:{layers:"nw_uraufnahme_rw"},sourceOptions:{type:"raster",minzoom:13,maxzoom:20},mapId:e.wmsLayerMapId}),r.jsx(s,{map1Id:"map_1",map2Id:"map_2",magnifierStyle:{border:"2px solid grey"},magnifierRadius:e.magnifierRadius})]}),a=i.bind({});a.parameters={};a.args={wmsLayerMapId:"map_2",magnifierRadius:200};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: TemplateProps) => <>
        {/* WMS Layer with the provided URL and options */}
        <MlWmsLayer url="https://www.wms.nrw.de/geobasis/wms_nw_uraufnahme" urlParameters={{
    layers: 'nw_uraufnahme_rw'
  }} sourceOptions={{
    type: 'raster',
    minzoom: 13,
    maxzoom: 20
  }} mapId={args.wmsLayerMapId} // Passing dynamic mapId
  />
        {/* Magnification layer with style and radius */}
        <MlLayerMagnify map1Id="map_1" map2Id="map_2" magnifierStyle={{
    border: '2px solid grey'
  }} magnifierRadius={args.magnifierRadius} />
    </>`,...a.parameters?.docs?.source}}};const g=["ExampleConfig"];export{a as ExampleConfig,g as __namedExportsOrder,y as default};
