(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{294:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(22),n(0).default.extend({components:{BlogMain:function(){return n.e(3).then(n.bind(null,304))}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",{deep:!0}).where({tags:{$contains:r.tag}}).sortBy("date","desc").fetch();case 3:return o=e.sent,e.abrupt("return",{posts:o,title:r.tag});case 5:case"end":return e.stop()}}),e)})))()}})),c=n(21),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BlogMain",{attrs:{posts:t.posts}},[t._v("Tag: "+t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports}}]);