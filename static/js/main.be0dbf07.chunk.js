(window.webpackJsonpwics=window.webpackJsonpwics||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/wicsLogoLight.8ac5b4ad.png"},23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/wicsLogoDark.1467ea6b.png"},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),c=a.n(o),l=(a(28),a(29),a(2)),r=a(3),s=a(6),m=a(4),d=a(7),u=a(5),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={width:0},a.openNav=a.openNav.bind(Object(d.a)(a)),a.closeNav=a.closeNav.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"openNav",value:function(){this.setState({width:"100%"})}},{key:"closeNav",value:function(){this.setState({width:0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("span",{onClick:"openNav()"},i.a.createElement("i",{className:"material-icons nav-icon",onClick:this.openNav},"menu")),i.a.createElement("div",{style:{width:this.state.width},className:"sidebar"},i.a.createElement("i",{className:"material-icons close-icon",onClick:this.closeNav},"close"),i.a.createElement("div",{className:"sidebar-content"},i.a.createElement("a",{className:"navlink",href:"#"},"About Us"),i.a.createElement("a",{className:"navlink",href:"#"},"Upcoming Events"),i.a.createElement("a",{className:"navlink",href:"#"},"E-board"),i.a.createElement("a",{className:"navlink",href:"#"},"Contact"))))}}]),t}(n.Component),h=a(1),v=a(12),E=a.n(v),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={width:0},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(h.Element,{id:"about-pos",name:"about-pos"},i.a.createElement("div",{className:"about"},i.a.createElement(E.a,{animateIn:"typewriter",animateOut:"typewriter"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"WE ARE WICS"))),i.a.createElement(E.a,{animateIn:"fadeInDown"},i.a.createElement("div",{className:"body"},i.a.createElement("p",null,"The Women in Computer Science club seeks to be a place for women to come together to",i.a.createElement("span",null," SUPPORT"),",",i.a.createElement("span",null," ENCOURAGE"),", and",i.a.createElement("span",null," CREATE ")," a safe environment for all."),i.a.createElement("p",{className:"transition"}," Check out our upcoming ",i.a.createElement("span",null,"EVENTS"),"! ")))))}}]),t}(n.Component),f={semester:"Fall 2019",data:[{name:"CPDI X LinkedIn",location:"NAC 1/211",time:"12:30pm - 2:00pm",date:"September 12th",description:"Students will get to build their LinkedIn pages and practice whiteboard interviewws with LinkedIn professionals."},{name:"CPDI x Google Career Prep 101",location:"Location TBA",time:"5:00pm - 7:00pm",date:"September 17th",description:"For freshman and sophomore"},{name:"CPDI x Google Tech Resume",location:"NAC 5/111",time:"12:30pm - 2:00pm",date:"September 24th",description:"For all Students"},{name:"WiCS GBM 1 + Resume Review",location:"Location TBA",time:"12:30pm - 1:45pm",date:"September 26th",description:""},{name:"STEM Career Fair",location:"Shepard Auditiorium",time:"12:00pm - 4:00pm",date:"October 3rd",description:""},{name:"UTC AirSpace Day",location:"Location TBA",time:"TBA",date:"October 10th",description:""},{name:"WiCS Applying to Internships",location:"Location TBA",time:"12:30pm - 1:45pm",date:"October 15th",description:"Chill get together day where we apply to jobs and discuss aand trade tips in the recruitment process"},{name:"WiCS Tech Chat",location:"TBA",time:"TBA",date:"TBA",description:"Tech Chat is a mentorship event that allows students in tech to connect with industry professionals"},{name:"WiCS Mock Technical Interview",location:"Location TBA",time:"12:30pm - 1:45pm",date:"10/22, 10/29, 11/5, 11/12, 11/19, 11/26",description:""},{name:"CPDI Power Day",location:"Location TBA",time:"TBA",date:"October 24th",description:"Meet, greet, and interview with companies like Epsilon, Con Ed, PSCG"}]},w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={width:0},a.event=a.event.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"event",value:function(e){return i.a.createElement("div",null,i.a.createElement("h1",null,e.name),i.a.createElement("h2",null,e.date),i.a.createElement("h2",null,e.time),i.a.createElement("h2",null,e.location),i.a.createElement("h2",null,e.description))}},{key:"render",value:function(){var e=this,t=f.data.map(function(t){return e.event(t)});return i.a.createElement("div",{className:"event"},i.a.createElement(h.Element,{id:"events-pos",name:"events-pos"},t),"\\            ")}}]),t}(n.Component),N=a(22),C=a.n(N),k=(a(39),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"home"},i.a.createElement(p,null),i.a.createElement("div",{className:"body"},i.a.createElement("img",{className:"animated fadeInDown delay-.5s",src:C.a,alt:"wics logo"}),i.a.createElement("div",{className:"home-sidebar animated slideInRight delay-.5s"},i.a.createElement("a",{className:"navlink",href:"#"},i.a.createElement(h.Link,{activeClass:"active",to:"about-pos",spy:!0,smooth:!0,offset:50,duration:500},"About Us")),i.a.createElement("a",{className:"navlink",href:"#"},i.a.createElement(h.Link,{activeClass:"active",to:"events-pos",spy:!0,smooth:!0,offset:50,duration:500},"Events")),i.a.createElement("a",{className:"navlink",href:"#"},"E-board"),i.a.createElement("a",{className:"navlink",href:"#"},"Contact")),i.a.createElement("div",{className:"test animated fadeInDown delay-1s"},i.a.createElement(h.Link,{activeClass:"active",to:"about-pos",spy:!0,smooth:!0,offset:50,duration:500},i.a.createElement("i",{className:"material-icons down-icon animated infinite bounce slower delay-1s"},"keyboard_arrow_down"))))))}}]),t}(n.Component));var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,null),i.a.createElement(b,null),i.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.be0dbf07.chunk.js.map