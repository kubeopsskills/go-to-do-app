(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a(297)},174:function(e,t,a){},175:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),l=a.n(o),s=(a(174),a(175),a(306)),i=a(135),c=a(136),m=a(137),u=a(156),g=a(138),d=a(157),f=a(308),k=a(36),p=a(309),h=a(307),S=a(305),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(g.a)(t).call(this,e))).componentDidMount=function(){a.getTasks()},a.onChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=JSON.parse(localStorage.getItem("items"));null==e&&(e=[]);var t={task:a.state.task,status:!1};e.push(t),localStorage.setItem("items",JSON.stringify(e)),a.setState({task:""}),a.getTasks()},a.getTasks=function(){var e=JSON.parse(localStorage.getItem("items"));e&&(e=e.sort(function(e,t){return e.status?1:t.status?-1:0}),localStorage.setItem("items",JSON.stringify(e)),a.setState({items:e.map(function(e,t){var n="yellow",o={background:"white"},l={textDecoration:"none"};return e.status&&(n="green",o.background="beige",l.textDecoration="line-through"),r.a.createElement(f.a,{key:t,color:n,fluid:!0,style:o},r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,{textAlign:"left",style:l},r.a.createElement("div",{style:{wordWrap:"break-word"}},e.task)),r.a.createElement(f.a.Meta,{textAlign:"right"},r.a.createElement(k.a,{link:!0,name:"check circle",color:"green",onClick:function(){return a.updateTask(t)}}),r.a.createElement("span",{style:{paddingRight:10}},"Done"),r.a.createElement(k.a,{link:!0,name:"undo",color:"yellow",onClick:function(){return a.undoTask(t)}}),r.a.createElement("span",{style:{paddingRight:10}},"Undo"),r.a.createElement(k.a,{link:!0,name:"delete",color:"red",onClick:function(){return a.deleteTask(t)}}),r.a.createElement("span",{style:{paddingRight:10}},"Delete"))))})}))},a.updateTask=function(e){var t=JSON.parse(localStorage.getItem("items"));t[e].status=!0,localStorage.setItem("items",JSON.stringify(t)),a.getTasks()},a.undoTask=function(e){var t=JSON.parse(localStorage.getItem("items"));t[e].status=!1,localStorage.setItem("items",JSON.stringify(t)),a.getTasks()},a.deleteTask=function(e){console.log("inside delete",e);var t=JSON.parse(localStorage.getItem("items"));t.splice(e,1),localStorage.setItem("items",JSON.stringify(t)),a.getTasks()},a.state={task:"",items:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement(p.a,{className:"header",as:"a",style:{fontFamily:"Permanent Marker, sans-serif",fontSize:"50px"}},r.a.createElement("fff",{style:{paddingRight:"300px"}},"Get ",r.a.createElement("c",{style:{color:"#A9A9A9"}},"Sh"),"it Done")," "),r.a.createElement("a",{title:"Source Code",href:"https://github.com/schadokar/go-to-do-app/tree/offlineToDoApp",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{name:"code",link:"true"}),"Source Code")),r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{onSubmit:this.onSubmit},r.a.createElement(S.a,{type:"text",name:"task",onChange:this.onChange,value:this.state.task,fluid:!0,placeholder:"Create Shit"}))),r.a.createElement("div",{className:"row"},r.a.createElement(f.a.Group,null,this.state.items)))}}]),t}(n.Component);var v=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[169,1,2]]]);
//# sourceMappingURL=main.09f33955.chunk.js.map