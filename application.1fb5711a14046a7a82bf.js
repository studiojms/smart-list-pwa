(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "/hs+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/core-js/stable/index.js
var stable = __webpack_require__("aEH2");

// EXTERNAL MODULE: ../node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("wcNg");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__("xARA");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("oNR1");

// EXTERNAL MODULE: ../node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__("ve3R");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js + 2 modules
var Dimmer = __webpack_require__("h6E7");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js
var Loader = __webpack_require__("sK9H");

// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__("/m4v");

// EXTERNAL MODULE: ../node_modules/semantic-ui-css/semantic.min.css
var semantic_min = __webpack_require__("QmEL");

// EXTERNAL MODULE: ./assets/styles/styles.scss
var styles = __webpack_require__("QyVf");

// EXTERNAL MODULE: ../node_modules/i18next/dist/esm/i18next.js + 12 modules
var i18next = __webpack_require__("BJ7Q");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/context.js
var context = __webpack_require__("0Xeg");

// EXTERNAL MODULE: ../node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var i18nextBrowserLanguageDetector = __webpack_require__("rVR6");

// EXTERNAL MODULE: ../node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js
var i18nextXHRBackend = __webpack_require__("zaqH");

// CONCATENATED MODULE: ./i18n/index.ts




var options = {
  interpolation: {
    escapeValue: false // not needed for react!!

  },
  debug: false,
  keySeparator: false,
  fallbackLng: 'en',
  ns: ['commom', 'item'],
  defaultNS: 'commom',
  load: 'currentOnly',
  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
  backend: {
    loadPath: './i18n/locales/{{lng}}/{{ns}}.json'
  }
};
i18next["a" /* default */].use(context["e" /* initReactI18next */]) // passes i18n down to react-i18next
.use(i18nextBrowserLanguageDetector["a" /* default */]).use(i18nextXHRBackend["a" /* default */]).init(options);
/* harmony default export */ var i18n_0 = (i18next["a" /* default */]);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Container/Container.js
var Container = __webpack_require__("9Xwr");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js + 3 modules
var Menu = __webpack_require__("4UZT");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js + 1 modules
var Image = __webpack_require__("cFof");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js + 4 modules
var Popup = __webpack_require__("4Qtb");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js + 2 modules
var Segment = __webpack_require__("+Uu6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js + 3 modules
var Button = __webpack_require__("eaJJ");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Input/Input.js
var Input = __webpack_require__("IDWW");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js + 5 modules
var Dropdown = __webpack_require__("Z606");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/Label.js + 2 modules
var Label = __webpack_require__("NttU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Responsive/Responsive.js + 1 modules
var Responsive = __webpack_require__("nnja");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/behaviors/Visibility/Visibility.js
var Visibility = __webpack_require__("s22y");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Confirm/Confirm.js
var Confirm = __webpack_require__("Svs1");

// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("USb2");

// EXTERNAL MODULE: ../node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__("egL6");

// CONCATENATED MODULE: ./assets/images/icon.png
/* harmony default export */ var icon = (__webpack_require__.p + "df61518cc2c1560fbe7afae4ec87ffad.png");
// EXTERNAL MODULE: ../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 3 modules
var redux_toolkit_esm = __webpack_require__("Guay");

// CONCATENATED MODULE: ./api/api.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var STORAGE_KEY = 'SL_ITEMS';
/**
 * Lists items from repository
 */

function listItems() {
  return _listItems.apply(this, arguments);
}
/**
 * Saves items to the repository
 *
 * @param items list of items
 */


function _listItems() {
  _listItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('localStorage' in window)) {
              _context.next = 4;
              break;
            }

            data = localStorage.getItem(STORAGE_KEY);

            if (!data) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", JSON.parse(data));

          case 4:
            return _context.abrupt("return", []);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _listItems.apply(this, arguments);
}

function saveItems(_x) {
  return _saveItems.apply(this, arguments);
}

function _saveItems() {
  _saveItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(items) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if ('localStorage' in window) {
              data = JSON.stringify(items);
              localStorage.setItem(STORAGE_KEY, data);
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _saveItems.apply(this, arguments);
}


// CONCATENATED MODULE: ./pages/home/smartItem/itemSlice.ts
function itemSlice_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function itemSlice_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { itemSlice_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { itemSlice_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var initialState = [];
/**
 * Redux slice to deal with the items
 */

var itemSlice = Object(redux_toolkit_esm["b" /* createSlice */])({
  name: 'items',
  initialState: initialState,
  reducers: {
    receiveItems: function receiveItems(state, action) {
      return action.payload;
    },
    filterItems: function filterItems(state, action) {
      return state.filter(function (item) {
        return item.text.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    addItem: function addItem(state, action) {
      state.push(action.payload);
    },
    removeItem: function removeItem(state, action) {
      return state.filter(function (item) {
        return item.id != action.payload.id;
      });
    },
    removeAllItems: function removeAllItems() {
      return [];
    },
    removeCompletedItems: function removeCompletedItems(state) {
      return state.filter(function (i) {
        return !i.completed;
      });
    },
    addItems: function addItems(state, action) {
      state.push.apply(state, _toConsumableArray(action.payload));
    },
    toggleItem: function toggleItem(state, action) {
      var item = state.find(function (i) {
        return i.id === action.payload.id;
      });

      if (item) {
        item.completed = !item.completed;
      }
    }
  }
});
/**
 * Loads the items
 */

var itemSlice_loadItems = function loadItems() {
  return /*#__PURE__*/function () {
    var _ref = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return listItems();

            case 2:
              items = _context.sent;
              dispatch(itemSlice.actions.receiveItems(items));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
/**
 * Filters the items based on the given text
 *
 * @param {string} text text to filter the items
 */


var itemSlice_filterItems = function filterItems(text) {
  return /*#__PURE__*/function () {
    var _ref2 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var items;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!text) {
                _context2.next = 4;
                break;
              }

              dispatch(itemSlice.actions.filterItems(text));
              _context2.next = 8;
              break;

            case 4:
              _context2.next = 6;
              return listItems();

            case 6:
              items = _context2.sent;
              dispatch(itemSlice.actions.receiveItems(items));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
/**
 * Adds a new item to the list
 *
 * @param {string} text text of the new item
 */


var itemSlice_addItem = function addItem(text) {
  return /*#__PURE__*/function () {
    var _ref3 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var newItem, items;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              newItem = {
                id: Math.random().toString(36).substr(2, 9),
                completed: false,
                text: text
              };
              dispatch(itemSlice.actions.addItem(newItem));
              _context3.next = 4;
              return listItems();

            case 4:
              items = _context3.sent;
              saveItems(Array.from(new Set([].concat(_toConsumableArray(items), [newItem]))));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
/**
 * Marks/unmarks an item as completed
 *
 * @param {Item} item item to be toggled
 */


var itemSlice_toggleItem = function toggleItem(item) {
  return /*#__PURE__*/function () {
    var _ref4 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      var items, processedItems;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch(itemSlice.actions.toggleItem(item));
              _context4.next = 3;
              return listItems();

            case 3:
              items = _context4.sent;
              processedItems = items.map(function (i) {
                if (i.id === item.id) {
                  i.completed = !i.completed;
                }

                return i;
              });
              saveItems(processedItems);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
/**
 * Removes an item from the list
 *
 * @param {Item} item item to be removed
 */


var itemSlice_removeItem = function removeItem(item) {
  return /*#__PURE__*/function () {
    var _ref5 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {
      var items;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch(itemSlice.actions.removeItem(item));
              _context5.next = 3;
              return listItems();

            case 3:
              items = _context5.sent.filter(function (i) {
                return i.id != item.id;
              });
              saveItems(items);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
/**
 * Removes all items from the list
 *
 */


var itemSlice_removeAllItems = function removeAllItems() {
  return /*#__PURE__*/function () {
    var _ref6 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch(itemSlice.actions.removeAllItems());
              saveItems([]);

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};
/**
 * Removes aall completed items from the list
 *
 */


var itemSlice_removeCompletedItems = function removeCompletedItems() {
  return /*#__PURE__*/function () {
    var _ref7 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch) {
      var items;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch(itemSlice.actions.removeCompletedItems());
              _context7.next = 3;
              return listItems();

            case 3:
              items = _context7.sent.filter(function (i) {
                return !i.completed;
              });
              saveItems(items);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};
/**
 * Adds a list of items
 *
 * @param {string[]} items items to be added
 */


var itemSlice_addItems = function addItems(items) {
  return /*#__PURE__*/function () {
    var _ref8 = itemSlice_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch) {
      var newItems, itemList;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              newItems = items.map(function (item) {
                return {
                  id: Math.random().toString(36).substr(2, 9),
                  completed: false,
                  text: item
                };
              });
              dispatch(itemSlice.actions.addItems(newItems));
              _context8.next = 4;
              return listItems();

            case 4:
              itemList = _context8.sent;
              saveItems([].concat(_toConsumableArray(itemList), _toConsumableArray(newItems)));

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};

/* harmony default export */ var smartItem_itemSlice = (itemSlice.reducer);

// CONCATENATED MODULE: ./utils/Utils.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Utitilities functions
 */

var Utils_Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getWidth",
    value: function getWidth() {
      var isSSR = typeof window === 'undefined';
      return isSSR ? Responsive["a" /* default */].onlyTablet.minWidth : window.innerWidth;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      var isMobile = false;

      if (Responsive["a" /* default */] && Responsive["a" /* default */].onlyMobile && Responsive["a" /* default */].onlyMobile.maxWidth) {
        isMobile = Utils.getWidth() <= Responsive["a" /* default */].onlyMobile.maxWidth;
      }

      return isMobile;
    }
  }]);

  return Utils;
}();

/* harmony default export */ var utils_Utils = (Utils_Utils);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js + 11 modules
var Modal = __webpack_require__("nXp5");

// CONCATENATED MODULE: ./components/AboutModal.tsx




/**
 * Displays a modal with information about the app.
 *
 * @param {boolean} open indicates if the modal must be shown
 * @param {func} setOpen function turn the modal shown/hidden
 */
function AboutModal(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen;

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */], {
    dimmer: "blurring",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */].Header, null, t('commom:about.title')), /*#__PURE__*/react_default.a.createElement(Segment["a" /* default */], {
    basic: true,
    compact: true,
    floated: "right"
  }, t('commom:about.version'), " ", /*#__PURE__*/react_default.a.createElement("strong", null, "1.0.1" || false)), /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */].Content, null, t('commom:about.description'), /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://github.com/studiojms",
    target: "_blank",
    rel: "noreferrer"
  }, "Jefferson Mariano de Souza ", /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
    name: "github"
  }))), /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */].Content, null, t('commom:about.contribute'), /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://github.com/studiojms/smart-list-pwa",
    target: "_blank",
    rel: "noreferrer"
  }, "https://github.com/studiojms/smart-list-pwa ", /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
    name: "github alternate"
  }))));
}

/* harmony default export */ var components_AboutModal = (AboutModal);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js
var Flag = __webpack_require__("UbxP");

// CONCATENATED MODULE: ./components/SelectedFlag.tsx



/**
 * Displays the flag of the selected language
 */

function SelectedFlag() {
  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      i18n = _useTranslation.i18n;

  var flag = '';

  switch (i18n.language) {
    case 'pt-BR':
      flag = 'br';
      break;

    case 'en':
      flag = 'us';
      break;
  }

  return flag ? /*#__PURE__*/react_default.a.createElement(Flag["a" /* default */], {
    name: flag
  }) : /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
    name: "world"
  });
}

