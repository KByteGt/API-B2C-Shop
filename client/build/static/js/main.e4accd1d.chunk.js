(this.webpackJsonpb2cshop=this.webpackJsonpb2cshop||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(0),s=c.n(a),n=c(26),i=c.n(n),o=(c(79),c(63)),j=c(64),l=c(73),b=c(72),d=c(27),m=c(31),h=c(44),O=c(71),x=c(38),u=c(68),p=c(107),g=c.p+"static/media/f-logo.a7b8d68e.png",f=c(21),y=c(18);var _=function(e){return Object(r.jsx)(m.a,{bg:"light",expand:"lg",fixed:"top",children:Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(m.a.Brand,{href:"/",children:[Object(r.jsx)("img",{alt:"Death Star",src:g,width:"30",height:"30",className:"d-inline-block align-top"}),"\xa0 F-Shop"]}),Object(r.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(h.a,{className:"mr-auto",children:Object(r.jsx)(h.a.Link,{href:"/catalogue",children:"Catalogue"})}),Object(r.jsxs)(O.a,{inline:!0,children:[Object(r.jsx)(x.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(r.jsx)(u.a,{variant:"outline-dark",children:"Search"})]}),Object(r.jsx)(h.a.Link,{href:"/cart",variant:"dark",children:Object(r.jsx)(y.a,{icon:f.b,style:{color:"#555"}})})]})]})})},v=c(30),N=c.n(v),I=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{className:N.a.header,children:Object(r.jsx)(_,{})}),Object(r.jsx)("main",{className:N.a.content,children:this.props.children})]}),Object(r.jsx)("footer",{className:N.a.footer,children:Object(r.jsx)("div",{className:N.a.copy,children:Object(r.jsxs)("p",{children:["2021 | ",Object(r.jsx)(d.b,{to:"/about",children:"KByteGt"})]})})})]})}}]),c}(a.Component),S=c(108),k=c(42),C=c(17),w=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5",children:e.children}),Object(r.jsx)("br",{})]})},F=c(113),T=c(7),L=c.n(T),E=function(e){var t=e.id,c=L.a.bg_common;switch(e.rarity){case"epic":c=L.a.bg_epic;break;case"legendary":c=L.a.bg_legendary;break;case"rare":c=L.a.bg_rare;break;case"uncommon":c=L.a.bg_uncommon;break;default:c=L.a.bg_epic}return Object(r.jsx)("div",{className:"col mb-4",children:Object(r.jsxs)(F.a,{style:{height:"100%"},children:[Object(r.jsx)(F.a.Img,{variant:"top",className:c,src:e.img}),Object(r.jsxs)(F.a.Body,{children:[Object(r.jsx)(F.a.Title,{children:e.name}),Object(r.jsx)(F.a.Subtitle,{className:"mb-2 text-muted",children:e.type}),Object(r.jsx)(F.a.Text,{children:""===e.description?"I don't have a description...":e.description})]}),Object(r.jsx)(F.a.Footer,{children:Object(r.jsx)(F.a.Link,{href:"/item/"+t,children:"View more"})})]})})},G={url:{itemsApi:"",checkoutApi:""}},A=c(19),B=c.n(A),H=function(e){var t=Object(a.useState)({items:[],error:!1}),c=Object(C.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){B()({method:"GET",url:G.url.itemsApi+"/items/popular"}).then((function(e){var t=e.data.items;t=(t=t.map((function(e){return{id:e.id,name:e.name,description:e.description,type:e.type,rarity:e.rarity,img:e.imgIcon}}))).filter((function(e){return"Randomize"!==e.name})),n({items:Object(k.a)(t),error:!1})})).catch((function(e){n({items:[],error:!0})}))}),[]);var i=Object(r.jsx)(r.Fragment,{});return i=s.error?Object(r.jsx)("p",{children:"Loading ..."}):s.items.map((function(e,t){return Object(r.jsx)(E,{id:e.id,name:e.name,description:e.description,type:e.type,rarity:e.rarity,img:e.img},e.id)})),Object(r.jsx)(w,{title:"Most Popular Items",children:i})},J=c(50),q=c.n(J),Q=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{className:q.a.bg_hero,children:Object(r.jsx)(p.a,{children:Object(r.jsxs)("div",{className:q.a.hero_content,children:[Object(r.jsx)("h1",{children:"Hello, Fortniter!"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac velit tortor. Integer non lorem sed nunc congue feugiat et eleifend tortor. Ut vulputate urna mi, et accumsan purus placerat id."}),Object(r.jsx)("p",{children:Object(r.jsx)(u.a,{variant:"primary",children:"Learn more"})})]})})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(H,{})})]})},R=function(){return Object(r.jsxs)(p.a,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"Jos\xe9 Daniel L\xf3pez - @KByteGt"})]})},z=c(114),D=c.p+"static/media/loading.79cbeefd.gif",M=c(109),P=c(110),K=function(e){var t=e.id,c=L.a.bg_common;switch(e.rarity){case"epic":c=L.a.bg_epic;break;case"legendary":c=L.a.bg_legendary;break;case"rare":c=L.a.bg_rare;break;case"uncommon":c=L.a.bg_uncommon;break;default:c=L.a.bg_epic}var a=null===e.series?e.type:e.type+" ["+e.series+"] ",s=""===e.description?"I don't have a description...":e.description;return Object(r.jsx)("div",{className:"col mb-4",children:Object(r.jsxs)(F.a,{style:{height:"100%"},children:[Object(r.jsx)(F.a.Img,{variant:"top",className:c,src:e.img}),Object(r.jsxs)(F.a.Body,{children:[Object(r.jsx)(F.a.Title,{children:e.name}),Object(r.jsx)(F.a.Subtitle,{className:"mb-2 text-muted",children:a}),Object(r.jsx)(F.a.Text,{children:s}),Object(r.jsxs)(u.a,{variant:"primary",children:[Object(r.jsx)(y.a,{icon:f.a,style:{color:"#fff"}})," \xa0 Q",e.cost]})]}),Object(r.jsx)(F.a.Footer,{children:Object(r.jsx)(F.a.Link,{href:"/item/"+t,children:"View more."})})]})})},V=function(e){var t=Object(a.useState)({items:[],error:!1}),c=Object(C.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){B()({method:"GET",url:G.url.itemsApi+"/item/items"}).then((function(e){var t=e.data.items;console.log(t),t=t.map((function(e){return{id:e.id,name:e.name,description:e.description,type:e.type,rarity:e.rarity,img:e.imgIcon,series:e.series,cost:e.cost}})),n({items:Object(k.a)(t),error:!1})})).catch((function(e){console.log("Error: "+e),n({items:[],error:!0})}))}),[]);var i=Object(r.jsx)(r.Fragment,{});return i=s.error?Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)(M.a,{src:D,style:{width:"50px"}})}):s.items.map((function(e,t){return Object(r.jsx)(K,{id:e.id,name:e.name,description:e.description,type:e.type,rarity:e.rarity,img:e.img,series:e.series,cost:e.cost},e.id)})),Object(r.jsx)(P.a,{children:i})},U=function(e){return Object(r.jsxs)(p.a,{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(z.a,{children:[Object(r.jsx)(z.a.Item,{href:"/",children:"Home"}),Object(r.jsx)(z.a.Item,{active:!0,children:"Catalogue"})]}),Object(r.jsx)("h1",{children:"Items"}),Object(r.jsx)("hr",{}),Object(r.jsx)(V,{})]})},W=c(40),X=c(51),Y=c(115),Z=c(111),$=c(67),ee=c(70),te=c.n(ee),ce=function(e){var t=Object(a.useState)(0),c=Object(C.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)([]),o=Object(C.a)(i,2),j=o[0],l=o[1],b=Object(a.useState)({firstName:"",lastName:"",email:""}),d=Object(C.a)(b,2),m=d[0],h=d[1];Object(a.useEffect)((function(){var e=localStorage.getItem("itemsCart"),t=[],c=0;e&&JSON.parse(e).forEach((function(e){B()({method:"GET",url:G.url.itemsApi+"/item/"+e}).then((function(e){var r=e.data.item,a={id:r.id,name:r.name,description:r.description,cost:r.cost};c+=a.cost,t.push(a),l([].concat(t)),n(c)})).catch((function(e){console.log(" **Request error: "+e)}))}))}),[]);var x=function(e){h(Object(X.a)(Object(X.a)({},m),{},Object(W.a)({},e.target.name,e.target.value)))},g=0===s?"Free":"Q"+s,f=0===j.length?"No items in the cart":"Total items: "+j.length,y=j.map((function(e,t){return Object(r.jsxs)(Y.a.Item,{children:[Object(r.jsx)("strong",{children:e.name}),", ",e.description," [ Q",e.cost," ]"]},e.id)}));return Object(r.jsxs)(p.a,{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(z.a,{children:[Object(r.jsx)(z.a.Item,{href:"/",children:"Home"}),Object(r.jsx)(z.a.Item,{active:!0,children:"Shopping cart"})]}),Object(r.jsx)("h1",{children:"Shopping Cart"}),Object(r.jsx)("hr",{}),Object(r.jsxs)(Z.a,{children:[Object(r.jsxs)($.a,{xs:12,md:8,children:[Object(r.jsxs)(F.a,{children:[Object(r.jsx)(F.a.Header,{children:f}),Object(r.jsx)(Y.a,{children:y})]}),Object(r.jsx)("br",{})]}),Object(r.jsx)($.a,{xs:12,md:4,children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(O.a.Group,{controlId:"formName",children:Object(r.jsxs)(Z.a,{children:[Object(r.jsxs)($.a,{children:[Object(r.jsx)(O.a.Label,{children:"First name"}),Object(r.jsx)(O.a.Control,{type:"text",name:"firstName",placeholder:"Jonh",onChange:x})]}),Object(r.jsxs)($.a,{children:[Object(r.jsx)(O.a.Label,{children:"Last name"}),Object(r.jsx)(O.a.Control,{type:"text",name:"lastName",placeholder:"Doe",onChange:x})]})]})}),Object(r.jsxs)(O.a.Group,{controlId:"formEmail",children:[Object(r.jsx)(O.a.Label,{children:"E-mail"}),Object(r.jsx)(O.a.Control,{type:"email",name:"email",placeholder:"Jonh@f-shop.gt",onChange:x})]}),Object(r.jsx)(O.a.Group,{children:Object(r.jsxs)("div",{className:te.a.card,children:[Object(r.jsx)("p",{children:"Total amount"}),Object(r.jsx)("h1",{children:g}),Object(r.jsx)(u.a,{variant:"success",size:"lg",block:!0,onClick:function(e){if(0!==s&&""!==m.firstName&&""!==m.lastName&&""!==m.email){console.log(" Making the pay... Q"+s);var t={items:JSON.parse(localStorage.getItem("itemsCart")||"[]"),client:m};B()({method:"POST",url:G.url.checkoutApi+"/purchase",data:t,headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),console.log("Client: ",t),localStorage.clear(),n(0),l([]),h({firstName:"",lastName:"",email:""}),alert("Thanks, enjoy your new items!!!")})).catch((function(e){console.log(e),alert("Sorry, but your purchase has been declined :(")}))}else console.log(" ** Faltan datos de contacto...")},children:"Pay now"})]})})]})})]}),Object(r.jsx)("br",{})]})},re=c(52),ae=function(e){var t=L.a.bg_common;switch(e.rarity){case"epic":t=L.a.bg_epic;break;case"legendary":t=L.a.bg_legendary;break;case"rare":t=L.a.bg_rare;break;case"uncommon":t=L.a.bg_uncommon;break;default:t=L.a.bg_epic}return Object(r.jsxs)(F.a,{children:[Object(r.jsx)(F.a.Img,{variant:"top",className:t,src:e.img}),Object(r.jsxs)("blockquote",{className:"blockquote mb-0 card-body",children:[Object(r.jsx)("p",{children:e.description}),Object(r.jsx)("footer",{className:"blockquote-footer",children:Object(r.jsx)("small",{className:"text-muted",children:e.name})})]}),Object(r.jsx)(F.a.Footer,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(y.a,{icon:f.c,className:L.a.star}),Object(r.jsx)(y.a,{icon:f.c,className:L.a.star}),Object(r.jsx)(y.a,{icon:f.c,className:L.a.star}),Object(r.jsx)(y.a,{icon:re.a,className:L.a.star}),Object(r.jsx)(y.a,{icon:re.a,className:L.a.star}),Object(r.jsxs)("span",{className:"text-muted",children:[" - ",e.stars]})]})})]})},se=c(112),ne=function(e){var t=null===e.img?" ":Object(r.jsx)($.a,{children:Object(r.jsx)("div",{className:L.a.bg_img,children:Object(r.jsx)(M.a,{src:e.img,fluid:!0})})});return Object(r.jsxs)(F.a,{children:[Object(r.jsx)(F.a.Header,{children:"Item Information "}),Object(r.jsx)(F.a.Body,{children:Object(r.jsxs)(Z.a,{children:[Object(r.jsxs)($.a,{children:[Object(r.jsx)(F.a.Title,{children:e.id}),Object(r.jsxs)(F.a.Text,{children:[Object(r.jsx)("strong",{children:"Name: "}),e.name,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Type: "}),e.type,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Rarity: "}),e.rarity,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Series: "}),e.series]}),Object(r.jsx)("br",{}),Object(r.jsxs)(F.a.Title,{children:[Object(r.jsx)(se.a,{variant:"secondary",children:e.ocurrences})," times ocurrences "]}),Object(r.jsxs)(F.a.Text,{children:[Object(r.jsx)("strong",{children:"First ocurrences: "}),e.firstOccurrences,Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Last ocurrences: "}),e.lastOccurrences]})]}),t]})})]})},ie=function(e){var t=e.match.params.itemId,c=Object(a.useState)({id:"",name:"",description:"",type:"",rarity:"",series:"",cost:0,imgIcon:"",imgFeatured:"",avgStars:0,firstOccurrences:"",lastOccurrences:"",occurrences:0}),s=Object(C.a)(c,2),n=s[0],i=s[1];Object(a.useEffect)((function(){B()({method:"GET",url:G.url.itemsApi+"/item/"+t}).then((function(e){var t=e.data.item;i({id:t.id,name:t.name,description:t.description,type:t.type,rarity:t.rarity,series:t.series,cost:t.cost,imgIcon:t.imgIcon,imgFeatured:t.imgFeatured,avgStars:t.avgStars,firstOccurrences:t.firstOccurrences,lastOccurrences:t.lastOccurrences,occurrences:t.occurrences})})).catch((function(e){console.log(" **Error: "+e)}))}));var o=null===n.series?"Fortnite":n.series,j=0===n.cost?"Buy for free now":"Buy for Q "+n.cost;return Object(r.jsxs)(p.a,{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(z.a,{children:[Object(r.jsx)(z.a.Item,{href:"/",children:"Home"}),Object(r.jsx)(z.a.Item,{href:"/catalogue",children:"Catalogue"}),Object(r.jsx)(z.a.Item,{active:!0,children:n.name})]}),Object(r.jsxs)(Z.a,{children:[Object(r.jsxs)($.a,{xs:12,md:3,children:[Object(r.jsx)(u.a,{size:"lg",block:!0,onClick:function(){return function(e){var t=localStorage.getItem("itemsCart"),c=[];t?((c=JSON.parse(t)).push(e),c=Array.from(new Set(c))):c.push(e),localStorage.setItem("itemsCart",JSON.stringify(c)),console.log("Adding item in local storage..."),alert("thanks, Item added to the cart :)")}(t)},children:j}),Object(r.jsx)("br",{}),Object(r.jsx)(ae,{img:n.imgIcon,description:n.description,name:n.name,rarity:n.rarity,stars:n.avgStars})]}),Object(r.jsx)($.a,{xs:12,md:9,children:Object(r.jsx)(ne,{id:t,name:n.name,type:n.type,rarity:n.rarity,series:o,ocurrences:n.occurrences,firstOccurrences:n.firstOccurrences,lastOccurrences:n.lastOccurrences,img:n.imgFeatured})})]}),Object(r.jsx)("br",{}),Object(r.jsx)(H,{})]})},oe=c(8);var je=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(I,{children:Object(r.jsxs)(oe.c,{children:[Object(r.jsx)(oe.a,{path:"/",exact:!0,component:Q}),Object(r.jsx)(oe.a,{path:"/about",component:R}),Object(r.jsx)(oe.a,{path:"/catalogue",component:U}),Object(r.jsx)(oe.a,{path:"/cart",component:ce}),Object(r.jsx)(oe.a,{path:"/item/:itemId",component:ie})]})})})};c(104);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(d.a,{children:Object(r.jsx)(je,{})})}),document.getElementById("root"))},30:function(e,t,c){e.exports={content:"Layout_content__1VK7A",footer:"Layout_footer__yMWOg",copy:"Layout_copy__1DL9R"}},50:function(e,t,c){e.exports={bg_hero:"Home_bg_hero__o9xSf",hero_content:"Home_hero_content__3gQxL"}},7:function(e,t,c){e.exports={bg_uncommon:"Item_bg_uncommon__258Gx",bg_rare:"Item_bg_rare__2G-be",bg_epic:"Item_bg_epic__2UhyO",bg_legendary:"Item_bg_legendary__3fNjq",bg_default:"Item_bg_default__353Sj",bg_img:"Item_bg_img__nRxvq",star:"Item_star__1W45i"}},70:function(e,t,c){e.exports={card:"ShoppingCart_card__1lHcy"}},79:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.e4accd1d.chunk.js.map