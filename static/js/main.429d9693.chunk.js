(this["webpackJsonpsingle-page-app-1"]=this["webpackJsonpsingle-page-app-1"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),r=n.n(s),i=(n(42),n.p,n(43),n(5)),l=n(6),o=n(13),d=n(8),j=n(7),u=n(62),h=n(63),m=n(0),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={myfirstcomponents:"",simpleform:""},c.clickHandler=c.clickHandler.bind(Object(o.a)(c)),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"clickHandler",value:function(e){var t=this.state;t[e.target.id]="active",this.setState(t)}},{key:"render",value:function(){return Object(m.jsxs)(u.a,{bg:"light",expand:"lg",children:[Object(m.jsx)(u.a.Brand,{href:"#/",children:"React Playground"}),Object(m.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(h.a,{className:"mr-auto",children:[Object(m.jsx)(h.a.Link,{href:"#/myfirstcomponents",name:"name-nav-link",id:"myfirstcomponents",children:"My First Components"}),Object(m.jsx)(h.a.Link,{href:"#/simpleform",name:"name-nav-link",id:"simpleform",children:"Simple Form"})]})})]})}}]),n}(a.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"row w-100 mt-3",children:[Object(m.jsx)("div",{className:"col-lg-3"}),Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsx)("div",{className:"card border-0",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("p",{className:"card-text",children:"Hi, my name is Ben Gross, and I am a student in the MIT xPRO Full Stack Web Application Development with MERN Certificate Program. I have 4 years of experience with AngularJS but am brand new to React as of May 2021. This webpage is my very first React project."}),Object(m.jsx)("p",{className:"card-text",children:"I created this project with the following intent."}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsx)("li",{className:"list-group-item",children:"As a playground to help me learn React"}),Object(m.jsx)("li",{className:"list-group-item",children:"As a repository to showcase my React skills and capabilities along my learning journey"}),Object(m.jsx)("li",{className:"list-group-item",children:"As a location to put my self-learning assignments for the MIT xPRO coursework"})]}),Object(m.jsxs)("p",{className:"card-text",children:["Please peruse the projects that comprise my React learning journey and contact me at ",Object(m.jsx)("a",{target:"_blank",href:"mailto:gross.benji@gmail.com",children:"gross.benji@gmail.com"})," or via ",Object(m.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/nutritionengineering/",children:"LinkedIN"})," if you have any questions."]})]})})}),Object(m.jsx)("div",{className:"col-lg-3"})]})})}}]),n}(a.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={date:new Date},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("h2",{children:["The time is ",this.state.date.toLocaleTimeString(),"."]})})}}]),n}(a.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"Hello World!"})})}}]),n}(a.a.Component),p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={counter:0},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=this;this.setState((function(t,n){return{counter:e.state.counter+parseInt(n.increment)}}))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("h2",{children:["Counter = ",this.state.counter,"."]})})}}]),n}(a.a.Component),f=n(24),y=n(19),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={counter:0,intervalMs:1e3,increment:1},c.handleInputChange=c.handleInputChange.bind(Object(o.a)(c)),c.resetCounter=c.resetCounter.bind(Object(o.a)(c)),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setTimerInterval()}},{key:"setTimerInterval",value:function(){var e=this;console.log("inside setTimerInterval,this.state.intervalMs = ".concat(this.state.intervalMs)),clearInterval(this.timerID),this.timerID=setInterval((function(){return e.tick()}),this.state.intervalMs)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=this;this.setState((function(t,n){return{counter:e.state.counter+parseInt(e.state.increment)}}))}},{key:"handleInputChange",value:function(e){var t=this;this.setState(Object(f.a)({},e.target.name,e.target.value)),"intervalMs"===e.target.name&&setTimeout((function(){return t.setTimerInterval()}),1e3)}},{key:"resetCounter",value:function(){this.setState({counter:0})}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"row w-100",children:Object(m.jsx)("div",{className:"col text-secondary",children:"Counter"})}),Object(m.jsxs)("div",{className:"row w-100 mb-2",children:[Object(m.jsx)("div",{className:"col d-flex justify-content-center",children:Object(m.jsxs)("h4",{children:[" ",this.state.counter]})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)(y.a,{variant:"secondary",onClick:this.resetCounter,children:"Reset"})," "]})]}),Object(m.jsxs)("div",{className:"row w-100 text-secondary",children:[Object(m.jsx)("div",{className:"col-6",children:"Increment"}),Object(m.jsx)("div",{className:"col-6",children:"Interval / ms"})]}),Object(m.jsxs)("div",{className:"row w-100",children:[Object(m.jsx)("div",{className:"col-6",children:Object(m.jsx)("input",{className:"w-100",type:"number",name:"increment",onChange:this.handleInputChange,value:this.state.increment})}),Object(m.jsx)("div",{className:"col-6",children:Object(m.jsx)("input",{className:"w-100",type:"number",name:"intervalMs",onChange:this.handleInputChange,value:this.state.intervalMs})})]})]})}}]),n}(a.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).numArray=[0,1,2,3,4,5,6,7,8,9,10],c.colorArray=["red","orange","yellow","blue","green","purple"],c.render=c.render.bind(Object(o.a)(c)),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"getColorNumbers",value:function(){var e=this;return this.numArray.map((function(t){var n=e.colorArray[Math.floor(Math.random()*e.colorArray.length)];return Object(m.jsxs)("h4",{className:"d-inline",style:{color:n},children:[t,"\xa0"]},t)}))}},{key:"render",value:function(){var e=this.getColorNumbers();return console.log(e),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"row w-100",children:Object(m.jsx)("div",{className:"col d-flex justify-content-center",children:e})})})}}]),n}(a.a.Component),k=n(37),C=(n(50),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).colorArray=["red","orange","yellow","blue","green","purple"],c.refreshColors=c.refreshColors.bind(Object(o.a)(c)),c.addNumber=c.addNumber.bind(Object(o.a)(c)),c.deleteNumber=c.deleteNumber.bind(Object(o.a)(c)),c.state={numObjectArray:[]},c}return Object(l.a)(n,[{key:"getColor",value:function(){return this.colorArray[Math.floor(Math.random()*this.colorArray.length)]}},{key:"initializeNumObjectArray",value:function(){for(var e=[],t=0;t<=5;t++)e.push({number:t,color:this.getColor(),key:t});this.setState({numObjectArray:e})}},{key:"componentDidMount",value:function(){this.initializeNumObjectArray()}},{key:"componentWillUnmount",value:function(){}},{key:"refreshColors",value:function(){for(var e=this.state.numObjectArray,t=0;t<e.length;t++)e[t].color=this.getColor();this.setState({numObjectArray:e})}},{key:"addNumber",value:function(){console.log("before addNumber, this.state.numObjectArray = ".concat(this.state.numObjectArray));var e=[].concat(Object(k.a)(this.state.numObjectArray),[{number:this.state.numObjectArray.length,color:this.getColor()}]);console.log("inside addNumber, this.state.numObjectArray = ".concat(this.state.numObjectArray)),this.setState({numObjectArray:e})}},{key:"deleteNumber",value:function(){var e=this.state.numObjectArray;e.pop(),this.setState({numObjectArray:e})}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"row w-100",children:Object(m.jsx)("div",{className:"col d-flex justify-content-center",children:this.state.numObjectArray.map((function(e){return Object(m.jsxs)("h4",{className:"d-inline",style:{color:e.color},children:[e.number,"\xa0"]},e.number)}))})}),Object(m.jsxs)("div",{className:"row w-100 mb-3",children:[Object(m.jsxs)("div",{className:"col-4 d-flex justify-content-center",children:[Object(m.jsx)(y.a,{variant:"outline-secondary",onClick:this.deleteNumber,children:"Delete number"})," "]}),Object(m.jsxs)("div",{className:"col-4 d-flex justify-content-center",children:[Object(m.jsx)(y.a,{variant:"outline-primary",onClick:this.addNumber,children:"Add number"})," "]}),Object(m.jsxs)("div",{className:"col-4 d-flex justify-content-center",children:[Object(m.jsx)(y.a,{variant:"outline-info",onClick:this.refreshColors,children:"Refresh colors"})," "]})]})]})}}]),n}(a.a.Component)),w=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={text1:"Hello",text2:"World"},c.handleInputChange=c.handleInputChange.bind(Object(o.a)(c)),c}return Object(l.a)(n,[{key:"handleInputChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(m.jsxs)("span",{children:[Object(m.jsxs)("div",{className:"row w-100 mb-2",children:[Object(m.jsx)("div",{className:"col-7",children:Object(m.jsx)("input",{type:"text",value:this.state.text1,onChange:this.handleInputChange,name:"text1",className:"w-100"})}),Object(m.jsx)("div",{className:"col-5",children:Object(m.jsx)("span",{children:this.state.text1})})]}),Object(m.jsxs)("div",{className:"row w-100",children:[Object(m.jsx)("div",{className:"col-7",children:Object(m.jsx)("input",{type:"text",value:this.state.text2,onChange:this.handleInputChange,name:"text2",className:"w-100"})}),Object(m.jsx)("div",{className:"col-5",children:Object(m.jsx)("span",{children:this.state.text2})})]})]})}}]),n}(a.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"row w-100 mt-3 pl-1",children:[Object(m.jsx)("div",{className:"col-lg-3"}),Object(m.jsx)("div",{className:"col-lg-6",children:"This is a learning playground for my very first React components. I am starting out brand new to React, so these components are very basic."}),Object(m.jsx)("div",{className:"col-lg-3"})]}),Object(m.jsxs)("div",{className:"row w-100 my-3 pl-1",children:[Object(m.jsx)("div",{className:"col-lg-1"}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"TextMirror Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(w,{}),Object(m.jsx)("p",{className:"card-text text-secondary mt-4",children:"This takes user input and mirrors it in an HTML element. I do this a lot with AngularJS for customizing nutrition labels and wanted to see what a React version would look like."})]})]})}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"ColorNumbersUi Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(C,{}),Object(m.jsx)("p",{className:"card-text text-secondary mt-4",children:"This takes the ColorNumbers component a step farther by adding user input."})]})]})}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"ColorNumbers Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(N,{}),Object(m.jsx)("p",{className:"card-text text-secondary mt-4",children:"This is my first component that generates output based on an array of numbers. A color is randomly assigned to each number."})]})]})}),Object(m.jsx)("div",{className:"col-lg-1"})]}),Object(m.jsxs)("div",{className:"row w-100 my-3 pl-1",children:[Object(m.jsx)("div",{className:"col-lg-1"}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"CounterUi Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(g,{}),Object(m.jsx)("p",{className:"card-text text-secondary mt-4",children:"This is my first component that accepts user input to affect the state."})]})]})}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"Counter Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(p,{increment:"1"}),Object(m.jsx)("p",{className:"card-text text-secondary",children:"This is component is based on the Clock component below, but instead of maintaining time as a state variable, it maintains an integer that increments up every 1 second."})]})]})}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"Clock Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(v,{}),Object(m.jsxs)("p",{className:"card-text text-secondary",children:["This is my first React component with dynamic content. Actually, it was copied from the ",Object(m.jsx)("a",{href:"https://reactjs.org/docs/state-and-lifecycle.html",target:"_blank",children:"ReactJS website"}),". It is uses object-oriented ReactJS programming. The time is maintained as a state variable with a class method updating the time every second."]})]})]})}),Object(m.jsx)("div",{className:"col-lg-1"})]}),Object(m.jsxs)("div",{className:"row w-100 my-3 pl-1",children:[Object(m.jsx)("div",{className:"col-lg-1"}),Object(m.jsx)("div",{className:"col-lg-3",children:Object(m.jsxs)("div",{className:"card h-100",children:[Object(m.jsx)("div",{className:"card-header",children:Object(m.jsx)("h4",{children:"Hello World Component"})}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(x,{}),Object(m.jsx)("p",{className:"card-text text-secondary",children:"This is my very first React Component. It is as simple as can be and just outputs static text."})]})]})}),Object(m.jsx)("div",{className:"col-lg-1"})]})]})}}]),n}(a.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Simple Form"})})}}]),n}(a.a.Component),M=(n(54),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"row w-100 text-secondary bg-light navbar fixed-bottom",children:[Object(m.jsx)("div",{className:"col-xl-3 col-xs-12 d-flex px-5",children:"Ben Gross\xa0\xa9\xa02021"}),Object(m.jsx)("div",{className:"col-xl-6 col-xs-12 d-flex px-5 justify-content-center smallDisappear",children:"MIT xPRO Full Stack Development with MERN"}),Object(m.jsx)("div",{className:"col-xl-3 col-xs-12 d-flex px-5 justify-content-end smallDisappear",children:"React Playground"})]})})}}]),n}(a.a.Component)),D=n(35),T=n(9);var S=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(D.a,{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(T.c,{children:[Object(m.jsx)(T.a,{exact:!0,path:"/",children:Object(m.jsx)(O,{})}),Object(m.jsx)(T.a,{exact:!0,path:"/myfirstcomponents",children:Object(m.jsx)(I,{})}),Object(m.jsx)(T.a,{exact:!0,path:"/simpleform",children:Object(m.jsx)(A,{})})]}),Object(m.jsx)(M,{})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(57);r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),R()}},[[58,1,2]]]);
//# sourceMappingURL=main.429d9693.chunk.js.map