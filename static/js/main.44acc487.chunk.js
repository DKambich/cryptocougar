(this.webpackJsonpcryptocougar=this.webpackJsonpcryptocougar||[]).push([[0],{233:function(e,t,n){e.exports={root:"Trending_root__2TbwI",graph:"Trending_graph__xyP4S",cardContainer:"Trending_cardContainer__3_TQ_"}},263:function(e,t,n){e.exports={root:"Browse_root__2MSI8",search:"Browse_search__2WAQT"}},501:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),c=n.n(a),i=n(66),o=n.n(i),s=n(82),l=(n(380),n(25)),u=n(344),d=n(23),j=n(47),b=n(538),h=n(26),p=n(550),O=n(140),g=n(541),x=n(263),m=n.n(x),f=n(548),v=n(343),y=n(543),w=n(542),C=n(547),k=[{title:"Home",icon:"home",link:"/home"},{title:"Browse",icon:"search",link:"/browse"},{title:"Trending",icon:"chart line",link:"/trending"}],_=[{title:"Favorites",icon:"star",link:"/favorites"},{title:"Profile",icon:"user circle",link:"/profile"},{title:"Logout",icon:"sign-out",link:"/logout"}],I=[{title:"Login",icon:"sign-in",link:"/login"},{title:"Sign Up",icon:"add user",link:"/signup"}],S=function(e){var t=e.mobile,n=e.desktop;return Object(r.jsxs)(f.a,{children:[Object(r.jsx)(f.a.Row,{only:"tablet mobile",children:Object(r.jsx)(f.a.Column,{children:t})}),Object(r.jsx)(f.a.Row,{only:"computer",children:Object(r.jsx)(f.a.Column,{children:n})})]})},T=function(e){if(e.loggedIn){var t=Object(r.jsxs)("span",{children:[Object(r.jsx)(v.a,{src:"https://picsum.photos/200",avatar:!0,style:{marginRight:".5em"}}),"John Smith"]});return Object(r.jsx)(y.a.Menu,{position:"right",children:Object(r.jsx)(w.a,{item:!0,trigger:t,children:Object(r.jsx)(w.a.Menu,{children:_.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(w.a.Item,{as:j.b,to:a,children:[Object(r.jsx)(O.a,{name:n}),t]},t)}))})})})}return Object(r.jsx)(y.a.Item,{position:"right",children:I.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(C.a,{animated:"fade",style:{marginLeft:".25em",marginRight:".25em"},as:j.b,to:a,children:[Object(r.jsx)(C.a.Content,{visible:!0,children:t}),Object(r.jsx)(C.a.Content,{hidden:!0,children:Object(r.jsx)(O.a,{name:n})})]},t)}))})},R=function(e){var t=e.loggedIn?_:I;return Object(r.jsx)(r.Fragment,{children:t.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(w.a.Item,{as:j.b,to:a,children:[Object(r.jsx)(O.a,{name:n}),t]},t)}))})},L=function(e){var t=e.loggedIn;return Object(r.jsx)(y.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(w.a,{item:!0,icon:"sidebar",children:Object(r.jsxs)(w.a.Menu,{style:{width:"100vw"},children:[k.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(w.a.Item,{as:j.b,to:a,children:[Object(r.jsx)(O.a,{name:n}),t]},t)})),Object(r.jsx)(R,{loggedIn:t})]})}),Object(r.jsxs)(y.a.Item,{as:j.b,to:"/about",header:!0,style:{flexGrow:1},children:[Object(r.jsx)(v.a,{avatar:!0,src:"/CryptoCougar/logo.png",style:{marginRight:".5em"}}),"CryptoCougar"]})]})})},F=function(e){var t=e.loggedIn;return Object(r.jsx)(y.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(y.a.Item,{as:j.b,to:"/about",header:!0,children:[Object(r.jsx)(v.a,{size:"mini",src:"/CryptoCougar/logo.png",style:{marginRight:".5em"}}),"CryptoCougar"]}),k.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(y.a.Item,{as:j.b,to:a,children:[Object(r.jsx)(O.a,{name:n}),t]},t)})),Object(r.jsx)(T,{loggedIn:t})]})})};var N=function(){return Object(r.jsx)(S,{mobile:Object(r.jsx)(L,{loggedIn:true}),desktop:Object(r.jsx)(F,{loggedIn:true})})},E=n(546);var H=function(e){var t=e.title,n=e.message,a=e.retryText,c=void 0===a?"Retry":a,i=e.onRetry;return Object(r.jsxs)(E.a,{negative:!0,children:[Object(r.jsx)(E.a.Header,{children:t}),Object(r.jsx)("p",{children:n}),Object(r.jsx)(C.a,{negative:!0,onClick:i,children:c})]})},M=n(16),B=n.n(M),D=n(108),P="BROWSE_COINS_START_FETCH",A="BROWSE_COINS_FAIL_FETCH",z="BROWSE_COINS_FINISH_FETCH";function Y(e){return{type:z,payload:e}}function W(){return G.apply(this,arguments)}function G(){return(G=Object(D.a)(B.a.mark((function e(){var t,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/list");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=Object(s.b)((function(e){var t=e.browse;return{coins:t.data,error:t.error,loading:t.isLoading}}),(function(e){return{getCoins:function(){return e(function(){var e=Object(D.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:P}),e.prev=1,e.next=4,W();case 4:n=e.sent,t(Y(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((r=e.t0,{type:A,payload:r}));case 11:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.loading,n=e.coins,c=e.error,i=e.getCoins,o=Object(a.useState)([]),s=Object(h.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),x=Object(h.a)(d,2),f=x[0],v=x[1];return Object(a.useEffect)((function(){i()}),[i]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(b.a,{className:m.a.root,children:[Object(r.jsxs)(p.a,{textAlign:"center",icon:!0,as:"h1",children:[Object(r.jsx)(O.a,{name:"bitcoin"}),"Search for your favorite coins!",Object(r.jsx)(p.a.Subheader,{children:"Start searching below to find the coin you need"})]}),Object(r.jsx)(g.a,{size:"large",input:{fluid:!0},fluid:!0,className:m.a.search,loading:t,results:l,onSearchChange:function(e,t){var r,a,c=null===(r=t.value)||void 0===r?void 0:r.trim().toLowerCase();if(!c||""===c)return u([]),void v("");var i=n.filter((function(e){var t=e.name.trim().toLowerCase(),n=e.id.trim().toLowerCase();return t.includes(c)||n.includes(c)})).map((function(e){return{title:e.name,description:e.id}}));u(i),v(null!==(a=t.value)&&void 0!==a?a:"")},onResultSelect:function(e,t){t.result.description},resultRenderer:function(e){var t=e.title,n=e.description,a=void 0===n?"":n;return Object(r.jsx)(j.b,{to:"/browse/".concat(encodeURIComponent(a)),children:Object(r.jsxs)(p.a,{as:"h5",children:[t,Object(r.jsx)(p.a.Subheader,{children:a})]})})},value:f}),c&&Object(r.jsx)(H,{title:"Error loading coin data",message:"The following error occured when trying to load the coin data: '".concat(c,"'"),onRetry:i})]})]})})),U=n(329);var Q=Object(s.b)((function(e){return Object(U.a)(e),{}}),(function(e){return{}}))((function(e){var t=e.id;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(b.a,{children:t})]})})),$=n(545),q=n(540),K=n(330),V=n(279),X=n.n(V),Z=n(340),ee={mobile:0,tablet:768,laptop:992,desktop:1200},te="TRENDING_COINS_START_FETCH",ne="TRENDING_COINS_FAIL_FETCH",re="TRENDING_COINS_FINISH_FETCH",ae=n(341);function ce(e){return{type:re,payload:e}}function ie(e){return new Promise((function(t){var n=new Image;n.crossOrigin="anonymous",n.addEventListener("load",(function(){t(n)})),n.src="https://api.allorigins.win/raw?url=".concat(encodeURIComponent(e))}))}function oe(e){return se.apply(this,arguments)}function se(){return(se=Object(D.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=usd&days=6&interval=daily"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return ue.apply(this,arguments)}function ue(){return(ue=Object(D.a)(B.a.mark((function e(){var t,n,r,a,c,i,o,s,u,d,j;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/search/trending");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.coins.map((function(e){return e.item})),a=r.map((function(e){return oe(e.id)})),e.next=10,Promise.allSettled(a);case 10:c=e.sent,i=new ae.a,o=[],s=0;case 14:if(!(s<c.length)){e.next=26;break}if("fulfilled"!==(u=c[s]).status){e.next=23;break}return e.next=19,ie(r[s].thumb);case 19:d=e.sent,j=i.getColor(d).rgb,console.log(j),o.push(Object(l.a)(Object(l.a)({},r[s]),{},{historicData:u.value,color:j}));case 23:s++,e.next=14;break;case 26:return i.destroy(),e.abrupt("return",o);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=n(233),je=n.n(de),be=Object(s.b)((function(e){var t=e.trending;return{trending:t.data,error:t.error,loading:t.isLoading}}),(function(e){return{getTrending:function(){return e(function(){var e=Object(D.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:te}),e.prev=1,e.next=4,le();case 4:n=e.sent,t(ce(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((r=e.t0,{type:ne,payload:r}));case 11:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}})),he=function(e){var t=e.id,n=e.data,a=e.lineColor,c={id:t,data:n},i=(0,Object(Z.a)(ee).screenIsAtMost)("laptop");return Object(r.jsx)("div",{className:je.a.graph,children:Object(r.jsx)(K.a,{data:[c],colors:a,curve:"cardinal",useMesh:!0,tooltip:function(e){var t=e.point;return Object(r.jsx)(E.a,{children:"".concat(t.data.yFormatted," at ").concat(X()(t.data.x).format("h:mm A [on] MM/DD/YYYY"))})},pointSize:8,margin:{top:50,right:40,bottom:i?80:50,left:70},axisLeft:{tickSize:10,tickPadding:5,legend:"Price",legendOffset:-55,legendPosition:"middle"},pointBorderColor:"#0007",pointBorderWidth:1,yFormat:" >-$.3r",axisBottom:{tickSize:10,tickPadding:5,tickRotation:i?45:0,legend:"Date",legendOffset:i?60:40,legendPosition:"middle",format:function(e){return X()(e).format("MM/DD/YY")}}})})},pe=function(e){var t,n=e.coin,a=n.id,c=n.symbol,i=n.market_cap_rank,o=n.name,s=n.large,l=n.color,u=n.historicData.prices;return Object(r.jsx)(f.a.Column,{mobile:16,tablet:16,computer:8,children:Object(r.jsxs)($.a,{style:{width:"100%"},children:[Object(r.jsx)(he,{id:o,data:(t=u,t.map((function(e){return{x:e[0],y:e[1]}}))),lineColor:l}),Object(r.jsx)($.a.Content,{children:Object(r.jsx)($.a.Header,{children:Object(r.jsxs)("div",{className:je.a.cardContainer,children:[Object(r.jsx)(v.a,{src:s,size:"mini"}),Object(r.jsxs)(p.a,{as:"h5",style:{margin:0,marginLeft:"1em"},children:[o," (",c,")",Object(r.jsxs)(p.a.Subheader,{children:["Current market cap rank ",i]})]})]})})})]})},a)};var Oe=be((function(e){var t=e.loading,n=e.trending,c=e.error,i=e.getTrending;return Object(a.useEffect)((function(){i()}),[i]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(b.a,{className:je.a.root,children:[t&&Object(r.jsx)(q.a,{active:t,inline:"centered"}),c&&Object(r.jsx)(H,{title:"Error loading trending coin data",message:"The following error occured when trying to load the trending coin data: '".concat(c,"'"),onRetry:i}),Object(r.jsx)(f.a,{container:!0,centered:!0,columns:2,children:n.map((function(e){return Object(r.jsx)(pe,{coin:e})}))})]})]})}));function ge(e){var t=e.component,n=e.guarded,a=Object(u.a)(e,["component","guarded"]);return Object(r.jsx)(d.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){var a=e.match.params;return(null===n||void 0===n?void 0:n.redirect)?Object(r.jsx)(d.a,{to:n.url}):Object(r.jsx)(t,Object(l.a)({},a))}}))}function xe(){var e=d.g();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(b.a,{children:e.pathname})]})}var me=function(){var e=!0;return Object(r.jsx)(j.a,{basename:"/",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(ge,{path:"/about",component:xe}),Object(r.jsx)(ge,{path:"/home",component:xe}),Object(r.jsx)(ge,{path:"/browse/:id",component:Q}),Object(r.jsx)(ge,{path:"/browse",component:J}),Object(r.jsx)(ge,{path:"/trending",component:Oe}),Object(r.jsx)(ge,{path:"/favorites",component:xe,guarded:{redirect:!1,url:"/login"}}),Object(r.jsx)(ge,{path:"/profile",component:xe,guarded:{redirect:!1,url:"/login"}}),Object(r.jsx)(ge,{path:"/logout",component:xe,guarded:{redirect:!1,url:"/login"}}),Object(r.jsx)(ge,{path:"/login",component:xe,guarded:{redirect:e,url:"/"}}),Object(r.jsx)(ge,{path:"/signup",component:xe,guarded:{redirect:e,url:"/"}}),Object(r.jsx)(ge,{path:"/",component:xe})]})})};var fe=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(me,{})})},ve=n(135),ye=n(342),we={data:[],isLoading:!1,error:""};var Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,data:[],error:""});case ne:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,error:t.payload});case re:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,data:t.payload,error:""});default:return e}},ke={data:[],isLoading:!1,error:""};var _e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,data:[],error:""});case A:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,error:t.payload});case z:return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,data:t.payload,error:""});default:return e}},Ie=Object(ve.c)({trending:Ce,browse:_e}),Se=Object(ve.d)(Ie,Object(ve.a)(ye.a));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:Se,children:Object(r.jsx)(fe,{})})}),document.getElementById("root"))}},[[501,1,2]]]);
//# sourceMappingURL=main.44acc487.chunk.js.map