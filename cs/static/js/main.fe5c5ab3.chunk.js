(this["webpackJsonpgratitude-day"]=this["webpackJsonpgratitude-day"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),a=n(3),r=n.n(a),c=(n(12),n(4)),o=n(5),h=n(7),u=n(6),d=n(0),l=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={now:Math.trunc((new Date).getTime()/1e3),date:"2021-02-23 23:59:59"},t}return Object(o.a)(n,[{key:"dateInMilliseconds",value:function(){return Math.trunc(Date.parse(this.state.date)/1e3)}},{key:"seconds",value:function(){return(this.dateInMilliseconds()-this.state.now)%60}},{key:"minutes",value:function(){return Math.trunc((this.dateInMilliseconds()-this.state.now)/60)%60}},{key:"hours",value:function(){return Math.trunc((this.dateInMilliseconds()-this.state.now)/60/60)%24}},{key:"days",value:function(){return Math.trunc((this.dateInMilliseconds()-this.state.now)/60/60/24)}},{key:"componentDidMount",value:function(){var t=this;window.setInterval((function(){t.setState({now:Math.trunc((new Date).getTime()/1e3)})}),1e3)}},{key:"render",value:function(){return Object(d.jsxs)("div",{id:"timer",children:[Object(d.jsx)("p",{children:"We open in"}),Object(d.jsxs)("h1",{children:[this.days()?this.days()+" d :":""," ",this.hours()," h :"," ",this.minutes()," m : ",this.seconds()," s"]}),Object(d.jsx)("span",{children:"on 24th Feb!"}),Object(d.jsxs)("p",{children:["Meanwhile, just hold the thought, or even better...pen it down maybe?"," ",Object(d.jsx)("br",{}),"The more cheesy, the better you make the other person feel :P"]}),Object(d.jsx)("img",{src:"/images/girl-writing.jpg",alt:"Illustration"})]})}}]),n}(s.Component);var j=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Gratitude Day"}),Object(d.jsx)(l,{})]})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fe5c5ab3.chunk.js.map