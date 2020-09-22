(this["webpackJsonpinterview-frontend"]=this["webpackJsonpinterview-frontend"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);n(13);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),o=n(6),i=n(11),s=n(3),u=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){var t=e.length,n=[];e.length>5&&(t=5);for(var a=0;a<t;a++)n=[].concat(Object(i.a)(n),[e[a]]);return n})).then((function(e){return r(e)}))}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Instructions"),l.a.createElement("p",null,"We are currently trying to render the first 5 users we obtain from a REST API. The problem is that, for some reason, it's only rendering one of them. Another thing we've noticed is that, sometimes, it renders different user."),l.a.createElement("p",null,l.a.createElement("strong",null,"TODO:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Fetch and Render the first 5 users"),l.a.createElement("li",null,"Make sure the order is ascendant by ID"))),l.a.createElement("hr",{className:"my-5"}),l.a.createElement("h3",null,"Users"),l.a.createElement("ul",{className:"list-group"},n.map((function(e){return l.a.createElement("li",{key:"user-".concat(e.id),className:"list-group-item"},l.a.createElement("strong",null,"ID:")," ",e.id," - ",l.a.createElement("strong",null,"Name:")," ",e.name," ",l.a.createElement("strong",null,"Email:")," ",e.email)}))))},m=n(4),h=function(e){var t=e.value,n=e.onChange,a=e.id;return l.a.createElement("div",{className:"d-flex my-2"},l.a.createElement("strong",null,t),l.a.createElement("div",{className:"ml-2"},l.a.createElement("button",{className:"btn btn-danger mr-1",onClick:function(){n().decrement(a,1)}},"-"),l.a.createElement("button",{className:"btn btn-success",onClick:function(){n().increment(a,1)}},"+")))},E=function(){var e=l.a.useState([{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=l.a.useState(0),c=Object(s.a)(r,2),o=c[0],i=c[1],u=function(){return{increment:function(e,t){a(n.map((function(n){return n.id===e?Object(m.a)(Object(m.a)({},n),{},{value:n.value+t}):n}))),function(e){i(o+e)}(t)},decrement:function(e,t){a(n.map((function(n){return n.id===e?Object(m.a)(Object(m.a)({},n),{},{value:n.value-t}):n}))),function(e){i(o-e)}(t)}}};return l.a.createElement("div",null,n.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(h,{value:e.value,onChange:u,id:e.id}))})),l.a.createElement(d,{total:o}))},d=function(e){var t=e.total;return l.a.createElement("strong",null,"Total: ",t)},p=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Instructions"),l.a.createElement("p",null,"There are 2 components in this file: ",l.a.createElement("strong",null,"Counter")," and"," ",l.a.createElement("strong",null,"GroupOfCounters"),". The steps below will take you through modifying and adding components to change functionality and implementation."),l.a.createElement("ol",null,l.a.createElement("li",null,"Update the ",l.a.createElement("strong",null,"Counter")," component to take"," ",l.a.createElement("strong",null,"onIncrement")," and ",l.a.createElement("strong",null,"onDecrement")," ","callbacks as props and ensure they update the counter's values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter's existing value by."),l.a.createElement("li",null,"Move the global ",l.a.createElement("strong",null,"data")," array to the component state for the ",l.a.createElement("strong",null,"GroupOfCounters")," component."),l.a.createElement("li",null,"Render a fourth ",l.a.createElement("strong",null,"Counter")," component and ensure it's value is updated independently from the others."),l.a.createElement("li",null,"Create a ",l.a.createElement("strong",null,"Total")," component, which should display below the ",l.a.createElement("strong",null,"Counter")," components and always display the running total of all the ",l.a.createElement("strong",null,"Counter")," values."),l.a.createElement("li",null,"Make a copy of the ",l.a.createElement("strong",null,"Counter")," component, saving the original so you're instructor can view it later. Then do the following:",l.a.createElement("ol",null,l.a.createElement("li",null,"Remove the ",l.a.createElement("strong",null,"onIncrement")," and"," ",l.a.createElement("strong",null,"onDecrement")," props from the (new)"," ",l.a.createElement("strong",null,"Counter")," component"),l.a.createElement("li",null,"Add a single ",l.a.createElement("strong",null,"onChange")," callback prop that takes a single integer parameter \u2014 the new value for the counter."),l.a.createElement("li",null,"Ensure all ",l.a.createElement("strong",null,"Counter")," components still update and function independently after this change.")))),l.a.createElement("hr",{className:"my-5"}),l.a.createElement(E,null))},g=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Instructions"),l.a.createElement("p",null,"Finally, we would like to make a quick simple fixes in the webapp."),l.a.createElement("ol",null,l.a.createElement("li",null,"The ",l.a.createElement("strong",null,"Homepage"),' is always "active" in the navbar, even when we go to any of the other pages. We need to activate the correct page depending on which page we are located. HINT: we use a library for the routes called ',l.a.createElement("strong",null,"Reach Router"),", and here's the instruction about how to make the buttons active https://reach.tech/router/example/active-links."),l.a.createElement("li",null,"We would like to remove the Homepage button from the navbar and make the Title clickable, which should take it to the homepage.")))},f=(n(24),function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Welcome!"),l.a.createElement("p",null,"Please take a look at the 3 exercises, each of them contain instructions."))}),v=function(e){return l.a.createElement(o.a,Object.assign({},e,{getProps:function(e){return{className:e.isCurrent?"nav-link active":"nav-link"}}}))},b=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(o.a,{to:"/"},l.a.createElement("h1",{className:"py-4"},"FrontEnd Interview Exercises")),l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(v,{to:"/exercise01"},"Exercise 01")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v,{to:"/exercise02"},"Exercise 02")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v,{to:"/exercise03"},"Exercise 03"))),l.a.createElement(o.b,{className:"mt-5 mb-5"},l.a.createElement(f,{path:"/",default:!0}),l.a.createElement(u,{path:"/exercise01"}),l.a.createElement(p,{path:"/exercise02"}),l.a.createElement(g,{path:"/exercise03"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a9768c1c.chunk.js.map