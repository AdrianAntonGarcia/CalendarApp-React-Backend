(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),u=a(63),i=a(4),m="[ui] Open modal",d="[ui] Close modal",p="[event] Set Active",f="[event] Logout",v="[event] Add new",b="[event] Clear active event",E="[event] Event updated",g="[event] Event deleted",h="[event] Events loaded",O="[auth] Finish Checking login state",j="[auth] Login",y="[auth] Logout",N={checking:!0},w=a(54),k={events:[],activeEvent:null},x={modalOpen:!1},S=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case g:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(i.a)(Object(i.a)({},e),{},{events:Object(w.a)(t.payload)});case f:return Object(i.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case O:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,I=Object(s.e)(S,C(Object(s.a)(u.a))),D=a(35),T=a(9),P=a(11),L=a.n(P),_=a(18),A=a(17),G=a.n(A),R="https://mern-calendar-adri.herokuapp.com/api",F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(R,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(R,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},H=function(){return{type:O}},J=function(e){return{type:j,payload:e}},M=function(){return{type:y}},U=a(14),B=a(24),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(U.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,l,o]},q=(a(75),function(){var e=Object(l.b)(),t=X({lEmail:"adrtler@gmail.com",lPassword:"123456"}),a=Object(U.a)(t,2),n=a[0],c=a[1],o=n.lEmail,s=n.lPassword,u=X({rName:"Adrian",rEmail:"",rPassword1:"123456",rPassword2:"123456"}),i=Object(U.a)(u,2),m=i[0],d=i[1],p=m.rName,f=m.rEmail,v=m.rPassword1,b=m.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=o,n=s,function(){var e=Object(_.a)(L.a.mark((function e(t){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:c.uid,name:c.name}))):G.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:o,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){var a,n,r;t.preventDefault(),v!==b&&G.a.fire("Error","Las contrase\xf1as deben ser iguales","error"),e((a=f,n=v,r=p,function(){var e=Object(_.a)(L.a.mark((function e(t){var c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/new",{name:r,email:a,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:o.uid,name:o.name}))):G.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),z=a(53),K=a(13),Q=a.n(K),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:Q()(e.end).toDate(),start:Q()(e.start).toDate()})}))},Y=function(e){return{type:v,payload:e}},Z=function(){return{type:p}},$=function(e){return{type:E,payload:e}},ee=function(){return{type:g}},te=function(e){return{type:h,payload:e}},ae=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){localStorage.clear(),t(function(){var e=Object(_.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t(M());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t({type:f})}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",{className:"ml-1"},"Salir")))},ne={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},re=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name))},ce=a(48),oe=a.n(ce),le=a(49),se=a.n(le),ue=function(){return{type:m}},ie={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var me=Q()().minutes(0).seconds(0).add(1,"hour"),de=Q()().minutes(0).seconds(0).add(2,"hour"),pe={title:"",notes:"",start:me.toDate(),end:de.toDate()},fe=function(){var e=Object(n.useState)(me.toDate()),t=Object(U.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(de.toDate()),s=Object(U.a)(o,2),u=s[0],m=s[1],p=Object(n.useState)(!0),f=Object(U.a)(p,2),v=f[0],b=f[1],E=Object(l.b)(),g=Object(l.c)((function(e){return e.ui})).modalOpen,h=Object(l.c)((function(e){return e.calendar})).activeEvent,O=Object(n.useState)(pe),j=Object(U.a)(O,2),y=j[0],N=j[1],w=y.notes,k=y.title,x=y.start,S=y.end;Object(n.useEffect)((function(){N(h||pe)}),[h,N]);var C=function(e){var t=e.target;N(Object(i.a)(Object(i.a)({},y),{},Object(B.a)({},t.name,t.value)))},I=function(){E({type:d}),E(Z()),N(pe)};return r.a.createElement(oe.a,{isOpen:g,onRequestClose:I,style:ie,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",h?"Editar Evento":"Nuevo Evento"),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,a=Q()(x),n=Q()(S);return a.isSameOrAfter(n)?(console.log("Fecha 2 debe ser mayor"),G.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error")):k.trim().length<2?b(!1):(E(h?(t=y,function(){var e=Object(_.a)(L.a.mark((function e(a){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,V("events/".concat(t.id),t,"PUT");case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r),r.ok?a($(t)):G.a.fire("Error",r.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(_.a)(L.a.mark((function t(a,n){var r,c,o,l,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,V("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.eventoGuardado.id,e.user={_id:c,name:o},a(Y(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),b(!0),void I())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(se.a,{onChange:function(e){c(e),N(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:a,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(se.a,{onChange:function(e){m(e),N(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:u,minDate:a,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},ve=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(ue()),e(Z())}},r.a.createElement("i",{className:"fas fa-plus"}))}),be=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(_.a)(L.a.mark((function e(t,a){var n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(ee()):G.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null,"Borrar evento"))};Q.a.locale("es");var Ee=Object(z.b)(Q.a),ge=function(){var e=Object(n.useState)(localStorage.getItem("lastView")||"month"),t=Object(U.a)(e,2),a=t[0],c=t[1],o=Object(l.b)(),s=Object(l.c)((function(e){return e.calendar})),u=s.events,i=s.activeEvent,m=Object(l.c)((function(e){return e.auth})).uid;Object(n.useEffect)((function(){o(function(){var e=Object(_.a)(L.a.mark((function e(t){var a,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=W(n.eventos),t(te(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[o]);return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(z.a,{className:"calendar-screen",localizer:Ee,events:u,startAccessor:"start",endAccessor:"end",messages:ne,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:m===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){o(ue())},onSelectEvent:function(e){o({type:p,payload:e})},onView:function(e){c(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){o(Z())},selectable:!0,view:a,components:{event:re}}),!!i&&r.a.createElement(be,null),r.a.createElement(ve,null),r.a.createElement(fe,null))},he=a(39),Oe=function(e){var t=e.isLoggedIn,a=e.component,n=Object(he.a)(e,["isLoggedIn","component"]);return r.a.createElement(T.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(T.a,{to:"/login"})}}))},je=function(e){var t=e.component,a=e.isLoggedIn,n=Object(he.a)(e,["component","isLoggedIn"]);return r.a.createElement(T.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(T.a,{to:"/"}):r.a.createElement(t,e)}}))},ye=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(_.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:n.uid,name:n.name}))):t(H());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere..."):r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(T.d,null,r.a.createElement(je,{exact:!0,path:"/login",component:q,isLoggedIn:!!c}),r.a.createElement(Oe,{exact:!0,path:"/",component:ge,isLoggedIn:!!c}),r.a.createElement(T.a,{to:"/login"}))))},Ne=function(){return r.a.createElement(l.a,{store:I},r.a.createElement(ye,null))};a(114);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(116)},75:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.cc005625.chunk.js.map