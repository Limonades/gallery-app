(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),l=(n(27),n(7)),u=n(2),i=n(20),s=n(11),p={result:null,isLoading:!0},d={result:null,isLoading:!1},h=Object(u.c)({selectReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALBUMS":return Object(s.a)({},e,{result:t.payload});case"DATA_IS_LOADING":return Object(s.a)({},e,{isLoading:t.payload});default:return e}},photoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PHOTOS":return Object(s.a)({},e,{result:t.payload});case"DATA_PHOTOS_IS_LOADING":return Object(s.a)({},e,{isLoading:t.payload});default:return e}}}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,m=Object(u.e)(h,f(Object(u.a)(i.a))),v=n(21),b=n.n(v),g=n(4),O=n(5),y=n(8),j=n(6),E=n(9),_=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){var t=n.props.fetchDataPhotos;console.log(e.target.value),t(e.target.value)},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.albums,n=e.loader;return a.createElement("div",null,a.createElement("h1",null,"Albums"),a.createElement("select",{onChange:this.handleChange},a.createElement("option",null,"Albums"),t?t.map(function(e){return a.createElement("option",{value:e.id,key:e.id},"$",e.title)}):a.createElement("option",null,"Soething went wrong")),n?a.createElement("span",{style:{color:"white",display:"block"}},"Loading..."):null)}}]),t}(a.Component),w=n(10),A=n.n(w),L=n(13),D=function(e){return{type:"FETCH_ALBUMS",payload:e}},k=function(e){return{type:"DATA_PHOTOS_IS_LOADING",payload:e}},S=function(e){return{type:"FETCH_PHOTOS",payload:e}},T=function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.fetchDataAlbums)()}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"render",value:function(){console.log("render");var e=this.props,t=e.albums,n=e.isLoading,o=e.fetchDataPhotos;return a.createElement("div",{className:"request-panel"},a.createElement(_,{albums:t,loader:n,fetchDataPhotos:o}))}}]),t}(a.Component),C=Object(l.b)(function(e){return{albums:e.selectReducer.result,isLoading:e.selectReducer.isLoading,photos:e.photoReducer.result,isPhotosLoading:e.photoReducer.isLoading}},function(e){return{fetchDataAlbums:function(){e(function(){var e=Object(L.a)(A.a.mark(function e(t){var n;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/albums").then(function(e){return e.json()});case 3:n=e.sent,t(D(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,t({type:"DATA_IS_LOADING",payload:!1}),e.finish(10);case 13:case"end":return e.stop()}},e,null,[[0,7,10,13]])}));return function(t){return e.apply(this,arguments)}}())},fetchDataPhotos:function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(L.a)(A.a.mark(function t(n){var a;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n(k(!0)),t.prev=2,t.next=5,fetch("https://jsonplaceholder.typicode.com/photos?albumId=".concat(e)).then(function(e){return e.json()});case 5:a=t.sent,console.log(a),n(S(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:return t.prev=13,n(k(!1)),t.finish(13);case 16:case"end":return t.stop()}},t,null,[[2,10,13,16]])}));return function(e){return t.apply(this,arguments)}}()}())}}})(T),I=(n(33),function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.photos,n=e.isLoading;return console.log(t),a.createElement("div",{className:"container result-panel__container"},n?a.createElement("div",{className:"loader"}):null,t?t.map(function(e){return a.createElement("div",{className:"result-panel__card"},a.createElement("picture",null,a.createElement("img",{src:e.thumbnailUrl,alt:e.title})),a.createElement("p",null,e.title))}):null)}}]),t}(a.Component)),N=Object(l.b)(function(e){return{photos:e.photoReducer.result,isLoading:e.photoReducer.isLoading}},null)(I);n(34);var P=function(){return o.a.createElement(l.a,{store:m},o.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),o.a.createElement(C,null),o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.237f1a9d.chunk.js.map