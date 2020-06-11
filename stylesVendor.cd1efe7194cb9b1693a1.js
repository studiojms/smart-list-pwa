(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "+okU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props, getDefault) {
  var _Component$defaultPro = Component.defaultProps,
      defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro; // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultProps.as) return props.as; // ----------------------------------------
  // computed default element type

  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  } // ----------------------------------------
  // infer anchor links


  if (props.href) return 'a'; // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div';
}

/* harmony default export */ __webpack_exports__["a"] = (getElementType);

/***/ }),

/***/ "4Qtb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Popup_Popup; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("gki9");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ../node_modules/lodash/merge.js
var merge = __webpack_require__("HVn3");
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/lodash/isArray.js
var isArray = __webpack_require__("PqlX");
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);

// EXTERNAL MODULE: ../node_modules/lodash/pick.js
var pick = __webpack_require__("gTDC");
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ../node_modules/lodash/includes.js
var includes = __webpack_require__("8kd7");
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ../node_modules/lodash/reduce.js
var reduce = __webpack_require__("Ypgc");
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);

// EXTERNAL MODULE: ../node_modules/lodash/without.js
var without = __webpack_require__("nO+f");

// EXTERNAL MODULE: ../node_modules/@semantic-ui-react/event-stack/lib/index.js
var lib = __webpack_require__("qur2");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/react-popper/lib/esm/Popper.js + 2 modules
var Popper = __webpack_require__("U4Jk");

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("F56x");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/eventStack/index.js
var eventStack = __webpack_require__("xk7F");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var es_lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js + 1 modules
var Portal = __webpack_require__("at+x");

// EXTERNAL MODULE: ../node_modules/lodash/invert.js
var invert = __webpack_require__("SKM5");
var invert_default = /*#__PURE__*/__webpack_require__.n(invert);

// EXTERNAL MODULE: ../node_modules/lodash/keys.js
var keys = __webpack_require__("h0av");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Popup/lib/positions.js


var positionsMapping = {
  'top center': 'top',
  'top left': 'top-start',
  'top right': 'top-end',
  'bottom center': 'bottom',
  'bottom left': 'bottom-start',
  'bottom right': 'bottom-end',
  'right center': 'right',
  'left center': 'left'
};
var positions = keys_default()(positionsMapping);
var placementMapping = invert_default()(positionsMapping);
// EXTERNAL MODULE: ../node_modules/lodash/memoize.js
var memoize = __webpack_require__("Qn7i");
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/isRefObject.js
var isRefObject = __webpack_require__("2RgT");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/toRefObject.js
var toRefObject = __webpack_require__("mYN2");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Popup/lib/createReferenceProxy.js






var createReferenceProxy_ReferenceProxy =
/*#__PURE__*/
function () {
  function ReferenceProxy(refObject) {
    classCallCheck_default()(this, ReferenceProxy);

    this.ref = refObject;
  }

  createClass_default()(ReferenceProxy, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return invoke_default()(this.ref.current, 'getBoundingClientRect', {});
    }
  }, {
    key: "clientWidth",
    get: function get() {
      return this.getBoundingClientRect().width;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      return this.getBoundingClientRect().height;
    }
  }, {
    key: "parentNode",
    get: function get() {
      return this.ref.current ? this.ref.current.parentNode : undefined;
    }
  }]);

  return ReferenceProxy;
}();
/**
 * Popper.js does not support ref objects from `createRef()` as referenceElement. If we will pass
 * directly `ref`, `ref.current` will be `null` at the render process. We use memoize to keep the
 * same reference between renders.
 *
 * @see https://popper.js.org/popper-documentation.html#referenceObject
 */


var createReferenceProxy = memoize_default()(function (reference) {
  return new createReferenceProxy_ReferenceProxy(Object(isRefObject["a" /* default */])(reference) ? reference : Object(toRefObject["a" /* default */])(reference));
});

/* harmony default export */ var lib_createReferenceProxy = (createReferenceProxy);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Popup/PopupContent.js





/**
 * A PopupContent displays the content body of a Popover.
 */

function PopupContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()('content', className);
  var rest = Object(getUnhandledProps["a" /* default */])(PopupContent, props);
  var ElementType = Object(getElementType["a" /* default */])(PopupContent, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), es_lib["a" /* childrenUtils */].isNil(children) ? content : children);
}
PopupContent.handledProps = ["as", "children", "className", "content"];
PopupContent.propTypes =  false ? undefined : {};
PopupContent.create = Object(factories["c" /* createShorthandFactory */])(PopupContent, function (children) {
  return {
    children: children
  };
});
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Popup/PopupHeader.js





/**
 * A PopupHeader displays a header in a Popover.
 */

function PopupHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()('header', className);
  var rest = Object(getUnhandledProps["a" /* default */])(PopupHeader, props);
  var ElementType = Object(getElementType["a" /* default */])(PopupHeader, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), es_lib["a" /* childrenUtils */].isNil(children) ? content : children);
}
PopupHeader.handledProps = ["as", "children", "className", "content"];
PopupHeader.propTypes =  false ? undefined : {};
PopupHeader.create = Object(factories["c" /* createShorthandFactory */])(PopupHeader, function (children) {
  return {
    children: children
  };
});
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js































/**
 * A Popup displays additional information on top of a page.
 */
var Popup_Popup =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Popup, _Component);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "open", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "triggerRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "getPortalProps", function () {
      var portalProps = {};
      var _this$props = _this.props,
          on = _this$props.on,
          hoverable = _this$props.hoverable;
      var normalizedOn = isArray_default()(on) ? on : [on];

      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (includes_default()(normalizedOn, 'hover')) {
        portalProps.openOnTriggerClick = false;
        portalProps.closeOnTriggerClick = false;
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true; // Taken from SUI: https://git.io/vPmCm

        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      if (includes_default()(normalizedOn, 'click')) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }

      if (includes_default()(normalizedOn, 'focus')) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }

      return portalProps;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hideOnScroll", function (e) {
      _this.setState({
        closed: true
      });

      eventStack["a" /* default */].unsub('scroll', _this.hideOnScroll, {
        target: window
      });
      _this.timeoutId = setTimeout(function () {
        _this.setState({
          closed: false
        });
      }, 50);

      _this.handleClose(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClose", function (e) {
      invoke_default()(_this.props, 'onClose', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleOpen", function (e) {
      invoke_default()(_this.props, 'onOpen', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalMount", function (e) {
      invoke_default()(_this.props, 'onMount', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalUnmount", function (e) {
      _this.positionUpdate = null;

      invoke_default()(_this.props, 'onUnmount', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderContent", function (_ref) {
      var popperPlacement = _ref.placement,
          popperRef = _ref.ref,
          scheduleUpdate = _ref.scheduleUpdate,
          popperStyle = _ref.style;
      var _this$props2 = _this.props,
          basic = _this$props2.basic,
          children = _this$props2.children,
          className = _this$props2.className,
          content = _this$props2.content,
          hideOnScroll = _this$props2.hideOnScroll,
          flowing = _this$props2.flowing,
          header = _this$props2.header,
          inverted = _this$props2.inverted,
          size = _this$props2.size,
          style = _this$props2.style,
          wide = _this$props2.wide;
      var contentRestProps = _this.state.contentRestProps;
      _this.positionUpdate = scheduleUpdate;
      var classes = classnames_default()('ui', placementMapping[popperPlacement], size, Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(wide, 'wide'), Object(classNameBuilders["a" /* useKeyOnly */])(basic, 'basic'), Object(classNameBuilders["a" /* useKeyOnly */])(flowing, 'flowing'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), 'popup transition visible', className);
      var ElementType = Object(getElementType["a" /* default */])(Popup, _this.props);

      var styles = objectSpread_default()({
        // Heads up! We need default styles to get working correctly `flowing`
        left: 'auto',
        right: 'auto'
      }, popperStyle, style);

      return react_default.a.createElement(Ref["a" /* default */], {
        innerRef: popperRef
      }, react_default.a.createElement(ElementType, extends_default()({}, contentRestProps, {
        className: classes,
        style: styles
      }), es_lib["a" /* childrenUtils */].isNil(children) ? react_default.a.createElement(react_default.a.Fragment, null, PopupHeader.create(header, {
        autoGenerateKey: false
      }), PopupContent.create(content, {
        autoGenerateKey: false
      })) : children, hideOnScroll && react_default.a.createElement(lib_default.a, {
        on: _this.hideOnScroll,
        name: "scroll",
        target: "window"
      })));
    });

    return _this;
  }

  createClass_default()(Popup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var depsEqual = shallowequal_default()(this.props.popperDependencies, prevProps.popperDependencies);

      if (!depsEqual) {
        this.handleUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      if (this.positionUpdate) this.positionUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          context = _this$props3.context,
          disabled = _this$props3.disabled,
          eventsEnabled = _this$props3.eventsEnabled,
          offset = _this$props3.offset,
          pinned = _this$props3.pinned,
          popperModifiers = _this$props3.popperModifiers,
          position = _this$props3.position,
          positionFixed = _this$props3.positionFixed,
          trigger = _this$props3.trigger;
      var _this$state = this.state,
          closed = _this$state.closed,
          portalRestProps = _this$state.portalRestProps;
      if (closed || disabled) return trigger;

      var modifiers = merge_default()({
        arrow: {
          enabled: false
        },
        flip: {
          enabled: !pinned
        },
        // There are issues with `keepTogether` and `offset`
        // https://github.com/FezVrasta/popper.js/issues/557
        keepTogether: {
          enabled: !!offset
        },
        offset: {
          offset: offset
        }
      }, popperModifiers);

      var referenceElement = lib_createReferenceProxy(isNil_default()(context) ? this.triggerRef : context);

      var mergedPortalProps = objectSpread_default()({}, this.getPortalProps(), portalRestProps);

      return react_default.a.createElement(Portal["a" /* default */], extends_default()({}, mergedPortalProps, {
        onClose: this.handleClose,
        onMount: this.handlePortalMount,
        onOpen: this.handleOpen,
        onUnmount: this.handlePortalUnmount,
        trigger: trigger,
        triggerRef: this.triggerRef
      }), react_default.a.createElement(Popper["a" /* default */], {
        eventsEnabled: eventsEnabled,
        modifiers: modifiers,
        placement: positionsMapping[position],
        positionFixed: positionFixed,
        referenceElement: referenceElement
      }, this.renderContent));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.closed || state.disabled) return {};
      var unhandledProps = Object(getUnhandledProps["a" /* default */])(Popup, props);

      var contentRestProps = reduce_default()(unhandledProps, function (acc, val, key) {
        if (!includes_default()(Portal["a" /* default */].handledProps, key)) acc[key] = val;
        return acc;
      }, {});

      var portalRestProps = pick_default()(unhandledProps, Portal["a" /* default */].handledProps);

      return {
        contentRestProps: contentRestProps,
        portalRestProps: portalRestProps
      };
    }
  }]);

  return Popup;
}(react["Component"]);

defineProperty_default()(Popup_Popup, "defaultProps", {
  disabled: false,
  eventsEnabled: true,
  offset: 0,
  on: ['click', 'hover'],
  pinned: false,
  position: 'top left'
});

defineProperty_default()(Popup_Popup, "Content", PopupContent);

defineProperty_default()(Popup_Popup, "Header", PopupHeader);

defineProperty_default()(Popup_Popup, "handledProps", ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"]);


Popup_Popup.propTypes =  false ? undefined : {};

/***/ }),

/***/ "4UZT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/map.js
var map = __webpack_require__("w451");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/lodash/without.js
var without = __webpack_require__("nO+f");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/AutoControlledComponent.js
var AutoControlledComponent = __webpack_require__("CeSN");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Menu/MenuHeader.js





/**
 * A menu item may include a header or may itself be a header.
 */

function MenuHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()('header', className);
  var rest = Object(getUnhandledProps["a" /* default */])(MenuHeader, props);
  var ElementType = Object(getElementType["a" /* default */])(MenuHeader, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

MenuHeader.handledProps = ["as", "children", "className", "content"];
MenuHeader.propTypes =  false ? undefined : {};
/* harmony default export */ var Menu_MenuHeader = (MenuHeader);
// EXTERNAL MODULE: ../node_modules/lodash/startCase.js
var startCase = __webpack_require__("XgN0");
var startCase_default = /*#__PURE__*/__webpack_require__.n(startCase);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Menu/MenuItem.js















/**
 * A menu can contain an item.
 */

var MenuItem_MenuItem =
/*#__PURE__*/
function (_Component) {
  inherits_default()(MenuItem, _Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) invoke_default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  createClass_default()(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          disabled = _this$props.disabled,
          fitted = _this$props.fitted,
          header = _this$props.header,
          icon = _this$props.icon,
          link = _this$props.link,
          name = _this$props.name,
          onClick = _this$props.onClick,
          position = _this$props.position;
      var classes = classnames_default()(color, position, Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(icon === true || icon && !(name || content), 'icon'), Object(classNameBuilders["a" /* useKeyOnly */])(header, 'header'), Object(classNameBuilders["a" /* useKeyOnly */])(link, 'link'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(fitted, 'fitted'), 'item', className);
      var ElementType = Object(getElementType["a" /* default */])(MenuItem, this.props, function () {
        if (onClick) return 'a';
      });
      var rest = Object(getUnhandledProps["a" /* default */])(MenuItem, this.props);

      if (!lib["a" /* childrenUtils */].isNil(children)) {
        return react_default.a.createElement(ElementType, extends_default()({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      return react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), Icon["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), lib["a" /* childrenUtils */].isNil(content) ? startCase_default()(name) : content);
    }
  }]);

  return MenuItem;
}(react["Component"]);

defineProperty_default()(MenuItem_MenuItem, "handledProps", ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"]);


MenuItem_MenuItem.propTypes =  false ? undefined : {};
MenuItem_MenuItem.create = Object(factories["c" /* createShorthandFactory */])(MenuItem_MenuItem, function (val) {
  return {
    content: val,
    name: val
  };
});
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Menu/MenuMenu.js





/**
 * A menu can contain a sub menu.
 */

function MenuMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      position = props.position;
  var classes = classnames_default()(position, 'menu', className);
  var rest = Object(getUnhandledProps["a" /* default */])(MenuMenu, props);
  var ElementType = Object(getElementType["a" /* default */])(MenuMenu, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

MenuMenu.handledProps = ["as", "children", "className", "content", "position"];
MenuMenu.propTypes =  false ? undefined : {};
/* harmony default export */ var Menu_MenuMenu = (MenuMenu);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js


















/**
 * A menu displays grouped navigation actions.
 * @see Dropdown
 */

var Menu_Menu =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleItemOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          var index = itemProps.index;

          _this.trySetState({
            activeIndex: index
          });

          invoke_default()(predefinedProps, 'onClick', e, itemProps);

          invoke_default()(_this.props, 'onItemClick', e, itemProps);
        }
      };
    });

    return _this;
  }

  createClass_default()(Menu, [{
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var items = this.props.items;
      var activeIndex = this.state.activeIndex;
      return map_default()(items, function (item, index) {
        return MenuItem_MenuItem.create(item, {
          defaultProps: {
            active: parseInt(activeIndex, 10) === index,
            index: index
          },
          overrideProps: _this2.handleItemOverrides
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attached = _this$props.attached,
          borderless = _this$props.borderless,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          compact = _this$props.compact,
          fixed = _this$props.fixed,
          floated = _this$props.floated,
          fluid = _this$props.fluid,
          icon = _this$props.icon,
          inverted = _this$props.inverted,
          pagination = _this$props.pagination,
          pointing = _this$props.pointing,
          secondary = _this$props.secondary,
          size = _this$props.size,
          stackable = _this$props.stackable,
          tabular = _this$props.tabular,
          text = _this$props.text,
          vertical = _this$props.vertical,
          widths = _this$props.widths;
      var classes = classnames_default()('ui', color, size, Object(classNameBuilders["a" /* useKeyOnly */])(borderless, 'borderless'), Object(classNameBuilders["a" /* useKeyOnly */])(compact, 'compact'), Object(classNameBuilders["a" /* useKeyOnly */])(fluid, 'fluid'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(pagination, 'pagination'), Object(classNameBuilders["a" /* useKeyOnly */])(pointing, 'pointing'), Object(classNameBuilders["a" /* useKeyOnly */])(secondary, 'secondary'), Object(classNameBuilders["a" /* useKeyOnly */])(stackable, 'stackable'), Object(classNameBuilders["a" /* useKeyOnly */])(text, 'text'), Object(classNameBuilders["a" /* useKeyOnly */])(vertical, 'vertical'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(floated, 'floated'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(icon, 'icon'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(tabular, 'tabular'), Object(classNameBuilders["e" /* useValueAndKey */])(fixed, 'fixed'), Object(classNameBuilders["g" /* useWidthProp */])(widths, 'item'), className, 'menu');
      var rest = Object(getUnhandledProps["a" /* default */])(Menu, this.props);
      var ElementType = Object(getElementType["a" /* default */])(Menu, this.props);
      return react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes
      }), lib["a" /* childrenUtils */].isNil(children) ? this.renderItems() : children);
    }
  }]);

  return Menu;
}(AutoControlledComponent["a" /* default */]);

defineProperty_default()(Menu_Menu, "autoControlledProps", ['activeIndex']);

defineProperty_default()(Menu_Menu, "Header", Menu_MenuHeader);

defineProperty_default()(Menu_Menu, "Item", MenuItem_MenuItem);

defineProperty_default()(Menu_Menu, "Menu", Menu_MenuMenu);

defineProperty_default()(Menu_Menu, "handledProps", ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"]);

Menu_Menu.propTypes =  false ? undefined : {};
Menu_Menu.create = Object(factories["c" /* createShorthandFactory */])(Menu_Menu, function (items) {
  return {
    items: items
  };
});
/* harmony default export */ var collections_Menu_Menu = __webpack_exports__["a"] = (Menu_Menu);

/***/ }),

/***/ "5uv1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useKeyOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useValueAndKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useKeyOrValueAndKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useMultipleProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useTextAlignProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useVerticalAlignProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useWidthProp; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e+GP");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _numberToWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ngcr");


/*
 * There are 3 prop patterns used to build up the className for a component.
 * Each utility here is meant for use in a classnames() argument.
 *
 * There is no util for valueOnly() because it would simply return val.
 * Use the prop value inline instead.
 *   <Label size='big' />
 *   <div class="ui big label"></div>
 */

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */

var useKeyOnly = function useKeyOnly(val, key) {
  return val && key;
};
/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */

var useValueAndKey = function useValueAndKey(val, key) {
  return val && val !== true && "".concat(val, " ").concat(key);
};
/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */

var useKeyOrValueAndKey = function useKeyOrValueAndKey(val, key) {
  return val && (val === true ? key : "".concat(val, " ").concat(key));
}; //
// Prop to className exceptions
//

/**
 * The "multiple" prop implements control of visibility and reserved classes for Grid subcomponents.
 *
 * @param {*} val The value of the "multiple" prop
 * @param {*} key A props key
 *
 * @example
 * <Grid.Row only='mobile' />
 * <Grid.Row only='mobile tablet' />
 * <div class="mobile only row"></div>
 * <div class="mobile only tablet only row"></div>
 */

var useMultipleProp = function useMultipleProp(val, key) {
  if (!val || val === true) return null;
  return val.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (prop) {
    return "".concat(prop.replace('-', ' '), " ").concat(key);
  }).join(' ');
};
/**
 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "textAlign" prop
 *
 * @example
 * <Container textAlign='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container textAlign='left' />
 * <div class="ui left aligned container"></div>
 */

var useTextAlignProp = function useTextAlignProp(val) {
  return val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned');
};
/**
 * The "verticalAlign" prop follows the useValueAndKey.
 *
 * @param {*} val The value of the "verticalAlign" prop
 *
 * @example
 * <Grid verticalAlign='middle' />
 * <div class="ui middle aligned grid"></div>
 */

var useVerticalAlignProp = function useVerticalAlignProp(val) {
  return useValueAndKey(val, 'aligned');
};
/**
 * Create "X", "X wide" and "equal width" classNames.
 * "X" is a numberToWord value and "wide" is configurable.
 * @param {*} val The prop value
 * @param {string} [widthClass=''] The class
 * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
 *
 * @example
 * <Grid columns='equal' />
 * <div class="ui equal width grid"></div>
 *
 * <Form widths='equal' />
 * <div class="ui equal width form"></div>
 *
 * <FieldGroup widths='equal' />
 * <div class="equal width fields"></div>
 *
 * @example
 * <Grid columns={4} />
 * <div class="ui four column grid"></div>
 */

var useWidthProp = function useWidthProp(val) {
  var widthClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var canEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (canEqual && val === 'equal') {
    return 'equal width';
  }

  var valType = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val);

  if ((valType === 'string' || valType === 'number') && widthClass) {
    return "".concat(Object(_numberToWord__WEBPACK_IMPORTED_MODULE_1__[/* numberToWord */ "a"])(val), " ").concat(widthClass);
  }

  return Object(_numberToWord__WEBPACK_IMPORTED_MODULE_1__[/* numberToWord */ "a"])(val);
};

/***/ }),

/***/ "9Ep8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createShorthand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createShorthandFactory; });
/* unused harmony export createHTMLDivision */
/* unused harmony export createHTMLIframe */
/* unused harmony export createHTMLImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHTMLInput; });
/* unused harmony export createHTMLLabel */
/* unused harmony export createHTMLParagraph */
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gki9");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e+GP");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bAmA");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PqlX");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NfLg");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RqPZ");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XQLF");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4e1R");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("SqB6");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("MIf1");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











 // ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */

function createShorthand(Component, mapValueToProps, val) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if (lodash_isNil__WEBPACK_IMPORTED_MODULE_9___default()(val) || lodash_isBoolean__WEBPACK_IMPORTED_MODULE_8___default()(val)) return null;

  var valIsString = lodash_isString__WEBPACK_IMPORTED_MODULE_7___default()(val);

  var valIsNumber = lodash_isNumber__WEBPACK_IMPORTED_MODULE_6___default()(val);

  var valIsFunction = lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default()(val);

  var valIsReactElement = Object(react__WEBPACK_IMPORTED_MODULE_11__["isValidElement"])(val);

  var valIsPropsObject = lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_4___default()(val);

  var valIsPrimitiveValue = valIsString || valIsNumber || lodash_isArray__WEBPACK_IMPORTED_MODULE_3___default()(val); // unhandled type return null

  /* eslint-disable no-console */


  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (false) {}

    return null;
  }
  /* eslint-enable no-console */
  // ----------------------------------------
  // Build up props
  // ----------------------------------------


  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

  var _options$overrideProp = options.overrideProps,
      overrideProps = _options$overrideProp === void 0 ? {} : _options$overrideProp;
  overrideProps = lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default()(overrideProps) ? overrideProps(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultProps, usersProps, overrideProps); // Merge className


  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = classnames__WEBPACK_IMPORTED_MODULE_10___default()(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default()(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if (lodash_isNil__WEBPACK_IMPORTED_MODULE_9___default()(props.key)) {
    var childKey = props.childKey;
    var _options$autoGenerate = options.autoGenerateKey,
        autoGenerateKey = _options$autoGenerate === void 0 ? true : _options$autoGenerate;

    if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_9___default()(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  } // ----------------------------------------
  // Create Element
  // ----------------------------------------
  // Clone ReactElements


  if (valIsReactElement) return Object(react__WEBPACK_IMPORTED_MODULE_11__["cloneElement"])(val, props); // Create ReactElements from built up props

  if (valIsPrimitiveValue || valIsPropsObject) return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, props); // Call functions with args similar to createElement()

  if (valIsFunction) return val(Component, props, props.children);
  /* eslint-enable react/prop-types */
} // ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */

createShorthand.handledProps = [];
function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================

var createHTMLDivision = createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
var createHTMLIframe = createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
var createHTMLImage = createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
var createHTMLInput = createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
var createHTMLLabel = createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
var createHTMLParagraph = createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});

