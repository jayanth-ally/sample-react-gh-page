(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(18),s=n.n(r),i=(n(25),n(3)),o=n(4),h=n(6),d=n(5),l=n(7),u=n.n(l),j=n(0),b=function(e){var t=e.title,n=e.image,c=e.year,a=e.imdbID;return Object(j.jsxs)("div",{className:u.a.movie,children:[Object(j.jsx)("h3",{children:t}),Object(j.jsxs)("a",{className:u.a.image,href:"https://imdb.com/title/".concat(a),target:"_blank",children:[Object(j.jsx)("img",{width:"200",alt:"Movie Poster",src:n}),Object(j.jsxs)("div",{className:u.a.hover_card,children:[Object(j.jsx)("h3",{children:a}),Object(j.jsx)("p",{children:c})]})]})]})},m=(c.Component,function(e){var t=e.count,n=e.increment,c=e.decrement;return Object(j.jsxs)("div",{className:"counter",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)("button",{onClick:c,children:"-"}),Object(j.jsx)("button",{onClick:n,children:"+"})]})]})}),v=n(9),p=n.n(v),x=n(19),O=n(20),f=n.n(O),g=function(){var e=Object(x.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.omdbapi.com/?apikey=45f0782a&s=".concat(t));case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data.hasOwnProperty("Search")?n.data.Search:[]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(n(46),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).onSearchTextChanged=function(e){c.setState({searchText:e.target.value})},c.fetchMovies=function(){c.setState({loader:!0}),g(c.state.searchText).then((function(e){c.setState({movieList:e,loader:!1,searchText:""})}))},c.state={movieList:[],searchText:"",loader:!0},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;g("war").then((function(t){e.setState({movieList:t,loader:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.movieList,c=t.loader,a=t.searchText;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App-header",children:Object(j.jsx)("h2",{children:"Movies"})}),Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("input",{type:"text",placeholder:"Search Movies...",value:a,onChange:function(t){return e.onSearchTextChanged(t)}}),Object(j.jsx)("button",{className:"search-btn",onClick:this.fetchMovies,children:"Search"})]}),c?Object(j.jsx)("h1",{children:"Loading..."}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e,t){return Object(j.jsx)(b,{title:e.Title,year:e.Year,image:e.Poster,imdbID:e.imdbID},t)}))})]})}}]),n}(c.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),C()},7:function(e,t,n){e.exports={movie:"Poster_movie__2NYOt",image:"Poster_image__2KYKC",hover_card:"Poster_hover_card__VpKiv"}}},[[47,1,2]]]);
//# sourceMappingURL=main.fb8f31a2.chunk.js.map