(this.webpackJsonpvcentry=this.webpackJsonpvcentry||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(31),r=n.n(c),i=n(2),o=n(3),l=n(5),j=n(4),h=n(9),b=n(6),d=n(13),u=n(8),O=n(0),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){if("checkbox"===e.target.type){if(e.target.checked)a.state.register.hobbies.push(e.target.value);else{var t=a.state.register.hobbies.findIndex((function(t){return t===e.target.value}));a.state.register.hobbies.splice(t,1)}a.setState({register:Object(u.a)(Object(u.a)({},a.state.register),{},{hobbies:a.state.register.hobbies})})}else a.setState({register:Object(u.a)(Object(u.a)({},a.state.register),{},Object(d.a)({},e.target.name,e.target.value))})},a.onInputFocus=function(e){a.setState({error:Object(u.a)(Object(u.a)({},a.state.error),{},Object(d.a)({},e.target.name,!1))})},a.onInputBlur=function(e){0===e.target.value.length&&a.setState({error:Object(u.a)(Object(u.a)({},a.state.error),{},Object(d.a)({},e.target.name,!0))})},a.state={register:{firstName:"",lastName:"",email:"",password:"",dateOfBirth:"",gender:"",hobbies:[],address:"",city:""},error:{firstName:!1,lastName:!1,email:!1,password:!1,dateOfBirth:!1,gender:!1,hobbies:!1,address:!1,city:!1}},a}return Object(o.a)(n,[{key:"createAccount",value:function(){for(var e in this.state.register)"hobbies"===e?0===this.state.register.hobbies.length?this.state.error.hobbies=!0:this.state.error.hobbies=!1:""===this.state.register[e]?this.state.error[e]=!0:this.state.error[e]=!1;this.setState({error:this.state.error})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"login-form",children:[Object(O.jsx)("h2",{children:"Create your Account"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"label",children:"Enter your First Name "}),Object(O.jsx)("input",{type:"text",className:"input",name:"firstName",placeholder:"Please enter first name..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.firstName&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please enter a valid user first name"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Last Name "}),Object(O.jsx)("input",{type:"text",className:"input",name:"lastName",placeholder:"Please enter last name..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.lastName&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please enter a valid user last name"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Email Id "}),Object(O.jsx)("input",{type:"text",className:"input",name:"email",placeholder:"Please enter email id..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.email&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please enter a valid email id"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Password "}),Object(O.jsx)("input",{type:"password",className:"input",name:"password",placeholder:"Please enter password..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.password&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please enter a valid password"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your D.O.B "}),Object(O.jsx)("input",{type:"date",className:"input",name:"dateOfBirth",onChange:this.onHandleInput}),this.state.error.dateOfBirth&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please enter a valid date of birth"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your Gender "}),Object(O.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:this.onHandleInput}),"Male",Object(O.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:this.onHandleInput}),"Female",Object(O.jsx)("input",{type:"radio",name:"gender",value:"do now wish to specify",onChange:this.onHandleInput}),"Others",this.state.error.gender&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please select any gender"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Hobbies "}),Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",value:"cricket",onChange:this.onHandleInput}),"Cricket",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",value:"hockey",onChange:this.onHandleInput}),"Hockey",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",value:"football",onChange:this.onHandleInput}),"Football",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",value:"chess",onChange:this.onHandleInput}),"Chess",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",value:"carrom",onChange:this.onHandleInput}),"Carrom",this.state.error.hobbies&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please select any hobbies"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Address"}),Object(O.jsx)("textarea",{placeholder:"Please enter address",name:"address",className:"text-box",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.address&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please enter a valid address"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your City"}),Object(O.jsxs)("select",{className:"input",defaultValue:"",onChange:this.onHandleInput,name:"city",children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Please select any City"}),Object(O.jsx)("option",{value:"CH",children:"Chennai"}),Object(O.jsx)("option",{value:"BOM",children:"Mumbai"}),Object(O.jsx)("option",{value:"HYD",children:"Hydrabad"}),Object(O.jsx)("option",{value:"KO",children:"Cochin"}),Object(O.jsx)("option",{value:"DH",children:"Delhi"}),Object(O.jsx)("option",{value:"BLORE",children:"Banglore"}),Object(O.jsx)("option",{value:"KOL",children:"Kolakatha"})]}),this.state.error.city&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"error-msg",children:"Please select any city"})})]}),Object(O.jsx)("div",{className:"m-top-15",children:Object(O.jsx)("button",{onClick:function(){e.createAccount()},children:"Create My Account"})}),Object(O.jsx)(h.b,{to:"/",children:"Go back to Login Page"})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){a.setState({login:Object(u.a)(Object(u.a)({},a.state.login),{},Object(d.a)({},e.target.name,e.target.value))})},a.state={login:{email:"",password:""},error:{email:!1,password:!1}},a}return Object(o.a)(n,[{key:"onLogin",value:function(){for(var e in console.log(this.state.login),this.state.login)if("email"==e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.state.login.email).toLowerCase());this.state.error.login=!t}else if("password"==e){var n=0===this.state.login.password.length;this.state.error.password=n}for(var a in this.setState({error:this.state.error}),this.state.error)if(this.state.error[a])return;this.props.history.push("/mail/inbox",this.state.login)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Welcome to Login Page"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter your Email ID :"}),Object(O.jsx)("input",{type:"text",name:"email",placeholder:"Please enter your email id",onChange:this.onHandleInput}),this.state.error.login&&Object(O.jsx)("span",{children:"Invalid Email Id"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter your Password :"}),Object(O.jsx)("input",{type:"password",name:"password",placeholder:"Please enter your password",onChange:this.onHandleInput}),this.state.error.password&&Object(O.jsx)("span",{children:"Invalid Password"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){e.onLogin()},children:"Login"})})]}),Object(O.jsx)(h.b,{to:"/mail/inbox",children:"Go to Mail Box"})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"This is a HOME Page"})})}}]),n}(a.Component),v=n(15),f=n.n(v),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={userList:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.listAPI()}},{key:"listAPI",value:function(){var e=this;f.a.get("https://reqres.in/api/users?page=2").then((function(t){e.setState({userList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.userList.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.first_name}),Object(O.jsx)("td",{children:e.last_name}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:e.avatar})})]},t)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a INBOX PAGE"}),Object(O.jsx)("button",{onClick:function(){return e.listAPI()},children:"List API"}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"ID"}),Object(O.jsx)("th",{children:"First Name"}),Object(O.jsx)("th",{children:"Last Name"}),Object(O.jsx)("th",{children:"Email ID"}),Object(O.jsx)("th",{children:"Profile Picture"})]})}),Object(O.jsx)("tbody",{children:t})]})]})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.state={name:"",job:""},a}return Object(o.a)(n,[{key:"onSubmit",value:function(){f.a.post("https://reqres.in/api/users",this.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a SENT PAGE"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter Username :"}),Object(O.jsx)("input",{type:"text",name:"name",placeholder:"Enter username..",onChange:this.onHandleInput})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter Job :"}),Object(O.jsx)("input",{type:"text",name:"job",placeholder:"Enter jon..",onChange:this.onHandleInput})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){return e.onSubmit()},children:"Submit"})})]})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){a.setState({edit:Object(u.a)(Object(u.a)({},a.state.edit),{},Object(d.a)({},e.target.name,e.target.value))})},a.state={edit:{name:"",job:""}},a}return Object(o.a)(n,[{key:"onUpdate",value:function(){console.log(this.state.edit);f.a.put("https://reqres.in/api/users/2",this.state.edit).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a TRASH PAGE"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Edit Username :"}),Object(O.jsx)("input",{type:"text",name:"name",placeholder:"Edit username..",onChange:this.onHandleInput})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Edit Job :"}),Object(O.jsx)("input",{type:"text",name:"job",placeholder:"Edit job..",onChange:this.onHandleInput})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){return e.onUpdate()},children:"Update Info"})})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"onDeleteUser",value:function(){f.a.delete("https://reqres.in/api/users/2").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){return e.onDeleteUser()},children:"Delete User"})})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),a=t.call(this,e),console.log("Called Constructor Method"),a.state={name:"Mr.A"},a}return Object(o.a)(n,[{key:"componentWillMount",value:function(){console.log("Called componentWillMount Method")}},{key:"componentDidMount",value:function(){console.log("Called componentDidMount Method")}},{key:"onChangeName",value:function(){this.setState({name:"Mr.B"})}},{key:"shouldComponentUpdate",value:function(e,t){return console.log(this.state.name,t),console.log("Called shouldComponentUpdate Method"),this.state.name!==t.name}},{key:"componentWillUpdate",value:function(){console.log("Called componentWillUpdate Method")}},{key:"componentDidUpdate",value:function(){console.log("Called componentDidUpdate Method")}},{key:"componentWillUnmount",value:function(){console.log("Called componentWillUnmount Method")}},{key:"render",value:function(){var e=this;return console.log("Called Render Method"),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a Life Cycle Component"}),Object(O.jsxs)("h1",{children:["The user name is : ",this.state.name]}),Object(O.jsx)("button",{onClick:function(){return e.onChangeName()},children:"Change Name"})]})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){console.log(e.target.value),a.props.onLoadName(e.target.value)},console.log(e),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a CHILD COMPONENT"}),Object(O.jsxs)("h1",{children:["UserName - ",this.props.name]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter your Name : "}),Object(O.jsx)("input",{type:"text",placeholder:"Enter your name..",onChange:this.onHandleInput})]})]})}}]),n}(a.Component),H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onReceiveName=function(e){console.log(e),a.setState({message:e})},a.state={username:"John Harrison",message:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["New Message : ",this.state.message]}),Object(O.jsx)("h1",{children:"This is a PARENT COMPONENT"}),Object(O.jsx)(k,Object(u.a)(Object(u.a)({name:this.state.username},this.state),{},{onLoadName:this.onReceiveName}))]})}}]),n}(a.Component),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("div",{className:"header"}),Object(O.jsxs)("div",{className:"body",children:[Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)(h.b,{to:"/mail/inbox",className:"btn",activeClassName:"active-btn",children:"Inbox"}),Object(O.jsx)(h.b,{to:"/mail/sent",className:"btn",activeClassName:"active-btn",children:"Sent"}),Object(O.jsx)(h.b,{to:"/mail/trash",className:"btn",activeClassName:"active-btn",children:"Trash"}),Object(O.jsx)(h.b,{to:"/mail/delete",className:"btn",activeClassName:"active-btn",children:"Delete"}),Object(O.jsx)(h.b,{to:"/mail/cycle",className:"btn",activeClassName:"active-btn",children:"Life Cycle"}),Object(O.jsx)(h.b,{to:"/mail/parent",className:"btn",activeClassName:"active-btn",children:"Parent"})]}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/mail/inbox",component:g}),Object(O.jsx)(b.a,{path:"/mail/sent",component:y}),Object(O.jsx)(b.a,{path:"/mail/trash",component:N}),Object(O.jsx)(b.a,{path:"/mail/delete",component:C}),Object(O.jsx)(b.a,{path:"/mail/cycle",component:I}),Object(O.jsx)(b.a,{path:"/mail/parent",component:H})]})})]})]})})}}]),n}(a.Component),E=s.a.createContext(),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onHandleChange=function(t){e.context.fromSearch(t.target.value)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(E.Consumer,{children:function(t){return Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"search-box",placeholder:"Enter a search value",onChange:e.onHandleChange})})}})}}]),n}(a.Component);w.contextType=E;var M=w,S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{children:"Header Page"}),Object(O.jsx)(M,{})]})}}]),n}(a.Component),B=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsx)("h1",{children:"Side Bar"})})}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(E.Consumer,{children:function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is product list component"}),Object(O.jsxs)("h1",{children:["The search result is ",e.searchMessage]})]})}})}}]),n}(a.Component);L.contextType=E;var A=L,T=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={userName:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h1",{children:"Content Page"}),Object(O.jsx)(A,{})]})}}]),n}(a.Component),D=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).receivedValue=function(e){a.setState({data:e})},a.state={data:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(E.Provider,{value:{message:"Hello from dashboard component",fromSearch:this.receivedValue,searchMessage:this.state.data},children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(S,{}),Object(O.jsxs)("div",{className:"body",children:[Object(O.jsx)(B,{}),Object(O.jsx)(T,{})]})]})})}}]),n}(a.Component),U=(n(61),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",exact:!0,component:p}),Object(O.jsx)(b.a,{path:"/register",component:m}),Object(O.jsx)(b.a,{path:"/home",component:x}),Object(O.jsx)(b.a,{path:"/mail",component:P}),Object(O.jsx)(b.a,{path:"/dashboard",component:D})]})})}}]),n}(a.Component));r.a.render(Object(O.jsx)(U,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f4781ebd.chunk.js.map