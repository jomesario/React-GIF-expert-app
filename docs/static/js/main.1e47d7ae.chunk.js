(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),l=(n(14),n(1)),i=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)("Agregue una categor\xeda"),c=Object(l.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Submit hecho"),u.trim().length>2&&(t((function(e){return[u].concat(Object(i.a)(e))})),o(""))}},r.a.createElement("h2",null,"Add Category"),r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)},onFocus:function(e){o("")}}))},s=n(4),m=n.n(s),p=n(7),f=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=s1m2CcH9qXKItVHBKg64NIu2Smy3W3ok&q=".concat(encodeURI(t),"&limit=15&rating=R"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return console.log(e),r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:e.url,alt:e.title}),r.a.createElement("p",null,e.title))},d=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,u=n.loading;return console.log(u),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",null,"Cargando..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["One Punch"]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Gif Expert App"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(d,{category:e,key:e})}))))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1e47d7ae.chunk.js.map