/***/ }),

/***/ "9Xwr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8VmE");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5uv1");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QtO6");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+okU");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("PeM6");





/**
 * A container limits content to a maximum width.
 */

function Container(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      text = props.text,
      textAlign = props.textAlign;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ui', Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(text, 'text'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(fluid, 'fluid'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useTextAlignProp */ "d"])(textAlign), 'container', className);
  var rest = Object(_lib__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Container, props);
  var ElementType = Object(_lib__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Container, props);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ElementType, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_7__[/* childrenUtils */ "a"].isNil(children) ? content : children);
}

Container.handledProps = ["as", "children", "className", "content", "fluid", "text", "textAlign"];
Container.propTypes =  false ? undefined : {};
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "CG8X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/map.js
var map = __webpack_require__("w451");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/ListDescription.js





/**
 * A list item can contain a description.
 */

function ListDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()(className, 'description');
  var rest = Object(getUnhandledProps["a" /* default */])(ListDescription, props);
  var ElementType = Object(getElementType["a" /* default */])(ListDescription, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ListDescription.handledProps = ["as", "children", "className", "content"];
ListDescription.propTypes =  false ? undefined : {};
ListDescription.create = Object(factories["c" /* createShorthandFactory */])(ListDescription, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var List_ListDescription = (ListDescription);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/ListHeader.js





/**
 * A list item can contain a header.
 */

function ListHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()('header', className);
  var rest = Object(getUnhandledProps["a" /* default */])(ListHeader, props);
  var ElementType = Object(getElementType["a" /* default */])(ListHeader, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ListHeader.handledProps = ["as", "children", "className", "content"];
ListHeader.propTypes =  false ? undefined : {};
ListHeader.create = Object(factories["c" /* createShorthandFactory */])(ListHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var List_ListHeader = (ListHeader);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/ListContent.js







/**
 * A list item can contain a content.
 */

function ListContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      floated = props.floated,
      header = props.header,
      verticalAlign = props.verticalAlign;
  var classes = classnames_default()(Object(classNameBuilders["e" /* useValueAndKey */])(floated, 'floated'), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), 'content', className);
  var rest = Object(getUnhandledProps["a" /* default */])(ListContent, props);
  var ElementType = Object(getElementType["a" /* default */])(ListContent, props);

  if (!lib["a" /* childrenUtils */].isNil(children)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), children);
  }

  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), List_ListHeader.create(header), List_ListDescription.create(description), content);
}

ListContent.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
ListContent.propTypes =  false ? undefined : {};
ListContent.create = Object(factories["c" /* createShorthandFactory */])(ListContent, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var List_ListContent = (ListContent);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/ListIcon.js






/**
 * A list item can contain an icon.
 */

function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;
  var classes = classnames_default()(Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), className);
  var rest = Object(getUnhandledProps["a" /* default */])(ListIcon, props);
  return react_default.a.createElement(Icon["a" /* default */], extends_default()({}, rest, {
    className: classes
  }));
}

ListIcon.handledProps = ["className", "verticalAlign"];
ListIcon.propTypes =  false ? undefined : {};
ListIcon.create = Object(factories["c" /* createShorthandFactory */])(ListIcon, function (name) {
  return {
    name: name
  };
});
/* harmony default export */ var List_ListIcon = (ListIcon);
// EXTERNAL MODULE: ../node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__("NfLg");
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js + 1 modules
var Image = __webpack_require__("cFof");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/ListItem.js



















/**
 * A list item can contain a set of items.
 */

var ListItem_ListItem =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ListItem, _Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) invoke_default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  createClass_default()(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          description = _this$props.description,
          disabled = _this$props.disabled,
          header = _this$props.header,
          icon = _this$props.icon,
          image = _this$props.image,
          value = _this$props.value;
      var ElementType = Object(getElementType["a" /* default */])(ListItem, this.props);
      var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(ElementType !== 'li', 'item'), className);
      var rest = Object(getUnhandledProps["a" /* default */])(ListItem, this.props);
      var valueProp = ElementType === 'li' ? {
        value: value
      } : {
        'data-value': value
      };

      if (!lib["a" /* childrenUtils */].isNil(children)) {
        return react_default.a.createElement(ElementType, extends_default()({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), children);
      }

      var iconElement = List_ListIcon.create(icon, {
        autoGenerateKey: false
      });
      var imageElement = Image["a" /* default */].create(image, {
        autoGenerateKey: false
      }); // See description of `content` prop for explanation about why this is necessary.

      if (!Object(react["isValidElement"])(content) && isPlainObject_default()(content)) {
        return react_default.a.createElement(ElementType, extends_default()({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, List_ListContent.create(content, {
          autoGenerateKey: false,
          defaultProps: {
            header: header,
            description: description
          }
        }));
      }

      var headerElement = List_ListHeader.create(header, {
        autoGenerateKey: false
      });
      var descriptionElement = List_ListDescription.create(description, {
        autoGenerateKey: false
      });

      if (iconElement || imageElement) {
        return react_default.a.createElement(ElementType, extends_default()({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && react_default.a.createElement(List_ListContent, null, headerElement, descriptionElement, content));
      }

      return react_default.a.createElement(ElementType, extends_default()({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), headerElement, descriptionElement, content);
    }
  }]);

  return ListItem;
}(react["Component"]);

defineProperty_default()(ListItem_ListItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"]);

ListItem_ListItem.propTypes =  false ? undefined : {};
ListItem_ListItem.create = Object(factories["c" /* createShorthandFactory */])(ListItem_ListItem, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var List_ListItem = (ListItem_ListItem);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/ListList.js





/**
 * A list can contain a sub list.
 */

function ListList(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var rest = Object(getUnhandledProps["a" /* default */])(ListList, props);
  var ElementType = Object(getElementType["a" /* default */])(ListList, props);
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ListList.handledProps = ["as", "children", "className", "content"];
ListList.propTypes =  false ? undefined : {};
/* harmony default export */ var List_ListList = (ListList);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/List/List.js




















/**
 * A list groups related content.
 */

var List_List =
/*#__PURE__*/
function (_Component) {
  inherits_default()(List, _Component);

  function List() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleItemOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          invoke_default()(predefinedProps, 'onClick', e, itemProps);

          invoke_default()(_this.props, 'onItemClick', e, itemProps);
        }
      };
    });

    return _this;
  }

  createClass_default()(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          animated = _this$props.animated,
          bulleted = _this$props.bulleted,
          celled = _this$props.celled,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          divided = _this$props.divided,
          floated = _this$props.floated,
          horizontal = _this$props.horizontal,
          inverted = _this$props.inverted,
          items = _this$props.items,
          link = _this$props.link,
          ordered = _this$props.ordered,
          relaxed = _this$props.relaxed,
          selection = _this$props.selection,
          size = _this$props.size,
          verticalAlign = _this$props.verticalAlign;
      var classes = classnames_default()('ui', size, Object(classNameBuilders["a" /* useKeyOnly */])(animated, 'animated'), Object(classNameBuilders["a" /* useKeyOnly */])(bulleted, 'bulleted'), Object(classNameBuilders["a" /* useKeyOnly */])(celled, 'celled'), Object(classNameBuilders["a" /* useKeyOnly */])(divided, 'divided'), Object(classNameBuilders["a" /* useKeyOnly */])(horizontal, 'horizontal'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(link, 'link'), Object(classNameBuilders["a" /* useKeyOnly */])(ordered, 'ordered'), Object(classNameBuilders["a" /* useKeyOnly */])(selection, 'selection'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(relaxed, 'relaxed'), Object(classNameBuilders["e" /* useValueAndKey */])(floated, 'floated'), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), 'list', className);
      var rest = Object(getUnhandledProps["a" /* default */])(List, this.props);
      var ElementType = Object(getElementType["a" /* default */])(List, this.props);

      if (!lib["a" /* childrenUtils */].isNil(children)) {
        return react_default.a.createElement(ElementType, extends_default()({
          role: "list",
          className: classes
        }, rest), children);
      }

      if (!lib["a" /* childrenUtils */].isNil(content)) {
        return react_default.a.createElement(ElementType, extends_default()({
          role: "list",
          className: classes
        }, rest), content);
      }

      return react_default.a.createElement(ElementType, extends_default()({
        role: "list",
        className: classes
      }, rest), map_default()(items, function (item) {
        return List_ListItem.create(item, {
          overrideProps: _this2.handleItemOverrides
        });
      }));
    }
  }]);

  return List;
}(react["Component"]);

defineProperty_default()(List_List, "Content", List_ListContent);

defineProperty_default()(List_List, "Description", List_ListDescription);

defineProperty_default()(List_List, "Header", List_ListHeader);

defineProperty_default()(List_List, "Icon", List_ListIcon);

defineProperty_default()(List_List, "Item", List_ListItem);

defineProperty_default()(List_List, "List", List_ListList);

defineProperty_default()(List_List, "handledProps", ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"]);

List_List.propTypes =  false ? undefined : {};
/* harmony default export */ var elements_List_List = __webpack_exports__["a"] = (List_List);

/***/ }),

/***/ "CeSN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDefaultPropName */
/* unused harmony export getAutoControlledStateValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoControlledComponent; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gki9");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SDJZ");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NToG");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K4DB");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+IV6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("T1e2");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eef+");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hzBh");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_startsWith__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xM7k");
/* harmony import */ var lodash_startsWith__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_startsWith__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eeCi");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFs1");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("h0av");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("tbV4");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("gY5s");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Jn5y");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("HKDT");
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_invoke__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);


















var getDefaultPropName = function getDefaultPropName(prop) {
  return "default".concat(prop[0].toUpperCase() + prop.slice(1));
};
/**
 * Return the auto controlled state value for a give prop. The initial value is chosen in this order:
 *  - regular props
 *  - then, default props
 *  - then, initial state
 *  - then, `checked` defaults to false
 *  - then, `value` defaults to '' or [] if props.multiple
 *  - else, undefined
 *
 *  @param {string} propName A prop name
 *  @param {object} [props] A props object
 *  @param {object} [state] A state object
 *  @param {boolean} [includeDefaults=false] Whether or not to heed the default props or initial state
 */

var getAutoControlledStateValue = function getAutoControlledStateValue(propName, props, state) {
  var includeDefaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // regular props
  var propValue = props[propName];
  if (propValue !== undefined) return propValue;

  if (includeDefaults) {
    // defaultProps
    var defaultProp = props[getDefaultPropName(propName)];
    if (defaultProp !== undefined) return defaultProp; // initial state - state may be null or undefined

    if (state) {
      var initialState = state[propName];
      if (initialState !== undefined) return initialState;
    }
  } // React doesn't allow changing from uncontrolled to controlled components,
  // default checked/value if they were not present.


  if (propName === 'checked') return false;
  if (propName === 'value') return props.multiple ? [] : ''; // otherwise, undefined
};

var AutoControlledComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AutoControlledComponent, _Component);

  function AutoControlledComponent() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AutoControlledComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(AutoControlledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "trySetState", function (state, callback) {
      var newState = Object.keys(state).reduce(function (acc, prop) {
        // ignore props defined by the parent
        if (_this.props[prop] !== undefined) return acc;
        acc[prop] = state[prop];
        return acc;
      }, {});
      if (Object.keys(newState).length > 0) _this.setState(newState, callback);
    });

    var autoControlledProps = _this.constructor.autoControlledProps;

    var _state = lodash_invoke__WEBPACK_IMPORTED_MODULE_16___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), 'getInitialAutoControlledState', _this.props) || {};

    if (false) { var illegalAutoControlled, illegalDefaults, _this$constructor, defaultProps, name, propTypes; } // Auto controlled props are copied to state.
    // Set initial state by copying auto controlled props to state.
    // Also look for the default prop for any auto controlled props (foo => defaultFoo)
    // so we can set initial values from defaults.


    var initialAutoControlledState = autoControlledProps.reduce(function (acc, prop) {
      acc[prop] = getAutoControlledStateValue(prop, _this.props, _state, true);

      if (false) { var _name, defaultPropName; }

      return acc;
    }, {});
    _this.state = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _state, initialAutoControlledState);
    return _this;
  } // eslint-disable-next-line camelcase


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AutoControlledComponent, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var autoControlledProps = this.constructor.autoControlledProps; // Solve the next state for autoControlledProps

      var newState = autoControlledProps.reduce(function (acc, prop) {
        var isNextDefined = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8___default()(nextProps[prop]); // if next is defined then use its value

        if (isNextDefined) acc[prop] = nextProps[prop];
        return acc;
      }, {});
      if (Object.keys(newState).length > 0) this.setState(newState);
    }
    /**
     * Safely attempt to set state for props that might be controlled by the user.
     * Second argument is a state object that is always passed to setState.
     * @param {object} state State that corresponds to controlled props.
     * @param {function} [callback] Callback which is called after setState applied.
     */

  }]);

  return AutoControlledComponent;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]);



/***/ }),

/***/ "D0lo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export htmlInputAttrs */
/* unused harmony export htmlInputEvents */
/* unused harmony export htmlInputProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlImageProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return partitionHTMLProps; });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8kd7");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kxJY");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_1__);


var htmlInputAttrs = [// REACT
'selected', 'defaultValue', 'defaultChecked', // LIMITED HTML PROPS
'accept', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'lang', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'title', 'type', 'value'];
var htmlInputEvents = [// EVENTS
// keyboard
'onKeyDown', 'onKeyPress', 'onKeyUp', // focus
'onFocus', 'onBlur', // form
'onChange', 'onInput', // mouse
'onClick', 'onContextMenu', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', // selection
'onSelect', // touch
'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];
var htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);
var htmlImageProps = ['alt', 'height', 'src', 'srcSet', 'width'];
/**
 * Returns an array of objects consisting of: props of html input element and rest.
 * @param {object} props A ReactElement props object
 * @param {Object} [options={}]
 * @param {Array} [options.htmlProps] An array of html input props
 * @param {boolean} [options.includeAria] Includes all input props that starts with "aria-"
 * @returns {[{}, {}]} An array of objects
 */

var partitionHTMLProps = function partitionHTMLProps(props) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$htmlProps = options.htmlProps,
      htmlProps = _options$htmlProps === void 0 ? htmlInputProps : _options$htmlProps,
      _options$includeAria = options.includeAria,
      includeAria = _options$includeAria === void 0 ? true : _options$includeAria;
  var inputProps = {};
  var rest = {};

  lodash_forEach__WEBPACK_IMPORTED_MODULE_1___default()(props, function (val, prop) {
    var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === 'role');
    var target = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });

  return [inputProps, rest];
};

/***/ }),

/***/ "IDWW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8VmE");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nxTg");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gki9");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SDJZ");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NToG");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("K4DB");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+IV6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T1e2");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("eef+");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8kd7");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("w451");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("HKDT");
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_invoke__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("edSL");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("MIf1");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _stardust_ui_react_component_ref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Xj0t");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("QtO6");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("D0lo");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("5uv1");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("+okU");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("PeM6");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("9Ep8");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("eaJJ");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("IQeJ");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("NttU");























/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "inputRef", Object(react__WEBPACK_IMPORTED_MODULE_18__["createRef"])());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "computeIcon", function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;
      if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_14___default()(icon)) return icon;
      if (loading) return 'spinner';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "computeTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_14___default()(tabIndex)) return tabIndex;
      if (disabled) return -1;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "focus", function () {
      return _this.inputRef.current.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "select", function () {
      return _this.inputRef.current.select();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "handleChange", function (e) {
      var value = lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(e, 'target.value');

      lodash_invoke__WEBPACK_IMPORTED_MODULE_12___default()(_this.props, 'onChange', e, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.props, {
        value: value
      }));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "handleChildOverrides", function (child, defaultProps) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultProps, child.props, {
        ref: function ref(c) {
          Object(_stardust_ui_react_component_ref__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(child.ref, c);
          _this.inputRef.current = c;
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "partitionProps", function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;

      var tabIndex = _this.computeTabIndex();

      var unhandled = Object(_lib__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])(Input, _this.props);

      var _partitionHTMLProps = Object(_lib__WEBPACK_IMPORTED_MODULE_20__[/* partitionHTMLProps */ "b"])(unhandled),
          _partitionHTMLProps2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.inputRef
      }), rest];
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          actionPosition = _this$props4.actionPosition,
          children = _this$props4.children,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fluid = _this$props4.fluid,
          focus = _this$props4.focus,
          icon = _this$props4.icon,
          iconPosition = _this$props4.iconPosition,
          input = _this$props4.input,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          size = _this$props4.size,
          transparent = _this$props4.transparent,
          type = _this$props4.type;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_16___default()('ui', size, Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(disabled, 'disabled'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(error, 'error'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(fluid, 'fluid'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(focus, 'focus'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(inverted, 'inverted'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(loading, 'loading'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(transparent, 'transparent'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useValueAndKey */ "e"])(actionPosition, 'action') || Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(action, 'action'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useValueAndKey */ "e"])(iconPosition, 'icon') || Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(icon || loading, 'icon'), Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useValueAndKey */ "e"])(labelPosition, 'labeled') || Object(_lib__WEBPACK_IMPORTED_MODULE_21__[/* useKeyOnly */ "a"])(label, 'labeled'), 'input', className);
      var ElementType = Object(_lib__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"])(Input, this.props);

      var _this$partitionProps = this.partitionProps(),
          _this$partitionProps2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$partitionProps, 2),
          htmlInputProps = _this$partitionProps2[0],
          rest = _this$partitionProps2[1]; // Render with children
      // ----------------------------------------


      if (!_lib__WEBPACK_IMPORTED_MODULE_23__[/* childrenUtils */ "a"].isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = lodash_map__WEBPACK_IMPORTED_MODULE_11___default()(react__WEBPACK_IMPORTED_MODULE_18__["Children"].toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return Object(react__WEBPACK_IMPORTED_MODULE_18__["cloneElement"])(child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(ElementType, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
          className: classes
        }), childElements);
      } // Render Shorthand
      // ----------------------------------------


      var actionElement = _Button__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"].create(action, {
        autoGenerateKey: false
      });
      var labelElement = _Label__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"].create(label, {
        defaultProps: {
          className: classnames__WEBPACK_IMPORTED_MODULE_16___default()('label', // add 'left|right corner'
          lodash_includes__WEBPACK_IMPORTED_MODULE_10___default()(labelPosition, 'corner') && labelPosition)
        },
        autoGenerateKey: false
      });
      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(ElementType, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
        className: classes
      }), actionPosition === 'left' && actionElement, labelPosition !== 'right' && labelElement, Object(_lib__WEBPACK_IMPORTED_MODULE_24__[/* createHTMLInput */ "a"])(input || type, {
        defaultProps: htmlInputProps,
        autoGenerateKey: false
      }), _Icon__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].create(this.computeIcon(), {
        autoGenerateKey: false
      }), actionPosition !== 'left' && actionElement, labelPosition === 'right' && labelElement);
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(Input, "defaultProps", {
  type: 'text'
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(Input, "handledProps", ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"]);

Input.propTypes =  false ? undefined : {};
Input.create = Object(_lib__WEBPACK_IMPORTED_MODULE_24__[/* createShorthandFactory */ "c"])(Input, function (type) {
  return {
    type: type
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "IQeJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ../node_modules/lodash/without.js
var without = __webpack_require__("nO+f");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js






/**
 * Several icons can be used together as a group.
 */

function IconGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = classnames_default()(size, 'icons', className);
  var rest = Object(getUnhandledProps["a" /* default */])(IconGroup, props);
  var ElementType = Object(getElementType["a" /* default */])(IconGroup, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

IconGroup.handledProps = ["as", "children", "className", "content", "size"];
IconGroup.propTypes =  false ? undefined : {};
IconGroup.defaultProps = {
  as: 'i'
};
/* harmony default export */ var Icon_IconGroup = (IconGroup);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
















/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon_Icon =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Icon, _PureComponent);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      invoke_default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  createClass_default()(Icon, [{
    key: "getIconAriaOptions",
    value: function getIconAriaOptions() {
      var ariaOptions = {};
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaHidden = _this$props['aria-hidden'];

      if (isNil_default()(ariaLabel)) {
        ariaOptions['aria-hidden'] = 'true';
      } else {
        ariaOptions['aria-label'] = ariaLabel;
      }

      if (!isNil_default()(ariaHidden)) {
        ariaOptions['aria-hidden'] = ariaHidden;
      }

      return ariaOptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          bordered = _this$props2.bordered,
          circular = _this$props2.circular,
          className = _this$props2.className,
          color = _this$props2.color,
          corner = _this$props2.corner,
          disabled = _this$props2.disabled,
          fitted = _this$props2.fitted,
          flipped = _this$props2.flipped,
          inverted = _this$props2.inverted,
          link = _this$props2.link,
          loading = _this$props2.loading,
          name = _this$props2.name,
          rotated = _this$props2.rotated,
          size = _this$props2.size;
      var classes = classnames_default()(color, name, size, Object(classNameBuilders["a" /* useKeyOnly */])(bordered, 'bordered'), Object(classNameBuilders["a" /* useKeyOnly */])(circular, 'circular'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(fitted, 'fitted'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(link, 'link'), Object(classNameBuilders["a" /* useKeyOnly */])(loading, 'loading'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(corner, 'corner'), Object(classNameBuilders["e" /* useValueAndKey */])(flipped, 'flipped'), Object(classNameBuilders["e" /* useValueAndKey */])(rotated, 'rotated'), 'icon', className);
      var rest = Object(getUnhandledProps["a" /* default */])(Icon, this.props);
      var ElementType = Object(getElementType["a" /* default */])(Icon, this.props);
      var ariaOptions = this.getIconAriaOptions();
      return react_default.a.createElement(ElementType, extends_default()({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }));
    }
  }]);

  return Icon;
}(react["PureComponent"]);

defineProperty_default()(Icon_Icon, "defaultProps", {
  as: 'i'
});

defineProperty_default()(Icon_Icon, "Group", Icon_IconGroup);

defineProperty_default()(Icon_Icon, "handledProps", ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"]);

Icon_Icon.propTypes =  false ? undefined : {};
Icon_Icon.create = Object(factories["c" /* createShorthandFactory */])(Icon_Icon, function (value) {
  return {
    name: value
  };
});
/* harmony default export */ var elements_Icon_Icon = __webpack_exports__["a"] = (Icon_Icon);

/***/ }),

/***/ "JcLd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e+GP");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MIf1");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);


var hasDocument = (typeof document === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(document)) === 'object' && document !== null;
var hasWindow = (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) === 'object' && window !== null && window.self === window; // eslint-disable-next-line no-confusing-arrow

var isBrowser = function isBrowser() {
  return !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
};

/* harmony default export */ __webpack_exports__["a"] = (isBrowser);

/***/ }),

/***/ "LshI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/lodash/without.js
var without = __webpack_require__("nO+f");

// EXTERNAL MODULE: ../node_modules/lodash/map.js
var map = __webpack_require__("w451");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/TableBody.js






function TableBody(props) {
  var children = props.children,
      className = props.className;
  var classes = classnames_default()(className);
  var rest = Object(getUnhandledProps["a" /* default */])(TableBody, props);
  var ElementType = Object(getElementType["a" /* default */])(TableBody, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), children);
}

TableBody.handledProps = ["as", "children", "className"];
TableBody.defaultProps = {
  as: 'tbody'
};
TableBody.propTypes =  false ? undefined : {};
/* harmony default export */ var Table_TableBody = (TableBody);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/TableCell.js







/**
 * A table row can have cells.
 */

function TableCell(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      content = props.content,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      negative = props.negative,
      positive = props.positive,
      selectable = props.selectable,
      singleLine = props.singleLine,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning,
      width = props.width;
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(collapsing, 'collapsing'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(error, 'error'), Object(classNameBuilders["a" /* useKeyOnly */])(negative, 'negative'), Object(classNameBuilders["a" /* useKeyOnly */])(positive, 'positive'), Object(classNameBuilders["a" /* useKeyOnly */])(selectable, 'selectable'), Object(classNameBuilders["a" /* useKeyOnly */])(singleLine, 'single line'), Object(classNameBuilders["a" /* useKeyOnly */])(warning, 'warning'), Object(classNameBuilders["d" /* useTextAlignProp */])(textAlign), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), Object(classNameBuilders["g" /* useWidthProp */])(width, 'wide'), className);
  var rest = Object(getUnhandledProps["a" /* default */])(TableCell, props);
  var ElementType = Object(getElementType["a" /* default */])(TableCell, props);

  if (!lib["a" /* childrenUtils */].isNil(children)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), children);
  }

  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), Icon["a" /* default */].create(icon), content);
}

