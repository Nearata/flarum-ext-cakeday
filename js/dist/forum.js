module.exports=function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(r){return e[r]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r){e.exports=flarum.core.compat["common/extend"]},function(e,r){e.exports=flarum.core.compat["common/components/Badge"]},function(e,r){e.exports=flarum.core.compat["common/models/User"]},,function(e,r,t){"use strict";t.r(r);var a=t(0),n=t(1),o=t.n(n),u=t(2),c=t.n(u),i=function(e,r){var t=app.forum.attribute("cakedayNewMembersDays");return e<window.dayjs(r).add(t,"day")};app.initializers.add("nearata-cakeday",(function(e){Object(a.extend)(c.a.prototype,"badges",(function(r){var t=this.joinTime(),a=window.dayjs(t),n=window.dayjs(),u=e.translator.trans("nearata-cakeday.forum.anniversary"),c=e.forum.attribute("cakedayNewMembers"),d=n.year()===a.year()&&i(n,t);if(c&&(d||i(n,a)))e.forum.attribute("cakedayNewMembersLabel")&&(u=e.translator.trans("nearata-cakeday.forum.new_member_label"));else{var f=a.month()===n.month(),l=a.date()===n.date();if(!f||!l)return}var s=e.forum.attribute("cakedayBgColor"),y=e.forum.attribute("cakedayTextColor");r.add("nearataCakeday",m(o.a,{type:"cakeday",icon:"fas fa-birthday-cake",label:u,style:"background-color:"+s+";color:"+y}))}))}))}]);
//# sourceMappingURL=forum.js.map