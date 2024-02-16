"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[9407],{58124:(e,n,t)=>{var r=t(95709);n.A=void 0;var s=r(t(42032)),a=t(74848);n.A=(0,s.default)((0,a.jsx)("path",{d:"m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14zM7 17v-5.76L12.76 17z"}),"SquareFootOutlined")},81418:(e,n,t)=>{var r=t(95709);n.A=void 0;var s=r(t(42032)),a=t(74848);n.A=(0,s.default)((0,a.jsx)("path",{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z"}),"StraightenOutlined")},99033:(e,n,t)=>{t.r(n),t.d(n,{CatalogueDemo:()=>S,MeasureLine:()=>y,MeasurePolygon:()=>b,__namedExportsOrder:()=>T,default:()=>f});var r=t(96540),s=t(27596),a=t(77477),l=t(81418),o=t(58124),i=t(8239),u=t(28161),c=t(65460),m=t(73896),d=t(61224),h=t(77070),p=t(61102),x=t(19741),g=t(74848);function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,a,l,o=[],i=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=a.call(t)).done)&&(o.push(r.value),o.length!==n);i=!0);}catch(e){u=!0,s=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw s}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const f={title:"MapComponents/MlMeasureTool",component:s.A,argTypes:{},decorators:a.A};var j=function(){var e=v((0,r.useState)(!0),2),n=e[0],t=e[1],a=v((0,r.useState)("kilometers"),2),l=a[0],d=a[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.A,{open:n,setOpen:t,name:"Measure Tool",children:(0,g.jsxs)("div",{style:{width:"200px",position:"absolute",zIndex:105},children:[(0,g.jsxs)(c.A,{name:"units",onChange:function(e){d(e.target.value)},label:"Unit for measurement",defaultValue:"kilometers",children:[(0,g.jsx)(m.A,{value:"kilometers",children:"Kilometers"}),(0,g.jsx)(m.A,{value:"miles",children:"Miles"})]}),(0,g.jsxs)(i.Ay,{container:!0,style:{textAlign:"left",alignItems:"center"},children:[(0,g.jsx)(o.A,{}),(0,g.jsx)("h4",{style:{margin:"0px"},children:"Measure Polygon"})]}),(0,g.jsxs)(u.A,{m:2,style:{textAlign:"left"},children:["Area: ",(0,g.jsx)(s.A,{measureType:"polygon",unit:l})]})]})})})},M=function(){var e=v((0,r.useState)(!0),2),n=e[0],t=e[1],a=v((0,r.useState)("kilometers"),2),o=a[0],d=a[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.A,{open:n,setOpen:t,name:"Measure Tool",children:(0,g.jsxs)("div",{style:{width:"200px",position:"absolute",zIndex:105},children:[(0,g.jsxs)(c.A,{name:"units",onChange:function(e){d(e.target.value)},label:"Unit for measurement",defaultValue:"kilometers",children:[(0,g.jsx)(m.A,{value:"kilometers",children:" Kilometers"}),(0,g.jsx)(m.A,{value:"miles",children:" Miles"})]}),(0,g.jsxs)(i.Ay,{container:!0,style:{textAlign:"left",alignItems:"center"},children:[(0,g.jsx)(l.A,{}),(0,g.jsx)("h4",{style:{margin:"0px"},children:"Measure Line"})]}),(0,g.jsxs)(u.A,{m:2,style:{textAlign:"left"},children:["Length: ",(0,g.jsx)(s.A,{measureType:"line",unit:o})]})]})})})},y=function(){var e=v((0,r.useState)(!0),2),n=e[0],t=e[1],a=v((0,r.useState)("kilometers"),2),o=a[0],d=a[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.A,{open:n,setOpen:t,name:"Measure Tool",children:(0,g.jsxs)("div",{style:{width:"200px",position:"absolute",zIndex:105},children:[(0,g.jsxs)(c.A,{name:"units",onChange:function(e){d(e.target.value)},label:"Unit for measurement",defaultValue:"kilometers",children:[(0,g.jsx)(m.A,{value:"kilometers",children:" Kilometers"}),(0,g.jsx)(m.A,{value:"miles",children:" Miles"})]}),(0,g.jsxs)(i.Ay,{container:!0,style:{textAlign:"left",alignItems:"center"},children:[(0,g.jsx)(l.A,{}),(0,g.jsx)("h4",{style:{margin:"0px"},children:"Measure Line"})]}),(0,g.jsxs)(u.A,{m:2,style:{textAlign:"left"},children:["Length: ",(0,g.jsx)(s.A,{measureType:"line",unit:o})]})]})})})}.bind({});y.parameters={},y.args={};var b=function(){var e=v((0,r.useState)(!0),2),n=e[0],t=e[1],a=v((0,r.useState)("kilometers"),2),l=a[0],d=a[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.A,{open:n,setOpen:t,name:"Measure Tool",children:(0,g.jsxs)("div",{style:{width:"200px",position:"absolute",zIndex:105},children:[(0,g.jsxs)(c.A,{name:"units",onChange:function(e){d(e.target.value)},label:"Unit for measurement",defaultValue:"kilometers",children:[(0,g.jsx)(m.A,{value:"kilometers",children:"Kilometers"}),(0,g.jsx)(m.A,{value:"miles",children:"Miles"})]}),(0,g.jsxs)(i.Ay,{container:!0,style:{textAlign:"left",alignItems:"center"},children:[(0,g.jsx)(o.A,{}),(0,g.jsx)("h4",{style:{margin:"0px"},children:"Measure Polygon"})]}),(0,g.jsxs)(u.A,{m:2,style:{textAlign:"left"},children:["Area: ",(0,g.jsx)(s.A,{measureType:"polygon",unit:l})]})]})})})}.bind({});b.parameters={},b.args={};var S=function(){var e=v((0,r.useState)("area_measure"),2),n=e[0],t=e[1],s=v((0,r.useState)(null),2),a=s[0],l=s[1],o=Boolean(a),i=function(e){t(e)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.A,{unmovableButtons:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.A,{id:"basic-button",variant:"contained","aria-controls":o?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:function(e){l(e.currentTarget)},children:"Tools"}),(0,g.jsxs)(x.A,{id:"basic-menu",anchorEl:a,open:o,onClose:function(){l(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,g.jsx)(m.A,{onClick:function(){return i("area_measure")},children:"Measure Area"}),(0,g.jsx)(m.A,{onClick:function(){return i("line_measure")},children:"Measure Distance"})]})]})}),"area_measure"===n&&(0,g.jsx)(j,{}),"line_measure"===n&&(0,g.jsx)(M,{})]})}.bind({});S.parameters={},S.args={},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"() => {\n  const [openSidebar, setOpenSidebar] = useState(true);\n  const [unit, setUnit] = useState<MlMeasureToolProps['unit']>('kilometers');\n  const handleChange = (event: SelectChangeEvent<MlMeasureToolProps['unit']>) => {\n    setUnit((event.target.value as MlMeasureToolProps['unit']));\n  };\n  return <>\n            <Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Measure Tool'}>\n                <div style={{\n        width: '200px',\n        position: 'absolute',\n        zIndex: 105\n      }}>\n                    <Select name={'units'} onChange={handleChange} label={'Unit for measurement'} defaultValue={'kilometers'}>\n                        <MenuItem value={'kilometers'}> Kilometers</MenuItem>\n                        <MenuItem value={'miles'}> Miles</MenuItem>\n                    </Select>\n                    <Grid container style={{\n          textAlign: 'left',\n          alignItems: 'center'\n        }}>\n                        <StraightenOutlinedIcon />\n                        <h4 style={{\n            margin: '0px'\n          }}>Measure Line</h4>\n                    </Grid>\n\n                    <Box m={2} style={{\n          textAlign: 'left'\n        }}>\n                        Length: <MlMeasureTool measureType={'line'} unit={unit} />\n                    </Box>\n                </div>\n            </Sidebar>\n        </>;\n}",...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => {\n  const [openSidebar, setOpenSidebar] = useState(true);\n  const [unit, setUnit] = useState<MlMeasureToolProps['unit']>('kilometers');\n  const handleChange = (event: SelectChangeEvent<MlMeasureToolProps['unit']>) => {\n    setUnit((event.target.value as MlMeasureToolProps['unit']));\n  };\n  return <>\n            <Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Measure Tool'}>\n                <div style={{\n        width: '200px',\n        position: 'absolute',\n        zIndex: 105\n      }}>\n                    <Select name={'units'} onChange={handleChange} label={'Unit for measurement'} defaultValue={'kilometers'}>\n                        <MenuItem value={'kilometers'}>Kilometers</MenuItem>\n                        <MenuItem value={'miles'}>Miles</MenuItem>\n                    </Select>\n                    <Grid container style={{\n          textAlign: 'left',\n          alignItems: 'center'\n        }}>\n                        <SquareFootOutlinedIcon />\n                        <h4 style={{\n            margin: '0px'\n          }}>Measure Polygon</h4>\n                    </Grid>\n\n                    <Box m={2} style={{\n          textAlign: 'left'\n        }}>\n                        Area: <MlMeasureTool measureType={'polygon'} unit={unit} />\n                    </Box>\n                </div>\n            </Sidebar>\n        </>;\n}",...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => {\n  const [selectedTool, setSelectedTool] = useState<string>('area_measure');\n  const [anchorEl, setAnchorEl] = useState(null);\n  const open = Boolean(anchorEl);\n  const handleClick = (event: MouseEvent<any>) => {\n    setAnchorEl(event.currentTarget);\n  };\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n  const handleToolSelect = (tool: string) => {\n    setSelectedTool(tool);\n  };\n  return <>\n            <TopToolbar unmovableButtons={<>\n                        <Button id=\"basic-button\" variant=\"contained\" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup=\"true\" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>\n                            Tools\n                        </Button>\n                        <Menu id=\"basic-menu\" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{\n        'aria-labelledby': 'basic-button'\n      }}>\n                            <MenuItem onClick={() => handleToolSelect('area_measure')}>Measure Area</MenuItem>\n                            <MenuItem onClick={() => handleToolSelect('line_measure')}>Measure Distance</MenuItem>\n                        </Menu>\n                    </>} />\n            {selectedTool === 'area_measure' && <CTemplate />}\n            {selectedTool === 'line_measure' && <CLineTemplate />}\n        </>;\n}",...S.parameters?.docs?.source}}};const T=["MeasureLine","MeasurePolygon","CatalogueDemo"]},77477:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(96540),s=t(95532),a=t(32348),l=(t(18582),t(68704)),o=t(65793),i=t(30901),u=t(74848);const c=[function(e,n){var t,c=(0,r.useMemo)((function(){var e;return(0,i.A)(null==n||null===(e=n.globals)||void 0===e?void 0:e.theme)}),[null==n||null===(t=n.globals)||void 0===t?void 0:t.theme]);return(0,u.jsx)("div",{className:"fullscreen_map",children:(0,u.jsx)(s.mO,{children:(0,u.jsxs)(o.A,{theme:c,children:[(0,u.jsx)(e,{}),(0,u.jsx)(a.A,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,u.jsx)(l.A,{showZoomButtons:!1,mapId:"map_1"})]})})})}]}}]);