/* harmony default export */ var components_SelectedFlag = (SelectedFlag);
// CONCATENATED MODULE: ./components/container/DesktopContainer.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || DesktopContainer_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DesktopContainer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DesktopContainer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DesktopContainer_arrayLikeToArray(o, minLen); }

function DesktopContainer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













/**
 * Wide container for the application
 *
 * @param children content to be displayed
 */
function DesktopContainer(_ref) {
  var children = _ref.children;

  var _React$useState = react_default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fixed = _React$useState2[0],
      setFixed = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      search = _React$useState4[0],
      setSearch = _React$useState4[1];

  var _React$useState5 = react_default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      aboutOpen = _React$useState6[0],
      setAboutOpen = _React$useState6[1];

  var _React$useState7 = react_default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      removeAllOpen = _React$useState8[0],
      setRemoveAllOpen = _React$useState8[1];

  var _React$useState9 = react_default.a.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      removeCompletedOpen = _React$useState10[0],
      setRemoveCompletedOpen = _React$useState10[1];

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var dispatch = Object(es["b" /* useDispatch */])();
  var location = Object(react_router["f" /* useLocation */])();

  var hideFixedMenu = function hideFixedMenu() {
    return setFixed(false);
  };

  var showFixedMenu = function showFixedMenu() {
    return setFixed(true);
  };

  function handleConfirmDeleteRemoveAll() {
    setRemoveAllOpen(false);
    dispatch(itemSlice_removeAllItems());
  }

  function handleCancelDeleteRemoveAll() {
    setRemoveAllOpen(false);
  }

  function handleConfirmDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
    dispatch(itemSlice_removeCompletedItems());
  }

  function handleCancelDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
  }

  var menuContent = /*#__PURE__*/react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    as: react_router_dom["a" /* Link */],
    to: "/",
    header: true,
    active: location.pathname == '/'
  }, /*#__PURE__*/react_default.a.createElement(Image["a" /* default */], {
    src: icon,
    size: "mini",
    className: "sl-mr--10"
  }), " ", t('commom:title')), /*#__PURE__*/react_default.a.createElement(Popup["a" /* default */], {
    hoverable: true,
    flowing: true,
    content: /*#__PURE__*/react_default.a.createElement(Segment["a" /* default */], {
      basic: true
    }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      basic: true,
      color: "red",
      size: "tiny",
      onClick: function onClick() {
        setRemoveCompletedOpen(true);
      }
    }, t('commom:menu.removeCompleted')), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      basic: true,
      color: "red",
      size: "tiny",
      onClick: function onClick() {
        setRemoveAllOpen(true);
      }
    }, t('commom:menu.removeAll'))),
    trigger: /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
      icon: "options"
    })
  }), /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, null, /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: function onSubmit() {
      dispatch(itemSlice_filterItems(search));
    }
  }, /*#__PURE__*/react_default.a.createElement(Input["a" /* default */], {
    action: true
  }, /*#__PURE__*/react_default.a.createElement(Input["a" /* default */], {
    icon: "search",
    iconPosition: "left",
    size: "mini",
    placeholder: t('commom:search'),
    value: search,
    onChange: function onChange(e) {
      setSearch(e.target.value);
    }
  }), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    type: "button",
    icon: "delete",
    onClick: function onClick() {
      setSearch('');
      dispatch(itemSlice_loadItems());
    }
  })))), /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    position: "right"
  }, /*#__PURE__*/react_default.a.createElement(Popup["a" /* default */], {
    content: t('commom:changeLanguage'),
    trigger: /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */], {
      basic: true,
      icon: null,
      direction: "left",
      trigger: /*#__PURE__*/react_default.a.createElement(components_SelectedFlag, null)
    }, /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */].Menu, null, /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */].Item, {
      flag: "br",
      onClick: function onClick() {
        i18n.changeLanguage('pt-BR');
      },
      content: /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
        size: "tiny",
        basic: true
      }, t('commom:lang.portuguese'))
    }), /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */].Item, {
      flag: "us",
      onClick: function onClick() {
        i18n.changeLanguage('en');
      },
      content: /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
        size: "tiny",
        basic: true
      }, t('commom:lang.english'))
    })))
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "sl-pointer"
  }, /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
    name: "question circle",
    className: "sl-ml--20",
    onClick: function onClick() {
      return setAboutOpen(true);
    }
  }))));
  var menu;

  if (fixed) {
    menu = /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */], {
      attached: "top",
      color: "orange",
      inverted: true,
      size: "huge",
      borderless: true
    }, menuContent);
  } else {
    menu = /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */], {
      inverted: !fixed,
      pointing: !fixed,
      secondary: !fixed,
      size: "huge",
      color: "orange"
    }, menuContent);
  }

  return /*#__PURE__*/react_default.a.createElement(Responsive["a" /* default */], {
    getWidth: utils_Utils.getWidth,
    minWidth: Responsive["a" /* default */].onlyTablet.minWidth
  }, /*#__PURE__*/react_default.a.createElement(Visibility["a" /* default */], {
    once: false,
    onBottomPassed: showFixedMenu,
    onBottomPassedReverse: hideFixedMenu
  }, menu), /*#__PURE__*/react_default.a.createElement(Container["a" /* default */], {
    className: "sl-mt--15"
  }, children), /*#__PURE__*/react_default.a.createElement(components_AboutModal, {
    open: aboutOpen,
    setOpen: setAboutOpen
  }), /*#__PURE__*/react_default.a.createElement(Confirm["a" /* default */], {
    open: removeAllOpen,
    cancelButton: t('commom:remove.all.cancel'),
    confirmButton: t('commom:remove.all.remove'),
    header: t('commom:remove.all.title'),
    content: t('commom:remove.all.message'),
    dimmer: "blurring",
    size: "mini",
    onCancel: handleCancelDeleteRemoveAll,
    onConfirm: function onConfirm() {
      return handleConfirmDeleteRemoveAll();
    }
  }), /*#__PURE__*/react_default.a.createElement(Confirm["a" /* default */], {
    open: removeCompletedOpen,
    cancelButton: t('commom:remove.completed.cancel'),
    confirmButton: t('commom:remove.completed.remove'),
    header: t('commom:remove.completed.title'),
    content: t('commom:remove.completed.message'),
    dimmer: "blurring",
    size: "mini",
    onCancel: handleCancelDeleteRemoveCompleted,
    onConfirm: function onConfirm() {
      return handleConfirmDeleteRemoveCompleted();
    }
  }));
}

