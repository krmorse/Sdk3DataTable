/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Rally;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

var _rallySdk = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//todo: templatify, from package.json
var SERVER = 'https://rally1.rallydev.com';

_rallySdk.Sdk.renderApp(_App2.default, {
  server: SERVER
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = __webpack_require__(5);

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _rallySdk = __webpack_require__(0);

var _immutable = __webpack_require__(6);

var _immutable2 = _interopRequireDefault(_immutable);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTableWithToolbar = _rallySdk.Components.DataTableWithToolbar;
// const { Editor, Editors: { KIND }, DataTable } = Components;

var _Components$Data = _rallySdk.Components.Data,
    withSchema = _Components$Data.withSchema,
    fromScope = _Components$Data.fromScope;
var FieldLabel = _rallySdk.View.FieldLabel,
    LoadingMask = _rallySdk.View.LoadingMask;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      severity: _immutable2.default.List(),
      columnNames: _immutable2.default.List(['DragAndDropRank', 'FormattedID', 'Name', 'Blocked', 'PlanEstimate', 'Owner']),
      selectedItems: _immutable2.default.Map(),
      sortByColumnName: 'DragAndDropRank',
      sortDirection: 'ASC'
    }, _this.onColumnChange = function (columnNames) {
      _this.setState({ columnNames: columnNames });
    }, _this.onSelectedItemsChanged = function (selectedItems) {
      _this.setState({ selectedItems: selectedItems });
    }, _this.onReorderColumns = function (columnNames) {
      _this.setState({ columnNames: columnNames });
    }, _this.onSort = function (sortByColumnName, sortDirection) {
      _this.setState({ sortByColumnName: sortByColumnName, sortDirection: sortDirection });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          this.renderGrid()
        )
      );
    }

    // renderSeverityFilter() {
    //   const { context } = this.props;
    //   const { severity } = this.state;

    //   const fieldLabelProps = {
    //     text: 'Filter by Severity:'
    //   };
    //   const editorProps = {
    //     kind: KIND.QUICK_FILTER,
    //     type: 'Defect',
    //     attribute: 'Severity',
    //     scope: context.get('scope'),
    //     onChange: this.onChange,
    //     value: severity
    //   };

    //   return <div className="dropdown">
    //     <FieldLabel { ...fieldLabelProps } />
    //     <Editor { ...editorProps } />
    //   </div>;
    // }

  }, {
    key: 'renderGrid',
    value: function renderGrid() {
      var _props = this.props,
          schema = _props.schema,
          scope = _props.scope;

      if (!schema) {
        return _react2.default.createElement(LoadingMask, null);
      }

      var _state = this.state,
          columnNames = _state.columnNames,
          selectedItems = _state.selectedItems,
          sortByColumnName = _state.sortByColumnName,
          sortDirection = _state.sortDirection;

      var dataTableProps = {
        canDragAndDrop: false,
        columnNames: columnNames,
        onColumnChange: this.onColumnChange,
        onReorderColumns: this.onReorderColumns,
        onSelectedItemsChanged: this.onSelectedItemsChanged,
        onSort: this.onSort,
        componentScope: fromScope(scope),
        selectedItems: selectedItems,
        schema: schema,
        sortByColumnName: sortByColumnName,
        sortDirection: sortDirection,
        typePaths: _immutable2.default.List(['Defect'])
      };

      return _react2.default.createElement(
        'div',
        { className: 'grid' },
        _react2.default.createElement(DataTableWithToolbar, dataTableProps)
      );
    }

    // onChange = (value) => {
    //   this.setState({
    //     severity: value
    //   });
    // }

  }]);

  return App;
}(_react.Component);

App.propTypes = {
  context: _reactImmutableProptypes2.default.map.isRequired
};
exports.default = withSchema(App);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ImmutablePropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);