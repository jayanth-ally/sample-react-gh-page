(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,c){e.exports={movie:"Poster_movie__2NYOt",image:"Poster_image__2KYKC",hover_card:"Poster_hover_card__VpKiv"}},62:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(34),s=c.n(r),i=(c(40),c(41),c(62),c(10)),o=c(2),d="sample-react-gh-page",j=d+"/",l=d+"/products",b=d+"/movies",u=d+"/cart",h=c(0),p=function(){return Object(h.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{class:"container-fluid",children:[Object(h.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(h.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{class:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(i.b,{class:"nav-link active","aria-current":"page",to:j,children:"Home"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(i.b,{class:"nav-link",to:l,children:"Products"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(i.b,{class:"nav-link",to:b,children:"Movies"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(i.b,{class:"nav-link",to:u,children:"Cart"})})]}),Object(h.jsxs)("form",{class:"d-flex",children:[Object(h.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})},O=c(5),x=c(14),m=c.n(x),v=function(e){var t=e.title,c=e.image,n=e.year,a=e.imdbID;return Object(h.jsxs)("div",{className:m.a.movie,children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("a",{className:m.a.image,href:"https://imdb.com/title/".concat(a),target:"_blank",children:[Object(h.jsx)("img",{width:"200",alt:"Movie Poster",src:c}),Object(h.jsxs)("div",{className:m.a.hover_card,children:[Object(h.jsx)("h3",{children:a}),Object(h.jsx)("p",{children:n})]})]})]})},f=c(12),g=c.n(f),_=c(15),k=c(16),N=c.n(k),S=function(){var e=Object(_.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://www.omdbapi.com/?apikey=45f0782a&s=".concat(t));case 2:return c=e.sent,e.abrupt("return",c.data.hasOwnProperty("Search")?c.data.Search:[]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(_.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(_.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/".concat(t));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(O.a)(r,2),i=s[0],o=s[1],d=Object(n.useState)(!0),j=Object(O.a)(d,2),l=j[0],b=j[1];Object(n.useEffect)((function(){S("war").then((function(e){a(e),b(!1)}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"App-header",children:Object(h.jsx)("h2",{children:"Movies"})}),Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search Movies...",value:i,onChange:function(e){return function(e){o(e.target.value)}(e)}}),Object(h.jsx)("button",{className:"search-btn",onClick:function(){b(!0),S(i).then((function(e){a(e),b(!1),o("")}))},children:"Search"})]}),l?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsx)("div",{className:"movies",children:c.map((function(e,t){return Object(h.jsx)(v,{title:e.Title,year:e.Year,image:e.Poster,imdbID:e.imdbID},t)}))})]})},P=c(9),I=c.n(P),A=function(e){var t=e.id,c=e.name,n=e.brand,a=e.price,r=e.image,s=e.description;return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)(i.b,{to:"".concat(l,"/").concat(t),className:I.a.product_link,children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{src:r})}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsx)("h4",{children:n}),Object(h.jsxs)("h5",{children:["Rs ",a]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"description",children:s}),Object(h.jsx)("div",{className:"cart-btn",children:Object(h.jsx)("button",{className:"cart-btn",children:"Add to cart"})})]})})},D=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),s=Object(O.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){w().then((function(e){a(e),o(!1)}))}),[]),Object(h.jsx)(h.Fragment,{children:i?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsx)("div",{className:"card-container",children:c.map((function(e,t){return Object(h.jsx)(A,{id:e.id,name:e.name,brand:e.brand,price:e.price,image:e.preview,description:e.description},t)}))})})},F=(c(88),function(){return Object(h.jsx)("h1",{children:"Home Page"})}),L=function(){return Object(h.jsx)("h1",{children:"Cart page"})},M=function(e){var t=Object(n.useState)({}),c=Object(O.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!0),i=Object(O.a)(s,2),o=i[0],d=i[1],j=Object(n.useState)(0),l=Object(O.a)(j,2),b=l[0],u=l[1];Object(n.useEffect)((function(){var t=e.match.params.id;C(t).then((function(e){r(e),d(!1)}))}),[]);return o?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsxs)("section",{className:I.a.product,children:[Object(h.jsx)("div",{class:I.a.left_column,children:Object(h.jsx)("img",{id:"product-img",atl:"Product Image",src:a.photos[b]})}),Object(h.jsxs)("div",{class:I.a.right_column,children:[Object(h.jsxs)("div",{class:I.a.product_description,children:[Object(h.jsx)("h1",{id:"name",children:a.name}),Object(h.jsx)("h4",{id:"brand",children:a.brand}),Object(h.jsxs)("h3",{children:["Price: Rs ",Object(h.jsx)("span",{id:"price",children:a.price})]}),Object(h.jsxs)("div",{class:"description",children:[Object(h.jsx)("h3",{children:"Description"}),Object(h.jsx)("p",{id:"description",children:a.description})]}),Object(h.jsxs)("div",{class:"product-preview",children:[Object(h.jsx)("h3",{children:"Product Preview"}),Object(h.jsx)("div",{class:I.a.previewImg,children:a.photos.map((function(e,t){return Object(h.jsx)("img",{src:e,className:t===b?I.a.active:"",onClick:function(){return function(e){u(e)}(t)}},t)}))})]})]}),Object(h.jsx)("div",{class:I.a.btn,children:Object(h.jsx)("button",{id:"add-to-cart",children:"Add to Cart"})})]})]})},Y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(p,{}),Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:u,component:L}),Object(h.jsx)(o.b,{path:"sample-react-gh-page/products/:id",component:M}),Object(h.jsx)(o.b,{path:l,component:D}),Object(h.jsx)(o.b,{path:b,component:y}),Object(h.jsx)(o.b,{path:j,exact:!0,component:F}),Object(h.jsx)(o.a,{to:j})]})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),B()},9:function(e,t,c){e.exports={product_links:"product_product_links__Gjp6-",product:"product_product__1c22O",left_column:"product_left_column__BV-uk",right_column:"product_right_column__ZNqKx",product_description:"product_product_description__AA7YC",previewImg:"product_previewImg__2e9CB",active:"product_active__1XYnh",btn:"product_btn__1S_Z0"}}},[[89,1,2]]]);
//# sourceMappingURL=main.263f9c65.chunk.js.map