/* harmony default export */ var container_DesktopContainer = (DesktopContainer);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js + 2 modules
var Sidebar = __webpack_require__("e+9l");

// CONCATENATED MODULE: ./components/container/MobileContainer.tsx
function MobileContainer_slicedToArray(arr, i) { return MobileContainer_arrayWithHoles(arr) || MobileContainer_iterableToArrayLimit(arr, i) || MobileContainer_unsupportedIterableToArray(arr, i) || MobileContainer_nonIterableRest(); }

function MobileContainer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MobileContainer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MobileContainer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MobileContainer_arrayLikeToArray(o, minLen); }

function MobileContainer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MobileContainer_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MobileContainer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













/**
 * Mobile container for the application
 *
 * @param children content to be displayed
 */
function MobileContainer(_ref) {
  var children = _ref.children;

  var _React$useState = react_default.a.useState(false),
      _React$useState2 = MobileContainer_slicedToArray(_React$useState, 2),
      sidebarOpened = _React$useState2[0],
      setSidebarOpened = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(false),
      _React$useState4 = MobileContainer_slicedToArray(_React$useState3, 2),
      aboutOpen = _React$useState4[0],
      setAboutOpen = _React$useState4[1];

  var _React$useState5 = react_default.a.useState(false),
      _React$useState6 = MobileContainer_slicedToArray(_React$useState5, 2),
      removeAllOpen = _React$useState6[0],
      setRemoveAllOpen = _React$useState6[1];

  var _React$useState7 = react_default.a.useState(false),
      _React$useState8 = MobileContainer_slicedToArray(_React$useState7, 2),
      removeCompletedOpen = _React$useState8[0],
      setRemoveCompletedOpen = _React$useState8[1];

  var _React$useState9 = react_default.a.useState(''),
      _React$useState10 = MobileContainer_slicedToArray(_React$useState9, 2),
      search = _React$useState10[0],
      setSearch = _React$useState10[1];

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var location = Object(react_router["f" /* useLocation */])();
  var dispatch = Object(es["b" /* useDispatch */])();

  var handleSidebarHide = function handleSidebarHide() {
    return setSidebarOpened(false);
  };

  var handleToggle = function handleToggle() {
    return setSidebarOpened(true);
  };

  function handleConfirmDeleteRemoveAll() {
    setRemoveAllOpen(false);
    dispatch(itemSlice_removeAllItems());
    handleSidebarHide();
  }

  function handleCancelDeleteRemoveAll() {
    setRemoveAllOpen(false);
    handleSidebarHide();
  }

  function handleConfirmDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
    dispatch(itemSlice_removeCompletedItems());
    handleSidebarHide();
  }

  function handleCancelDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
    handleSidebarHide();
  }

  return /*#__PURE__*/react_default.a.createElement(Responsive["a" /* default */], {
    as: Sidebar["a" /* default */].Pusher,
    getWidth: utils_Utils.getWidth,
    maxWidth: Responsive["a" /* default */].onlyMobile.maxWidth
  }, /*#__PURE__*/react_default.a.createElement(Sidebar["a" /* default */].Pushable, null, /*#__PURE__*/react_default.a.createElement(Sidebar["a" /* default */], {
    as: Menu["a" /* default */],
    animation: "overlay",
    icon: "labeled",
    inverted: true,
    vertical: true,
    visible: sidebarOpened,
    onHide: handleSidebarHide,
    color: "orange"
  }, /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    as: Button["a" /* default */],
    onClick: function onClick() {
      setRemoveCompletedOpen(true);
    }
  }, t('commom:menu.removeCompleted')), /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    as: Button["a" /* default */],
    onClick: function onClick() {
      setRemoveAllOpen(true);
    }
  }, t('commom:menu.removeAll'))), /*#__PURE__*/react_default.a.createElement(Sidebar["a" /* default */].Pusher, {
    dimmed: sidebarOpened,
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */], {
    fixed: "top",
    inverted: true,
    color: "orange"
  }, /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    onClick: handleToggle
  }, /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
    name: "sidebar"
  })), /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    as: react_router_dom["a" /* Link */],
    to: "/",
    active: location.pathname == '/',
    header: true
  }, /*#__PURE__*/react_default.a.createElement(Image["a" /* default */], {
    src: icon,
    style: {
      width: 20
    },
    className: "sl-mr--10"
  }), " ", t('commom:title')), /*#__PURE__*/react_default.a.createElement(Popup["a" /* default */], {
    hoverable: true,
    flowing: true,
    content: /*#__PURE__*/react_default.a.createElement(Input["a" /* default */], {
      action: true
    }, /*#__PURE__*/react_default.a.createElement(Input["a" /* default */], {
      icon: "search",
      iconPosition: "left",
      size: "mini",
      placeholder: t('commom:search'),
      value: search,
      autoFocus: true,
      onChange: function onChange(e) {
        setSearch(e.target.value);
        dispatch(itemSlice_filterItems(e.target.value));
      }
    }), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      type: "button",
      icon: "delete",
      onClick: function onClick() {
        setSearch('');
        dispatch(itemSlice_loadItems());
      }
    })),
    trigger: /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, null, /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
      name: "search"
    }))
  }), /*#__PURE__*/react_default.a.createElement(Menu["a" /* default */].Item, {
    position: "right"
  }, /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */], {
    basic: true,
    icon: null,
    direction: "left",
    trigger: /*#__PURE__*/react_default.a.createElement(components_SelectedFlag, null)
  }, /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */].Menu, null, /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */].Item, {
    flag: "br",
    onClick: function onClick() {
      i18n.changeLanguage('pt-BR');
    },
    content: /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
      size: "tiny",
      basic: true
    }, t('commom:lang.portuguese'))
  }), /*#__PURE__*/react_default.a.createElement(Dropdown["a" /* default */].Item, {
    flag: "us",
    onClick: function onClick() {
      i18n.changeLanguage('en');
    },
    content: /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
      size: "tiny",
      basic: true
    }, t('commom:lang.english'))
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "sl-pointer"
  }, /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
    name: "question circle",
    className: "sl-ml--20",
    onClick: function onClick() {
      return setAboutOpen(true);
    }
  })))), /*#__PURE__*/react_default.a.createElement(Container["a" /* default */], {
    className: "sl-mt--60"
  }, children))), /*#__PURE__*/react_default.a.createElement(components_AboutModal, {
    open: aboutOpen,
    setOpen: setAboutOpen
  }), /*#__PURE__*/react_default.a.createElement(Confirm["a" /* default */], {
    open: removeAllOpen,
    cancelButton: t('commom:remove.all.cancel'),
    confirmButton: t('commom:remove.all.remove'),
    header: t('commom:remove.all.title'),
    content: t('commom:remove.all.message'),
    dimmer: "blurring",
    size: "mini",
    onCancel: handleCancelDeleteRemoveAll,
    onConfirm: function onConfirm() {
      return handleConfirmDeleteRemoveAll();
    }
  }), /*#__PURE__*/react_default.a.createElement(Confirm["a" /* default */], {
    open: removeCompletedOpen,
    cancelButton: t('commom:remove.completed.cancel'),
    confirmButton: t('commom:remove.completed.remove'),
    header: t('commom:remove.completed.title'),
    content: t('commom:remove.completed.message'),
    dimmer: "blurring",
    size: "mini",
    onCancel: handleCancelDeleteRemoveCompleted,
    onConfirm: function onConfirm() {
      return handleConfirmDeleteRemoveCompleted();
    }
  }));
}

