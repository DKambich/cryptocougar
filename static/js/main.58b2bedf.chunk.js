(this.webpackJsonpcryptocougar=this.webpackJsonpcryptocougar||[]).push([[0],{491:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),c=n.n(a),i=n(61),o=n.n(i),s=n(214),j=(n(370),n(34)),d=n(332),l=n(20),u=n(56),b=n(527),h=n(533),g=n(535),p=n(532),O=n(331),m=n(537),x=n(528),f=n(534),v=n(318),y=n(267),k=n.n(y),I=n(530),C=n(529),w=n(131),S=[{title:"Home",icon:"home",link:"/home"},{title:"Browse",icon:"search",link:"/browse"},{title:"Trending",icon:"chart line",link:"/trending"}],_=[{title:"Favorites",icon:"star",link:"/favorites"},{title:"Profile",icon:"user circle",link:"/profile"},{title:"Logout",icon:"sign-out",link:"/logout"}],F=[{title:"Login",icon:"sign-in",link:"/login"},{title:"Sign Up",icon:"add user",link:"/signup"}],T=function(e){var t=e.mobile,n=e.desktop;return Object(r.jsxs)(g.a,{children:[Object(r.jsx)(g.a.Row,{only:"tablet mobile",children:Object(r.jsx)(g.a.Column,{children:t})}),Object(r.jsx)(g.a.Row,{only:"computer",children:Object(r.jsx)(g.a.Column,{children:n})})]})},L=function(e){if(e.loggedIn){var t=Object(r.jsxs)("span",{children:[Object(r.jsx)(O.a,{src:"https://picsum.photos/200",avatar:!0,style:{marginRight:".5em"}}),"John Smith"]});return Object(r.jsx)(I.a.Menu,{position:"right",children:Object(r.jsx)(C.a,{item:!0,trigger:t,children:Object(r.jsx)(C.a.Menu,{children:_.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(C.a.Item,{as:u.b,to:a,children:[Object(r.jsx)(w.a,{name:n}),t]},t)}))})})})}return Object(r.jsx)(I.a.Item,{position:"right",children:F.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(f.a,{animated:"fade",style:{marginLeft:".25em",marginRight:".25em"},as:u.b,to:a,children:[Object(r.jsx)(f.a.Content,{visible:!0,children:t}),Object(r.jsx)(f.a.Content,{hidden:!0,children:Object(r.jsx)(w.a,{name:n})})]},t)}))})},R=function(e){var t=e.loggedIn?_:F;return Object(r.jsx)(r.Fragment,{children:t.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(C.a.Item,{as:u.b,to:a,children:[Object(r.jsx)(w.a,{name:n}),t]},t)}))})},D=function(e){var t=e.loggedIn;return Object(r.jsx)(I.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(C.a,{item:!0,icon:"sidebar",children:Object(r.jsxs)(C.a.Menu,{style:{width:"100vw"},children:[S.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(C.a.Item,{as:u.b,to:a,children:[Object(r.jsx)(w.a,{name:n}),t]},t)})),Object(r.jsx)(R,{loggedIn:t})]})}),Object(r.jsxs)(I.a.Item,{as:u.b,to:"/about",header:!0,style:{flexGrow:1},children:[Object(r.jsx)(O.a,{avatar:!0,src:"./logo.png",style:{marginRight:".5em"}}),"CryptoCougar"]})]})})},N=function(e){var t=e.loggedIn;return Object(r.jsx)(I.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(I.a.Item,{as:u.b,to:"/about",header:!0,children:[Object(r.jsx)(O.a,{size:"mini",src:"/CryptoCougar/logo.png",style:{marginRight:".5em"}}),"CryptoCougar"]}),S.map((function(e){var t=e.title,n=e.icon,a=e.link;return Object(r.jsxs)(I.a.Item,{as:u.b,to:a,children:[Object(r.jsx)(w.a,{name:n}),t]},t)})),Object(r.jsx)(L,{loggedIn:t})]})})};var E=function(){return Object(r.jsx)(T,{mobile:Object(r.jsx)(D,{loggedIn:true}),desktop:Object(r.jsx)(N,{loggedIn:true})})},H=n(19),M=n.n(H),P=n(225),Y="TRENDING_COINS_START_FETCH",z="TRENDING_COINS_FAIL_FETCH",A="TRENDING_COINS_FINISH_FETCH",G=n(329);function B(e){return{type:A,payload:e}}function J(e){return U.apply(this,arguments)}function U(){return(U=Object(P.a)(M.a.mark((function e(t){var n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart?vs_currency=usd&days=6&interval=daily"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return q.apply(this,arguments)}function q(){return(q=Object(P.a)(M.a.mark((function e(){var t,n,r,a,c,i,o,s,d,l,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/search/trending");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.coins.map((function(e){return e.item})),a=r.map((function(e){return J(e.id)})),e.next=10,Promise.allSettled(a);case 10:c=e.sent,i=new G.a,o=[],s=0;case 14:if(!(s<c.length)){e.next=25;break}if("fulfilled"!==(d=c[s]).status){e.next=22;break}return l="https://cors-anywhere.herokuapp.com/".concat(r[s].thumb),e.next=20,i.getColorAsync(l);case 20:u=e.sent.rgb,o.push(Object(j.a)(Object(j.a)({},r[s]),{},{historicData:d.value,color:u}));case 22:s++,e.next=14;break;case 25:return e.abrupt("return",o);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K={root:{padding:"1.5em"},graph:{height:300,width:"auto"},card:{width:"100%"},cardHeader:{margin:0,marginLeft:"1em"},cardContainer:{display:"flex",alignItems:"center"}},Q=Object(s.b)((function(e){var t=e.trending;return{trending:t.data,error:t.error,loading:t.isLoading}}),(function(e){return{getTrending:function(){return e(function(){var e=Object(P.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Y}),e.prev=1,e.next=4,$();case 4:n=e.sent,t(B(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((r=e.t0,{type:z,payload:r}));case 11:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}})),V=function(e){var t=e.id,n=e.data,a=e.lineColor,c={id:t,data:n};return Object(r.jsx)("div",{style:K.graph,children:Object(r.jsx)(v.a,{data:[c],colors:a,curve:"cardinal",useMesh:!0,tooltip:function(e){var t=e.point;return Object(r.jsxs)(h.a,{children:[t.data.yFormatted," on",k()(t.data.x).format("h:mm A MM/DD/YYYY")]})},pointSize:8,margin:{top:50,right:80,bottom:50,left:80},axisLeft:{tickSize:10,tickPadding:5,legend:"Price",legendOffset:-55,legendPosition:"middle"},yFormat:" >-$.3r",axisBottom:{tickSize:10,tickPadding:5,legend:"Date",legendOffset:40,legendPosition:"middle",format:function(e){return k()(e).format("MM/DD/YY")}}})})},W=function(e){var t,n=e.coin,a=n.id,c=n.symbol,i=n.market_cap_rank,o=n.name,s=n.large,j=n.color,d=n.historicData.prices;return Object(r.jsx)(g.a.Column,{mobile:16,tablet:16,computer:8,children:Object(r.jsxs)(p.a,{style:K.card,children:[Object(r.jsx)(V,{id:o,data:(t=d,t.map((function(e){return{x:e[0],y:e[1]}}))),lineColor:j}),Object(r.jsx)(p.a.Content,{children:Object(r.jsx)(p.a.Header,{children:Object(r.jsxs)("div",{style:K.cardContainer,children:[Object(r.jsx)(O.a,{src:s,size:"mini"}),Object(r.jsxs)(m.a,{as:"h5",style:K.cardHeader,children:[o," (",c,")",Object(r.jsxs)(m.a.Subheader,{children:["Current market cap rank ",i]})]})]})})})]})},a)};var X=Q((function(e){var t=e.loading,n=e.trending,c=e.error,i=e.getTrending;return Object(a.useEffect)((function(){i()}),[i]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(E,{}),Object(r.jsxs)(b.a,{style:K.root,children:[t&&Object(r.jsx)(x.a,{active:t,inline:"centered"}),c&&Object(r.jsxs)(h.a,{negative:!0,children:[Object(r.jsx)(h.a.Header,{children:"Error loading trending coin data"}),Object(r.jsxs)("p",{children:["The following error occured when trying to load the trending coin data: '",c,"'"]}),Object(r.jsx)(f.a,{negative:!0,onClick:i,children:"Retry"})]}),Object(r.jsx)(g.a,{container:!0,centered:!0,columns:2,children:n.map((function(e){return Object(r.jsx)(W,{coin:e})}))})]})]})}));function Z(e){var t=e.component,n=e.guarded,a=Object(d.a)(e,["component","guarded"]);return Object(r.jsx)(l.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){var a=e.match.params;return(null===n||void 0===n?void 0:n.redirect)?Object(r.jsx)(l.a,{to:n.url}):Object(r.jsx)(t,Object(j.a)({},a))}}))}function ee(){var e=l.g();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(E,{}),Object(r.jsx)(b.a,{children:e.pathname})]})}var te=function(){var e=!0;return Object(r.jsx)(u.a,{basename:"/",children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(Z,{path:"/about",component:ee}),Object(r.jsx)(Z,{path:"/home",component:ee}),Object(r.jsx)(Z,{path:"/browse",component:ee}),Object(r.jsx)(Z,{path:"/trending",component:X}),Object(r.jsx)(Z,{path:"/favorites",component:ee,guarded:{redirect:!1,url:"/login"}}),Object(r.jsx)(Z,{path:"/profile",component:ee,guarded:{redirect:!1,url:"/login"}}),Object(r.jsx)(Z,{path:"/logout",component:ee,guarded:{redirect:!1,url:"/login"}}),Object(r.jsx)(Z,{path:"/login",component:ee,guarded:{redirect:e,url:"/"}}),Object(r.jsx)(Z,{path:"/signup",component:ee,guarded:{redirect:e,url:"/"}}),Object(r.jsx)(Z,{path:"/",component:ee})]})})};var ne=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(te,{})})},re=n(125),ae=n(330),ce={data:[],isLoading:!1,error:""};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0,data:[],error:""});case z:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload});case A:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,data:t.payload,error:""});default:return e}},oe=Object(re.c)({trending:ie}),se=Object(re.d)(oe,Object(re.a)(ae.a));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:se,children:Object(r.jsx)(ne,{})})}),document.getElementById("root"))}},[[491,1,2]]]);
//# sourceMappingURL=main.58b2bedf.chunk.js.map