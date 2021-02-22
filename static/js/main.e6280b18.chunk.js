(this.webpackJsonpclock_app=this.webpackJsonpclock_app||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(3),s=n(6),i=n(5),o=n(4),r=n(1),l=n.n(r),h=n(8),u=n.n(h),j=(n(13),n(0)),d=function(){return Object(j.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z",fill:"#FFF","fill-rule":"nonzero"})})},b=function(){return Object(j.jsx)("svg",{width:"23",height:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z",fill:"#FFF","fill-rule":"nonzero"})})},m=(n(15),{morning:{message:"Good morning",icon:Object(j.jsx)(d,{})},afternoon:{message:"Good afternoon",icon:Object(j.jsx)(d,{})},evening:{message:"Good evening",icon:Object(j.jsx)(b,{})}});function O(e){return e<12?m.morning:e<18?m.afternoon:m.evening}var f=function(){return Object(j.jsxs)("div",{className:"greeting-msg",children:[O((new Date).getHours()).icon,Object(j.jsxs)("p",{className:"greeting-msg__text",children:[O((new Date).getHours()).message,", It's currently"]})]})},p={hour:"2-digit",minute:"2-digit",timeZoneName:"short"},v=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={time:e.getTime(0),timeZone:e.getTime(2)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({time:this.getTime(0),timeZone:this.getTime(2)})}},{key:"getTime",value:function(e){return(new Date).toLocaleTimeString([],p).split(" ")[e]}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"clock",children:[Object(j.jsx)("h1",{className:"clock__time",children:this.state.time}),Object(j.jsx)("p",{className:"clock__time-zone",children:this.state.timeZone})]})}}]),n}(l.a.Component),g=(n(16),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={location:"Loading..."},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://freegeoip.app/json/").then((function(e){return e.json()})).then((function(t){"US"===t.country_code?e.setState({location:"".concat(t.city,", ").concat(t.region_code)}):e.setState({location:"".concat(t.city,", ").concat(t.country_name)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"user-location",children:this.state.location})}}]),n}(l.a.Component)),x=function(){return Object(j.jsxs)("div",{className:"widget",children:[Object(j.jsx)(f,{}),Object(j.jsx)(v,{}),Object(j.jsx)(g,{})]})},y=function(e){return Object(j.jsx)("svg",{className:e.className,width:"40",height:"40",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(j.jsx)("circle",{fill:"#303030",cx:"20",cy:"20",r:"20"}),Object(j.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"M14 23l6-6 6 6"})]})})},k=(n(17),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"pill-button",onClick:this.props.handleClick,children:[Object(j.jsx)("p",{className:"pill-button__text",children:this.props.text}),Object(j.jsx)(y,{className:"chevron ".concat(this.props.class)})]})}}]),n}(l.a.Component)),w=(n(18),n(19),function(e){return Object(j.jsx)("svg",{onClick:e.getQuote,className:e.className,width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z",fill:"#FFF","fill-rule":"nonzero",opacity:".5"})})}),_=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={author:null,content:null},e.getQuote=function(){fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(t){e.setState({author:t.author,content:t.content})})).catch((function(e){return console.log(e)}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"quote",children:[Object(j.jsxs)("div",{className:"quote__text",children:[Object(j.jsx)("p",{className:"quote__content",children:this.state.content}),Object(j.jsxs)("p",{className:"quote__author",children:[Object(j.jsx)("span",{children:"\u2014"}),this.state.author]})]}),Object(j.jsx)(w,{className:"quote__refresh-icon",getQuote:this.getQuote})]})}}]),n}(l.a.Component),N=(n(20),"backdrop__image--day"),z="backdrop__image--afternoon",D="backdrop__image--night";var C=function(){return Object(j.jsxs)("div",{className:"backdrop",children:[Object(j.jsx)("div",{className:"backdrop__image ".concat((e=(new Date).getHours(),e<12?N:e<18?z:D))}),Object(j.jsx)("div",{className:"backdrop__opacity-layer"})]});var e};n(21);var F=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={time:null,timezone:null,dayOfYr:null,dayOfWk:null,wkNumber:null},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://worldtimeapi.org/api/ip").then((function(e){return e.json()})).then((function(t){e.setState({time:new Date(t.utc_datetime).toLocaleTimeString([],{hour:"2-digit",hour12:!1}),timezone:t.timezone,dayOfYr:t.day_of_year,dayOfWk:t.day_of_week,wkNumber:t.week_number})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"dashboard ".concat((e=parseInt(this.state.time),e<18?"dashboard--day":"dashboard--night")),children:[Object(j.jsxs)("div",{className:"timezone",children:[Object(j.jsx)("p",{children:"current timezone"}),Object(j.jsx)("h3",{children:this.state.timezone})]}),Object(j.jsxs)("div",{className:"day-of-yr",children:[Object(j.jsx)("p",{children:"day of the year"}),Object(j.jsx)("h3",{children:this.state.dayOfYr})]}),Object(j.jsxs)("div",{className:"day-of-wk",children:[Object(j.jsx)("p",{children:"day of the week"}),Object(j.jsx)("h3",{children:this.state.dayOfWk})]}),Object(j.jsxs)("div",{className:"wk-number",children:[Object(j.jsx)("p",{children:"week number"}),Object(j.jsx)("h3",{children:this.state.wkNumber})]})]});var e}}]),n}(l.a.Component),M=(n(22),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isDashboardOpen:!1},e.handleClick=function(){console.log(Object(s.a)(e)),e.setState({isDashboardOpen:!e.state.isDashboardOpen})},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{className:"container ".concat(this.state.isDashboardOpen?"open":""),children:[Object(j.jsxs)("div",{className:"widgets",children:[Object(j.jsx)(_,{}),Object(j.jsxs)("div",{className:"flex-grp",children:[Object(j.jsx)(x,{}),Object(j.jsx)(k,{class:this.state.isDashboardOpen?"rotate":"",text:this.state.isDashboardOpen?"less":"more",handleClick:this.handleClick})]})]}),Object(j.jsx)(F,{})]})]})}}]),n}(l.a.Component));u.a.render(Object(j.jsx)(M,{}),document.querySelector("#root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e6280b18.chunk.js.map