(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{282:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("247a2662",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(282)},288:function(t,e,n){var c=n(59)(!1);c.push([t.i,".canvas[data-v-200bf266]{border:1px solid #000}",""]),t.exports=c},291:function(t,e,n){"use strict";n.r(e);n(198),n(200);var c={data:function(){return{ctx:null}},props:{x:{type:Number,default:0},y:{type:Number,default:0}},mounted:function(){this.ctx=this.$el.getContext("2d"),this.draw()},methods:{draw:function(){this.ctx.beginPath(),this.ctx.clearRect(0,0,150,150),this.ctx.beginPath(),this.ctx.moveTo(75,0),this.ctx.lineTo(75,150),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(0,75),this.ctx.lineTo(150,75),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(75*this.x+75,75*this.y+75,10,0,2*Math.PI),this.ctx.fill()}},watch:{x:{handler:function(){this.draw&&this.draw()},deep:!0},y:{handler:function(){this.draw&&this.draw()},deep:!0}}},h=(n(287),n(17)),component=Object(h.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{staticClass:"canvas",attrs:{width:"150",height:"150"}})}),[],!1,null,"200bf266",null);e.default=component.exports}}]);