TableCell.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
TableCell.defaultProps = {
  as: 'td'
};
TableCell.propTypes =  false ? undefined : {};
TableCell.create = Object(factories["c" /* createShorthandFactory */])(TableCell, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var Table_TableCell = (TableCell);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/TableHeader.js





/**
 * A table can have a header.
 */

function TableHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fullWidth = props.fullWidth;
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(fullWidth, 'full-width'), className);
  var rest = Object(getUnhandledProps["a" /* default */])(TableHeader, props);
  var ElementType = Object(getElementType["a" /* default */])(TableHeader, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

TableHeader.handledProps = ["as", "children", "className", "content", "fullWidth"];
TableHeader.defaultProps = {
  as: 'thead'
};
TableHeader.propTypes =  false ? undefined : {};
/* harmony default export */ var Table_TableHeader = (TableHeader);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js





/**
 * A table can have a footer.
 */

function TableFooter(props) {
  var as = props.as;
  var rest = Object(getUnhandledProps["a" /* default */])(TableFooter, props);
  return react_default.a.createElement(Table_TableHeader, extends_default()({}, rest, {
    as: as
  }));
}

TableFooter.handledProps = ["as"];
TableFooter.propTypes =  false ? undefined : {};
TableFooter.defaultProps = {
  as: 'tfoot'
};
/* harmony default export */ var Table_TableFooter = (TableFooter);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/TableHeaderCell.js






/**
 * A table can have a header cell.
 */

function TableHeaderCell(props) {
  var as = props.as,
      className = props.className,
      sorted = props.sorted;
  var classes = classnames_default()(Object(classNameBuilders["e" /* useValueAndKey */])(sorted, 'sorted'), className);
  var rest = Object(getUnhandledProps["a" /* default */])(TableHeaderCell, props);
  return react_default.a.createElement(Table_TableCell, extends_default()({}, rest, {
    as: as,
    className: classes
  }));
}

TableHeaderCell.handledProps = ["as", "className", "sorted"];
TableHeaderCell.propTypes =  false ? undefined : {};
TableHeaderCell.defaultProps = {
  as: 'th'
};
/* harmony default export */ var Table_TableHeaderCell = (TableHeaderCell);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/TableRow.js








/**
 * A table can have rows.
 */

function TableRow(props) {
  var active = props.active,
      cellAs = props.cellAs,
      cells = props.cells,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      negative = props.negative,
      positive = props.positive,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning;
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(error, 'error'), Object(classNameBuilders["a" /* useKeyOnly */])(negative, 'negative'), Object(classNameBuilders["a" /* useKeyOnly */])(positive, 'positive'), Object(classNameBuilders["a" /* useKeyOnly */])(warning, 'warning'), Object(classNameBuilders["d" /* useTextAlignProp */])(textAlign), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), className);
  var rest = Object(getUnhandledProps["a" /* default */])(TableRow, props);
  var ElementType = Object(getElementType["a" /* default */])(TableRow, props);

  if (!lib["a" /* childrenUtils */].isNil(children)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), children);
  }

  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), map_default()(cells, function (cell) {
    return Table_TableCell.create(cell, {
      defaultProps: {
        as: cellAs
      }
    });
  }));
}

TableRow.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
TableRow.defaultProps = {
  as: 'tr',
  cellAs: 'td'
};
TableRow.propTypes =  false ? undefined : {};
TableRow.create = Object(factories["c" /* createShorthandFactory */])(TableRow, function (cells) {
  return {
    cells: cells
  };
});
/* harmony default export */ var Table_TableRow = (TableRow);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Table/Table.js













/**
 * A table displays a collections of data grouped into rows.
 */

function Table(props) {
  var attached = props.attached,
      basic = props.basic,
      celled = props.celled,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      color = props.color,
      columns = props.columns,
      compact = props.compact,
      definition = props.definition,
      fixed = props.fixed,
      footerRow = props.footerRow,
      headerRow = props.headerRow,
      headerRows = props.headerRows,
      inverted = props.inverted,
      padded = props.padded,
      renderBodyRow = props.renderBodyRow,
      selectable = props.selectable,
      singleLine = props.singleLine,
      size = props.size,
      sortable = props.sortable,
      stackable = props.stackable,
      striped = props.striped,
      structured = props.structured,
      tableData = props.tableData,
      textAlign = props.textAlign,
      unstackable = props.unstackable,
      verticalAlign = props.verticalAlign;
  var classes = classnames_default()('ui', color, size, Object(classNameBuilders["a" /* useKeyOnly */])(celled, 'celled'), Object(classNameBuilders["a" /* useKeyOnly */])(collapsing, 'collapsing'), Object(classNameBuilders["a" /* useKeyOnly */])(definition, 'definition'), Object(classNameBuilders["a" /* useKeyOnly */])(fixed, 'fixed'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(selectable, 'selectable'), Object(classNameBuilders["a" /* useKeyOnly */])(singleLine, 'single line'), Object(classNameBuilders["a" /* useKeyOnly */])(sortable, 'sortable'), Object(classNameBuilders["a" /* useKeyOnly */])(stackable, 'stackable'), Object(classNameBuilders["a" /* useKeyOnly */])(striped, 'striped'), Object(classNameBuilders["a" /* useKeyOnly */])(structured, 'structured'), Object(classNameBuilders["a" /* useKeyOnly */])(unstackable, 'unstackable'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(basic, 'basic'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(compact, 'compact'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(padded, 'padded'), Object(classNameBuilders["d" /* useTextAlignProp */])(textAlign), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), Object(classNameBuilders["g" /* useWidthProp */])(columns, 'column'), 'table', className);
  var rest = Object(getUnhandledProps["a" /* default */])(Table, props);
  var ElementType = Object(getElementType["a" /* default */])(Table, props);

  if (!lib["a" /* childrenUtils */].isNil(children)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), children);
  }

  var hasHeaderRows = headerRow || headerRows;
  var headerShorthandOptions = {
    defaultProps: {
      cellAs: 'th'
    }
  };
  var headerElement = hasHeaderRows && react_default.a.createElement(Table_TableHeader, null, Table_TableRow.create(headerRow, headerShorthandOptions), map_default()(headerRows, function (data) {
    return Table_TableRow.create(data, headerShorthandOptions);
  }));
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), headerElement, react_default.a.createElement(Table_TableBody, null, renderBodyRow && map_default()(tableData, function (data, index) {
    return Table_TableRow.create(renderBodyRow(data, index));
  })), footerRow && react_default.a.createElement(Table_TableFooter, null, Table_TableRow.create(footerRow)));
}

Table.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Table.defaultProps = {
  as: 'table'
};
Table.propTypes =  false ? undefined : {};
Table.Body = Table_TableBody;
Table.Cell = Table_TableCell;
Table.Footer = Table_TableFooter;
Table.Header = Table_TableHeader;
Table.HeaderCell = Table_TableHeaderCell;
Table.Row = Table_TableRow;
/* harmony default export */ var Table_Table = __webpack_exports__["a"] = (Table);

/***/ }),

/***/ "Ngcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export numberToWordMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numberToWord; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e+GP");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen'
  /**
   * Return the number word for numbers 1-16.
   * Returns strings or numbers as is if there is no corresponding word.
   * Returns an empty string if value is not a string or number.
   * @param {string|number} value The value to convert to a word.
   * @returns {string}
   */

};
function numberToWord(value) {
  var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value);

  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
}

/***/ }),

/***/ "Nijj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("140S");
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_inRange__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y1ZU");
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HKDT");
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_invoke__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MIf1");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Sct/");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Determines if a click's coordinates are within the bounds of a node.
 *
 * @see https://github.com/Semantic-Org/Semantic-UI-React/pull/2384
 *
 * @param {object} node - A DOM node.
 * @param {object} e - A SyntheticEvent or DOM Event.
 * @returns {boolean}
 */
var doesNodeContainClick = function doesNodeContainClick(node, e) {
  if (lodash_some__WEBPACK_IMPORTED_MODULE_4___default()([e, node], lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default.a)) return false; // if there is an e.target and it is in the document, use a simple node.contains() check

  if (e.target) {
    lodash_invoke__WEBPACK_IMPORTED_MODULE_2___default()(e.target, 'setAttribute', 'data-suir-click-target', true);

    if (document.querySelector('[data-suir-click-target=true]')) {
      lodash_invoke__WEBPACK_IMPORTED_MODULE_2___default()(e.target, 'removeAttribute', 'data-suir-click-target');

      return node.contains(e.target);
    }
  } // Below logic handles cases where the e.target is no longer in the document.
  // The result of the click likely has removed the e.target node.
  // Instead of node.contains(), we'll identify the click by X/Y position.
  // return early if the event properties aren't available
  // prevent measuring the node and repainting if we don't need to


  var clientX = e.clientX,
      clientY = e.clientY;
  if (lodash_some__WEBPACK_IMPORTED_MODULE_4___default()([clientX, clientY], lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default.a)) return false; // false if the node is not visible

  var clientRects = node.getClientRects(); // Heads Up!
  // getClientRects returns a DOMRectList, not an array nor a plain object
  // We explicitly avoid _.isEmpty and check .length to cover all possible shapes

  if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length) return false; // false if the node doesn't have a valid bounding rect

  var _first2 = lodash_first__WEBPACK_IMPORTED_MODULE_1___default()(clientRects),
      top = _first2.top,
      bottom = _first2.bottom,
      left = _first2.left,
      right = _first2.right;

  if (lodash_some__WEBPACK_IMPORTED_MODULE_4___default()([top, bottom, left, right], lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default.a)) return false; // we add a small decimal to the upper bound just to make it inclusive
  // don't add an whole pixel (1) as the event/node values may be decimal sensitive

  return lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default()(clientY, top, bottom + 0.001) && lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default()(clientX, left, right + 0.001);
};

/* harmony default export */ __webpack_exports__["a"] = (doesNodeContainClick);

/***/ }),

/***/ "NttU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Label_Label; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/isUndefined.js
var isUndefined = __webpack_require__("hzBh");
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js + 1 modules
var Image = __webpack_require__("cFof");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js






function LabelDetail(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()('detail', className);
  var rest = Object(getUnhandledProps["a" /* default */])(LabelDetail, props);
  var ElementType = Object(getElementType["a" /* default */])(LabelDetail, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

LabelDetail.handledProps = ["as", "children", "className", "content"];
LabelDetail.propTypes =  false ? undefined : {};
LabelDetail.create = Object(factories["c" /* createShorthandFactory */])(LabelDetail, function (val) {
  return {
    content: val
  };
});
/* harmony default export */ var Label_LabelDetail = (LabelDetail);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js





/**
 * A label can be grouped.
 */

function LabelGroup(props) {
  var children = props.children,
      circular = props.circular,
      className = props.className,
      color = props.color,
      content = props.content,
      size = props.size,
      tag = props.tag;
  var classes = classnames_default()('ui', color, size, Object(classNameBuilders["a" /* useKeyOnly */])(circular, 'circular'), Object(classNameBuilders["a" /* useKeyOnly */])(tag, 'tag'), 'labels', className);
  var rest = Object(getUnhandledProps["a" /* default */])(LabelGroup, props);
  var ElementType = Object(getElementType["a" /* default */])(LabelGroup, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
LabelGroup.propTypes =  false ? undefined : {};
/* harmony default export */ var Label_LabelGroup = (LabelGroup);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/Label.js


















/**
 * A label displays content classification.
 */

var Label_Label =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Label, _Component);

  function Label() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Label);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Label)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleIconOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          invoke_default()(predefinedProps, 'onClick', e);

          invoke_default()(_this.props, 'onRemove', e, _this.props);
        }
      };
    });

    return _this;
  }

  createClass_default()(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          attached = _this$props.attached,
          basic = _this$props.basic,
          children = _this$props.children,
          circular = _this$props.circular,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          corner = _this$props.corner,
          detail = _this$props.detail,
          empty = _this$props.empty,
          floating = _this$props.floating,
          horizontal = _this$props.horizontal,
          icon = _this$props.icon,
          image = _this$props.image,
          onRemove = _this$props.onRemove,
          pointing = _this$props.pointing,
          prompt = _this$props.prompt,
          removeIcon = _this$props.removeIcon,
          ribbon = _this$props.ribbon,
          size = _this$props.size,
          tag = _this$props.tag;
      var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && "".concat(pointing, " pointing") || (pointing === 'above' || pointing === 'below') && "pointing ".concat(pointing);
      var classes = classnames_default()('ui', color, pointingClass, size, Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(basic, 'basic'), Object(classNameBuilders["a" /* useKeyOnly */])(circular, 'circular'), Object(classNameBuilders["a" /* useKeyOnly */])(empty, 'empty'), Object(classNameBuilders["a" /* useKeyOnly */])(floating, 'floating'), Object(classNameBuilders["a" /* useKeyOnly */])(horizontal, 'horizontal'), Object(classNameBuilders["a" /* useKeyOnly */])(image === true, 'image'), Object(classNameBuilders["a" /* useKeyOnly */])(prompt, 'prompt'), Object(classNameBuilders["a" /* useKeyOnly */])(tag, 'tag'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(corner, 'corner'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(ribbon, 'ribbon'), Object(classNameBuilders["e" /* useValueAndKey */])(attached, 'attached'), 'label', className);
      var rest = Object(getUnhandledProps["a" /* default */])(Label, this.props);
      var ElementType = Object(getElementType["a" /* default */])(Label, this.props);

      if (!lib["a" /* childrenUtils */].isNil(children)) {
        return react_default.a.createElement(ElementType, extends_default()({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var removeIconShorthand = isUndefined_default()(removeIcon) ? 'delete' : removeIcon;
      return react_default.a.createElement(ElementType, extends_default()({
        className: classes,
        onClick: this.handleClick
      }, rest), Icon["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), typeof image !== 'boolean' && Image["a" /* default */].create(image, {
        autoGenerateKey: false
      }), content, Label_LabelDetail.create(detail, {
        autoGenerateKey: false
      }), onRemove && Icon["a" /* default */].create(removeIconShorthand, {
        autoGenerateKey: false,
        overrideProps: this.handleIconOverrides
      }));
    }
  }]);

  return Label;
}(react["Component"]);

defineProperty_default()(Label_Label, "Detail", Label_LabelDetail);

defineProperty_default()(Label_Label, "Group", Label_LabelGroup);

defineProperty_default()(Label_Label, "handledProps", ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"]);


Label_Label.propTypes =  false ? undefined : {};
Label_Label.create = Object(factories["c" /* createShorthandFactory */])(Label_Label, function (value) {
  return {
    content: value
  };
});

/***/ }),

/***/ "PeM6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ childrenUtils_namespaceObject; });

// UNUSED EXPORTS: AutoControlledComponent, ModernAutoControlledComponent, getChildMapping, mergeChildMappings, useKeyOnly, useKeyOrValueAndKey, useValueAndKey, useMultipleProp, useTextAlignProp, useVerticalAlignProp, useWidthProp, customPropTypes, eventStack, createShorthand, createShorthandFactory, createHTMLDivision, createHTMLIframe, createHTMLImage, createHTMLInput, createHTMLLabel, createHTMLParagraph, getUnhandledProps, getElementType, htmlInputAttrs, htmlInputEvents, htmlInputProps, htmlImageProps, partitionHTMLProps, isBrowser, doesNodeContainClick, leven, createPaginationItems, SUI, numberToWordMap, numberToWord, normalizeOffset, normalizeTransitionDuration, objectDiff

// NAMESPACE OBJECT: ../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
var childrenUtils_namespaceObject = {};
__webpack_require__.r(childrenUtils_namespaceObject);
__webpack_require__.d(childrenUtils_namespaceObject, "someByType", function() { return childrenUtils_someByType; });
__webpack_require__.d(childrenUtils_namespaceObject, "findByType", function() { return childrenUtils_findByType; });
__webpack_require__.d(childrenUtils_namespaceObject, "isNil", function() { return isNil; });

// EXTERNAL MODULE: ../node_modules/lodash/find.js
var find = __webpack_require__("Dfzq");
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ../node_modules/lodash/some.js
var some = __webpack_require__("Sct/");
var some_default = /*#__PURE__*/__webpack_require__.n(some);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js



/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */

var childrenUtils_someByType = function someByType(children, type) {
  return some_default()(react["Children"].toArray(children), {
    type: type
  });
};
/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */

var childrenUtils_findByType = function findByType(children, type) {
  return find_default()(react["Children"].toArray(children), {
    type: type
  });
};
/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */

var isNil = function isNil(children) {
  return children === null || children === undefined || Array.isArray(children) && children.length === 0;
};
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js


































 // Heads up! We import/export for this module to safely remove it with "babel-plugin-filter-imports"

/***/ }),

/***/ "QmEL":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "QtO6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
var getUnhandledProps = function getUnhandledProps(Component, props) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  var _Component$handledPro = Component.handledProps,
      handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
  return Object.keys(props).reduce(function (acc, prop) {
    if (prop === 'childKey') return acc;
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};

/* harmony default export */ __webpack_exports__["a"] = (getUnhandledProps);

/***/ }),

/***/ "SKbx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Normalizes the offset value.
 * @param {number|array} value The value to normalize.
 * @returns {number}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return typeof value === 'number' || typeof value === 'string' ? [value, value] : value;
});

/***/ }),

/***/ "Svs1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8VmE");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SDJZ");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NToG");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K4DB");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+IV6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("T1e2");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eef+");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("gY5s");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("HKDT");
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_invoke__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("QtO6");
/* harmony import */ var _elements_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("eaJJ");
/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("nXp5");















/**
 * A Confirm modal gives the user a choice to confirm or cancel an action/
 * @see Modal
 */

var Confirm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Confirm, _Component);

  function Confirm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Confirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Confirm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleCancel", function (e) {
      lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default()(_this.props, 'onCancel', e, _this.props);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleCancelOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default()(predefinedProps, 'onClick', e, buttonProps);

          _this.handleCancel(e);
        }
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleConfirmOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default()(predefinedProps, 'onClick', e, buttonProps);

          lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default()(_this.props, 'onConfirm', e, _this.props);
        }
      };
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Confirm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cancelButton = _this$props.cancelButton,
          confirmButton = _this$props.confirmButton,
          content = _this$props.content,
          header = _this$props.header,
          open = _this$props.open,
          size = _this$props.size;
      var rest = Object(_lib__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Confirm, this.props); // `open` is auto controlled by the Modal
      // It cannot be present (even undefined) with `defaultOpen`
      // only apply it if the user provided an open prop

      var openProp = {};
      if (lodash_has__WEBPACK_IMPORTED_MODULE_8___default()(this.props, 'open')) openProp.open = open;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_modules_Modal__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, openProp, {
        size: size,
        onClose: this.handleCancel
      }), _modules_Modal__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Header.create(header, {
        autoGenerateKey: false
      }), _modules_Modal__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Content.create(content, {
        autoGenerateKey: false
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_modules_Modal__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Actions, null, _elements_Button__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].create(cancelButton, {
        autoGenerateKey: false,
        overrideProps: this.handleCancelOverrides
      }), _elements_Button__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].create(confirmButton, {
        autoGenerateKey: false,
        defaultProps: {
          primary: true
        },
        overrideProps: this.handleConfirmOverrides
      })));
    }
  }]);

  return Confirm;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Confirm, "defaultProps", {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
  size: 'small'
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Confirm, "handledProps", ["cancelButton", "confirmButton", "content", "header", "onCancel", "onConfirm", "open", "size"]);

Confirm.propTypes =  false ? undefined : {};
/* harmony default export */ __webpack_exports__["a"] = (Confirm);

/***/ }),

/***/ "UbxP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export names */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8VmE");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SDJZ");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NToG");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K4DB");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+IV6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eef+");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("QtO6");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("+okU");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9Ep8");