/* harmony default export */ var container_MobileContainer = (MobileContainer);
// CONCATENATED MODULE: ./components/Template.tsx




var Template_ResponsiveContainer = function ResponsiveContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(container_DesktopContainer, null, children), /*#__PURE__*/react_default.a.createElement(container_MobileContainer, null, children));
};
/**
 * Main app template
 */


var Template_Template = function Template(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react_default.a.createElement(Template_ResponsiveContainer, null, children);
};

/* harmony default export */ var components_Template = (Template_Template);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js + 2 modules
var Grid = __webpack_require__("zaq1");

// EXTERNAL MODULE: ../node_modules/react-speech-kit/dist/index.js
var dist = __webpack_require__("7WGF");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/List.js + 6 modules
var List = __webpack_require__("CG8X");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./pages/home/smartItem/AddItemModal.tsx
function AddItemModal_toConsumableArray(arr) { return AddItemModal_arrayWithoutHoles(arr) || AddItemModal_iterableToArray(arr) || AddItemModal_unsupportedIterableToArray(arr) || AddItemModal_nonIterableSpread(); }

function AddItemModal_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AddItemModal_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function AddItemModal_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return AddItemModal_arrayLikeToArray(arr); }

function AddItemModal_slicedToArray(arr, i) { return AddItemModal_arrayWithHoles(arr) || AddItemModal_iterableToArrayLimit(arr, i) || AddItemModal_unsupportedIterableToArray(arr, i) || AddItemModal_nonIterableRest(); }

function AddItemModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AddItemModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AddItemModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AddItemModal_arrayLikeToArray(o, minLen); }

function AddItemModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AddItemModal_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AddItemModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/**
 * Displays a modal to add new items with voice (speaking)
 *
 * @param {boolean} open indicates if the modal must be shown
 * @param {func} setOpen function turn the modal shown/hidden
 */
function AddItemModal(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen;
  var dispatch = Object(es["b" /* useDispatch */])();

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var _useState = Object(react["useState"])([]),
      _useState2 = AddItemModal_slicedToArray(_useState, 2),
      spokenItems = _useState2[0],
      setSpokenItems = _useState2[1];

  var _useState3 = Object(react["useState"])(''),
      _useState4 = AddItemModal_slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = Object(react["useState"])(false),
      _useState6 = AddItemModal_slicedToArray(_useState5, 2),
      blocked = _useState6[0],
      setBlocked = _useState6[1];

  var onEnd = function onEnd() {// You could do something here after listening has finished
  };
  /**
   * Runs when something is captured
   *
   * @param result content listened
   */


  var onResult = function onResult(result) {
    if (result) {
      setValue(result);
      setSpokenItems(function (oldItems) {
        return Array.from(new Set([].concat(AddItemModal_toConsumableArray(oldItems), [result])));
      });
    }
  };
  /**
   * Removes an item
   *
   * @param item item to be removed
   */


  var removeItem = function removeItem(item) {
    setSpokenItems(function (oldItems) {
      return Array.from(new Set(AddItemModal_toConsumableArray(oldItems.filter(function (i) {
        return i != item;
      }))));
    });
  };
  /**
   * Function to be executed when an error occurs
   *
   * @param event event with the error
   */


  var onError = function onError(event) {
    if (event.error === 'not-allowed') {
      setBlocked(true);
    }
  };
  /**
   * Function executed when adding items
   */


  var onAddItems = function onAddItems() {
    dispatch(itemSlice_addItems(spokenItems));
    onClose();
  };
  /**
   * Function executed when closing the modal
   */


  var onClose = function onClose() {
    setOpen(false);
    stop();
    setSpokenItems([]);
  };

  var _useSpeechRecognition = Object(dist["useSpeechRecognition"])({
    onResult: onResult,
    onEnd: onEnd,
    onError: onError
  }),
      listen = _useSpeechRecognition.listen,
      listening = _useSpeechRecognition.listening,
      stop = _useSpeechRecognition.stop,
      supported = _useSpeechRecognition.supported;

  var toggle = listening ? stop : function () {
    setBlocked(false);
    listen({
      interimResults: false,
      lang: i18n.language
    });
  };
  return /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */], {
    dimmer: "blurring",
    open: open,
    onClose: onClose,
    centered: true
  }, /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */].Header, null, t('item:popup.addTitle')), /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */].Content, null, !supported && /*#__PURE__*/react_default.a.createElement("h1", null, t('item:popup.unsupported')), supported && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, t('item:popup.listenMessage'), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    disabled: blocked,
    onClick: toggle,
    icon: classnames_default()('microphone', {
      slash: listening
    }),
    floated: "right",
    content: listening ? t('item:popup.stop') : t('item:popup.listen'),
    compact: true,
    primary: true,
    basic: true
  }), blocked && /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
    basic: true,
    color: "red",
    size: "large"
  }, t('item:popup.blockedMic'))), /*#__PURE__*/react_default.a.createElement(List["a" /* default */], {
    size: "huge"
  }, /*#__PURE__*/react_default.a.createElement("strong", null, t('item:popup.items')), spokenItems.length == 0 && /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Item, {
    className: "sl-pointer"
  }, /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Content, null, /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Description, null, t('item:popup.noItems')))), spokenItems.map(function (item, idx) {
    return /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Item, {
      key: idx,
      className: "sl-pointer",
      onClick: function onClick() {
        return removeItem(item);
      }
    }, /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Icon, {
      name: "trash alternate",
      color: "red",
      className: classnames_default()({
        'sl-pt--15': utils_Utils.isMobile()
      })
    }), /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Content, null, /*#__PURE__*/react_default.a.createElement(List["a" /* default */].Description, null, item)));
  })), /*#__PURE__*/react_default.a.createElement(Input["a" /* default */], {
    value: value,
    fluid: true,
    disabled: true,
    label: t('item:popup.lastWord')
  }))), /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */].Actions, null, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    onClick: onClose
  }, t('item:popup.cancel')), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    positive: true,
    icon: "checkmark",
    labelPosition: "right",
    content: t('item:popup.add'),
    onClick: onAddItems
  })));
}

