(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),o=a.n(r),c=a(11),s=a.n(c),i=a(15),l=a(16),d=(a(118),a(22)),u=a(29),j=a(5),p=a(6),b=a(103),h=a(192),O=a(175),m=a(176),x=a(177),f=a(178),g=a(179),y=a(92),v=a.n(y),k=a(93),T=a.n(k),w=a(94),N=a.n(w),S=a(14),C=a(12),A=a.n(C),D=a(18),B="LOAD_USER",E="SIGNUP_USER",I="LOGIN_USER",F="USER_LOADING",L="LOAD_USER_FAIL",W="SIGNUP_USER_FAIL",_="LOGIN_USER_FAIL",U="LOGOUT_USER",z="TODO_LOADING",R="GET_TODOS",P="GET_TODO",G="CREATE_TODO",q="UPDATE_TODO",M="MARK_TODO",J="DELETE_TODO",Y="SEARCH_TODOS",H="CREATE_TODO_FAIL",V="UPDATE_TODO_FAIL",K=a(30),$=a.n(K),Q=a(24),X=function(){return function(){var e=Object(D.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.get("".concat("https://todo-app2020.herokuapp.com/api","/users"),{headers:{Authorization:"Bearer ".concat(localStorage.token)}});case 3:a=e.sent,t({type:B,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},Z=Object(S.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}),{logoutUser:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:U}),e.push("/")}catch(n){console.error(n.message)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{grow:{flexGrow:1},title:{"& a":{textDecoration:"none",color:"inherit"}},headerIcon:{width:30,marginRight:e.spacing(1)},navButtons:{padding:0,fontWeight:"bold","& a":{textDecoration:"none",color:"inherit",padding:"0.4rem"},"& a.active":{backgroundColor:"white",color:e.palette.primary.main,borderRadius:5}},sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}))(Object(l.i)((function(e){var t=e.classes,a=e.isAuthenticated,c=e.logoutUser,s=e.history,l=Object(r.useState)(null),u=Object(d.a)(l,2),j=u[0],p=u[1],y=Boolean(j),k="primary-search-account-menu-mobile",w=Object(n.jsx)(b.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:function(){p(null)},children:a?Object(n.jsxs)(o.a.Fragment,{children:[" ",Object(n.jsx)(h.a,{className:t.navButtons,children:Object(n.jsxs)(i.c,{to:"/dashboard",children:[Object(n.jsx)(O.a,{color:"inherit",children:Object(n.jsx)(v.a,{})}),"Dashboard"]})}),Object(n.jsxs)(h.a,{className:t.navButtons,onClick:function(){return c(s)},children:[Object(n.jsx)(O.a,{color:"inherit",children:Object(n.jsx)(T.a,{})}),"Logout"]})]}):Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(h.a,{className:t.navButtons,children:Object(n.jsx)(i.c,{to:"/signup",children:"Signup"})}),Object(n.jsx)(h.a,{className:t.navButtons,children:Object(n.jsx)(i.c,{to:"/login",children:"Login"})})]})});return Object(n.jsxs)(m.a,{position:"static",className:t.grow,children:[Object(n.jsxs)(x.a,{children:[Object(n.jsxs)(i.c,{to:"/",children:[" ",Object(n.jsx)("img",{src:"/assets/todo-icon-header.jpg",alt:"Todo Header Icon",className:t.headerIcon})]}),Object(n.jsx)(f.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(n.jsx)(i.c,{to:"/",children:"TodoApp"})}),Object(n.jsx)("div",{className:t.grow}),Object(n.jsx)("div",{className:t.sectionDesktop,children:a?Object(n.jsxs)(o.a.Fragment,{children:[" ",Object(n.jsx)(g.a,{edge:"end",color:"inherit",className:t.navButtons,children:Object(n.jsx)(i.c,{to:"/dashboard",children:"Dashboard"})}),Object(n.jsx)(g.a,{edge:"end",color:"inherit",onClick:function(){return c(s)},className:t.navButtons,children:Object(n.jsx)("a",{href:"#!",children:"Logout"})})]}):Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(g.a,{"aria-label":"signup user",color:"inherit",className:t.navButtons,children:Object(n.jsx)(i.c,{to:"/signup",children:"Signup"})}),Object(n.jsx)(g.a,{"aria-label":"login user",color:"inherit",className:t.navButtons,children:Object(n.jsx)(i.c,{to:"/login",children:"Login"})})]})}),Object(n.jsx)("div",{className:t.sectionMobile,children:Object(n.jsx)(O.a,{"aria-label":"show more","aria-controls":k,"aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",children:Object(n.jsx)(N.a,{})})})]}),w]})})))),ee=Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{footer:{height:"2rem",background:e.palette.primary.main,display:"flex",justifyContent:"center",flexDirection:"column"},footerText:{textAlign:"center",color:"white"}})}))((function(e){var t=e.classes;return Object(n.jsx)("footer",{className:t.footer,children:Object(n.jsx)(f.a,{className:t.footerText,children:"\xa9 Copyright Wadeea Kiwan 2020"})})})),te=a(102),ae=a(189),ne={palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},styles:{form:{textAlign:"center"},pageTitle:{margin:"10px auto 10px auto",color:"#00bcd4"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,marginBottom:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"}}},re=a(105),oe=Object(S.b)((function(e){return{user:e.user}}))((function(e){var t=e.component,a=e.user,r=a.isAuthenticated,o=a.loading,c=Object(re.a)(e,["component","user"]);return Object(n.jsx)(l.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return r||o?Object(n.jsx)(t,Object(j.a)({},e)):Object(n.jsx)(l.a,{to:"/login"})}}))})),ce=a(171),se=a(180),ie=Object(S.b)((function(e){return{isAuthenticated:e.user.isAuthenticated}}),{})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{containerHeader:{marginBottom:"1rem",color:e.palette.primary.main}})}))((function(e){var t=e.classes;return e.isAuthenticated?Object(n.jsx)(l.a,{to:"/dashboard"}):Object(n.jsx)(ce.a,{in:!0,timeout:800,children:Object(n.jsxs)(se.a,{maxWidth:"lg",children:[Object(n.jsx)("img",{src:"./assets/todo-icon.png",alt:"Todo Icon",className:t.image}),Object(n.jsx)(f.a,{variant:"h2",className:t.containerHeader,children:"Welcome To The Todo App"}),Object(n.jsxs)("small",{children:["Please ",Object(n.jsx)(i.b,{to:"/login",children:"login"})," to make your own todo list"]})]})})}))),le=a(190),de=a(181),ue=Object(S.b)((function(e){return{user:e.user}}),{signupUser:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:F}),t.next=4,$.a.post("".concat("https://todo-app2020.herokuapp.com/api","/users/signup"),JSON.stringify(e),{headers:{"Content-Type":"application/json"}});case 4:n=t.sent,a({type:E,payload:n.data}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(r=t.t0.response.data.errors)&&r.forEach((function(e){return Q.b.error(e.msg)})),a({type:W,payload:t.t0.response.data.errors});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)({},e.styles)}))((function(e){var t=e.classes,a=e.user,o=a.loading,c=a.isAuthenticated,s=e.signupUser,p=Object(r.useState)({name:"",email:"",password:"",confirmPassword:""}),b=Object(d.a)(p,2),h=b[0],O=b[1],m=h.name,x=h.email,y=h.password,v=h.confirmPassword,k=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,n))}))},T=function(){var e=Object(D.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y===v){e.next=5;break}Q.b.error("Passwords do not match!"),e.next=7;break;case 5:return e.next=7,s({name:m,email:x,password:y});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(n.jsx)(l.a,{to:"/dashboard"}):Object(n.jsx)(ce.a,{in:!0,timeout:800,children:Object(n.jsxs)(se.a,{maxWidth:"sm",className:t.form,children:[Object(n.jsx)("img",{src:"./assets/todo-icon.png",alt:"Todo Icon",className:t.image}),Object(n.jsx)(f.a,{variant:"h3",className:t.pageTitle,children:"Signup"}),Object(n.jsxs)("form",{noValidate:!0,onSubmit:T,children:[Object(n.jsx)(le.a,{id:"name",name:"name",type:"text",label:"Name",className:t.textField,value:m,onChange:k,fullWidth:!0,required:!0}),Object(n.jsx)(le.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,value:x,onChange:k,fullWidth:!0,required:!0}),Object(n.jsx)(le.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,value:y,onChange:k,fullWidth:!0,required:!0}),Object(n.jsx)(le.a,{id:"confirmPassword",name:"confirmPassword",type:"password",label:"Confirm Password",className:t.textField,value:v,onChange:k,fullWidth:!0,required:!0}),Object(n.jsxs)(g.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:o,children:["Signup",o&&Object(n.jsx)(de.a,{size:30,className:t.progress})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("small",{children:["Already have an account? Login ",Object(n.jsx)(i.b,{to:"/login",children:"here"})]})]})]})})}))),je=Object(S.b)((function(e){return{user:e.user}}),{loginUser:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:F}),t.next=4,$.a.post("".concat("https://todo-app2020.herokuapp.com/api","/users/login"),JSON.stringify(e),{headers:{"Content-Type":"application/json"}});case 4:n=t.sent,a({type:I,payload:n.data}),a(X()),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),(r=t.t0.response.data.errors)&&r.forEach((function(e){return Q.b.error(e.msg)})),a({type:_,payload:t.t0.response.data.errors});case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)({},e.styles)}))((function(e){var t=e.classes,a=e.user,o=a.loading,c=a.isAuthenticated,s=e.loginUser,p=Object(r.useState)({email:"",password:""}),b=Object(d.a)(p,2),h=b[0],O=b[1],m=h.email,x=h.password,y=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,n))}))},v=function(){var e=Object(D.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({email:m,password:x});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(n.jsx)(l.a,{to:"/dashboard"}):Object(n.jsx)(ce.a,{in:!0,timeout:800,children:Object(n.jsxs)(se.a,{maxWidth:"sm",className:t.form,children:[Object(n.jsx)("img",{src:"./assets/todo-icon.png",alt:"Todo Icon",className:t.image}),Object(n.jsx)(f.a,{variant:"h3",className:t.pageTitle,children:"Login"}),Object(n.jsxs)("form",{noValidate:!0,onSubmit:v,children:[Object(n.jsx)(le.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,value:m,onChange:y,fullWidth:!0,required:!0}),Object(n.jsx)(le.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,value:x,onChange:y,fullWidth:!0,required:!0}),Object(n.jsxs)(g.a,{type:"submit",variant:"contained",color:"primary",className:t.button,disabled:o,children:["Login",o&&Object(n.jsx)(de.a,{size:30,className:t.progress})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("small",{children:["Don't have an account? Sign up ",Object(n.jsx)(i.b,{to:"/signup",children:"here"})]})]})]})})}))),pe=a(54),be=a.n(pe),he=a(182),Oe=a(108),me=a(187),xe=a(188),fe=a(95),ge=a.n(fe),ye=a(191),ve=a(183),ke=a(184),Te=a(185),we=a(186),Ne=a(98),Se=a.n(Ne),Ce=a(97),Ae=a.n(Ce),De=Object(S.b)(null,{markTodo:function(e,t){return function(){var a=Object(D.a)(A.a.mark((function a(n){var r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,$.a.put("".concat("https://todo-app2020.herokuapp.com/api","/todos/").concat(e,"/done"),JSON.stringify(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}});case 3:r=a.sent,n({type:M,payload:r.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},deleteTodo:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.delete("".concat("https://todo-app2020.herokuapp.com/api","/todos/").concat(e,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.token)}});case 3:n=t.sent,a({type:J,payload:Object(j.a)(Object(j.a)({},n.data),{},{todoId:e})}),Q.b.success("Todo Deleted Successfully"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{todoContainer:{display:"grid",textAlign:"left"},completed:{textDecoration:"line-through"},inCompleted:{textDecoration:"none"},todoCard:{display:"flex",position:"relative"},editButton:{position:"absolute",top:5,right:60,zIndex:1},deleteButton:{position:"absolute",top:5,right:5,zIndex:1},todoItemDetails:{display:"flex",flexDirection:"row",justifyContent:"space-between"},categoryBadge:{color:"white",backgroundColor:"orange",padding:5,borderRadius:5}})}))((function(e){var t=e.classes,a=e.todo,o=e.markTodo,c=e.deleteTodo,s=Object(r.useState)(!1),l=Object(d.a)(s,2),u=l[0],j=l[1];be.a.extend(ge.a);return Object(n.jsx)(ye.a,{title:"Click to mark the task","aria-label":"mark to todo",children:Object(n.jsx)(he.a,{item:!0,xs:12,className:t.todoContainer,children:Object(n.jsx)(ve.a,{in:!0,direction:"up",timeout:1e3,children:Object(n.jsxs)(ke.a,{className:t.todoCard,children:[Object(n.jsx)(i.b,{to:"/update-todo/".concat(a.id),children:Object(n.jsx)(ye.a,{title:"Edit","aria-label":"edit",children:Object(n.jsx)(O.a,{className:t.editButton,children:Object(n.jsx)(Ae.a,{color:"primary"})})})}),Object(n.jsx)(ye.a,{title:"Delete","aria-label":"delete",children:Object(n.jsx)(O.a,{color:"secondary",onClick:function(){return c(a.id)},className:t.deleteButton,children:Object(n.jsx)(Se.a,{})})}),Object(n.jsx)(Te.a,{onClick:function(){j(!u),o(a.id,{done:u})},children:Object(n.jsxs)(we.a,{className:"".concat(a.done?t.completed:t.inCompleted," ").concat(t.cardContent),children:[Object(n.jsx)(f.a,{variant:"h5",color:"primary",gutterBottom:!0,children:a.title}),Object(n.jsxs)(f.a,{gutterBottom:!0,children:[Object(n.jsx)("strong",{children:"Description:"})," ",a.description]}),Object(n.jsxs)("div",{className:t.todoItemDetails,children:[Object(n.jsxs)(f.a,{color:"textSecondary",children:[Object(n.jsx)("strong",{children:"created"})," ",be()(a.createdAt).fromNow()]}),Object(n.jsx)(f.a,{className:t.categoryBadge,children:a.category})]})]})})]})})})})}))),Be=Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{todoListContainer:{padding:0}})}))((function(e){var t=e.classes,a=e.todos,r=e.loading;return Object(n.jsx)(se.a,{maxWidth:"lg",className:t.todoListContainer,children:r?Object(n.jsx)(de.a,{size:150,className:t.spinnerDiv}):Object(n.jsx)(o.a.Fragment,{children:a.length?Object(n.jsx)(he.a,{container:!0,direction:"column",spacing:2,children:a.map((function(e){return Object(n.jsx)(De,{todo:e},e.id)}))}):Object(n.jsx)("div",{className:t.spinnerDiv,children:Object(n.jsx)(f.a,{variant:"h4",children:"No todo items found."})})})})})),Ee=Object(S.b)((function(e){return{todo:e.todo.todo,loading:e.todo.loading}}),{createTodo:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){var n,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:z}),t.next=4,$.a.post("".concat("https://todo-app2020.herokuapp.com/api","/todos/"),JSON.stringify(e),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}});case 4:n=t.sent,a({type:G,payload:n.data}),Q.b.success("Todo Created Successfully"),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),(r=t.t0.response.data.errors)&&r.forEach((function(e){return Q.b.error(e.msg)})),a({type:H,payload:t.t0.response.data.errors});case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},updateTodo:function(e,t){return function(){var a=Object(D.a)(A.a.mark((function a(n){var r,o;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:z}),a.next=4,$.a.put("".concat("https://todo-app2020.herokuapp.com/api","/todos/update/").concat(e),JSON.stringify(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}});case 4:r=a.sent,n({type:q,payload:r.data}),Q.b.success("Todo Updated Successfully"),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),(o=a.t0.response.data.errors)&&o.forEach((function(e){return Q.b.error(e.msg)})),n({type:V,payload:a.t0.response.data.errors});case 14:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{todoForm:{display:"flex",flexDirection:"column","& .MuiTextField-root":{margin:"0.5rem 0"}},todoButton:{marginTop:10,marginBottom:10,position:"relative"},todoProgress:{position:"absolute"}})}))((function(e){var t=e.classes,a=e.loading,o=e.todo,c=e.createTodo,s=e.updateTodo,i=e.edit,p=Object(r.useState)({title:i&&o?o.title:"",description:i&&o?o.description:"",category:i&&o?o.category:""}),b=Object(d.a)(p,2),h=b[0],O=b[1],m=Object(l.g)(),x=h.title,f=h.description,y=h.category,v=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,n))}))},k=function(){var e=Object(D.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""===x||""===f||""===y?i?s(o.id,{title:x,description:f,category:y}):c({title:x,description:f,category:y}):i?(s(o.id,{title:x,description:f,category:y}),m.replace("/dashboard")):(c({title:x,description:f,category:y}),O({title:"",description:"",category:""}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(ve.a,{in:!0,direction:"up",timeout:1e3,children:Object(n.jsxs)("form",{noValidate:!0,onSubmit:k,className:t.todoForm,children:[Object(n.jsx)(le.a,{id:"title",name:"title",type:"text",label:"Title",className:t.todoTextField,value:x,onChange:v,fullWidth:!0,variant:"outlined",required:!0}),Object(n.jsx)(le.a,{id:"description",name:"description",type:"text",label:"Description",className:t.todoTextField,value:f,onChange:v,fullWidth:!0,variant:"outlined",required:!0}),Object(n.jsx)(le.a,{id:"category",name:"category",type:"text",label:"Category",className:t.todoTextField,value:y,onChange:v,fullWidth:!0,variant:"outlined",required:!0}),Object(n.jsxs)(g.a,{type:"submit",variant:"contained",color:"primary",className:t.todoButton,disabled:a,children:[i?"Submit":"Add",a&&Object(n.jsx)(de.a,{size:30,className:t.todoProgress})]}),i&&Object(n.jsx)(g.a,{type:"button",variant:"contained",color:"secondary",className:t.todoButton,onClick:function(){return m.push("/dashboard")},children:"Cancel"})]})})}))),Ie=a(99),Fe=a.n(Ie),Le=Object(S.b)(null,{searchTodos:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:Y,payload:e})}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{searchContainer:{marginBottom:"1.5rem"}})}))((function(e){var t=e.classes,a=e.searchTodos,o=Object(r.useState)(""),c=Object(d.a)(o,2),s=c[0],i=c[1];Object(r.useEffect)((function(){a(s)}),[a,s]);return Object(n.jsx)("div",{className:t.searchContainer,children:Object(n.jsx)(le.a,{id:"search",name:"searchText",placeholder:"Search todos by category",fullWidth:!0,margin:"normal",variant:"outlined",className:t.searchText,value:s,onChange:function(e){i(e.target.value)},InputProps:{endAdornment:Object(n.jsx)(O.a,{onClick:function(){i("")},children:Object(n.jsx)(Fe.a,{})})}})})}))),We=a(43),_e=a(100),Ue=a(101),ze={token:localStorage.getItem("token"),user:{},errors:null,isAuthenticated:!1,loading:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case B:return Object(j.a)(Object(j.a)({},e),{},{user:n,isAuthenticated:!0,loading:!1});case I:case E:return localStorage.setItem("token",n.token),Object(j.a)(Object(j.a)({},e),{},{user:n.user,token:n.token,isAuthenticated:!0,loading:!1});case F:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case L:case W:case _:return localStorage.removeItem("token"),Object(j.a)(Object(j.a)({},e),{},{errors:n,user:null,isAuthenticated:!1,loading:!1});case U:return localStorage.removeItem("token"),Object(j.a)(Object(j.a)({},e),{},{errors:null,user:null,isAuthenticated:!1,loading:!1});default:return e}},Pe=a(104),Ge={todos:[],filteredTodos:[],todo:{},searchText:"",loading:!1,errors:null},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case q:case R:case M:return Object(j.a)(Object(j.a)({},e),{},{todos:n,loading:!1});case P:return Object(j.a)(Object(j.a)({},e),{},{todo:n,loading:!1});case G:return Object(j.a)(Object(j.a)({},e),{},{todos:[n].concat(Object(Pe.a)(e.todos)),loading:!1});case J:return Object(j.a)(Object(j.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==n.todoId})),loading:!1});case Y:return Object(j.a)(Object(j.a)({},e),{},{searchText:n,filteredTodos:e.todos.filter((function(e){return-1!==e.category.toLowerCase().indexOf(n.toLowerCase())})),loading:!1});case z:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case H:case V:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,errors:n});default:return e}},Me=[Ue.a],Je=Object(We.combineReducers)({user:Re,todo:qe}),Ye=Object(We.createStore)(Je,{},Object(_e.composeWithDevTools)(We.applyMiddleware.apply(void 0,Me))),He=Object(S.b)((function(e){return{user:e.user.user,todo:e.todo}}),{getTodosByUserId:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:z}),t.next=4,$.a.get("".concat("https://todo-app2020.herokuapp.com/api","/todos/user/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.token)}});case 4:n=t.sent,a({type:R,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{profileImage:{marginTop:"1rem",maxWidth:150,borderRadius:"50%"},profileDetails:{textAlign:"left",padding:"1rem","& p":{"& svg":{verticalAlign:"middle"}}}})}))((function(e){var t=e.classes,a=e.user,o=e.todo,c=(o.todos,o.loading),s=e.getTodosByUserId,i=Object(r.useState)([]),l=Object(d.a)(i,2),u=l[0],j=l[1];return Object(r.useEffect)((function(){s(a.id)}),[s,a.id]),Object(r.useEffect)((function(){Ye.subscribe((function(){Ye.getState().todo.searchText?j(Ye.getState().todo.filteredTodos):j(Ye.getState().todo.todos)}))}),[]),Object(n.jsx)(ce.a,{in:!0,timeout:800,children:Object(n.jsxs)(se.a,{maxWidth:"md",children:[Object(n.jsx)(Le,{}),Object(n.jsxs)(he.a,{container:!0,spacing:2,children:[Object(n.jsx)(he.a,{item:!0,sm:4,xs:12,children:Object(n.jsxs)(Oe.a,{children:[Object(n.jsx)("img",{src:a.image,alt:"profile",className:t.profileImage}),Object(n.jsxs)("div",{className:t.profileDetails,children:[Object(n.jsx)(f.a,{variant:"h5",color:"primary",gutterBottom:!0,children:a.name}),Object(n.jsxs)(f.a,{color:"primary",gutterBottom:!0,children:[Object(n.jsx)(me.a,{})," ",a.email]}),Object(n.jsxs)(f.a,{color:"primary",gutterBottom:!0,children:[Object(n.jsx)(xe.a,{})," Joined ",be()(a.createdAt).format("MMM YYYY")]})]})]})}),Object(n.jsxs)(he.a,{item:!0,sm:8,xs:12,children:[Object(n.jsx)(Ee,{edit:!1}),Object(n.jsx)(Be,{todos:u,loading:c})]})]})]})})}))),Ve=Object(S.b)((function(e){return{todo:e.todo.todo,loading:e.todo.loading}}),{getTodo:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(a){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:z}),t.next=4,$.a.get("".concat("https://todo-app2020.herokuapp.com/api","/todos/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.token)}});case 4:n=t.sent,a({type:P,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(p.a)((function(e){return Object(j.a)(Object(j.a)({},e.styles),{},{editTodoContainer:{},todoForm:{display:"flex",flexDirection:"column"}})}))((function(e){var t=e.classes,a=e.todo,c=e.loading,s=e.getTodo,i=Object(l.h)().todoId;return Object(r.useEffect)((function(){s(i)}),[s,i]),Object(n.jsx)(ce.a,{in:!0,timeout:800,children:Object(n.jsx)(se.a,{maxWidth:"sm",className:t.editTodoContainer,children:c?Object(n.jsx)(de.a,{size:150,className:t.spinnerDiv}):Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(f.a,{variant:"h4",color:"primary",children:"Edit Your Todo Item"}),a&&Object(n.jsx)(Ee,{edit:!0,className:t.todoForm})]})})})}))),Ke=(a(143),Object(te.a)(ne)),$e=function(){return Object(r.useEffect)((function(){Ye.dispatch(X())}),[]),Object(n.jsx)(ae.a,{theme:Ke,children:Object(n.jsx)(S.a,{store:Ye,children:Object(n.jsxs)(i.a,{children:[Object(n.jsx)(Z,{}),Object(n.jsxs)("main",{className:"container",children:[Object(n.jsx)(Q.a,{limit:3,autoClose:3e3}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:ie}),Object(n.jsx)(oe,{exact:!0,path:"/dashboard",component:He}),Object(n.jsx)(l.b,{exact:!0,path:"/signup",component:ue}),Object(n.jsx)(l.b,{exact:!0,path:"/login",component:je}),Object(n.jsx)(oe,{exact:!0,path:"/update-todo/:todoId",component:Ve})]})]}),Object(n.jsx)(ee,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(n.jsx)($e,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.98c91398.chunk.js.map