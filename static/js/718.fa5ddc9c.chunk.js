"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[718,198],{198:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(501),a=r(6871),c=r(638),u="MovieItem_item__iPuYx",s="MovieItem_image__wpzZX",i="MovieItem_text__C1V2s",o=r(184);var f=function(e){var t=e.movie,r=(0,a.TH)();return(0,o.jsx)("li",{className:u,children:(0,o.jsxs)(n.rU,{to:"/movies/".concat(t.id),state:{from:r},children:[(0,o.jsx)("img",{className:s,src:t.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path):c,alt:t.original_title}),(0,o.jsx)("p",{className:i,children:t.original_title})]})})},p="MoviesList_movieCards__sExt4";var l=function(e){var t=e.moviesList;return(0,o.jsx)("ul",{className:p,children:t.map((function(e){return(0,o.jsx)(f,{movie:e},e.id)}))})}},8718:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(5861),a=r(885),c=r(7757),u=r.n(c),s=r(2791),i=r(501),o=r(367),f="Searchbar_form__D-hp5",p="Searchbar_input__19umw",l="Searchbar_button__nkcjk",v=r(184);var m=function(e){var t=e.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),c=n[0],u=n[1],i=(0,s.useRef)(null),o=function(){u("")};return(0,v.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault();var r=c.trim();if(""===r)return i.current.focus(),i.current.placeholder="Please enter some movie title",void o();i.current.placeholder="Enter movie title",t(r),o()},children:[(0,v.jsx)("input",{ref:i,className:p,name:"searchQuery",value:c,type:"text",autoComplete:"off",placeholder:"Enter movie title",autoFocus:!0,onInput:function(e){var t=e.target,r=(t.name,t.value);u(r)}}),(0,v.jsx)("button",{className:l,type:"submit",children:"Search"})]})},d=r(198),h=r(7656),_=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],f=(0,s.useState)(null),p=(0,a.Z)(f,2),l=p[0],_=p[1],x=(0,i.lr)(),b=(0,a.Z)(x,2),y=b[0],g=b[1],w=(0,s.useState)(!1),k=(0,a.Z)(w,2),j=k[0],Z=k[1];(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,o.r.fetchByQuery(r);case 4:t=e.sent,_(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}y.get("query")&&c(y.get("query")),r&&function(){e.apply(this,arguments)}()}),[r,y]);return(0,v.jsxs)("main",{children:[(0,v.jsx)(m,{onSubmit:function(e){""!==e&&e!==y.get("query")&&(c(e),g(""!==e?{query:e}:{}))}}),j&&(0,v.jsx)(h.Z,{}),l&&!j&&(0,v.jsx)(d.default,{moviesList:l})]})}},367:function(e,t,r){r.d(t,{r:function(){return o}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="d753c7c06260672f2cde39e68c02f927",o={fetchTrending:function(){return(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},fetchByQuery:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchCastById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},fetchReviewsById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}}},638:function(e,t,r){e.exports=r.p+"static/media/noposter.4be44f1b6a2a14ed503d.jpg"}}]);
//# sourceMappingURL=718.fa5ddc9c.chunk.js.map