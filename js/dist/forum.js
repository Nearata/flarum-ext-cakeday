module.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["common/components/Badge"]},function(e,t){e.exports=flarum.core.compat["common/models/User"]},,function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),o=r.n(n),u=r(2),i=r.n(u),c=function(e,t){var r=app.forum.attribute("cakedayNewMembersDays");return e<window.dayjs(t).add(r,"day")};app.initializers.add("nearata-cakeday",(function(e){Object(a.extend)(i.a.prototype,"badges",(function(t){var r=this.joinTime(),a=window.dayjs(r),n=window.dayjs(),u=e.translator.trans("nearata-cakeday.forum.anniversary"),i=e.forum.attribute("cakedayNewMembers"),d=n.year()===a.year()&&c(n,r);if(i&&(d||c(n,a)))e.forum.attribute("cakedayNewMembersLabel")&&(u=e.translator.trans("nearata-cakeday.forum.new_member_label"));else{var f=a.month()===n.month(),l=a.date()===n.date();if(!f||!l)return}t.add("nearataCakeday",m(o.a,{type:"cakeday",icon:"fas fa-birthday-cake",label:u}))}))}))}]);
//# sourceMappingURL=forum.js.map