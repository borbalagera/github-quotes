(this["webpackJsonpgithub-quotes"]=this["webpackJsonpgithub-quotes"]||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=(n(5),n(10)),u=n(11),s=n(3),i=n(13),d=n(14),m=n(12);var h=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],o=n[1];return c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{id:"left",href:"#",className:"share",onClick:function(){return o(!r)}},"Share"),r&&e.children)},b=n(4),f=n(2);var E=function(){function e(e){return c.a.createElement("a",{href:"#",target:"_blank",className:"menu-item"},c.a.createElement("span",{className:"icon-button"},e.leftIcon),e.children)}return c.a.createElement("div",{className:"dropdown"},c.a.createElement(e,{leftIcon:c.a.createElement(b.a,{icon:f.c})},"Twitter"),c.a.createElement(e,{leftIcon:c.a.createElement(b.a,{icon:f.a})},"Facebook"),c.a.createElement(e,{leftIcon:c.a.createElement(b.a,{icon:f.b})},"Tumblr"))},I=function(e){var t=e.buttonDisplayName,n=e.clickHandler;return c.a.createElement("button",{className:"nextbtn",id:"right",onClick:n},t)},v=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={quotes:[],currentIndex:null,colors:""},a.newIndex=a.newIndex.bind(Object(s.a)(a)),a.currentIndex=a.currentIndex.bind(Object(s.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t},e.newIndex)}))}},{key:"currentIndex",value:function(){return Math.floor(0+Math.random()*(this.state.quotes.length-1))}},{key:"newIndex",value:function(){this.setState({currentIndex:this.currentIndex()});var e=Math.floor(16777215*Math.random()).toString(16);document.body.style.backgroundColor="#"+e,document.getElementById("left").style.color="#"+e,document.getElementById("right").style.color="#"+e}},{key:"render",value:function(){return console.log(this.state.currentIndex),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"quote-box"},c.a.createElement("div",{className:"quote"},this.selectedQuote?'" '.concat(this.selectedQuote.quote,' "'):""),c.a.createElement("div",{className:"author"},this.selectedQuote?"- ".concat(this.selectedQuote.author):""),c.a.createElement("br",null),c.a.createElement(I,{buttonDisplayName:"Next Quote",clickHandler:this.newIndex}),c.a.createElement(h,null,c.a.createElement(E,null))))}},{key:"selectedQuote",get:function(){return this.state.quotes[this.state.currentIndex]}}]),n}(a.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},5:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.82624ece.chunk.js.map