(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),l=a.n(s);a(89),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(14),c=a.n(i),o=a(22),u=a(8),m=a(9),d=a(11),p=a(10),h=a(72),g=(a(91),a(29)),b=a(17),v=a(141),f=a(140),E=a(143),j=a(139),y=a(138),w=a(144),C=a(6),O=new function e(){Object(u.a)(this,e),Object(C.h)(this,{loading:!0,isLoggedIn:!1,username:"",userID:-1})},k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(g.a)({},r,n))},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.password&&""!==e.state.username.trim?(e.handleClose(),e.doLogin()):""===e.state.password&&""===e.state.username.trim&&alert("Please fill the fields")},e.state={open:!1,username:"",password:"",buttonDisabled:!1},e.handleClickOpen=e.handleClickOpen.bind(Object(b.a)(e)),e.handleClose=e.handleClose.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e.resetForm=e.resetForm.bind(Object(b.a)(e)),e}return Object(m.a)(a,[{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogout",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success&&(O.isLoggedIn=!1,O.username="",O.userID=-1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogin",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({buttonDisabled:!0}),e.prev=1,e.next=4,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 4:return t=e.sent,e.next=7,t.json();case 7:(a=e.sent)&&a.success?(O.isLoggedIn=!0,O.username=a.username,O.userID=a.id,this.resetForm()):a&&!1===a.success&&(alert(a.msg),this.resetForm()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:this.setState({buttonDisabled:!1});case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!1===O.isLoggedIn?r.a.createElement("div",null,r.a.createElement(v.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen,disabled:this.state.buttonDisabled},"Login"),r.a.createElement(E.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(w.a,{id:"form-dialog-title"},"Please log in"),r.a.createElement(y.a,null,r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"username",name:"username",required:!0,label:"Username",type:"text",onChange:this.handleChange,value:this.state.username,fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"password",name:"password",required:!0,label:"Password",type:"password",onChange:this.handleChange,value:this.state.password,fullWidth:!0})),r.a.createElement(j.a,null,r.a.createElement(v.a,{onClick:this.handleClose,color:"primary"},"Close"),r.a.createElement(v.a,{onClick:this.handleSubmit,color:"primary",disabled:this.state.buttonDisabled},"Login")))):r.a.createElement(v.a,{variant:"outlined",color:"primary",disabled:!1,onClick:this.doLogout},"Logout")}}]),a}(r.a.Component),N=a(35),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"header",className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(N.b,{className:"navbar-brand",to:"/"},"MyWebsite"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(N.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{className:"nav-link",to:"/forum"},"Forum")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{className:"nav-link",to:"/list"},"List"))),r.a.createElement("ul",{className:"navbar-nav nav navbar-right"},r.a.createElement("li",{className:"nav-item navbar-right"},r.a.createElement(k,null)))))}}]),a}(r.a.Component),x=a(70),I=(a(104),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer row fixed-bottom"},r.a.createElement("div",{className:"col-sm text-center"},"Copyright \xa9"),r.a.createElement("div",{className:"col-sm text-right"},r.a.createElement("button",{className:"btn btn-primary",style:{width:100},onClick:x.animateScroll.scrollToTop},"To the top")))}}]),a}(r.a.Component)),P=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(g.a)({},r,n)),""===e.state.username||""===e.state.password1||""===e.state.password2||""===e.state.email?e.setState({buttonDisabled:!0}):e.setState({buttonDisabled:!1})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.username.trim()&&""!==e.state.password1.trim()&&P.test(e.state.email)&&""===e.match?(e.setState({buttonDisabled:!0}),e.handleClose(),e.doRegister()):""===e.state.username||""===e.state.password1||""===e.state.password2||""===e.state.email?alert("Please fill the fields"):""!==e.match?alert("Passwords don't match"):alert("Please input correct email adress")},e.match="",e.state={open:!1,username:"",email:"",password1:"",password2:"",buttonDisabled:!0},e.handleClickOpen=e.handleClickOpen.bind(Object(b.a)(e)),e.handleClose=e.handleClose.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(m.a)(a,[{key:"doRegister",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/register",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:this.state.email,username:this.state.username,password:this.state.password1})});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(O.isLoggedIn=!0,O.username=a.username):a&&!1===a.success&&alert(a.msg),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:this.setState({buttonDisabled:!1});case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.password1!==this.state.password2?this.match="Passwords don't match":this.match="",r.a.createElement("div",null,r.a.createElement(v.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Register"),r.a.createElement(E.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(w.a,{id:"form-dialog-title"},"Register"),r.a.createElement(y.a,null,r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"username",name:"username",required:!0,label:"Username",type:"text",onChange:this.handleChange,value:this.state.username,fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"email",name:"email",required:!0,label:"Email Address",type:"email",onChange:this.handleChange,value:this.state.email,fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"password1",name:"password1",required:!0,label:"Password",type:"password",onChange:this.handleChange,value:this.state.password1,fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"password2",name:"password2",required:!0,label:"Confirm password",type:"password",onChange:this.handleChange,value:this.state.password2,fullWidth:!0}),r.a.createElement("label",null,this.match)),r.a.createElement(j.a,null,r.a.createElement(v.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(v.a,{onClick:this.handleSubmit,color:"primary",disabled:this.state.buttonDisabled},"Register"))))}}]),a}(r.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return!1===O.isLoggedIn?r.a.createElement("div",{id:"more",className:"Info"},"Want more? ",r.a.createElement(k,null),"or ",r.a.createElement(D,null)):r.a.createElement("div",null,"You are logged in as ",O.username)}}]),a}(r.a.Component),L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(e){return r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:this.props.item.imgUrl,alt:this.props.item.id+" slajd"}))}}]),a}(r.a.Component),W=a(60),U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=W.map((function(e){return 1===e.id?"":r.a.createElement(L,{key:e.id,item:e})}));return r.a.createElement("div",{id:"carouselID",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100",src:W[0].imgUrl,alt:"0 slajd"})),e),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselID",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselID",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}}]),a}(r.a.Component),J=a(71),A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(e){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 card text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{className:"card-img",src:this.props.imgUrl,alt:""}),r.a.createElement("h3",{className:"card-title"},this.props.title),r.a.createElement("p",{className:"card-text"},this.props.desc),r.a.createElement("p",{className:"card-text"},this.props.date)))}}]),a}(r.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={query:"",sort:"asc"},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"render",value:function(){var e=this,t=J.filter((function(t){return t.date.toLowerCase().includes(e.state.query.toLowerCase())})).sort((function(t,a){return"asc"===e.state.sort?t.date>a.date?1:-1:"desc"===e.state.sort?t.date>a.date?-1:1:"alf"===e.state.sort?t.title>a.title?1:-1:1})).map((function(e){return r.a.createElement(A,{key:e.id,imgUrl:e.imgUrl,title:e.title,date:e.date})}));return r.a.createElement("div",null,r.a.createElement("form",null,"Sort:\xa0",r.a.createElement("select",{name:"sort",onChange:this.handleChange},r.a.createElement("option",{value:"asc"},"Ascending"),r.a.createElement("option",{value:"desc"},"Descending"),r.a.createElement("option",{value:"alf"},"Alfabethic")),r.a.createElement("br",null),r.a.createElement("label",{style:{paddingTop:6}},"Date query\xa0"),r.a.createElement("input",{name:"query",value:this.state.query,onChange:this.handleChange,placeholder:"query",type:"text"})),r.a.createElement("div",{id:"cards",className:"row"},t))}}]),a}(r.a.Component),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(U,null))),r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"jumbotron"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum nisi sed ultricies consectetur. Pellentesque vestibulum viverra risus nec convallis. Nunc rutrum, dolor vel tempus accumsan, ligula quam finibus ante, non varius lectus nisi vel urna. Vestibulum tincidunt, est sed molestie ultrices, augue purus varius lacus, ut placerat tellus quam id turpis. Cras vel dui justo. Nulla sit amet risus mauris. Curabitur hendrerit purus rutrum risus aliquet, nec condimentum lacus fringilla. Nullam sagittis hendrerit lorem at hendrerit. Nunc non odio eget lorem faucibus ultrices quis sed nibh. Quisque quis urna congue, sodales massa ac, sagittis odio. Nunc in aliquam risus. Morbi et ante id elit aliquet suscipit a vel metus. Praesent sed viverra purus."," ")),r.a.createElement("section",{className:"jumbotron"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu metus venenatis, dignissim metus ut, lacinia eros. Integer quis facilisis mi. In sed feugiat ante. Nulla molestie turpis in massa facilisis tincidunt. Sed nisi dui, convallis at aliquam vitae, finibus quis tortor. Integer felis enim, tempor ut lectus eu, consectetur posuere velit. Cras sed ligula libero. Praesent nisl urna, accumsan nec mauris ac, semper ultrices justo. In varius pharetra mauris, in porttitor magna vestibulum sit amet. Aliquam tincidunt turpis neque, ut blandit est dapibus quis."," "))),r.a.createElement(T,null),r.a.createElement("div",{className:"row",id:"#more"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(q,null))))}}]),a}(r.a.Component),R=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={posts:[],newpost:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.newpost.trim().length>4?this.doSendNewPost():alert("New post have to containd minimum of 5 characters")}},{key:"doSendNewPost",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/forum/newpost",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userID:O.userID,newpost:this.state.newpost})});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),a&&a.success?(alert("Post added correctly"),this.forceUpdate()):alert("Error, please try again later"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"doRemove",value:function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.split("."),e.next=4,fetch("/forum/remove",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({postid:a[0],ownerid:a[1]})});case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent)&&r.success?alert("Post delted"):alert("Error, please try again later"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,s=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/forum/load",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(n=a.body.map((function(e){return O.userID===e.user_id||1===O.userID?r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.body),r.a.createElement("td",null,r.a.createElement(v.a,{onClick:function(){return s.doRemove("".concat(e.id,".").concat(e.user_id))}},"Delete"))):r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.body),r.a.createElement("td",null))})),this.setState({posts:n})):alert("Couldnt connect please try again later"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Post"),r.a.createElement("th",null,"Mod"))),this.state.posts,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,O.username),r.a.createElement("td",null,r.a.createElement(f.a,{name:"newpost",required:!0,onChange:this.handleChange,placeholder:"Your post",type:"textarea",value:this.state.newpost})),r.a.createElement("td",null,r.a.createElement(v.a,{variant:"outlined",onClick:this.handleSubmit},"Submit")))))}}]),a}(r.a.Component),M=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={key:0,cards:[]},e.fetchItems=e.fetchItems.bind(Object(b.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchItems();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchItems",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,s,l=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/husky/images/random/9");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=this.state.key,s=a.message.map((function(e){return n++,l.setState({key:n}),r.a.createElement(A,{key:l.state.key,imgUrl:e})})),this.setState({cards:this.state.cards.concat(s)});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null===this.state.cards?r.a.createElement("div",null,"Please wait...",r.a.createElement("br",null),"Fetching Images..."):r.a.createElement("div",{id:"cards",className:"row"},this.state.cards,r.a.createElement("button",{className:"btn btn-primary text-center pagination-centered col-12",onClick:this.fetchItems},"More"))}}]),a}(r.a.Component),B=a(73),z=a(16),Z=function(e){var t=e.component,a=Object(B.a)(e,["component"]);return r.a.createElement(z.b,Object.assign({},a,{render:function(e){return O.isLoggedIn?r.a.createElement(t,e):(alert("Please login or Register to gain access"),r.a.createElement(z.a,{to:{pathname:"/",state:{from:e.location}}}))}}))},$=(a(105),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(O.loading=!1,O.isLoggedIn=!0,O.username=a.username,O.userID=a.userID):(O.loading=!1,O.isLoggedIn=!1,O.username="",O.userID=-1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),O.loading=!1,O.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return O.isLoggedIn,O.username,O.loading?r.a.createElement("div",{className:"container-fluid"},"Loading, please wait"):r.a.createElement(N.a,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement(S,null),r.a.createElement(z.d,null,r.a.createElement(z.b,{path:"/",exact:!0,component:F}),r.a.createElement(Z,{path:"/forum",component:R}),r.a.createElement(Z,{path:"/list",component:M})),r.a.createElement(I,null)))}}]),a}(r.a.Component)),_=Object(h.a)($);l.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e){e.exports=JSON.parse('[{"id":1,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/dog0.jpg"},{"id":2,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/dog1.jpg"},{"id":3,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/dog2.jpg"},{"id":4,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/dog3.jpg"},{"id":5,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/dog4.jpg"}]')},71:function(e){e.exports=JSON.parse('[{"id":1,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/cute.jpg","title":"Cute","desc":"Looks fluffy","date":"2020-06-29"},{"id":2,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/ears.jpg","title":"All ears","desc":"Behind ears","date":" 2020-07-16"},{"id":3,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/headphones.jpg","title":"Music","desc":"This beats","date":"2020-07-17"},{"id":4,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/nose.jpg","title":"Big nose","desc":"Don\'t sneeze","date":"2020-08-19"},{"id":5,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/nose2.jpg","title":"Big nose","desc":"","date":"2020-09-17"},{"id":6,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/pilot.jpg","title":"Pilot","desc":"Gonna fly, and take the sky","date":"2020-10-02"},{"id":7,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/shiro.jpg","title":"Shiro","desc":"White as snow","date":"2020-10-12"},{"id":8,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/snow.jpg","title":"Snow","desc":"Plays in winter","date":"2020-10-15"},{"id":9,"imgUrl":"https://raw.githubusercontent.com/elo240/PWJS.1/master/img/gallery/stare.jpg","title":"Stare","desc":"Stare","date":"2020-12-14"}]')},84:function(e,t,a){e.exports=a(106)},89:function(e,t,a){},91:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.9220f9f6.chunk.js.map