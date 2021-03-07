(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t.n(a),o=t(76),i=t.n(o),r=(t(89),t(20)),s=t(12),m=t(46),j=t(27),l=t(4),b=function(e){var n=e.pokemon;return Object(l.jsxs)("div",{className:"rounded-md my-2 p-4 shadow-md",children:[Object(l.jsx)("img",{src:n.image,alt:n.name,width:"100%"}),Object(l.jsx)("h4",{className:"capitalize",children:n.name})]})},d=t(52),p=t(26),h=t(48),O=t(79),x=t(77),u=[{title:"Pokemon List",path:"/",icon:Object(l.jsx)(h.b,{}),cName:"nav-text"},{title:"My Pokemon List",path:"/my-pokemon",icon:Object(l.jsx)(x.a,{}),cName:"nav-text"}];t(60);var k,v,g=function(e){var n=Object(a.useState)(!1),t=Object(p.a)(n,2),c=t[0],o=t[1],i=function(){return o(!c)},s=e.title;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(r.b,{to:"#",className:"menu-bars",children:Object(l.jsx)(h.a,{onClick:i})}),Object(l.jsx)("h1",{className:"font-bold text-white  text-lg capitalize",children:s})]}),Object(l.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(l.jsxs)("ul",{className:"nav-menu-items",children:[Object(l.jsx)("li",{className:"navbar-toggle",children:Object(l.jsx)(r.b,{to:"#",className:"menu-bars",children:Object(l.jsx)(O.a,{onClick:i})})}),u.map((function(e,n){return Object(l.jsx)("li",{className:e.cName,children:Object(l.jsxs)(r.b,{to:e.path,children:[e.icon,Object(l.jsx)("span",{children:e.title})]})},n)}))]})})]})},f=Object(j.gql)(k||(k=Object(m.a)(["\n  query LoadPokemon {\n    pokemons {\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n"]))),y=function(){var e=Object(j.useQuery)(f),n=e.loading,t=e.error,a=e.data;return n?Object(l.jsx)(d.a,{animation:"border",role:"status",children:Object(l.jsx)("span",{className:"sr-only",children:"Loading..."})}):t?Object(l.jsx)("h1",{children:"Error"}):Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{title:"Pokemon List"}),Object(l.jsx)("div",{className:"container mx-auto p-4 flex flex-col",children:a.pokemons.results.map((function(e,n){return Object(l.jsx)(r.b,{to:"/pokemon/".concat(e.name),children:Object(l.jsx)(b,{pokemon:e})},n)}))})]})},N=t(83),w=t(40),C=function(e,n){switch(n.type){case"add_pokemon":if(e.pokemons.some((function(e){return e.nickname===n.payload.nickname})))return alert("Nickname exist"),e;var t=Object(w.a)(Object(w.a)({},e),{},{pokemons:[].concat(Object(N.a)(e.pokemons),[n.payload])});return localStorage.setItem("my-pokemon",JSON.stringify(t)),t;case"remove_pokemon":var a=e.pokemons.filter((function(e){return e.nickname!==n.payload})),c=Object(w.a)(Object(w.a)({},e),{},{pokemons:a});return localStorage.setItem("my-pokemon",JSON.stringify(c)),c;default:return e}},I={pokemons:localStorage.getItem("my-pokemon")?JSON.parse(localStorage.getItem("my-pokemon")).pokemons:[]},P=Object(a.createContext)(I),S=function(e){var n=e.children,t=Object(a.useReducer)(C,I),c=Object(p.a)(t,2),o=c[0],i=c[1];return Object(l.jsx)(P.Provider,{value:[o,i],children:n})},L=t(32),F=t(35),M=function(){var e=Object(a.useContext)(P),n=Object(p.a)(e,2),t=n[0],c=n[1];return console.log(t.pokemons),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{title:"My Pokemon List"}),t.pokemons.map((function(e,n){return Object(l.jsx)("div",{className:"flex flex-row",children:Object(l.jsxs)(F.a,{className:"position-static",style:{width:"45%"},children:[Object(l.jsx)(F.a.Img,{variant:"top",src:e.pokemon.image.url,alt:"{pokemon.nickname}",width:"100px",height:"180px"}),Object(l.jsxs)(F.a.Body,{children:[Object(l.jsx)(F.a.Title,{children:e.nickname}),Object(l.jsxs)(F.a.Text,{children:["Pokemon name ",e.pokemon.name,". They have ",e.pokemon.weight," lbs and ",e.pokemon.height," inc. One of their ability is ",e.pokemon.abilities[0].ability.name,". One of their move is ",e.pokemon.moves[0].move.name," and one of their type is ",e.pokemon.types[0].type.name,"."]}),Object(l.jsx)(r.b,{to:"/pokemon/".concat(e.pokemon.name),children:Object(l.jsx)(L.a,{className:"mr-2",variant:"primary",children:"Detail"})},n),Object(l.jsx)(L.a,{className:"mr-2",variant:"danger",onClick:function(){return c({type:"remove_pokemon",payload:e.nickname})},children:"Remove"})]})]})},n)}))]})},q=t(82),B=function(e){var n=e.title,t=e.backButton,a=Object(s.f)();return Object(l.jsxs)("div",{className:"navbar",children:[t?Object(l.jsx)(L.a,{onClick:function(){return a.goBack()},children:Object(l.jsx)(q.a,{})}):null,Object(l.jsx)("h1",{className:"font-bold text-white  text-lg capitalize",children:n})]})},T=t(104),J=Object(j.gql)(v||(v=Object(m.a)(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      image: sprites{\n        url: front_default\n      }\n      weight\n      height\n      abilities{\n        ability{\n          name\n        }\n      }\n      moves{\n        move{\n          name\n        }\n      }\n      types{\n        type{\n          name\n        }\n      }\n    }\n  }\n"]))),_=function(){var e=Object(a.useContext)(P),n=Object(p.a)(e,2),t=(n[0],n[1]),c=Object(s.g)().name,o=Object(j.useQuery)(J,{variables:{name:c}}),i=o.loading,r=o.error,m=o.data;return i?Object(l.jsx)(d.a,{animation:"border",role:"status",children:Object(l.jsx)("span",{className:"sr-only",children:"Loading..."})}):r?Object(l.jsx)("h1",{children:"Error"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B,{title:"Detail "+m.pokemon.name,backButton:!0}),Object(l.jsxs)("p",{children:["Weight : ",m.pokemon.weight," lbs"]}),Object(l.jsxs)("p",{children:["Height : ",m.pokemon.height," inc"]}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(T.a.Item,{active:!0,children:" Abilities"}),m.pokemon.abilities.map((function(e,n){var t=e.ability;return Object(l.jsx)(T.a.Item,{children:t.name},n)}))]}),Object(l.jsx)("br",{}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(T.a.Item,{active:!0,children:" Move"}),m.pokemon.moves.map((function(e,n){var t=e.move;return Object(l.jsx)(T.a.Item,{children:t.name},n)}))]}),Object(l.jsx)("br",{}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(T.a.Item,{active:!0,children:" Type"}),m.pokemon.types.map((function(e,n){var t=e.type;return Object(l.jsx)(T.a.Item,{children:t.name},n)}))]}),Object(l.jsx)("br",{}),Object(l.jsx)(L.a,{variant:"info",onClick:function(){if(Math.round(Math.random())){var e=prompt("Enter nickname","");t({type:"add_pokemon",payload:{nickname:e,pokemon:m.pokemon}})}else alert("You Lose Your Pokemon")},children:"Catch Pokemon"})," "]})},E=(t(101),function(){var e=new j.ApolloClient({uri:"https://graphql-pokeapi.vercel.app/api/graphql",cache:new j.InMemoryCache});return Object(l.jsx)(S,{children:Object(l.jsx)(j.ApolloProvider,{client:e,children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",children:Object(l.jsx)(y,{})}),Object(l.jsx)(s.a,{path:"/my-pokemon",children:Object(l.jsx)(M,{})}),Object(l.jsx)(s.a,{path:"/pokemon/:name",children:Object(l.jsx)(_,{})})]})})})})}),z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,105)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),z()},60:function(e,n,t){},89:function(e,n,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.47da0775.chunk.js.map