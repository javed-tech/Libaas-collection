(this["webpackJsonpshopping-site"]=this["webpackJsonpshopping-site"]||[]).push([[0],{36:function(e,i,t){},45:function(e,i,t){"use strict";t.r(i);var c=t(2),s=t(18),a=t.n(s),n=t(4),o=t(8),r=(t(36),t(22)),d=t(10),u={products:[{id:1,name:"men t-shirt summer season",image:"1.jpg",price:20,discount:2,discountPrice:19.6,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:2,name:"women jacket for summer season",image:"2.jpg",price:30,discount:5,discountPrice:28.5,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:3,name:"men trouser for All season",image:"3.jpg",price:15,discount:3,discountPrice:14.55,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:4,name:"Shoes  for All season",image:"4.jpg",price:50,discount:4,discountPrice:48,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:5,name:"women Suit for summer season",image:"5.jpg",price:25,discount:2,discountPrice:24.5,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:6,name:"women stylish jeans for summer season",image:"6.jpg",price:60,discount:6,discountPrice:56.4,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:7,name:"men lower for All season",image:"7.jpg",price:50,discount:3,discountPrice:48.5,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:8,name:"Male Jacket for All season",image:"8.jpg",price:95,discount:4,discountPrice:91.2,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:9,name:"Male Jacket for winter season",image:"9.jpg",price:65,discount:4,discountPrice:62.4,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:10,name:"Male Jacket for winter season",image:"10.jpg",price:120,discount:3,discountPrice:116.4,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:11,name:" Denim Jeans For Men ",image:"11.jpg",price:250,discount:5,discountPrice:237.5,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"},{id:12,name:"Sports Track Suit For Men",image:"12.jpg",price:400,discount:6,discountPrice:376,quantity:1,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum est quisquam dolorem laudantium. Fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eaque eius commodi non soluta atque amet doloribus, iusto cumque!lorem"}],product:{}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case"PRODUCT":return Object(d.a)(Object(d.a)({},e),{},{product:e.products.find((function(e){return e.id===parseInt(i.id)}))});default:return e}},m=t(26),j=t(28),p={products:[],totalPrice:0,totalQuantities:0},b=function(){var e,i,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"ADD_TO_CART":var s=c.payload,a=s.product,n=s.quantity;console.log("product Id: "+a.id,"Product Quantity: "+n);var o=t.products.find((function(e){return e.id===a.id}));if(o)return t;var r=t.totalPrice+a.discountPrice*n,u=t.totalQuantities+n;return a.quantity=n,console.log(a.quantity),Object(d.a)(Object(d.a)({},t),{},{products:[].concat(Object(j.a)(t.products),[a]),totalPrice:r,totalQuantities:u});case"INC":return e=t.products.find((function(e){return e.id===c.payload})),i=t.products.findIndex((function(e){return e.id===c.payload})),e.quantity+=1,t.products[i]=e,Object(d.a)(Object(d.a)({},t),{},{totalPrice:t.totalPrice+e.discountPrice,totalQualities:t.totalQuantities+1});case"DEC":return e=t.products.find((function(e){return e.id===c.payload})),i=t.products.findIndex((function(e){return e.id===c.payload})),e.quantity>1?(e.quantity-=1,t.products[i]=e,Object(d.a)(Object(d.a)({},t),{},{totalPrice:t.totalPrice-e.discountPrice,totalQuantities:t.totalQuantities-1})):t;case"REMOVE":e=t.products.find((function(e){return e.id===c.payload}));var l=t.products.filter((function(e){return e.id!==c.payload}));return Object(d.a)(Object(d.a)({},t),{},{products:l,totalPrice:t.totalPrice-e.discountPrice,totalQuantities:t.totalQuantities-e.quantity});default:return t}},O=Object(r.combineReducers)({ProductsReducer:l,CartReducer:b}),h=Object(r.createStore)(O,Object(m.devToolsEnhancer)()),x=t.p+"static/media/banner.380a65bb.webp",g=t(1),v=function(){return Object(g.jsx)("div",{className:"header",children:Object(g.jsx)("img",{src:x,alt:"headerImg...",width:"100%"})})},q=t(11),N=t.n(q),f=t(12),y=function(){var e=Object(o.c)((function(e){return e.ProductsReducer})).products;return console.log(e),Object(g.jsxs)("div",{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{className:"container ",children:Object(g.jsx)("div",{className:"row",children:e.map((function(e){return Object(g.jsx)("div",{className:"col-3",children:Object(g.jsxs)("div",{className:"product",children:[Object(g.jsx)("div",{className:"product__img",children:Object(g.jsx)(f.b,{to:"/details/".concat(e.id),children:Object(g.jsx)("img",{src:"../images/".concat(e.image),alt:"img name"})})}),Object(g.jsx)("div",{className:"product__name",children:e.name}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-6",children:Object(g.jsxs)("div",{className:"product__price",children:[Object(g.jsx)("span",{className:"actualPrice",children:N.a.format(e.price,{code:"USD"})}),Object(g.jsxs)("span",{className:"discount",children:[e.discount,"% OFF"]})]})}),Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("div",{className:"product_discount_price",children:N.a.format(e.discountPrice,{code:"USD"})})})]})]})},e.id)}))})})]})},_=t(21),P=function(){var e=Object(o.c)((function(e){return e.CartReducer})).totalQuantities;return Object(g.jsx)("div",{className:"nav",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"nav_container",children:[Object(g.jsx)("div",{className:"nav_left",children:Object(g.jsx)(f.b,{to:"/",children:Object(g.jsx)("img",{src:"/images/logo.webp",alt:"logo..."})})}),Object(g.jsx)("div",{className:"nav_right",children:Object(g.jsx)(f.b,{to:"/Cart",children:Object(g.jsxs)("div",{className:"basket",children:[Object(g.jsx)(_.a,{className:"cart-icon"}),Object(g.jsx)("span",{children:e})]})})})]})})})},S=t(14),L=function(){var e=Object(o.c)((function(e){return e.CartReducer})),i=e.products,t=e.totalQuantities,c=e.totalPrice,s=Object(o.b)();return console.log(i),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"cart",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h3",{className:"text-center mb-40",children:"Your Cart"}),i.length>0?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-9",children:[Object(g.jsx)("div",{className:"cart__heading",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-2",children:"Picture"}),Object(g.jsx)("div",{className:"col-2",children:"Name"}),Object(g.jsx)("div",{className:"col-2",children:"Price"}),Object(g.jsx)("div",{className:"col-2",children:"Inc/Dec"}),Object(g.jsx)("div",{className:"col-2",children:"Total Price"}),Object(g.jsx)("div",{className:"col-2",children:"Remove"})]})}),i.map((function(e){return Object(g.jsxs)("div",{className:"row verticalAlign",children:[Object(g.jsx)("div",{className:"col-2 ",children:Object(g.jsx)("div",{className:"cart__image",children:Object(g.jsx)("img",{src:"/images/".concat(e.image),alt:""})})}),Object(g.jsx)("div",{className:"col-2",children:Object(g.jsx)("div",{className:"cart__name",children:e.name})}),Object(g.jsx)("div",{className:"col-2",children:Object(g.jsx)("div",{className:"cart__price",children:N.a.format(e.discountPrice,{code:"USD"})})}),Object(g.jsx)("div",{className:"col-2 ",style:{justifyContent:"center"},children:Object(g.jsx)("div",{className:"details__info cart__incDec ",children:Object(g.jsxs)("div",{className:"details__incDec text-center  ",children:[Object(g.jsx)("span",{className:"dec",onClick:function(){return s({type:"DEC",payload:e.id})},children:Object(g.jsx)(S.a,{})}),Object(g.jsx)("span",{className:"quantity",children:e.quantity}),Object(g.jsx)("span",{className:"inc",onClick:function(){return s({type:"INC",payload:e.id})},children:Object(g.jsx)(S.b,{})})]})})}),Object(g.jsx)("div",{className:"col-2",children:Object(g.jsx)("div",{className:"cart__total ",children:N.a.format(e.discountPrice*e.quantity,{code:"USD"})})}),Object(g.jsx)("div",{className:"col-2 ",children:Object(g.jsx)("div",{className:"cart__remove",onClick:function(){return s({type:"REMOVE",payload:e.id})},children:Object(g.jsx)(_.b,{})})})]},e.id)}))]}),Object(g.jsx)("div",{className:"col-3 summary-col",children:Object(g.jsxs)("div",{className:"summary",children:[Object(g.jsx)("div",{className:"summary__heading",children:"Summary"}),Object(g.jsxs)("div",{className:"summary__details",children:[Object(g.jsxs)("div",{className:"row mb-10",children:[Object(g.jsx)("div",{className:"col-6",children:"Total Items:"}),Object(g.jsx)("div",{className:"col-6",children:t})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-6",children:"Total Price:"}),Object(g.jsx)("div",{className:"col-6",children:N.a.format(c,{code:"USD"})}),Object(g.jsx)("button",{type:"button",className:"checkout",children:"checkout"})]})]})]})})]})}):"you have not"]})})})},C=t(27),Q=function(){var e=Object(c.useState)(1),i=Object(C.a)(e,2),t=i[0],s=i[1],a=Object(n.f)().id,r=Object(o.b)(),d=Object(o.c)((function(e){return e.ProductsReducer})).product;console.log(d),Object(c.useEffect)((function(){r({type:"PRODUCT",id:a})}),[a]);return Object(g.jsx)("div",{className:"container mt-100",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("div",{className:"details__image",children:Object(g.jsx)("img",{src:"../images/".concat(d.image),alt:d.image})})}),Object(g.jsxs)("div",{className:"col-6",children:[Object(g.jsx)("div",{className:"details__name",children:d.name}),Object(g.jsxs)("div",{className:"details__prices",children:[Object(g.jsx)("span",{className:"details__actual",children:N.a.format(d.price,{code:"USD"})}),Object(g.jsx)("span",{className:"details__discount",children:N.a.format(d.discountPrice,{code:"USD"})})]}),Object(g.jsx)("div",{className:"details__info",children:Object(g.jsxs)("div",{className:"details__incDec",children:[Object(g.jsx)("span",{className:"dec",children:Object(g.jsx)(S.a,{onClick:function(){t>1&&s(t-1)}})}),Object(g.jsx)("span",{className:"quantity",children:t}),Object(g.jsx)("span",{className:"inc",children:Object(g.jsx)(S.b,{onClick:function(){s(t+1)}})}),Object(g.jsx)("button",{className:"btn-default",onClick:function(){return r({type:"ADD_TO_CART",payload:{product:d,quantity:t}})},children:"Add to Cart"})]})}),Object(g.jsxs)("div",{className:"details__p",children:[Object(g.jsx)("h4",{children:"Details"}),d.desc]})]})]})})};var F=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.a,{store:h,children:[Object(g.jsx)(P,{}),Object(g.jsxs)(n.c,{children:[Object(g.jsx)(n.a,{exact:!0,path:"/",component:y}),Object(g.jsx)(n.a,{exact:!0,path:"/Cart",component:L}),Object(g.jsx)(n.a,{exact:!0,path:"/details/:id",component:Q})]})]})})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(i){var t=i.getCLS,c=i.getFID,s=i.getFCP,a=i.getLCP,n=i.getTTFB;t(e),c(e),s(e),a(e),n(e)}))};a.a.render(Object(g.jsx)(f.a,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),D()}},[[45,1,2]]]);
//# sourceMappingURL=main.fd963259.chunk.js.map