var names = ['ad', 'andorra', 'ae', 'united arab emirates', 'uae', 'af', 'afghanistan', 'ag', 'antigua', 'ai', 'anguilla', 'al', 'albania', 'am', 'armenia', 'an', 'netherlands antilles', 'ao', 'angola', 'ar', 'argentina', 'as', 'american samoa', 'at', 'austria', 'au', 'australia', 'aw', 'aruba', 'ax', 'aland islands', 'az', 'azerbaijan', 'ba', 'bosnia', 'bb', 'barbados', 'bd', 'bangladesh', 'be', 'belgium', 'bf', 'burkina faso', 'bg', 'bulgaria', 'bh', 'bahrain', 'bi', 'burundi', 'bj', 'benin', 'bm', 'bermuda', 'bn', 'brunei', 'bo', 'bolivia', 'br', 'brazil', 'bs', 'bahamas', 'bt', 'bhutan', 'bv', 'bouvet island', 'bw', 'botswana', 'by', 'belarus', 'bz', 'belize', 'ca', 'canada', 'cc', 'cocos islands', 'cd', 'congo', 'cf', 'central african republic', 'cg', 'congo brazzaville', 'ch', 'switzerland', 'ci', 'cote divoire', 'ck', 'cook islands', 'cl', 'chile', 'cm', 'cameroon', 'cn', 'china', 'co', 'colombia', 'cr', 'costa rica', 'cs', 'cu', 'cuba', 'cv', 'cape verde', 'cx', 'christmas island', 'cy', 'cyprus', 'cz', 'czech republic', 'de', 'germany', 'dj', 'djibouti', 'dk', 'denmark', 'dm', 'dominica', 'do', 'dominican republic', 'dz', 'algeria', 'ec', 'ecuador', 'ee', 'estonia', 'eg', 'egypt', 'eh', 'western sahara', 'er', 'eritrea', 'es', 'spain', 'et', 'ethiopia', 'eu', 'european union', 'fi', 'finland', 'fj', 'fiji', 'fk', 'falkland islands', 'fm', 'micronesia', 'fo', 'faroe islands', 'fr', 'france', 'ga', 'gabon', 'gb', 'uk', 'united kingdom', 'gd', 'grenada', 'ge', 'georgia', 'gf', 'french guiana', 'gh', 'ghana', 'gi', 'gibraltar', 'gl', 'greenland', 'gm', 'gambia', 'gn', 'guinea', 'gp', 'guadeloupe', 'gq', 'equatorial guinea', 'gr', 'greece', 'gs', 'sandwich islands', 'gt', 'guatemala', 'gu', 'guam', 'gw', 'guinea-bissau', 'gy', 'guyana', 'hk', 'hong kong', 'hm', 'heard island', 'hn', 'honduras', 'hr', 'croatia', 'ht', 'haiti', 'hu', 'hungary', 'id', 'indonesia', 'ie', 'ireland', 'il', 'israel', 'in', 'india', 'io', 'indian ocean territory', 'iq', 'iraq', 'ir', 'iran', 'is', 'iceland', 'it', 'italy', 'jm', 'jamaica', 'jo', 'jordan', 'jp', 'japan', 'ke', 'kenya', 'kg', 'kyrgyzstan', 'kh', 'cambodia', 'ki', 'kiribati', 'km', 'comoros', 'kn', 'saint kitts and nevis', 'kp', 'north korea', 'kr', 'south korea', 'kw', 'kuwait', 'ky', 'cayman islands', 'kz', 'kazakhstan', 'la', 'laos', 'lb', 'lebanon', 'lc', 'saint lucia', 'li', 'liechtenstein', 'lk', 'sri lanka', 'lr', 'liberia', 'ls', 'lesotho', 'lt', 'lithuania', 'lu', 'luxembourg', 'lv', 'latvia', 'ly', 'libya', 'ma', 'morocco', 'mc', 'monaco', 'md', 'moldova', 'me', 'montenegro', 'mg', 'madagascar', 'mh', 'marshall islands', 'mk', 'macedonia', 'ml', 'mali', 'mm', 'myanmar', 'burma', 'mn', 'mongolia', 'mo', 'macau', 'mp', 'northern mariana islands', 'mq', 'martinique', 'mr', 'mauritania', 'ms', 'montserrat', 'mt', 'malta', 'mu', 'mauritius', 'mv', 'maldives', 'mw', 'malawi', 'mx', 'mexico', 'my', 'malaysia', 'mz', 'mozambique', 'na', 'namibia', 'nc', 'new caledonia', 'ne', 'niger', 'nf', 'norfolk island', 'ng', 'nigeria', 'ni', 'nicaragua', 'nl', 'netherlands', 'no', 'norway', 'np', 'nepal', 'nr', 'nauru', 'nu', 'niue', 'nz', 'new zealand', 'om', 'oman', 'pa', 'panama', 'pe', 'peru', 'pf', 'french polynesia', 'pg', 'new guinea', 'ph', 'philippines', 'pk', 'pakistan', 'pl', 'poland', 'pm', 'saint pierre', 'pn', 'pitcairn islands', 'pr', 'puerto rico', 'ps', 'palestine', 'pt', 'portugal', 'pw', 'palau', 'py', 'paraguay', 'qa', 'qatar', 're', 'reunion', 'ro', 'romania', 'rs', 'serbia', 'ru', 'russia', 'rw', 'rwanda', 'sa', 'saudi arabia', 'sb', 'solomon islands', 'sc', 'seychelles', 'gb sct', 'scotland', 'sd', 'sudan', 'se', 'sweden', 'sg', 'singapore', 'sh', 'saint helena', 'si', 'slovenia', 'sj', 'svalbard', 'jan mayen', 'sk', 'slovakia', 'sl', 'sierra leone', 'sm', 'san marino', 'sn', 'senegal', 'so', 'somalia', 'sr', 'suriname', 'st', 'sao tome', 'sv', 'el salvador', 'sy', 'syria', 'sz', 'swaziland', 'tc', 'caicos islands', 'td', 'chad', 'tf', 'french territories', 'tg', 'togo', 'th', 'thailand', 'tj', 'tajikistan', 'tk', 'tokelau', 'tl', 'timorleste', 'tm', 'turkmenistan', 'tn', 'tunisia', 'to', 'tonga', 'tr', 'turkey', 'tt', 'trinidad', 'tv', 'tuvalu', 'tw', 'taiwan', 'tz', 'tanzania', 'ua', 'ukraine', 'ug', 'uganda', 'um', 'us minor islands', 'us', 'america', 'united states', 'uy', 'uruguay', 'uz', 'uzbekistan', 'va', 'vatican city', 'vc', 'saint vincent', 've', 'venezuela', 'vg', 'british virgin islands', 'vi', 'us virgin islands', 'vn', 'vietnam', 'vu', 'vanuatu', 'gb wls', 'wales', 'wf', 'wallis and futuna', 'ws', 'samoa', 'ye', 'yemen', 'yt', 'mayotte', 'za', 'south africa', 'zm', 'zambia', 'zw', 'zimbabwe'];
/**
 * A flag is is used to represent a political state.
 */

var Flag =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Flag, _PureComponent);

  function Flag() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Flag);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Flag).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Flag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(name, 'flag', className);
      var rest = Object(_lib__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Flag, this.props);
      var ElementType = Object(_lib__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Flag, this.props);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ElementType, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
        className: classes
      }));
    }
  }]);

  return Flag;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Flag, "defaultProps", {
  as: 'i'
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Flag, "handledProps", ["as", "className", "name"]);

Flag.propTypes =  false ? undefined : {};
Flag.create = Object(_lib__WEBPACK_IMPORTED_MODULE_12__[/* createShorthandFactory */ "c"])(Flag, function (value) {
  return {
    name: value
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Flag);

/***/ }),

/***/ "Z606":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Dropdown_Dropdown; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("gki9");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__("kxHp");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/compact.js
var lodash_compact = __webpack_require__("QFYQ");
var compact_default = /*#__PURE__*/__webpack_require__.n(lodash_compact);

// EXTERNAL MODULE: ../node_modules/lodash/map.js
var map = __webpack_require__("w451");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ../node_modules/lodash/every.js
var every = __webpack_require__("t51I");
var every_default = /*#__PURE__*/__webpack_require__.n(every);

// EXTERNAL MODULE: ../node_modules/lodash/without.js
var without = __webpack_require__("nO+f");
var without_default = /*#__PURE__*/__webpack_require__.n(without);

// EXTERNAL MODULE: ../node_modules/lodash/findIndex.js
var findIndex = __webpack_require__("ixHX");
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);

// EXTERNAL MODULE: ../node_modules/lodash/find.js
var find = __webpack_require__("Dfzq");
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ../node_modules/lodash/reduce.js
var reduce = __webpack_require__("Ypgc");
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);

// EXTERNAL MODULE: ../node_modules/lodash/some.js
var some = __webpack_require__("Sct/");
var some_default = /*#__PURE__*/__webpack_require__.n(some);

// EXTERNAL MODULE: ../node_modules/lodash/escapeRegExp.js
var escapeRegExp = __webpack_require__("rlYK");
var escapeRegExp_default = /*#__PURE__*/__webpack_require__.n(escapeRegExp);

// EXTERNAL MODULE: ../node_modules/lodash/deburr.js
var lodash_deburr = __webpack_require__("m3cY");
var deburr_default = /*#__PURE__*/__webpack_require__.n(lodash_deburr);

// EXTERNAL MODULE: ../node_modules/lodash/isFunction.js
var isFunction = __webpack_require__("RqPZ");
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);

// EXTERNAL MODULE: ../node_modules/lodash/filter.js
var filter = __webpack_require__("eeCi");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: ../node_modules/lodash/pick.js
var pick = __webpack_require__("gTDC");
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ../node_modules/lodash/dropRight.js
var dropRight = __webpack_require__("AXPn");
var dropRight_default = /*#__PURE__*/__webpack_require__.n(dropRight);

// EXTERNAL MODULE: ../node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__("YFs1");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ../node_modules/lodash/size.js
var size = __webpack_require__("MYi7");
var size_default = /*#__PURE__*/__webpack_require__.n(size);

// EXTERNAL MODULE: ../node_modules/lodash/difference.js
var difference = __webpack_require__("c+bQ");
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);

// EXTERNAL MODULE: ../node_modules/lodash/union.js
var union = __webpack_require__("5YGv");
var union_default = /*#__PURE__*/__webpack_require__.n(union);

// EXTERNAL MODULE: ../node_modules/lodash/get.js
var lodash_get = __webpack_require__("edSL");
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// EXTERNAL MODULE: ../node_modules/lodash/includes.js
var includes = __webpack_require__("8kd7");
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ../node_modules/lodash/noop.js
var noop = __webpack_require__("7IP4");
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);

// EXTERNAL MODULE: ../node_modules/lodash/isUndefined.js
var isUndefined = __webpack_require__("hzBh");
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/lodash/isEqual.js
var isEqual = __webpack_require__("/gfI");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// EXTERNAL MODULE: ../node_modules/lodash/has.js
var has = __webpack_require__("gY5s");

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ../node_modules/@semantic-ui-react/event-stack/lib/index.js
var lib = __webpack_require__("qur2");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/keyboard-key/src/keyboardKey.js
var keyboardKey = __webpack_require__("TtTL");
var keyboardKey_default = /*#__PURE__*/__webpack_require__.n(keyboardKey);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("F56x");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = __webpack_require__("Nijj");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var es_lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/AutoControlledComponent.js
var AutoControlledComponent = __webpack_require__("CeSN");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/Label.js + 2 modules
var Label = __webpack_require__("NttU");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownDivider.js





/**
 * A dropdown menu can contain dividers to separate related content.
 */

function DropdownDivider(props) {
  var className = props.className;
  var classes = classnames_default()('divider', className);
  var rest = Object(getUnhandledProps["a" /* default */])(DropdownDivider, props);
  var ElementType = Object(getElementType["a" /* default */])(DropdownDivider, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }));
}

DropdownDivider.handledProps = ["as", "className"];
DropdownDivider.propTypes =  false ? undefined : {};
/* harmony default export */ var Dropdown_DropdownDivider = (DropdownDivider);
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js
var Flag = __webpack_require__("UbxP");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js + 1 modules
var Image = __webpack_require__("cFof");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownItem.js


















/**
 * An item sub-component for Dropdown component.
 */

var DropdownItem_DropdownItem =
/*#__PURE__*/
function (_Component) {
  inherits_default()(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      invoke_default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  createClass_default()(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          disabled = _this$props.disabled,
          description = _this$props.description,
          flag = _this$props.flag,
          icon = _this$props.icon,
          image = _this$props.image,
          label = _this$props.label,
          selected = _this$props.selected,
          text = _this$props.text;
      var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(selected, 'selected'), 'item', className); // add default dropdown icon if item contains another menu

      var iconName = isNil_default()(icon) ? es_lib["a" /* childrenUtils */].someByType(children, 'DropdownMenu') && 'dropdown' : icon;
      var rest = Object(getUnhandledProps["a" /* default */])(DropdownItem, this.props);
      var ElementType = Object(getElementType["a" /* default */])(DropdownItem, this.props);
      var ariaOptions = {
        role: 'option',
        'aria-disabled': disabled,
        'aria-checked': active,
        'aria-selected': selected
      };

      if (!es_lib["a" /* childrenUtils */].isNil(children)) {
        return react_default.a.createElement(ElementType, extends_default()({}, rest, ariaOptions, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var flagElement = Flag["a" /* default */].create(flag, {
        autoGenerateKey: false
      });
      var iconElement = Icon["a" /* default */].create(iconName, {
        autoGenerateKey: false
      });
      var imageElement = Image["a" /* default */].create(image, {
        autoGenerateKey: false
      });
      var labelElement = Label["a" /* default */].create(label, {
        autoGenerateKey: false
      });
      var descriptionElement = Object(factories["b" /* createShorthand */])('span', function (val) {
        return {
          children: val
        };
      }, description, {
        defaultProps: {
          className: 'description'
        },
        autoGenerateKey: false
      });
      var textElement = Object(factories["b" /* createShorthand */])('span', function (val) {
        return {
          children: val
        };
      }, es_lib["a" /* childrenUtils */].isNil(content) ? text : content, {
        defaultProps: {
          className: 'text'
        },
        autoGenerateKey: false
      });
      return react_default.a.createElement(ElementType, extends_default()({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
    }
  }]);

  return DropdownItem;
}(react["Component"]);

defineProperty_default()(DropdownItem_DropdownItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"]);

DropdownItem_DropdownItem.propTypes =  false ? undefined : {};
DropdownItem_DropdownItem.create = Object(factories["c" /* createShorthandFactory */])(DropdownItem_DropdownItem, function (opts) {
  return opts;
});
/* harmony default export */ var Dropdown_DropdownItem = (DropdownItem_DropdownItem);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownHeader.js






/**
 * A dropdown menu can contain a header.
 */

function DropdownHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = classnames_default()('header', className);
  var rest = Object(getUnhandledProps["a" /* default */])(DropdownHeader, props);
  var ElementType = Object(getElementType["a" /* default */])(DropdownHeader, props);

  if (!es_lib["a" /* childrenUtils */].isNil(children)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), children);
  }

  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), Icon["a" /* default */].create(icon, {
    autoGenerateKey: false
  }), content);
}

DropdownHeader.handledProps = ["as", "children", "className", "content", "icon"];
DropdownHeader.propTypes =  false ? undefined : {};
DropdownHeader.create = Object(factories["c" /* createShorthandFactory */])(DropdownHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var Dropdown_DropdownHeader = (DropdownHeader);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownMenu.js





/**
 * A dropdown menu can contain a menu.
 */

function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      direction = props.direction,
      open = props.open,
      scrolling = props.scrolling;
  var classes = classnames_default()(direction, Object(classNameBuilders["a" /* useKeyOnly */])(open, 'visible'), Object(classNameBuilders["a" /* useKeyOnly */])(scrolling, 'scrolling'), 'menu transition', className);
  var rest = Object(getUnhandledProps["a" /* default */])(DropdownMenu, props);
  var ElementType = Object(getElementType["a" /* default */])(DropdownMenu, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), es_lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

DropdownMenu.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
DropdownMenu.propTypes =  false ? undefined : {};
/* harmony default export */ var Dropdown_DropdownMenu = (DropdownMenu);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownSearchInput.js















/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput_DropdownSearchInput =
/*#__PURE__*/
function (_Component) {
  inherits_default()(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropdownSearchInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropdownSearchInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (e) {
      var value = lodash_get_default()(e, 'target.value');

      invoke_default()(_this.props, 'onChange', e, objectSpread_default()({}, _this.props, {
        value: value
      }));
    });

    return _this;
  }

  createClass_default()(DropdownSearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex,
          type = _this$props.type,
          value = _this$props.value;
      var classes = classnames_default()('search', className);
      var rest = Object(getUnhandledProps["a" /* default */])(DropdownSearchInput, this.props);
      return react_default.a.createElement("input", extends_default()({}, rest, {
        "aria-autocomplete": "list",
        autoComplete: autoComplete,
        className: classes,
        onChange: this.handleChange,
        tabIndex: tabIndex,
        type: type,
        value: value
      }));
    }
  }]);

  return DropdownSearchInput;
}(react["Component"]);

defineProperty_default()(DropdownSearchInput_DropdownSearchInput, "defaultProps", {
  autoComplete: 'off',
  type: 'text'
});

defineProperty_default()(DropdownSearchInput_DropdownSearchInput, "handledProps", ["as", "autoComplete", "className", "tabIndex", "type", "value"]);

DropdownSearchInput_DropdownSearchInput.propTypes =  false ? undefined : {};
DropdownSearchInput_DropdownSearchInput.create = Object(factories["c" /* createShorthandFactory */])(DropdownSearchInput_DropdownSearchInput, function (type) {
  return {
    type: type
  };
});
/* harmony default export */ var Dropdown_DropdownSearchInput = (DropdownSearchInput_DropdownSearchInput);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js




















































var Dropdown_getKeyOrValue = function getKeyOrValue(key, value) {
  return isNil_default()(key) ? value : key;
};
/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */


var Dropdown_Dropdown =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "searchRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "sizerRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "ref", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (e, value) {
      invoke_default()(_this.props, 'onChange', e, objectSpread_default()({}, _this.props, {
        value: value
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeOnChange", function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;
      var shouldClose = isUndefined_default()(closeOnChange) ? !multiple : closeOnChange;
      if (shouldClose) _this.close(e, noop_default.a);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeOnEscape", function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboardKey_default.a.getCode(e) !== keyboardKey_default.a.Escape) return;
      e.preventDefault();

      _this.close(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "moveSelectionOnKeyDown", function (e) {
      var _moves;

      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          selectOnNavigation = _this$props2.selectOnNavigation;
      var moves = (_moves = {}, defineProperty_default()(_moves, keyboardKey_default.a.ArrowDown, 1), defineProperty_default()(_moves, keyboardKey_default.a.ArrowUp, -1), _moves);
      var move = moves[keyboardKey_default.a.getCode(e)];
      if (move === undefined) return;
      e.preventDefault();

      _this.moveSelectionBy(move);

      if (!multiple && selectOnNavigation) _this.makeSelectedItemActive(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "openOnSpace", function (e) {
      if (keyboardKey_default.a.getCode(e) !== keyboardKey_default.a.Spacebar) return;
      e.preventDefault();

      _this.open(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "openOnArrow", function (e) {
      var code = keyboardKey_default.a.getCode(e);
      if (!includes_default()([keyboardKey_default.a.ArrowDown, keyboardKey_default.a.ArrowUp], code)) return;
      if (_this.state.open) return;
      e.preventDefault();

      _this.open(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "makeSelectedItemActive", function (e) {
      var _this$state = _this.state,
          open = _this$state.open,
          value = _this$state.value;
      var multiple = _this.props.multiple;

      var item = _this.getSelectedItem();

      var selectedValue = lodash_get_default()(item, 'value'); // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed


      if (isNil_default()(selectedValue) || !open) return; // state value may be undefined

      var newValue = multiple ? union_default()(_this.state.value, [selectedValue]) : selectedValue;
      var valueHasChanged = multiple ? !!difference_default()(newValue, value).length : newValue !== value;

      if (valueHasChanged) {
        // notify the onChange prop that the user is trying to change value
        _this.setValue(newValue);

        _this.setSelectedIndex(newValue);

        _this.handleChange(e, newValue); // Heads up! This event handler should be called after `onChange`
        // Notify the onAddItem prop if this is a new value


        if (item['data-additional']) {
          invoke_default()(_this.props, 'onAddItem', e, objectSpread_default()({}, _this.props, {
            value: selectedValue
          }));
        }
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "selectItemOnEnter", function (e) {
      var search = _this.props.search;
      var shouldSelect = keyboardKey_default.a.getCode(e) === keyboardKey_default.a.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
      !search && keyboardKey_default.a.getCode(e) === keyboardKey_default.a.Spacebar;
      if (!shouldSelect) return;
      e.preventDefault();

      var optionSize = size_default()(_this.getMenuOptions());

      if (search && optionSize === 0) return;

      _this.makeSelectedItemActive(e);

      _this.closeOnChange(e);

      _this.clearSearchQuery();

      if (search) invoke_default()(_this.searchRef.current, 'focus');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeItemOnBackspace", function (e) {
      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state2 = _this.state,
          searchQuery = _this$state2.searchQuery,
          value = _this$state2.value;
      if (keyboardKey_default.a.getCode(e) !== keyboardKey_default.a.Backspace) return;
      if (searchQuery || !search || !multiple || isEmpty_default()(value)) return;
      e.preventDefault(); // remove most recent value

      var newValue = dropRight_default()(value);

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeOnDocumentClick", function (e) {
      if (!_this.props.closeOnBlur) return; // If event happened in the dropdown, ignore it

      if (_this.ref.current && Object(doesNodeContainClick["a" /* default */])(_this.ref.current, e)) return;

      _this.close();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseDown", function (e) {
      _this.isMouseDown = true;

      invoke_default()(_this.props, 'onMouseDown', e, _this.props);

      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDocumentMouseUp", function () {
      _this.isMouseDown = false;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state3 = _this.state,
          open = _this$state3.open,
          searchQuery = _this$state3.searchQuery;

      invoke_default()(_this.props, 'onClick', e, _this.props); // prevent closeOnDocumentClick()


      e.stopPropagation();
      if (!search) return _this.toggle(e);

      if (open) {
        invoke_default()(_this.searchRef.current, 'focus');

        return;
      }

      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);

        return;
      }

      invoke_default()(_this.searchRef.current, 'focus');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleIconClick", function (e) {
      var clearable = _this.props.clearable;

      var hasValue = _this.hasValue();

      invoke_default()(_this.props, 'onClick', e, _this.props); // prevent handleClick()


      e.stopPropagation();

      if (clearable && hasValue) {
        _this.clearValue(e);
      } else {
        _this.toggle(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleItemClick", function (e, item) {
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          search = _this$props5.search;
      var currentValue = _this.state.value;
      var value = item.value; // prevent toggle() in handleClick()

      e.stopPropagation(); // prevent closeOnDocumentClick() if multiple or item is disabled

      if (multiple || item.disabled) e.nativeEvent.stopImmediatePropagation();
      if (item.disabled) return;
      var isAdditionItem = item['data-additional'];
      var newValue = multiple ? union_default()(_this.state.value, [value]) : value;
      var valueHasChanged = multiple ? !!difference_default()(newValue, currentValue).length : newValue !== currentValue; // notify the onChange prop that the user is trying to change value

      if (valueHasChanged) {
        _this.setValue(newValue);

        _this.setSelectedIndex(value);

        _this.handleChange(e, newValue);
      }

      _this.clearSearchQuery(value);

      if (search) {
        invoke_default()(_this.searchRef.current, 'focus');
      } else {
        invoke_default()(_this.ref.current, 'focus');
      }

      _this.closeOnChange(e); // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value


      if (isAdditionItem) invoke_default()(_this.props, 'onAddItem', e, objectSpread_default()({}, _this.props, {
        value: value
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleFocus", function (e) {
      var focus = _this.state.focus;
      if (focus) return;

      invoke_default()(_this.props, 'onFocus', e, _this.props);

      _this.setState({
        focus: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleBlur", function (e) {
      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = lodash_get_default()(e, 'currentTarget');

      if (currentTarget && currentTarget.contains(document.activeElement)) return;
      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          selectOnBlur = _this$props6.selectOnBlur; // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;

      invoke_default()(_this.props, 'onBlur', e, _this.props);

      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);

        if (closeOnBlur) _this.close();
      }

      _this.setState({
        focus: false
      });

      _this.clearSearchQuery();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSearchChange", function (e, _ref) {
      var value = _ref.value;
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = value;

      invoke_default()(_this.props, 'onSearchChange', e, objectSpread_default()({}, _this.props, {
        searchQuery: newQuery
      }));

      _this.trySetState({
        searchQuery: newQuery,
        selectedIndex: 0
      }); // open search dropdown on search query


      if (!open && newQuery.length >= minCharacters) {
        _this.open();

        return;
      } // close search dropdown if search query is too small


      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getKeyAndValues", function (options) {
      return options ? options.map(function (option) {
        return pick_default()(option, ['key', 'value']);
      }) : options;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getMenuOptions", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var searchQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.searchQuery;
      var _this$props7 = _this.props,
          additionLabel = _this$props7.additionLabel,
          additionPosition = _this$props7.additionPosition,
          allowAdditions = _this$props7.allowAdditions,
          deburr = _this$props7.deburr,
          multiple = _this$props7.multiple,
          search = _this$props7.search;
      var filteredOptions = options; // filter out active options

      if (multiple) {
        filteredOptions = filter_default()(filteredOptions, function (opt) {
          return !includes_default()(value, opt.value);
        });
      } // filter by search query


      if (search && searchQuery) {
        if (isFunction_default()(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          // remove diacritics on search input and options, if deburr prop is set
          var strippedQuery = deburr ? deburr_default()(searchQuery) : searchQuery;
          var re = new RegExp(escapeRegExp_default()(strippedQuery), 'i');
          filteredOptions = filter_default()(filteredOptions, function (opt) {
            return re.test(deburr ? deburr_default()(opt.text) : opt.text);
          });
        }
      } // insert the "add" item


      if (allowAdditions && search && searchQuery && !some_default()(filteredOptions, {
        text: searchQuery
      })) {
        var additionLabelElement = react_default.a.isValidElement(additionLabel) ? react_default.a.cloneElement(additionLabel, {
          key: 'addition-label'
        }) : additionLabel || '';
        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, react_default.a.createElement("b", {
            key: "addition-query"
          }, searchQuery)],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getSelectedItem", function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return lodash_get_default()(options, "[".concat(selectedIndex, "]"));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getEnabledIndices", function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return reduce_default()(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getItemByValue", function (value) {
      var options = _this.props.options;
      return find_default()(options, {
        value: value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getMenuItemIndexByValue", function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return findIndex_default()(options, ['value', value]);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getDropdownAriaOptions", function () {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;
      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };

      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }

      return ariaOptions;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "clearSearchQuery", function (value) {
      var searchQuery = _this.state.searchQuery;
      if (searchQuery === undefined || searchQuery === '') return;

      _this.trySetState({
        searchQuery: ''
      });

      _this.setSelectedIndex(value, undefined, '');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setValue", function (value) {
      _this.trySetState({
        value: value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setSelectedIndex", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var searchQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state.searchQuery;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps, searchQuery);

      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex; // update the selected index

      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0]; // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.

        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options); // regular selects can only have one active item
        // set the selected index to the currently active item


        newSelectedIndex = includes_default()(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({
        selectedIndex: newSelectedIndex
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleLabelClick", function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({
        selectedLabel: labelProps.value
      });

      invoke_default()(_this.props, 'onLabelClick', e, labelProps);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleLabelRemove", function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = without_default()(value, labelProps.value);

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "moveSelectionBy", function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;

      var options = _this.getMenuOptions(); // Prevent infinite loop
      // TODO: remove left part of condition after children API will be removed


      if (options === undefined || every_default()(options, 'disabled')) return;
      var lastIndex = options.length - 1;
      var wrapSelection = _this.props.wrapSelection; // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = startIndex + offset; // if 'wrapSelection' is set to false and selection is after last or before first, it just does not change

      if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
        nextIndex = startIndex;
      } else if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) {
        _this.moveSelectionBy(offset, nextIndex);

        return;
      }

      _this.setState({
        selectedIndex: nextIndex
      });

      _this.scrollSelectedItemIntoView();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleIconOverrides", function (predefinedProps) {
      var clearable = _this.props.clearable;
      var classes = classnames_default()(clearable && _this.hasValue() && 'clear', predefinedProps.className);
      return {
        className: classes,
        onClick: function onClick(e) {
          invoke_default()(predefinedProps, 'onClick', e, predefinedProps);

          _this.handleIconClick(e);
        }
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "clearValue", function (e) {
      var multiple = _this.props.multiple;
      var newValue = multiple ? [] : '';

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "computeSearchInputTabIndex", function () {
      var _this$props9 = _this.props,
          disabled = _this$props9.disabled,
          tabIndex = _this$props9.tabIndex;
      if (!isNil_default()(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "computeSearchInputWidth", function () {
      var searchQuery = _this.state.searchQuery;

      if (_this.sizerRef.current && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it
        _this.sizerRef.current.style.display = 'inline';
        _this.sizerRef.current.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.current.getBoundingClientRect().width);

        _this.sizerRef.current.style.removeProperty('display');

        return searchWidth;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "computeTabIndex", function () {
      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          search = _this$props10.search,
          tabIndex = _this$props10.tabIndex; // don't set a root node tabIndex as the search input has its own tabIndex

      if (search) return undefined;
      if (disabled) return -1;
      return isNil_default()(tabIndex) ? 0 : tabIndex;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSearchInputOverrides", function (predefinedProps) {
      return {
        onChange: function onChange(e, inputProps) {
          invoke_default()(predefinedProps, 'onChange', e, inputProps);

          _this.handleSearchChange(e, inputProps);
        }
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hasValue", function () {
      var multiple = _this.props.multiple;
      var value = _this.state.value;
      return multiple ? !isEmpty_default()(value) : !isNil_default()(value) && value !== '';
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "scrollSelectedItemIntoView", function () {
      if (!_this.ref.current) return;

      var menu = _this.ref.current.querySelector('.menu.visible');

      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        // eslint-disable-next-line no-mixed-operators
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setOpenDirection", function () {
      if (!_this.ref.current) return;

      var menu = _this.ref.current.querySelector('.menu.visible');

      if (!menu) return;

      var dropdownRect = _this.ref.current.getBoundingClientRect();

      var menuHeight = menu.clientHeight;
      var spaceAtTheBottom = document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - menuHeight;
      var spaceAtTheTop = dropdownRect.top - menuHeight;
      var upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom; // set state only if there's a relevant difference

      if (!upward !== !_this.state.upward) {
        _this.trySetState({
          upward: upward
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "open", function (e) {
      var _this$props11 = _this.props,
          disabled = _this$props11.disabled,
          open = _this$props11.open,
          search = _this$props11.search;
      if (disabled) return;
      if (search) invoke_default()(_this.searchRef.current, 'focus');

      invoke_default()(_this.props, 'onOpen', e, _this.props);

      _this.trySetState({
        open: true
      });

      _this.scrollSelectedItemIntoView();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "close", function (e) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.handleClose;
      var open = _this.state.open;

      if (open) {
        invoke_default()(_this.props, 'onClose', e, _this.props);

        _this.trySetState({
          open: false
        }, callback);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClose", function () {
      var hasSearchFocus = document.activeElement === _this.searchRef.current; // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.

      if (!hasSearchFocus && _this.ref.current) {
        _this.ref.current.blur();
      }

      var hasDropdownFocus = document.activeElement === _this.ref.current;
      var hasFocus = hasSearchFocus || hasDropdownFocus; // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692

      _this.setState({
        focus: hasFocus
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggle", function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderText", function () {
      var _this$props12 = _this.props,
          multiple = _this$props12.multiple,
          placeholder = _this$props12.placeholder,
          search = _this$props12.search,
          text = _this$props12.text;
      var _this$state4 = _this.state,
          searchQuery = _this$state4.searchQuery,
          value = _this$state4.value,
          open = _this$state4.open;

      var hasValue = _this.hasValue();

      var classes = classnames_default()(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;

      if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = lodash_get_default()(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = lodash_get_default()(_this.getItemByValue(value), 'text');
      }

      return react_default.a.createElement("div", {
        className: classes,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": true
      }, _text);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderSearchInput", function () {
      var _this$props13 = _this.props,
          search = _this$props13.search,
          searchInput = _this$props13.searchInput;
      var searchQuery = _this.state.searchQuery;
      return search && react_default.a.createElement(Ref["a" /* default */], {
        innerRef: _this.searchRef
      }, Dropdown_DropdownSearchInput.create(searchInput, {
        defaultProps: {
          style: {
            width: _this.computeSearchInputWidth()
          },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        },
        overrideProps: _this.handleSearchInputOverrides
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderSearchSizer", function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          multiple = _this$props14.multiple;
      return search && multiple && react_default.a.createElement("span", {
        className: "sizer",
        ref: _this.sizerRef
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderLabels", function () {
      var _this$props15 = _this.props,
          multiple = _this$props15.multiple,
          renderLabel = _this$props15.renderLabel;
      var _this$state5 = _this.state,
          selectedLabel = _this$state5.selectedLabel,
          value = _this$state5.value;

      if (!multiple || isEmpty_default()(value)) {
        return;
      }

      var selectedItems = map_default()(value, _this.getItemByValue);

      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return map_default()(compact_default()(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: Dropdown_getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };
        return Label["a" /* default */].create(renderLabel(item, index, defaultProps), {
          defaultProps: defaultProps
        });
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderOptions", function () {
      var _this$props16 = _this.props,
          lazyLoad = _this$props16.lazyLoad,
          multiple = _this$props16.multiple,
          search = _this$props16.search,
          noResultsMessage = _this$props16.noResultsMessage;
      var _this$state6 = _this.state,
          open = _this$state6.open,
          selectedIndex = _this$state6.selectedIndex,
          value = _this$state6.value; // lazy load, only render options when open

      if (lazyLoad && !open) return null;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && isEmpty_default()(options)) {
        return react_default.a.createElement("div", {
          className: "message"
        }, noResultsMessage);
      }

      var isActive = multiple ? function (optValue) {
        return includes_default()(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };
      return map_default()(options, function (opt, i) {
        return Dropdown_DropdownItem.create(objectSpread_default()({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: Dropdown_getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: objectSpread_default()({}, opt.style, {
            pointerEvents: 'all'
          })
        }));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderMenu", function () {
      var _this$props17 = _this.props,
          children = _this$props17.children,
          direction = _this$props17.direction,
          header = _this$props17.header;
      var open = _this.state.open;

      var ariaOptions = _this.getDropdownMenuAriaOptions(); // single menu child


      if (!es_lib["a" /* childrenUtils */].isNil(children)) {
        var menuChild = react["Children"].only(children);
        var className = classnames_default()(direction, Object(classNameBuilders["a" /* useKeyOnly */])(open, 'visible'), menuChild.props.className);
        return Object(react["cloneElement"])(menuChild, objectSpread_default()({
          className: className
        }, ariaOptions));
      }

      return react_default.a.createElement(Dropdown_DropdownMenu, extends_default()({}, ariaOptions, {
        direction: direction,
        open: open
      }), Dropdown_DropdownHeader.create(header, {
        autoGenerateKey: false
      }), _this.renderOptions());
    });

    return _this;
  }

  createClass_default()(Dropdown, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState() {
      return {
        focus: false,
        searchQuery: ''
      };
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this$state7 = this.state,
          open = _this$state7.open,
          value = _this$state7.value;
      this.setValue(value);
      this.setSelectedIndex(value);

      if (open) {
        this.open();
      }
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      get_default()(getPrototypeOf_default()(Dropdown.prototype), "UNSAFE_componentWillReceiveProps", this).call(this, nextProps);

      /* eslint-disable no-console */
      if (false) { var hasValue, isNextValueArray; }
      /* eslint-enable no-console */


      if (!shallowequal_default()(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
        this.setSelectedIndex(nextProps.value);
      } // The selected index is only dependent on option keys/values.
      // We only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000


      if (!isEqual_default()(this.getKeyAndValues(nextProps.options), this.getKeyAndValues(this.props.options))) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal_default()(nextProps, this.props) || !shallowequal_default()(nextState, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      var _this$props18 = this.props,
          closeOnBlur = _this$props18.closeOnBlur,
          minCharacters = _this$props18.minCharacters,
          openOnFocus = _this$props18.openOnFocus,
          search = _this$props18.search; // focused / blurred

      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          var openable = !search || search && minCharacters === 1 && !this.state.open;
          if (openOnFocus && openable) this.open();
        }
      } else if (prevState.focus && !this.state.focus) {
        if (!this.isMouseDown && closeOnBlur) {
          this.close();
        }
      } // opened / closed


      if (!prevState.open && this.state.open) {
        this.setOpenDirection();
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {}
    } // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------
    // onChange needs to receive a value
    // can't rely on props.value if we are controlled

  }, {
    key: "getDropdownMenuAriaOptions",
    value: function getDropdownMenuAriaOptions() {
      var _this$props19 = this.props,
          search = _this$props19.search,
          multiple = _this$props19.multiple;
      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }

      return ariaOptions;
    } // ----------------------------------------
    // Setters
    // ----------------------------------------

  }, {
    key: "render",
    value: function render() {
      var _this$props20 = this.props,
          basic = _this$props20.basic,
          button = _this$props20.button,
          className = _this$props20.className,
          compact = _this$props20.compact,
          disabled = _this$props20.disabled,
          error = _this$props20.error,
          fluid = _this$props20.fluid,
          floating = _this$props20.floating,
          icon = _this$props20.icon,
          inline = _this$props20.inline,
          item = _this$props20.item,
          labeled = _this$props20.labeled,
          loading = _this$props20.loading,
          multiple = _this$props20.multiple,
          pointing = _this$props20.pointing,
          search = _this$props20.search,
          selection = _this$props20.selection,
          scrolling = _this$props20.scrolling,
          simple = _this$props20.simple,
          trigger = _this$props20.trigger;
      var _this$state8 = this.state,
          focus = _this$state8.focus,
          open = _this$state8.open,
          upward = _this$state8.upward; // Classes

      var classes = classnames_default()('ui', Object(classNameBuilders["a" /* useKeyOnly */])(open, 'active visible'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(error, 'error'), Object(classNameBuilders["a" /* useKeyOnly */])(loading, 'loading'), Object(classNameBuilders["a" /* useKeyOnly */])(basic, 'basic'), Object(classNameBuilders["a" /* useKeyOnly */])(button, 'button'), Object(classNameBuilders["a" /* useKeyOnly */])(compact, 'compact'), Object(classNameBuilders["a" /* useKeyOnly */])(fluid, 'fluid'), Object(classNameBuilders["a" /* useKeyOnly */])(floating, 'floating'), Object(classNameBuilders["a" /* useKeyOnly */])(inline, 'inline'), // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      Object(classNameBuilders["a" /* useKeyOnly */])(labeled, 'labeled'), Object(classNameBuilders["a" /* useKeyOnly */])(item, 'item'), Object(classNameBuilders["a" /* useKeyOnly */])(multiple, 'multiple'), Object(classNameBuilders["a" /* useKeyOnly */])(search, 'search'), Object(classNameBuilders["a" /* useKeyOnly */])(selection, 'selection'), Object(classNameBuilders["a" /* useKeyOnly */])(simple, 'simple'), Object(classNameBuilders["a" /* useKeyOnly */])(scrolling, 'scrolling'), Object(classNameBuilders["a" /* useKeyOnly */])(upward, 'upward'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(pointing, 'pointing'), 'dropdown', className);
      var rest = Object(getUnhandledProps["a" /* default */])(Dropdown, this.props);
      var ElementType = Object(getElementType["a" /* default */])(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);
      return react_default.a.createElement(Ref["a" /* default */], {
        innerRef: this.ref
      }, react_default.a.createElement(ElementType, extends_default()({}, rest, ariaOptions, {
        className: classes,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        tabIndex: this.computeTabIndex()
      }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), trigger || this.renderText(), Icon["a" /* default */].create(icon, {
        overrideProps: this.handleIconOverrides,
        autoGenerateKey: false
      }), this.renderMenu(), open && react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.closeOnEscape
      }), open && react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.moveSelectionOnKeyDown
      }), open && react_default.a.createElement(lib_default.a, {
        name: "click",
        on: this.closeOnDocumentClick
      }), open && react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.selectItemOnEnter
      }), focus && react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.removeItemOnBackspace
      }), focus && !open && react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.openOnArrow
      }), focus && !open && react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.openOnSpace
      })));
    }
  }]);

  return Dropdown;
}(AutoControlledComponent["a" /* default */]);

defineProperty_default()(Dropdown_Dropdown, "defaultProps", {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  closeOnEscape: true,
  deburr: false,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref2) {
    var text = _ref2.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true,
  selectOnNavigation: true,
  wrapSelection: true
});

defineProperty_default()(Dropdown_Dropdown, "autoControlledProps", ['open', 'searchQuery', 'selectedLabel', 'value', 'upward']);

defineProperty_default()(Dropdown_Dropdown, "Divider", Dropdown_DropdownDivider);

defineProperty_default()(Dropdown_Dropdown, "Header", Dropdown_DropdownHeader);

defineProperty_default()(Dropdown_Dropdown, "Item", Dropdown_DropdownItem);

defineProperty_default()(Dropdown_Dropdown, "Menu", Dropdown_DropdownMenu);

defineProperty_default()(Dropdown_Dropdown, "SearchInput", Dropdown_DropdownSearchInput);

defineProperty_default()(Dropdown_Dropdown, "handledProps", ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"]);


Dropdown_Dropdown.propTypes =  false ? undefined : {};

/***/ }),

/***/ "at+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("gki9");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/@semantic-ui-react/event-stack/lib/index.js
var lib = __webpack_require__("qur2");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/handleRef.js
var handleRef = __webpack_require__("Xj0t");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/keyboard-key/src/keyboardKey.js
var keyboardKey = __webpack_require__("TtTL");
var keyboardKey_default = /*#__PURE__*/__webpack_require__.n(keyboardKey);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = __webpack_require__("Nijj");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/AutoControlledComponent.js
var AutoControlledComponent = __webpack_require__("CeSN");

// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__("xARA");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
var isBrowser = __webpack_require__("JcLd");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js














/**
 * An inner component that allows you to render children outside their parent.
 */
var PortalInner_PortalInner =
/*#__PURE__*/
function (_Component) {
  inherits_default()(PortalInner, _Component);

  function PortalInner() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, PortalInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(PortalInner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleRef", function (c) {
      Object(handleRef["a" /* default */])(_this.props.innerRef, c);
    });

    return _this;
  }

  createClass_default()(PortalInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      invoke_default()(this.props, 'onMount', null, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      invoke_default()(this.props, 'onUnmount', null, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      if (!Object(isBrowser["a" /* default */])()) return null;
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$mountNode = _this$props.mountNode,
          mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
      return Object(react_dom["createPortal"])(react_default.a.createElement(Ref["a" /* default */], {
        innerRef: this.handleRef
      }, children), mountNode);
    }
  }]);

  return PortalInner;
}(react["Component"]);

defineProperty_default()(PortalInner_PortalInner, "handledProps", ["children", "innerRef", "mountNode", "onMount", "onUnmount"]);

PortalInner_PortalInner.propTypes =  false ? undefined : {};
/* harmony default export */ var Portal_PortalInner = (PortalInner_PortalInner);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js

















/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
var Portal_Portal =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Portal, _Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "contentRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "triggerRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "latestDocumentMouseDownEvent", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDocumentMouseDown", function (e) {
      _this.latestDocumentMouseDownEvent = e;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDocumentClick", function (e) {
      var closeOnDocumentClick = _this.props.closeOnDocumentClick;
      var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;

      if (!_this.contentRef.current || // no portal
      Object(doesNodeContainClick["a" /* default */])(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      currentMouseDownEvent && Object(doesNodeContainClick["a" /* default */])(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
      Object(doesNodeContainClick["a" /* default */])(_this.contentRef.current, e) // event happened in the portal
      ) {
          return;
        } // ignore the click


      if (closeOnDocumentClick) {
        _this.close(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleEscape", function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboardKey_default.a.getCode(e) !== keyboardKey_default.a.Escape) return;

      _this.close(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalMouseLeave", function (e) {
      var _this$props = _this.props,
          closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave,
          mouseLeaveDelay = _this$props.mouseLeaveDelay;
      if (!closeOnPortalMouseLeave) return; // Do not close the portal when 'mouseleave' is triggered by children

      if (e.target !== _this.contentRef.current) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalMouseEnter", function () {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
      if (!closeOnPortalMouseLeave) return;
      clearTimeout(_this.mouseLeaveTimer);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTriggerBlur", function (e) {
      var _this$props2 = _this.props,
          trigger = _this$props2.trigger,
          closeOnTriggerBlur = _this$props2.closeOnTriggerBlur; // Call original event handler

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      invoke_default.a.apply(void 0, [trigger, 'props.onBlur', e].concat(rest)); // IE 11 doesn't work with relatedTarget in blur events


      var target = e.relatedTarget || document.activeElement; // do not close if focus is given to the portal

      var didFocusPortal = invoke_default()(_this.contentRef.current, 'contains', target);

      if (!closeOnTriggerBlur || didFocusPortal) return;

      _this.close(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTriggerClick", function (e) {
      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeOnTriggerClick = _this$props3.closeOnTriggerClick,
          openOnTriggerClick = _this$props3.openOnTriggerClick;
      var open = _this.state.open; // Call original event handler

      for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }

      invoke_default.a.apply(void 0, [trigger, 'props.onClick', e].concat(rest));

      if (open && closeOnTriggerClick) {
        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        _this.open(e);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTriggerFocus", function (e) {
      var _this$props4 = _this.props,
          trigger = _this$props4.trigger,
          openOnTriggerFocus = _this$props4.openOnTriggerFocus; // Call original event handler

      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      invoke_default.a.apply(void 0, [trigger, 'props.onFocus', e].concat(rest));

      if (!openOnTriggerFocus) return;

      _this.open(e);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTriggerMouseLeave", function (e) {
      clearTimeout(_this.mouseEnterTimer);
      var _this$props5 = _this.props,
          trigger = _this$props5.trigger,
          closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _this$props5.mouseLeaveDelay; // Call original event handler

      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      invoke_default.a.apply(void 0, [trigger, 'props.onMouseLeave', e].concat(rest));

      if (!closeOnTriggerMouseLeave) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTriggerMouseEnter", function (e) {
      clearTimeout(_this.mouseLeaveTimer);
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          mouseEnterDelay = _this$props6.mouseEnterDelay,
          openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter; // Call original event handler

      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        rest[_key6 - 1] = arguments[_key6];
      }

      invoke_default.a.apply(void 0, [trigger, 'props.onMouseEnter', e].concat(rest));

      if (!openOnTriggerMouseEnter) return;
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "open", function (e) {
      var onOpen = _this.props.onOpen;
      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({
        open: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "openWithTimeout", function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = objectSpread_default()({}, e);

      return setTimeout(function () {
        return _this.open(eventClone);
      }, delay || 0);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "close", function (e) {
      var onClose = _this.props.onClose;
      if (onClose) onClose(e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeWithTimeout", function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = objectSpread_default()({}, e);

      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleMount", function () {
      invoke_default()(_this.props, 'onMount', null, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleUnmount", function () {
      invoke_default()(_this.props, 'onUnmount', null, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleTriggerRef", function (c) {
      _this.triggerRef.current = c;
      Object(handleRef["a" /* default */])(_this.props.triggerRef, c);
    });

    return _this;
  }

  createClass_default()(Portal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Clean up timers
      clearTimeout(this.mouseEnterTimer);
      clearTimeout(this.mouseLeaveTimer);
    } // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          children = _this$props7.children,
          eventPool = _this$props7.eventPool,
          mountNode = _this$props7.mountNode,
          trigger = _this$props7.trigger;
      var open = this.state.open;
      return react_default.a.createElement(react["Fragment"], null, open && react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Portal_PortalInner, {
        innerRef: this.contentRef,
        mountNode: mountNode,
        onMount: this.handleMount,
        onUnmount: this.handleUnmount
      }, children), react_default.a.createElement(lib_default.a, {
        name: "mouseleave",
        on: this.handlePortalMouseLeave,
        pool: eventPool,
        target: this.contentRef
      }), react_default.a.createElement(lib_default.a, {
        name: "mouseenter",
        on: this.handlePortalMouseEnter,
        pool: eventPool,
        target: this.contentRef
      }), react_default.a.createElement(lib_default.a, {
        name: "mousedown",
        on: this.handleDocumentMouseDown,
        pool: eventPool
      }), react_default.a.createElement(lib_default.a, {
        name: "click",
        on: this.handleDocumentClick,
        pool: eventPool
      }), react_default.a.createElement(lib_default.a, {
        name: "keydown",
        on: this.handleEscape,
        pool: eventPool
      })), trigger && react_default.a.createElement(Ref["a" /* default */], {
        innerRef: this.handleTriggerRef
      }, Object(react["cloneElement"])(trigger, {
        onBlur: this.handleTriggerBlur,
        onClick: this.handleTriggerClick,
        onFocus: this.handleTriggerFocus,
        onMouseLeave: this.handleTriggerMouseLeave,
        onMouseEnter: this.handleTriggerMouseEnter
      })));
    }
  }]);

  return Portal;
}(AutoControlledComponent["a" /* default */]);

defineProperty_default()(Portal_Portal, "defaultProps", {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: 'default',
  openOnTriggerClick: true
});

defineProperty_default()(Portal_Portal, "autoControlledProps", ['open']);

defineProperty_default()(Portal_Portal, "Inner", Portal_PortalInner);

defineProperty_default()(Portal_Portal, "handledProps", ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"]);

Portal_Portal.propTypes =  false ? undefined : {};
/* harmony default export */ var addons_Portal_Portal = __webpack_exports__["a"] = (Portal_Portal);

/***/ }),

/***/ "cFof":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("nxTg");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js
var htmlPropsUtils = __webpack_require__("D0lo");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js + 2 modules
var Dimmer = __webpack_require__("h6E7");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/Label.js + 2 modules
var Label = __webpack_require__("NttU");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js





/**
 * A group of images.
 */

function ImageGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = classnames_default()('ui', size, className, 'images');
  var rest = Object(getUnhandledProps["a" /* default */])(ImageGroup, props);
  var ElementType = Object(getElementType["a" /* default */])(ImageGroup, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
ImageGroup.propTypes =  false ? undefined : {};
/* harmony default export */ var Image_ImageGroup = (ImageGroup);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js










/**
 * An image is a graphic representation of something.
 * @see Icon
 */

function Image(props) {
  var avatar = props.avatar,
      bordered = props.bordered,
      centered = props.centered,
      children = props.children,
      circular = props.circular,
      className = props.className,
      content = props.content,
      dimmer = props.dimmer,
      disabled = props.disabled,
      floated = props.floated,
      fluid = props.fluid,
      hidden = props.hidden,
      href = props.href,
      inline = props.inline,
      label = props.label,
      rounded = props.rounded,
      size = props.size,
      spaced = props.spaced,
      verticalAlign = props.verticalAlign,
      wrapped = props.wrapped,
      ui = props.ui;
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(ui, 'ui'), size, Object(classNameBuilders["a" /* useKeyOnly */])(avatar, 'avatar'), Object(classNameBuilders["a" /* useKeyOnly */])(bordered, 'bordered'), Object(classNameBuilders["a" /* useKeyOnly */])(circular, 'circular'), Object(classNameBuilders["a" /* useKeyOnly */])(centered, 'centered'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(fluid, 'fluid'), Object(classNameBuilders["a" /* useKeyOnly */])(hidden, 'hidden'), Object(classNameBuilders["a" /* useKeyOnly */])(inline, 'inline'), Object(classNameBuilders["a" /* useKeyOnly */])(rounded, 'rounded'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(spaced, 'spaced'), Object(classNameBuilders["e" /* useValueAndKey */])(floated, 'floated'), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign, 'aligned'), 'image', className);
  var rest = Object(getUnhandledProps["a" /* default */])(Image, props);

  var _partitionHTMLProps = Object(htmlPropsUtils["b" /* partitionHTMLProps */])(rest, {
    htmlProps: htmlPropsUtils["a" /* htmlImageProps */]
  }),
      _partitionHTMLProps2 = slicedToArray_default()(_partitionHTMLProps, 2),
      imgTagProps = _partitionHTMLProps2[0],
      rootProps = _partitionHTMLProps2[1];

  var ElementType = Object(getElementType["a" /* default */])(Image, props, function () {
    if (!isNil_default()(dimmer) || !isNil_default()(label) || !isNil_default()(wrapped) || !lib["a" /* childrenUtils */].isNil(children)) {
      return 'div';
    }
  });

  if (!lib["a" /* childrenUtils */].isNil(children)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), children);
  }

  if (!lib["a" /* childrenUtils */].isNil(content)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), content);
  }

  if (ElementType === 'img') {
    return react_default.a.createElement(ElementType, extends_default()({}, rootProps, imgTagProps, {
      className: classes
    }));
  }

  return react_default.a.createElement(ElementType, extends_default()({}, rootProps, {
    className: classes,
    href: href
  }), Dimmer["a" /* default */].create(dimmer, {
    autoGenerateKey: false
  }), Label["a" /* default */].create(label, {
    autoGenerateKey: false
  }), react_default.a.createElement("img", imgTagProps));
}

Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Image.Group = Image_ImageGroup;
Image.propTypes =  false ? undefined : {};
Image.defaultProps = {
  as: 'img',
  ui: true
};
Image.create = Object(factories["c" /* createShorthandFactory */])(Image, function (value) {
  return {
    src: value
  };
});
/* harmony default export */ var Image_Image = __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "e+9l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("gki9");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-event-listener/dist/es/EventListener.js
var EventListener = __webpack_require__("dUpC");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-event-listener/dist/es/index.js
var es = __webpack_require__("JxJh");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/isRefObject.js
var isRefObject = __webpack_require__("2RgT");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/toRefObject.js
var toRefObject = __webpack_require__("mYN2");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = __webpack_require__("Nijj");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPushable.js





/**
 * A pushable sub-component for Sidebar.
 */

function SidebarPushable(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = classnames_default()('pushable', className);
  var rest = Object(getUnhandledProps["a" /* default */])(SidebarPushable, props);
  var ElementType = Object(getElementType["a" /* default */])(SidebarPushable, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

SidebarPushable.handledProps = ["as", "children", "className", "content"];
SidebarPushable.propTypes =  false ? undefined : {};
/* harmony default export */ var Sidebar_SidebarPushable = (SidebarPushable);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPusher.js





/**
 * A pushable sub-component for Sidebar.
 */

function SidebarPusher(props) {
  var className = props.className,
      dimmed = props.dimmed,
      children = props.children,
      content = props.content;
  var classes = classnames_default()('pusher', Object(classNameBuilders["a" /* useKeyOnly */])(dimmed, 'dimmed'), className);
  var rest = Object(getUnhandledProps["a" /* default */])(SidebarPusher, props);
  var ElementType = Object(getElementType["a" /* default */])(SidebarPusher, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

SidebarPusher.handledProps = ["as", "children", "className", "content", "dimmed"];
SidebarPusher.propTypes =  false ? undefined : {};
/* harmony default export */ var Sidebar_SidebarPusher = (SidebarPusher);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js


















/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar_Sidebar =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    classCallCheck_default()(this, Sidebar);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Sidebar).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "ref", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleAnimationStart", function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onVisible' : 'onHide';
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(_this.handleAnimationEnd, Sidebar.animationDuration);

      if (_this.skipNextCallback) {
        _this.skipNextCallback = false;
        return;
      }

      invoke_default()(_this.props, callback, null, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleAnimationEnd", function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onShow' : 'onHidden';

      _this.setState({
        animationTick: 0
      });

      invoke_default()(_this.props, callback, null, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDocumentClick", function (e) {
      if (!Object(doesNodeContainClick["a" /* default */])(_this.ref.current, e)) {
        _this.skipNextCallback = true;

        invoke_default()(_this.props, 'onHide', e, objectSpread_default()({}, _this.props, {
          visible: false
        }));
      }
    });

    _this.state = {
      animationTick: 0,
      visible: props.visible
    };
    return _this;
  }

  createClass_default()(Sidebar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.animationTick > prevState.animationTick) {
        this.handleAnimationStart();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.animationTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animation = _this$props.animation,
          className = _this$props.className,
          children = _this$props.children,
          content = _this$props.content,
          direction = _this$props.direction,
          target = _this$props.target,
          visible = _this$props.visible,
          width = _this$props.width;
      var animationTick = this.state.animationTick;
      var classes = classnames_default()('ui', animation, direction, width, Object(classNameBuilders["a" /* useKeyOnly */])(animationTick > 0, 'animating'), Object(classNameBuilders["a" /* useKeyOnly */])(visible, 'visible'), 'sidebar', className);
      var rest = Object(getUnhandledProps["a" /* default */])(Sidebar, this.props);
      var ElementType = Object(getElementType["a" /* default */])(Sidebar, this.props);
      var targetRef = Object(isRefObject["a" /* default */])(target) ? target : Object(toRefObject["a" /* default */])(target);
      return react_default.a.createElement(Ref["a" /* default */], {
        innerRef: this.ref
      }, react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes
      }), lib["a" /* childrenUtils */].isNil(children) ? content : children, visible && react_default.a.createElement(EventListener["a" /* default */], {
        listener: this.handleDocumentClick,
        targetRef: targetRef,
        type: "click"
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // We use `animationTick` to understand when an animation should be scheduled
      var tickIncrement = !!props.visible === !!state.visible ? 0 : 1;
      return {
        animationTick: state.animationTick + tickIncrement,
        visible: props.visible
      };
    }
  }]);

  return Sidebar;
}(react["Component"]);

defineProperty_default()(Sidebar_Sidebar, "defaultProps", {
  direction: 'left',
  target: es["documentRef"],
  visible: false
});

defineProperty_default()(Sidebar_Sidebar, "animationDuration", 500);

defineProperty_default()(Sidebar_Sidebar, "autoControlledProps", ['visible']);

defineProperty_default()(Sidebar_Sidebar, "Pushable", Sidebar_SidebarPushable);

defineProperty_default()(Sidebar_Sidebar, "Pusher", Sidebar_SidebarPusher);

defineProperty_default()(Sidebar_Sidebar, "handledProps", ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"]);

Sidebar_Sidebar.propTypes =  false ? undefined : {};
/* harmony default export */ var modules_Sidebar_Sidebar = __webpack_exports__["a"] = (Sidebar_Sidebar);

/***/ }),

/***/ "eaJJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("5WRv");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Label/Label.js + 2 modules
var Label = __webpack_require__("NttU");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js





/**
 * Used in some Button types, such as `animated`.
 */

function ButtonContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      hidden = props.hidden,
      visible = props.visible;
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(visible, 'visible'), Object(classNameBuilders["a" /* useKeyOnly */])(hidden, 'hidden'), 'content', className);
  var rest = Object(getUnhandledProps["a" /* default */])(ButtonContent, props);
  var ElementType = Object(getElementType["a" /* default */])(ButtonContent, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ButtonContent.propTypes =  false ? undefined : {};
/* harmony default export */ var Button_ButtonContent = (ButtonContent);
// EXTERNAL MODULE: ../node_modules/lodash/map.js
var map = __webpack_require__("w451");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js








/**
 * Buttons can be grouped.
 */

function ButtonGroup(props) {
  var attached = props.attached,
      basic = props.basic,
      buttons = props.buttons,
      children = props.children,
      className = props.className,
      color = props.color,
      compact = props.compact,
      content = props.content,
      floated = props.floated,
      fluid = props.fluid,
      icon = props.icon,
      inverted = props.inverted,
      labeled = props.labeled,
      negative = props.negative,
      positive = props.positive,
      primary = props.primary,
      secondary = props.secondary,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      widths = props.widths;
  var classes = classnames_default()('ui', color, size, Object(classNameBuilders["a" /* useKeyOnly */])(basic, 'basic'), Object(classNameBuilders["a" /* useKeyOnly */])(compact, 'compact'), Object(classNameBuilders["a" /* useKeyOnly */])(fluid, 'fluid'), Object(classNameBuilders["a" /* useKeyOnly */])(icon, 'icon'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(labeled, 'labeled'), Object(classNameBuilders["a" /* useKeyOnly */])(negative, 'negative'), Object(classNameBuilders["a" /* useKeyOnly */])(positive, 'positive'), Object(classNameBuilders["a" /* useKeyOnly */])(primary, 'primary'), Object(classNameBuilders["a" /* useKeyOnly */])(secondary, 'secondary'), Object(classNameBuilders["a" /* useKeyOnly */])(toggle, 'toggle'), Object(classNameBuilders["a" /* useKeyOnly */])(vertical, 'vertical'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(classNameBuilders["e" /* useValueAndKey */])(floated, 'floated'), Object(classNameBuilders["g" /* useWidthProp */])(widths), 'buttons', className);
  var rest = Object(getUnhandledProps["a" /* default */])(ButtonGroup, props);
  var ElementType = Object(getElementType["a" /* default */])(ButtonGroup, props);

  if (isNil_default()(buttons)) {
    return react_default.a.createElement(ElementType, extends_default()({}, rest, {
      className: classes
    }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
  }

  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), map_default()(buttons, function (button) {
    return elements_Button_Button.create(button);
  }));
}

ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ButtonGroup.propTypes =  false ? undefined : {};
/* harmony default export */ var Button_ButtonGroup = (ButtonGroup);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js





/**
 * Button groups can contain conditionals.
 */

function ButtonOr(props) {
  var className = props.className,
      text = props.text;
  var classes = classnames_default()('or', className);
  var rest = Object(getUnhandledProps["a" /* default */])(ButtonOr, props);
  var ElementType = Object(getElementType["a" /* default */])(ButtonOr, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes,
    "data-text": text
  }));
}

ButtonOr.handledProps = ["as", "className", "text"];
ButtonOr.propTypes =  false ? undefined : {};
/* harmony default export */ var Button_ButtonOr = (ButtonOr);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js





















/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */

var Button_Button =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "ref", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "computeElementType", function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;
      if (!isNil_default()(attached) || !isNil_default()(label)) return 'div';
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "computeTabIndex", function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!isNil_default()(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "focus", function () {
      return invoke_default()(_this.ref.current, 'focus');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      invoke_default()(_this.props, 'onClick', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hasIconClass", function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;
      if (icon === true) return true;
      return icon && (labelPosition || lib["a" /* childrenUtils */].isNil(children) && isNil_default()(content));
    });

    return _this;
  }

  createClass_default()(Button, [{
    key: "computeButtonAriaRole",
    value: function computeButtonAriaRole(ElementType) {
      var role = this.props.role;
      if (!isNil_default()(role)) return role;
      if (ElementType !== 'button') return 'button';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          active = _this$props4.active,
          animated = _this$props4.animated,
          attached = _this$props4.attached,
          basic = _this$props4.basic,
          children = _this$props4.children,
          circular = _this$props4.circular,
          className = _this$props4.className,
          color = _this$props4.color,
          compact = _this$props4.compact,
          content = _this$props4.content,
          disabled = _this$props4.disabled,
          floated = _this$props4.floated,
          fluid = _this$props4.fluid,
          icon = _this$props4.icon,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          negative = _this$props4.negative,
          positive = _this$props4.positive,
          primary = _this$props4.primary,
          secondary = _this$props4.secondary,
          size = _this$props4.size,
          toggle = _this$props4.toggle;
      var baseClasses = classnames_default()(color, size, Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active'), Object(classNameBuilders["a" /* useKeyOnly */])(basic, 'basic'), Object(classNameBuilders["a" /* useKeyOnly */])(circular, 'circular'), Object(classNameBuilders["a" /* useKeyOnly */])(compact, 'compact'), Object(classNameBuilders["a" /* useKeyOnly */])(fluid, 'fluid'), Object(classNameBuilders["a" /* useKeyOnly */])(this.hasIconClass(), 'icon'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(loading, 'loading'), Object(classNameBuilders["a" /* useKeyOnly */])(negative, 'negative'), Object(classNameBuilders["a" /* useKeyOnly */])(positive, 'positive'), Object(classNameBuilders["a" /* useKeyOnly */])(primary, 'primary'), Object(classNameBuilders["a" /* useKeyOnly */])(secondary, 'secondary'), Object(classNameBuilders["a" /* useKeyOnly */])(toggle, 'toggle'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(animated, 'animated'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(attached, 'attached'));
      var labeledClasses = classnames_default()(Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(labelPosition || !!label, 'labeled'));
      var wrapperClasses = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["e" /* useValueAndKey */])(floated, 'floated'));
      var rest = Object(getUnhandledProps["a" /* default */])(Button, this.props);
      var ElementType = Object(getElementType["a" /* default */])(Button, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);

      if (!isNil_default()(label)) {
        var buttonClasses = classnames_default()('ui', baseClasses, 'button', className);
        var containerClasses = classnames_default()('ui', labeledClasses, 'button', className, wrapperClasses);
        var labelElement = Label["a" /* default */].create(label, {
          defaultProps: {
            basic: true,
            pointing: labelPosition === 'left' ? 'right' : 'left'
          },
          autoGenerateKey: false
        });
        return react_default.a.createElement(ElementType, extends_default()({}, rest, {
          className: containerClasses,
          onClick: this.handleClick
        }), labelPosition === 'left' && labelElement, react_default.a.createElement(Ref["a" /* default */], {
          innerRef: this.ref
        }, react_default.a.createElement("button", {
          className: buttonClasses,
          "aria-pressed": toggle ? !!active : undefined,
          disabled: disabled,
          tabIndex: tabIndex
        }, Icon["a" /* default */].create(icon, {
          autoGenerateKey: false
        }), " ", content)), (labelPosition === 'right' || !labelPosition) && labelElement);
      }

      var classes = classnames_default()('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
      var hasChildren = !lib["a" /* childrenUtils */].isNil(children);
      var role = this.computeButtonAriaRole(ElementType);
      return react_default.a.createElement(Ref["a" /* default */], {
        innerRef: this.ref
      }, react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes,
        "aria-pressed": toggle ? !!active : undefined,
        disabled: disabled && ElementType === 'button' || undefined,
        onClick: this.handleClick,
        role: role,
        tabIndex: tabIndex
      }), hasChildren && children, !hasChildren && Icon["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), !hasChildren && content));
    }
  }]);

  return Button;
}(react["Component"]);

defineProperty_default()(Button_Button, "defaultProps", {
  as: 'button'
});

defineProperty_default()(Button_Button, "Content", Button_ButtonContent);

defineProperty_default()(Button_Button, "Group", Button_ButtonGroup);

defineProperty_default()(Button_Button, "Or", Button_ButtonOr);

defineProperty_default()(Button_Button, "handledProps", ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"]);

Button_Button.propTypes =  false ? undefined : {};
Button_Button.create = Object(factories["c" /* createShorthandFactory */])(Button_Button, function (value) {
  return {
    content: value
  };
});
/* harmony default export */ var elements_Button_Button = __webpack_exports__["a"] = (Button_Button);

/***/ }),

/***/ "h6E7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Dimmer_Dimmer; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
var isBrowser = __webpack_require__("JcLd");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js + 1 modules
var Portal = __webpack_require__("at+x");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js





/**
 * A dimmable sub-component for Dimmer.
 */

function DimmerDimmable(props) {
  var blurring = props.blurring,
      className = props.className,
      children = props.children,
      content = props.content,
      dimmed = props.dimmed;
  var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(blurring, 'blurring'), Object(classNameBuilders["a" /* useKeyOnly */])(dimmed, 'dimmed'), 'dimmable', className);
  var rest = Object(getUnhandledProps["a" /* default */])(DimmerDimmable, props);
  var ElementType = Object(getElementType["a" /* default */])(DimmerDimmable, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
DimmerDimmable.propTypes =  false ? undefined : {};
/* harmony default export */ var Dimmer_DimmerDimmable = (DimmerDimmable);
// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = __webpack_require__("Nijj");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js














/**
 * An inner element for a Dimmer.
 */

var DimmerInner_DimmerInner =
/*#__PURE__*/
function (_Component) {
  inherits_default()(DimmerInner, _Component);

  function DimmerInner() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DimmerInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DimmerInner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "containerRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "contentRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function (e) {
      var contentRef = _this.contentRef.current;

      invoke_default()(_this.props, 'onClick', e, _this.props);

      if (contentRef && contentRef !== e.target && Object(doesNodeContainClick["a" /* default */])(contentRef, e)) {
        return;
      }

      invoke_default()(_this.props, 'onClickOutside', e, _this.props);
    });

    return _this;
  }

  createClass_default()(DimmerInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var active = this.props.active;
      this.toggleStyles(active);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentActive = this.props.active;
      var prevActive = prevProps.active;
      if (prevActive !== currentActive) this.toggleStyles(currentActive);
    }
  }, {
    key: "toggleStyles",
    value: function toggleStyles(active) {
      var containerRef = this.containerRef.current;
      if (!containerRef || !containerRef.style) return;

      if (active) {
        containerRef.style.setProperty('display', 'flex', 'important');
      } else {
        containerRef.style.removeProperty('display');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          disabled = _this$props.disabled,
          inverted = _this$props.inverted,
          page = _this$props.page,
          simple = _this$props.simple,
          verticalAlign = _this$props.verticalAlign;
      var classes = classnames_default()('ui', Object(classNameBuilders["a" /* useKeyOnly */])(active, 'active transition visible'), Object(classNameBuilders["a" /* useKeyOnly */])(disabled, 'disabled'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(page, 'page'), Object(classNameBuilders["a" /* useKeyOnly */])(simple, 'simple'), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), 'dimmer', className);
      var rest = Object(getUnhandledProps["a" /* default */])(DimmerInner, this.props);
      var ElementType = Object(getElementType["a" /* default */])(DimmerInner, this.props);
      var childrenContent = lib["a" /* childrenUtils */].isNil(children) ? content : children;
      return react_default.a.createElement(Ref["a" /* default */], {
        innerRef: this.containerRef
      }, react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), childrenContent && react_default.a.createElement("div", {
        className: "content",
        ref: this.contentRef
      }, childrenContent)));
    }
  }]);

  return DimmerInner;
}(react["Component"]);

defineProperty_default()(DimmerInner_DimmerInner, "handledProps", ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"]);


DimmerInner_DimmerInner.propTypes =  false ? undefined : {};
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js














/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer_Dimmer =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Dimmer, _Component);

  function Dimmer() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Dimmer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Dimmer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalMount", function () {
      if (!Object(isBrowser["a" /* default */])()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalUnmount", function () {
      if (!Object(isBrowser["a" /* default */])()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    });

    return _this;
  }

  createClass_default()(Dimmer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          page = _this$props.page;
      var rest = Object(getUnhandledProps["a" /* default */])(Dimmer, this.props);

      if (page) {
        return react_default.a.createElement(Portal["a" /* default */], {
          closeOnEscape: false,
          closeOnDocumentClick: false,
          onMount: this.handlePortalMount,
          onUnmount: this.handlePortalUnmount,
          open: active,
          openOnTriggerClick: false
        }, react_default.a.createElement(DimmerInner_DimmerInner, extends_default()({}, rest, {
          active: active,
          page: page
        })));
      }

      return react_default.a.createElement(DimmerInner_DimmerInner, extends_default()({}, rest, {
        active: active,
        page: page
      }));
    }
  }]);

  return Dimmer;
}(react["Component"]);

defineProperty_default()(Dimmer_Dimmer, "Dimmable", Dimmer_DimmerDimmable);

defineProperty_default()(Dimmer_Dimmer, "Inner", DimmerInner_DimmerInner);

defineProperty_default()(Dimmer_Dimmer, "handledProps", ["active", "page"]);


Dimmer_Dimmer.propTypes =  false ? undefined : {};
Dimmer_Dimmer.create = Object(factories["c" /* createShorthandFactory */])(Dimmer_Dimmer, function (value) {
  return {
    content: value
  };
});

/***/ }),

/***/ "nXp5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("gki9");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/pick.js
var pick = __webpack_require__("gTDC");
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ../node_modules/lodash/includes.js
var includes = __webpack_require__("8kd7");
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ../node_modules/lodash/reduce.js
var reduce = __webpack_require__("Ypgc");
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);

// EXTERNAL MODULE: ../node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__("YFs1");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/Ref.js + 2 modules
var Ref = __webpack_require__("/LCW");

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("F56x");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
var isBrowser = __webpack_require__("JcLd");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js
var doesNodeContainClick = __webpack_require__("Nijj");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/eventStack/index.js
var eventStack = __webpack_require__("xk7F");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/index.js + 1 modules
var lib = __webpack_require__("PeM6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/AutoControlledComponent.js
var AutoControlledComponent = __webpack_require__("CeSN");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("IQeJ");

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/isRefObject.js
var isRefObject = __webpack_require__("2RgT");

// EXTERNAL MODULE: ../node_modules/@stardust-ui/react-component-ref/dist/es/toRefObject.js
var toRefObject = __webpack_require__("mYN2");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/MountNode/lib/getNodeRefFromProps.js



/**
 * Given `this.props`, return a `node` value or undefined.
 *
 * @param {object|React.RefObject} props Component's props
 * @return {React.RefObject|undefined}
 */

var getNodeRefFromProps_getNodeRefFromProps = function getNodeRefFromProps(props) {
  var node = props.node;

  if (Object(isBrowser["a" /* default */])()) {
    if (Object(isRefObject["a" /* default */])(node)) return node;
    return isNil_default()(node) ? Object(toRefObject["a" /* default */])(document.body) : Object(toRefObject["a" /* default */])(node);
  }
};

/* harmony default export */ var lib_getNodeRefFromProps = (getNodeRefFromProps_getNodeRefFromProps);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("nxTg");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ../node_modules/lodash/forEach.js
var forEach = __webpack_require__("kxJY");
var forEach_default = /*#__PURE__*/__webpack_require__.n(forEach);

// EXTERNAL MODULE: ../node_modules/lodash/fp/uniq.js
var uniq = __webpack_require__("lmqp");
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);

// EXTERNAL MODULE: ../node_modules/lodash/fp/identity.js
var identity = __webpack_require__("7v4c");
var identity_default = /*#__PURE__*/__webpack_require__.n(identity);

// EXTERNAL MODULE: ../node_modules/lodash/fp/filter.js
var filter = __webpack_require__("fCyT");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: ../node_modules/lodash/fp/split.js
var split = __webpack_require__("Akcf");
var split_default = /*#__PURE__*/__webpack_require__.n(split);

// EXTERNAL MODULE: ../node_modules/lodash/fp/flatMap.js
var flatMap = __webpack_require__("VSgz");
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);

// EXTERNAL MODULE: ../node_modules/lodash/fp/map.js
var map = __webpack_require__("ON82");
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ../node_modules/lodash/fp/toArray.js
var toArray = __webpack_require__("cdOW");
var toArray_default = /*#__PURE__*/__webpack_require__.n(toArray);

// EXTERNAL MODULE: ../node_modules/lodash/fp/flow.js
var flow = __webpack_require__("eyzW");
var flow_default = /*#__PURE__*/__webpack_require__.n(flow);

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/MountNode/lib/computeClassNames.js









var computeClassNames = flow_default()(toArray_default.a, map_default()('props.className'), flatMap_default()(split_default()(/\s+/)), filter_default()(identity_default.a), uniq_default.a);

/* harmony default export */ var lib_computeClassNames = (computeClassNames);
// EXTERNAL MODULE: ../node_modules/lodash/difference.js
var difference = __webpack_require__("c+bQ");
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/MountNode/lib/computeClassNamesDifference.js


var computeClassNamesDifference_computeClassNamesDifference = function computeClassNamesDifference(prevClassNames, currentClassNames) {
  return [difference_default()(currentClassNames, prevClassNames), difference_default()(prevClassNames, currentClassNames)];
};

/* harmony default export */ var lib_computeClassNamesDifference = (computeClassNamesDifference_computeClassNamesDifference);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/MountNode/lib/handleClassNamesChange.js




var handleClassNamesChange_prevClassNames = new Map();
/**
 * @param {React.RefObject} nodeRef
 * @param {Object[]} components
 */

var handleClassNamesChange_handleClassNamesChange = function handleClassNamesChange(nodeRef, components) {
  var currentClassNames = lib_computeClassNames(components);

  var _computeClassNamesDif = lib_computeClassNamesDifference(handleClassNamesChange_prevClassNames.get(nodeRef), currentClassNames),
      _computeClassNamesDif2 = slicedToArray_default()(_computeClassNamesDif, 2),
      forAdd = _computeClassNamesDif2[0],
      forRemoval = _computeClassNamesDif2[1];

  if (nodeRef.current) {
    forEach_default()(forAdd, function (className) {
      return nodeRef.current.classList.add(className);
    });

    forEach_default()(forRemoval, function (className) {
      return nodeRef.current.classList.remove(className);
    });
  }

  handleClassNamesChange_prevClassNames.set(nodeRef, currentClassNames);
};

/* harmony default export */ var lib_handleClassNamesChange = (handleClassNamesChange_handleClassNamesChange);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/MountNode/lib/NodeRegistry.js



var NodeRegistry_NodeRegistry = function NodeRegistry() {
  var _this = this;

  classCallCheck_default()(this, NodeRegistry);

  defineProperty_default()(this, "add", function (nodeRef, component) {
    if (_this.nodes.has(nodeRef)) {
      var set = _this.nodes.get(nodeRef);

      set.add(component);
      return;
    }

    _this.nodes.set(nodeRef, new Set([component]));
  });

  defineProperty_default()(this, "del", function (nodeRef, component) {
    if (!_this.nodes.has(nodeRef)) return;

    var set = _this.nodes.get(nodeRef);

    if (set.size === 1) {
      _this.nodes["delete"](nodeRef);

      return;
    }

    set["delete"](component);
  });

  defineProperty_default()(this, "emit", function (nodeRef, callback) {
    callback(nodeRef, _this.nodes.get(nodeRef));
  });

  this.nodes = new Map();
};


// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/MountNode/MountNode.js












var nodeRegistry = new NodeRegistry_NodeRegistry();
/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 */

var MountNode_MountNode =
/*#__PURE__*/
function (_Component) {
  inherits_default()(MountNode, _Component);

  function MountNode() {
    classCallCheck_default()(this, MountNode);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(MountNode).apply(this, arguments));
  }

  createClass_default()(MountNode, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var nextClassName = _ref.className;
      var currentClassName = this.props.className;
      return nextClassName !== currentClassName;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var nodeRef = lib_getNodeRefFromProps(this.props);
      nodeRegistry.add(nodeRef, this);
      nodeRegistry.emit(nodeRef, lib_handleClassNamesChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      nodeRegistry.emit(lib_getNodeRefFromProps(this.props), lib_handleClassNamesChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var nodeRef = lib_getNodeRefFromProps(this.props);
      nodeRegistry.del(nodeRef, this);
      nodeRegistry.emit(nodeRef, lib_handleClassNamesChange);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MountNode;
}(react["Component"]);

defineProperty_default()(MountNode_MountNode, "handledProps", ["className", "node"]);


MountNode_MountNode.propTypes =  false ? undefined : {};
// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js + 1 modules
var Portal = __webpack_require__("at+x");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/ModalHeader.js





/**
 * A modal can have a header.
 */

function ModalHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()(className, 'header');
  var rest = Object(getUnhandledProps["a" /* default */])(ModalHeader, props);
  var ElementType = Object(getElementType["a" /* default */])(ModalHeader, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ModalHeader.handledProps = ["as", "children", "className", "content"];
ModalHeader.propTypes =  false ? undefined : {};
ModalHeader.create = Object(factories["c" /* createShorthandFactory */])(ModalHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var Modal_ModalHeader = (ModalHeader);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/ModalContent.js





/**
 * A modal can contain content.
 */

function ModalContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image,
      scrolling = props.scrolling;
  var classes = classnames_default()(className, Object(classNameBuilders["a" /* useKeyOnly */])(image, 'image'), Object(classNameBuilders["a" /* useKeyOnly */])(scrolling, 'scrolling'), 'content');
  var rest = Object(getUnhandledProps["a" /* default */])(ModalContent, props);
  var ElementType = Object(getElementType["a" /* default */])(ModalContent, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ModalContent.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
ModalContent.propTypes =  false ? undefined : {};
ModalContent.create = Object(factories["c" /* createShorthandFactory */])(ModalContent, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ var Modal_ModalContent = (ModalContent);
// EXTERNAL MODULE: ../node_modules/lodash/map.js
var lodash_map = __webpack_require__("w451");
var lodash_map_default = /*#__PURE__*/__webpack_require__.n(lodash_map);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js + 3 modules
var Button = __webpack_require__("eaJJ");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/ModalActions.js















/**
 * A modal can contain a row of actions.
 */

var ModalActions_ModalActions =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ModalActions, _Component);

  function ModalActions() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ModalActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ModalActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleButtonOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          invoke_default()(predefinedProps, 'onClick', e, buttonProps);

          invoke_default()(_this.props, 'onActionClick', e, buttonProps);
        }
      };
    });

    return _this;
  }

  createClass_default()(ModalActions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content;
      var classes = classnames_default()('actions', className);
      var rest = Object(getUnhandledProps["a" /* default */])(ModalActions, this.props);
      var ElementType = Object(getElementType["a" /* default */])(ModalActions, this.props);

      if (!lib["a" /* childrenUtils */].isNil(children)) {
        return react_default.a.createElement(ElementType, extends_default()({}, rest, {
          className: classes
        }), children);
      }

      if (!lib["a" /* childrenUtils */].isNil(content)) {
        return react_default.a.createElement(ElementType, extends_default()({}, rest, {
          className: classes
        }), content);
      }

      return react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes
      }), lodash_map_default()(actions, function (action) {
        return Button["a" /* default */].create(action, {
          overrideProps: _this2.handleButtonOverrides
        });
      }));
    }
  }]);

  return ModalActions;
}(react["Component"]);

