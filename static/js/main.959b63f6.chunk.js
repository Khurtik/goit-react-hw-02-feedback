(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],{1:function(e,t,a){e.exports={button:"FeedbackOptions_button__1CBqS"}},11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=a(4),u=a(5),s=a(6),i=a(9),m=a(7),b=a(10),d=function(e){var t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,t),a)},v=function(e){var t=e.label,a=e.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,t,":",l.a.createElement("span",null,a)))},g=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Statistic"),l.a.createElement(v,{label:"Good",value:t}),l.a.createElement(v,{label:"Neutral",value:a}),l.a.createElement(v,{label:"Bad",value:n}),l.a.createElement(v,{label:"Total",value:r}),l.a.createElement(v,{label:"Positive feedback",value:c}))},E=a(1),f=a.n(E),p=function(e){var t=e.onLeaveFeedback;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:f.a.button,type:"button",onClick:t,name:"good"},"Cood"),l.a.createElement("button",{className:f.a.button,type:"button",onClick:t,name:"neutral"},"Neutral"),l.a.createElement("button",{className:f.a.button,type:"button",onClick:t,name:"bad"},"Bad"))},h=a(8),k=a.n(h),F=function(e){var t=e.message;return l.a.createElement("p",{className:k.a.message},t)};F.defaultProps={message:""};var j=F,_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.handleIncrement=function(e){var t=e.target.name;a.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}),0)},a.countPositiveFeedbackPercentage=function(){var e=a.state.good;return e<1?0:Math.round(100*e/a.countTotalFeedback())},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return l.a.createElement("div",null,l.a.createElement(d,{title:"Please leave feedback"},l.a.createElement(p,{onLeaveFeedback:this.handleIncrement}),this.countTotalFeedback()>0?l.a.createElement(g,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):l.a.createElement(j,{message:"No feedback given"})))}}]),t}(n.Component);c.a.render(l.a.createElement(_,null),document.getElementById("root"))},8:function(e,t,a){e.exports={message:"Notification_message__1qjLp"}}},[[11,1,2]]]);
//# sourceMappingURL=main.959b63f6.chunk.js.map