(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,a,t){e.exports={container:"Navbar_container__BOCDJ",link:"Navbar_link__TxlL_",div:"Navbar_div__7KmOh",isActive:"Navbar_isActive__1rvnf"}},20:function(e,a,t){},32:function(e,a,t){e.exports={App:"Task5_App__ylnXo",numb:"Task5_numb__2co7u"}},37:function(e,a,t){e.exports={holder:"Time_holder__2pyEx",block:"Time_block__Fb9Be",btn:"Time_btn__36Yf6"}},50:function(e,a,t){e.exports={App:"Task4_App__3RRnB",numb:"Task4_numb__2d6Bd"}},56:function(e,a,t){},59:function(e,a,t){e.exports={ava:"ava_ava__2NvWl"}},60:function(e,a,t){e.exports={name:"name_name__34Jxm"}},61:function(e,a,t){e.exports={message:"message_message__2hYW-"}},62:function(e,a,t){e.exports={time:"time_time__2zBgA"}},72:function(e,a,t){e.exports=t(87)},77:function(e,a,t){},78:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=(t(77),t(10)),o=(t(78),t(56),t(32)),m=t.n(o),u=t(59),s=t.n(u),d=function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://vk.com/artermakov"},l.a.createElement("img",{src:"https://sun9-2.userapi.com/c854120/v854120619/65adc/ZhB2MdQPN8o.jpg",alt:"ava"})))},v=t(60),E=t.n(v),f=function(e){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://vk.com/artermakov"},e.name))},p=t(61),h=t.n(p),b=function(e){return l.a.createElement("div",null,e.sms)},g=t(62),y=t.n(g),N=function(e){return l.a.createElement("div",null,e.time)},k=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Task1"),l.a.createElement("div",{className:"app-wrapper"},l.a.createElement("div",{className:s.a.ava},l.a.createElement(d,null)),l.a.createElement("div",{className:E.a.name},l.a.createElement(f,{name:"\u0410\u0440\u0442\u0451\u043c"})),l.a.createElement("div",{className:h.a.message},l.a.createElement(b,{sms:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043d\u0435 \u0431\u0435\u0439 \u043f\u0430\u043b\u043a\u0430\u043c\u0438 \u0437\u0430 \u0433\u043e\u0432\u043d\u043e\u043a\u043e\u0434 :)"})),l.a.createElement("div",{className:y.a.time},l.a.createElement(N,{time:"\u0422\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e"}))))},j=t(20),O=t.n(j),_=t(88),C=t(120);var S=function(e){return l.a.createElement("div",{className:O.a.back},l.a.createElement("div",{className:O.a.main},l.a.createElement("div",null,l.a.createElement("h3",null,e.title)),l.a.createElement("ul",null,e.affairs.map((function(a){return l.a.createElement("div",{className:O.a.li,key:a.id},l.a.createElement("u",null,"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415:")," ",l.a.createElement("strong",null,a.name),l.a.createElement("u",{className:O.a.ots},"\u041f\u0420\u0418\u041e\u0420\u0418\u0422\u0415\u0422:"),l.a.createElement("strong",null,a.priority),l.a.createElement(_.a,{className:O.a.btn1,onClick:function(){e.removeAffair(a.id)},variant:"contained",color:"secondary",size:"small"},"\u0445"))}))),l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement(_.a,{className:O.a.btn,onClick:function(){e.changeFilter("all")},color:"primary",variant:"contained"},"all"),l.a.createElement(_.a,{className:O.a.btn,onClick:function(){e.changeFilter("low")},color:"primary",variant:"contained"},"low"),l.a.createElement(_.a,{className:O.a.btn,onClick:function(){e.changeFilter("middle")},color:"primary",variant:"contained"},"middle"),l.a.createElement(_.a,{className:O.a.btn,onClick:function(){e.changeFilter("hight")},color:"primary",variant:"contained"},"hight")))))};function T(){var e=Object(n.useState)([{id:1,name:"\u0423\u0447\u0451\u0431\u0430",priority:"hight"},{id:2,name:"\u0420\u0430\u0431\u043e\u0442\u0430",priority:"middle"},{id:3,name:"\u0421\u043f\u043e\u0440\u0442",priority:"hight"},{id:4,name:"\u0410\u0441\u0442\u0440\u043e\u043d\u043e\u043c\u0438\u044f",priority:"low"},{id:5,name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",priority:"low"}]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),m=o[0],u=o[1];var s=t;return"low"===m&&(s=t.filter((function(e){return"low"===e.priority}))),"middle"===m&&(s=t.filter((function(e){return"middle"===e.priority}))),"hight"===m&&(s=t.filter((function(e){return"hight"===e.priority}))),l.a.createElement("div",null,l.a.createElement(S,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u0432",affairs:s,removeAffair:function(e){var a=t.filter((function(a){return a.id!==e}));r(a)},changeFilter:function(e){u(e)}}))}var w=t(33),A=t(13);function x(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,e.title)),l.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u0432\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f: ",l.a.createElement("br",null),l.a.createElement("input",{value:r,placeholder:"\u0418\u043c\u044f",onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(a){13===a.charCode&&""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))}}),l.a.createElement("button",{onClick:function(){""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement("br",null),l.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0451\u043d \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435: ",e.arrayName.length)))}function P(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:m.a.App},l.a.createElement(x,{title:"\u0417\u0410\u0414\u0410\u041d\u0418\u0415 3",addName:function(e){var a=[{id:Object(A.v1)(),name:e}].concat(Object(w.a)(t));r(a),console.log(t)},arrayName:t}))}var I=t(50),K=t.n(I),F=t(122),H=function(e){return l.a.createElement("div",null,l.a.createElement(F.a,{inputProps:{"aria-label":"primary checkbox"}}))},J=t(121),B=function(e){return l.a.createElement(J.a,{id:"outlined-basic",label:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f?",variant:"outlined",value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress})},L=function(e){return l.a.createElement(_.a,{variant:"contained",color:"primary",onClick:e.onClick},e.title)};function M(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",{className:K.a.title},e.title)),l.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u0432\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f: ",l.a.createElement("br",null),l.a.createElement(B,{value:r,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(a){13===a.charCode&&""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))}}),l.a.createElement(L,{onClick:function(){""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),l.a.createElement("br",null),l.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0451\u043d \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435: ",l.a.createElement("span",{className:K.a.numb},e.arrayName.length)),l.a.createElement("br",null),l.a.createElement(H,null)))}function R(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:m.a.App},l.a.createElement(M,{title:"\u0417\u0410\u0414\u0410\u041d\u0418\u0415 4",addName:function(e){var a=[{id:Object(A.v1)(),name:e}].concat(Object(w.a)(t));r(a),console.log(t)},arrayName:t}))}var z=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"PreJunior"),l.a.createElement(k,null),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task2"),l.a.createElement("div",null,l.a.createElement(T,null))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task3"),l.a.createElement(P,null)),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task4"),l.a.createElement(R,null)))},D=t(41),V=function(e){return e.editMode?l.a.createElement(J.a,{value:e.value,onChange:e.changeValueInput,onKeyPress:e.onKeyPressEnter,variant:"standard",color:"secondary",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",autoFocus:!0,onBlur:e.offEditMode}):l.a.createElement("span",{onDoubleClick:e.onEditMode},e.value)},W=function(e){var a=e.radioArr.map((function(a){return l.a.createElement("div",{key:a.id},l.a.createElement("label",null,a.value),l.a.createElement("input",{type:"radio",value:a.value,name:a.name,checked:a.status,onChange:function(){e.changeStatus(a.id)}}))}));return l.a.createElement(l.a.Fragment,null,a)},U=function(e){var a=e.optionValue.map((function(e){return l.a.createElement("option",{key:e.id},e.title)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{value:e.title,onChange:function(a){e.setSelected(a.currentTarget.value)}},a))},Y=function(e,a){switch(a.type){case"SORT":var t=Object(w.a)(e);return"up"===a.payload&&t.sort((function(e,a){return e.age-a.age})),"down"===a.payload&&t.sort((function(e,a){return a.age-e.age})),t;case"CHECK":return e.filter((function(e){return e.age>a.payload}))}return[]},G=t(48),Q=t.n(G),X=t(37),Z=t.n(X),$=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("HH:mm:ss"),o=Object(i.a)(c,2),m=o[0],u=o[1],s=Q()().format("LLLL");return l.a.createElement("div",null,l.a.createElement("div",{className:Z.a.holder},l.a.createElement("div",{className:Z.a.block},s),l.a.createElement("b",null,l.a.createElement("div",{className:Z.a.date},m))),l.a.createElement("div",{className:Z.a.btn},l.a.createElement("div",{className:Z.a.intervalId}," Interval ID: ",l.a.createElement("b",null,t)),l.a.createElement(_.a,{color:"primary",variant:"outlined",onClick:function(){var e=setInterval((function(){var e=Q()().format("HH:mm:ss");u(e)}),1e3);r(e)},size:"small"},"Start Timer"),l.a.createElement(_.a,{color:"secondary",variant:"outlined",onClick:function(){clearInterval(t);var e=setInterval((function(){return u(Q()().format("HH:mm:ss"))}),1e3);r(e)},size:"medium"},"Show Timer"),l.a.createElement(_.a,{color:"primary",variant:"outlined",onClick:function(){clearInterval(t)},size:"small"},"Stop Update")))},q=[{id:Object(A.v1)(),title:"HELLO"},{id:Object(A.v1)(),title:"DEAR"},{id:Object(A.v1)(),title:"IGNAT"}];var ee=function(){var e=Object(n.useState)("\u0418\u0417\u041c\u0415\u041d\u0418\u0422\u042c \u0414\u0412\u041e\u0419\u041d\u042b\u041c \u041a\u041b\u0418\u041a\u041e\u041c"),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),m=o[0],u=o[1],s=Object(n.useState)("HELLO"),d=Object(i.a)(s,2),v=d[0],E=d[1],f=Object(n.useState)([{id:Object(A.v1)(),name:"radio",value:"one",status:!1},{id:Object(A.v1)(),name:"radio",value:"two",status:!0},{id:Object(A.v1)(),name:"radio",value:"three",status:!1},{id:Object(A.v1)(),name:"radio",value:"four",status:!1},{id:Object(A.v1)(),name:"radio",value:"five",status:!1}]),p=Object(i.a)(f,2),h=p[0],b=p[1],g=Object(n.useState)([{id:1,name:"Artem",age:21},{id:2,name:"Ksusha",age:20},{id:3,name:"Misha",age:4},{id:4,name:"Sasha",age:74},{id:5,name:"Igor",age:16}]),y=Object(i.a)(g,2),N=y[0],k=y[1],j=function(){u(!1)};return l.a.createElement("div",null,l.a.createElement("h1",null,"Junior"),l.a.createElement("div",null,l.a.createElement("h3",null,"Task6"),l.a.createElement(V,{value:t,editMode:m,changeValueInput:function(e){r(e.currentTarget.value)},onEditMode:function(){u(!0)},onKeyPressEnter:function(e){13===e.charCode&&""!==t&&j()},offEditMode:j})),l.a.createElement(_.a,{onClick:function(){""===t?alert("\u0421\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439!"):(r(t),u(!1))},variant:"contained",color:"secondary"},"SAVE"),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 7"),l.a.createElement(U,{optionValue:q,title:v,setSelected:E}),l.a.createElement(W,{radioArr:h,changeStatus:function(e){var a=h.map((function(a){return a.id===e?Object(D.a)(Object(D.a)({},a),{},{status:!0}):Object(D.a)(Object(D.a)({},a),{},{status:!1})}));b(a)}})),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"task 8"),N.map((function(e){return l.a.createElement("p",{key:e.id},e.name," : ",e.age)})),l.a.createElement(_.a,{color:"primary",variant:"contained",onClick:function(){k(Y(N,{type:"SORT",payload:"up"}))}},"Sort Up"),l.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:function(){k(Y(N,{type:"SORT",payload:"down"}))}},"Sort Down"),l.a.createElement("br",null),l.a.createElement(_.a,{variant:"outlined",onClick:function(){k(Y(N,{type:"CHECK",payload:18}))}},"Sort 18")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 9"),l.a.createElement($,null)))};var ae=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"JuniorPlus"))},te=t(36),ne=t(12),le=t(17),re=t.n(le);var ce=function(){return l.a.createElement("div",{className:re.a.container},l.a.createElement("div",{className:re.a.div},l.a.createElement(te.b,{activeClassName:re.a.isActive,className:re.a.link,to:"/prejunior"},"PreJunior")),l.a.createElement("div",{className:re.a.div},l.a.createElement(te.b,{activeClassName:re.a.isActive,className:re.a.link,to:"/junior"},"Junior")),l.a.createElement("div",{className:re.a.div},l.a.createElement(te.b,{activeClassName:re.a.isActive,className:re.a.link,to:"/juniorplus"},"JuniorPlus")))};var ie=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(te.a,null,l.a.createElement("div",{className:m.a.App},l.a.createElement("input",{type:"checkbox",id:"hmt",className:"hidden-menu-ticker",onClick:function(){r(!t)}}),l.a.createElement("label",{className:"btn-menu",htmlFor:"hmt"},l.a.createElement("span",{className:"first"}),l.a.createElement("span",{className:"second"}),l.a.createElement("span",{className:"third"})),t&&l.a.createElement(ce,null),l.a.createElement("div",null,l.a.createElement(ne.a,{path:"/prejunior",component:z}),l.a.createElement(ne.a,{path:"/junior",component:ee}),l.a.createElement(ne.a,{path:"/juniorplus",component:ae}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.4c8d5215.chunk.js.map