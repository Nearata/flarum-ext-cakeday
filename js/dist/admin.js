module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({3:function(e,t){e.exports=flarum.core.compat["common/components/Switch"]},5:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a);app.initializers.add("nearata-cakeday",(function(e){e.extensionData.for("nearata-cakeday").registerSetting({setting:"nearata-cakeday.admin.new_members",label:e.translator.trans("nearata-cakeday.admin.new_members"),type:"boolean"}).registerSetting((function(){var t,n=this,a=this.setting("nearata-cakeday.admin.new_members")();return[(t=a,("string"==typeof t?parseInt(t):"boolean"==typeof t?t:void 0)?[m(".Form-group",[m("label",e.translator.trans("nearata-cakeday.admin.new_members_howlong")),m(".helpText",e.translator.trans("nearata-cakeday.admin.new_members_howlong_helptext")),m("input",{class:"FormControl",type:"number",bidi:this.setting("nearata-cakeday.admin.new_members_days"),autocomplete:"off",placeholder:"7",min:"1"})]),m(".Form-group",[m(r.a,{onchange:function(e){return n.setting("nearata-cakeday.admin.new_members_label")(e)},state:this.setting("nearata-cakeday.admin.new_members_label")()},e.translator.trans("nearata-cakeday.admin.new_members_changelabel"))])]:null)]}))}))}});
//# sourceMappingURL=admin.js.map