(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(13),n(7)),i=n(3),s=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],l=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(t(r.trim()),l(""))}},o.a.createElement("label",{className:"form__label"},o.a.createElement("h2",{className:"form__header"},"Dodaj nowe zadanie"),o.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},className:"form__input",placeholder:"Co jest do zrobienia?",autoFocus:!0}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie")))}),m=(n(15),function(e){var t=e.headerTitle,n=e.headerButtons,a=e.body;return o.a.createElement("div",{className:"list"},o.a.createElement("h2",{className:"list__header"},t,n),a)}),d=(n(16),function(e){var t=e.taskTable,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"list__tasks"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"list__item ".concat(e.done&&n?"list__item--hidden":"")},o.a.createElement("button",{className:"list__button list__button--done",onClick:function(){return c(e.id)}},e.done?"\u2714":" "),o.a.createElement("span",{className:"list__taskContent ".concat(e.done?" list__taskContent--done":"")}," ",e.content," "),o.a.createElement("button",{className:"list__button list__button--remove",onClick:function(){return a(e.id)}},"\ud83d\uddd1"))})))}),f=(n(17),function(e){var t=e.hideDone,n=e.taskTable,a=e.toggleHideDone,c=e.setAllDone;return 0===n.length?null:o.a.createElement("span",{className:"list__functionButton"},o.a.createElement("button",{className:"list__button--showDone",onClick:a},t?"Wy\u015bwietl":"Ukryj"," wykonane"),o.a.createElement("button",{className:"list__button--checkAll",onClick:c,disabled:n.every((function(e){return e.done}))},"Zako\u0144cz wszystkie"))}),b=function(e){var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,t))},h=(n(18),function(e){return o.a.createElement("main",{className:"main"},e.children)});var _=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,content:"Undone task 1",done:!1},{id:2,content:"Done task 2",done:!0}]),_=Object(s.a)(r,2),k=_[0],E=_[1];return o.a.createElement(h,null,o.a.createElement(b,{title:"Lista zada\u0144"}),o.a.createElement(u,{addNewTask:function(e){E((function(t){return[].concat(Object(l.a)(t),[{content:e,done:!1,id:0===t.length?1:t[t.length-1].id+1}])}))}}),o.a.createElement(m,{taskTable:k,hideDone:n,headerTitle:"Lista zada\u0144:",headerButtons:o.a.createElement(f,{taskTable:k,hideDone:n,toggleHideDone:function(){c((function(e){return!e}))},setAllDone:function(){E((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!0})}))}))}}),body:o.a.createElement(d,{taskTable:k,hideDone:n,removeTask:function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){E((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.809945a4.chunk.js.map