"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[824],{9824:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,c,s,o,i,u=t(5861),p=t(9439),l=t(7757),d=t.n(l),f=t(2591),h=t(2791),v=t(7689),x=t(168),g=t(5867),m=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 32px;\n  column-gap: 16px;\n  padding: 20px;\n"]))),w=g.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 5%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),j=g.ZP.img(c||(c=(0,x.Z)(["\n  display: block;\n  width: 200px;\n\n  border-radius: 5%;\n  object-fit: cover;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),b=g.ZP.div(s||(s=(0,x.Z)(["\n  padding: 12px 8px;\n"]))),Z=g.ZP.h3(o||(o=(0,x.Z)(["\n  margin-bottom: 8px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n"]))),y=g.ZP.p(i||(i=(0,x.Z)(["\n  text-align: center;\n  font-size: 10px;\n  color: #888;\n"]))),k=t(184),_=function(n){var e=n.personId,t=(0,h.useState)([]),r=(0,p.Z)(t,2),a=r[0],c=r[1];return(0,h.useEffect)((function(){var n=function(){var n=(0,u.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.TO)(e);case 3:t=n.sent,c(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h2",{children:"Know for"},a.id),a.map((function(n){var e=n.id,t=n.name,r=n.original_name,a=n.overview,c=n.first_air_date,s=n.vote_average,o=n.vote_count,i=n.character,u=n.poster_path;return(0,k.jsxs)("div",{ket:e,children:[(0,k.jsx)("h2",{children:t}),(0,k.jsxs)("p",{children:["Original Name: ",r]}),(0,k.jsxs)("p",{children:["Overview: ",a]}),(0,k.jsxs)("p",{children:["First Air Date: ",c]}),(0,k.jsxs)("p",{children:["Vote Average: ",s]}),(0,k.jsxs)("p",{children:["Vote Count: ",o]}),(0,k.jsxs)("p",{children:["Character: ",i]}),(0,k.jsx)("img",{style:{width:"100px"},src:"https://image.tmdb.org/t/p/w200".concat(u),alt:t})]})}))]})},I=function(n){var e=n.personId,t=(0,h.useState)([]),r=(0,p.Z)(t,2),a=r[0],c=r[1];(0,h.useEffect)((function(){var n=function(){var n=(0,u.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.Hc)(e);case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var s=a.id,o=a.biography,i=a.birthday,l=a.deathday,v=a.gender,x=a.known_for_department,g=a.name,m=a.place_of_birth,w=a.profile_path;return(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{children:g}),(0,k.jsx)("img",{src:w?"https://image.tmdb.org/t/p/w200".concat(w):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:g}),(0,k.jsx)("h3",{children:"Biography"}),(0,k.jsx)("p",{children:o||"-"}),(0,k.jsx)("h3",{children:"Personal Information"}),(0,k.jsx)("h4",{children:"Also Known As: "}),(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{children:[(0,k.jsx)("strong",{children:"Birthday:"})," ",null!==i&&void 0!==i?i:"-"]}),(0,k.jsxs)("li",{children:[(0,k.jsx)("strong",{children:"Gender:"})," ",2===v?"Male":"Female"]}),(0,k.jsxs)("li",{children:[(0,k.jsx)("strong",{children:"Place of Birth:"})," ",null!==m&&void 0!==m?m:"-"]}),(0,k.jsxs)("li",{children:[(0,k.jsx)("strong",{children:"Known for:"})," ",x]}),(0,k.jsxs)("li",{children:[(0,k.jsx)("strong",{children:"Deathday:"})," ",null!==l&&void 0!==l?l:"-"]})]})]},s)},S=t(7948),U=t.n(S),P={content:{top:"50%",left:"50%",right:"75%",bottom:"auto",maxHeight:"80%",overflow:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};U().setAppElement("#root");var O=function(n){var e=n.modalIsOpen,t=n.closeModal,r=n.personId;return(0,k.jsxs)(U(),{isOpen:e,style:P,onRequestClose:t,children:[(0,k.jsx)(I,{personId:r}),(0,k.jsx)(_,{personId:r})]})};function A(){var n=(0,h.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(!1),c=(0,p.Z)(a,2),s=c[0],o=c[1],i=(0,v.UO)(),l=(0,h.useState)(null),x=(0,p.Z)(l,2),g=x[0],_=x[1];return(0,h.useEffect)((function(){var n=function(){var n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.zv)(i.movieId);case 3:e=n.sent,r(e.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();i.movieId&&n()}),[i.movieId]),(0,k.jsxs)(m,{children:[t.map((function(n){var e=n.id,t=n.profile_path,r=n.name,a=n.character;return(0,k.jsx)("div",{onClick:function(){o(!0),_(e)},style:{textDecoration:"none"},children:(0,k.jsxs)(w,{children:[(0,k.jsx)(j,{src:t?"https://image.tmdb.org/t/p/w200".concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r}),(0,k.jsxs)(b,{children:[(0,k.jsx)(Z,{children:r}),(0,k.jsxs)(y,{children:["Character: ",a]})]})]},e)},e)})),s&&(0,k.jsx)(O,{personId:g,modalIsOpen:s,closeModal:function(){return o(!1)}})]})}},2591:function(n,e,t){t.d(e,{Hc:function(){return f},Hg:function(){return p},Ql:function(){return d},TO:function(){return h},TP:function(){return i},tx:function(){return u},z1:function(){return l},zv:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"1313eb7d87ffc79c96ba5fefca3b8f25"};var o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?language=en-U"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,s.Z.get("movie/".concat(t,"/reviews?language=en-US&page=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/all/day?language=en-US&page=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,s.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1&&void 0!==a[1]?a[1]:14,n.next=4,s.Z.get("discover/movie?with_genres=".concat(t,"&page=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:2144,n.next=3,s.Z.get("person/".concat(e,"?language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("person/".concat(e,"/tv_credits?language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=824.1dbf9f67.chunk.js.map