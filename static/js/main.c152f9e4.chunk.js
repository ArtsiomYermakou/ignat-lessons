(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=(t(99),t(9)),o=(t(100),t(68),t(37)),u=t.n(o),m=t(72),s=t.n(m),d=function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://vk.com/artermakov"},l.a.createElement("img",{src:"https://sun9-2.userapi.com/c854120/v854120619/65adc/ZhB2MdQPN8o.jpg",alt:"ava"})))},E=t(73),v=t.n(E),p=function(e){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://vk.com/artermakov"},e.name))},f=t(74),b=t.n(f),h=function(e){return l.a.createElement("div",null,e.sms)},g=t(75),j=t.n(g),O=function(e){return l.a.createElement("div",null,e.time)},N=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Task1"),l.a.createElement("div",{className:"app-wrapper"},l.a.createElement("div",{className:s.a.ava},l.a.createElement(d,null)),l.a.createElement("div",{className:v.a.name},l.a.createElement(p,{name:"\u0410\u0440\u0442\u0451\u043c"})),l.a.createElement("div",{className:b.a.message},l.a.createElement(h,{sms:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043d\u0435 \u0431\u0435\u0439 \u043f\u0430\u043b\u043a\u0430\u043c\u0438 \u0437\u0430 \u0433\u043e\u0432\u043d\u043e\u043a\u043e\u0434 :)"})),l.a.createElement("div",{className:j.a.time},l.a.createElement(O,{time:"\u0422\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e"}))))},_=t(25),k=t.n(_),y=t(111),C=t(146);var T=function(e){return l.a.createElement("div",{className:k.a.back},l.a.createElement("div",{className:k.a.main},l.a.createElement("div",null,l.a.createElement("h3",null,e.title)),l.a.createElement("ul",null,e.affairs.map((function(a){return l.a.createElement("div",{className:k.a.li,key:a.id},l.a.createElement("u",null,"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415:")," ",l.a.createElement("strong",null,a.name),l.a.createElement("u",{className:k.a.ots},"\u041f\u0420\u0418\u041e\u0420\u0418\u0422\u0415\u0422:"),l.a.createElement("strong",null,a.priority),l.a.createElement(y.a,{className:k.a.btn1,onClick:function(){e.removeAffair(a.id)},variant:"contained",color:"secondary",size:"small"},"\u0445"))}))),l.a.createElement("div",null,l.a.createElement(C.a,null,l.a.createElement(y.a,{className:k.a.btn,onClick:function(){e.changeFilter("all")},color:"primary",variant:"contained"},"all"),l.a.createElement(y.a,{className:k.a.btn,onClick:function(){e.changeFilter("low")},color:"primary",variant:"contained"},"low"),l.a.createElement(y.a,{className:k.a.btn,onClick:function(){e.changeFilter("middle")},color:"primary",variant:"contained"},"middle"),l.a.createElement(y.a,{className:k.a.btn,onClick:function(){e.changeFilter("hight")},color:"primary",variant:"contained"},"hight")))))};function S(){var e=Object(n.useState)([{id:1,name:"\u0423\u0447\u0451\u0431\u0430",priority:"hight"},{id:2,name:"\u0420\u0430\u0431\u043e\u0442\u0430",priority:"middle"},{id:3,name:"\u0421\u043f\u043e\u0440\u0442",priority:"hight"},{id:4,name:"\u0410\u0441\u0442\u0440\u043e\u043d\u043e\u043c\u0438\u044f",priority:"low"},{id:5,name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",priority:"low"}]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],m=o[1];var s=t;return"low"===u&&(s=t.filter((function(e){return"low"===e.priority}))),"middle"===u&&(s=t.filter((function(e){return"middle"===e.priority}))),"hight"===u&&(s=t.filter((function(e){return"hight"===e.priority}))),l.a.createElement("div",null,l.a.createElement(T,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u0432",affairs:s,removeAffair:function(e){var a=t.filter((function(a){return a.id!==e}));r(a)},changeFilter:function(e){m(e)}}))}var A=t(39),w=t(14);function P(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,e.title)),l.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u0432\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f: ",l.a.createElement("br",null),l.a.createElement("input",{value:r,placeholder:"\u0418\u043c\u044f",onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(a){13===a.charCode&&""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))}}),l.a.createElement("button",{onClick:function(){""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement("br",null),l.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0451\u043d \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435: ",e.arrayName.length)))}function x(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:u.a.App},l.a.createElement(P,{title:"\u0417\u0410\u0414\u0410\u041d\u0418\u0415 3",addName:function(e){var a=[{id:Object(w.v1)(),name:e}].concat(Object(A.a)(t));r(a),console.log(t)},arrayName:t}))}var L=t(57),H=t.n(L),F=t(150),K=function(e){return l.a.createElement("div",null,l.a.createElement(F.a,{inputProps:{"aria-label":"primary checkbox"}}))},I=t(149),B=function(e){return l.a.createElement(I.a,{id:"outlined-basic",label:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f?",variant:"outlined",value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress})},M=function(e){return l.a.createElement(y.a,{variant:"contained",color:"primary",onClick:e.onClick},e.title)};function R(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",{className:H.a.title},e.title)),l.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u0432\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f: ",l.a.createElement("br",null),l.a.createElement(B,{value:r,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(a){13===a.charCode&&""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))}}),l.a.createElement(M,{onClick:function(){""!==r.trim()&&(e.addName(r),alert("\u041f\u0440\u0438\u0432\u0435\u0442, "+r+" !"),c(""))},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),l.a.createElement("br",null),l.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0451\u043d \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435: ",l.a.createElement("span",{className:H.a.numb},e.arrayName.length)),l.a.createElement("br",null),l.a.createElement(K,null)))}function J(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:u.a.App},l.a.createElement(R,{title:"\u0417\u0410\u0414\u0410\u041d\u0418\u0415 4",addName:function(e){var a=[{id:Object(w.v1)(),name:e}].concat(Object(A.a)(t));r(a),console.log(t)},arrayName:t}))}var V=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"PreJunior"),l.a.createElement(N,null),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task2"),l.a.createElement("div",null,l.a.createElement(S,null))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task3"),l.a.createElement(x,null)),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task4"),l.a.createElement(J,null)))},D=t(20),W=function(e){return e.editMode?l.a.createElement(I.a,{value:e.value,onChange:e.changeValueInput,onKeyPress:e.onKeyPressEnter,variant:"standard",color:"secondary",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",autoFocus:!0,onBlur:e.offEditMode}):l.a.createElement("span",{onDoubleClick:e.onEditMode},e.value)},G=function(e){var a=e.radioArr.map((function(a){return l.a.createElement("div",{key:a.id},l.a.createElement("label",null,a.value),l.a.createElement("input",{type:"radio",value:a.value,name:a.name,checked:a.status,onChange:function(){e.changeStatus(a.id)}}))}));return l.a.createElement(l.a.Fragment,null,a)},z=function(e){var a=e.optionValue.map((function(e){return l.a.createElement("option",{key:e.id},e.title)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{value:e.title,onChange:function(a){e.setSelected(a.currentTarget.value)}},a))},U=function(e,a){switch(a.type){case"SORT":var t=Object(A.a)(e);return"up"===a.payload&&t.sort((function(e,a){return e.age-a.age})),"down"===a.payload&&t.sort((function(e,a){return a.age-e.age})),t;case"CHECK":return e.filter((function(e){return e.age>a.payload}))}return[]},Y=t(58),Z=t.n(Y),Q=t(43),X=t.n(Q),$=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("HH:mm:ss"),o=Object(i.a)(c,2),u=o[0],m=o[1],s=Z()().format("LLLL"),d=function(){clearInterval(t)};return l.a.createElement("div",null,l.a.createElement("div",{className:X.a.holder},l.a.createElement("div",{className:X.a.block},s),l.a.createElement("b",null,l.a.createElement("div",{className:X.a.date},u))),l.a.createElement("div",{className:X.a.btn},l.a.createElement("div",{className:X.a.intervalId}," Interval ID: ",l.a.createElement("b",null,t)),l.a.createElement(y.a,{color:"primary",variant:"outlined",onClick:function(){d();var e=setInterval((function(){var e=Z()().format("HH:mm:ss");m(e)}),1e3);r(e)},size:"small"},"Start Timer"),l.a.createElement(y.a,{color:"primary",variant:"outlined",onClick:d,size:"small"},"Stop Update")))},q=t(32),ee={loading:!1},ae=function(e){return{type:"SET_LOADING",loading:e}},te=t(147),ne=t(81),le=t.n(ne),re=function(){return l.a.createElement("div",null,l.a.createElement(te.a,{color:"secondary",className:le.a.preload}))},ce=t(82),ie=t.n(ce),oe=function(e){return l.a.createElement("div",{className:ie.a.btn},l.a.createElement(y.a,{size:"large",variant:"contained",color:"primary",onClick:e.startLoadingClickHandler},"Load"))},ue=t(56),me=t.n(ue),se=l.a.memo((function(e){var a=Object(n.useState)(21),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",{className:me.a.slider},l.a.createElement("input",{className:me.a.fader,type:"range",min:e.minValue,max:e.maxValue,value:r,step:e.step,onChange:function(e){return c(e.currentTarget.value)}}),l.a.createElement("div",{className:me.a.output},"Value: ",r))})),de=[{id:Object(w.v1)(),title:"HELLO"},{id:Object(w.v1)(),title:"DEAR"},{id:Object(w.v1)(),title:"IGNAT"}];var Ee=function(){var e=Object(n.useState)("\u0418\u0417\u041c\u0415\u041d\u0418\u0422\u042c \u0414\u0412\u041e\u0419\u041d\u042b\u041c \u041a\u041b\u0418\u041a\u041e\u041c"),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],m=o[1],s=Object(n.useState)("HELLO"),d=Object(i.a)(s,2),E=d[0],v=d[1],p=Object(n.useState)([{id:Object(w.v1)(),name:"radio",value:"one",status:!1},{id:Object(w.v1)(),name:"radio",value:"two",status:!0},{id:Object(w.v1)(),name:"radio",value:"three",status:!1},{id:Object(w.v1)(),name:"radio",value:"four",status:!1},{id:Object(w.v1)(),name:"radio",value:"five",status:!1}]),f=Object(i.a)(p,2),b=f[0],h=f[1],g=Object(n.useState)([{id:1,name:"Artem",age:21},{id:2,name:"Ksusha",age:20},{id:3,name:"Misha",age:4},{id:4,name:"Sasha",age:74},{id:5,name:"Igor",age:16}]),j=Object(i.a)(g,2),O=j[0],N=j[1],_=function(){m(!1)},k=Object(q.c)((function(e){return e.juniorPage})),C=Object(q.b)();return l.a.createElement("div",null,k.loading?l.a.createElement(re,null):l.a.createElement("div",null,l.a.createElement("h1",null,"Junior"),l.a.createElement("div",null,l.a.createElement("h3",null,"Task6"),l.a.createElement(W,{value:t,editMode:u,changeValueInput:function(e){r(e.currentTarget.value)},onEditMode:function(){m(!0)},onKeyPressEnter:function(e){13===e.charCode&&""!==t&&_()},offEditMode:_})),l.a.createElement(y.a,{onClick:function(){""===t?alert("\u0421\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439!"):(r(t),m(!1))},variant:"contained",color:"secondary"},"SAVE"),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 7"),l.a.createElement(z,{optionValue:de,title:E,setSelected:v}),l.a.createElement(G,{radioArr:b,changeStatus:function(e){var a=b.map((function(a){return a.id===e?Object(D.a)(Object(D.a)({},a),{},{status:!0}):Object(D.a)(Object(D.a)({},a),{},{status:!1})}));h(a)}})),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"task 8"),O.map((function(e){return l.a.createElement("p",{key:e.id},e.name," : ",e.age)})),l.a.createElement(y.a,{color:"primary",variant:"contained",onClick:function(){N(U(O,{type:"SORT",payload:"up"}))}},"Sort Up"),l.a.createElement(y.a,{variant:"outlined",onClick:function(){N(U(O,{type:"CHECK",payload:18}))}},"Sort 18")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 9"),l.a.createElement($,null)),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 10"),l.a.createElement(oe,{startLoadingClickHandler:function(){C(ae(!0)),setTimeout(C,3e3,ae(!1))}})),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 11"),l.a.createElement(se,{minValue:0,maxValue:100,step:1}))))},ve=t(83),pe=t(60),fe=t.n(pe),be={color:"blue"},he=function(e){return{type:"CHANGER_THEME",payload:e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGER_THEME":return Object(D.a)(Object(D.a)({},e),{},{color:a.payload});default:return e}},je=t(61),Oe=t(87),Ne=t(148),_e=t(152),ke=t(151),ye=t(79),Ce=Object(Ne.a)((function(e){return Object(_e.a)({button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}})}));function Te(e){var a=e.value,t=e.optionElement,n=e.handleChange,r=(Object(Oe.a)(e,["value","optionElement","handleChange"]),Ce());return l.a.createElement("div",null,l.a.createElement(ke.a,{className:r.formControl},l.a.createElement(ye.a,{value:a,onChange:n},t)))}function Se(){var e=Object(ve.a)(["background-color: ","; color: ",""]);return Se=function(){return e},e}var Ae=fe()("theme",{Salmon:"#EE82EE",ming:"#3C6E71",indigo:"#284B63"}),we=fe()("theme",{Salmon:"#C32F27",ming:"#EED7C5",indigo:"#EEE2DF"}),Pe=je.b.div(Se(),Ae,we),xe=[{title:"DEFAULT",value:"jet"},{title:"GREEN",value:"ming"},{title:"BLUE",value:"indigo"}];var Le=function(){var e=Object(q.c)((function(e){return e.juniorPlusPage.color})),a=Object(q.b)(),t=xe.map((function(e,a){return l.a.createElement("option",{key:a,value:e.value},e.title)}));return l.a.createElement(je.a,{theme:{theme:e}},l.a.createElement(Pe,null,l.a.createElement("h1",null,"JuniorPlus"),l.a.createElement("div",null,l.a.createElement("h3",null,"Task 12"),l.a.createElement("div",null,l.a.createElement(Te,{optionArr:xe,value:e,handleChange:function(e){"jet"===e.currentTarget.value?a(he("jet")):"ming"===e.currentTarget.value?a(he("ming")):"indigo"===e.currentTarget.value&&a(he("indigo"))},optionElement:t})))))},He=t(42),Fe=t(12),Ke=t(21),Ie=t.n(Ke);var Be=function(){return l.a.createElement("div",{className:Ie.a.container},l.a.createElement("div",{className:Ie.a.div},l.a.createElement(He.b,{activeClassName:Ie.a.isActive,className:Ie.a.link,to:"/prejunior"},"PreJunior")),l.a.createElement("div",{className:Ie.a.div},l.a.createElement(He.b,{activeClassName:Ie.a.isActive,className:Ie.a.link,to:"/junior"},"Junior")),l.a.createElement("div",{className:Ie.a.div},l.a.createElement(He.b,{activeClassName:Ie.a.isActive,className:Ie.a.link,to:"/juniorplus"},"JuniorPlus")))};var Me=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(He.a,null,l.a.createElement("div",{className:u.a.App},l.a.createElement("input",{type:"checkbox",id:"hmt",className:"hidden-menu-ticker",onClick:function(){r(!t)}}),l.a.createElement("label",{className:"btn-menu",htmlFor:"hmt"},l.a.createElement("span",{className:"first"}),l.a.createElement("span",{className:"second"}),l.a.createElement("span",{className:"third"})),t&&l.a.createElement(Be,null),l.a.createElement("div",null,l.a.createElement(Fe.a,{path:"/prejunior",component:V}),l.a.createElement(Fe.a,{path:"/junior",component:Ee}),l.a.createElement(Fe.a,{path:"/juniorplus",component:Le}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=t(48),Je=Object(Re.b)({juniorPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(D.a)(Object(D.a)({},e),{},{loading:a.loading});default:return e}},juniorPlusPage:ge}),Ve=Object(Re.c)(Je);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q.a,{store:Ve},l.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,a,t){e.exports={container:"Navbar_container__BOCDJ",link:"Navbar_link__TxlL_",div:"Navbar_div__7KmOh",isActive:"Navbar_isActive__1rvnf"}},25:function(e,a,t){},37:function(e,a,t){e.exports={App:"Task5_App__ylnXo",numb:"Task5_numb__2co7u"}},43:function(e,a,t){e.exports={holder:"Time_holder__2pyEx",block:"Time_block__Fb9Be",btn:"Time_btn__36Yf6"}},56:function(e,a,t){e.exports={slider:"Range_slider__3kG0j",output:"Range_output__3TgKW",fader:"Range_fader__2cK0y"}},57:function(e,a,t){e.exports={App:"Task4_App__3RRnB",numb:"Task4_numb__2d6Bd"}},68:function(e,a,t){},72:function(e,a,t){e.exports={ava:"ava_ava__2NvWl"}},73:function(e,a,t){e.exports={name:"name_name__34Jxm"}},74:function(e,a,t){e.exports={message:"message_message__2hYW-"}},75:function(e,a,t){e.exports={time:"time_time__2zBgA"}},81:function(e,a,t){e.exports={preload:"Preloader_preload__2WW0n"}},82:function(e,a,t){e.exports={btn:"Loader_btn__ZPwk7"}},94:function(e,a,t){e.exports=t(110)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.c152f9e4.chunk.js.map