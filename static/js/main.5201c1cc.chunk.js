(this["webpackJsonpdyson-sphere-planner"]=this["webpackJsonpdyson-sphere-planner"]||[]).push([[0],{29:function(e,n,a){"use strict";a.d(n,"a",(function(){return l})),a.d(n,"b",(function(){return m}));var i=a(1),t=a(17),r=a(28),o=a(5),c=a(3),d={padLeftMargin:!1,onePerPage:!0,removedProducts:[],hiddenTypes:[]},l={TOGGLE_LEFT_MARGIN:"TOGGLE_LEFT_MARGIN",TOGGLE_ONE_PER_PAGE:"TOGGLE_ONE_PER_PAGE",REMOVE_PRODUCT:"REMOVE_PRODUCT",RETURN_PRODUCT:"RETURN_PRODUCT",RETURN_ALL_PRODUCTS:"RETURN_ALL_PRODUCTS",HIDE_TYPE:"HIDE_TYPE",SHOW_TYPE:"SHOW_TYPE"},m=Object(c.createContext)(d),s=function(e,n){switch(n.type){case l.TOGGLE_LEFT_MARGIN:return Object(o.a)(Object(o.a)({},e),{},{padLeftMargin:!e.padLeftMargin});case l.TOGGLE_ONE_PER_PAGE:return Object(o.a)(Object(o.a)({},e),{},{onePerPage:!e.onePerPage});case l.REMOVE_PRODUCT:return Object(o.a)(Object(o.a)({},e),{},{removedProducts:[].concat(Object(r.a)(e.removedProducts),[n.name])});case l.RETURN_PRODUCT:return Object(o.a)(Object(o.a)({},e),{},{removedProducts:e.removedProducts.filter((function(e){return!(e===n.name)}))});case l.RETURN_ALL_PRODUCTS:return Object(o.a)(Object(o.a)({},e),{},{removedProducts:[]});case l.HIDE_TYPE:return Object(o.a)(Object(o.a)({},e),{},{hiddenTypes:[].concat(Object(r.a)(e.hiddenTypes),[n.name])});case l.SHOW_TYPE:return Object(o.a)(Object(o.a)({},e),{},{hiddenTypes:e.hiddenTypes.filter((function(e){return!(e===n.name)}))});default:return e}};n.c=function(e){var n=e.children,a=Object(c.useReducer)(s,d),r=Object(t.a)(a,2),o=r[0],l=r[1];return Object(i.jsx)(m.Provider,{value:[o,l],children:n})}},30:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return l}));var i=a(1),t=a(17),r=a(5),o=a(3),c={fractions:!1},d={TOGGLE_FRACTION:"TOGGLE_FRACTION"},l=Object(o.createContext)(c),m=function(e,n){switch(n.type){case d.TOGGLE_FRACTION:return Object(r.a)(Object(r.a)({},e),{},{fractions:!e.fractions});default:return e}};n.c=function(e){var n=e.children,a=Object(o.useReducer)(m,c),r=Object(t.a)(a,2),d=r[0],s=r[1];return Object(i.jsx)(l.Provider,{value:[d,s],children:n})}},31:function(e,n,a){"use strict";var i=a(1),t=a(3),r=a(42),o=Object(r.a)("div")({name:"Cog",class:"cjcb7tw"}),c=Object(r.a)("span")({name:"Wrapper",class:"w1kp9yj6"}),d=function(){return Object(i.jsxs)(c,{children:[Object(i.jsx)(o,{children:Object(i.jsx)("i",{className:"fad fa-cog fa-spin fa-lg"})}),Object(i.jsx)("div",{children:"Loading..."})]})};n.a=Object(t.memo)(d),a(56)},37:function(e){e.exports=JSON.parse('[{"id":"Accumulator","name":"Accumulator"},{"id":"Accumulator_Full","name":"Accumulator (Full)"},{"id":"Advanced_Mining_Machine","name":"Adv. Mining Machine"},{"id":"Annihilation_Constraint_Sphere","name":"Annihilation Constraint Sphere"},{"id":"Anti_Matter","name":"Antimatter"},{"id":"Antimatter_Fuel_Rod","name":"Antimatter Fuel Rod"},{"id":"Artificial_Star","name":"Artificial Star"},{"id":"Assembling_Machine_Mk1","name":"Assembler MK I"},{"id":"Assembling_Machine_Mk2","name":"Assembler MK II"},{"id":"Assembling_Machine_Mk3","name":"Assembler MK III"},{"id":"Automatic_Piler","name":"Automatic Piler"},{"id":"C_Matrix","name":"Structure Matrix"},{"id":"Carbon_Nanotube","name":"Carbon Nanotube"},{"id":"Casimir_Crystal","name":"Casimir Crystal"},{"id":"Chemical_Plant","name":"Chemical Plant"},{"id":"Circuit_Board","name":"Circuit Board"},{"id":"ConveyorBeltMk1","name":"Conveyor Belt MK I"},{"id":"ConveyorBeltMk2","name":"Conveyor Belt MK II"},{"id":"ConveyorBeltMk3","name":"Conveyor Belt MK III"},{"id":"Copper_Ingot","name":"Copper Ingot"},{"id":"Crystal_Rubber","name":"Organic Crystal"},{"id":"Crystal_Silicon","name":"Crystal Silicon"},{"id":"Deuterium","name":"Deuterium"},{"id":"Deuterium_Fuel_Rod","name":"Deuteron Fuel Rod"},{"id":"Diamond","name":"Diamond"},{"id":"Dyson_Sphere_Component","name":"Dyson Sphere Component"},{"id":"EM-Rail_Ejector","name":"Em-Rail Ejector"},{"id":"E_Matrix","name":"Energy Matrix"},{"id":"Electric_Motor","name":"Electric Motor"},{"id":"Electromagnetic_Turbine","name":"Electromagnetic Turbine"},{"id":"Energetic_Graphite","name":"Energetic Graphite"},{"id":"Energy_Exchanger","name":"Energy Exchanger"},{"id":"Foundation","name":"Foundation"},{"id":"Fractionator","name":"Fractionator"},{"id":"Frame_Material","name":"Frame Material"},{"id":"G_Matrix","name":"Gravity Matrix"},{"id":"Gear","name":"Gear"},{"id":"Geothermal_Power_Station","name":"Geothermal Power Station"},{"id":"Glass","name":"Glass"},{"id":"Graphene","name":"Graphene"},{"id":"Graviton_Lens","name":"Graviton Lens"},{"id":"High-Purity_Silicon","name":"High-Purity Silicon"},{"id":"Hydrogen","name":"Hydrogen"},{"id":"Hydrogen_Fuel_Rod","name":"Hydrogen Fuel Rod"},{"id":"I_Matrix","name":"Information Matrix"},{"id":"Interstellar_Logistic_Station","name":"Interstellar Logistics Station"},{"id":"Iron_Ingot","name":"Iron Ingot"},{"id":"Logistic_Vessel","name":"Logistics Vessel"},{"id":"Logistics_Drone","name":"Logistics Drone"},{"id":"Magnet","name":"Magnet"},{"id":"Magnetic_Coil","name":"Magnetic Coil"},{"id":"Matrix_Lab","name":"Matrix Lab"},{"id":"Microcrystalline_Component","name":"Microcrystalline Component"},{"id":"Mini_Fusion_Power_Station","name":"Mini Fusion Power Plant"},{"id":"Miniature_Particle_Collider","name":"Miniature Particle Collider"},{"id":"Mining_Machine","name":"Mining Machine"},{"id":"Oil_Extractor","name":"Oil Extractor"},{"id":"Orbital_Collector","name":"Orbital Collector"},{"id":"Particle_Broadband","name":"Particle Broadband"},{"id":"Particle_Container","name":"Particle Container"},{"id":"Photon_Combiner","name":"Photon Combiner"},{"id":"Plane_Filter","name":"Plane Filter"},{"id":"Plane_Smelter","name":"Smelter"},{"id":"Planetary_Logistics_Station","name":"Planetary Logistics Station"},{"id":"Plasma_Exciter","name":"Plasma Exciter"},{"id":"Plastic","name":"Plastic"},{"id":"Prism","name":"Prism"},{"id":"Processor","name":"Processor"},{"id":"ProliferatorMk1","name":"Proliferator MK I"},{"id":"ProliferatorMk2","name":"Proliferator MK II"},{"id":"ProliferatorMk3","name":"Proliferator MK III"},{"id":"Quantum_Chip","name":"Quantum Chip"},{"id":"Ray_Receiver","name":"Ray Receiver"},{"id":"Refined_Oil","name":"Refined Oil"},{"id":"Refinery","name":"Oil Refinery"},{"id":"Reinforced_Thruster","name":"Reinforced Thruster"},{"id":"Satellite_Substation","name":"Satellite Substation"},{"id":"Silicon_Ore","name":"Silicon Ore"},{"id":"Small_Carrier_Rocket","name":"Small Carrier Rocket"},{"id":"Smelter","name":"Smelter"},{"id":"Solar_Panel","name":"Solar Panel"},{"id":"Solar_Sail","name":"Solar Sail"},{"id":"SorterMk1","name":"Sorter MK I"},{"id":"SorterMk2","name":"Sorter MK II"},{"id":"SorterMk3","name":"Sorter MK III"},{"id":"Space_Warper","name":"Space Warper"},{"id":"Splitter","name":"Splitter"},{"id":"Spray_Coater","name":"Spray Coater"},{"id":"Steel","name":"Steel"},{"id":"Stone","name":"Stone Brick"},{"id":"StorageMk1","name":"Storage MK I"},{"id":"StorageMk2","name":"Storage MK II"},{"id":"StorageTank","name":"Storage Tank"},{"id":"Strange_Matter","name":"Strange Matter"},{"id":"Sulphuric_Acid","name":"Sulfuric Acid"},{"id":"Super-magnetic_Ring","name":"Super-Magnetic Ring"},{"id":"T_Matrix","name":"Electromagnetic Matrix"},{"id":"Tesla_Tower","name":"Tesla Tower"},{"id":"Thermal_Power_Station","name":"Thermal Power Plant"},{"id":"Thruster","name":"Thruster"},{"id":"Titanium_Alloy","name":"Titanium Alloy"},{"id":"Titanium_Crystal","name":"Titanium Crystal"},{"id":"Titanium_Glass","name":"Titanium Glass"},{"id":"Titanium_Ingot","name":"Titanium Ingot"},{"id":"Traffic_Monitor","name":"Traffic Monitor"},{"id":"U_Matrix","name":"Universe Matrix"},{"id":"Vertical_Launching_Silo","name":"Vertical Launching Silo"},{"id":"Water_Pump","name":"Water Pump"},{"id":"Wind_Turbine","name":"Wind Turbine"},{"id":"Wireless_Power_Tower","name":"Wireless Power Tower"}]')},49:function(e,n,a){},55:function(e,n,a){},56:function(e,n,a){},57:function(e,n,a){},58:function(e,n,a){},62:function(e,n,a){},63:function(e,n,a){"use strict";a.r(n);var i=a(1),t=(a(49),a(3)),r=a.n(t),o=a(36),c=a.n(o),d=a(19),l=a(72),m=a(40),s=a(42),u=a(68),_=Object(s.a)("div")({name:"Wrapper",class:"w148a0a2"}),b=Object(s.a)("div")({name:"Hero",class:"h1ku9fu"}),O=function(){return Object(i.jsxs)(_,{children:[Object(i.jsx)(b,{children:"Oh no!!!"}),Object(i.jsx)("h1",{children:"Something went wrong"}),Object(i.jsx)("div",{children:"Please reload the page to try again."})]})},j=Object(t.memo)(O);a(55);var g=a(31),h=a(37),P=function(){return Object(i.jsx)(M,{children:h.map((function(e){return Object(i.jsx)(S,{children:Object(i.jsx)("a",{href:"#".concat(e.id),children:e.name})},e.id)}))})},M=Object(s.a)("div")({name:"ScrollContainer",class:"s1c9xt93"}),S=Object(s.a)("div")({name:"ScrollItem",class:"s192wxfr"}),f=Object(t.memo)(P);a(57);var p=Object(t.lazy)((function(){return a.e(4).then(a.bind(null,91))})),T=function(){return Object(i.jsxs)(E,{children:[Object(i.jsx)("div",{children:Object(i.jsx)(R,{src:"".concat("https://d1ba7e9b4ql0yd.cloudfront.net/dsp/","logo.png"),alt:"",width:"260",height:"90"})}),Object(i.jsx)(r.a.Suspense,{fallback:Object(i.jsx)("div",{}),children:Object(i.jsx)(p,{})})]})},C=Object(t.memo)(T),E=Object(s.a)("div")({name:"SidebarWrapper",class:"s1n6cg30"}),R=Object(s.a)("img")({name:"Logo",class:"lif3zm0"});a(58);var x=a(29),y=a(30),I=Object(t.lazy)((function(){return a.e(3).then(a.bind(null,90))}));function v(){return Object(i.jsx)(u.a,{fallback:Object(i.jsx)(j,{}),showDialog:!0,children:Object(i.jsx)(x.c,{children:Object(i.jsx)(y.c,{children:Object(i.jsx)(r.a.Profiler,{id:"App",children:Object(i.jsxs)(A,{children:[Object(i.jsx)(C,{}),Object(i.jsx)(G,{}),Object(i.jsx)(f,{})]})})})})})}var G=function(){return Object(i.jsx)(r.a.Suspense,{fallback:Object(i.jsx)(g.a,{}),children:Object(i.jsx)(I,{})})},L=Object(t.memo)(v),A=Object(s.a)("div")({name:"FlexRows",class:"fm0as6w"});a(62);var k=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,89)).then((function(n){var a=n.getCLS,i=n.getFID,t=n.getFCP,r=n.getLCP,o=n.getTTFB;a(e),i(e),t(e),r(e),o(e)}))};l.a({dsn:"https://e7d0890ef4754095b32e01468031ae14@o508348.ingest.sentry.io/5758149",autoSessionTracking:!0,environment:"production",integrations:[new m.a.BrowserTracing],tracesSampleRate:1}),d.load("Cs0I0ponBy7"),d.trackPageview(),d.track("PageLoad"),c.a.unstable_createRoot(document.getElementById("root")).render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(L,{})})),k(console.log)}},[[63,1,2]]]);
//# sourceMappingURL=main.5201c1cc.chunk.js.map