/* harmony default export */ var smartItem_AddItemModal = (AddItemModal);
// CONCATENATED MODULE: ./pages/home/smartItem/AddItem.tsx
function AddItem_slicedToArray(arr, i) { return AddItem_arrayWithHoles(arr) || AddItem_iterableToArrayLimit(arr, i) || AddItem_unsupportedIterableToArray(arr, i) || AddItem_nonIterableRest(); }

function AddItem_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AddItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AddItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AddItem_arrayLikeToArray(o, minLen); }

function AddItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AddItem_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AddItem_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/**
 * Shows the area with commands to add new items
 */

function AddItem() {
  var dispatch = Object(es["b" /* useDispatch */])();

  var _useState = Object(react["useState"])(''),
      _useState2 = AddItem_slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = AddItem_slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react_default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      if (!text.trim()) {
        return;
      }

      dispatch(itemSlice_addItem(text));
      setText('');
    }
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */].Row, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */].Column, {
    width: "14"
  }, /*#__PURE__*/react_default.a.createElement(Input["a" /* default */], {
    value: text,
    fluid: true,
    placeholder: t('item:add.placeholder'),
    onChange: function onChange(e) {
      setText(e.target.value);
    },
    action: {
      primary: true,
      icon: 'plus',
      content: !utils_Utils.isMobile() ? t('item:add') : null
    },
    focus: true,
    autoFocus: true
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */].Column, {
    floated: "right",
    width: "2"
  }, /*#__PURE__*/react_default.a.createElement(Popup["a" /* default */], {
    content: t('item:add.voice'),
    trigger: /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      icon: "microphone",
      positive: true,
      floated: "right",
      onClick: function onClick() {
        return setOpen(true);
      }
    }),
    position: "right center"
  })))), /*#__PURE__*/react_default.a.createElement(smartItem_AddItemModal, {
    open: open,
    setOpen: setOpen
  }));
}