defineProperty_default()(ModalActions_ModalActions, "handledProps", ["actions", "as", "children", "className", "content", "onActionClick"]);


ModalActions_ModalActions.propTypes =  false ? undefined : {};
ModalActions_ModalActions.create = Object(factories["c" /* createShorthandFactory */])(ModalActions_ModalActions, function (actions) {
  return {
    actions: actions
  };
});
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/ModalDescription.js





/**
 * A modal can contain a description with one or more paragraphs.
 */

function ModalDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = classnames_default()('description', className);
  var rest = Object(getUnhandledProps["a" /* default */])(ModalDescription, props);
  var ElementType = Object(getElementType["a" /* default */])(ModalDescription, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), lib["a" /* childrenUtils */].isNil(children) ? content : children);
}

ModalDescription.handledProps = ["as", "children", "className", "content"];
ModalDescription.propTypes =  false ? undefined : {};
/* harmony default export */ var Modal_ModalDescription = (ModalDescription);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/utils/index.js
// https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L956
var OFFSET = 0; // https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L990

var PADDING = 50;
/**
 * Ensures that modal can fit viewport without scroll.
 *
 * @param modalRect {DOMRect}
 *
 * @see https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L608
 */

var canFit = function canFit(modalRect) {
  // original: scrollHeight = $module.prop('scrollHeight'),
  // is replaced by .height because scrollHeight provides integer which produces glitches
  // https://github.com/Semantic-Org/Semantic-UI-React/issues/2221
  var scrollHeight = modalRect.height + OFFSET; // $module.outerHeight() + settings.offset

  var height = modalRect.height + OFFSET; // original: $(window).height()

  var contextHeight = window.innerHeight;
  var verticalCenter = contextHeight / 2;
  var topOffset = -(height / 2); // padding with edge of page

  var paddingHeight = PADDING;
  var startPosition = verticalCenter + topOffset; // 0
  // original: scrollHeight > height
  //     ? startPosition + scrollHeight + paddingHeight < contextHeight
  //     : height + paddingHeight * 2 < contextHeight

  return startPosition + scrollHeight + paddingHeight < contextHeight;
};
/**
 * Creates legacy styles for IE11.
 *
 * @param isFitted {Boolean}
 * @param centered {Boolean}
 * @param modalRect {DOMRect}
 *
 * @see https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L718
 */

