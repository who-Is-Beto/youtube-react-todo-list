(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),o=n(8),a=n.n(o),i=(n(15),n(2)),r=n(9),l=n(3),u=n.n(l),d=Object(c.createContext)(),j=function(e){var t=Object(c.useState)([{content:"Here is an example, delete me plz",status:!1,id:1}]),n=Object(i.a)(t,2),o=n[0],a=n[1];return Object(s.jsx)(d.Provider,{value:[o,a],children:e.children})};n(16);var b=function(e){var t=e.setStatus,n=e.status,o=e.setFilteredTodos,a=Object(c.useContext)(d),l=Object(i.a)(a,2),j=l[0],b=l[1],f=Object(c.useState)(""),O=Object(i.a)(f,2),m=O[0],h=O[1];return Object(c.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));b(e)}}()}),[]),Object(c.useEffect)((function(){!function(){switch(n){case"completed":o(j.filter((function(e){return!0===e.status})));break;case"uncompleted":o(j.filter((function(e){return!1===e.status})));break;default:o(j)}}(),localStorage.setItem("todos",JSON.stringify(j))}),[j,n]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"input__container",children:[Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===m?u.a.fire({icon:"error",title:"Oops...",text:"You must to write something!"}):(b((function(e){return[].concat(Object(r.a)(e),[{content:m,status:!1,id:1e3*Math.random()}])})),u.a.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1e3}),h(""))},children:[Object(s.jsx)("label",{htmlFor:"input"}),Object(s.jsx)("i",{className:"fas fa-pen pen"}),Object(s.jsx)("input",{id:"input",value:m,type:"text",placeholder:"Plan?",onChange:function(e){h(e.target.value)}}),Object(s.jsx)("button",{className:"input__button","aria-label":"Submit to do element",children:Object(s.jsx)("i",{className:"fas fa-plus"})})]}),Object(s.jsxs)("select",{onChange:function(e){t(e.target.value)},name:"To Do Filter",className:"filter__todo",children:[Object(s.jsx)("option",{value:"all",children:"All"}),Object(s.jsx)("option",{value:"completed",children:"Completed"}),Object(s.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})})},f=n(7);n(17);var O=function(e){var t=e.item,n=Object(c.useContext)(d),o=Object(i.a)(n,2),a=o[0],r=o[1];return Object(s.jsxs)("div",{className:t.status?"item__completed":"todo__item",children:[Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("p",{children:t.content})}),Object(s.jsxs)("div",{className:"options",children:[Object(s.jsx)("button",{className:t.status?"done":"undone",type:"button",onClick:function(){r(a.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{status:!e.status}):e})))},"aria-label":"Complete to do elemet",children:Object(s.jsx)("i",{className:"fas fa-check-circle"})}),Object(s.jsx)("button",{className:t.status?"trashDone":"trash",type:"button",onClick:function(){u.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"rgba(90, 241, 136, 0.842)",cancelButtonColor:"#ff4e6e",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(r(a.filter((function(e){return e.id!==t.id}))),u.a.fire("Deleted!","Your file has been deleted.","success"))}))},"aria-label":"Delete to do element",children:Object(s.jsx)("i",{className:"fas fa-trash-alt"})})]})]})};n(18);var m=function(e){var t=e.filteredTodos;return Object(s.jsx)("div",{className:"todo__list",children:t.map((function(e){return Object(s.jsx)(O,{item:e},e.id)}))})};n(19);var h=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,1)[0];return Object(s.jsx)("header",{children:Object(s.jsxs)("nav",{children:[Object(s.jsx)("div",{className:"logo",children:"whoIsBeto To Do List"}),Object(s.jsx)("div",{className:"todos__number",children:Object(s.jsxs)("span",{children:["You have:"," ",t.length," ","to dos"]})})]})})};n(20);var x=function(){var e=Object(c.useState)("all"),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)([]),r=Object(i.a)(a,2),l=r[0],u=r[1];return Object(s.jsxs)(j,{children:[Object(s.jsx)(h,{}),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(b,{setStatus:o,status:n,filteredTodos:l,setFilteredTodos:u}),Object(s.jsx)(m,{filteredTodos:l})]})]})};a.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.1acc6355.chunk.js.map