/* harmony default export */ var smartItem_AddItem = (AddItem);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/Table.js + 6 modules
var Table = __webpack_require__("LshI");

// CONCATENATED MODULE: ./pages/home/smartItem/visibilityFilterSlice.ts

var VisibilityFilter;

(function (VisibilityFilter) {
  VisibilityFilter["ShowAll"] = "SHOW_ALL";
  VisibilityFilter["ShowCompleted"] = "SHOW_COMPLETED";
  VisibilityFilter["ShowActive"] = "SHOW_ACTIVE";
})(VisibilityFilter || (VisibilityFilter = {}));

var visibilityFilterSlice_initialState = VisibilityFilter.ShowAll;
/**
 * Redux slice for the visibility filter
 */

var visibilityFilterSlice = Object(redux_toolkit_esm["b" /* createSlice */])({
  name: 'visibilityFilter',
  initialState: visibilityFilterSlice_initialState,
  reducers: {
    setVisibilityFilter: function setVisibilityFilter(state, action) {
      return action.payload;
    }
  }
});
var setVisibilityFilter = visibilityFilterSlice.actions.setVisibilityFilter;

/* harmony default export */ var smartItem_visibilityFilterSlice = (visibilityFilterSlice.reducer);
// CONCATENATED MODULE: ./components/FilterButton.tsx





/**
 * Button to filter the items
 *
 * @param {VisibilityFilter} visibilityFilter indicates the visibility filter to be applied
 * @param {string} text button text
 */
function FilterButton(_ref) {
  var visibilityFilter = _ref.visibilityFilter,
      text = _ref.text;
  var dispatch = Object(es["b" /* useDispatch */])();
  var currentFilter = Object(es["c" /* useSelector */])(function (state) {
    return state.visibilityFilter;
  });
  return /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    disabled: currentFilter == visibilityFilter,
    onClick: function onClick() {
      return dispatch(setVisibilityFilter(visibilityFilter));
    }
  }, text);
}

/* harmony default export */ var components_FilterButton = (FilterButton);
// CONCATENATED MODULE: ./pages/home/smartItem/SmartList.tsx
function SmartList_slicedToArray(arr, i) { return SmartList_arrayWithHoles(arr) || SmartList_iterableToArrayLimit(arr, i) || SmartList_unsupportedIterableToArray(arr, i) || SmartList_nonIterableRest(); }

function SmartList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SmartList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SmartList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SmartList_arrayLikeToArray(o, minLen); }

function SmartList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SmartList_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SmartList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/**
 * Renders the list of items
 *
 * @param {Item[]} items items of the list
 */
