(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),i=a(16),p=a.n(i),o=a(17),r=a(5),s=(a(23),a(3)),u=a.n(s);var j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],p=Object(c.useState)(""),s=Object(r.a)(p,2),j=s[0],l=s[1],h=Object(c.useState)([]),b=Object(r.a)(h,2),d=b[0],z=b[1],O=Object(c.useState)(""),m=Object(r.a)(O,2),f=m[0],x=m[1];return Object(c.useEffect)((function(){u.a.get("https://polar-reaches-50550.herokuapp.com/api/get").then((function(e){z(e.data)}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Rezan"}),Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("label",{children:"Pizzanamn"}),Object(n.jsx)("input",{type:"text",name:"pizzaName",onChange:function(e){i(e.target.value)}}),Object(n.jsx)("label",{children:"Pizzapris"}),Object(n.jsx)("input",{type:"text",name:"pizzaPrice",onChange:function(e){l(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){u.a.post("https://polar-reaches-50550.herokuapp.com/api/insert",{pizzaName:a,pizzaPrice:j}),z([].concat(Object(o.a)(d),[{pizzaName:a,pizzaPrice:j}]))},children:"Spara"}),d.map((function(e){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("h1",{children:e.pizzaName}),Object(n.jsx)("p",{children:e.pizzaPrice}),Object(n.jsx)("button",{onClick:function(){var t;t=e.pizzaName,u.a.delete("https://polar-reaches-50550.herokuapp.com/api/delete/".concat(t)),window.location.reload()},children:"Delete"}),Object(n.jsx)("input",{type:"text",id:"updateInput",onChange:function(e){x(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){var t;t=e.pizzaName,u.a.put("https://polar-reaches-50550.herokuapp.com/api/update/",{pizzaName:t,pizzaPrice:f}),x(""),window.location.reload()},children:"Update"})]})}))]})]})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,p=t.getTTFB;a(e),n(e),c(e),i(e),p(e)}))};p.a.render(Object(n.jsx)(j,{}),document.getElementById("root")),l()}},[[42,1,2]]]);
//# sourceMappingURL=main.4a1c5ef4.chunk.js.map