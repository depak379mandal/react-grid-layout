webpackJsonp([3],{56:function(t,e,n){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,o,r){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=n(0),c=e(u),l=n(2),p=n(4),d=e(p),f=(0,l.WidthProvider)(l.Responsive),h=function(t){function e(n){o(this,e);var i=r(this,t.call(this,n));return i.state={items:[0,1,2,3,4].map(function(t,e,n){return{i:t.toString(),x:2*t,y:0,w:2,h:2,add:t===(n.length-1).toString()}}),newCounter:0},i.onAddItem=i.onAddItem.bind(i),i.onBreakpointChange=i.onBreakpointChange.bind(i),i}return i(e,t),e.prototype.createElement=function(t){var e={position:"absolute",right:"2px",top:0,cursor:"pointer"},n=t.add?"+":t.i;return s("div",{"data-grid":t},n,t.add?s("span",{className:"add text",onClick:this.onAddItem,title:"You can add an item by clicking here, too."},void 0,"Add +"):s("span",{className:"text"},void 0,n),s("span",{className:"remove",style:e,onClick:this.onRemoveItem.bind(this,n)},void 0,"x"))},e.prototype.onAddItem=function(){console.log("adding","n"+this.state.newCounter),this.setState({items:this.state.items.concat({i:"n"+this.state.newCounter,x:2*this.state.items.length%(this.state.cols||12),y:1/0,w:2,h:2}),newCounter:this.state.newCounter+1})},e.prototype.onBreakpointChange=function(t,e){this.setState({breakpoint:t,cols:e})},e.prototype.onLayoutChange=function(t){this.props.onLayoutChange(t),this.setState({layout:t})},e.prototype.onRemoveItem=function(t){console.log("removing",t),this.setState({items:d.default.reject(this.state.items,{i:t})})},e.prototype.render=function(){var t=this;return s("div",{},void 0,s("button",{onClick:this.onAddItem},void 0,"Add Item"),c.default.createElement(f,a({onLayoutChange:this.onLayoutChange,onBreakpointChange:this.onBreakpointChange},this.props),d.default.map(this.state.items,function(e){return t.createElement(e)})))},e}(c.default.PureComponent);h.defaultProps={className:"layout",cols:{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:100},t.exports=h,n.c[n.s]===t&&n(3)(t.exports)}).call(e,n(1)(t))}},[56]);