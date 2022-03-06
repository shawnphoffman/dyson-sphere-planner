(this["webpackJsonpdyson-sphere-planner"]=this["webpackJsonpdyson-sphere-planner"]||[]).push([[4],{84:function(e){e.exports=JSON.parse('["Component","Extraction","Foundation","Fuel","Liquid","Logistics","Material","Ore","Power","Production","Science","Special","Storage"]')},85:function(e,n,t){},86:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(14),s=t(3),r=t(42),i=t(20),o=t(6),l=t(71),j=t(84),d=t(18),b=t(31),h=function(e){var n=e.name,t=e.onClick;return Object(c.jsxs)(u,{onClick:function(){return t(n)},children:[n," ",Object(c.jsx)("i",{className:"fas fa-times fa-fw"})]})},O=Object(s.memo)(h),u=Object(r.a)("li")({name:"ListItem",class:"l486lp"});t(85);var m=function(e){var n=e.icon,t=e.label;return Object(c.jsxs)(p,{children:[Object(c.jsx)("i",{className:"fas ".concat(n," fa-fw")}),Object(c.jsxs)("span",{children:[" ",t]})]})},g=Object(s.memo)(m),p=Object(r.a)("div")({name:"HeaderWrapper",class:"h1yis0sr"});t(86);var f=function(e){var n=e.label,t=e.name,a=e.checked,s=e.onChange,r=e.hint;return Object(c.jsxs)(k,{children:[Object(c.jsx)("input",{id:t,name:t,type:"checkbox",checked:a,onChange:s}),Object(c.jsx)("label",{htmlFor:t,children:n}),r&&Object(c.jsx)(C,{children:r})]})},x=Object(s.memo)(f),k=Object(r.a)("div")({name:"InputContainer",class:"imsfucy"}),C=Object(r.a)("div")({name:"Hint",class:"h1v8fzsv"});t(87);var y=function(){var e=Object(s.useContext)(d.b),n=Object(a.a)(e,2),t=n[0],r=n[1],h=Object(s.useContext)(b.b),u=Object(a.a)(h,2),m=u[0],p=u[1],f=Object(s.useCallback)((function(){r({type:d.a.TOGGLE_SHORT_NAMES}),o.a({category:"setting-change",message:"Short names changed",level:l.a.Info}),i.track("Short_Names_Changed")}),[r]),k=Object(s.useCallback)((function(){p({type:b.a.TOGGLE_FRACTION}),o.a({category:"setting-change",message:"Fraction changed",level:l.a.Info}),i.track("Fraction_Changed")}),[p]),C=Object(s.useCallback)((function(){r({type:d.a.TOGGLE_LEFT_MARGIN}),o.a({category:"setting-change",message:"Left-margin changed",level:l.a.Info}),i.track("Left-Margin_Changed")}),[r]),y=Object(s.useCallback)((function(){r({type:d.a.TOGGLE_ONE_PER_PAGE}),o.a({category:"setting-change",message:"One-per-page changed",level:l.a.Info}),i.track("One-Page_Changed")}),[r]),T=Object(s.useCallback)((function(e){r({type:d.a.RETURN_PRODUCT,name:e}),o.a({category:"product-returned",message:"Returned: ".concat(e),level:l.a.Info}),i.track("Product-".concat(e.replace(/\s+/g,"-"),"_Returned"))}),[r]),L=Object(s.useCallback)((function(e,n){r({type:n?d.a.HIDE_TYPE:d.a.SHOW_TYPE,name:e}),i.track("Type-".concat(e,"_").concat(n?"Hidden":"Shown"))}),[r]),E=Object(s.useCallback)((function(){r({type:d.a.RETURN_ALL_PRODUCTS}),o.a({category:"all-products-returned",message:"Returned all products",level:l.a.Info}),i.track("All-Products_Returned")}),[r]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{icon:"fa-cog",label:"Settings"}),Object(c.jsx)(x,{label:"Use Fractions",name:"fractions",checked:m.checked,onChange:k,hint:"Conversions are hard"}),Object(c.jsx)(x,{label:"Short Names",name:"names",checked:t.shortNames,onChange:f,hint:"Alternative items names"}),Object(c.jsxs)(S,{children:[Object(c.jsx)(x,{label:"Pad Left Margin",name:"leftMargin",checked:t.padLeftMargin,onChange:C,hint:"To account for punched holes"}),Object(c.jsx)(x,{label:"One Recipe Per Page",name:"onePerPage",checked:t.onePerPage,onChange:y,hint:"Waste ALL the paper"})]})]}),Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{icon:"fa-check-circle",label:"Categories"}),j.map((function(e){return Object(c.jsx)(x,{label:e,name:"cat-".concat(e),checked:!t.hiddenTypes.includes(e),onChange:function(){return L(e,!t.hiddenTypes.includes(e))}},e)}))]}),t.removedProducts.length>0&&Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{icon:"fa-filter",label:"Filtered Items"}),Object(c.jsx)(_,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)(P,{onClick:E,children:"Reset All"}),t.removedProducts.map((function(e){return Object(c.jsx)(O,{name:e,onClick:T},e)}))]})})]}),Object(c.jsx)(S,{children:Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{icon:"fa-print",label:"Print Settings"}),Object(c.jsx)(_,{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Margins:"})," None"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Scale:"})," 100"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("strong",{children:"Background Graphics:"})," \u2705\ufe0f"]})]})})]})}),Object(c.jsxs)(R,{children:["Assets come from Dyson Sphere Program or from websites created and owned by Youthcat Studio. All copyright and registered trademarks present in the images are proprietary to Youthcat Studio."," ",Object(c.jsx)("a",{href:"https://store.steampowered.com/app/1366540/Dyson_Sphere_Program/",target:"_blank",rel:"noreferrer",children:"You should buy the game if you don't own it already."})]})]})},v=(n.default=Object(s.memo)(y),Object(r.a)("div")({name:"SidebarSection",class:"sj7l98v"})),_=Object(r.a)("div")({name:"SectionContent",class:"syic5n5"}),P=Object(r.a)("li")({name:"Reset",class:"rhm2cnn"}),S=Object(r.a)("div")({name:"HideMobile",class:"h134rfnz"}),R=Object(r.a)("div")({name:"Disclaimer",class:"d1q5z91p"});t(88)}}]);
//# sourceMappingURL=4.0f9c2e7e.chunk.js.map