var getLegacyStyles = function getLegacyStyles(isFitted, centered, modalRect) {
  var marginTop = centered && isFitted ? -(modalRect.height / 2) : 0;
  var marginLeft = -(modalRect.width / 2);
  return {
    marginLeft: marginLeft,
    marginTop: marginTop
  };
}; // https://github.com/Semantic-Org/Semantic-UI/blob/2.4.1/src/definitions/modules/modal.js#L631

/* istanbul ignore next */

var isLegacy = function isLegacy() {
  return !window.ActiveXObject && 'ActiveXObject' in window;
};
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js





























/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal_Modal =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "legacy", Object(isBrowser["a" /* default */])() && isLegacy());

    defineProperty_default()(assertThisInitialized_default()(_this), "ref", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "dimmerRef", Object(react["createRef"])());

    defineProperty_default()(assertThisInitialized_default()(_this), "latestDocumentMouseDownEvent", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "getMountNode", function () {
      return Object(isBrowser["a" /* default */])() ? _this.props.mountNode || document.body : null;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleActionsOverrides", function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          invoke_default()(predefinedProps, 'onActionClick', e, actionProps);

          invoke_default()(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClose", function (e) {
      invoke_default()(_this.props, 'onClose', e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDocumentMouseDown", function (e) {
      _this.latestDocumentMouseDownEvent = e;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDocumentClick", function (e) {
      var closeOnDimmerClick = _this.props.closeOnDimmerClick;
      var currentDocumentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;
      if (!closeOnDimmerClick || Object(doesNodeContainClick["a" /* default */])(_this.ref.current, currentDocumentMouseDownEvent) || Object(doesNodeContainClick["a" /* default */])(_this.ref.current, e)) return;

      invoke_default()(_this.props, 'onClose', e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleIconOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          invoke_default()(predefinedProps, 'onClick', e);

          _this.handleClose(e);
        }
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleOpen", function (e) {
      invoke_default()(_this.props, 'onOpen', e, _this.props);

      _this.trySetState({
        open: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalMount", function (e) {
      var eventPool = _this.props.eventPool;

      _this.setState({
        scrolling: false
      });

      _this.setPositionAndClassNames();

      eventStack["a" /* default */].sub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack["a" /* default */].sub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      invoke_default()(_this.props, 'onMount', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalUnmount", function (e) {
      var eventPool = _this.props.eventPool;
      cancelAnimationFrame(_this.animationRequestId);
      eventStack["a" /* default */].unsub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack["a" /* default */].unsub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      invoke_default()(_this.props, 'onUnmount', e, _this.props);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setDimmerNodeStyle", function () {
      var current = _this.dimmerRef.current;

      if (current && current.style && current.style.display !== 'flex') {
        current.style.setProperty('display', 'flex', 'important');
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "setPositionAndClassNames", function () {
      var _this$props = _this.props,
          centered = _this$props.centered,
          dimmer = _this$props.dimmer;
      var scrolling;
      var newState = {};

      if (_this.ref.current) {
        var rect = _this.ref.current.getBoundingClientRect();

        var isFitted = canFit(rect);
        scrolling = !isFitted; // Styles should be computed for IE11

        var legacyStyles = _this.legacy ? getLegacyStyles(isFitted, centered, rect) : {};

        if (!shallowequal_default()(_this.state.legacyStyles, legacyStyles)) {
          newState.legacyStyles = legacyStyles;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }
      }

      var classes = classnames_default()(Object(classNameBuilders["a" /* useKeyOnly */])(dimmer, 'dimmable dimmed'), Object(classNameBuilders["a" /* useKeyOnly */])(dimmer === 'blurring', ' blurring'), Object(classNameBuilders["a" /* useKeyOnly */])(scrolling, ' scrolling'));
      if (_this.state.mountClasses !== classes) newState.mountClasses = classes;
      if (!isEmpty_default()(newState)) _this.setState(newState);
      _this.animationRequestId = requestAnimationFrame(_this.setPositionAndClassNames);

      _this.setDimmerNodeStyle();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderContent", function (rest) {
      var _this$props2 = _this.props,
          actions = _this$props2.actions,
          basic = _this$props2.basic,
          children = _this$props2.children,
          className = _this$props2.className,
          closeIcon = _this$props2.closeIcon,
          content = _this$props2.content,
          header = _this$props2.header,
          mountNode = _this$props2.mountNode,
          size = _this$props2.size,
          style = _this$props2.style;
      var _this$state = _this.state,
          legacyStyles = _this$state.legacyStyles,
          mountClasses = _this$state.mountClasses,
          scrolling = _this$state.scrolling;
      var classes = classnames_default()('ui', size, Object(classNameBuilders["a" /* useKeyOnly */])(basic, 'basic'), Object(classNameBuilders["a" /* useKeyOnly */])(_this.legacy, 'legacy'), Object(classNameBuilders["a" /* useKeyOnly */])(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = Object(getElementType["a" /* default */])(Modal, _this.props);
      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = Icon["a" /* default */].create(closeIconName, {
        overrideProps: _this.handleIconOverrides
      });
      return react_default.a.createElement(Ref["a" /* default */], {
        innerRef: _this.ref
      }, react_default.a.createElement(ElementType, extends_default()({}, rest, {
        className: classes,
        style: objectSpread_default()({}, legacyStyles, style)
      }), react_default.a.createElement(MountNode_MountNode, {
        className: mountClasses,
        node: mountNode
      }), closeIconJSX, lib["a" /* childrenUtils */].isNil(children) ? react_default.a.createElement(react["Fragment"], null, Modal_ModalHeader.create(header, {
        autoGenerateKey: false
      }), Modal_ModalContent.create(content, {
        autoGenerateKey: false
      }), ModalActions_ModalActions.create(actions, {
        overrideProps: _this.handleActionsOverrides
      })) : children));
    });

    return _this;
  }

  createClass_default()(Modal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handlePortalUnmount();
    } // Do not access document when server side rendering

  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props3 = this.props,
          centered = _this$props3.centered,
          closeOnDocumentClick = _this$props3.closeOnDocumentClick,
          dimmer = _this$props3.dimmer,
          eventPool = _this$props3.eventPool,
          trigger = _this$props3.trigger;
      var mountNode = this.getMountNode(); // Short circuit when server side rendering

      if (!Object(isBrowser["a" /* default */])()) {
        return Object(react["isValidElement"])(trigger) ? trigger : null;
      }

      var unhandled = Object(getUnhandledProps["a" /* default */])(Modal, this.props);
      var portalPropNames = Portal["a" /* default */].handledProps;

      var rest = reduce_default()(unhandled, function (acc, val, key) {
        if (!includes_default()(portalPropNames, key)) acc[key] = val;
        return acc;
      }, {});

      var portalProps = pick_default()(unhandled, portalPropNames); // wrap dimmer modals


      var dimmerClasses = classnames_default()('ui', dimmer === 'inverted' && 'inverted', !centered && 'top aligned', 'page modals dimmer transition visible active'); // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return react_default.a.createElement(Portal["a" /* default */], extends_default()({
        closeOnDocumentClick: closeOnDocumentClick
      }, portalProps, {
        trigger: trigger,
        eventPool: eventPool,
        mountNode: mountNode,
        open: open,
        onClose: this.handleClose,
        onMount: this.handlePortalMount,
        onOpen: this.handleOpen,
        onUnmount: this.handlePortalUnmount
      }), react_default.a.createElement("div", {
        className: dimmerClasses,
        ref: this.dimmerRef
      }, this.renderContent(rest)));
    }
  }]);

  return Modal;
}(AutoControlledComponent["a" /* default */]);

