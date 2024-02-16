"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[6087],{55072:(t,e,r)=>{var n=r(95709);e.A=void 0;var o=n(r(42032)),a=r(74848);e.A=(0,o.default)((0,a.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image")},34950:(t,e,r)=>{r.r(e),r.d(e,{ExampleConfig:()=>O,__namedExportsOrder:()=>j,default:()=>v});var n=r(96540),o=r(40554),a=r(55072),i=r(61224),l=r(73357),u=r(16090),c=r(74848);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t){var e,r,s=(0,o.A)({mapId:t.mapId}),d=(0,u.A)({mapId:t.mapId}),b=(e=n.useState(!1),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=b[0],y=b[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.A,{color:"primary",variant:"contained",onClick:function(){if(s.map&&null!=d&&d.createExport){y(!0);var e=s.map.getBounds(),r=[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()];d.createExport(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:833,height:1178.8,bbox:r,bboxUnrotated:r,bearing:s.map.getBearing(),format:"a4",orientation:"portrait"},t.exportOptions)).then((function(t){return t.createPng()})).then((function(t){return y(!1),t.downloadPng()})).catch((function(t){console.log(t),y(!1)}))}},children:g?(0,c.jsx)(l.A,{size:24,sx:{color:"#fff"}}):(0,c.jsx)(a.A,{})})})};d.defaultProps={mapId:void 0};const b=d;try{d.displayName="MlCreatePngButton",d.__docgenInfo={description:"Renders a button that will create a Png file of the current map view (dimensions adjusted to fit DIN A4 paper).",displayName:"MlCreatePngButton",props:{mapId:{defaultValue:{value:"undefined"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},exportOptions:{defaultValue:null,description:"Option overrides for the createExport function",name:"exportOptions",required:!1,type:{name:"createExportOptions | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlCreatePngButton/MlCreatePngButton.tsx#MlCreatePngButton"]={docgenInfo:d.__docgenInfo,name:"MlCreatePngButton",path:"src/components/MlCreatePngButton/MlCreatePngButton.tsx#MlCreatePngButton"})}catch(t){}var g=r(61102),y=r(77477);const v={title:"MapComponents/MlCreatePngButton",component:b,argTypes:{},decorators:y.A};var h=function(){return(0,c.jsx)(g.A,{unmovableButtons:(0,c.jsx)(b,{})})};h.displayName="Template";var O=h.bind({});O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"() => <TopToolbar unmovableButtons={<MlCreatePngButton />} />",...O.parameters?.docs?.source}}};const j=["ExampleConfig"]},77477:(t,e,r)=>{r.d(e,{A:()=>s});var n=r(96540),o=r(95532),a=r(32348),i=(r(18582),r(68704)),l=r(65793),u=r(30901),c=r(74848);const s=[function(t,e){var r,s=(0,n.useMemo)((function(){var t;return(0,u.A)(null==e||null===(t=e.globals)||void 0===t?void 0:t.theme)}),[null==e||null===(r=e.globals)||void 0===r?void 0:r.theme]);return(0,c.jsx)("div",{className:"fullscreen_map",children:(0,c.jsx)(o.mO,{children:(0,c.jsxs)(l.A,{theme:s,children:[(0,c.jsx)(t,{}),(0,c.jsx)(a.A,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,c.jsx)(i.A,{showZoomButtons:!1,mapId:"map_1"})]})})})}]}}]);