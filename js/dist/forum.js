/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/AnniversariesList.js":
/*!***************************************************!*\
  !*** ./src/forum/components/AnniversariesList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnniversariesList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _AnniversariesListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnniversariesListItem */ "./src/forum/components/AnniversariesListItem.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Placeholder */ "flarum/common/components/Placeholder");
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Based on FriendsOfFlarum's UserDirectoryList
 */

var AnniversariesList = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnniversariesList, _Component);

  function AnniversariesList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AnniversariesList.prototype;

  _proto.view = function view() {
    var state = this.attrs.state;
    var loading;

    if (state.isLoading()) {
      loading = m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()));
    } else if (state.hasMoreResults()) {
      loading = m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        "class": "Button",
        onclick: state.loadMore.bind(state)
      }, app.translator.trans("nearata-cakeday.forum.page.load_more_button"));
    }

    if (state.isEmpty()) {
      var text = app.translator.trans("nearata-cakeday.forum.page.empty");
      return [m(".AnniversariesList", [m("h2", state.getH2()), m((flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default()), {
        text: text
      })])];
    }

    return [m(".AnniversariesList", [m("h2", state.getH2()), m("ul.AnniversariesList-users", [state.users.map(function (user) {
      return [m("li", {
        "data-id": user.id()
      }, m(_AnniversariesListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        user: user
      }))];
    })]), m(".AnniversariesList-loadMore", loading)])];
  };

  return AnniversariesList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/forum/components/AnniversariesListItem.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/AnniversariesListItem.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserDirectoryListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Based on FriendsOfFlarum's UserDirectoryListItem
 */

var UserDirectoryListItem = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserDirectoryListItem, _Component);

  function UserDirectoryListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserDirectoryListItem.prototype;

  _proto.view = function view() {
    var user = this.attrs.user;
    var todayYear = window.dayjs().year();

    var getFormattedDate = function getFormattedDate(date) {
      return window.dayjs(date).year(todayYear).format("YYYY-MM-DD");
    };

    return [m(".user", [m(".avatar", flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user, {
      title: ""
    })), m("", [m(".username", user.username()), m(".joinTime", getFormattedDate(user.attribute("joinTime")))])])];
  };

  return UserDirectoryListItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/AnniversariesPage.js":
/*!***************************************************!*\
  !*** ./src/forum/components/AnniversariesPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnniversariesPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _states_AnniversariesState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/AnniversariesState */ "./src/forum/states/AnniversariesState.js");
/* harmony import */ var _AnniversariesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnniversariesList */ "./src/forum/components/AnniversariesList.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/IndexPage */ "flarum/common/components/IndexPage");
/* harmony import */ var flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/Page */ "flarum/forum/components/Page");
/* harmony import */ var flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Based on FriendsOfFlarum's UserDirectoryPage
 */

var AnniversariesPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnniversariesPage, _Page);

  function AnniversariesPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = AnniversariesPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    this.state = new _states_AnniversariesState__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.state.refreshUsers();
    this.filterOptions = this.state.getFilterOptions();
    this.currentFilter = this.state.getCurrentFilter();
  };

  _proto.view = function view() {
    return [m(".IndexPage", [flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default().prototype.hero(), m(".container", [m(".sideNavContainer", [m("nav.IndexPage-nav.sideNav", [m("ul", flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.sidebarItems().toArray()))]), m(".IndexPage-results.sideNavOffset", [m(".IndexPage-toolbar", [m("ul.IndexPage-toolbar-view", flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.viewItems().toArray())), m("ul.IndexPage-toolbar-action", flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.actionItems().toArray()))]), m(_AnniversariesList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: this.state
    })])])])])];
  };

  _proto.sidebarItems = function sidebarItems() {
    return flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default().prototype.sidebarItems();
  };

  _proto.viewItems = function viewItems() {
    var _this = this;

    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    items.add("sort", m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default()), {
      buttonClassName: "Button",
      label: this.filterOptions[this.currentFilter]
    }, Object.keys(this.filterOptions).map(function (value) {
      var label = _this.filterOptions[value];
      var active = _this.currentFilter === value;
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        icon: active ? "fas fa-check" : true,
        active: active,
        onclick: function onclick() {
          _this.changeFilter(value);
        }
      }, label);
    })));
    return items;
  };

  _proto.actionItems = function actionItems() {
    var _this2 = this;

    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    items.add("refresh", m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      title: app.translator.trans("core.forum.index.refresh_tooltip"),
      icon: "fas fa-sync",
      "class": "Button Button--icon",
      onclick: function onclick() {
        _this2.state.refreshUsers();
      }
    }));
    return items;
  };

  _proto.changeFilter = function changeFilter(option) {
    this.state.changeFilter(option);
    this.currentFilter = this.state.getCurrentFilter();
  };

  return AnniversariesPage;
}((flarum_forum_components_Page__WEBPACK_IMPORTED_MODULE_8___default()));



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AnniversariesPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AnniversariesPage */ "./src/forum/components/AnniversariesPage.js");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/IndexPage */ "flarum/common/components/IndexPage");
/* harmony import */ var flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6__);








var memberDay = function memberDay(today, joinTime) {
  var days = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayNewMembersDays");
  var endDate = window.dayjs(joinTime).add(days, "day");
  return today < endDate;
};

flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().initializers.add("nearata-cakeday", function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().routes.nearata_cakeday_anniversaries) = {
    path: "/anniversaries",
    resolver: {
      onmatch: function onmatch(args) {
        if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayPageEnabled")) {
          return m.route.SKIP;
        }

        if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().session.user)) {
          return m.route.SKIP;
        }

        if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().session.user.attribute("canNearataCakedayViewPage")) {
          return m.route.SKIP;
        }

        return _components_AnniversariesPage__WEBPACK_IMPORTED_MODULE_0__["default"];
      }
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_common_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), "navItems", function (items) {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayPageEnabled")) {
      return;
    }

    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().session.user)) {
      return;
    }

    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().session.user.attribute("canNearataCakedayViewPage")) {
      return;
    }

    items.add("nearataCakedayAnniversaries", m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().route("nearata_cakeday_anniversaries"),
      icon: "fas fa-birthday-cake"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().translator.trans("nearata-cakeday.forum.page.title")));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_5___default().prototype), "badges", function (items) {
    var joinTime = this.joinTime();
    var join = window.dayjs(joinTime);
    var today = window.dayjs();
    var label = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().translator.trans("nearata-cakeday.forum.anniversary");
    var isMemberDay = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayNewMembers");
    var isSameYear = today.year() === join.year() && memberDay(today, joinTime);

    if (isMemberDay && (isSameYear || memberDay(today, join))) {
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayNewMembersLabel")) {
        label = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().translator.trans("nearata-cakeday.forum.new_member_label");
      }
    } else {
      var isMonth = join.month() === today.month();
      var isDay = join.date() === today.date();

      if (!(isMonth && isDay)) {
        return;
      }
    }

    var bgColor = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayBgColor");
    var textColor = flarum_forum_app__WEBPACK_IMPORTED_MODULE_6___default().forum.attribute("cakedayTextColor");
    items.add("nearataCakeday", m((flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "cakeday",
      icon: "fas fa-birthday-cake",
      label: label,
      style: "background-color:" + bgColor + ";color:" + textColor
    }));
  });
});

/***/ }),

/***/ "./src/forum/states/AnniversariesState.js":
/*!************************************************!*\
  !*** ./src/forum/states/AnniversariesState.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnniversariesState)
/* harmony export */ });
var trans = function trans(key) {
  return app.translator.trans("nearata-cakeday.forum.page.filter_options." + key);
};

var text1 = function text1(dayjs) {
  var date = dayjs.format("ll");
  return app.translator.trans("nearata-cakeday.forum.page.anniversaries_for_label", {
    date: date
  });
};

var text2 = function text2(dayjs1, dayjs2) {
  var date1 = dayjs1.format("ll");
  var date2 = dayjs2.format("ll");
  return app.translator.trans("nearata-cakeday.forum.page.anniversaries_between_label", {
    date1: date1,
    date2: date2
  });
};
/**
 * Based on FriendsOfFlarum's UserDirectoryState
 */


var AnniversariesState = /*#__PURE__*/function () {
  function AnniversariesState() {
    this.users = [];
    this.loading = false;
    this.moreResults = false;
    this.currentFilter = "today";
  }

  var _proto = AnniversariesState.prototype;

  _proto.loadUsers = function loadUsers() {
    var _this = this;

    app.store.find("users", this.getParams()).then(function (users) {
      var _this$users;

      (_this$users = _this.users).push.apply(_this$users, users);

      _this.moreResults = !!users.payload.links && !!users.payload.links.next;
      _this.loading = false;
      m.redraw();
    }, function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.refreshUsers = function refreshUsers() {
    this.loading = true;
    this.clearUsers();
    this.loadUsers();
  };

  _proto.hasMoreResults = function hasMoreResults() {
    return this.moreResults;
  };

  _proto.clearUsers = function clearUsers() {
    this.users = [];
    m.redraw();
  };

  _proto.isLoading = function isLoading() {
    return this.loading;
  };

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadUsers();
  };

  _proto.getParams = function getParams() {
    var params = {};
    params["page"] = {
      offset: this.users.length
    };
    params["sort"] = "joinedAt";
    params["filter"] = {
      cakeday: this.currentFilter
    };
    return params;
  };

  _proto.getFilterOptions = function getFilterOptions() {
    return {
      today: trans("today"),
      tomorrow: trans("tomorrow"),
      upcoming: trans("upcoming"),
      all: trans("all")
    };
  };

  _proto.getCurrentFilter = function getCurrentFilter() {
    return this.currentFilter;
  };

  _proto.changeFilter = function changeFilter(option) {
    this.currentFilter = option;
    this.refreshUsers();
  };

  _proto.isEmpty = function isEmpty() {
    return this.users.length === 0 && !this.isLoading();
  };

  _proto.getH2 = function getH2() {
    var today = window.dayjs();
    var tomorrow = today.add(1, "day");
    var upcoming = tomorrow.add(1, "day");
    var text = "";

    switch (this.currentFilter) {
      case "today":
        text = text1(today);
        break;

      case "tomorrow":
        text = text1(tomorrow);
        break;

      case "upcoming":
        var upcomingTo = upcoming.add(1, "week");
        text = text2(upcoming, upcomingTo);
        break;

      case "all":
        var start = today.startOf("year");
        var end = today.endOf("year");
        text = text2(start, end);
        break;

      default:
        break;
    }

    return text;
  };

  return AnniversariesState;
}();



/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Badge":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Badge']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Badge'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/IndexPage":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['common/components/IndexPage']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/IndexPage'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Placeholder":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Placeholder']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Placeholder'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/Page":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Page']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Page'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map