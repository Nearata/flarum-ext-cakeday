module.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=16)}({14:function(e,t){e.exports=flarum.core.compat["common/components/Switch"]},16:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),o=function(e){return app.translator.trans("nearata-cakeday.admin.settings."+e)};app.initializers.add("nearata-cakeday",(function(e){e.extensionData.for("nearata-cakeday").registerSetting({setting:"nearata-cakeday.admin.new_members",label:o("new_members"),type:"boolean"}).registerSetting((function(){var e,t=this,a=this.setting("nearata-cakeday.admin.new_members")();return[(e=a,("string"==typeof e?parseInt(e):"boolean"==typeof e?e:void 0)?[m(".Form-group",[m("label",o("new_members_howlong")),m(".helpText",o("new_members_howlong_help")),m("input",{class:"FormControl",type:"number",bidi:this.setting("nearata-cakeday.admin.new_members_days"),autocomplete:"off",placeholder:"7",min:"1"})]),m(".Form-group",[m(r.a,{onchange:function(e){return t.setting("nearata-cakeday.admin.new_members_label")(e)},state:this.setting("nearata-cakeday.admin.new_members_label")()},o("new_members_changelabel"))])]:null)]})).registerSetting((function(){return[m(".Form-group",[m("label",o("cake_bg_color_label")),m(".helpText",o("cake_bg_color_help")),m("input",{class:"FormControl",type:"text",bidi:this.setting("nearata-cakeday.admin.cake_bg_color"),autocomplete:"off",placeholder:"#FFD449"})]),m(".Form-group",[m("label",o("cake_txt_color_label")),m(".helpText",o("cake_txt_color_help")),m("input",{class:"FormControl",type:"text",bidi:this.setting("nearata-cakeday.admin.cake_text_color"),autocomplete:"off",placeholder:"#FFF"})])]})).registerSetting({setting:"nearata-cakeday.admin.anniversaries_page",label:o("anniversaries_page_label"),type:"boolean"}).registerPermission({icon:"fas fa-birthday-cake",label:e.translator.trans("nearata-cakeday.admin.permissions.can_view_anniversaries_page"),permission:"nearata-cakeday.can_view_anniversaries_page"},"view")}))}});
//# sourceMappingURL=admin.js.map