function SmartList(_ref) {
  var items = _ref.items;

  var _useState = Object(react["useState"])(false),
      _useState2 = SmartList_slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react["useState"])(),
      _useState4 = SmartList_slicedToArray(_useState3, 2),
      itemToBeDeleted = _useState4[0],
      setItemToBeDeleted = _useState4[1];

  var dispatch = Object(es["b" /* useDispatch */])();

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t;

  function handleConfirmDelete() {
    setOpen(false);

    if (itemToBeDeleted) {
      dispatch(itemSlice_removeItem(itemToBeDeleted));
    }
  }

  function handleCancelDelete() {
    setOpen(false);
    setItemToBeDeleted(undefined);
  }

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */], {
    striped: true,
    size: "large"
  }, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Body, {
    className: "sl-mobile-table"
  }, items.length == 0 && /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Row, null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Cell, {
    colSpan: "2",
    textAlign: "center"
  }, t('item:noItemsFound'))), items.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Row, {
      key: item.id,
      onClick: function onClick() {
        return dispatch(itemSlice_toggleItem(item));
      },
      className: "sl-pointer"
    }, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Cell, {
      collapsing: true,
      colSpan: "2",
      className: "sl-break-spaces"
    }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */].Row, null, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */].Column, {
      floated: "left",
      width: "14"
    }, !item.completed && /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
      name: "square outline",
      size: "large"
    }), item.completed && /*#__PURE__*/react_default.a.createElement(Icon["a" /* default */], {
      name: "check square outline",
      size: "large"
    }), /*#__PURE__*/react_default.a.createElement("span", {
      className: classnames_default()('sl-ml--15', {
        'sl-strikethrough': item.completed
      })
    }, item.text)), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */].Column, {
      floated: "right"
    }, /*#__PURE__*/react_default.a.createElement(Popup["a" /* default */], {
      content: t('item:remove'),
      trigger: /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
        compact: true,
        size: "medium",
        color: "red",
        floated: "right",
        icon: "remove circle",
        onClick: function onClick(e) {
          e.stopPropagation();
          setItemToBeDeleted(item);
          setOpen(true);
        }
      })
    }))))));
  })), /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Footer, null, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].Row, {
    className: "sl-pb--0 sl-pt--5"
  }, /*#__PURE__*/react_default.a.createElement(Table["a" /* default */].HeaderCell, {
    width: "10"
  }, /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
    basic: true,
    size: "large",
    color: "orange",
    pointing: "right"
  }, t('item:show')), utils_Utils.isMobile() && /*#__PURE__*/react_default.a.createElement(Button["a" /* default */].Group, {
    compact: true,
    size: "small",
    color: "blue",
    vertical: true
  }, /*#__PURE__*/react_default.a.createElement(components_FilterButton, {
    visibilityFilter: VisibilityFilter.ShowAll,
    text: t('item:show.all')
  }), /*#__PURE__*/react_default.a.createElement(components_FilterButton, {
    visibilityFilter: VisibilityFilter.ShowActive,
    text: t('item:show.active')
  }), /*#__PURE__*/react_default.a.createElement(components_FilterButton, {
    visibilityFilter: VisibilityFilter.ShowCompleted,
    text: t('item:show.completed')
  })), !utils_Utils.isMobile() && /*#__PURE__*/react_default.a.createElement(Button["a" /* default */].Group, {
    compact: true,
    size: "small",
    attached: "right",
    color: "blue"
  }, /*#__PURE__*/react_default.a.createElement(components_FilterButton, {
    visibilityFilter: VisibilityFilter.ShowAll,
    text: t('item:show.all')
  }), /*#__PURE__*/react_default.a.createElement(components_FilterButton, {
    visibilityFilter: VisibilityFilter.ShowActive,
    text: t('item:show.active')
  }), /*#__PURE__*/react_default.a.createElement(components_FilterButton, {
    visibilityFilter: VisibilityFilter.ShowCompleted,
    text: t('item:show.completed')
  })), /*#__PURE__*/react_default.a.createElement(Label["a" /* default */], {
    basic: true,
    size: "large",
    horizontal: true,
    className: "sl-pull-right"
  }, "".concat(t('item:total'), " ").concat(items.length)))))), /*#__PURE__*/react_default.a.createElement(Confirm["a" /* default */], {
    open: open,
    cancelButton: t('item:remove.cancel'),
    confirmButton: t('item:remove.remove'),
    header: t('item:remove.title'),
    content: t('item:remove.message'),
    dimmer: "blurring",
    size: "mini",
    onCancel: handleCancelDelete,
    onConfirm: function onConfirm() {
      return handleConfirmDelete();
    }
  }));
}

/* harmony default export */ var smartItem_SmartList = (SmartList);
// CONCATENATED MODULE: ./pages/home/Home.tsx







/**
 * App home page
 */

var Home_Home = function Home() {
  var dispatch = Object(es["b" /* useDispatch */])();
  Object(react["useEffect"])(function () {
    dispatch(itemSlice_loadItems());
  }, [dispatch]);

  var getVisibleItems = function getVisibleItems(items, filter) {
    var visibleItems = [];

    switch (filter) {
      case VisibilityFilter.ShowAll:
        visibleItems = items;
        break;

      case VisibilityFilter.ShowActive:
        visibleItems = items.filter(function (i) {
          return !i.completed;
        });
        break;

      case VisibilityFilter.ShowCompleted:
        visibleItems = items.filter(function (i) {
          return i.completed;
        });
        break;

      default:
        throw new Error('Unkown filter: ' + filter);
    }

    return visibleItems;
  };

  var items = Object(es["c" /* useSelector */])(function (state) {
    return getVisibleItems(state.items, state.visibilityFilter);
  });
  return /*#__PURE__*/react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(smartItem_AddItem, null), /*#__PURE__*/react_default.a.createElement(smartItem_SmartList, {
    items: items
  }));
};

/* harmony default export */ var home_Home = (Home_Home);
// EXTERNAL MODULE: ../node_modules/redux/es/redux.js
var redux = __webpack_require__("cnbf");

// CONCATENATED MODULE: ./redux/rootReducer.ts



var rootReducer = Object(redux["c" /* combineReducers */])({
  items: smartItem_itemSlice,
  visibilityFilter: smartItem_visibilityFilterSlice
});
/* harmony default export */ var redux_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./redux/store.ts


var store = Object(redux_toolkit_esm["a" /* configureStore */])({
  reducer: redux_rootReducer
});
/* harmony default export */ var redux_store = (store);
// CONCATENATED MODULE: ./components/App.tsx












var App_history = Object(esm_history["b" /* createHashHistory */])();
/**
 * Main app container
 */

var App_App = function App() {
  return /*#__PURE__*/react_default.a.createElement(es["a" /* Provider */], {
    store: redux_store
  }, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(Dimmer["a" /* default */], {
      active: true,
      inverted: true
    }, /*#__PURE__*/react_default.a.createElement(Loader["a" /* default */], null, "Loading..."))
  }, /*#__PURE__*/react_default.a.createElement(react_router["b" /* Router */], {
    history: App_history
  }, /*#__PURE__*/react_default.a.createElement(components_Template, null, /*#__PURE__*/react_default.a.createElement(react_router["c" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
    path: "/",
    exact: true,
    component: home_Home
  }))))));
};

/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./index.tsx





react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(components_App, null), document.getElementById('root'));

if (true) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('SW registered: ', registration);
      })["catch"](function (registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}

/***/ }),

/***/ "QyVf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["/hs+",1,0,4,2,6]]]);
//# sourceMappingURL=application.1fb5711a14046a7a82bf.js.map