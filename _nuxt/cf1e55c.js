(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{248:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("4b545b2a",content,!0,{sourceMap:!1})},286:function(t,e,r){"use strict";var n=r(248),o=r.n(n);r.d(e,"default",(function(){return o.a}))},287:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,"._6oqP{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:9999px;--tw-border-opacity:1;border-color:rgba(0, 0, 0, var(--tw-border-opacity));display:inline-block;padding-left:0.5rem;padding-right:0.5rem;font-weight:700;margin-left:0.25rem;margin-right:0.25rem}",""]),n.locals={chip:"_6oqP"},t.exports=n},306:function(t,e,r){"use strict";r.r(e);r(88);var n=r(65),o=Object(n.defineComponent)({name:"TChip",props:{to:{type:String,default:""}},setup:function(t){var e=Object(n.computed)((function(){return""===t.to?"span":t.to.startsWith("http")?"a":"nuxt-link"})),r=Object(n.computed)((function(){switch(e.value){case"span":return{};case"a":return{href:t.to};default:return{to:t.to}}}));return{tag:e,attrs:r}}}),c=r(286),l=r(21);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._b({tag:"components",class:t.$style.chip},"components",t.attrs,!1),[t._t("default")],2)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports}}]);