defineProperty_default()(Modal_Modal, "defaultProps", {
  centered: true,
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal'
});

defineProperty_default()(Modal_Modal, "autoControlledProps", ['open']);

defineProperty_default()(Modal_Modal, "Header", Modal_ModalHeader);

defineProperty_default()(Modal_Modal, "Content", Modal_ModalContent);

defineProperty_default()(Modal_Modal, "Description", Modal_ModalDescription);

defineProperty_default()(Modal_Modal, "Actions", ModalActions_ModalActions);

defineProperty_default()(Modal_Modal, "handledProps", ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"]);

Modal_Modal.propTypes =  false ? undefined : {};
/* harmony default export */ var modules_Modal_Modal = __webpack_exports__["a"] = (Modal_Modal);

/***/ }),

/***/ "nnja":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Responsive_Responsive; });

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("gki9");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("K4DB");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("+IV6");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("T1e2");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/lodash/invoke.js
var invoke = __webpack_require__("HKDT");
var invoke_default = /*#__PURE__*/__webpack_require__.n(invoke);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/eventStack/index.js
var eventStack = __webpack_require__("xk7F");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
var isBrowser = __webpack_require__("JcLd");

// EXTERNAL MODULE: ../node_modules/lodash/isNil.js
var isNil = __webpack_require__("MIf1");
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Responsive/lib/isVisible.js


var isVisible_fitsMaxWidth = function fitsMaxWidth(width, maxWidth) {
  return isNil_default()(maxWidth) ? true : width <= maxWidth;
};

var isVisible_fitsMinWidth = function fitsMinWidth(width, minWidth) {
  return isNil_default()(minWidth) ? true : width >= minWidth;
};

var isVisible = function isVisible(width, _ref) {
  var maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth;
  return isVisible_fitsMinWidth(width, minWidth) && isVisible_fitsMaxWidth(width, maxWidth);
};

/* harmony default export */ var lib_isVisible = (isVisible);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/addons/Responsive/Responsive.js













/**
 * Responsive can control visibility of content.
 */

var Responsive_Responsive =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Responsive, _Component);

  function Responsive() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Responsive);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Responsive)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      visible: true
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleResize", function (e) {
      if (_this.ticking) return;
      _this.ticking = true;
      _this.frameId = requestAnimationFrame(function () {
        return _this.handleUpdate(e);
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleUpdate", function (e) {
      _this.ticking = false;
      var visible = _this.state.visible;

      var width = invoke_default()(_this.props, 'getWidth');

      var nextVisible = lib_isVisible(width, _this.props);
      if (visible !== nextVisible) _this.setState({
        visible: nextVisible
      });

      invoke_default()(_this.props, 'onUpdate', e, objectSpread_default()({}, _this.props, {
        width: width
      }));
    });

    return _this;
  }

  createClass_default()(Responsive, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fireOnMount = this.props.fireOnMount;
      eventStack["a" /* default */].sub('resize', this.handleResize, {
        target: 'window'
      });
      if (fireOnMount) this.handleUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      eventStack["a" /* default */].unsub('resize', this.handleResize, {
        target: 'window'
      });
      cancelAnimationFrame(this.frameId);
    } // ----------------------------------------
    // Event handlers
    // ----------------------------------------

  }, {
    key: "render",
    // ----------------------------------------
    // Render
    // ----------------------------------------
    value: function render() {
      var children = this.props.children;
      var visible = this.state.visible;
      var ElementType = Object(getElementType["a" /* default */])(Responsive, this.props);
      var rest = Object(getUnhandledProps["a" /* default */])(Responsive, this.props);
      if (visible) return react_default.a.createElement(ElementType, rest, children);
      return null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var width = invoke_default()(props, 'getWidth');

      var visible = lib_isVisible(width, props);
      return {
        visible: visible
      };
    }
  }]);

  return Responsive;
}(react["Component"]);

defineProperty_default()(Responsive_Responsive, "defaultProps", {
  getWidth: function getWidth() {
    return Object(isBrowser["a" /* default */])() ? window.innerWidth : 0;
  }
});

defineProperty_default()(Responsive_Responsive, "onlyMobile", {
  minWidth: 320,
  maxWidth: 767
});

defineProperty_default()(Responsive_Responsive, "onlyTablet", {
  minWidth: 768,
  maxWidth: 991
});

defineProperty_default()(Responsive_Responsive, "onlyComputer", {
  minWidth: 992
});

defineProperty_default()(Responsive_Responsive, "onlyLargeScreen", {
  minWidth: 1200,
  maxWidth: 1919
});

defineProperty_default()(Responsive_Responsive, "onlyWidescreen", {
  minWidth: 1920
});

defineProperty_default()(Responsive_Responsive, "handledProps", ["as", "children", "fireOnMount", "getWidth", "maxWidth", "minWidth", "onUpdate"]);


Responsive_Responsive.propTypes =  false ? undefined : {};

/***/ }),

/***/ "s22y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visibility; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nxTg");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gki9");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("SDJZ");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NToG");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K4DB");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+IV6");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("T1e2");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eef+");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("HKDT");
/* harmony import */ var lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_invoke__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("kxJY");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("nO+f");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("8kd7");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _stardust_ui_react_component_ref__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("/LCW");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("JcLd");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("xk7F");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("SKbx");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("+okU");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("QtO6");

















/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */

var Visibility =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Visibility, _Component);

  function Visibility() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Visibility);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Visibility)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "calculations", {
      bottomPassed: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      offScreen: false,
      onScreen: false,
      topPassed: false,
      topVisible: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "firedCallbacks", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "ref", Object(react__WEBPACK_IMPORTED_MODULE_15__["createRef"])());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "fire", function (_ref, value) {
      var callback = _ref.callback,
          name = _ref.name;
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props = _this.props,
          continuous = _this$props.continuous,
          once = _this$props.once; // Heads up! For the execution is required:
      // - current value correspond to the fired direction
      // - `continuous` is true or calculation values are different

      var matchesDirection = _this.calculations[value] !== reverse;
      var executionPossible = continuous || _this.calculations[value] !== _this.oldCalculations[value];
      if (matchesDirection && executionPossible) _this.execute(callback, name); // Heads up! We should remove callback from the happened when it's not `once`

      if (!once) _this.firedCallbacks = lodash_without__WEBPACK_IMPORTED_MODULE_11___default()(_this.firedCallbacks, name);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "handleUpdate", function () {
      if (_this.ticking) return;
      _this.ticking = true;
      _this.frameId = requestAnimationFrame(_this.update);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "update", function () {
      if (!_this.mounted) return;
      _this.ticking = false;
      _this.oldCalculations = _this.calculations;
      _this.calculations = _this.computeCalculations();
      _this.pageYOffset = _this.getPageYOffset();
      var _this$props2 = _this.props,
          onBottomPassed = _this$props2.onBottomPassed,
          onBottomPassedReverse = _this$props2.onBottomPassedReverse,
          onBottomVisible = _this$props2.onBottomVisible,
          onBottomVisibleReverse = _this$props2.onBottomVisibleReverse,
          onPassing = _this$props2.onPassing,
          onPassingReverse = _this$props2.onPassingReverse,
          onTopPassed = _this$props2.onTopPassed,
          onTopPassedReverse = _this$props2.onTopPassedReverse,
          onTopVisible = _this$props2.onTopVisible,
          onTopVisibleReverse = _this$props2.onTopVisibleReverse,
          onOffScreen = _this$props2.onOffScreen,
          onOnScreen = _this$props2.onOnScreen,
          updateOn = _this$props2.updateOn;
      var forward = {
        bottomPassed: {
          callback: onBottomPassed,
          name: 'onBottomPassed'
        },
        bottomVisible: {
          callback: onBottomVisible,
          name: 'onBottomVisible'
        },
        passing: {
          callback: onPassing,
          name: 'onPassing'
        },
        offScreen: {
          callback: onOffScreen,
          name: 'onOffScreen'
        },
        onScreen: {
          callback: onOnScreen,
          name: 'onOnScreen'
        },
        topPassed: {
          callback: onTopPassed,
          name: 'onTopPassed'
        },
        topVisible: {
          callback: onTopVisible,
          name: 'onTopVisible'
        }
      };
      var reverse = {
        bottomPassed: {
          callback: onBottomPassedReverse,
          name: 'onBottomPassedReverse'
        },
        bottomVisible: {
          callback: onBottomVisibleReverse,
          name: 'onBottomVisibleReverse'
        },
        passing: {
          callback: onPassingReverse,
          name: 'onPassingReverse'
        },
        topPassed: {
          callback: onTopPassedReverse,
          name: 'onTopPassedReverse'
        },
        topVisible: {
          callback: onTopVisibleReverse,
          name: 'onTopVisibleReverse'
        }
      };

      lodash_invoke__WEBPACK_IMPORTED_MODULE_9___default()(_this.props, 'onUpdate', null, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props, {
        calculations: _this.calculations
      }));

      _this.fireOnPassed(); // Heads up! Reverse callbacks should be fired first


      lodash_forEach__WEBPACK_IMPORTED_MODULE_10___default()(reverse, function (data, value) {
        return _this.fire(data, value, true);
      });

      lodash_forEach__WEBPACK_IMPORTED_MODULE_10___default()(forward, function (data, value) {
        return _this.fire(data, value);
      });

      if (updateOn === 'repaint') _this.handleUpdate();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Visibility, [{
    key: "UNSAFE_componentWillReceiveProps",
    // ----------------------------------------
    // Lifecycle
    // ----------------------------------------
    // eslint-disable-next-line camelcase
    value: function UNSAFE_componentWillReceiveProps(_ref2) {
      var continuous = _ref2.continuous,
          once = _ref2.once,
          context = _ref2.context,
          updateOn = _ref2.updateOn;
      var cleanHappened = continuous !== this.props.continuous || once !== this.props.once || updateOn !== this.props.updateOn; // Heads up! We should clean up array of happened callbacks, if values of these props are changed

      if (cleanHappened) this.firedCallbacks = [];

      if (context !== this.props.context || updateOn !== this.props.updateOn) {
        this.unattachHandlers(this.props.context);
        this.attachHandlers(context, updateOn);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      if (!Object(_lib__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])()) return;
      var _this$props3 = this.props,
          context = _this$props3.context,
          fireOnMount = _this$props3.fireOnMount,
          updateOn = _this$props3.updateOn;
      this.pageYOffset = this.getPageYOffset();
      this.attachHandlers(context, updateOn);
      if (fireOnMount) this.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var context = this.props.context;
      this.unattachHandlers(context);
      this.mounted = false;
    }
  }, {
    key: "attachHandlers",
    value: function attachHandlers(context, updateOn) {
      if (updateOn === 'events') {
        if (context) {
          _lib__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].sub('resize', this.handleUpdate, {
            target: context
          });
          _lib__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].sub('scroll', this.handleUpdate, {
            target: context
          });
        }

        return;
      } // Heads up!
      // We will deal with `repaint` there


      this.handleUpdate();
    }
  }, {
    key: "unattachHandlers",
    value: function unattachHandlers(context) {
      if (context) {
        _lib__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].unsub('resize', this.handleUpdate, {
          target: context
        });
        _lib__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].unsub('scroll', this.handleUpdate, {
          target: context
        });
      }

      if (this.frameId) cancelAnimationFrame(this.frameId);
    } // ----------------------------------------
    // Callback handling
    // ----------------------------------------

  }, {
    key: "execute",
    value: function execute(callback, name) {
      var continuous = this.props.continuous;
      if (!callback) return; // Heads up! When `continuous` is true, callback will be fired always

      if (!continuous && lodash_includes__WEBPACK_IMPORTED_MODULE_12___default()(this.firedCallbacks, name)) return;
      callback(null, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props, {
        calculations: this.calculations
      }));
      this.firedCallbacks.push(name);
    }
  }, {
    key: "fireOnPassed",
    value: function fireOnPassed() {
      var _this2 = this;

      var _this$calculations = this.calculations,
          percentagePassed = _this$calculations.percentagePassed,
          pixelsPassed = _this$calculations.pixelsPassed;
      var onPassed = this.props.onPassed;

      lodash_forEach__WEBPACK_IMPORTED_MODULE_10___default()(onPassed, function (callback, passed) {
        var pixelsValue = Number(passed);

        if (pixelsValue && pixelsPassed >= pixelsValue) {
          _this2.execute(callback, passed);

          return;
        }

        var matchPercentage = "".concat(passed).match(/^(\d+)%$/);
        if (!matchPercentage) return;
        var percentageValue = Number(matchPercentage[1]) / 100;
        if (percentagePassed >= percentageValue) _this2.execute(callback, passed);
      });
    }
  }, {
    key: "computeCalculations",
    // ----------------------------------------
    // Helpers
    // ----------------------------------------
    value: function computeCalculations() {
      var offset = this.props.offset;

      var _this$ref$current$get = this.ref.current.getBoundingClientRect(),
          bottom = _this$ref$current$get.bottom,
          height = _this$ref$current$get.height,
          top = _this$ref$current$get.top,
          width = _this$ref$current$get.width;

      var _normalizeOffset = Object(_lib__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(offset),
          _normalizeOffset2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_normalizeOffset, 2),
          topOffset = _normalizeOffset2[0],
          bottomOffset = _normalizeOffset2[1];

      var newOffset = this.getPageYOffset();
      var direction = newOffset > this.pageYOffset ? 'down' : 'up';
      var topPassed = top < topOffset;
      var bottomPassed = bottom < bottomOffset;
      var pixelsPassed = bottomPassed ? 0 : Math.max(top * -1, 0);
      var percentagePassed = pixelsPassed / height;
      var bottomVisible = bottom >= bottomOffset && bottom <= window.innerHeight;
      var topVisible = top >= topOffset && top <= window.innerHeight;
      var fits = topVisible && bottomVisible;
      var passing = topPassed && !bottomPassed;
      var onScreen = (topVisible || topPassed) && !bottomPassed;
      var offScreen = !onScreen;
      return {
        bottomPassed: bottomPassed,
        bottomVisible: bottomVisible,
        direction: direction,
        fits: fits,
        height: height,
        passing: passing,
        percentagePassed: percentagePassed,
        pixelsPassed: pixelsPassed,
        offScreen: offScreen,
        onScreen: onScreen,
        topPassed: topPassed,
        topVisible: topVisible,
        width: width
      };
    }
  }, {
    key: "getPageYOffset",
    value: function getPageYOffset() {
      var context = this.props.context;

      if (context) {
        // Heads up! `window` doesn't have `pageYOffset` property
        return context === window ? window.pageYOffset : context.scrollTop;
      }

      return 0;
    } // ----------------------------------------
    // Render
    // ----------------------------------------

  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var ElementType = Object(_lib__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])(Visibility, this.props);
      var rest = Object(_lib__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])(Visibility, this.props);
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_stardust_ui_react_component_ref__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        innerRef: this.ref
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(ElementType, rest, children));
    }
  }]);

  return Visibility;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Visibility, "defaultProps", {
  context: Object(_lib__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])() ? window : null,
  continuous: false,
  offset: [0, 0],
  once: true,
  updateOn: 'events'
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Visibility, "handledProps", ["as", "children", "context", "continuous", "fireOnMount", "offset", "onBottomPassed", "onBottomPassedReverse", "onBottomVisible", "onBottomVisibleReverse", "onOffScreen", "onOnScreen", "onPassed", "onPassing", "onPassingReverse", "onTopPassed", "onTopPassedReverse", "onTopVisible", "onTopVisibleReverse", "onUpdate", "once", "updateOn"]);


Visibility.propTypes =  false ? undefined : {};

/***/ }),

/***/ "sK9H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8VmE");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8Jek");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("W0B4");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5uv1");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QtO6");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+okU");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("PeM6");





/**
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */

function Loader(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      indeterminate = props.indeterminate,
      inline = props.inline,
      inverted = props.inverted,
      size = props.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ui', size, Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(active, 'active'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(disabled, 'disabled'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(indeterminate, 'indeterminate'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(inverted, 'inverted'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOnly */ "a"])(children || content, 'text'), Object(_lib__WEBPACK_IMPORTED_MODULE_4__[/* useKeyOrValueAndKey */ "b"])(inline, 'inline'), 'loader', className);
  var rest = Object(_lib__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Loader, props);
  var ElementType = Object(_lib__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Loader, props);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ElementType, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_7__[/* childrenUtils */ "a"].isNil(children) ? content : children);
}

Loader.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
Loader.propTypes =  false ? undefined : {};
/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "xk7F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qur2");
/* harmony import */ var _semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_0__["instance"]);

/***/ }),

/***/ "zaq1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("5WRv");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("8Jek");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__("mXGw");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
var classNameBuilders = __webpack_require__("5uv1");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
var getUnhandledProps = __webpack_require__("QtO6");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/getElementType.js
var getElementType = __webpack_require__("+okU");

// EXTERNAL MODULE: ../node_modules/semantic-ui-react/dist/es/lib/factories.js
var factories = __webpack_require__("9Ep8");

// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js





/**
 * A column sub-component for Grid.
 */

function GridColumn(props) {
  var children = props.children,
      className = props.className,
      computer = props.computer,
      color = props.color,
      floated = props.floated,
      largeScreen = props.largeScreen,
      mobile = props.mobile,
      only = props.only,
      stretched = props.stretched,
      tablet = props.tablet,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      widescreen = props.widescreen,
      width = props.width;
  var classes = classnames_default()(color, Object(classNameBuilders["a" /* useKeyOnly */])(stretched, 'stretched'), Object(classNameBuilders["c" /* useMultipleProp */])(only, 'only'), Object(classNameBuilders["d" /* useTextAlignProp */])(textAlign), Object(classNameBuilders["e" /* useValueAndKey */])(floated, 'floated'), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), Object(classNameBuilders["g" /* useWidthProp */])(computer, 'wide computer'), Object(classNameBuilders["g" /* useWidthProp */])(largeScreen, 'wide large screen'), Object(classNameBuilders["g" /* useWidthProp */])(mobile, 'wide mobile'), Object(classNameBuilders["g" /* useWidthProp */])(tablet, 'wide tablet'), Object(classNameBuilders["g" /* useWidthProp */])(widescreen, 'wide widescreen'), Object(classNameBuilders["g" /* useWidthProp */])(width, 'wide'), 'column', className);
  var rest = Object(getUnhandledProps["a" /* default */])(GridColumn, props);
  var ElementType = Object(getElementType["a" /* default */])(GridColumn, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), children);
}

GridColumn.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
GridColumn.propTypes =  false ? undefined : {};
GridColumn.create = Object(factories["c" /* createShorthandFactory */])(GridColumn, function (children) {
  return {
    children: children
  };
});
/* harmony default export */ var Grid_GridColumn = (GridColumn);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js






/**
 * A row sub-component for Grid.
 */

function GridRow(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      color = props.color,
      columns = props.columns,
      divided = props.divided,
      only = props.only,
      reversed = props.reversed,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;
  var classes = classnames_default()(color, Object(classNameBuilders["a" /* useKeyOnly */])(centered, 'centered'), Object(classNameBuilders["a" /* useKeyOnly */])(divided, 'divided'), Object(classNameBuilders["a" /* useKeyOnly */])(stretched, 'stretched'), Object(classNameBuilders["c" /* useMultipleProp */])(only, 'only'), Object(classNameBuilders["c" /* useMultipleProp */])(reversed, 'reversed'), Object(classNameBuilders["d" /* useTextAlignProp */])(textAlign), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), Object(classNameBuilders["g" /* useWidthProp */])(columns, 'column', true), 'row', className);
  var rest = Object(getUnhandledProps["a" /* default */])(GridRow, props);
  var ElementType = Object(getElementType["a" /* default */])(GridRow, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), children);
}

GridRow.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
GridRow.propTypes =  false ? undefined : {};
/* harmony default export */ var Grid_GridRow = (GridRow);
// CONCATENATED MODULE: ../node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js








/**
 * A grid is used to harmonize negative space in a layout.
 */

function Grid(props) {
  var celled = props.celled,
      centered = props.centered,
      children = props.children,
      className = props.className,
      columns = props.columns,
      container = props.container,
      divided = props.divided,
      doubling = props.doubling,
      inverted = props.inverted,
      padded = props.padded,
      relaxed = props.relaxed,
      reversed = props.reversed,
      stackable = props.stackable,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;
  var classes = classnames_default()('ui', Object(classNameBuilders["a" /* useKeyOnly */])(centered, 'centered'), Object(classNameBuilders["a" /* useKeyOnly */])(container, 'container'), Object(classNameBuilders["a" /* useKeyOnly */])(doubling, 'doubling'), Object(classNameBuilders["a" /* useKeyOnly */])(inverted, 'inverted'), Object(classNameBuilders["a" /* useKeyOnly */])(stackable, 'stackable'), Object(classNameBuilders["a" /* useKeyOnly */])(stretched, 'stretched'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(celled, 'celled'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(divided, 'divided'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(padded, 'padded'), Object(classNameBuilders["b" /* useKeyOrValueAndKey */])(relaxed, 'relaxed'), Object(classNameBuilders["c" /* useMultipleProp */])(reversed, 'reversed'), Object(classNameBuilders["d" /* useTextAlignProp */])(textAlign), Object(classNameBuilders["f" /* useVerticalAlignProp */])(verticalAlign), Object(classNameBuilders["g" /* useWidthProp */])(columns, 'column', true), 'grid', className);
  var rest = Object(getUnhandledProps["a" /* default */])(Grid, props);
  var ElementType = Object(getElementType["a" /* default */])(Grid, props);
  return react_default.a.createElement(ElementType, extends_default()({}, rest, {
    className: classes
  }), children);
}

Grid.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Grid.Column = Grid_GridColumn;
Grid.Row = Grid_GridRow;
Grid.propTypes =  false ? undefined : {};
/* harmony default export */ var Grid_Grid = __webpack_exports__["a"] = (Grid);

/***/ })

}]);
//# sourceMappingURL=stylesVendor.cd1efe7194cb9b1693a1.js.map