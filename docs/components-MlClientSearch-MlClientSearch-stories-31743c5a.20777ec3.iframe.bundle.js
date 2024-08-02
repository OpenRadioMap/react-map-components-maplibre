"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[9195],{87311:(e,t,n)=>{n.r(t),n.d(t,{ExampleConfig:()=>F,__namedExportsOrder:()=>N,default:()=>D});var r=n(96540),a=n(99263),o=n.n(a),i=n(62814),l=n(40554),s=n(36852);function u(e){var t=function(e){if(Array.isArray(e)){if(2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1])return"Point";if(Array.isArray(e[0])){if(e.every((function(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]})))return"LineString";if(e.every((function(e){return Array.isArray(e)&&Array.isArray(e[0])})))return e[0][0][0]===e[0][e[0].length-1][0]&&e[0][0][1]===e[0][e[0].length-1][1]?"Polygon":"MultiLineString"}}throw new Error("Invalid coordinate structure for a GeoJSON feature type determination.")}(e);return{type:"Feature",geometry:{type:t,coordinates:e},properties:{}}}try{u.displayName="createGeoJSONFeature",u.__docgenInfo={description:"",displayName:"createGeoJSONFeature",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlClientSearch/lib/createGeojsonFeature.tsx#createGeoJSONFeature"]={docgenInfo:u.__docgenInfo,name:"createGeoJSONFeature",path:"src/components/MlClientSearch/lib/createGeojsonFeature.tsx#createGeoJSONFeature"})}catch(e){}var d=n(74848);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=r.createContext({}),h=function(e){var t=e.children,n=e.searchIndex,a=e.renderOption,f=e.searchFieldLabel,h=e.fields,b=p((0,r.useState)(void 0),2),y=b[0],g=b[1],S=p((0,r.useState)(void 0),2),v=S[0],x=S[1],O=p((0,r.useState)([]),2),w=O[0],C=O[1],T=p((0,r.useState)([]),2),I=T[0],j=T[1],V=p((0,r.useState)(void 0),2),A=V[0],L=V[1],k=p((0,r.useState)(),2),P=k[0],q=k[1],R=(0,l.A)({mapId:void 0});(0,r.useEffect)((function(){g(o().Index.load(n))}),[n]),(0,r.useEffect)((function(){if(v&&y){var e=y.search(v.toString(),{fields:h}).filter((function(e){return void 0!==e})).slice(0,10).map((function(e){return Object.keys(h).forEach((function(){y.documentStore.getDoc(e.ref)&&(e=y.documentStore.getDoc(e.ref))})),e}));C(e)}}),[v,y,h]),(0,r.useEffect)((function(){if(A&&R.map&&"object"===c(A)&&"COORDINATES"in A){var e=u(A.COORDINATES),t=(2===(null===(r=(n=e).geometry.coordinates)||void 0===r?void 0:r.length)&&(n=i.ra8(n,1,{units:"kilometers"})),i.Qk1(n));q(e),R.map.fitBounds(t)}var n,r}),[A,R.map]);var _={searchTerm:v,setSearchTerm:x,searchResults:w,setSearchResults:C,searchResultsArray:I,setSearchResultsArray:j,selectedResult:A,setSelectedResult:L,searchIndex:n,fields:h,searchIndexInstance:y,renderOption:a,searchFieldLabel:f};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(m.Provider,{value:_,children:[" ",t]}),P&&(0,d.jsx)(s.A,{geojson:P})]})};const b=m;try{h.displayName="SearchContextProvider",h.__docgenInfo={description:"",displayName:"SearchContextProvider",props:{searchIndex:{defaultValue:null,description:"",name:"searchIndex",required:!0,type:{name:"any"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"{ [key: string]: any; }"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((props: HTMLAttributes<HTMLLIElement>, option: string, state: AutocompleteRenderOptionState) => ReactNode) | undefined"}},searchFieldLabel:{defaultValue:null,description:"",name:"searchFieldLabel",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlClientSearch/lib/SearchContext.tsx#SearchContextProvider"]={docgenInfo:h.__docgenInfo,name:"SearchContextProvider",path:"src/components/MlClientSearch/lib/SearchContext.tsx#SearchContextProvider"})}catch(e){}try{Context.displayName="Context",Context.__docgenInfo={description:"Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}",displayName:"Context",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlClientSearch/lib/SearchContext.tsx#Context"]={docgenInfo:Context.__docgenInfo,name:"Context",path:"src/components/MlClientSearch/lib/SearchContext.tsx#Context"})}catch(e){}var y=n(22821),g=n(42471);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){var r,a,o,i;r=e,a=t,o=n[t],i=function(e,t){if("object"!=x(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==x(i)?i:String(i))in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function O(){var e=(0,r.useContext)(b);function t(e){if(!e)return"";if("object"===x(e))return n(e);if("string"==typeof e&&(e.trim().startsWith("{")||e.trim().startsWith("[")))try{var t=JSON.parse(e);return Array.isArray(t)?t.map(n).join("; "):n(t)}catch(e){return console.error("Error parsing JSON:",e),""}else if("string"==typeof e)return e;return console.error("Invalid input type."),""}function n(t){var n=e.searchIndex.fields;return Object.keys(t).filter((function(e){return n.includes(e)})).map((function(e){return t[e]})).join(", ")}var a,o,i=(0,r.useCallback)((a=function(t){e.setSearchTerm(t.target.value)},200,function(e){clearTimeout(o),o=setTimeout((function(){clearTimeout(o),a(e)}),200)}),[e]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(y.A,{options:(null==e?void 0:e.searchResults)||[],noOptionsText:"Keine Optionen verfügbar.",onSelect:i,value:t(null==e?void 0:e.selectedResult)||null,isOptionEqualToValue:function(t){return t===(null==e?void 0:e.selectedResult)},getOptionLabel:function(e){return t(e)},onChange:function(t,n){null==e||e.setSelectedResult(null!=n?n:void 0)},renderOption:null==e?void 0:e.renderOption,sx:{width:250},renderInput:function(t){return(0,d.jsx)(g.A,v(v({},t),{},{label:null==e?void 0:e.searchFieldLabel}))}})})}var w=function(e){var t=e.searchIndex,n=e.fields,r=e.renderOption,a=e.searchFieldLabel;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(h,{searchIndex:t,fields:n,renderOption:r,searchFieldLabel:a,children:(0,d.jsx)(O,{})})})};w.defaultProps={};const C=w;try{w.displayName="MlClientSearch",w.__docgenInfo={description:"Component template",displayName:"MlClientSearch",props:{searchIndex:{defaultValue:null,description:"Search Engine: http://elasticlunr.com/",name:"searchIndex",required:!0,type:{name:"any"}},fields:{defaultValue:null,description:"Docs: http://elasticlunr.com/docs/configuration.js.html",name:"fields",required:!0,type:{name:"{ [key: string]: any; }"}},renderOption:{defaultValue:null,description:"Docs: \thttps://mui.com/material-ui/api/autocomplete/",name:"renderOption",required:!1,type:{name:"((props: HTMLAttributes<HTMLLIElement>, option: string, state: AutocompleteRenderOptionState) => ReactNode) | undefined"}},searchFieldLabel:{defaultValue:null,description:"Label search field",name:"searchFieldLabel",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlClientSearch/MlClientSearch.tsx#MlClientSearch"]={docgenInfo:w.__docgenInfo,name:"MlClientSearch",path:"src/components/MlClientSearch/MlClientSearch.tsx#MlClientSearch"})}catch(e){}var T=n(72143),I=n(77477),j=n(77070),V=n(61102),A=n(61224),L=n(30995),k=n(28161),P=n(14073),q=n(15001);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){var r,a,o,i;r=e,a=t,o=n[t],i=function(e,t){if("object"!=R(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==R(i)?i:String(i))in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const D={title:"MapComponents/MlClientSearch",component:C,argTypes:{},decorators:(0,I.Y)({center:[10.416667,51.133333],bearing:180,zoom:5,pitch:60})};var F=function(){var e,t,n=(e=(0,r.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(V.A,{buttons:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(A.A,{variant:a?"contained":"outlined",onClick:function(){return o(!a)},sx:{marginRight:{xs:"0px",sm:"10px"}},children:"Search"})})}),(0,d.jsx)(j.A,{open:a,setOpen:o,name:"Client-side search",children:(0,d.jsxs)(L.A,{paddingTop:5,spacing:3,direction:"column",alignItems:"left",children:[(0,d.jsx)(C,{searchIndex:T,fields:{CITY:{expand:!0},POPULATION:{expand:!0}},renderOption:function(e,t){return(0,d.jsxs)(k.A,M(M({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[t.CITY,", ",t.POPULATION]}))},searchFieldLabel:"German cities"}),(0,d.jsxs)(P.A,{variant:"body2",sx:{wordBreak:"break-all"},children:[(0,d.jsx)(q.A,{href:"https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-500",underline:"always",target:"_blank",children:"Sample data"})," - public.opendatasoft.com"]})]})})]})}.bind({});F.parameters={},F.args={},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:'() => {\n  const [openSidebar, setOpenSidebar] = useState(true);\n  return <>\n            <TopToolbar buttons={<>\n                        <Button variant={openSidebar ? \'contained\' : \'outlined\'} onClick={() => setOpenSidebar(!openSidebar)} sx={{\n        marginRight: {\n          xs: \'0px\',\n          sm: \'10px\'\n        }\n      }}>\n                            Search\n                        </Button>\n                    </>} />\n            <Sidebar open={openSidebar} setOpen={setOpenSidebar} name={\'Client-side search\'}>\n        <Stack paddingTop={5} spacing={3} direction="column" alignItems="left">\n\n                <MlClientSearch searchIndex={((index as unknown) as SearchContextInterface[\'searchIndex\'])} fields={{\n          CITY: {\n            expand: true\n          },\n          POPULATION: {\n            expand: true\n          }\n        }} renderOption={(props: any, option: any) => <Box component="li" sx={{\n          \'& > img\': {\n            mr: 2,\n            flexShrink: 0\n          }\n        }} {...props}>\n                            {option.CITY}, {option.POPULATION}\n                        </Box>} searchFieldLabel="German cities" />\n                <Typography variant="body2" sx={{\n          wordBreak: "break-all"\n        }}>\n                    <Link href="https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-500" underline="always" target="_blank">\n                        {\'Sample data\'}\n                    </Link> - public.opendatasoft.com\n                </Typography>\n                </Stack>\n            </Sidebar>\n        </>;\n}',...F.parameters?.docs?.source}}};const N=["ExampleConfig"]},77477:(e,t,n)=>{n.d(t,{A:()=>m,Y:()=>f});var r=n(96540),a=n(95532),o=n(32348),i=(n(18582),n(68704)),l=n(65793),s=n(30901),u=n(74848);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){var r,a,o,i;r=e,a=t,o=n[t],i=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==d(i)?i:String(i))in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){return[function(t,n){var d,c=(0,r.useMemo)((function(){var e;return(0,s.A)(null==n||null===(e=n.globals)||void 0===e?void 0:e.theme)}),[null==n||null===(d=n.globals)||void 0===d?void 0:d.theme]);return(0,u.jsx)("div",{className:"fullscreen_map",children:(0,u.jsx)(a.mO,{children:(0,u.jsxs)(l.A,{theme:c,children:[(0,u.jsx)(t,{}),(0,u.jsx)(o.A,{options:p({zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},e?p({},e):{}),mapId:"map_1"}),(0,u.jsx)(i.A,{showZoomButtons:!1,mapId:"map_1"})]})})})}]};const m=f({});try{f.displayName="makeMapContextDecorators",f.__docgenInfo={description:"",displayName:"makeMapContextDecorators",props:{hash:{defaultValue:null,description:"If `true`, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL.\nFor example, `http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60`.\nAn additional string may optionally be provided to indicate a parameter-styled hash,\ne.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo\nis a custom parameter and bar is an arbitrary hash distinct from the map hash.\n@defaultValue false",name:"hash",required:!1,type:{name:"string | boolean | undefined"}},interactive:{defaultValue:null,description:"If `false`, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction.\n@defaultValue true",name:"interactive",required:!1,type:{name:"boolean | undefined"}},container:{defaultValue:null,description:"The HTML element in which MapLibre GL JS will render the map, or the element's string `id`. The specified element must have no children.",name:"container",required:!1,type:{name:"string | HTMLElement | undefined"}},bearingSnap:{defaultValue:null,description:"The threshold, measured in degrees, that determines when the map's\nbearing will snap to north. For example, with a `bearingSnap` of 7, if the user rotates\nthe map within 7 degrees of north, the map will automatically snap to exact north.\n@defaultValue 7",name:"bearingSnap",required:!1,type:{name:"number | undefined"}},attributionControl:{defaultValue:null,description:'If set, an {@link AttributionControl} will be added to the map with the provided options.\nTo disable the attribution control, pass `false`.\nNote: showing the logo of MapLibre is not required for using MapLibre.\n@defaultValue compact: true, customAttribution: "MapLibre ...".',name:"attributionControl",required:!1,type:{name:"false | AttributionControlOptions | undefined"}},maplibreLogo:{defaultValue:null,description:"If `true`, the MapLibre logo will be shown.\n@defaultValue false",name:"maplibreLogo",required:!1,type:{name:"boolean | undefined"}},logoPosition:{defaultValue:null,description:"A string representing the position of the MapLibre wordmark on the map. Valid options are `top-left`,`top-right`, `bottom-left`, or `bottom-right`.\n@defaultValue 'bottom-left'",name:"logoPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},failIfMajorPerformanceCaveat:{defaultValue:null,description:"If `true`, map creation will fail if the performance of MapLibre GL JS would be dramatically worse than expected\n(i.e. a software renderer would be used).\n@defaultValue false",name:"failIfMajorPerformanceCaveat",required:!1,type:{name:"boolean | undefined"}},preserveDrawingBuffer:{defaultValue:null,description:"If `true`, the map's canvas can be exported to a PNG using `map.getCanvas().toDataURL()`. This is `false` by default as a performance optimization.\n@defaultValue false",name:"preserveDrawingBuffer",required:!1,type:{name:"boolean | undefined"}},antialias:{defaultValue:null,description:"If `true`, the gl context will be created with MSAA antialiasing, which can be useful for antialiasing custom layers. This is `false` by default as a performance optimization.",name:"antialias",required:!1,type:{name:"boolean | undefined"}},refreshExpiredTiles:{defaultValue:null,description:"If `false`, the map won't attempt to re-request tiles once they expire per their HTTP `cacheControl`/`expires` headers.\n@defaultValue true",name:"refreshExpiredTiles",required:!1,type:{name:"boolean | undefined"}},maxBounds:{defaultValue:null,description:"If set, the map will be constrained to the given bounds.",name:"maxBounds",required:!1,type:{name:"LngLatBoundsLike | undefined"}},scrollZoom:{defaultValue:null,description:'If `true`, the "scroll to zoom" interaction is enabled. {@link AroundCenterOptions} are passed as options to {@link ScrollZoomHandler#enable }.\n@defaultValue true',name:"scrollZoom",required:!1,type:{name:"boolean | AroundCenterOptions | undefined"}},minZoom:{defaultValue:null,description:"The minimum zoom level of the map (0-24).\n@defaultValue 0",name:"minZoom",required:!1,type:{name:"number | null | undefined"}},maxZoom:{defaultValue:null,description:"The maximum zoom level of the map (0-24).\n@defaultValue 22",name:"maxZoom",required:!1,type:{name:"number | null | undefined"}},minPitch:{defaultValue:null,description:"The minimum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project.\n@defaultValue 0",name:"minPitch",required:!1,type:{name:"number | null | undefined"}},maxPitch:{defaultValue:null,description:"The maximum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project.\n@defaultValue 60",name:"maxPitch",required:!1,type:{name:"number | null | undefined"}},boxZoom:{defaultValue:null,description:'If `true`, the "box zoom" interaction is enabled (see {@link BoxZoomHandler}).\n@defaultValue true',name:"boxZoom",required:!1,type:{name:"boolean | undefined"}},dragRotate:{defaultValue:null,description:'If `true`, the "drag to rotate" interaction is enabled (see {@link DragRotateHandler}).\n@defaultValue true',name:"dragRotate",required:!1,type:{name:"boolean | undefined"}},dragPan:{defaultValue:null,description:'If `true`, the "drag to pan" interaction is enabled. An `Object` value is passed as options to {@link DragPanHandler#enable }.\n@defaultValue true',name:"dragPan",required:!1,type:{name:"boolean | DragPanOptions | undefined"}},keyboard:{defaultValue:null,description:"If `true`, keyboard shortcuts are enabled (see {@link KeyboardHandler}).\n@defaultValue true",name:"keyboard",required:!1,type:{name:"boolean | undefined"}},doubleClickZoom:{defaultValue:null,description:'If `true`, the "double click to zoom" interaction is enabled (see {@link DoubleClickZoomHandler}).\n@defaultValue true',name:"doubleClickZoom",required:!1,type:{name:"boolean | undefined"}},touchZoomRotate:{defaultValue:null,description:'If `true`, the "pinch to rotate and zoom" interaction is enabled. An `Object` value is passed as options to {@link TwoFingersTouchZoomRotateHandler#enable }.\n@defaultValue true',name:"touchZoomRotate",required:!1,type:{name:"boolean | AroundCenterOptions | undefined"}},touchPitch:{defaultValue:null,description:'If `true`, the "drag to pitch" interaction is enabled. An `Object` value is passed as options to {@link TwoFingersTouchPitchHandler#enable }.\n@defaultValue true',name:"touchPitch",required:!1,type:{name:"boolean | AroundCenterOptions | undefined"}},cooperativeGestures:{defaultValue:null,description:'If `true` or set to an options object, the map is only accessible on desktop while holding Command/Ctrl and only accessible on mobile with two fingers. Interacting with the map using normal gestures will trigger an informational screen. With this option enabled, "drag to pitch" requires a three-finger gesture. Cooperative gestures are disabled when a map enters fullscreen using {@link FullscreenControl}.\n@defaultValue undefined',name:"cooperativeGestures",required:!1,type:{name:"boolean | undefined"}},trackResize:{defaultValue:null,description:"If `true`, the map will automatically resize when the browser window resizes.\n@defaultValue true",name:"trackResize",required:!1,type:{name:"boolean | undefined"}},center:{defaultValue:null,description:"The initial geographical centerpoint of the map. If `center` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `[0, 0]` Note: MapLibre GL JS uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.\n@defaultValue [0, 0]",name:"center",required:!1,type:{name:"LngLatLike | undefined"}},zoom:{defaultValue:null,description:"The initial zoom level of the map. If `zoom` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`.\n@defaultValue 0",name:"zoom",required:!1,type:{name:"number | undefined"}},bearing:{defaultValue:null,description:"The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If `bearing` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`.\n@defaultValue 0",name:"bearing",required:!1,type:{name:"number | undefined"}},pitch:{defaultValue:null,description:"The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-85). If `pitch` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`. Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project.\n@defaultValue 0",name:"pitch",required:!1,type:{name:"number | undefined"}},renderWorldCopies:{defaultValue:null,description:"If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`:\n\n- When the map is zoomed out far enough that a single representation of the world does not fill the map's entire\ncontainer, there will be blank space beyond 180 and -180 degrees longitude.\n- Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the\nmap and the other on the left edge of the map) at every zoom level.\n@defaultValue true",name:"renderWorldCopies",required:!1,type:{name:"boolean | undefined"}},maxTileCacheSize:{defaultValue:null,description:"The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport which can be set using `maxTileCacheZoomLevels` constructor options.\n@defaultValue null",name:"maxTileCacheSize",required:!1,type:{name:"number | undefined"}},maxTileCacheZoomLevels:{defaultValue:null,description:"The maximum number of zoom levels for which to store tiles for a given source. Tile cache dynamic size is calculated by multiplying `maxTileCacheZoomLevels` with the approximate number of tiles in the viewport for a given source.\n@defaultValue 5",name:"maxTileCacheZoomLevels",required:!1,type:{name:"number | undefined"}},transformRequest:{defaultValue:null,description:"A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests.\nExpected to return an object with a `url` property and optionally `headers` and `credentials` properties.",name:"transformRequest",required:!1,type:{name:"RequestTransformFunction | undefined"}},transformCameraUpdate:{defaultValue:null,description:"A callback run before the map's camera is moved due to user input or animation. The callback can be used to modify the new center, zoom, pitch and bearing.\nExpected to return an object containing center, zoom, pitch or bearing values to overwrite.",name:"transformCameraUpdate",required:!1,type:{name:"CameraUpdateTransformFunction | undefined"}},locale:{defaultValue:null,description:"A patch to apply to the default localization table for UI strings, e.g. control tooltips. The `locale` object maps namespaced UI string IDs to translated strings in the target language; see `src/ui/default_locale.js` for an example with all supported string IDs. The object may specify all UI strings (thereby adding support for a new translation) or only a subset of strings (thereby patching the default translation table).\n@defaultValue null",name:"locale",required:!1,type:{name:"any"}},fadeDuration:{defaultValue:null,description:"Controls the duration of the fade-in/fade-out animation for label collisions after initial map load, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading.\n@defaultValue 300",name:"fadeDuration",required:!1,type:{name:"number | undefined"}},crossSourceCollisions:{defaultValue:null,description:"If `true`, symbols from multiple sources can collide with each other during collision detection. If `false`, collision detection is run separately for the symbols in each source.\n@defaultValue true",name:"crossSourceCollisions",required:!1,type:{name:"boolean | undefined"}},collectResourceTiming:{defaultValue:null,description:"If `true`, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a `resourceTiming` property of relevant `data` events.\n@defaultValue false",name:"collectResourceTiming",required:!1,type:{name:"boolean | undefined"}},clickTolerance:{defaultValue:null,description:"The max number of pixels a user can shift the mouse pointer during a click for it to be considered a valid click (as opposed to a mouse drag).\n@defaultValue true",name:"clickTolerance",required:!1,type:{name:"number | undefined"}},bounds:{defaultValue:null,description:"The initial bounds of the map. If `bounds` is specified, it overrides `center` and `zoom` constructor options.",name:"bounds",required:!1,type:{name:"LngLatBoundsLike | undefined"}},fitBoundsOptions:{defaultValue:null,description:"A {@link FitBoundsOptions} options object to use _only_ when fitting the initial `bounds` provided above.",name:"fitBoundsOptions",required:!1,type:{name:"FitBoundsOptions | undefined"}},localIdeographFontFamily:{defaultValue:null,description:"Defines a CSS\nfont-family for locally overriding generation of glyphs in the 'CJK Unified Ideographs', 'Hiragana', 'Katakana' and 'Hangul Syllables' ranges.\nIn these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).\nSet to `false`, to enable font settings from the map's style for these glyph ranges.\nThe purpose of this option is to avoid bandwidth-intensive glyph server requests. (See [Use locally generated ideographs](https://maplibre.org/maplibre-gl-js/docs/examples/local-ideographs).)\n@defaultValue 'sans-serif'",name:"localIdeographFontFamily",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"The map's MapLibre style. This must be a JSON object conforming to\nthe schema described in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/),\nor a URL to such JSON.",name:"style",required:!1,type:{name:"string | StyleSpecification | undefined"}},pitchWithRotate:{defaultValue:null,description:'If `false`, the map\'s pitch (tilt) control with "drag to rotate" interaction will be disabled.\n@defaultValue true',name:"pitchWithRotate",required:!1,type:{name:"boolean | undefined"}},pixelRatio:{defaultValue:null,description:"The pixel ratio. The canvas' `width` attribute will be `container.clientWidth * pixelRatio` and its `height` attribute will be `container.clientHeight * pixelRatio`. Defaults to `devicePixelRatio` if not specified.",name:"pixelRatio",required:!1,type:{name:"number | undefined"}},validateStyle:{defaultValue:null,description:"If false, style validation will be skipped. Useful in production environment.\n@defaultValue true",name:"validateStyle",required:!1,type:{name:"boolean | undefined"}},maxCanvasSize:{defaultValue:null,description:"The canvas' `width` and `height` max size. The values are passed as an array where the first element is max width and the second element is max height.\nYou shouldn't set this above WebGl `MAX_TEXTURE_SIZE`. Defaults to [4096, 4096].",name:"maxCanvasSize",required:!1,type:{name:"[number, number] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/decorators/MapContextDecorator.tsx#makeMapContextDecorators"]={docgenInfo:f.__docgenInfo,name:"makeMapContextDecorators",path:"src/decorators/MapContextDecorator.tsx#makeMapContextDecorators"})}catch(e){}}}]);