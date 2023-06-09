/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  main: () => (/* binding */ main)
});

;// CONCATENATED MODULE: external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/args.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable @typescript-eslint/no-explicit-any */

var Args = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Args() {
    _classCallCheck(this, Args);
  }
  _createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      // Check that the default value actually appears in the options.
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);
          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;
          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }
          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c;
      // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.
      var spec_without_default = _objectSpread({}, spec); // Avoid "the operand of a 'delete' operator must be optional"
      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default);
      // Next, check that all default values actually appear in the options.
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";
      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim());
        // Parse all values, return the first error found if any
        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index]));
        // Otherwise, all values are good
        return result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = Class.get(value);
        // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.
        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      var _objectSpread2;
      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });
      // Create an object to hold argument results, with a default value for
      // each argument.
      var res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, specSymbol, argsWithHelp), _defineProperty(_objectSpread2, scriptSymbol, scriptName), _defineProperty(_objectSpread2, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread2, optionsSymbol, options !== null && options !== void 0 ? options : {}), _objectSpread2));
      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _a;
      var metadata = Args.getMetadata(args);
      // Load the list of keys and flags from the arg spec
      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;
        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      });
      // Parse values from settings.
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;
          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting
          var value_str = getProperty(setting);
          if (value_str === "") return undefined; // no setting
          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }
      // Parse new argments from the command line
      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;
        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting
        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;
      var metadata = Args.getMetadata(args);
      printHtml("".concat(metadata.scriptHelp));
      printHtml("");
      printHtml("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;
        if (arg.hidden) return;
        var nameText = "<font color='".concat(isDarkMode() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        printHtml("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = _createForOfIteratorHelper(valueOptions),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;
              if (option.length === 1 || option[1] === undefined) {
                printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        printHtml("");
        printHtml("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);
  return Args;
}()));
var ParseError = /*#__PURE__*/(/* unused pure expression or super */ null && (_createClass(function ParseError(message) {
  _classCallCheck(this, ParseError);
  this.message = message;
})));
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }
  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */
var WrappedArgMetadata = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function WrappedArgMetadata(args) {
    _classCallCheck(this, WrappedArgMetadata);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */
  _createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
  return WrappedArgMetadata;
}()));
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }
  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */
var CommandParser = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */
  _createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;
      this.index = 0; // reset the parser
      var result = new Map();
      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;
        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }
        var startIndex = this.index;
        var key = this.parseKey();
        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }
        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;
      if (this.finished()) throw "Expected ".concat(allowed);
      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;
      var _iterator4 = _createForOfIteratorHelper(searchValue),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;
      var valueEnder = " ";
      var quotes = ["'", '"'];
      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote
        this.consume([valueEnder]); // Consume opening quote
      }

      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      }
      // Consume the value (and closing quote)
      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);
  return CommandParser;
}()));
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTypes.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarElbowNC", "lastFriarHeartNC", "lastFriarNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_sotParcelReturned  false", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/propertyTyping.js

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/property.js
function property_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function property_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? property_ownKeys(Object(source), !0).forEach(function (key) { property_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : property_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function property_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function property_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, property_toPropertyKey(descriptor.key), descriptor); } }
function property_createClass(Constructor, protoProps, staticProps) { if (protoProps) property_defineProperties(Constructor.prototype, protoProps); if (staticProps) property_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function property_defineProperty(obj, key, value) { key = property_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function property_toPropertyKey(arg) { var key = property_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function property_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || property_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function property_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return property_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return property_arrayLikeToArray(o, minLen); }
function property_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var createPropertyGetter = transform => (property, default_) => {
  var value = (0,external_kolmafia_namespaceObject.getProperty)(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter(value => {
  if (value === "") return null;
  var v = toType(value);
  return v === Type.none ? null : v;
});
var getString = createPropertyGetter(value => value);
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getBounty = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Bounty, external_kolmafia_namespaceObject.toBounty);
var getClass = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Class, external_kolmafia_namespaceObject.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Coinmaster, external_kolmafia_namespaceObject.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Effect, external_kolmafia_namespaceObject.toEffect);
var getElement = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Element, external_kolmafia_namespaceObject.toElement);
var getFamiliar = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Familiar, external_kolmafia_namespaceObject.toFamiliar);
var getItem = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Item, external_kolmafia_namespaceObject.toItem);
var getLocation = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Location, external_kolmafia_namespaceObject.toLocation);
var getMonster = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Monster, external_kolmafia_namespaceObject.toMonster);
var getPhylum = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Phylum, external_kolmafia_namespaceObject.toPhylum);
var getServant = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Servant, external_kolmafia_namespaceObject.toServant);
var getSkill = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Skill, external_kolmafia_namespaceObject.toSkill);
var getSlot = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Slot, external_kolmafia_namespaceObject.toSlot);
var getStat = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Stat, external_kolmafia_namespaceObject.toStat);
var getThrall = createMafiaClassPropertyGetter(external_kolmafia_namespaceObject.Thrall, external_kolmafia_namespaceObject.toThrall);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */
function property_get(property, _default) {
  var value = getString(property);
  // Handle known properties.
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isStringProperty(property)) {
    return value;
  }
  // Not a KnownProperty from here on out.
  if (_default instanceof external_kolmafia_namespaceObject.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof external_kolmafia_namespaceObject.Phylum) {
    return getPhylum(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 */
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0,external_kolmafia_namespaceObject.setProperty)(property, stringValue);
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */

function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      prop = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      prop = _ref2[0];
    return [prop, property_get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperty(property, value, callback) {
  return withProperties(property_defineProperty({}, property, value), callback);
}
/**
 * Carries out a callback during which a set of choices will be handled as supplied
 *
 * @param choices Choices to set during callback
 * @param callback Callback to execute with set choices
 * @returns Return value of the supplied callback
 */
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      choice = _ref4[0],
      option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
/**
 * Carries out a callback during which a choice will be handled as supplied
 *
 * @param choice Choice to set during callback
 * @param value How to handle choice during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withChoice(choice, value, callback) {
  return withChoices(property_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    property_classCallCheck(this, PropertiesManager);
    property_defineProperty(this, "properties", {});
  }
  property_createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          propertyName = _Object$entries2$_i[0],
          propertyValue = _Object$entries2$_i[1];
        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = property_get(propertyName);
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
          choiceNumber = _ref6[0],
          choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(property_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        var value = this.properties[property];
        if (value) {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (property_get(property, 0) < value) {
        this.set(property_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (property_get(property, 0) > value) {
        this.set(property_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = property_get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== property_get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2),
          propertyName = _thisProps$_i[0],
          propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = property_objectSpread(property_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);
  return PropertiesManager;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/utils.js
function utils_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = utils_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function utils_slicedToArray(arr, i) { return utils_arrayWithHoles(arr) || utils_iterableToArrayLimit(arr, i) || utils_unsupportedIterableToArray(arr, i) || utils_nonIterableRest(); }
function utils_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function utils_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function utils_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }
function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Type guard against null value
 *
 * @param value Value that can be null
 * @returns Whether the value is not null or... not
 */
function notNull(value) {
  return value !== null;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */
function utils_chunk(array, chunkSize) {
  var result = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = utils_slicedToArray(_ref2, 2),
      item = _ref3[0],
      quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = utils_slicedToArray(_ref4, 2),
      item = _ref5[0],
      quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */
function utils_sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Sum array of numbers
 *
 * @param addends Numbers to sum
 * @returns Sum of numbers
 */
function sumNumbers(addends) {
  return utils_sum(addends, x => x);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */
function utils_arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Reverses keys and values for a given map
 *
 * @param map Map to invert
 * @returns Inverted map
 */
function invertMap(map) {
  var returnValue = new Map();
  var _iterator = utils_createForOfIteratorHelper(map),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = utils_slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      returnValue.set(value, key);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = utils_createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");
  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
        item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value: value,
        item: item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
}
/**
 * Used to collapse a Delayed<T> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T> that represents either a value of type T or a function returning a value of type T.
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
function undelay(delayedObject) {
  return typeof delayedObject === "function" ? delayedObject() : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */
function makeByXFunction(source) {
  return function (options) {
    var _options$val;
    var val = undelay(source);
    if ("default" in options) return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
/**
 * Flattens an array. Basically replacing Array.prototype.flat for which Rhino doesn't yet have an implementation
 *
 * @param arr Array to flatten
 * @param depth Number of layers to flatten by; Infinity for a fully flat array
 * @returns Flattened array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var flatArray = [];
  var _iterator3 = utils_createForOfIteratorHelper(arr),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      if (Array.isArray(item) && depth > 0) {
        flatArray = flatArray.concat(flat(item, depth - 1));
      } else {
        flatArray.push(item);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}
/**
 * @param array Array to select from
 * @returns Random item from array
 */
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
/**
 * Title cases a single word
 *
 * @param word Word to transform
 * @returns Word in title case
 */
var tc = word => word.charAt(0).toUpperCase() + word.slice(1);
;// CONCATENATED MODULE: ./node_modules/libram/dist/template-string.js


var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    (0,external_kolmafia_namespaceObject.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0,external_kolmafia_namespaceObject.print)(message);
  }
};
var createSingleConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.none = Type.none;
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0,external_kolmafia_namespaceObject.abort)();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
var $bounty = createSingleConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
var $bounties = createPluralConstant(external_kolmafia_namespaceObject.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
var $class = createSingleConstant(external_kolmafia_namespaceObject.Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
var $classes = createPluralConstant(external_kolmafia_namespaceObject.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
var $coinmaster = createSingleConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
var $coinmasters = createPluralConstant(external_kolmafia_namespaceObject.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var $effect = createSingleConstant(external_kolmafia_namespaceObject.Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
var $effects = createPluralConstant(external_kolmafia_namespaceObject.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(external_kolmafia_namespaceObject.Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
var $elements = createPluralConstant(external_kolmafia_namespaceObject.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var template_string_$familiar = createSingleConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
var $familiars = createPluralConstant(external_kolmafia_namespaceObject.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var template_string_$item = createSingleConstant(external_kolmafia_namespaceObject.Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var template_string_$items = createPluralConstant(external_kolmafia_namespaceObject.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(external_kolmafia_namespaceObject.Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
var $locations = createPluralConstant(external_kolmafia_namespaceObject.Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(external_kolmafia_namespaceObject.Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
var $phyla = createPluralConstant(external_kolmafia_namespaceObject.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
var $servant = createSingleConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
var $servants = createPluralConstant(external_kolmafia_namespaceObject.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var template_string_$skill = createSingleConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
var $skills = createPluralConstant(external_kolmafia_namespaceObject.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
var $slots = createPluralConstant(external_kolmafia_namespaceObject.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
var $stats = createPluralConstant(external_kolmafia_namespaceObject.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
var $thrall = createSingleConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
var $thralls = createPluralConstant(external_kolmafia_namespaceObject.Thrall);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
var $path = createSingleConstant(external_kolmafia_namespaceObject.Path);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
var $paths = createPluralConstant(external_kolmafia_namespaceObject.Path);
;// CONCATENATED MODULE: ./node_modules/libram/dist/lib.js
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function lib_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, lib_toPropertyKey(descriptor.key), descriptor); } }
function lib_createClass(Constructor, protoProps, staticProps) { if (protoProps) lib_defineProperties(Constructor.prototype, protoProps); if (staticProps) lib_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function lib_toPropertyKey(arg) { var key = lib_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function lib_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function lib_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function lib_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = lib_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function lib_slicedToArray(arr, i) { return lib_arrayWithHoles(arr) || lib_iterableToArrayLimit(arr, i) || lib_unsupportedIterableToArray(arr, i) || lib_nonIterableRest(); }
function lib_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function lib_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lib_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lib_arrayLikeToArray(o, minLen); }
function lib_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function lib_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function lib_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/** @module GeneralLibrary */





/**
 * Determines the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 * @returns Maximum number of songs for player
 */
function getSongLimit() {
  return 3 + (booleanModifier("Four Songs") ? 1 : 0) + numericModifier("Additional Song");
}
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof external_kolmafia_namespaceObject.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof external_kolmafia_namespaceObject.Effect ? (0,external_kolmafia_namespaceObject.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 * @returns List of Effects
 */
function getActiveEffects() {
  return Object.keys(myEffects()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 * @returns List of song Effects
 */
function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 * @returns Number of songs
 */
function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Determine whether player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 * @returns Whether player can remember another song
 */
function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Determine the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 * @returns Locations for monster
 */
function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in appearanceRates(location));
}
/**
 * Determine the player's remaining liver space
 *
 * @category General
 * @returns Remaining liver space
 */
function getRemainingLiver() {
  return inebrietyLimit() - myInebriety();
}
/**
 * Determine the player's remaining stomach space
 *
 * @category General
 * @returns Remaining stomach space
 */
function getRemainingStomach() {
  return fullnessLimit() - myFullness();
}
/**
 * Determine the player's remaining spleen space
 *
 * @category General
 * @returns Remaining spleen space
 */
function getRemainingSpleen() {
  return spleenLimit() - mySpleenUse();
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (thing instanceof external_kolmafia_namespaceObject.Effect) {
    return (0,external_kolmafia_namespaceObject.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof external_kolmafia_namespaceObject.Familiar) {
    return (0,external_kolmafia_namespaceObject.haveFamiliar)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Item) {
    return (0,external_kolmafia_namespaceObject.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof external_kolmafia_namespaceObject.Servant) {
    return (0,external_kolmafia_namespaceObject.haveServant)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Skill) {
    return (0,external_kolmafia_namespaceObject.haveSkill)(thing);
  }
  if (thing instanceof external_kolmafia_namespaceObject.Thrall) {
    var thrall = (0,external_kolmafia_namespaceObject.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
/**
 * Determine whether a given item is in the player's campground
 *
 * @category General
 * @param item The Item KoLmafia uses to represent the campground item
 * @returns Whether the item is in the campground
 */
function lib_haveInCampground(item) {
  return Object.keys(getCampground()).map(i => Item.get(i)).includes(item);
}
var Wanderer;
(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Determine whether the player has the specified counter
 *
 * @param counterName Name of the counter
 * @param minTurns Minimum turns the counter is set to
 * @param maxTurns Maximum turns the counter is set to
 * @category General
 * @returns Whether player has the counter
 */
function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return getCounters(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Determine whether the player has the specified wanderer's counter
 *
 * @param wanderer Wanderer to check
 * @category Wanderers
 * @returns Whether player has the wanderer counter
 */
function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Determine whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 * @returns Whether the vote wanderer is due
 */
function isVoteWandererNow() {
  return totalTurnsPlayed() % 11 === 1 && get("lastVoteMonsterTurn") < totalTurnsPlayed();
}
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Whether the wanderer is due
 */
function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }
  if (wanderer === Wanderer.Kramco) {
    return true;
  }
  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }
  if (wanderer === Wanderer.Familiar) {
    return get("_hipsterAdv") < 7;
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Determines the chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 * @returns Chance that the sausage goblin is due (as a number between 0 and 1)
 */
function getKramcoWandererChance() {
  var fights = property_get("_sausageFights");
  var lastFight = property_get("_lastSausageMonsterTurn");
  var totalTurns = (0,external_kolmafia_namespaceObject.totalTurnsPlayed)();
  if (fights < 1) {
    return lastFight === totalTurns && (0,external_kolmafia_namespaceObject.myTurncount)() < 1 ? 0.5 : 1.0;
  }
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
/**
 * Determines the chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 * @returns Chance that the familiar wanderer is due (as a number between 0 and 1)
 */
function getFamiliarWandererChance() {
  var totalFights = get("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];
  if (totalFights < 4) {
    return probability[totalFights];
  }
  return totalFights > 7 ? 0.0 : 0.1;
}
/**
 * Determines the chance the player will encounter the specified wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 * @returns Chance that the specified wanderer is due (as a number between 0 and 1)
 */
function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }
  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }
  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }
  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }
  var counters = get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);
  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - myTurncount();
    return 1.0 / window;
  }
  return 0.0;
}
/**
 * Determines whether the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 * @returns Whether it is the player's current familiar
 */
function isCurrentFamiliar(familiar) {
  return myFamiliar() === familiar;
}
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @returns List of items in the fold group
 */
function getFoldGroup(item) {
  return Object.entries((0,external_kolmafia_namespaceObject.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = lib_slicedToArray(_ref, 2),
      a = _ref3[1];
    var _ref4 = lib_slicedToArray(_ref2, 2),
      b = _ref4[1];
    return a - b;
  }).map(_ref5 => {
    var _ref6 = lib_slicedToArray(_ref5, 1),
      i = _ref6[0];
    return external_kolmafia_namespaceObject.Item.get(i);
  });
}
/**
 * Determines the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 * @returns List of items in the zap group
 */
function getZapGroup(item) {
  return Object.keys(getRelated(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */
function getBanishedMonsters() {
  var banishes = chunk(get("banishedMonsters").split(":"), 3);
  var result = new Map();
  var _iterator = lib_createForOfIteratorHelper(banishes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = lib_slicedToArray(_step.value, 2),
        foe = _step$value[0],
        banisher = _step$value[1];
      if (foe === undefined || banisher === undefined) break;
      // toItem doesn"t error if the item doesn"t exist, so we have to use that.
      var banisherItem = toItem(banisher);
      if (banisher.toLowerCase() === "saber force") {
        result.set($skill(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Use the Force"]))), Monster.get(foe));
      } else if (banisher.toLowerCase() === "nanorhino") {
        result.set($skill(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Unleash Nanites"]))), Monster.get(foe));
      } else if ([Item.none, Item.get("training scroll:  Snokebomb"), Item.get("tomayohawk-style reflex hammer"), null].includes(banisherItem)) {
        if (Skill.get(banisher) === $skill.none) {
          break;
        } else {
          result.set(Skill.get(banisher), Monster.get(foe));
        }
      } else {
        result.set(banisherItem, Monster.get(foe));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
/**
 * Determines whether the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 * @returns Whether item is usable
 */
function canUse(item) {
  var path = myPath();
  if (path !== Path.get("Nuclear Autumn")) {
    if ($items(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }
  if (path === Path.get("G-Lover")) {
    if (!item.name.toLowerCase().includes("g")) return false;
  }
  if (path === Path.get("Bees Hate You")) {
    if (item.name.toLowerCase().includes("b")) return false;
  }
  return true;
}
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 * @returns The thing specified or `null`
 */
function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.none ? null : thing;
  }
  if (thing instanceof Familiar) {
    return thing === Familiar.none ? null : thing;
  }
  if (thing instanceof Item) {
    return thing === Item.none ? null : thing;
  }
  return thing;
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value fo range
 */
function getAverage(range) {
  var _range$match;
  if (range.indexOf("-") < 0) return Number(range);
  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
    _ref8 = lib_slicedToArray(_ref7, 3),
    lower = _ref8[1],
    upper = _ref8[2];
  return (Number(lower) + Number(upper)) / 2;
}
/**
 * Deternube tge average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */
function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */
function uneffect(effect) {
  return (0,external_kolmafia_namespaceObject.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */
function getPlayerFromIdOrName(idOrName) {
  var id = typeof idOrName === "number" ? idOrName : parseInt(getPlayerId(idOrName));
  return {
    name: getPlayerName(id),
    id: id
  };
}
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }
    return parseInt(stringStep.substring(4), 10);
  }
}
var EnsureError = /*#__PURE__*/function (_Error) {
  _inherits(EnsureError, _Error);
  var _super = _createSuper(EnsureError);
  function EnsureError(cause, reason) {
    var _this;
    lib_classCallCheck(this, EnsureError);
    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }
  return lib_createClass(EnsureError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if ((0,external_kolmafia_namespaceObject.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!(0,external_kolmafia_namespaceObject.cliExecute)(ef.default) || (0,external_kolmafia_namespaceObject.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Determiens the average value (based on mallprice and autosell) of a collection of items
 *
 * @param items items whose value you care about
 * @returns Average value of items
 */
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;
    if (item.discardable) {
      valueMap.set(item, mallPrice(item) > Math.max(2 * autosellPrice(item), 100) ? MALL_VALUE_MODIFIER * mallPrice(item) : autosellPrice(item));
    } else {
      valueMap.set(item, mallPrice(item) > 100 ? MALL_VALUE_MODIFIER * mallPrice(item) : 0);
    }
    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var Environment = {
  Outdoor: "outdoor",
  Indoor: "indoor",
  Underground: "underground",
  Underwater: "underwater"
};
/**
 * Determines the weight-coefficient of any leprechaunning that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Cactus Bud, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose leprechaun multiplier you're interested in
 * @returns Weight-coefficient
 */
function findLeprechaunMultiplier(familiar) {
  if (familiar === $familiar(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Mutant Cactus Bud"])))) {
    return numericModifier(familiar, "Leprechaun Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var meatBonus = numericModifier(familiar, "Meat Drop", 1, $item.none);
  if (meatBonus === 0) return 0;
  return Math.pow(Math.sqrt(meatBonus / 2 + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
/**
 * Determines the weight-coefficient of any baby gravy fairying that this familiar may find itself doing
 * Assumes the familiar is nude and thus fails for hatrack & pantsrack
 * For the Mutant Fire Ant, returns the efficacy-multiplier instead
 *
 * @param familiar The familiar whose fairy multiplier you're interested in
 * @returns Weight-coefficient
 */
function findFairyMultiplier(familiar) {
  if (familiar === $familiar(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Mutant Fire Ant"])))) {
    return numericModifier(familiar, "Fairy Effectiveness", 1, $item.none);
  }
  if (familiar === $familiar(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Reanimated Reanimator"])))) return 0;
  var itemBonus = numericModifier(familiar, "Item Drop", 1, $item.none);
  if (itemBonus === 0) return 0;
  return Math.pow(Math.sqrt(itemBonus + 55 / 4 + 3) - Math.sqrt(55) / 2, 2);
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return flat((0,external_kolmafia_namespaceObject.holiday)().split("/").map(holiday => {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
}
/**
 * Determines whether or not we can safely call visitUrl(), based on whether we're in a fight, multi-fight, choice, etc
 *
 * @returns Whether urls can be safely visited
 */
function canVisitUrl() {
  if (currentRound()) {
    logger.debug("Current round is ".concat(currentRound(), "; you're in combat."));
    return false;
  }
  if (inMultiFight()) {
    logger.debug("You're in a multifight.");
    return false;
  }
  if (choiceFollowsFight()) {
    logger.debug("A choice follows this fight.");
    return false;
  }
  if (handlingChoice()) {
    logger.debug("You're currently in a choice adventure");
    return false;
  }
  return true;
}
/**
 * Calculate damage taken from a specific element after factoring in resistance
 *
 * @param baseDamage Base damage
 * @param element Element
 * @returns damage after factoring in resistances
 */
function damageTakenByElement(baseDamage, element) {
  if (baseDamage < 0) return 1;
  var res = elementalResistance(element);
  return Math.max(1, Math.ceil(baseDamage - baseDamage * res / 100));
}
var telescopeStats = new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Get information from telescope
 *
 * @returns An object with all information the telescope gives you about the sorceress's contests and maze
 */
function telescope() {
  return {
    statContest: telescopeStats.get(get("telescope1")),
    elementContest: telescopeElements.get(get("telescope2")),
    hedge1: hedgeTrap1.get(get("telescope3")),
    hedge2: hedgeTrap2.get(get("telescope4")),
    hedge3: hedgeTrap3.get(get("telescope5"))
  };
}
/**
 * Visit the desc_x.php page for a given thing
 *
 * @param thing Thing to examine
 * @returns Contents of desc_x.php page
 */
function examine(thing) {
  var url = thing instanceof Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return visitUrl(url);
}
/**
 * Picks an option based on your primestat
 *
 * @param options An object keyed by stat; it must either contain all stats, or have a `default` parameter.
 * @returns The option corresponding to your primestat.
 */
var byStat = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myPrimestat)().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
 * @returns The option corresponding to your player class.
 */
var byClass = makeByXFunction(() => (0,external_kolmafia_namespaceObject.myClass)().toString());
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */
function lib_directlyUse(item) {
  return (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Empty a slot, or unequip all instances of a given equipped item
 *
 * @param thing The slot or item in question
 * @returns Whether we succeeded completely--`false` if we unequip some but not all instances of the item.
 */
function unequip(thing) {
  if (thing instanceof Slot) return equip(thing, $item.none);
  var failedSlots = Slot.all().filter(s => {
    // Filter the slot out if it doesn't contain the relevant item
    if (equippedItem(s) !== thing) return false;
    // Filter the slot out if we succeed at unequipping it
    return !unequip(thing);
    // This leaves only slots that do contain the item but that we failed to unequip
  });

  if (failedSlots.length) logger.debug("Failed to unequip ".concat(thing, " from slots ").concat(failedSlots.join(", ")));
  return failedSlots.length === 0;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/overlappingNames.js
/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"];
var overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Cleave", "Boil", "Slice", "Rainbow"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/combat.js
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = combat_getPrototypeOf(object); if (object === null) break; } return object; }
function combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function combat_toConsumableArray(arr) { return combat_arrayWithoutHoles(arr) || combat_iterableToArray(arr) || combat_unsupportedIterableToArray(arr) || combat_nonIterableSpread(); }
function combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return combat_arrayLikeToArray(o, minLen); }
function combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return combat_arrayLikeToArray(arr); }
function combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function combat_defineProperty(obj, key, value) { key = combat_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, combat_toPropertyKey(descriptor.key), descriptor); } }
function combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) combat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function combat_toPropertyKey(arg) { var key = combat_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function combat_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) combat_setPrototypeOf(subClass, superClass); }
function combat_createSuper(Derived) { var hasNativeReflectConstruct = combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return combat_possibleConstructorReturn(this, result); }; }
function combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return combat_assertThisInitialized(self); }
function combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function combat_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; combat_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !combat_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return combat_construct(Class, arguments, combat_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return combat_setPrototypeOf(Wrapper, Class); }; return combat_wrapNativeSuper(Class); }
function combat_construct(Parent, args, Class) { if (combat_isNativeReflectConstruct()) { combat_construct = Reflect.construct.bind(); } else { combat_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) combat_setPrototypeOf(instance, Class.prototype); return instance; }; } return combat_construct.apply(null, arguments); }
function combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function combat_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function combat_setPrototypeOf(o, p) { combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return combat_setPrototypeOf(o, p); }
function combat_getPrototypeOf(o) { combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return combat_getPrototypeOf(o); }




var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var macroMatches = (0,external_kolmafia_namespaceObject.xpath)((0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value"));
  if (macroMatches.length === 0) {
    (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0,external_kolmafia_namespaceObject.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? external_kolmafia_namespaceObject.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.includes(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return external_kolmafia_namespaceObject.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
var InvalidMacroError = /*#__PURE__*/function (_Error) {
  combat_inherits(InvalidMacroError, _Error);
  var _super = combat_createSuper(InvalidMacroError);
  function InvalidMacroError() {
    combat_classCallCheck(this, InvalidMacroError);
    return _super.apply(this, arguments);
  }
  return combat_createClass(InvalidMacroError);
}( /*#__PURE__*/combat_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {
  function Macro() {
    combat_classCallCheck(this, Macro);
    combat_defineProperty(this, "components", []);
    combat_defineProperty(this, "name", MACRO_NAME);
  }
  combat_createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;
      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, combat_toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));
      (_this$components = this.components).push.apply(_this$components, combat_toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return (0,external_kolmafia_namespaceObject.visitUrl)("fight.php?action=macro&macrotext=".concat((0,external_kolmafia_namespaceObject.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if ((0,external_kolmafia_namespaceObject.getAutoAttack)() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }
      (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.name), "&macrotext=").concat((0,external_kolmafia_namespaceObject.urlEncode)(this.toString()), "&action=save"), true, true);
      (0,external_kolmafia_namespaceObject.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue) {
      return this.step("if !(".concat(Macro.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, combat_toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, combat_toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, combat_toConsumableArray(property_get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0,external_kolmafia_namespaceObject.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = combat_createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _Macro$cachedMacroIds;
          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0,external_kolmafia_namespaceObject.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      var ballsCondition = "";
      if (condition instanceof external_kolmafia_namespaceObject.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof external_kolmafia_namespaceObject.Effect) {
        ballsCondition = "haseffect ".concat(condition.id);
      } else if (condition instanceof external_kolmafia_namespaceObject.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof external_kolmafia_namespaceObject.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof external_kolmafia_namespaceObject.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof external_kolmafia_namespaceObject.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }
      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);
  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */
combat_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
combat_defineProperty(Macro, "cachedMacroIds", new Map());
combat_defineProperty(Macro, "cachedAutoAttacks", new Map());
function adventureMacro(loc, macro) {
  macro.save();
  setAutoAttack(0);
  try {
    adv1(loc, 0, "");
    while (inMultiFight()) runCombat();
    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */
function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;
  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();
  try {
    adv1(loc, 0, "");
    while (inMultiFight()) runCombat();
    if (choiceFollowsFight()) visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
var StrictMacro = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_Macro) {
  combat_inherits(StrictMacro, _Macro);
  var _super2 = combat_createSuper(StrictMacro);
  function StrictMacro() {
    combat_classCallCheck(this, StrictMacro);
    return _super2.apply(this, arguments);
  }
  combat_createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      var _get2;
      for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        skills[_key7] = arguments[_key7];
      }
      return (_get2 = _get(combat_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      var _get3;
      for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        items[_key8] = arguments[_key8];
      }
      return (_get3 = _get(combat_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      var _get4;
      for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        skills[_key9] = arguments[_key9];
      }
      return (_get4 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      var _get5;
      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }
      return (_get5 = _get(combat_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      var _get6;
      for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        skills[_key11] = arguments[_key11];
      }
      return (_get6 = _get(combat_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
  }], [{
    key: "skill",
    value: function skill() {
      var _this8;
      return (_this8 = new this()).skill.apply(_this8, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this9;
      return (_this9 = new this()).item.apply(_this9, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;
      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;
      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this12;
      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    }
  }]);
  return StrictMacro;
}(Macro)));
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/combat.js
function dist_combat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) dist_combat_setPrototypeOf(subClass, superClass); }
function dist_combat_setPrototypeOf(o, p) { dist_combat_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dist_combat_setPrototypeOf(o, p); }
function dist_combat_createSuper(Derived) { var hasNativeReflectConstruct = dist_combat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = dist_combat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = dist_combat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return dist_combat_possibleConstructorReturn(this, result); }; }
function dist_combat_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return dist_combat_assertThisInitialized(self); }
function dist_combat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function dist_combat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function dist_combat_getPrototypeOf(o) { dist_combat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dist_combat_getPrototypeOf(o); }
function dist_combat_toConsumableArray(arr) { return dist_combat_arrayWithoutHoles(arr) || dist_combat_iterableToArray(arr) || dist_combat_unsupportedIterableToArray(arr) || dist_combat_nonIterableSpread(); }
function dist_combat_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function dist_combat_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function dist_combat_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return dist_combat_arrayLikeToArray(arr); }
function dist_combat_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dist_combat_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function dist_combat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dist_combat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dist_combat_arrayLikeToArray(o, minLen); }
function dist_combat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function dist_combat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dist_combat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dist_combat_toPropertyKey(descriptor.key), descriptor); } }
function dist_combat_createClass(Constructor, protoProps, staticProps) { if (protoProps) dist_combat_defineProperties(Constructor.prototype, protoProps); if (staticProps) dist_combat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dist_combat_toPropertyKey(arg) { var key = dist_combat_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function dist_combat_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */
var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    dist_combat_classCallCheck(this, CombatStrategy);
    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */
  dist_combat_createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
        var _iterator = dist_combat_createForOfIteratorHelper(monsters),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
        var _iterator2 = dist_combat_createForOfIteratorHelper(monsters),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof external_kolmafia_namespaceObject.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = dist_combat_createForOfIteratorHelper(monsters),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof external_kolmafia_namespaceObject.Monster) monsters = [monsters];
      var _iterator4 = dist_combat_createForOfIteratorHelper(monsters),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = dist_combat_toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = dist_combat_toConsumableArray(this.default_macro);
      var _iterator5 = dist_combat_createForOfIteratorHelper(this.macros),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], dist_combat_toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (this.default_autoattack) result.default_autoattack = dist_combat_toConsumableArray(this.default_autoattack);
      var _iterator6 = dist_combat_createForOfIteratorHelper(this.autoattacks),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], dist_combat_toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = dist_combat_createForOfIteratorHelper(this.actions),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], dist_combat_toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function compile(resources, defaults, location) {
      var _a, _b;
      var result = new Macro();
      // If there is macro precursor, do it now
      if (this.starting_macro) {
        result.step.apply(result, dist_combat_toConsumableArray(this.starting_macro.map(undelay)));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, dist_combat_toConsumableArray(this.default_macro.map(undelay)));
      // Perform any monster-specific actions (these should end the fight)
      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;
        var macro = (_a = resources.getMacro(action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile());
      // Perform the non-monster specific action (these should end the fight)
      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function compileAutoattack() {
      var result = new Macro();
      // Perform any monster-specific autoattacks (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, dist_combat_toConsumableArray(value.map(undelay))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_autoattack) result.step.apply(result, dist_combat_toConsumableArray(this.default_autoattack.map(undelay)));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = dist_combat_createForOfIteratorHelper(this.ccs_entries),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(dist_combat_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        dist_combat_inherits(CombatStrategyWithActions, _this);
        var _super = dist_combat_createSuper(CombatStrategyWithActions);
        function CombatStrategyWithActions() {
          dist_combat_classCallCheck(this, CombatStrategyWithActions);
          return _super.apply(this, arguments);
        }
        return dist_combat_createClass(CombatStrategyWithActions);
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var proto = CombatStrategyWithActions.prototype;
      var _iterator10 = dist_combat_createForOfIteratorHelper(actions),
        _step10;
      try {
        var _loop = function _loop() {
          var action = _step10.value;
          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          _loop();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
  return CombatStrategy;
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */
var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    dist_combat_classCallCheck(this, CompressedMacro);
    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */
  dist_combat_createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;
      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);
  return CompressedMacro;
}();
/**
 * A class for providing resources to fulfil combat actions.
 */
var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    dist_combat_classCallCheck(this, CombatResources);
    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */
  dist_combat_createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof external_kolmafia_namespaceObject.Item) return new Macro().item(resource.do);
      if (resource.do instanceof external_kolmafia_namespaceObject.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do);
    }
  }]);
  return CombatResources;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/logger.js
var _defaultHandlers;
function logger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function logger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, logger_toPropertyKey(descriptor.key), descriptor); } }
function logger_createClass(Constructor, protoProps, staticProps) { if (protoProps) logger_defineProperties(Constructor.prototype, protoProps); if (staticProps) logger_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function logger_defineProperty(obj, key, value) { key = logger_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function logger_toPropertyKey(arg) { var key = logger_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function logger_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var LogLevels;
(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = (_defaultHandlers = {}, logger_defineProperty(_defaultHandlers, LogLevels.INFO, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<b>[Libram Info]</b> ".concat(message));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.WARNING, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.ERROR, error => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(error));
  return;
}), logger_defineProperty(_defaultHandlers, LogLevels.DEBUG, message => {
  (0,external_kolmafia_namespaceObject.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
  (0,external_kolmafia_namespaceObject.logprint)("[Libram] ".concat(message));
  return;
}), _defaultHandlers);
var Logger = /*#__PURE__*/function () {
  function Logger() {
    logger_classCallCheck(this, Logger);
    logger_defineProperty(this, "handlers", defaultHandlers);
  }
  logger_createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
  return Logger;
}();
logger_defineProperty(Logger, "currentLevel", LogLevels.ERROR);
/* harmony default export */ const dist_logger = (new Logger());
;// CONCATENATED MODULE: ./node_modules/libram/dist/maximize.js
var maximize_templateObject, maximize_templateObject2, maximize_templateObject3, maximize_templateObject4, maximize_templateObject5, maximize_templateObject6, maximize_templateObject7, maximize_templateObject8, maximize_templateObject9, maximize_templateObject10, maximize_templateObject11, maximize_templateObject12, maximize_templateObject13, maximize_templateObject14, maximize_templateObject15, maximize_templateObject16, maximize_templateObject17, maximize_templateObject18, maximize_templateObject19, maximize_templateObject20, maximize_templateObject21, maximize_templateObject22, maximize_templateObject23, maximize_templateObject24, maximize_templateObject25, maximize_templateObject26, maximize_templateObject27, maximize_templateObject28, maximize_templateObject29, maximize_templateObject30, maximize_templateObject31, maximize_templateObject32, maximize_templateObject33, maximize_templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48;
function maximize_slicedToArray(arr, i) { return maximize_arrayWithHoles(arr) || maximize_iterableToArrayLimit(arr, i) || maximize_unsupportedIterableToArray(arr, i) || maximize_nonIterableRest(); }
function maximize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maximize_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function maximize_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function maximize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, maximize_toPropertyKey(descriptor.key), descriptor); } }
function maximize_createClass(Constructor, protoProps, staticProps) { if (protoProps) maximize_defineProperties(Constructor.prototype, protoProps); if (staticProps) maximize_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function maximize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function maximize_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = maximize_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function maximize_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function maximize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function maximize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? maximize_ownKeys(Object(source), !0).forEach(function (key) { maximize_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : maximize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function maximize_defineProperty(obj, key, value) { key = maximize_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function maximize_toPropertyKey(arg) { var key = maximize_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function maximize_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function maximize_toConsumableArray(arr) { return maximize_arrayWithoutHoles(arr) || maximize_iterableToArray(arr) || maximize_unsupportedIterableToArray(arr) || maximize_nonIterableSpread(); }
function maximize_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function maximize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return maximize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return maximize_arrayLikeToArray(o, minLen); }
function maximize_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function maximize_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return maximize_arrayLikeToArray(arr); }
function maximize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




function toMaximizerName(_ref) {
  var name = _ref.name,
    id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(maximize_toConsumableArray(defaultOptions.forceEquip), maximize_toConsumableArray((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(maximize_toConsumableArray(defaultOptions.preventEquip), maximize_toConsumableArray((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(item => {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item));
    }),
    bonusEquip: new Map([].concat(maximize_toConsumableArray(defaultOptions.bonusEquip), maximize_toConsumableArray((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(maximize_toConsumableArray(defaultOptions.preventSlot), maximize_toConsumableArray((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: maximize_objectSpread(maximize_objectSpread({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */
function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var modeableItems = {
  backupcamera: template_string_$item(maximize_templateObject || (maximize_templateObject = maximize_taggedTemplateLiteral(["backup camera"]))),
  umbrella: template_string_$item(maximize_templateObject2 || (maximize_templateObject2 = maximize_taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: template_string_$item(maximize_templateObject3 || (maximize_templateObject3 = maximize_taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: template_string_$item(maximize_templateObject4 || (maximize_templateObject4 = maximize_taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: template_string_$item(maximize_templateObject5 || (maximize_templateObject5 = maximize_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: template_string_$item(maximize_templateObject6 || (maximize_templateObject6 = maximize_taggedTemplateLiteral(["Jurassic Parka"])))
};
var modeableState = {
  backupcamera: () => (0,external_kolmafia_namespaceObject.getProperty)("backupCameraMode"),
  umbrella: () => (0,external_kolmafia_namespaceObject.getProperty)("umbrellaState"),
  snowsuit: () => (0,external_kolmafia_namespaceObject.getProperty)("snowsuit"),
  edpiece: () => (0,external_kolmafia_namespaceObject.getProperty)("edPiece"),
  retrocape: () => (0,external_kolmafia_namespaceObject.getProperty)("retroCapeSuperhero") + " " + (0,external_kolmafia_namespaceObject.getProperty)("retroCapeWashingInstructions"),
  parka: () => (0,external_kolmafia_namespaceObject.getProperty)("parkaMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */
function getCurrentModes() {
  var modes = {};
  var _iterator = maximize_createForOfIteratorHelper(modeableCommands),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */
function applyModes(modes) {
  var _iterator2 = maximize_createForOfIteratorHelper(modeableCommands),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          (0,external_kolmafia_namespaceObject.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
// Subset of slots that are valid for caching.
var cachedSlots = $slots(maximize_templateObject7 || (maximize_templateObject7 = maximize_taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
var CacheEntry = /*#__PURE__*/maximize_createClass(function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  maximize_classCallCheck(this, CacheEntry);
  maximize_defineProperty(this, "equipment", void 0);
  maximize_defineProperty(this, "rider", void 0);
  maximize_defineProperty(this, "familiar", void 0);
  maximize_defineProperty(this, "canEquipItemCount", void 0);
  maximize_defineProperty(this, "modes", void 0);
  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
});
var _outfitSlots = /*#__PURE__*/new WeakMap();
var _useHistory = /*#__PURE__*/new WeakMap();
var _maxSize = /*#__PURE__*/new WeakMap();
var OutfitLRUCache = /*#__PURE__*/function () {
  function OutfitLRUCache(maxSize) {
    maximize_classCallCheck(this, OutfitLRUCache);
    // Current outfits allocated
    _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: true,
      value: []
    });
    // Array of indices into #outfitSlots in order of use. Most recent at the front.
    _classPrivateFieldInitSpec(this, _useHistory, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _maxSize, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  maximize_createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(maximize_toConsumableArray(_classPrivateFieldGet(this, _useHistory).filter(i => i !== index))));
      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();
        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }
        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);
        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _outfitSlots, []);
      _classPrivateFieldSet(this, _useHistory, []);
    }
  }]);
  return OutfitLRUCache;
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */
maximize_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0,external_kolmafia_namespaceObject.cliExecute)("outfit save ".concat(name));
}
// Objective cache entries.
var cachedObjectives = {};
// Outfit cache entries. Keep 6 by default to avoid cluttering list.
var outfitCache = new OutfitLRUCache(6);
// Cache to prevent rescanning all items unnecessarily
var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */
function canEquipItemCount() {
  var stats = $stats(maximize_templateObject8 || (maximize_templateObject8 = maximize_taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0,external_kolmafia_namespaceObject.myBasestat)(stat), 300));
  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = external_kolmafia_namespaceObject.Item.all().filter(item => (0,external_kolmafia_namespaceObject.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  if (!entry) {
    return null;
  }
  if (options.updateOnFamiliarChange && (0,external_kolmafia_namespaceObject.myFamiliar)() !== entry.familiar) {
    dist_logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }
  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    dist_logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }
  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;
  if (outfitName) {
    if (!(0,external_kolmafia_namespaceObject.isWearingOutfit)(outfitName)) {
      (0,external_kolmafia_namespaceObject.outfit)(outfitName);
    }
    var familiarEquip = entry.equipment.get($slot(maximize_templateObject9 || (maximize_templateObject9 = maximize_taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) (0,external_kolmafia_namespaceObject.equip)($slot(maximize_templateObject10 || (maximize_templateObject10 = maximize_taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = maximize_createForOfIteratorHelper(entry.equipment),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = maximize_slicedToArray(_step3.value, 2),
          slot = _step3$value[0],
          item = _step3$value[1];
        if ((0,external_kolmafia_namespaceObject.equippedItem)(slot) !== item && (0,external_kolmafia_namespaceObject.availableAmount)(item) > 0) {
          (0,external_kolmafia_namespaceObject.equip)(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      dist_logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject11 || (maximize_templateObject11 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject12 || (maximize_templateObject12 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0,external_kolmafia_namespaceObject.enthroneFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject13 || (maximize_templateObject13 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) || template_string_$familiar.none);
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject14 || (maximize_templateObject14 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject15 || (maximize_templateObject15 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(entry.rider.get(template_string_$item(maximize_templateObject16 || (maximize_templateObject16 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) || template_string_$familiar.none);
  }
  applyModes(maximize_objectSpread(maximize_objectSpread({}, entry.modes), options.modes));
}
var slotStructure = [$slots(maximize_templateObject17 || (maximize_templateObject17 = maximize_taggedTemplateLiteral(["hat"]))), $slots(maximize_templateObject18 || (maximize_templateObject18 = maximize_taggedTemplateLiteral(["back"]))), $slots(maximize_templateObject19 || (maximize_templateObject19 = maximize_taggedTemplateLiteral(["shirt"]))), $slots(maximize_templateObject20 || (maximize_templateObject20 = maximize_taggedTemplateLiteral(["weapon, off-hand"]))), $slots(maximize_templateObject21 || (maximize_templateObject21 = maximize_taggedTemplateLiteral(["pants"]))), $slots(maximize_templateObject22 || (maximize_templateObject22 = maximize_taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(maximize_templateObject23 || (maximize_templateObject23 = maximize_taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;
  var _iterator4 = maximize_createForOfIteratorHelper(slotStructure),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(_ref2 => {
        var _ref3 = maximize_slicedToArray(_ref2, 2),
          item = _ref3[1];
        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref4 => {
        var _ref5 = maximize_slicedToArray(_ref4, 2),
          item = _ref5[1];
        return item;
      });
      var equippedSet = desiredSlots.map(_ref6 => {
        var _ref7 = maximize_slicedToArray(_ref6, 1),
          slot = _ref7[0];
        return (0,external_kolmafia_namespaceObject.equippedItem)(slot);
      });
      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          dist_logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }
        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject24 || (maximize_templateObject24 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject25 || (maximize_templateObject25 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject26 || (maximize_templateObject26 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) !== (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply ".concat(entry.rider.get(template_string_$item(maximize_templateObject27 || (maximize_templateObject27 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat(template_string_$item(maximize_templateObject28 || (maximize_templateObject28 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject29 || (maximize_templateObject29 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get(template_string_$item(maximize_templateObject30 || (maximize_templateObject30 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get(template_string_$item(maximize_templateObject31 || (maximize_templateObject31 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0,external_kolmafia_namespaceObject.myBjornedFamiliar)()) {
      if (warn) {
        dist_logger.warning("Failed to apply".concat(entry.rider.get(template_string_$item(maximize_templateObject32 || (maximize_templateObject32 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat(template_string_$item(maximize_templateObject33 || (maximize_templateObject33 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }
      success = false;
    }
  }
  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */
function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();
  var _iterator5 = maximize_createForOfIteratorHelper(cachedSlots),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0,external_kolmafia_namespaceObject.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(maximize_templateObject34 || (maximize_templateObject34 = maximize_taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject35 || (_templateObject35 = maximize_taggedTemplateLiteral(["card-sleeve"]))), (0,external_kolmafia_namespaceObject.equippedItem)($slot(_templateObject36 || (_templateObject36 = maximize_taggedTemplateLiteral(["card-sleeve"])))));
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(_templateObject37 || (_templateObject37 = maximize_taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set(template_string_$item(_templateObject38 || (_templateObject38 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
  }
  if ((0,external_kolmafia_namespaceObject.equippedAmount)(template_string_$item(_templateObject39 || (_templateObject39 = maximize_taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set(template_string_$item(_templateObject40 || (_templateObject40 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
  }
  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = maximize_createForOfIteratorHelper(options.preventSlot),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(_templateObject42 || (_templateObject42 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(_templateObject44 || (_templateObject44 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = maximize_createForOfIteratorHelper(external_kolmafia_namespaceObject.Slot.all()),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;
        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = maximize_taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete(template_string_$item(_templateObject46 || (_templateObject46 = maximize_taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = maximize_taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete(template_string_$item(_templateObject48 || (_templateObject48 = maximize_taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  var entry = new CacheEntry(equipment, rider, (0,external_kolmafia_namespaceObject.myFamiliar)(), canEquipItemCount(), maximize_objectSpread(maximize_objectSpread({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;
  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    dist_logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
    preventEquip = fullOptions.preventEquip,
    bonusEquip = fullOptions.bonusEquip,
    onlySlot = fullOptions.onlySlot,
    preventSlot = fullOptions.preventSlot,
    forceUpdate = fullOptions.forceUpdate;
  // Sort each group in objective to ensure consistent ordering in string
  var objective = maximize_toConsumableArray(new Set([].concat(maximize_toConsumableArray(objectives.sort()), maximize_toConsumableArray(forceEquip.map(item => "\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(preventEquip.map(item => "-\"equip ".concat(toMaximizerName(item), "\"")).sort()), maximize_toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), maximize_toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), maximize_toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref8 => {
    var _ref9 = maximize_slicedToArray(_ref8, 2),
      bonus = _ref9[1];
    return bonus !== 0;
  }).map(_ref10 => {
    var _ref11 = maximize_slicedToArray(_ref10, 2),
      item = _ref11[0],
      bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, " \"bonus ").concat(toMaximizerName(item), "\"");
  }).sort())))).join(", ");
  // Items equipped in slots not touched by the maximizer must be in the cache key
  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(maximize_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat((0,external_kolmafia_namespaceObject.equippedItem)(slot))).sort())).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    dist_logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);
    if (verifyCached(cacheEntry)) {
      dist_logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }
    dist_logger.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0,external_kolmafia_namespaceObject.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}
var _maximizeParameters = /*#__PURE__*/new WeakMap();
var _maximizeOptions = /*#__PURE__*/new WeakMap();
var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    maximize_classCallCheck(this, Requirement);
    _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);
    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  maximize_createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;
      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement([].concat(maximize_toConsumableArray(this.maximizeParameters), maximize_toConsumableArray(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(maximize_toConsumableArray((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), maximize_toConsumableArray((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(x => {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(maximize_toConsumableArray((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), maximize_toConsumableArray((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(x => {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(maximize_toConsumableArray((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), maximize_toConsumableArray((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(maximize_toConsumableArray((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), maximize_toConsumableArray((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(maximize_toConsumableArray((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), maximize_toConsumableArray((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }
      Requirement.merge(requirements).maximize();
    }
  }]);
  return Requirement;
}();
/**
 * Clear all outfits cached by the maximizer.
 */
function clearMaximizerCache() {
  outfitCache.clear();
  for (var member in cachedObjectives) delete cachedObjectives[member];
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/outfit.js
var outfit_templateObject, outfit_templateObject2, outfit_templateObject3, outfit_templateObject4, outfit_templateObject5, outfit_templateObject6, outfit_templateObject7, outfit_templateObject8, outfit_templateObject9, outfit_templateObject10, outfit_templateObject11, outfit_templateObject12, outfit_templateObject13, outfit_templateObject14, outfit_templateObject15, outfit_templateObject16, outfit_templateObject17, outfit_templateObject18, outfit_templateObject19, outfit_templateObject20, outfit_templateObject21, outfit_templateObject22, outfit_templateObject23, outfit_templateObject24, outfit_templateObject25, outfit_templateObject26, outfit_templateObject27, outfit_templateObject28, outfit_templateObject29, outfit_templateObject30, outfit_templateObject31, outfit_templateObject32, outfit_templateObject33, outfit_templateObject34, outfit_templateObject35, outfit_templateObject36, outfit_templateObject37, outfit_templateObject38, outfit_templateObject39, outfit_templateObject40, outfit_templateObject41, outfit_templateObject42, outfit_templateObject43, outfit_templateObject44, outfit_templateObject45, outfit_templateObject46, outfit_templateObject47, outfit_templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63;
function outfit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function outfit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? outfit_ownKeys(Object(source), !0).forEach(function (key) { outfit_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : outfit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function outfit_defineProperty(obj, key, value) { key = outfit_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function outfit_slicedToArray(arr, i) { return outfit_arrayWithHoles(arr) || outfit_iterableToArrayLimit(arr, i) || outfit_unsupportedIterableToArray(arr, i) || outfit_nonIterableRest(); }
function outfit_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function outfit_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function outfit_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function outfit_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = outfit_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function outfit_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function outfit_toConsumableArray(arr) { return outfit_arrayWithoutHoles(arr) || outfit_iterableToArray(arr) || outfit_unsupportedIterableToArray(arr) || outfit_nonIterableSpread(); }
function outfit_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function outfit_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return outfit_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return outfit_arrayLikeToArray(o, minLen); }
function outfit_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function outfit_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return outfit_arrayLikeToArray(arr); }
function outfit_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function outfit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function outfit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, outfit_toPropertyKey(descriptor.key), descriptor); } }
function outfit_createClass(Constructor, protoProps, staticProps) { if (protoProps) outfit_defineProperties(Constructor.prototype, protoProps); if (staticProps) outfit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function outfit_toPropertyKey(arg) { var key = outfit_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function outfit_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var riderSlots = (/* unused pure expression or super */ null && (["buddy-bjorn", "crown-of-thrones"]));
var weaponHands = i => i ? (0,external_kolmafia_namespaceObject.weaponHands)(i) : 0;
var outfit_modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    outfit_classCallCheck(this, Outfit);
    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
  }
  /**
   * Create an outfit from your current player state.
   */
  outfit_createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return outfit_toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!have(item, this.equippedAmount(item) + 1)) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== template_string_$item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(outfit_templateObject || (outfit_templateObject = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      if (slot !== undefined && slot !== (0,external_kolmafia_namespaceObject.toSlot)(item)) return false;
      if (this.equips.has((0,external_kolmafia_namespaceObject.toSlot)(item))) return false;
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject2 || (outfit_templateObject2 = outfit_taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(outfit_templateObject3 || (outfit_templateObject3 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject4 || (outfit_templateObject4 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(outfit_templateObject5 || (outfit_templateObject5 = outfit_taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !(0,external_kolmafia_namespaceObject.canEquip)(this.familiar, item)) return false;
      }
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject6 || (outfit_templateObject6 = outfit_taggedTemplateLiteral(["familiar"]))) && !(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set((0,external_kolmafia_namespaceObject.toSlot)(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(outfit_toConsumableArray($slots(outfit_templateObject7 || (outfit_templateObject7 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject8 || (outfit_templateObject8 = outfit_taggedTemplateLiteral(["acc1"])))) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(outfit_templateObject9 || (outfit_templateObject9 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(outfit_templateObject10 || (outfit_templateObject10 = outfit_taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if ((0,external_kolmafia_namespaceObject.toSlot)(item) !== $slot(outfit_templateObject11 || (outfit_templateObject11 = outfit_taggedTemplateLiteral(["weapon"])))) return false;
      if (this.equips.has($slot(outfit_templateObject12 || (outfit_templateObject12 = outfit_taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(outfit_templateObject13 || (outfit_templateObject13 = outfit_taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(outfit_templateObject14 || (outfit_templateObject14 = outfit_taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!have(template_string_$skill(outfit_templateObject15 || (outfit_templateObject15 = outfit_taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!(0,external_kolmafia_namespaceObject.canEquip)(item)) return false;
      this.equips.set($slot(outfit_templateObject16 || (outfit_templateObject16 = outfit_taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch ((0,external_kolmafia_namespaceObject.toSlot)(item)) {
        case $slot(outfit_templateObject17 || (outfit_templateObject17 = outfit_taggedTemplateLiteral(["weapon"]))):
          return template_string_$familiar(outfit_templateObject18 || (outfit_templateObject18 = outfit_taggedTemplateLiteral(["Disembodied Hand"])));
        case $slot(outfit_templateObject19 || (outfit_templateObject19 = outfit_taggedTemplateLiteral(["off-hand"]))):
          return template_string_$familiar(outfit_templateObject20 || (outfit_templateObject20 = outfit_taggedTemplateLiteral(["Left-Hand Man"])));
        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;
      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns Whether the bonus was successfully asigned.
     */
  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      this.bonuses.set(item, value);
      return this.bonuses.get(item) === value;
    }
    /**
     * Adds a value to any existing bonus this item has; if it started without a bonus, sets the bonus equal to that value.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      var previous = this.getBonus(item);
      this.setBonus(item, previous + value);
      return this.getBonus(item);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(outfit_templateObject21 || (outfit_templateObject21 = outfit_taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(outfit_templateObject22 || (outfit_templateObject22 = outfit_taggedTemplateLiteral(["familiar"]))))) return false;
      if ((0,external_kolmafia_namespaceObject.booleanModifier)(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      if (familiar === undefined || !this.equip(familiar)) return false;
      this.equips.set($slot(outfit_templateObject23 || (outfit_templateObject23 = outfit_taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;
      if (familiar !== template_string_$familiar.none) {
        if (!have(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }
      var item = this.equips.get($slot(outfit_templateObject24 || (outfit_templateObject24 = outfit_taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== template_string_$item.none && !(0,external_kolmafia_namespaceObject.canEquip)(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d;
      var succeeded = true;
      for (var _i = 0, _outfitSlots = outfitSlots; _i < _outfitSlots.length; _i++) {
        var slotName = _outfitSlots[_i];
        var slot = (_a = new Map([["famequip", $slot(outfit_templateObject25 || (outfit_templateObject25 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(outfit_templateObject26 || (outfit_templateObject26 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
      }
      var _iterator = outfit_createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _item = _step.value;
          if (!this.equip(_item)) succeeded = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, outfit_toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        var _this$modifier;
        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, outfit_toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }
      if (spec.bonuses) {
        var _iterator2 = outfit_createForOfIteratorHelper(spec.bonuses),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = outfit_slicedToArray(_step2.value, 2),
              item = _step2$value[0],
              value = _step2$value[1];
            this.addBonus(item, value);
            succeeded && (succeeded = this.bonuses.has(item));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }
      if (thing instanceof external_kolmafia_namespaceObject.Item) return this.equipItem(thing, slot);
      if (thing instanceof external_kolmafia_namespaceObject.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value:
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
    function bjornify(target) {
      var current = this.riders.get($slot(outfit_templateObject27 || (outfit_templateObject27 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }
        return false;
      }
      if (Array.isArray(target)) {
        var fam = target.find(f => have(f) && this.familiar !== f && this.riders.get($slot(outfit_templateObject28 || (outfit_templateObject28 = outfit_taggedTemplateLiteral(["crown-of-thrones"])))) !== f);
        if (fam) {
          this.riders.set($slot(outfit_templateObject29 || (outfit_templateObject29 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), fam);
          return true;
        }
        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(outfit_templateObject30 || (outfit_templateObject30 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), target);
          return true;
        }
        return false;
      }
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      var current = this.riders.get($slot(outfit_templateObject31 || (outfit_templateObject31 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }
        return false;
      }
      if (Array.isArray(target)) {
        var fam = target.find(f => have(f) && this.familiar !== f && this.riders.get($slot(outfit_templateObject32 || (outfit_templateObject32 = outfit_taggedTemplateLiteral(["buddy-bjorn"])))) !== f);
        if (fam) {
          this.riders.set($slot(outfit_templateObject33 || (outfit_templateObject33 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), fam);
          return true;
        }
        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(outfit_templateObject34 || (outfit_templateObject34 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), target);
          return true;
        }
        return false;
      }
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;
      var compatible = true;
      // Check if the new modes are compatible with existing modes
      for (var _i2 = 0, _modeableCommands = outfit_modeableCommands; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        if (mode === "retrocape") continue; // checked below
        if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
          compatible = false;
        }
      }
      // Check if retrocape modes are compatible
      // (Parts that are undefined are compatible with everything)
      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }
        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }
        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }
      this.modes = outfit_objectSpread(outfit_objectSpread({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) (0,external_kolmafia_namespaceObject.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set();
      // First, we equip non-accessory equipment.
      var nonaccessorySlots = $slots(outfit_templateObject35 || (outfit_templateObject35 = outfit_taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(outfit_templateObject36 || (outfit_templateObject36 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(outfit_templateObject37 || (outfit_templateObject37 = outfit_taggedTemplateLiteral(["back"])))) === template_string_$item(outfit_templateObject38 || (outfit_templateObject38 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus(template_string_$item(outfit_templateObject39 || (outfit_templateObject39 = outfit_taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(outfit_templateObject40 || (outfit_templateObject40 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject41 || (outfit_templateObject41 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(outfit_templateObject42 || (outfit_templateObject42 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(outfit_templateObject43 || (outfit_templateObject43 = outfit_taggedTemplateLiteral(["hat"])))) === template_string_$item(outfit_templateObject44 || (outfit_templateObject44 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus(template_string_$item(outfit_templateObject45 || (outfit_templateObject45 = outfit_taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(outfit_templateObject46 || (outfit_templateObject46 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(outfit_templateObject47 || (outfit_templateObject47 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      // We must manually remove equipment that we want to use in a different
      // slot than where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans
      var _iterator3 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var slot = _step3.value;
          if (targetEquipment.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) && this.equips.get(slot) !== (0,external_kolmafia_namespaceObject.equippedItem)(slot) || this.avoid.includes((0,external_kolmafia_namespaceObject.equippedItem)(slot)) || slot === $slot(_templateObject51 || (_templateObject51 = outfit_taggedTemplateLiteral(["weapon"]))) && weaponHands((0,external_kolmafia_namespaceObject.equippedItem)(slot)) !== 1 && this.equips.has($slot(_templateObject52 || (_templateObject52 = outfit_taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(_templateObject53 || (_templateObject53 = outfit_taggedTemplateLiteral(["weapon"]))))) (0,external_kolmafia_namespaceObject.equip)(slot, template_string_$item.none);
        }
        // Then we equip all the non-accessory equipment.
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _slot = _step4.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            (0,external_kolmafia_namespaceObject.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
        // Next, we equip accessories
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(outfit_templateObject48 || (outfit_templateObject48 = outfit_taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined);
      // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.
      var missingAccessories = []; // accessories that are not already equipped
      var _iterator5 = outfit_createForOfIteratorHelper(accessoryEquips),
        _step5;
      try {
        var _loop = function _loop() {
          var accessory = _step5.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && (0,external_kolmafia_namespaceObject.equippedItem)(slot) === accessory);
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
        // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));
        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }
        (0,external_kolmafia_namespaceObject.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      // Remaining slots are filled by the maximizer
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: outfit_toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);
        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            (0,external_kolmafia_namespaceObject.cliExecute)("refresh inventory");
            this._dress(true);
            return;
          } else throw new Error("Failed to maximize properly!");
        }
        (0,external_kolmafia_namespaceObject.logprint)("Maximize: ".concat(this.modifier));
      }
      // Set the modes of any equipped items.
      applyModes(modes);
      // Handle the rider slots next
      if (bjorn) {
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() === bjorn) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() !== bjorn) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(bjorn);
      }
      if (crown) {
        if ((0,external_kolmafia_namespaceObject.myBjornedFamiliar)() === crown) (0,external_kolmafia_namespaceObject.bjornifyFamiliar)(template_string_$familiar.none);
        if ((0,external_kolmafia_namespaceObject.myEnthronedFamiliar)() !== crown) (0,external_kolmafia_namespaceObject.enthroneFamiliar)(crown);
      }
      // Verify that all equipment was indeed equipped
      if (this.familiar !== undefined && (0,external_kolmafia_namespaceObject.myFamiliar)() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = outfit_createForOfIteratorHelper(nonaccessorySlots),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0,external_kolmafia_namespaceObject.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = outfit_createForOfIteratorHelper(accessoryEquips),
        _step7;
      try {
        var _loop2 = function _loop2() {
          var accessory = _step7.value;
          if ((0,external_kolmafia_namespaceObject.equippedAmount)(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr2 = [[$slot(_templateObject49 || (_templateObject49 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), external_kolmafia_namespaceObject.myBjornedFamiliar], [$slot(_templateObject50 || (_templateObject50 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), external_kolmafia_namespaceObject.myEnthronedFamiliar]]; _i4 < _arr2.length; _i4++) {
        var _arr2$_i = outfit_slicedToArray(_arr2[_i4], 2),
          rider = _arr2$_i[0],
          checkingFunction = _arr2$_i[1];
        var wanted = this.riders.get(rider);
        if (wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      this._dress(false);
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = outfit_toConsumableArray(this.modifier);
      result.avoid = outfit_toConsumableArray(this.avoid);
      result.modes = outfit_objectSpread({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: outfit_toConsumableArray(this.modifier),
        avoid: outfit_toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: outfit_objectSpread({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar) result.familiar = this.familiar;
      // Add all equipment forced in a particular slot
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        var entry = this.equips.get((_a = new Map([["famequip", $slot(_templateObject54 || (_templateObject54 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject55 || (_templateObject55 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject56 || (_templateObject56 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject57 || (_templateObject57 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit = new Outfit();
      var familiar = (0,external_kolmafia_namespaceObject.myFamiliar)();
      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6];
        var slot = (_a = new Map([["famequip", $slot(_templateObject58 || (_templateObject58 = outfit_taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject59 || (_templateObject59 = outfit_taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : (0,external_kolmafia_namespaceObject.toSlot)(slotName);
        var item = (0,external_kolmafia_namespaceObject.equippedItem)(slot);
        if (!outfit.equip(item, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
        }
      }
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject60 || (_templateObject60 = outfit_taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject61 || (_templateObject61 = outfit_taggedTemplateLiteral(["crown-of-thrones"]))), (0,external_kolmafia_namespaceObject.myEnthronedFamiliar)());
      if ((0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(_templateObject62 || (_templateObject62 = outfit_taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject63 || (_templateObject63 = outfit_taggedTemplateLiteral(["buddy-bjorn"]))), (0,external_kolmafia_namespaceObject.myBjornedFamiliar)());
      outfit.setModes(outfit_getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var outfit = new Outfit();
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);
  return Outfit;
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"]
  };
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */
function outfit_getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */
function getMode(property, options) {
  var val = property_get(property, "");
  return options.find(s => s === val); // .includes has type issues
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/engine.js
var engine_templateObject;
function engine_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function engine_toConsumableArray(arr) { return engine_arrayWithoutHoles(arr) || engine_iterableToArray(arr) || engine_unsupportedIterableToArray(arr) || engine_nonIterableSpread(); }
function engine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function engine_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return engine_arrayLikeToArray(arr); }
function engine_slicedToArray(arr, i) { return engine_arrayWithHoles(arr) || engine_iterableToArrayLimit(arr, i) || engine_unsupportedIterableToArray(arr, i) || engine_nonIterableRest(); }
function engine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function engine_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function engine_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return engine_arrayLikeToArray(o, minLen); }
function engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, engine_toPropertyKey(descriptor.key), descriptor); } }
function engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function engine_toPropertyKey(arg) { var key = engine_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function engine_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EngineOptions = /*#__PURE__*/(/* unused pure expression or super */ null && (engine_createClass(function EngineOptions() {
  engine_classCallCheck(this, EngineOptions);
})));
var grimoireCCS = "grimoire_macro";
var Engine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function Engine(tasks, options) {
    engine_classCallCheck(this, Engine);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.tasks = tasks;
    this.options = options !== null && options !== void 0 ? options : {};
    var _iterator = engine_createForOfIteratorHelper(tasks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */
  engine_createClass(Engine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function available(task) {
      var _a;
      var _iterator2 = engine_createForOfIteratorHelper((_a = task.after) !== null && _a !== void 0 ? _a : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed()) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (task.ready && !task.ready()) return false;
      if (task.completed()) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      (0,external_kolmafia_namespaceObject.print)("");
      (0,external_kolmafia_namespaceObject.print)("Executing ".concat(task.name), "blue");
      // Determine the proper postcondition for after the task executes.
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      // Acquire any items and effects first, possibly for later execution steps.
      this.acquireItems(task);
      this.acquireEffects(task);
      // Prepare the outfit, with resources.
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit);
      // Prepare combat and choices
      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager);
      // Actually perform the task
      var _iterator3 = engine_createForOfIteratorHelper(task_resources.all()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.prepare(task);
      this.do(task);
      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }
      this.post(task);
      // Mark that we tried the task, and apply limits
      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire = undelay(task.acquire);
      var _iterator4 = engine_createForOfIteratorHelper(acquire || []),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            (0,external_kolmafia_namespaceObject.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0,external_kolmafia_namespaceObject.getRelated)(to_get.item, "fold")).length > 0) {
            (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0,external_kolmafia_namespaceObject.retrieveItem)(to_get.item, num_needed);
          }
          if ((0,external_kolmafia_namespaceObject.itemAmount)(to_get.item) + (0,external_kolmafia_namespaceObject.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys((0,external_kolmafia_namespaceObject.myEffects)()).map(effectName => (0,external_kolmafia_namespaceObject.toEffect)(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));
      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();
        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }
      var _iterator5 = engine_createForOfIteratorHelper(effects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();
      if (spec !== undefined) {
        if (!outfit.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.setLocation)(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {
      // do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;
      for (var _i = 0, _Object$entries = Object.entries((_a = task.choices) !== null && _a !== void 0 ? _a : {}); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = engine_slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          func = _Object$entries$_i[1];
        if (func === undefined) continue;
        manager.setChoice(parseInt(key), undelay(func));
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      // Save regular combat macro
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof external_kolmafia_namespaceObject.Location ? task.do : undefined);
      macro.save();
      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(engine_toConsumableArray(otherCCSEntries)).join("\n");
        // Log Macro + other CCS
        (0,external_kolmafia_namespaceObject.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          (0,external_kolmafia_namespaceObject.writeCcs)(ccsContents, grimoireCCS);
          (0,external_kolmafia_namespaceObject.cliExecute)("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs
          this.cachedCcsContents = ccsContents;
        }
      }
      // Save autoattack combat macro
      var autoattack = task_combat.compileAutoattack();
      if (autoattack.toString().length > 1) {
        (0,external_kolmafia_namespaceObject.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do() : task.do;
      if (result instanceof external_kolmafia_namespaceObject.Location) (0,external_kolmafia_namespaceObject.adv1)(result, -1, "");
      (0,external_kolmafia_namespaceObject.runCombat)();
      while ((0,external_kolmafia_namespaceObject.inMultiFight)()) (0,external_kolmafia_namespaceObject.runCombat)();
      if ((0,external_kolmafia_namespaceObject.choiceFollowsFight)()) (0,external_kolmafia_namespaceObject.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof external_kolmafia_namespaceObject.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;
      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (!task.completed()) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof external_kolmafia_namespaceObject.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      // Properties adapted from garbo
      manager.set(this.getDefaultSettings());
      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && (0,external_kolmafia_namespaceObject.readCcs)(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          (0,external_kolmafia_namespaceObject.writeCcs)("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
  return Engine;
}();
Engine.defaultSettings = {
  logPreferenceChange: true,
  logPreferenceChangeFilter: engine_toConsumableArray(new Set([].concat(engine_toConsumableArray(property_get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: true,
  autoSatisfyWithNPCs: true,
  autoSatisfyWithCoinmasters: true,
  autoSatisfyWithStash: false,
  dontStopForCounters: true,
  maximizerFoldables: true,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: true,
  autoPinkyRing: true,
  autoGarish: true,
  allowNonMoodBurning: false,
  allowSummonBurning: true,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return have(template_string_$skill(engine_templateObject || (engine_templateObject = engine_taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set([
// Halloweener dog noncombats
"Wooof! Wooooooof!", "Playing Fetch*",
// June cleaver noncombats
"Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet",
// Lil' Doctor™ bag noncombat
"A Pound of Cure",
// Turtle taming noncombats
"Nantucket Snapper", "Blue Monday", "Capital!", "Training Day", "Boxed In", "Duel Nature", "Slow Food", "A Rolling Turtle Gathers No Moss", "Slow Road to Hell", "C'mere, Little Fella", "The Real Victims", "Like That Time in Tortuga", "Cleansing your Palette", "Harem Scarum", "Turtle in peril", "No Man, No Hole", "Slow and Steady Wins the Brawl", "Stormy Weather", "Turtles of the Universe", "O Turtle Were Art Thou", "Allow 6-8 Weeks For Delivery", "Kick the Can", "Turtles All The Way Around", "More eXtreme Than Usual", "Jewel in the Rough", "The worst kind of drowning", "Even Tamer Than Usual", "Never Break the Chain", "Close, but Yes Cigar", "Armchair Quarterback", "This Turtle Rocks!", "Really Sticking Her Neck Out", "It Came from Beneath the Sewer? Great!", "Don't Be Alarmed, Now", "Puttin' it on Wax", "More Like... Hurtle", "Musk! Musk! Musk!", "Silent Strolling"]);
var zoneSpecificNCs = new Map([["The Horror...", ["Frat House"]] // Duplicate choice name
]);
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */
function lastEncounterWasWanderingNC() {
  var _a;
  var last = property_get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes(property_get("lastAdventure"));
  } else {
    return wanderingNCs.has(last);
  }
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/route.js
function route_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function route_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? route_ownKeys(Object(source), !0).forEach(function (key) { route_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : route_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function route_defineProperty(obj, key, value) { key = route_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function route_toPropertyKey(arg) { var key = route_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function route_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function route_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = route_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function route_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return route_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return route_arrayLikeToArray(o, minLen); }
function route_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Extract a list of tasks from the provided quests.
 *
 * Each task name is prepended with the quest name ("Quest Name/Task Name").
 * The quest-local names referred to in task.after are updated appropriately.
 * The task completion condition is updated to include the quest completion.
 *
 * Tasks are returned in-order: all tasks from the first quest, then all tasks
 * from the second quest, etc.
 *
 * @param quests The list of quests. This method does not modify the quest
 *    objects or their tasks.
 * @param implicitAfter If true, each task with task.after = undefined will
 *    have a dependency added on the previous task in the list.
 * @returns A list of tasks from the input quests (with updated properties).
 */
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var _a, _b;
  var result = [];
  var _iterator = route_createForOfIteratorHelper(quests),
    _step;
  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var _iterator3 = route_createForOfIteratorHelper(quest.tasks),
        _step3;
      try {
        var _loop2 = function _loop2() {
          var task = _step3.value;
          // Include quest name in task names and dependencies (unless dependency quest is given)
          var renamedTask = route_objectSpread({}, task);
          renamedTask.name = "".concat(quest.name, "/").concat(task.name);
          renamedTask.after = (_a = task.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after));
          // Include previous task as a dependency
          if (implicitAfter && task.after === undefined && result.length > 0) renamedTask.after = [result[result.length - 1].name];
          // Include quest completion in task completion
          if (questCompleted !== undefined) {
            var taskCompleted = task.completed;
            renamedTask.completed = () => questCompleted() || taskCompleted();
          }
          result.push(renamedTask);
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
    // Verify the dependency names of all tasks
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var names = new Set();
  for (var _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2];
    var _iterator2 = route_createForOfIteratorHelper((_b = _task.after) !== null && _b !== void 0 ? _b : []),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var after = _step2.value;
        if (!names.has(after)) {
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}
function orderByRoute(tasks, routing, ignore_missing_tasks) {
  var priorities = new Map();
  var _iterator4 = route_createForOfIteratorHelper(tasks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var task = _step4.value;
      priorities.set(task.name, [1000, task]);
    }
    // Prioritize the routing list of tasks first
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  function setPriorityRecursive(task, priority) {
    var _a;
    var old_priority = priorities.get(task);
    if (old_priority === undefined) {
      if (ignore_missing_tasks) return;
      throw "Unknown routing task ".concat(task);
    }
    if (old_priority[0] <= priority) return;
    priorities.set(task, [priority, old_priority[1]]);
    var _iterator5 = route_createForOfIteratorHelper((_a = old_priority[1].after) !== null && _a !== void 0 ? _a : []),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var requirement = _step5.value;
        setPriorityRecursive(requirement, priority - 0.01);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  for (var i = 0; i < routing.length; i++) {
    setPriorityRecursive(routing[i], i);
  }
  // Sort all tasks by priority.
  // Since this sort is stable, we default to earlier tasks.
  var result = tasks.slice();
  result.sort((a, b) => (priorities.get(a.name) || [1000])[0] - (priorities.get(b.name) || [1000])[0]);
  return result;
}
;// CONCATENATED MODULE: ./node_modules/grimoire-kolmafia/dist/index.js







;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_templateObject, AutumnAton_templateObject2, AutumnAton_templateObject3, AutumnAton_templateObject4, AutumnAton_templateObject5, AutumnAton_templateObject6, AutumnAton_templateObject7, AutumnAton_templateObject8, AutumnAton_templateObject9;
function AutumnAton_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var item = external_kolmafia_namespaceObject.Item.get("autumn-aton");
/**
 * Is the autumn-aton currently in your inventory, available to deploy?
 *
 * @returns The whether the autumn-aton is currently available for deployment
 */
function available() {
  return (0,external_kolmafia_namespaceObject.availableAmount)(item) > 0;
}
/**
 * Do you own the autumn-aton?
 *
 * @returns Whether you are an autumn-aton `have`r
 */
function AutumnAton_have() {
  return get("hasAutumnaton") || available();
}
/**
 * Internal function used to parse the fallbot's choice adventure to determine which zones are currently available
 *
 * @param html The pagetext of the fallbot's choice adventure
 * @returns The locations currently available to send the fallbot to
 */
function checkLocations(html) {
  return (0,external_kolmafia_namespaceObject.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(name => (0,external_kolmafia_namespaceObject.toLocation)(name));
}
/**
 * @returns The current location the autumn-aton is questing in; null if it is not on a quest.
 */
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
/**
 * Deploy the autumn-aton to a location of your choosing.
 *
 * @param target A location to send the autumn-aton to, or a prioritized list of locations to send it to, or a function to pick which location to send it to.
 * @param upgrade Should we apply any upgrades we see available?
 * @returns Where we ended up sending the autumn-aton; null if we didn't send it off.
 */
function sendTo(target) {
  var upgrade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!available()) return null;
  var pageHtml = lib_directlyUse(item);
  if (upgrade && (0,external_kolmafia_namespaceObject.availableChoiceOptions)()[1]) (0,external_kolmafia_namespaceObject.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof external_kolmafia_namespaceObject.Location ? target : Array.isArray(target) ? target.find(l => locationsAvailable.includes(l)) : target(locationsAvailable);
  if (!location) return null;
  if (!locationsAvailable.includes(location)) return null;
  if (!(0,external_kolmafia_namespaceObject.handlingChoice)()) lib_directlyUse(item);
  (0,external_kolmafia_namespaceObject.runChoice)(2, "heythereprogrammer=".concat(location.id));
  if ((0,external_kolmafia_namespaceObject.handlingChoice)()) (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
  return location;
}
/**
 * Install any available upgrades for the autumn-aton.
 *
 * @returns Whether there were any upgrades to install.
 */
function upgrade() {
  lib_directlyUse(item);
  var canUpgrade = (0,external_kolmafia_namespaceObject.availableChoiceOptions)()[1] !== undefined;
  if (canUpgrade) (0,external_kolmafia_namespaceObject.runChoice)(1);
  (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
  return canUpgrade;
}
/**
 * @returns A list of all locations you can send your autumn-aton to right now. Empty if you are unable to send it anywhere.
 */
function availableLocations() {
  if (!available()) return [];
  var pageHtml = directlyUse(item);
  visitUrl("main.php");
  return checkLocations(pageHtml);
}
/**
 * The mafia names for the autumn-aton upgrades
 */
var possibleUpgrades = (/* unused pure expression or super */ null && (["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"]));
/**
 * @returns An array containing the upgrades that you currently have on your autumn-aton.
 */
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
/**
 * @returns The number of turns remaining in your current autumn-aton quest. This number may be negative for any number of reasons.
 */
function turnsLeft() {
  return get("autumnatonQuestTurn") - totalTurnsPlayed();
}
/**
 * @returns The number of leg-upgrades your autumn-aton has installed
 */
function legs() {
  return currentUpgrades().filter(u => u.includes("leg")).length;
}
/**
 * @returns The number of turns we expect your next autumn-aton quest to take.
 */
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
/**
 * @returns The current visual acuity level of your autumn-aton as determined by the current upgrade-state.
 */
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(u => visualUpgrades.includes(u)).length;
}
/**
 * @returns The number of items from a zone we expect the autumn-aton to steal based on the current upgrade-state. It may not succeed in stealing every item it can.
 */
function zoneItems() {
  return 3 + currentUpgrades().filter(u => u.includes("arm")).length;
}
/**
 * @returns The number of seasonal items we expect the autumn-aton to return with given its current upgrade-state.
 */
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = (/* unused pure expression or super */ null && (["low", "mid", "high"]));
var UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: template_string_$item(AutumnAton_templateObject || (AutumnAton_templateObject = AutumnAton_taggedTemplateLiteral(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: template_string_$item(AutumnAton_templateObject2 || (AutumnAton_templateObject2 = AutumnAton_taggedTemplateLiteral(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: template_string_$item(AutumnAton_templateObject3 || (AutumnAton_templateObject3 = AutumnAton_taggedTemplateLiteral(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: template_string_$item(AutumnAton_templateObject4 || (AutumnAton_templateObject4 = AutumnAton_taggedTemplateLiteral(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: template_string_$item(AutumnAton_templateObject5 || (AutumnAton_templateObject5 = AutumnAton_taggedTemplateLiteral(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: template_string_$item(AutumnAton_templateObject6 || (AutumnAton_templateObject6 = AutumnAton_taggedTemplateLiteral(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: template_string_$item(AutumnAton_templateObject7 || (AutumnAton_templateObject7 = AutumnAton_taggedTemplateLiteral(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: template_string_$item(AutumnAton_templateObject8 || (AutumnAton_templateObject8 = AutumnAton_taggedTemplateLiteral(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: template_string_$item(AutumnAton_templateObject9 || (AutumnAton_templateObject9 = AutumnAton_taggedTemplateLiteral(["autumn years wisdom"])))
    }
  }
};
/**
 * Determines and returns the upgrade and item drop associated with the given location
 *
 * @param location The location to check the expected autumn-aton-unique drops of
 * @returns `null` if the location has no upgrade or drop; otherwise, the upgrade and the autumn-aton item associated with that item
 */
function getUniques(location) {
  var env = location.environment;
  var difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty],
      index = _UNIQUES$env$difficul.index,
      _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/Clan.js
function Clan_toConsumableArray(arr) { return Clan_arrayWithoutHoles(arr) || Clan_iterableToArray(arr) || Clan_unsupportedIterableToArray(arr) || Clan_nonIterableSpread(); }
function Clan_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Clan_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Clan_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Clan_arrayLikeToArray(arr); }
function Clan_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Clan_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function Clan_slicedToArray(arr, i) { return Clan_arrayWithHoles(arr) || Clan_iterableToArrayLimit(arr, i) || Clan_unsupportedIterableToArray(arr, i) || Clan_nonIterableRest(); }
function Clan_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Clan_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Clan_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Clan_arrayLikeToArray(o, minLen); }
function Clan_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Clan_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Clan_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Clan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Clan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Clan_toPropertyKey(descriptor.key), descriptor); } }
function Clan_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clan_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clan_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Clan_defineProperty(obj, key, value) { key = Clan_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Clan_toPropertyKey(arg) { var key = Clan_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function Clan_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), Clan_setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { var i = g[name]; if ("number" == typeof i) groups[name] = result[i];else { for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length;) k++; groups[name] = result[i[k]]; } return groups; }, Object.create(null)); } return Clan_inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) { result.groups = buildGroups(result, this); var indices = result.indices; indices && (indices.groups = buildGroups(indices, this)); } return result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { var group = groups[name]; return "$" + (Array.isArray(group) ? group.join("$") : group); })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }
function Clan_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Clan_setPrototypeOf(subClass, superClass); }
function Clan_setPrototypeOf(o, p) { Clan_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Clan_setPrototypeOf(o, p); }




var clanIdCache = {};
var toPlayerId = player => typeof player === "string" ? (0,external_kolmafia_namespaceObject.getPlayerId)(player) : player;
var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
});
var Clan = /*#__PURE__*/function () {
  function Clan(id, name) {
    Clan_classCallCheck(this, Clan);
    Clan_defineProperty(this, "id", void 0);
    Clan_defineProperty(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  Clan_createClass(Clan, [{
    key: "_check",
    value: function _check() {
      if (this.id !== (0,external_kolmafia_namespaceObject.getClanId)()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function join() {
      return Clan.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function check() {
      return (0,external_kolmafia_namespaceObject.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = (0,external_kolmafia_namespaceObject.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;
      var _lastFax = Clan_slicedToArray(lastFax, 4),
        monsterName = _lastFax[3];
      if (!monsterName) return null;
      return external_kolmafia_namespaceObject.Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_whitelist.php");
      return (0,external_kolmafia_namespaceObject.xpath)(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0,external_kolmafia_namespaceObject.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0,external_kolmafia_namespaceObject.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;
        var _match = Clan_slicedToArray(match, 3),
          name = _match[1],
          degree = _match[2];
        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
        _ref2 = Clan_slicedToArray(_ref, 2),
        meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - (0,external_kolmafia_namespaceObject.availableAmount)(item));
        if (needed === 0) {
          return map.set(item, 0);
        }
        var foldGroup = getFoldGroup(item);
        var _iterator = Clan_createForOfIteratorHelper(foldGroup),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0,external_kolmafia_namespaceObject.availableAmount)(foldable));
            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(item.name));
              needed--;
            }
            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0,external_kolmafia_namespaceObject.refreshStash)();
        for (var _i2 = 0, _arr2 = [item].concat(Clan_toConsumableArray(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0,external_kolmafia_namespaceObject.stashAmount)(matchingItem));
          if (quantityToTake === 0) continue;
          // If we can't take from the stash, there's no sense in iterating through the whole fold group
          if (!(0,external_kolmafia_namespaceObject.takeStash)(quantityToTake, matchingItem)) return;
          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0,external_kolmafia_namespaceObject.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function put(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check()) throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        (0,external_kolmafia_namespaceObject.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0,external_kolmafia_namespaceObject.availableAmount)(item));
        (0,external_kolmafia_namespaceObject.putStash)(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback // eslint-disable-line @typescript-eslint/no-explicit-any
    ) {
      this._check();
      var map = arrayToCountedMap(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0,external_kolmafia_namespaceObject.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }
      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);
            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });
          if (map.size > 0) {
            dist_logger.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0,external_kolmafia_namespaceObject.getClanName)().toLowerCase()) {
          return Clan.get();
        }
        if (!(clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === clanName);
          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;
        if (clanId === (0,external_kolmafia_namespaceObject.getClanId)()) {
          return Clan.get();
        }
      }
      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items,
    // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    callback // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    ) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function get() {
      return new Clan((0,external_kolmafia_namespaceObject.getClanId)(), (0,external_kolmafia_namespaceObject.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0,external_kolmafia_namespaceObject.visitUrl)("clan_signup.php");
      return (0,external_kolmafia_namespaceObject.xpath)(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0,external_kolmafia_namespaceObject.xpath)(validHtml, "//@value")[0]);
        var name = (0,external_kolmafia_namespaceObject.xpath)(validHtml, "//text()")[0];
        return new Clan(id, name);
      });
    }
  }]);
  return Clan;
}();
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_templateObject;
function SongBoom_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SongBoom_item = template_string_$item(SongBoom_templateObject || (SongBoom_templateObject = SongBoom_taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
/**
 * @returns Whether we `have` the SongBoom™ BoomBox
 */
function SongBoom_have() {
  return haveItem(SongBoom_item);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * @returns The `SongBoomSong` you currently have active; `null` if none is active at this time
 */
function song() {
  var stored = property_get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * @returns Song changes left today.
 */
function songChangesLeft() {
  return property_get("_boomBoxSongsLeft");
}
/**
 * Change the song. Throws an error if unable.
 *
 * @param newSong Song to change to.
 * @returns Whether we successfully changed the song; `false` thus means that this was already our current song.
 */
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0,external_kolmafia_namespaceObject.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * @returns Progress to next song drop (e.g. gathered meat-clip).
 */
function dropProgress() {
  return get("_boomBoxFights");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/TrainSet.js
var TrainSet_templateObject;
function TrainSet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var TrainSet_item = template_string_$item(TrainSet_templateObject || (TrainSet_templateObject = TrainSet_taggedTemplateLiteral(["model train set"])));
/**
 * Determines whether the Model Train Set is your current workshed
 *
 * @returns Whether the Model Train Set is your current workshed
 */
function installed() {
  return (0,external_kolmafia_namespaceObject.getWorkshed)() === TrainSet_item;
}
/**
 * Determines whether you `have` the model train set (or if it is installed)
 *
 * @returns Whether you `have` the model train set or it's installed
 */
function TrainSet_have() {
  return installed() || have_(TrainSet_item);
}
var Station;
(function (Station) {
  /**
   * Unknown station
   */
  Station["UNKNOWN"] = "";
  /**
   * Empty station
   */
  Station["EMPTY"] = "empty";
  /**
   * Gain 800 meat
   */
  Station["GAIN_MEAT"] = "meat_mine";
  /**
   * Effect: Regenerate MP
   */
  Station["TOWER_FIZZY"] = "tower_fizzy";
  /**
   * Gain mus, mys, mox stats
   */
  Station["VIEWING_PLATFORM"] = "viewing_platform";
  /**
   * Effect: Hot resist, cold damage
   */
  Station["TOWER_FROZEN"] = "tower_frozen";
  /**
   * Effect: Stench resist, spooky damage
   */
  Station["SPOOKY_GRAVEYARD"] = "spooky_graveyard";
  /**
   * Get smut bridge part, or stats
   */
  Station["LOGGING_MILL"] = "logging_mill";
  /**
   * Get some candy
   */
  Station["CANDY_FACTORY"] = "candy_factory";
  /**
   * Double strength of next station
   */
  Station["COAL_HOPPER"] = "coal_hopper";
  /**
   * Effect: Cold resist, stench damage
   */
  Station["TOWER_SEWAGE"] = "tower_sewage";
  /**
   * Effect: Spooky resist, sleaze damage
   */
  Station["OIL_REFINERY"] = "oil_refinery";
  /**
   * Effect: Sleaze resist, hot damage
   */
  Station["OIL_BRIDGE"] = "oil_bridge";
  /**
   * Effect: Increased Monster Level
   */
  Station["WATER_BRIDGE"] = "water_bridge";
  /**
   * Get moxie stats
   */
  Station["GROIN_SILO"] = "groin_silo";
  /**
   * Get random booze
   */
  Station["GRAIN_SILO"] = "grain_silo";
  /**
   * Get mys stats
   */
  Station["BRAIN_SILO"] = "brain_silo";
  /**
   * Get muscle stats
   */
  Station["BRAWN_SILO"] = "brawn_silo";
  /**
   * Effect: 50% food drop
   */
  Station["PRAWN_SILO"] = "prawn_silo";
  /**
   * Dupe last food dropped, or gain random food
   */
  Station["TRACKSIDE_DINER"] = "trackside_diner";
  /**
   * Drop random ore, or trapper ore if known
   */
  Station["ORE_HOPPER"] = "ore_hopper";
})(Station || (Station = {}));
var trainsetEffects = new Map([[Station.TOWER_FIZZY, external_kolmafia_namespaceObject.Effect.get("Carbonated")], [Station.TOWER_FROZEN, external_kolmafia_namespaceObject.Effect.get("Frozen")], [Station.SPOOKY_GRAVEYARD, external_kolmafia_namespaceObject.Effect.get("Shivering Spine")], [Station.TOWER_SEWAGE, external_kolmafia_namespaceObject.Effect.get("Hot Soupy Garbage")], [Station.OIL_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Burningly Oiled")], [Station.OIL_REFINERY, external_kolmafia_namespaceObject.Effect.get("Spookily Greasy")], [Station.WATER_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Troubled Waters")], [Station.PRAWN_SILO, external_kolmafia_namespaceObject.Effect.get("Craving Prawns")]]);
var trainsetEffectsDoubled = new Map([[Station.TOWER_FIZZY, external_kolmafia_namespaceObject.Effect.get("Double Carbonated")], [Station.TOWER_FROZEN, external_kolmafia_namespaceObject.Effect.get("Double Frozen")], [Station.SPOOKY_GRAVEYARD, external_kolmafia_namespaceObject.Effect.get("Doubly Shivering Spine")], [Station.TOWER_SEWAGE, external_kolmafia_namespaceObject.Effect.get("Double Hot Soupy Garbage")], [Station.OIL_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Doubly Burningly Oiled")], [Station.OIL_REFINERY, external_kolmafia_namespaceObject.Effect.get("Doubly Spookily Greasy")], [Station.WATER_BRIDGE, external_kolmafia_namespaceObject.Effect.get("Doubly Troubled Waters")], [Station.PRAWN_SILO, external_kolmafia_namespaceObject.Effect.get("Doubly Craving Prawns")]]);
/**
 * Returns an effect--if one exists--for a given train station
 *
 * @param station The train station to check the effect of
 * @returns The effect associated with the given station
 */
function effect(station) {
  var _trainsetEffects$get;
  return (_trainsetEffects$get = trainsetEffects.get(station)) !== null && _trainsetEffects$get !== void 0 ? _trainsetEffects$get : null;
}
/**
 * Returns an effect--if one exists--for a given train station, assuming it's been primed by the coal station
 *
 * @param station The train station to check the doubled effect of
 * @returns The effect associated with given station, under the influence of coal
 */
function doubledEffect(station) {
  var _trainsetEffectsDoubl;
  return (_trainsetEffectsDoubl = trainsetEffectsDoubled.get(station)) !== null && _trainsetEffectsDoubl !== void 0 ? _trainsetEffectsDoubl : null;
}
/**
 * Determines the current configuration of train stations
 *
 * @returns An 8-tuple consisting of the stations currently installed in your Model Train Set; this functions even if the Model Train Set isn't your active workshed
 */
function cycle() {
  return property_get("trainsetConfiguration").split(",");
}
/**
 * Determines how many turns until you can next configure the Model Train Set
 *
 * @returns How many turns until you can next configure the Model Train Set
 */
function nextConfigurable() {
  return clamp(property_get("lastTrainsetConfiguration") + 40 - property_get("trainsetPosition"), 0, 40);
}
/**
 * Determines whether you can currently configure your Model Train Set
 *
 * @returns Whether you can currently configure your Model Train Set
 */
function canConfigure() {
  return installed() && !nextConfigurable();
}
var pieces = [Station.EMPTY, Station.GAIN_MEAT, Station.TOWER_FIZZY, Station.VIEWING_PLATFORM, Station.TOWER_FROZEN, Station.SPOOKY_GRAVEYARD, Station.LOGGING_MILL, Station.CANDY_FACTORY, Station.COAL_HOPPER, Station.TOWER_SEWAGE, Station.UNKNOWN, Station.OIL_REFINERY, Station.OIL_BRIDGE, Station.WATER_BRIDGE, Station.GROIN_SILO, Station.GRAIN_SILO, Station.BRAIN_SILO, Station.BRAWN_SILO, Station.PRAWN_SILO, Station.TRACKSIDE_DINER, Station.ORE_HOPPER];
/**
 * Converts a given station to the integer value KoL associates with them
 *
 * @param station The station in question
 * @returns The integer value KoL assigns the train station in question
 */
function stationToInt(station) {
  return pieces.indexOf(station);
}
/**
 * Sets your model train station to the given configuration, if able
 *
 * @param configuration The cycle to try to set your model train station to
 * @returns Whether your model train station matches the given configuration
 */
function setConfiguration(configuration) {
  if (!canConfigure()) return false;
  (0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=workshed");
  (0,external_kolmafia_namespaceObject.runChoice)(1, "forceoption=0".concat(configuration.map((station, index) => "&slot[".concat(index, "]=").concat(stationToInt(station))).join("")));
  (0,external_kolmafia_namespaceObject.visitUrl)("main.php");
  var currentConfiguration = cycle();
  return configuration.every((station, index) => station === currentConfiguration[index]);
}
/**
 * Determines the next station you expect to encounter when the Model Train Station is active
 *
 * @returns The next station you expect to encounter when the Model Train Station is active
 */
function next() {
  return cycle()[get("trainsetPosition") % 8];
}
;// CONCATENATED MODULE: ./src/lib.ts
var lib_templateObject, lib_templateObject2, lib_templateObject3;
function lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _byStat = byStat({
    Muscle: {
      guildQuest: "questG09Muscle",
      guildURL: "guild.php?guild=f",
      guildZone: $location(lib_templateObject || (lib_templateObject = lib_taggedTemplateLiteral(["The Outskirts of Cobb's Knob"])))
    },
    Mysticality: {
      guildQuest: "questG07Myst",
      guildURL: "guild.php?guild=m",
      guildZone: $location(lib_templateObject2 || (lib_templateObject2 = lib_taggedTemplateLiteral(["The Haunted Pantry"])))
    },
    Moxie: {
      guildQuest: "questG08Moxie",
      guildURL: "guild.php?guild=t",
      guildZone: $location(lib_templateObject3 || (lib_templateObject3 = lib_taggedTemplateLiteral(["The Sleazy Back Alley"])))
    }
  }),
  guildQuest = _byStat.guildQuest,
  guildURL = _byStat.guildURL,
  guildZone = _byStat.guildZone;

;// CONCATENATED MODULE: ./src/tasks/preSkeletons.ts
var preSkeletons_templateObject, preSkeletons_templateObject2, preSkeletons_templateObject3, preSkeletons_templateObject4, preSkeletons_templateObject5, preSkeletons_templateObject6, preSkeletons_templateObject7, preSkeletons_templateObject8, preSkeletons_templateObject9, preSkeletons_templateObject10, preSkeletons_templateObject11, preSkeletons_templateObject12, preSkeletons_templateObject13, preSkeletons_templateObject14, preSkeletons_templateObject15, preSkeletons_templateObject16, preSkeletons_templateObject17, preSkeletons_templateObject18, preSkeletons_templateObject19, preSkeletons_templateObject20, preSkeletons_templateObject21, preSkeletons_templateObject22, preSkeletons_templateObject23, preSkeletons_templateObject24, preSkeletons_templateObject25, preSkeletons_templateObject26, preSkeletons_templateObject27, preSkeletons_templateObject28, preSkeletons_templateObject29, preSkeletons_templateObject30, preSkeletons_templateObject31, preSkeletons_templateObject32, preSkeletons_templateObject33, preSkeletons_templateObject34, preSkeletons_templateObject35, preSkeletons_templateObject36, preSkeletons_templateObject37;
function preSkeletons_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var floundryItem = template_string_$item(preSkeletons_templateObject || (preSkeletons_templateObject = preSkeletons_taggedTemplateLiteral(["fish hatchet"])));
var famRoute = template_string_$familiar(preSkeletons_templateObject2 || (preSkeletons_templateObject2 = preSkeletons_taggedTemplateLiteral(["Melodramedary"])));
var runStartQuest = {
  name: "Post-Ascension to Pre-Skeletons",
  completed: () => property_get(guildQuest) === "started" || property_get(guildQuest) === "step1" || property_get(guildQuest) === "finished",
  tasks: [{
    name: "Fall Guy!",
    completed: () => !available(),
    do: () => {
      upgrade();
      sendTo($location(preSkeletons_templateObject3 || (preSkeletons_templateObject3 = preSkeletons_taggedTemplateLiteral(["The Sleazy Back Alley"]))));
    }
  }, {
    name: "Pull Pulls",
    completed: () => property_get("_roninStoragePulls").split(",").length === 5,
    do: () => [template_string_$item(preSkeletons_templateObject4 || (preSkeletons_templateObject4 = preSkeletons_taggedTemplateLiteral(["Calzone of Legend"]))), template_string_$item(preSkeletons_templateObject5 || (preSkeletons_templateObject5 = preSkeletons_taggedTemplateLiteral(["Pizza of Legend"]))), template_string_$item(preSkeletons_templateObject6 || (preSkeletons_templateObject6 = preSkeletons_taggedTemplateLiteral(["Stick-Knife of Loathing"]))), template_string_$item(preSkeletons_templateObject7 || (preSkeletons_templateObject7 = preSkeletons_taggedTemplateLiteral(["wasabi marble soda"]))), template_string_$item(preSkeletons_templateObject8 || (preSkeletons_templateObject8 = preSkeletons_taggedTemplateLiteral(["tobiko marble soda"])))].forEach(i => (0,external_kolmafia_namespaceObject.takeStorage)(1, i))
  }, {
    name: "Setting Properties",
    completed: () => property_get("_mustardServiceTime") !== "",
    do: () => {
      _set("_mustardServiceDiner", "false");
      _set("_mustardServiceTime", "".concat((0,external_kolmafia_namespaceObject.nowToInt)()));
    }
  }, {
    name: "Numberology Attempt",
    ready: () => property_get("_universeCalculated") === 0 && Object.keys((0,external_kolmafia_namespaceObject.reverseNumberology)()).includes("69"),
    completed: () => property_get("_universeCalculated") >= 1,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("numberology 69"),
    limit: {
      tries: 1
    }
  }, {
    name: "Acquire Floundry Item",
    prepare: () => Clan.join("Floundry"),
    completed: () => property_get("_floundryItemCreated"),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, floundryItem),
    post: () => Clan.join("Bonus Adventures from Hell")
  }, {
    name: "Select S.I.T. Degree",
    completed: () => property_get("_sitCourseCompleted"),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("inv_use.php?pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&which=3&whichitem=11116"));
      (0,external_kolmafia_namespaceObject.runChoice)(2);
    }
  }, {
    name: "Grab Cowboy Boots",
    completed: () => have(template_string_$item(preSkeletons_templateObject9 || (preSkeletons_templateObject9 = preSkeletons_taggedTemplateLiteral(["your cowboy boots"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
      (0,external_kolmafia_namespaceObject.runChoice)(3);
    }
  }, {
    name: "Visit the Council",
    completed: () => property_get("lastCouncilVisit") > 0,
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("council.php")
  }, {
    name: "Sell Gems",
    prepare: () => (0,external_kolmafia_namespaceObject.visitUrl)("tutorial.php?action=toot"),
    completed: () => [template_string_$item(preSkeletons_templateObject10 || (preSkeletons_templateObject10 = preSkeletons_taggedTemplateLiteral(["letter from King Ralph XI"]))), template_string_$item(preSkeletons_templateObject11 || (preSkeletons_templateObject11 = preSkeletons_taggedTemplateLiteral(["baconstone"]))), template_string_$item(preSkeletons_templateObject12 || (preSkeletons_templateObject12 = preSkeletons_taggedTemplateLiteral(["hamethyst"])))].every(i => !have(i)) && property_get("questM05Toot") === "finished",
    do: () => {
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(preSkeletons_templateObject13 || (preSkeletons_templateObject13 = preSkeletons_taggedTemplateLiteral(["letter from King Ralph XI"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(preSkeletons_templateObject14 || (preSkeletons_templateObject14 = preSkeletons_taggedTemplateLiteral(["pork elf goodies sack"]))));
      [template_string_$item(preSkeletons_templateObject15 || (preSkeletons_templateObject15 = preSkeletons_taggedTemplateLiteral(["baconstone"]))), template_string_$item(preSkeletons_templateObject16 || (preSkeletons_templateObject16 = preSkeletons_taggedTemplateLiteral(["hamethyst"])))].forEach(i => (0,external_kolmafia_namespaceObject.autosell)((0,external_kolmafia_namespaceObject.availableAmount)(i), i));
      (0,external_kolmafia_namespaceObject.autosell)((0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(preSkeletons_templateObject17 || (preSkeletons_templateObject17 = preSkeletons_taggedTemplateLiteral(["porquoise"])))) - 2, template_string_$item(preSkeletons_templateObject18 || (preSkeletons_templateObject18 = preSkeletons_taggedTemplateLiteral(["porquoise"]))));
    }
  }, {
    name: "Acquire Buff Tools",
    completed: () => [template_string_$item(preSkeletons_templateObject19 || (preSkeletons_templateObject19 = preSkeletons_taggedTemplateLiteral(["toy accordion"]))), template_string_$item(preSkeletons_templateObject20 || (preSkeletons_templateObject20 = preSkeletons_taggedTemplateLiteral(["turtle totem"]))), template_string_$item(preSkeletons_templateObject21 || (preSkeletons_templateObject21 = preSkeletons_taggedTemplateLiteral(["saucepan"])))].every(i => have(i)),
    do: () => [template_string_$item(preSkeletons_templateObject22 || (preSkeletons_templateObject22 = preSkeletons_taggedTemplateLiteral(["toy accordion"]))), template_string_$item(preSkeletons_templateObject23 || (preSkeletons_templateObject23 = preSkeletons_taggedTemplateLiteral(["turtle totem"]))), template_string_$item(preSkeletons_templateObject24 || (preSkeletons_templateObject24 = preSkeletons_taggedTemplateLiteral(["saucepan"])))].forEach(i => (0,external_kolmafia_namespaceObject.retrieveItem)(i)),
    outfit: {
      pants: template_string_$item(preSkeletons_templateObject25 || (preSkeletons_templateObject25 = preSkeletons_taggedTemplateLiteral(["designer sweatpants"])))
    }
  }, {
    name: "Open Astral Drinks",
    completed: () => !have(template_string_$item(preSkeletons_templateObject26 || (preSkeletons_templateObject26 = preSkeletons_taggedTemplateLiteral(["astral six-pack"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(preSkeletons_templateObject27 || (preSkeletons_templateObject27 = preSkeletons_taggedTemplateLiteral(["astral six-pack"]))))
  }, {
    name: "Open Skeleton Store",
    completed: () => property_get("skeletonStoreAvailable"),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=meatsmith&action=talk");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?pwd=".concat(external_kolmafia_namespaceObject.myHash, "&whichchoice=1059&option=1"));
    }
  }, {
    name: "Clip-Art Summons",
    completed: () => property_get("_clipartSummons") >= 3,
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(2, template_string_$item(preSkeletons_templateObject28 || (preSkeletons_templateObject28 = preSkeletons_taggedTemplateLiteral(["borrowed time"]))));
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(preSkeletons_templateObject29 || (preSkeletons_templateObject29 = preSkeletons_taggedTemplateLiteral(["box of Familiar Jacks"]))));
    }
  }, {
    name: "Borrow Time",
    completed: () => property_get("_borrowedTimeUsed"),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(preSkeletons_templateObject30 || (preSkeletons_templateObject30 = preSkeletons_taggedTemplateLiteral(["borrowed time"]))))
  }, {
    name: "Equip Familiar",
    completed: () => (0,external_kolmafia_namespaceObject.myFamiliar)() !== template_string_$familiar.none,
    do: () => {
      (0,external_kolmafia_namespaceObject.useFamiliar)(famRoute);
      (0,external_kolmafia_namespaceObject.equip)($slot(preSkeletons_templateObject31 || (preSkeletons_templateObject31 = preSkeletons_taggedTemplateLiteral(["familiar"]))), template_string_$item(preSkeletons_templateObject32 || (preSkeletons_templateObject32 = preSkeletons_taggedTemplateLiteral(["tiny stillsuit"]))));
    }
  }, {
    name: "Mummery",
    completed: () => property_get("_mummeryUses") !== "",
    do: () => {
      withChoice(1071, 3, () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(preSkeletons_templateObject33 || (preSkeletons_templateObject33 = preSkeletons_taggedTemplateLiteral(["mumming trunk"])))));
    }
  }, {
    name: "SongBoom\u2122",
    completed: () => song() === "Total Eclipse of Your Meat",
    do: () => setSong("Total Eclipse of Your Meat")
  }, {
    name: "Configure Saber",
    completed: () => property_get("_saberMod") !== 0,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("saber familiar")
  }, {
    name: "Create Ebonee Epee",
    completed: () => have(template_string_$item(preSkeletons_templateObject34 || (preSkeletons_templateObject34 = preSkeletons_taggedTemplateLiteral(["ebony epee"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("shop.php?whichshop=lathe");
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(preSkeletons_templateObject35 || (preSkeletons_templateObject35 = preSkeletons_taggedTemplateLiteral(["ebony epee"]))));
    }
  }, {
    name: "DRINKME",
    prepare: () => Clan.join("Bonus Adventures from Hell"),
    completed: () => property_get("_lookingGlass"),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2")
  }, {
    name: "Enable Reverser",
    completed: () => property_get("backupCameraReverserEnabled"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("backupcamera reverser")
  }, {
    name: "Mind Control",
    ready: () => (0,external_kolmafia_namespaceObject.canadiaAvailable)(),
    completed: () => (0,external_kolmafia_namespaceObject.currentMcd)() === 11,
    do: () => (0,external_kolmafia_namespaceObject.changeMcd)(11)
  }, {
    name: "Boxing Daycare Freescavenge",
    completed: () => property_get("_daycareGymScavenges") >= 1,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("daycare scavenge")
  }, {
    name: "Arrange Trainset",
    prepare: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(preSkeletons_templateObject36 || (preSkeletons_templateObject36 = preSkeletons_taggedTemplateLiteral(["model train set"])))),
    completed: () => (0,external_kolmafia_namespaceObject.getWorkshed)() === template_string_$item(preSkeletons_templateObject37 || (preSkeletons_templateObject37 = preSkeletons_taggedTemplateLiteral(["model train set"]))) && property_get("trainsetConfiguration") !== "",
    do: () => setConfiguration([Station.COAL_HOPPER, Station.BRAWN_SILO, Station.VIEWING_PLATFORM, Station.WATER_BRIDGE, Station.GAIN_MEAT, Station.TOWER_FIZZY, Station.CANDY_FACTORY, Station.TRACKSIDE_DINER])
  }, {
    name: "Start Guild Unlock",
    completed: () => property_get(guildQuest) === "started",
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)(guildURL);
      (0,external_kolmafia_namespaceObject.visitUrl)("guild.php?place=challenge");
    }
  }]
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifierTypes.js
// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var modifierTypes_booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var modifierTypes_numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];
;// CONCATENATED MODULE: ./node_modules/libram/dist/modifier.js
var modifier_templateObject;
function modifier_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function modifier_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function modifier_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? modifier_ownKeys(Object(source), !0).forEach(function (key) { modifier_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : modifier_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function modifier_defineProperty(obj, key, value) { key = modifier_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function modifier_toPropertyKey(arg) { var key = modifier_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function modifier_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/**
 * Get the value of a modifier
 *
 * @param name Modifier name
 * @param subject Subject of modifier
 * @returns Value of modifier
 */
function modifier_get(name, subject) {
  if (utils_arrayContains(name, modifierTypes_booleanModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.booleanModifier)(name) : (0,external_kolmafia_namespaceObject.booleanModifier)(subject, name);
  }
  if (utils_arrayContains(name, classModifiers)) {
    return (0,external_kolmafia_namespaceObject.classModifier)(subject, name);
  }
  if (utils_arrayContains(name, effectModifiers)) {
    return (0,external_kolmafia_namespaceObject.effectModifier)(subject, name);
  }
  if (utils_arrayContains(name, monsterModifiers)) {
    return (0,external_kolmafia_namespaceObject.monsterModifier)(subject, name);
  }
  if (utils_arrayContains(name, modifierTypes_numericModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.numericModifier)(name) : (0,external_kolmafia_namespaceObject.numericModifier)(subject, name);
  }
  if (utils_arrayContains(name, skillModifiers)) {
    return (0,external_kolmafia_namespaceObject.skillModifier)(subject, name);
  }
  if (utils_arrayContains(name, stringModifiers)) {
    return subject === undefined ? (0,external_kolmafia_namespaceObject.stringModifier)(name) : (0,external_kolmafia_namespaceObject.stringModifier)(subject, name);
  }
  if (utils_arrayContains(name, statModifiers)) {
    return (0,external_kolmafia_namespaceObject.statModifier)(subject, name);
  }
}
/**
 * Merge two Modifiers objects into one, summing all numeric modifiers, ||ing all boolean modifiers, and otherwise letting the second object overwrite the first.
 *
 * @param modifiers1 Modifiers objects to be merged onto.
 * @param modifiers2 Modifiers object to merge.
 * @returns A single Modifiers object obtained by merging.
 */
function pairwiseMerge(modifiers1, modifiers2) {
  var returnValue = modifier_objectSpread(modifier_objectSpread({}, modifiers1), modifiers2);
  for (var modifier in modifiers1) {
    if (Array.from(Object.values(modifiers2)).includes(modifier)) {
      if (arrayContains(modifier, numericModifiers)) {
        var _modifiers1$modifier, _modifiers2$modifier;
        returnValue[modifier] = ((_modifiers1$modifier = modifiers1[modifier]) !== null && _modifiers1$modifier !== void 0 ? _modifiers1$modifier : 0) + ((_modifiers2$modifier = modifiers2[modifier]) !== null && _modifiers2$modifier !== void 0 ? _modifiers2$modifier : 0);
      }
      if (arrayContains(modifier, booleanModifiers)) {
        var _modifiers1$modifier2, _modifiers2$modifier2;
        returnValue[modifier] = ((_modifiers1$modifier2 = modifiers1[modifier]) !== null && _modifiers1$modifier2 !== void 0 ? _modifiers1$modifier2 : false) || ((_modifiers2$modifier2 = modifiers2[modifier]) !== null && _modifiers2$modifier2 !== void 0 ? _modifiers2$modifier2 : false);
      }
    }
  }
  return returnValue;
}
/**
 * Merge arbitrarily many Modifiers objects into one, summing all numeric modifiers, and ||ing all boolean modifiers.
 *
 * @param modifierss Modifiers objects to be merged together.
 * @returns A single Modifiers object obtained by merging.
 */
function mergeModifiers() {
  for (var _len = arguments.length, modifierss = new Array(_len), _key = 0; _key < _len; _key++) {
    modifierss[_key] = arguments[_key];
  }
  return modifierss.reduce((a, b) => pairwiseMerge(a, b), {});
}
/**
 * Prints the modtrace to the log.
 * Example: printModtrace("Meat Drop") or printModtrace(["Item Drop", "Booze Drop"])
 *
 * @param inputModifiers A string (or string[]) containing the modtrace lookup term(s).
 * @param baseModifier A string where all the info about modifiers in the string[] array can be grabbed with this one lookup term. (Automatically generated in most cases)
 * @param componentColor The print color for the sum returned for each input modifier
 * @param totalColor The print color for the total sum over every input modifier
 * @returns void
 */
function printModtrace(inputModifiers,
// the user's list of modifiers to look up
baseModifier) {
  var _htmlOutput$match, _htmlOutput$match2;
  var componentColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "purple";
  var totalColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "blue";
  if (typeof inputModifiers === "string") return printModtrace([inputModifiers], inputModifiers);else if (inputModifiers.length === 0) return;else if (!baseModifier) {
    return inputModifiers.filter(mod1 => !inputModifiers.some(mod2 => mod2 !== mod1 && mod1.includes(mod2))).forEach(baseMod => printModtrace(inputModifiers.filter(mod => mod.includes(baseMod)), baseMod));
  }
  var htmlOutput = (0,external_kolmafia_namespaceObject.cliExecuteOutput)("modtrace ".concat(baseModifier));
  // The list of matched modifiers that mafia returns
  var modtraceModifiers = Array.from((_htmlOutput$match = htmlOutput.match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _htmlOutput$match !== void 0 ? _htmlOutput$match : []).map(s => s.slice(1, -5)).slice(2);
  if (!modtraceModifiers.some(modifier => modifier.toLowerCase() === baseModifier.toLowerCase())) {
    return (0,external_kolmafia_namespaceObject.print)("Could not find exact string match of ".concat(baseModifier, " in ").concat(inputModifiers.toString()), "red");
  }
  var initialVal = baseModifier.toLowerCase() === "familiar weight" ? (() => {
    var wt = (0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)());
    (0,external_kolmafia_namespaceObject.print)("[Familiar Weight] Base weight (".concat(wt, ")"));
    return wt;
  })() : 0;
  var modifierVals = new Map(modtraceModifiers.map(modifier => [modifier, initialVal])); // Maps modifier name to its value
  var lowerCaseModifiers = inputModifiers.map(modifier => modifier.toLowerCase());
  Array.from((_htmlOutput$match2 = htmlOutput.match(RegExp(/<tr>(.*?)<\/tr>/g))) !== null && _htmlOutput$match2 !== void 0 ? _htmlOutput$match2 : []).slice(1).map(s => s.slice(4, -5)).forEach(s => {
    var _s$replace$match;
    var rowArr = Array.from((_s$replace$match = s.replace(RegExp(/><\/td>/g), ">0</td>").match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _s$replace$match !== void 0 ? _s$replace$match : []).map(s => s.slice(1, -5));
    var rowName = rowArr[1];
    rowArr.slice(2).filter((e, idx) => idx % 2 === 0).forEach((e, idx) => {
      var _modifierVals$get;
      var val = parseFloat(e);
      modifierVals.set(modtraceModifiers[idx], ((_modifierVals$get = modifierVals.get(modtraceModifiers[idx])) !== null && _modifierVals$get !== void 0 ? _modifierVals$get : 0) + val);
      if (val !== 0 && lowerCaseModifiers.includes(modtraceModifiers[idx].toLowerCase())) {
        (0,external_kolmafia_namespaceObject.print)("[".concat(modtraceModifiers[idx], "] ").concat(rowName, " (").concat(val.toFixed(1), ")"));
      }
    });
  });
  var total = utils_sum(modtraceModifiers, modifier => {
    if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
      var _modifierVals$get2;
      var modVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;
      if (have($effect(modifier_templateObject || (modifier_templateObject = modifier_taggedTemplateLiteral(["Bow-Legged Swagger"])))) && modifier.includes("Weapon Damage")) {
        (0,external_kolmafia_namespaceObject.print)("[".concat(modifier, "] Bow-Legged Swagger (").concat(modVal.toFixed(1), ")"));
        modVal *= 2;
      }
      (0,external_kolmafia_namespaceObject.print)("".concat(modifier, " => ").concat(modVal.toFixed(1)), componentColor);
      return modVal;
    } else return 0;
  });
  (0,external_kolmafia_namespaceObject.print)("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), totalColor);
}
/**
 * Take the sum of a modifier over an array of Skills, Effects, and Items
 *
 * @param modifier A NumericModifier that we want to find the total value of
 * @param subjects A rested array of Skills, Effects, and Items that we want to find the total value of
 * @returns The sum of the appropriate modifier for all of the subjects
 */
function getTotalModifier(modifier) {
  for (var _len2 = arguments.length, subjects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    subjects[_key2 - 1] = arguments[_key2];
  }
  return sum(subjects, subject => modifier_get(modifier, subject));
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2017/MummingTrunk.js
function MummingTrunk_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = MummingTrunk_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function MummingTrunk_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MummingTrunk_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MummingTrunk_arrayLikeToArray(o, minLen); }
function MummingTrunk_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/**
 * Internal function used to parse mods
 *
 * @param input The modstring used in your mummery pref
 * @returns a NumericModifier matching that string
 */
function toModifier(input) {
  var regExp = new RegExp(/Experience \((.*?)\)/);
  var matcher = input.match(regExp);
  return matcher ? "".concat(matcher[2], " Experience") : input;
}
/**
 * Parses the _mummeryMods preference into a Map for easier use.
 *
 * @returns A map, mapping Familiars to a Tuple consisting of the NumericModifier attached to the familiar, and the value thereof.
 */
function currentCostumes() {
  var entries = property_get("_mummeryMods").split(",");
  var returnValue = new Map();
  var regExp = new RegExp(/([^:]+): \[(\d+)\*fam\(([^)]+)\)\]/);
  var _iterator = MummingTrunk_createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var matcher = entry.match(regExp);
      if (matcher) {
        returnValue.set((0,external_kolmafia_namespaceObject.toFamiliar)(matcher[3]), [toModifier(matcher[1]), parseInt(matcher[2])]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/challengePaths/2015/CommunityService.js
var CommunityService_templateObject, CommunityService_templateObject2, CommunityService_templateObject3, CommunityService_templateObject4, CommunityService_templateObject5, CommunityService_templateObject6, CommunityService_templateObject7, CommunityService_templateObject8, CommunityService_templateObject9, CommunityService_templateObject10, CommunityService_templateObject11, CommunityService_templateObject12, CommunityService_templateObject13, CommunityService_templateObject14, CommunityService_templateObject15, CommunityService_templateObject16, CommunityService_templateObject17, CommunityService_templateObject18, CommunityService_templateObject19, CommunityService_templateObject20, CommunityService_templateObject21, CommunityService_templateObject22, CommunityService_templateObject23, CommunityService_templateObject24, CommunityService_templateObject25, CommunityService_templateObject26, CommunityService_templateObject27;
function CommunityService_slicedToArray(arr, i) { return CommunityService_arrayWithHoles(arr) || CommunityService_iterableToArrayLimit(arr, i) || CommunityService_unsupportedIterableToArray(arr, i) || CommunityService_nonIterableRest(); }
function CommunityService_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CommunityService_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CommunityService_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CommunityService_arrayLikeToArray(o, minLen); }
function CommunityService_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CommunityService_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function CommunityService_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CommunityService_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function CommunityService_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CommunityService_toPropertyKey(descriptor.key), descriptor); } }
function CommunityService_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommunityService_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommunityService_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function CommunityService_defineProperty(obj, key, value) { key = CommunityService_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CommunityService_toPropertyKey(arg) { var key = CommunityService_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function CommunityService_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function CommunityService_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var thralls = new Map([[$stat(CommunityService_templateObject || (CommunityService_templateObject = CommunityService_taggedTemplateLiteral(["muscle"]))), $thrall(CommunityService_templateObject2 || (CommunityService_templateObject2 = CommunityService_taggedTemplateLiteral(["Elbow Macaroni"])))], [$stat(CommunityService_templateObject3 || (CommunityService_templateObject3 = CommunityService_taggedTemplateLiteral(["moxie"]))), $thrall(CommunityService_templateObject4 || (CommunityService_templateObject4 = CommunityService_taggedTemplateLiteral(["Penne Dreadful"])))]]);
var statCommunityServicePredictor = stat => {
  return () => 60 - Math.floor(1 / 30 * ((0,external_kolmafia_namespaceObject.myBuffedstat)(stat) - (0,external_kolmafia_namespaceObject.myBasestat)(thralls.get(stat) === (0,external_kolmafia_namespaceObject.myThrall)() && !have($effect(CommunityService_templateObject5 || (CommunityService_templateObject5 = CommunityService_taggedTemplateLiteral(["Expert Oiliness"])))) ? $stat(CommunityService_templateObject6 || (CommunityService_templateObject6 = CommunityService_taggedTemplateLiteral(["mysticality"]))) : stat)));
};
var visitCouncil = () => (0,external_kolmafia_namespaceObject.visitUrl)("council.php");
var baseWeight = () => have($effect(CommunityService_templateObject7 || (CommunityService_templateObject7 = CommunityService_taggedTemplateLiteral(["Fidoxene"])))) ? 20 : (0,external_kolmafia_namespaceObject.familiarWeight)((0,external_kolmafia_namespaceObject.myFamiliar)());
var CommunityService = /*#__PURE__*/function () {
  /**
   * Class to store properties of various CS tests.
   *
   * @param id The id the game HTML uses to identify the test; this is used primarily in runChoice.
   * @param stat The principle stat the test measures, often used as more easily memorable shorthand for the specific tests
   * @param property The name of the test as a string, often used as part of the string property "csServicesPerformed".
   * @param predictor A function that returns an estimate for the number of turns that the test will take given your character's current state.
   * @param maximizeRequirements A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
   */
  function CommunityService(id, stat, property, predictor, maximizeRequirements) {
    CommunityService_classCallCheck(this, CommunityService);
    CommunityService_defineProperty(this, "choice", void 0);
    CommunityService_defineProperty(this, "stat", void 0);
    CommunityService_defineProperty(this, "property", void 0);
    CommunityService_defineProperty(this, "predictor", void 0);
    CommunityService_defineProperty(this, "maximizeRequirements", void 0);
    CommunityService_defineProperty(this, "timer", null);
    this.choice = id;
    this.stat = stat;
    this.property = property;
    this.predictor = predictor;
    this.maximizeRequirements = maximizeRequirements;
  }
  /**
   * @returns The id number of the test, used primarily in runChoice.
   */
  CommunityService_createClass(CommunityService, [{
    key: "id",
    get: function get() {
      return this.choice;
    }
    /**
     * @returns The primary stat the test measures, used primarily as memorable shorthand in place of test names.
     */
  }, {
    key: "statName",
    get: function get() {
      return this.stat;
    }
    /**
     * @returns The name of the test, used primarily as part of the string property "csServicesPerformed"
     */
  }, {
    key: "name",
    get: function get() {
      return this.property;
    }
    /**
     *  @returns The predicted number of turns this test will take given your character's current state.
     */
  }, {
    key: "prediction",
    get: function get() {
      return this.predictor();
    }
    /**
     * @returns A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
     */
  }, {
    key: "requirement",
    get: function get() {
      return this.maximizeRequirements;
    }
    /**
     * Start the time & turn counter for the Test in question.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this$timer;
      (_this$timer = this.timer) !== null && _this$timer !== void 0 ? _this$timer : this.timer = {
        time: Date.now(),
        turns: (0,external_kolmafia_namespaceObject.myTurncount)()
      };
    }
  }, {
    key: "isDone",
    value:
    /**
     * Checks the "csServicesPerformed" property to see whether mafia currently believes this test is complete.
     *
     * @returns Whether mafia currently believes this test is complete.
     */
    function isDone() {
      return property_get("csServicesPerformed").includes(this.property);
    }
    /**
     * Maximizes based on the Requirement associated with this particular test.
     */
  }, {
    key: "maximize",
    value: function maximize() {
      if (this.maximizeRequirements) this.maximizeRequirements.maximize();
    }
    /**
     * Attempts to turn in the test to the Council of Loathing.
     *
     * @returns Whether mafia believes the test is complete at the end of this function.
     */
  }, {
    key: "do",
    value: function _do() {
      if (property_get("csServicesPerformed").trim().length === 0) visitCouncil();
      visitCouncil();
      var councilText = (0,external_kolmafia_namespaceObject.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
    /**
     * Wrapper function that prepares for a test and then completes it, adding time and turn details to the log.
     *
     * @param prepare A function that does all necessary preparations for this CS test, including choosing your outfit. Optionally returns the number of turns you expect to spend preparing for the test.
     * @param maxTurns We will run the test iff the predicted/actual turns is less than or equal to this parameter.
     * @returns "completed", "failed", or "already completed".
     */
  }, {
    key: "run",
    value: function run(prepare) {
      var _this$timer2;
      var maxTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      if (this.isDone()) return "already completed";
      var _ref = (_this$timer2 = this.timer) !== null && _this$timer2 !== void 0 ? _this$timer2 : {
          time: Date.now(),
          turns: (0,external_kolmafia_namespaceObject.myTurncount)()
        },
        time = _ref.time,
        turns = _ref.turns;
      var additionalTurns;
      try {
        var result = prepare();
        additionalTurns = typeof result === "number" ? result : 0;
      } catch (e) {
        (0,external_kolmafia_namespaceObject.print)("".concat(e), "red");
        return "failed";
      }
      var prediction = this.predictor();
      var council = visitCouncil();
      var turnCost = this._actualCost(council);
      if (!turnCost) return "already completed";
      if (turnCost > Math.min(maxTurns, (0,external_kolmafia_namespaceObject.myAdventures)())) {
        return "failed";
      }
      if (!this.do()) return "failed";
      CommunityService.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - turns,
        seconds: (Date.now() - time) / 1000,
        type: "test"
      };
      return "completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function _verifyIsDone(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
    /**
     * Checks council.php to verify that a test is complete; more reliable than isDone, but requires an additional pagehit.
     *
     * @returns Whether council.php suggests that the test is complete.
     */
  }, {
    key: "verifyIsDone",
    value: function verifyIsDone() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function _actualCost(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
    /**
     * Checks council.php for the number of turns this test will take; more reliable than prediction, but requires an additional pagehit.
     *
     * @returns The number of turns to complete this test according to council.php.
     */
  }, {
    key: "actualCost",
    value: function actualCost() {
      return this._actualCost(visitCouncil());
    }
    /**
     * A log of the predicted turns, actual turns, and duration of each CS test performed.
     */
  }], [{
    key: "startTimer",
    value:
    /**
     * Start the time & turn counter for the given task
     *
     * @param name The name of the task to start the counter of
     */
    function startTimer(name) {
      if (!this.taskTimers.has(name)) {
        this.taskTimers.set(name, {
          time: Date.now(),
          turns: (0,external_kolmafia_namespaceObject.myTurncount)()
        });
      }
    }
  }, {
    key: "logTask",
    value: function logTask(name, action) {
      var _action, _this$taskTimers$get;
      var estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      var _ref2 = (_this$taskTimers$get = this.taskTimers.get(name)) !== null && _this$taskTimers$get !== void 0 ? _this$taskTimers$get : {
          time: Date.now(),
          turns: (0,external_kolmafia_namespaceObject.myTurncount)()
        },
        time = _ref2.time,
        turns = _ref2.turns;
      CommunityService.log[name] = {
        type: "task",
        turnCost: (0,external_kolmafia_namespaceObject.myTurncount)() - turns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - time) / 1000
      };
    }
  }, {
    key: "printLog",
    value:
    /**
     * Prints turncount and time details of the test in question.
     *
     * @param colour The colour (or color) you'd like the log to be printed in.
     */
    function printLog() {
      var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blue";
      var logEntries = Object.entries(CommunityService.log);
      for (var _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = CommunityService_slicedToArray(_logEntries[_i], 2),
          testName = _logEntries$_i[0],
          testEntry = _logEntries$_i[1];
        var type = testEntry.type,
          predictedTurns = testEntry.predictedTurns,
          turnCost = testEntry.turnCost,
          seconds = testEntry.seconds;
        if (type === "test") {
          (0,external_kolmafia_namespaceObject.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          (0,external_kolmafia_namespaceObject.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        } else {
          if (!(predictedTurns === 0 && turnCost === 0)) {
            (0,external_kolmafia_namespaceObject.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          }
          (0,external_kolmafia_namespaceObject.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        }
      }
      var totalTime = utils_sum(logEntries, _ref3 => {
        var _ref4 = CommunityService_slicedToArray(_ref3, 2),
          testEntry = _ref4[1];
        return testEntry.seconds;
      });
      (0,external_kolmafia_namespaceObject.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    }
    // Below, we have the tests themselves.
  }]);
  return CommunityService;
}();
CommunityService_defineProperty(CommunityService, "taskTimers", new Map());
CommunityService_defineProperty(CommunityService, "log", {});
CommunityService_defineProperty(CommunityService, "HP", new CommunityService(1, "HP", "Donate Blood", () => 60 - Math.floor(((0,external_kolmafia_namespaceObject.myMaxhp)() - (0,external_kolmafia_namespaceObject.myBuffedstat)($stat(CommunityService_templateObject8 || (CommunityService_templateObject8 = CommunityService_taggedTemplateLiteral(["muscle"])))) - 3) / 30), new Requirement(["HP"], {})));
CommunityService_defineProperty(CommunityService, "Muscle", new CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(CommunityService_templateObject9 || (CommunityService_templateObject9 = CommunityService_taggedTemplateLiteral(["Muscle"])))), new Requirement(["Muscle"], {})));
CommunityService_defineProperty(CommunityService, "Mysticality", new CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(CommunityService_templateObject10 || (CommunityService_templateObject10 = CommunityService_taggedTemplateLiteral(["Mysticality"])))), new Requirement(["Mysticality"], {})));
CommunityService_defineProperty(CommunityService, "Moxie", new CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(CommunityService_templateObject11 || (CommunityService_templateObject11 = CommunityService_taggedTemplateLiteral(["Moxie"])))), new Requirement(["Moxie"], {})));
CommunityService_defineProperty(CommunityService, "FamiliarWeight", new CommunityService(5, "Familiar Weight", "Breed More Collies", () => 60 - Math.floor((baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)()) / 5), new Requirement(["Familiar Weight"], {})));
CommunityService_defineProperty(CommunityService, "WeaponDamage", new CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", () => {
  var weaponPower = (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject12 || (CommunityService_templateObject12 = CommunityService_taggedTemplateLiteral(["weapon"])))));
  var offhandPower = (0,external_kolmafia_namespaceObject.toSlot)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject13 || (CommunityService_templateObject13 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) === $slot(CommunityService_templateObject14 || (CommunityService_templateObject14 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject15 || (CommunityService_templateObject15 = CommunityService_taggedTemplateLiteral(["off-hand"]))))) : 0;
  var familiarPower = (0,external_kolmafia_namespaceObject.toSlot)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject16 || (CommunityService_templateObject16 = CommunityService_taggedTemplateLiteral(["familiar"]))))) === $slot(CommunityService_templateObject17 || (CommunityService_templateObject17 = CommunityService_taggedTemplateLiteral(["weapon"]))) ? (0,external_kolmafia_namespaceObject.getPower)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject18 || (CommunityService_templateObject18 = CommunityService_taggedTemplateLiteral(["familiar"]))))) : 0;
  // mafia does not currently count swagger
  var multiplier = have($effect(CommunityService_templateObject19 || (CommunityService_templateObject19 = CommunityService_taggedTemplateLiteral(["Bow-Legged Swagger"])))) ? 2 : 1;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  return 60 - Math.floor(multiplier * (modifier_get("Weapon Damage") - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 0.001) - Math.floor(multiplier * modifier_get("Weapon Damage Percent") / 50 + 0.001);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
CommunityService_defineProperty(CommunityService, "SpellDamage", new CommunityService(7, "Spell Damage", "Make Sausage", () => {
  var dragonfishDamage = (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(CommunityService_templateObject20 || (CommunityService_templateObject20 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))) ? (0,external_kolmafia_namespaceObject.numericModifier)(template_string_$familiar(CommunityService_templateObject21 || (CommunityService_templateObject21 = CommunityService_taggedTemplateLiteral(["Magic Dragonfish"]))), "Spell Damage Percent", baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)(), template_string_$item.none) : 0;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  return 60 - Math.floor(modifier_get("Spell Damage") / 50 + 0.001) - Math.floor((modifier_get("Spell Damage Percent") - dragonfishDamage) / 50 + 0.001);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
CommunityService_defineProperty(CommunityService, "Noncombat", new CommunityService(8, "Non-Combat", "Be a Living Statue", () => {
  var noncombatRate = -1 * modifier_get("Combat Rate");
  var unsoftcappedRate = noncombatRate > 25 ? 25 + (noncombatRate - 25) * 5 : noncombatRate;
  return 60 - 3 * Math.floor(unsoftcappedRate / 5);
}, new Requirement(["-combat"], {})));
CommunityService_defineProperty(CommunityService, "BoozeDrop", new CommunityService(9, "Item Drop", "Make Margaritas", () => {
  var mummingCostume = currentCostumes().get((0,external_kolmafia_namespaceObject.myFamiliar)());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Item Drop", baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject22 || (CommunityService_templateObject22 = CommunityService_taggedTemplateLiteral(["familiar"]))))) + mummingBuff - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject23 || (CommunityService_templateObject23 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myFamiliar)(), "Booze Drop", baseWeight() + (0,external_kolmafia_namespaceObject.weightAdjustment)(), (0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject24 || (CommunityService_templateObject24 = CommunityService_taggedTemplateLiteral(["familiar"]))))) - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.equippedItem)($slot(CommunityService_templateObject25 || (CommunityService_templateObject25 = CommunityService_taggedTemplateLiteral(["familiar"])))), "Booze Drop");
  // Champagne doubling does NOT count for CS, so we undouble
  var multiplier = (0,external_kolmafia_namespaceObject.haveEquipped)(template_string_$item(CommunityService_templateObject26 || (CommunityService_templateObject26 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))) && property_get("garbageChampagneCharge") > 0 ? 0.5 : 1;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  return 60 - Math.floor(multiplier * (modifier_get("Item Drop") - familiarItemDrop - (0,external_kolmafia_namespaceObject.numericModifier)((0,external_kolmafia_namespaceObject.myThrall)(), "Item Drop")) / 30 + 0.001) - Math.floor((modifier_get("Booze Drop") - familiarBoozeDrop) / 15 + 0.001);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: template_string_$items(CommunityService_templateObject27 || (CommunityService_templateObject27 = CommunityService_taggedTemplateLiteral(["broken champagne bottle"])))
})));
CommunityService_defineProperty(CommunityService, "HotRes", new CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", () => 60 - modifier_get("Hot Resistance"), new Requirement(["Hot Resistance"], {})));
CommunityService_defineProperty(CommunityService, "CoilWire", new CommunityService(11, "Coil Wire", "Coil Wire", () => 60, new Requirement([], {})));
CommunityService_defineProperty(CommunityService, "donate", () => {
  visitCouncil();
  (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1089&option=30");
});

;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var CombatLoversLocket_templateObject;
function CombatLoversLocket_slicedToArray(arr, i) { return CombatLoversLocket_arrayWithHoles(arr) || CombatLoversLocket_iterableToArrayLimit(arr, i) || CombatLoversLocket_unsupportedIterableToArray(arr, i) || CombatLoversLocket_nonIterableRest(); }
function CombatLoversLocket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CombatLoversLocket_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CombatLoversLocket_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CombatLoversLocket_arrayLikeToArray(o, minLen); }
function CombatLoversLocket_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CombatLoversLocket_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function CombatLoversLocket_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CombatLoversLocket_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var locket = template_string_$item(CombatLoversLocket_templateObject || (CombatLoversLocket_templateObject = CombatLoversLocket_taggedTemplateLiteral(["combat lover's locket"])));
/**
 * @returns Whether you `have` the Combat Lover's Locket
 */
function CombatLoversLocket_have() {
  return have(locket);
}
/**
 * Filters the set of all unlocked locket monsters to only the ones available to be locketed right now.
 *
 * @returns An array consisting of all Monsters you can fight with your locket right now.
 */
function availableLocketMonsters() {
  if (reminiscesLeft() === 0) return [];
  return Object.entries(getLocketMonsters()).filter(_ref => {
    var _ref2 = CombatLoversLocket_slicedToArray(_ref, 2),
      unused = _ref2[1];
    return unused;
  }).map(_ref3 => {
    var _ref4 = CombatLoversLocket_slicedToArray(_ref3, 1),
      name = _ref4[0];
    return toMonster(name);
  });
}
/**
 * Parses getLocketMonsters and returns the collection of all Monsters as an Array.
 *
 * @returns An array consisting of all Monsters you can hypothetically fight, regardless of whether they've been fought today.
 */
function unlockedLocketMonsters() {
  return Object.entries(getLocketMonsters()).map(_ref5 => {
    var _ref6 = CombatLoversLocket_slicedToArray(_ref5, 1),
      name = _ref6[0];
    return toMonster(name);
  });
}
function parseLocketProperty() {
  return property_get("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 *
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */
function reminiscesLeft() {
  return CombatLoversLocket_have() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 *
 * @returns An array consisting of the Monsters reminisced today.
 */
function monstersReminisced() {
  return parseLocketProperty().map(id => (0,external_kolmafia_namespaceObject.toMonster)(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 *
 * @param monster The Monster to fight
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */
function reminisce(monster) {
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0 || !(0,external_kolmafia_namespaceObject.getLocketMonsters)()[monster.name]) {
    return false;
  }
  (0,external_kolmafia_namespaceObject.cliExecute)("reminisce ".concat(monster));
  (0,external_kolmafia_namespaceObject.runCombat)();
  return monstersReminisced().includes(monster);
}
/**
 * This function efficiently evaluates all of an adventurer's possibly reminiscable monsters, placing them through a filtering criteria and evaluating them based on a passed function.
 *
 * @param criteria A filtering function for delineating which monsters are "fair game" for the search, such as "is this monster free".
 * @param value A function for deciding which monsters are "better" than others.
 * @returns A singular monster that fulfills the criteria function and maximizes the value function.
 */
function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => 1;
  if (!CombatLoversLocket_have() || reminiscesLeft() === 0) return null;
  var options = availableLocketMonsters().filter(criteria);
  if (!options.length) return null;
  return options.reduce((a, b) => value(a) > value(b) ? a : b);
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2020/Cartography.js
var Cartography_templateObject, Cartography_templateObject2;
function Cartography_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var passive = template_string_$skill(Cartography_templateObject || (Cartography_templateObject = Cartography_taggedTemplateLiteral(["Comprehensive Cartography"])));
/**
 * Determines whether you `have` the skill Comprehensive Cartography
 *
 * @returns Whether you currently `have` the skill
 */
function Cartography_have() {
  return have(passive);
}
/**
 * Map a particular monster in a particular location
 * You'll need to set your autoattack or CCS in advance of using this. Additionally, it will loop to try to avoid time-spinner pranks or zone intro adventures
 *
 * @param location The location to target
 * @param monster The monster to target
 * @returns Whether we successfully mapped the monster
 */
function mapMonster(location, monster) {
  if (!Cartography_have()) return false;
  if (property_get("_monstersMapped") >= 3) return false;
  if (!(0,external_kolmafia_namespaceObject.canAdventure)(location)) return false;
  (0,external_kolmafia_namespaceObject.useSkill)(template_string_$skill(Cartography_templateObject2 || (Cartography_templateObject2 = Cartography_taggedTemplateLiteral(["Map the Monsters"]))));
  if (!property_get("mappingMonsters")) return false;
  var turns = (0,external_kolmafia_namespaceObject.myTurncount)();
  while ((0,external_kolmafia_namespaceObject.currentRound)() < 1) {
    // Not in combat
    if ((0,external_kolmafia_namespaceObject.myTurncount)() > turns) {
      throw new Error("Map the Monsters unsuccessful?");
    }
    (0,external_kolmafia_namespaceObject.visitUrl)((0,external_kolmafia_namespaceObject.toUrl)(location));
    if ((0,external_kolmafia_namespaceObject.handlingChoice)() && (0,external_kolmafia_namespaceObject.lastChoice)() === 1435) {
      (0,external_kolmafia_namespaceObject.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id));
      return true;
    } else {
      (0,external_kolmafia_namespaceObject.runChoice)(-1, false);
    }
  }
  return false;
}
;// CONCATENATED MODULE: ./src/tasks/skeletons.ts
var skeletons_templateObject, skeletons_templateObject2, skeletons_templateObject3, skeletons_templateObject4, skeletons_templateObject5, skeletons_templateObject6, skeletons_templateObject7, skeletons_templateObject8, skeletons_templateObject9, skeletons_templateObject10, skeletons_templateObject11, skeletons_templateObject12, skeletons_templateObject13, skeletons_templateObject14, skeletons_templateObject15, skeletons_templateObject16, skeletons_templateObject17, skeletons_templateObject18, skeletons_templateObject19, skeletons_templateObject20, skeletons_templateObject21, skeletons_templateObject22, skeletons_templateObject23, skeletons_templateObject24, skeletons_templateObject25, skeletons_templateObject26, skeletons_templateObject27, skeletons_templateObject28, skeletons_templateObject29, skeletons_templateObject30, skeletons_templateObject31, skeletons_templateObject32, skeletons_templateObject33, skeletons_templateObject34, skeletons_templateObject35, skeletons_templateObject36, skeletons_templateObject37, skeletons_templateObject38, skeletons_templateObject39, skeletons_templateObject40, skeletons_templateObject41, skeletons_templateObject42, skeletons_templateObject43, skeletons_templateObject44, skeletons_templateObject45, skeletons_templateObject46, skeletons_templateObject47, skeletons_templateObject48, skeletons_templateObject49, skeletons_templateObject50, skeletons_templateObject51, skeletons_templateObject52, skeletons_templateObject53, skeletons_templateObject54, skeletons_templateObject55, skeletons_templateObject56, skeletons_templateObject57, skeletons_templateObject58;
function skeletons_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var curWeapon = template_string_$item(skeletons_templateObject || (skeletons_templateObject = skeletons_taggedTemplateLiteral(["June cleaver"])));
var skeletonsQuest = {
  name: "Skeletons to Wire Coiling",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [{
    name: "Open Zones",
    completed: () => property_get("_mustardServiceDiner") === "true",
    do: () => {
      (0,external_kolmafia_namespaceObject.adv1)($location(skeletons_templateObject2 || (skeletons_templateObject2 = skeletons_taggedTemplateLiteral(["Uncle Gator's Country Fun-Time Liquid Waste Sluice"]))), -1, "abort;");
      _set("_mustardServiceDiner", "true");
    }
  }, {
    name: "June Cleave",
    ready: () => property_get("_juneCleaverFightsLeft") === 0,
    prepare: () => curWeapon = (0,external_kolmafia_namespaceObject.equippedItem)($slot(skeletons_templateObject3 || (skeletons_templateObject3 = skeletons_taggedTemplateLiteral(["weapon"])))),
    completed: () => property_get("_juneCleaverFightsLeft") > 0,
    do: () => (0,external_kolmafia_namespaceObject.adv1)($location(skeletons_templateObject4 || (skeletons_templateObject4 = skeletons_taggedTemplateLiteral(["The Sleazy Back Alley"]))), -1, "abort;"),
    outfit: {
      weapon: template_string_$item(skeletons_templateObject5 || (skeletons_templateObject5 = skeletons_taggedTemplateLiteral(["June cleaver"])))
    },
    post: () => {
      if (have($effect(skeletons_templateObject6 || (skeletons_templateObject6 = skeletons_taggedTemplateLiteral(["Beaten Up"]))))) {
        uneffect($effect(skeletons_templateObject7 || (skeletons_templateObject7 = skeletons_taggedTemplateLiteral(["Beaten Up"]))));
      }
      (0,external_kolmafia_namespaceObject.equip)($slot(skeletons_templateObject8 || (skeletons_templateObject8 = skeletons_taggedTemplateLiteral(["weapon"]))), curWeapon);
    }
  }, {
    name: "Fold the able",
    completed: () => have(template_string_$item(skeletons_templateObject9 || (skeletons_templateObject9 = skeletons_taggedTemplateLiteral(["wad of used tape"])))) && property_get("parkaMode") === "kachungasaur" && property_get("backupCameraMode") === "init" || getKramcoWandererChance() < 1,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("fold wad of used tape; parka kachungasaur; umbrella dr; backupcamera init")
  }, {
    name: "Pre-Coil Kramco",
    completed: () => getKramcoWandererChance() < 1,
    do: () => {
      (0,external_kolmafia_namespaceObject.adv1)(guildZone, -1, "attack; repeat;");
    },
    post: () => {
      if (have($effect(skeletons_templateObject10 || (skeletons_templateObject10 = skeletons_taggedTemplateLiteral(["Beaten Up"])))) && !have(template_string_$item(skeletons_templateObject11 || (skeletons_templateObject11 = skeletons_taggedTemplateLiteral(["magical sausage casing"]))))) {
        (0,external_kolmafia_namespaceObject.abort)("Died on first sosig attempt?");
      }
    },
    outfit: {
      hat: template_string_$item(skeletons_templateObject12 || (skeletons_templateObject12 = skeletons_taggedTemplateLiteral(["wad of used tape"]))),
      shirt: template_string_$item(skeletons_templateObject13 || (skeletons_templateObject13 = skeletons_taggedTemplateLiteral(["Jurassic Parka"]))),
      weapon: template_string_$item(skeletons_templateObject14 || (skeletons_templateObject14 = skeletons_taggedTemplateLiteral(["June cleaver"]))),
      offhand: template_string_$item(skeletons_templateObject15 || (skeletons_templateObject15 = skeletons_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      pants: template_string_$item(skeletons_templateObject16 || (skeletons_templateObject16 = skeletons_taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: template_string_$item(skeletons_templateObject17 || (skeletons_templateObject17 = skeletons_taggedTemplateLiteral(["backup camera"]))),
      acc2: template_string_$item(skeletons_templateObject18 || (skeletons_templateObject18 = skeletons_taggedTemplateLiteral(["your cowboy boots"]))),
      acc3: template_string_$item(skeletons_templateObject19 || (skeletons_templateObject19 = skeletons_taggedTemplateLiteral(["combat lover's locket"]))),
      familiar: template_string_$familiar(skeletons_templateObject20 || (skeletons_templateObject20 = skeletons_taggedTemplateLiteral(["Melodramedary"]))),
      famequip: template_string_$item(skeletons_templateObject21 || (skeletons_templateObject21 = skeletons_taggedTemplateLiteral(["tiny stillsuit"])))
    }
  }, {
    name: "Red Skeleton",
    prepare: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(skeletons_templateObject22 || (skeletons_templateObject22 = skeletons_taggedTemplateLiteral(["red rocket"])))),
    completed: () => property_get("lastCopyableMonster") === $monster(skeletons_templateObject23 || (skeletons_templateObject23 = skeletons_taggedTemplateLiteral(["red skeleton"]))) || property_get("_locketMonstersFought").includes("1521"),
    do: () => {
      reminisce($monster(skeletons_templateObject24 || (skeletons_templateObject24 = skeletons_taggedTemplateLiteral(["red skeleton"]))));
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(skeletons_templateObject25 || (skeletons_templateObject25 = skeletons_taggedTemplateLiteral(["Feel Hatred"])))).abort()),
    post: () => (0,external_kolmafia_namespaceObject.cliExecute)("umbrella ml; backupcamera ml; parka dilophosaur")
  }, {
    name: "Novelty Tropical Skeleton",
    ready: () => property_get("lastCopyableMonster") === $monster(skeletons_templateObject26 || (skeletons_templateObject26 = skeletons_taggedTemplateLiteral(["red skeleton"]))) && property_get("parkaMode") === "dilophosaur",
    completed: () => have($effect(skeletons_templateObject27 || (skeletons_templateObject27 = skeletons_taggedTemplateLiteral(["Everything Looks Yellow"])))) && have(template_string_$item(skeletons_templateObject28 || (skeletons_templateObject28 = skeletons_taggedTemplateLiteral(["cherry"])))),
    do: () => {
      mapMonster($location(skeletons_templateObject29 || (skeletons_templateObject29 = skeletons_taggedTemplateLiteral(["The Skeleton Store"]))), $monster(skeletons_templateObject30 || (skeletons_templateObject30 = skeletons_taggedTemplateLiteral(["novelty tropical skeleton"]))));
    },
    combat: new CombatStrategy().macro(Macro.tryItem(template_string_$item(skeletons_templateObject31 || (skeletons_templateObject31 = skeletons_taggedTemplateLiteral(["red rocket"])))).trySkill(template_string_$skill(skeletons_templateObject32 || (skeletons_templateObject32 = skeletons_taggedTemplateLiteral(["Feel Nostalgic"])))).trySkill(template_string_$skill(skeletons_templateObject33 || (skeletons_templateObject33 = skeletons_taggedTemplateLiteral(["Spit jurassic acid"])))).abort()),
    outfit: {
      shirt: template_string_$item(skeletons_templateObject34 || (skeletons_templateObject34 = skeletons_taggedTemplateLiteral(["Jurassic Parka"])))
    },
    post: () => (0,external_kolmafia_namespaceObject.cliExecute)("parka ml")
  }, {
    name: "Red May Day",
    completed: () => [template_string_$item(skeletons_templateObject35 || (skeletons_templateObject35 = skeletons_taggedTemplateLiteral(["red box"]))), template_string_$item(skeletons_templateObject36 || (skeletons_templateObject36 = skeletons_taggedTemplateLiteral(["MayDay\u2122 supply package"])))].every(i => !have(i)),
    do: () => {
      [template_string_$item(skeletons_templateObject37 || (skeletons_templateObject37 = skeletons_taggedTemplateLiteral(["red box"]))), template_string_$item(skeletons_templateObject38 || (skeletons_templateObject38 = skeletons_taggedTemplateLiteral(["MayDay\u2122 supply package"])))].forEach(i => (0,external_kolmafia_namespaceObject.use)(1, i));
      if (have(template_string_$item(skeletons_templateObject39 || (skeletons_templateObject39 = skeletons_taggedTemplateLiteral(["space blanket"]))))) {
        (0,external_kolmafia_namespaceObject.autosell)(1, template_string_$item(skeletons_templateObject40 || (skeletons_templateObject40 = skeletons_taggedTemplateLiteral(["space blanket"]))));
      }
    }
  }, {
    name: "Purchase Fireworks Hat",
    completed: () => have(template_string_$item(skeletons_templateObject41 || (skeletons_templateObject41 = skeletons_taggedTemplateLiteral(["sombrero-mounted sparkler"])))),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(skeletons_templateObject42 || (skeletons_templateObject42 = skeletons_taggedTemplateLiteral(["sombrero-mounted sparkler"]))))
  }, {
    name: "Guild Unlock",
    completed: () => property_get(guildQuest) === "step1" || property_get(guildQuest) === "finished",
    do: guildZone,
    outfit: {
      hat: template_string_$item(skeletons_templateObject43 || (skeletons_templateObject43 = skeletons_taggedTemplateLiteral(["sombrero-mounted sparkler"]))),
      familiar: template_string_$familiar(skeletons_templateObject44 || (skeletons_templateObject44 = skeletons_taggedTemplateLiteral(["Pair of Stomping Boots"]))),
      famequip: template_string_$item(skeletons_templateObject45 || (skeletons_templateObject45 = skeletons_taggedTemplateLiteral(["tiny stillsuit"])))
    },
    combat: new CombatStrategy().macro(Macro.runaway().abort()),
    effects: [$effect(skeletons_templateObject46 || (skeletons_templateObject46 = skeletons_taggedTemplateLiteral(["Musk of the Moose"]))), $effect(skeletons_templateObject47 || (skeletons_templateObject47 = skeletons_taggedTemplateLiteral(["Carlweather's Cantata of Confrontation"]))), $effect(skeletons_templateObject48 || (skeletons_templateObject48 = skeletons_taggedTemplateLiteral(["Empathy"]))), $effect(skeletons_templateObject49 || (skeletons_templateObject49 = skeletons_taggedTemplateLiteral(["Blood Bond"])))]
  }, {
    name: "Cemetary Unlock",
    completed: () => (0,external_kolmafia_namespaceObject.canAdventure)($location(skeletons_templateObject50 || (skeletons_templateObject50 = skeletons_taggedTemplateLiteral(["The Unquiet Garves"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("guild.php?guild=f");
      (0,external_kolmafia_namespaceObject.visitUrl)("guild.php?place=challenge");
      (0,external_kolmafia_namespaceObject.visitUrl)("guild.php?place=scg");
      (0,external_kolmafia_namespaceObject.visitUrl)("guild.php?place=scg");
    },
    outfit: {
      familiar: template_string_$familiar(skeletons_templateObject51 || (skeletons_templateObject51 = skeletons_taggedTemplateLiteral(["Melodramedary"]))),
      famequip: template_string_$item(skeletons_templateObject52 || (skeletons_templateObject52 = skeletons_taggedTemplateLiteral(["tiny stillsuit"])))
    }
  }, {
    name: "Numberology Attempt DEUX",
    completed: () => property_get("_universeCalculated") > 0 || !Object.keys((0,external_kolmafia_namespaceObject.reverseNumberology)()).includes("69"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("numberology 69")
  }, {
    name: "Guarantee 61+ adventures",
    completed: () => (0,external_kolmafia_namespaceObject.myAdventures)() >= 61,
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(skeletons_templateObject53 || (skeletons_templateObject53 = skeletons_taggedTemplateLiteral(["11-leaf clover"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(skeletons_templateObject54 || (skeletons_templateObject54 = skeletons_taggedTemplateLiteral(["11-leaf clover"]))));
      (0,external_kolmafia_namespaceObject.adv1)($location(skeletons_templateObject55 || (skeletons_templateObject55 = skeletons_taggedTemplateLiteral(["The Sleazy Back Alley"]))));
      ensureEffect($effect(skeletons_templateObject56 || (skeletons_templateObject56 = skeletons_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_namespaceObject.drink)(1, template_string_$item(skeletons_templateObject57 || (skeletons_templateObject57 = skeletons_taggedTemplateLiteral(["distilled fortified wine"]))));
      uneffect($effect(skeletons_templateObject58 || (skeletons_templateObject58 = skeletons_taggedTemplateLiteral(["Ode to Booze"]))));
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/coil.ts

var CoilQuest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [{
    name: "Coil that wire!",
    completed: () => CommunityService.CoilWire.isDone(),
    do: () => CommunityService.CoilWire.run(() => _set("_mustardServiceTests", "60"), 60),
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2018/LatteLoversMembersMug.js
var LatteLoversMembersMug_templateObject, LatteLoversMembersMug_templateObject2, LatteLoversMembersMug_templateObject3, LatteLoversMembersMug_templateObject4, LatteLoversMembersMug_templateObject5, LatteLoversMembersMug_templateObject6, LatteLoversMembersMug_templateObject7, LatteLoversMembersMug_templateObject8, LatteLoversMembersMug_templateObject9, LatteLoversMembersMug_templateObject10, LatteLoversMembersMug_templateObject11, LatteLoversMembersMug_templateObject12, LatteLoversMembersMug_templateObject13, LatteLoversMembersMug_templateObject14, LatteLoversMembersMug_templateObject15, LatteLoversMembersMug_templateObject16, LatteLoversMembersMug_templateObject17, LatteLoversMembersMug_templateObject18, LatteLoversMembersMug_templateObject19, LatteLoversMembersMug_templateObject20, LatteLoversMembersMug_templateObject21, LatteLoversMembersMug_templateObject22, LatteLoversMembersMug_templateObject23, LatteLoversMembersMug_templateObject24, LatteLoversMembersMug_templateObject25, LatteLoversMembersMug_templateObject26, LatteLoversMembersMug_templateObject27, LatteLoversMembersMug_templateObject28, LatteLoversMembersMug_templateObject29, LatteLoversMembersMug_templateObject30, LatteLoversMembersMug_templateObject31, LatteLoversMembersMug_templateObject32, LatteLoversMembersMug_templateObject33, LatteLoversMembersMug_templateObject34, LatteLoversMembersMug_templateObject35, LatteLoversMembersMug_templateObject36, LatteLoversMembersMug_templateObject37, LatteLoversMembersMug_templateObject38, LatteLoversMembersMug_templateObject39, LatteLoversMembersMug_templateObject40, LatteLoversMembersMug_templateObject41, LatteLoversMembersMug_templateObject42, LatteLoversMembersMug_templateObject43, LatteLoversMembersMug_templateObject44, LatteLoversMembersMug_templateObject45, LatteLoversMembersMug_templateObject46, LatteLoversMembersMug_templateObject47, LatteLoversMembersMug_templateObject48, LatteLoversMembersMug_templateObject49, LatteLoversMembersMug_templateObject50, LatteLoversMembersMug_templateObject51, LatteLoversMembersMug_templateObject52, LatteLoversMembersMug_templateObject53;
function LatteLoversMembersMug_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






/**
 * @returns Whether we `have` the latte lovers member's mug
 */
function LatteLoversMembersMug_have() {
  return haveItem($item(LatteLoversMembersMug_templateObject || (LatteLoversMembersMug_templateObject = LatteLoversMembersMug_taggedTemplateLiteral(["latte lovers member's mug"]))));
}
/**
 * @returns The current target of `Offer Latte`, assuming the effect is active; otherwise, `null`
 */
function sniffedMonster() {
  return Counter.exists("Latte Monster") ? get("_latteMonster") : null;
}
/**
 * @returns The number of latte refills remaining for the day
 */
function refillsRemaining() {
  return clamp(3 - property_get("_latteRefillsUsed"), 0, 3);
}
var INGREDIENTS = {
  ancient: {
    modifier: {
      "Spooky Damage": 50
    },
    location: $location(LatteLoversMembersMug_templateObject2 || (LatteLoversMembersMug_templateObject2 = LatteLoversMembersMug_taggedTemplateLiteral(["The Mouldering Mansion"])))
  },
  asp: {
    modifier: {
      "Weapon Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject3 || (LatteLoversMembersMug_templateObject3 = LatteLoversMembersMug_taggedTemplateLiteral(["The Middle Chamber"])))
  },
  basil: {
    modifier: {
      "HP Regen Min": 5,
      "HP Regen Max": 5
    },
    location: $location(LatteLoversMembersMug_templateObject4 || (LatteLoversMembersMug_templateObject4 = LatteLoversMembersMug_taggedTemplateLiteral(["The Overgrown Lot"])))
  },
  belgian: {
    modifier: {
      "Moxie Percent": 20,
      "Mysticality Percent": 20,
      "Muscle Percent": 20
    },
    location: $location(LatteLoversMembersMug_templateObject5 || (LatteLoversMembersMug_templateObject5 = LatteLoversMembersMug_taggedTemplateLiteral(["Whitey's Grove"])))
  },
  chalk: {
    modifier: {
      "Cold Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject6 || (LatteLoversMembersMug_templateObject6 = LatteLoversMembersMug_taggedTemplateLiteral(["The Haunted Billiards Room"])))
  },
  "bug-thistle": {
    modifier: {
      Mysticality: 20
    },
    location: $location(LatteLoversMembersMug_templateObject7 || (LatteLoversMembersMug_templateObject7 = LatteLoversMembersMug_taggedTemplateLiteral(["The Bugbear Pen"])))
  },
  butternut: {
    modifier: {
      "Spell Damage": 10
    },
    location: $location(LatteLoversMembersMug_templateObject8 || (LatteLoversMembersMug_templateObject8 = LatteLoversMembersMug_taggedTemplateLiteral(["Madness Bakery"])))
  },
  cajun: {
    modifier: {
      "Meat Drop": 40
    },
    location: $location(LatteLoversMembersMug_templateObject9 || (LatteLoversMembersMug_templateObject9 = LatteLoversMembersMug_taggedTemplateLiteral(["The Black Forest"])))
  },
  carrot: {
    modifier: {
      "Item Drop": 20
    },
    location: $location(LatteLoversMembersMug_templateObject10 || (LatteLoversMembersMug_templateObject10 = LatteLoversMembersMug_taggedTemplateLiteral(["The Dire Warren"])))
  },
  carrrdamom: {
    modifier: {
      "MP Regen Min": 4,
      "MP Regen Max": 6
    },
    location: $location(LatteLoversMembersMug_templateObject11 || (LatteLoversMembersMug_templateObject11 = LatteLoversMembersMug_taggedTemplateLiteral(["Barrrney's Barrr"])))
  },
  chili: {
    modifier: {
      "Hot Resistance": 3
    },
    location: $location(LatteLoversMembersMug_templateObject12 || (LatteLoversMembersMug_templateObject12 = LatteLoversMembersMug_taggedTemplateLiteral(["The Haunted Kitchen"])))
  },
  clove: {
    modifier: {
      "Stench Resistance": 3
    },
    location: $location(LatteLoversMembersMug_templateObject13 || (LatteLoversMembersMug_templateObject13 = LatteLoversMembersMug_taggedTemplateLiteral(["The Sleazy Back Alley"])))
  },
  coal: {
    modifier: {
      "Hot Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject14 || (LatteLoversMembersMug_templateObject14 = LatteLoversMembersMug_taggedTemplateLiteral(["The Haunted Boiler Room"])))
  },
  cocoa: {
    modifier: {
      "Cold Resistance": 3
    },
    location: $location(LatteLoversMembersMug_templateObject15 || (LatteLoversMembersMug_templateObject15 = LatteLoversMembersMug_taggedTemplateLiteral(["The Icy Peak"])))
  },
  diet: {
    modifier: {
      Initiative: 50
    },
    location: $location(LatteLoversMembersMug_templateObject16 || (LatteLoversMembersMug_templateObject16 = LatteLoversMembersMug_taggedTemplateLiteral(["Battlefield (No Uniform)"])))
  },
  dwarf: {
    modifier: {
      Muscle: 30
    },
    location: $location(LatteLoversMembersMug_templateObject17 || (LatteLoversMembersMug_templateObject17 = LatteLoversMembersMug_taggedTemplateLiteral(["Itznotyerzitz Mine"])))
  },
  dyspepsi: {
    modifier: {
      Initiative: 25
    },
    location: $location(LatteLoversMembersMug_templateObject18 || (LatteLoversMembersMug_templateObject18 = LatteLoversMembersMug_taggedTemplateLiteral(["Battlefield (Dyspepsi Uniform)"])))
  },
  filth: {
    modifier: {
      "Damage Reduction": 20
    },
    location: $location(LatteLoversMembersMug_templateObject19 || (LatteLoversMembersMug_templateObject19 = LatteLoversMembersMug_taggedTemplateLiteral(["The Feeding Chamber"])))
  },
  grass: {
    modifier: {
      Experience: 3
    },
    location: $location(LatteLoversMembersMug_templateObject20 || (LatteLoversMembersMug_templateObject20 = LatteLoversMembersMug_taggedTemplateLiteral(["The Hidden Park"])))
  },
  fungus: {
    modifier: {
      "Maximum MP": 30
    },
    location: $location(LatteLoversMembersMug_templateObject21 || (LatteLoversMembersMug_templateObject21 = LatteLoversMembersMug_taggedTemplateLiteral(["The Fungal Nethers"])))
  },
  mold: {
    modifier: {
      "Spooky Damage": 20
    },
    location: $location(LatteLoversMembersMug_templateObject22 || (LatteLoversMembersMug_templateObject22 = LatteLoversMembersMug_taggedTemplateLiteral(["The Unquiet Garves"])))
  },
  greek: {
    modifier: {
      "Sleaze Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject23 || (LatteLoversMembersMug_templateObject23 = LatteLoversMembersMug_taggedTemplateLiteral(["Wartime Frat House"])))
  },
  grobold: {
    modifier: {
      "Sleaze Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject24 || (LatteLoversMembersMug_templateObject24 = LatteLoversMembersMug_taggedTemplateLiteral(["The Old Rubee Mine"])))
  },
  guarna: {
    modifier: {
      Adventures: 4
    },
    location: $location(LatteLoversMembersMug_templateObject25 || (LatteLoversMembersMug_templateObject25 = LatteLoversMembersMug_taggedTemplateLiteral(["The Bat Hole Entrance"])))
  },
  gunpowder: {
    modifier: {
      "Weapon Damage": 50
    },
    location: $location(LatteLoversMembersMug_templateObject26 || (LatteLoversMembersMug_templateObject26 = LatteLoversMembersMug_taggedTemplateLiteral(["1st Floor, Shiawase-Mitsuhama Building"])))
  },
  healing: {
    modifier: {
      "HP Regen Min": 10,
      "HP Regen Max": 20
    },
    location: $location(LatteLoversMembersMug_templateObject27 || (LatteLoversMembersMug_templateObject27 = LatteLoversMembersMug_taggedTemplateLiteral(["The Daily Dungeon"])))
  },
  hellion: {
    modifier: {
      "PvP Fights": 6
    },
    location: $location(LatteLoversMembersMug_templateObject28 || (LatteLoversMembersMug_templateObject28 = LatteLoversMembersMug_taggedTemplateLiteral(["The Dark Neck of the Woods"])))
  },
  hobo: {
    modifier: {
      "Damage Absorption": 50
    },
    location: $location(LatteLoversMembersMug_templateObject29 || (LatteLoversMembersMug_templateObject29 = LatteLoversMembersMug_taggedTemplateLiteral(["Hobopolis Town Square"])))
  },
  greasy: {
    modifier: {
      "Muscle Percent": 50
    },
    location: $location(LatteLoversMembersMug_templateObject30 || (LatteLoversMembersMug_templateObject30 = LatteLoversMembersMug_taggedTemplateLiteral(["Cobb's Knob Barracks"])))
  },
  wing: {
    modifier: {
      "Combat Rate": 10
    },
    location: $location(LatteLoversMembersMug_templateObject31 || (LatteLoversMembersMug_templateObject31 = LatteLoversMembersMug_taggedTemplateLiteral(["The Dark Heart of the Woods"])))
  },
  ink: {
    modifier: {
      "Combat Rate": -10
    },
    location: $location(LatteLoversMembersMug_templateObject32 || (LatteLoversMembersMug_templateObject32 = LatteLoversMembersMug_taggedTemplateLiteral(["The Haunted Library"])))
  },
  kombucha: {
    modifier: {
      "Stench Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject33 || (LatteLoversMembersMug_templateObject33 = LatteLoversMembersMug_taggedTemplateLiteral(["Wartime Hippy Camp"])))
  },
  lihc: {
    modifier: {
      "Spooky Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject34 || (LatteLoversMembersMug_templateObject34 = LatteLoversMembersMug_taggedTemplateLiteral(["The Defiled Niche"])))
  },
  lizard: {
    modifier: {
      "MP Regen Min": 5,
      "MP Regen Max": 15
    },
    location: $location(LatteLoversMembersMug_templateObject35 || (LatteLoversMembersMug_templateObject35 = LatteLoversMembersMug_taggedTemplateLiteral(["The Arid, Extra-Dry Desert"])))
  },
  macaroni: {
    modifier: {
      "Maximum HP": 20
    },
    location: $location(LatteLoversMembersMug_templateObject36 || (LatteLoversMembersMug_templateObject36 = LatteLoversMembersMug_taggedTemplateLiteral(["The Haunted Pantry"])))
  },
  mega: {
    modifier: {
      "Moxie Percent": 50
    },
    location: $location(LatteLoversMembersMug_templateObject37 || (LatteLoversMembersMug_templateObject37 = LatteLoversMembersMug_taggedTemplateLiteral(["Cobb's Knob Laboratory"])))
  },
  oil: {
    modifier: {
      "Sleaze Damage": 20
    },
    location: $location(LatteLoversMembersMug_templateObject38 || (LatteLoversMembersMug_templateObject38 = LatteLoversMembersMug_taggedTemplateLiteral(["The Old Landfill"])))
  },
  msg: {
    modifier: {
      "Critical Hit Percent": 15
    },
    location: $location(LatteLoversMembersMug_templateObject39 || (LatteLoversMembersMug_templateObject39 = LatteLoversMembersMug_taggedTemplateLiteral(["The Briniest Deepests"])))
  },
  norwhal: {
    modifier: {
      "Maximum HP Percent": 200
    },
    location: $location(LatteLoversMembersMug_templateObject40 || (LatteLoversMembersMug_templateObject40 = LatteLoversMembersMug_taggedTemplateLiteral(["The Ice Hole"])))
  },
  paint: {
    modifier: {
      "Prismatic Damage": 5
    },
    location: $location(LatteLoversMembersMug_templateObject41 || (LatteLoversMembersMug_templateObject41 = LatteLoversMembersMug_taggedTemplateLiteral(["The Haunted Gallery"])))
  },
  paradise: {
    modifier: {
      Moxie: 20,
      Muscle: 20,
      Mysticality: 20
    },
    location: $location(LatteLoversMembersMug_templateObject42 || (LatteLoversMembersMug_templateObject42 = LatteLoversMembersMug_taggedTemplateLiteral(["The Stately Pleasure Dome"])))
  },
  rawhide: {
    modifier: {
      "Familiar Weight": 5
    },
    location: $location(LatteLoversMembersMug_templateObject43 || (LatteLoversMembersMug_templateObject43 = LatteLoversMembersMug_taggedTemplateLiteral(["The Spooky Forest"])))
  },
  rock: {
    modifier: {
      "Critical Hit Percent": 10
    },
    location: $location(LatteLoversMembersMug_templateObject44 || (LatteLoversMembersMug_templateObject44 = LatteLoversMembersMug_taggedTemplateLiteral(["The Brinier Deepers"])))
  },
  salt: {
    modifier: {
      "Critical Hit Percent": 5
    },
    location: $location(LatteLoversMembersMug_templateObject45 || (LatteLoversMembersMug_templateObject45 = LatteLoversMembersMug_taggedTemplateLiteral(["The Briny Deeps"])))
  },
  sandalwood: {
    modifier: {
      Moxie: 5,
      Muscle: 5,
      Mysticality: 5
    },
    location: $location(LatteLoversMembersMug_templateObject46 || (LatteLoversMembersMug_templateObject46 = LatteLoversMembersMug_taggedTemplateLiteral(["Noob Cave"])))
  },
  sausage: {
    modifier: {
      "Mysticality Percent": 50
    },
    location: $location(LatteLoversMembersMug_templateObject47 || (LatteLoversMembersMug_templateObject47 = LatteLoversMembersMug_taggedTemplateLiteral(["Cobb's Knob Kitchens"])))
  },
  space: {
    modifier: {
      Moxie: 10,
      Muscle: 10,
      Mysticality: 10
    },
    location: $location(LatteLoversMembersMug_templateObject48 || (LatteLoversMembersMug_templateObject48 = LatteLoversMembersMug_taggedTemplateLiteral(["The Hole in the Sky"])))
  },
  squash: {
    modifier: {
      "Spell Damage": 10
    },
    location: $location(LatteLoversMembersMug_templateObject49 || (LatteLoversMembersMug_templateObject49 = LatteLoversMembersMug_taggedTemplateLiteral(["The Copperhead Club"])))
  },
  teeth: {
    modifier: {
      "Spooky Damage": 25,
      "Weapon Damage": 25
    },
    location: $location(LatteLoversMembersMug_templateObject50 || (LatteLoversMembersMug_templateObject50 = LatteLoversMembersMug_taggedTemplateLiteral(["The VERY Unquiet Garves"])))
  },
  vitamin: {
    modifier: {
      "Familiar Experience": 3
    },
    location: $location(LatteLoversMembersMug_templateObject51 || (LatteLoversMembersMug_templateObject51 = LatteLoversMembersMug_taggedTemplateLiteral(["The Dark Elbow of the Woods"])))
  },
  flour: {
    modifier: {
      "Sleaze Resistance": 3
    },
    location: $location(LatteLoversMembersMug_templateObject52 || (LatteLoversMembersMug_templateObject52 = LatteLoversMembersMug_taggedTemplateLiteral(["The Road to the White Citadel"])))
  },
  squamous: {
    modifier: {
      "Spooky Resistance": 3
    },
    location: $location(LatteLoversMembersMug_templateObject53 || (LatteLoversMembersMug_templateObject53 = LatteLoversMembersMug_taggedTemplateLiteral(["The Caliginous Abyss"])))
  },
  pumpkin: {
    modifier: {
      "Mysticality Experience": 1,
      "Spell Damage": 5,
      "Mysticality Percent": 5
    },
    location: null
  },
  cinnamon: {
    modifier: {
      "Moxie Experience": 1,
      "Pickpocket Rate": 5,
      "Moxie Percent": 5
    },
    location: null
  },
  vanilla: {
    modifier: {
      "Muscle Experience": 1,
      "Weapon Damage Percent": 5,
      "Muscle Percent": 5
    },
    location: null
  }
};
/**
 * @returns An array consisting of the Ingredients you've unlocked so far this ascension
 */
function ingredientsUnlocked() {
  return property_get("latteUnlocks").split(",");
}
/**
 * Fill the latte with ingredients of your choosing
 *
 * @param ingredients Ingredients to fill the latte with
 * @returns Whether we succeeded in this endeavor
 */
function fill() {
  if (refillsRemaining() <= 0) return false;
  for (var _len = arguments.length, ingredients = new Array(_len), _key = 0; _key < _len; _key++) {
    ingredients[_key] = arguments[_key];
  }
  if (new Set(ingredients).size < 3) return false;
  if (ingredients.some(i => !ingredientsUnlocked().includes(i))) return false;
  return (0,external_kolmafia_namespaceObject.cliExecute)("latte refill ".concat(ingredients.join(" ")));
}
/**
 * @param ingredient A latte ingredient
 * @returns An object containing the modifiers associated with that latte ingredient
 */
function modifierOf(ingredient) {
  return INGREDIENTS[ingredient].modifier;
}
/**
 * @param ingredient A latte ingredient
 * @returns The location that can be used to unlock said ingredient; null if the ingredient is free
 */
function locationOf(ingredient) {
  return INGREDIENTS[ingredient].location;
}
/**
 * @returns An array consisting of all Ingredients currently in your latte
 */
function currentIngredients() {
  return getProperty("latteIngredients").split(",");
}
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_templateObject;
function Witchess_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Witchess_item = template_string_$item(Witchess_templateObject || (Witchess_templateObject = Witchess_taggedTemplateLiteral(["Witchess Set"])));
/**
 * @returns Is the Witchess installed and available in our campground?
 */
function Witchess_have() {
  return haveInCampground(Witchess_item);
}
/**
 * @returns How many Witchess fights have we done so far today?
 */
function fightsDone() {
  return get("_witchessFights");
}
var Witchess_pieces = external_kolmafia_namespaceObject.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
/**
 * Fight a Witchess piece of your choice
 *
 * @param piece The piece to fight
 * @returns The value of `runCombat()`, which is the page html of the final round
 */
function fightPiece(piece) {
  if (!Witchess_pieces.includes(piece)) throw new Error("That is not a valid piece.");
  if (!(0,external_kolmafia_namespaceObject.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }
  if (!(0,external_kolmafia_namespaceObject.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }
  if (!(0,external_kolmafia_namespaceObject.visitUrl)("choice.php?option=1&pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&whichchoice=1182&piece=").concat(piece.id), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }
  return (0,external_kolmafia_namespaceObject.runCombat)();
}
;// CONCATENATED MODULE: ./src/tasks/levelling.ts
var levelling_templateObject, levelling_templateObject2, levelling_templateObject3, levelling_templateObject4, levelling_templateObject5, levelling_templateObject6, levelling_templateObject7, levelling_templateObject8, levelling_templateObject9, levelling_templateObject10, levelling_templateObject11, levelling_templateObject12, levelling_templateObject13, levelling_templateObject14, levelling_templateObject15, levelling_templateObject16, levelling_templateObject17, levelling_templateObject18, levelling_templateObject19, levelling_templateObject20, levelling_templateObject21, levelling_templateObject22, levelling_templateObject23, levelling_templateObject24, levelling_templateObject25, levelling_templateObject26, levelling_templateObject27, levelling_templateObject28, levelling_templateObject29, levelling_templateObject30, levelling_templateObject31, levelling_templateObject32, levelling_templateObject33, levelling_templateObject34, levelling_templateObject35, levelling_templateObject36, levelling_templateObject37, levelling_templateObject38, levelling_templateObject39, levelling_templateObject40, levelling_templateObject41, levelling_templateObject42, levelling_templateObject43, levelling_templateObject44, levelling_templateObject45, levelling_templateObject46, levelling_templateObject47, levelling_templateObject48, levelling_templateObject49, levelling_templateObject50, levelling_templateObject51, levelling_templateObject52, levelling_templateObject53, levelling_templateObject54, levelling_templateObject55, levelling_templateObject56, levelling_templateObject57, levelling_templateObject58, levelling_templateObject59, levelling_templateObject60, levelling_templateObject61, levelling_templateObject62, levelling_templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223;
function levelling_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var curOffhand = template_string_$item(levelling_templateObject || (levelling_templateObject = levelling_taggedTemplateLiteral(["unbreakable umbrella"])));
var levelling_curWeapon = template_string_$item(levelling_templateObject2 || (levelling_templateObject2 = levelling_taggedTemplateLiteral(["June cleaver"])));
var levellingOutfit = {
  hat: template_string_$item(levelling_templateObject3 || (levelling_templateObject3 = levelling_taggedTemplateLiteral(["wad of used tape"]))),
  back: template_string_$item(levelling_templateObject4 || (levelling_templateObject4 = levelling_taggedTemplateLiteral(["Catherine Wheel"]))),
  shirt: template_string_$item(levelling_templateObject5 || (levelling_templateObject5 = levelling_taggedTemplateLiteral(["Jurassic Parka"]))),
  weapon: template_string_$item(levelling_templateObject6 || (levelling_templateObject6 = levelling_taggedTemplateLiteral(["June cleaver"]))),
  offhand: template_string_$item(levelling_templateObject7 || (levelling_templateObject7 = levelling_taggedTemplateLiteral(["unbreakable umbrella"]))),
  pants: template_string_$item(levelling_templateObject8 || (levelling_templateObject8 = levelling_taggedTemplateLiteral(["designer sweatpants"]))),
  acc1: template_string_$item(levelling_templateObject9 || (levelling_templateObject9 = levelling_taggedTemplateLiteral(["backup camera"]))),
  acc2: template_string_$item(levelling_templateObject10 || (levelling_templateObject10 = levelling_taggedTemplateLiteral(["your cowboy boots"]))),
  acc3: template_string_$item(levelling_templateObject11 || (levelling_templateObject11 = levelling_taggedTemplateLiteral(["combat lover's locket"]))),
  familiar: template_string_$familiar(levelling_templateObject12 || (levelling_templateObject12 = levelling_taggedTemplateLiteral(["Melodramedary"]))),
  famequip: template_string_$item(levelling_templateObject13 || (levelling_templateObject13 = levelling_taggedTemplateLiteral(["tiny stillsuit"])))
};
var facialExpression = byStat({
  Muscle: $effect(levelling_templateObject14 || (levelling_templateObject14 = levelling_taggedTemplateLiteral(["Quiet Determination"]))),
  Mysticality: $effect(levelling_templateObject15 || (levelling_templateObject15 = levelling_taggedTemplateLiteral(["Inscrutable Gaze"]))),
  Moxie: $effect(levelling_templateObject16 || (levelling_templateObject16 = levelling_taggedTemplateLiteral(["Quiet Desperation"])))
});
var showerEffect = byStat({
  Muscle: $effect(levelling_templateObject17 || (levelling_templateObject17 = levelling_taggedTemplateLiteral(["Muscle Unbound"]))),
  Mysticality: $effect(levelling_templateObject18 || (levelling_templateObject18 = levelling_taggedTemplateLiteral(["Thaumodynamic"]))),
  Moxie: $effect(levelling_templateObject19 || (levelling_templateObject19 = levelling_taggedTemplateLiteral(["So Fresh and So Clean"])))
});
var levellingEffects = [//Starter Buffs
$effect(levelling_templateObject20 || (levelling_templateObject20 = levelling_taggedTemplateLiteral(["Mariachi Mood"]))), $effect(levelling_templateObject21 || (levelling_templateObject21 = levelling_taggedTemplateLiteral(["Seal Clubbing Frenzy"]))), $effect(levelling_templateObject22 || (levelling_templateObject22 = levelling_taggedTemplateLiteral(["Saucemastery"]))), $effect(levelling_templateObject23 || (levelling_templateObject23 = levelling_taggedTemplateLiteral(["Patience of the Tortoise"]))), $effect(levelling_templateObject24 || (levelling_templateObject24 = levelling_taggedTemplateLiteral(["Disco State of Mind"]))), //Bigger stat buffs
$effect(levelling_templateObject25 || (levelling_templateObject25 = levelling_taggedTemplateLiteral(["Disco Fever"]))), $effect(levelling_templateObject26 || (levelling_templateObject26 = levelling_taggedTemplateLiteral(["Rage of the Reindeer"]))), $effect(levelling_templateObject27 || (levelling_templateObject27 = levelling_taggedTemplateLiteral(["Big"]))), $effect(levelling_templateObject28 || (levelling_templateObject28 = levelling_taggedTemplateLiteral(["Song of Bravado"]))),
//Facial
facialExpression, //Feelings
$effect(levelling_templateObject29 || (levelling_templateObject29 = levelling_taggedTemplateLiteral(["Feeling Excited"]))), $effect(levelling_templateObject30 || (levelling_templateObject30 = levelling_taggedTemplateLiteral(["Feeling Peaceful"]))), //Songs
$effect(levelling_templateObject31 || (levelling_templateObject31 = levelling_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effect(levelling_templateObject32 || (levelling_templateObject32 = levelling_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), $effect(levelling_templateObject33 || (levelling_templateObject33 = levelling_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), $effect(levelling_templateObject34 || (levelling_templateObject34 = levelling_taggedTemplateLiteral(["Aloysius' Antiphon of Aptitude"]))), //ML and Bonus Stats
$effect(levelling_templateObject35 || (levelling_templateObject35 = levelling_taggedTemplateLiteral(["Carol of the Thrills"]))), $effect(levelling_templateObject36 || (levelling_templateObject36 = levelling_taggedTemplateLiteral(["Pride of the Puffin"]))), $effect(levelling_templateObject37 || (levelling_templateObject37 = levelling_taggedTemplateLiteral(["Drescher's Annoying Noise"]))), //Defensive
$effect(levelling_templateObject38 || (levelling_templateObject38 = levelling_taggedTemplateLiteral(["Ghostly Shell"]))), $effect(levelling_templateObject39 || (levelling_templateObject39 = levelling_taggedTemplateLiteral(["Astral Shell"]))), $effect(levelling_templateObject40 || (levelling_templateObject40 = levelling_taggedTemplateLiteral(["Jalape\xF1o Saucesphere"]))), $effect(levelling_templateObject41 || (levelling_templateObject41 = levelling_taggedTemplateLiteral(["Elemental Saucesphere"]))), $effect(levelling_templateObject42 || (levelling_templateObject42 = levelling_taggedTemplateLiteral(["Scarysauce"]))), //Elemental Weapon Damage
$effect(levelling_templateObject43 || (levelling_templateObject43 = levelling_taggedTemplateLiteral(["Your Fifteen Minutes"]))), $effect(levelling_templateObject44 || (levelling_templateObject44 = levelling_taggedTemplateLiteral(["Frostbeard"]))), $effect(levelling_templateObject45 || (levelling_templateObject45 = levelling_taggedTemplateLiteral(["Takin' It Greasy"]))), $effect(levelling_templateObject46 || (levelling_templateObject46 = levelling_taggedTemplateLiteral(["Rotten Memories"]))), $effect(levelling_templateObject47 || (levelling_templateObject47 = levelling_taggedTemplateLiteral(["Pyromania"]))), $effect(levelling_templateObject48 || (levelling_templateObject48 = levelling_taggedTemplateLiteral(["Intimidating Mien"]))), //Familiar!
$effect(levelling_templateObject49 || (levelling_templateObject49 = levelling_taggedTemplateLiteral(["Empathy"]))), $effect(levelling_templateObject50 || (levelling_templateObject50 = levelling_taggedTemplateLiteral(["Leash of Linguini"]))), $effect(levelling_templateObject51 || (levelling_templateObject51 = levelling_taggedTemplateLiteral(["Blood Bond"]))), //Misc
$effect(levelling_templateObject52 || (levelling_templateObject52 = levelling_taggedTemplateLiteral(["Carol of the Bulls"]))), $effect(levelling_templateObject53 || (levelling_templateObject53 = levelling_taggedTemplateLiteral(["Carol of the Hells"]))), $effect(levelling_templateObject54 || (levelling_templateObject54 = levelling_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), $effect(levelling_templateObject55 || (levelling_templateObject55 = levelling_taggedTemplateLiteral(["Bendin' Hell"])))];
(0,external_kolmafia_namespaceObject.print)("".concat(levellingEffects));
var levellingQuest = {
  name: "Levelling",
  completed: () => (property_get("_gingerbreadMobHitUsed") || (0,external_kolmafia_namespaceObject.myLevel)() >= 15) && have(template_string_$item(levelling_templateObject56 || (levelling_templateObject56 = levelling_taggedTemplateLiteral(["battle broom"])))),
  tasks: [{
    name: "Beaten Up!",
    completed: () => !have($effect(levelling_templateObject57 || (levelling_templateObject57 = levelling_taggedTemplateLiteral(["Beaten Up"])))),
    do: () => (0,external_kolmafia_namespaceObject.abort)("Beaten up unexpectedly!")
  }, {
    name: "Fall Guy!",
    ready: () => property_get("_shadowAffinityToday") && property_get("shadowRiftIngress") !== "",
    completed: () => !available(),
    do: () => {
      upgrade();
      sendTo($location(levelling_templateObject58 || (levelling_templateObject58 = levelling_taggedTemplateLiteral(["Shadow Rift"]))));
    }
  }, {
    name: "Swap Sombrero",
    ready: () => have($effect(levelling_templateObject59 || (levelling_templateObject59 = levelling_taggedTemplateLiteral(["Spit Upon"])))) && ((0,external_kolmafia_namespaceObject.myFamiliar)() !== template_string_$familiar(levelling_templateObject60 || (levelling_templateObject60 = levelling_taggedTemplateLiteral(["Machine Elf"]))) || ![1, 2, 3, 4].includes(property_get("_machineTunnelsAdv"))),
    completed: () => (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(levelling_templateObject61 || (levelling_templateObject61 = levelling_taggedTemplateLiteral(["Hovering Sombrero"]))),
    do: () => (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(levelling_templateObject62 || (levelling_templateObject62 = levelling_taggedTemplateLiteral(["Hovering Sombrero"]))))
  }, {
    name: "Drink Pilsners",
    ready: () => (0,external_kolmafia_namespaceObject.myLevel)() >= 11 && (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(levelling_templateObject63 || (levelling_templateObject63 = levelling_taggedTemplateLiteral(["astral pilsner"])))) >= 4,
    prepare: () => {
      uneffect($effect(_templateObject64 || (_templateObject64 = levelling_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
      ensureEffect($effect(_templateObject65 || (_templateObject65 = levelling_taggedTemplateLiteral(["Ode to Booze"]))), 4);
    },
    completed: () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(_templateObject66 || (_templateObject66 = levelling_taggedTemplateLiteral(["astral pilsner"])))) < 4,
    do: () => (0,external_kolmafia_namespaceObject.drink)(4, template_string_$item(_templateObject67 || (_templateObject67 = levelling_taggedTemplateLiteral(["astral pilsner"])))),
    post: () => {
      uneffect($effect(_templateObject68 || (_templateObject68 = levelling_taggedTemplateLiteral(["Ode to Booze"]))));
      ensureEffect($effect(_templateObject69 || (_templateObject69 = levelling_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
    }
  }, {
    name: "June Cleave",
    ready: () => property_get("_juneCleaverFightsLeft") === 0,
    prepare: () => levelling_curWeapon = (0,external_kolmafia_namespaceObject.equippedItem)($slot(_templateObject70 || (_templateObject70 = levelling_taggedTemplateLiteral(["weapon"])))),
    completed: () => property_get("_juneCleaverFightsLeft") > 0,
    do: () => (0,external_kolmafia_namespaceObject.adv1)($location(_templateObject71 || (_templateObject71 = levelling_taggedTemplateLiteral(["The Sleazy Back Alley"]))), -1, "abort;"),
    outfit: {
      weapon: template_string_$item(_templateObject72 || (_templateObject72 = levelling_taggedTemplateLiteral(["June cleaver"])))
    },
    post: () => {
      if (have($effect(_templateObject73 || (_templateObject73 = levelling_taggedTemplateLiteral(["Beaten Up"]))))) {
        uneffect($effect(_templateObject74 || (_templateObject74 = levelling_taggedTemplateLiteral(["Beaten Up"]))));
      }
      (0,external_kolmafia_namespaceObject.equip)($slot(_templateObject75 || (_templateObject75 = levelling_taggedTemplateLiteral(["weapon"]))), levelling_curWeapon);
    }
  }, {
    name: "Restore HP",
    ready: () => (0,external_kolmafia_namespaceObject.myHp)() <= (0,external_kolmafia_namespaceObject.myMaxhp)() / 2,
    completed: () => (0,external_kolmafia_namespaceObject.myHp)() > (0,external_kolmafia_namespaceObject.myMaxhp)() / 2,
    do: () => (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)()))
  }, {
    name: "Kramco Goblingo",
    prepare: () => {
      curOffhand = (0,external_kolmafia_namespaceObject.equippedItem)($slot(_templateObject76 || (_templateObject76 = levelling_taggedTemplateLiteral(["off-hand"]))));
    },
    ready: () => getKramcoWandererChance() === 1 && property_get("_latteRefillsUsed") >= 3,
    completed: () => getKramcoWandererChance() < 1,
    do: () => $location(_templateObject77 || (_templateObject77 = levelling_taggedTemplateLiteral(["The Sleazy Back Alley"]))),
    outfit: {
      offhand: template_string_$item(_templateObject78 || (_templateObject78 = levelling_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
      familiar: template_string_$familiar(_templateObject79 || (_templateObject79 = levelling_taggedTemplateLiteral(["Melodramedary"]))),
      famequip: template_string_$item(_templateObject80 || (_templateObject80 = levelling_taggedTemplateLiteral(["tiny stillsuit"])))
    },
    combat: new CombatStrategy().macro(Macro.attack().repeat()),
    post: () => (0,external_kolmafia_namespaceObject.equip)($slot(_templateObject81 || (_templateObject81 = levelling_taggedTemplateLiteral(["off-hand"]))), curOffhand)
  }, {
    name: "April Shower",
    completed: () => have(showerEffect) || property_get("_aprilShower"),
    do: () => ensureEffect(showerEffect)
  }, {
    name: "Express Yourself (In Case of Myst)",
    completed: () => have(facialExpression),
    do: () => ensureEffect(facialExpression)
  }, {
    name: "Use 10% Bonus",
    completed: () => !have(template_string_$item(_templateObject82 || (_templateObject82 = levelling_taggedTemplateLiteral(["a ten-percent bonus"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(_templateObject83 || (_templateObject83 = levelling_taggedTemplateLiteral(["a ten-percent bonus"]))))
  }, {
    name: "Eat Legend Dishes",
    ready: () => have($effect(_templateObject84 || (_templateObject84 = levelling_taggedTemplateLiteral(["Everything Looks Red"])))),
    completed: () => property_get("pizzaOfLegendEaten") && property_get("calzoneOfLegendEaten") || !have(template_string_$item(_templateObject85 || (_templateObject85 = levelling_taggedTemplateLiteral(["Pizza of Legend"])))) && !have(template_string_$item(_templateObject86 || (_templateObject86 = levelling_taggedTemplateLiteral(["Calzone of Legend"])))),
    do: () => [template_string_$item(_templateObject87 || (_templateObject87 = levelling_taggedTemplateLiteral(["Pizza of Legend"]))), template_string_$item(_templateObject88 || (_templateObject88 = levelling_taggedTemplateLiteral(["Calzone of Legend"])))].forEach(i => (0,external_kolmafia_namespaceObject.eat)(1, i))
  }, {
    name: "Lyle Buff",
    completed: () => property_get("_lyleFavored"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("monorail")
  }, {
    name: "Telescope",
    completed: () => property_get("telescopeLookedHigh"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("telescope look high")
  }, {
    name: "Get Catherine Wheel",
    completed: () => have(template_string_$item(_templateObject89 || (_templateObject89 = levelling_taggedTemplateLiteral(["Catherine Wheel"])))),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject90 || (_templateObject90 = levelling_taggedTemplateLiteral(["Catherine Wheel"])))),
    post: () => (0,external_kolmafia_namespaceObject.equip)(template_string_$item(_templateObject91 || (_templateObject91 = levelling_taggedTemplateLiteral(["Catherine Wheel"]))))
  }, {
    name: "Boxing Daycare Buff",
    completed: () => [$effect(_templateObject92 || (_templateObject92 = levelling_taggedTemplateLiteral(["Muddled"]))), $effect(_templateObject93 || (_templateObject93 = levelling_taggedTemplateLiteral(["Ten out of Ten"]))), $effect(_templateObject94 || (_templateObject94 = levelling_taggedTemplateLiteral(["Uncucumbered"])))].some(ef => have(ef)) || property_get("_daycareSpa"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("daycare ".concat((0,external_kolmafia_namespaceObject.myPrimestat)().toString().toLowerCase()))
  }, {
    name: "Wish for A Contender",
    completed: () => have($effect(_templateObject95 || (_templateObject95 = levelling_taggedTemplateLiteral(["A Contender"])))) || property_get("_genieWishesUsed") >= 2 || true,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("genie effect A Contender")
  }, {
    name: "Wish for New and Improved",
    completed: () => have($effect(_templateObject96 || (_templateObject96 = levelling_taggedTemplateLiteral(["New and Improved"])))) || property_get("_genieWishesUsed") >= 2,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("genie effect New and Improved")
  }, {
    name: "Use Market Consumables",
    completed: () => [$effect(_templateObject97 || (_templateObject97 = levelling_taggedTemplateLiteral(["Glittering Eyelashes"]))), $effect(_templateObject98 || (_templateObject98 = levelling_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))), $effect(_templateObject99 || (_templateObject99 = levelling_taggedTemplateLiteral(["Butt-Rock Hair"])))].every(ef => have(ef)),
    do: () => [$effect(_templateObject100 || (_templateObject100 = levelling_taggedTemplateLiteral(["Glittering Eyelashes"]))), $effect(_templateObject101 || (_templateObject101 = levelling_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))), $effect(_templateObject102 || (_templateObject102 = levelling_taggedTemplateLiteral(["Butt-Rock Hair"])))].forEach(ef => ensureEffect(ef, 9))
  }, {
    name: "Use Wasabi Marble Soda",
    completed: () => !have(template_string_$item(_templateObject103 || (_templateObject103 = levelling_taggedTemplateLiteral(["wasabi marble soda"])))) || have($effect(_templateObject104 || (_templateObject104 = levelling_taggedTemplateLiteral(["Wasabi With You"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(_templateObject105 || (_templateObject105 = levelling_taggedTemplateLiteral(["wasabi marble soda"]))))
  }, {
    name: "Eat sosig",
    ready: () => (0,external_kolmafia_namespaceObject.availableAmount)(template_string_$item(_templateObject106 || (_templateObject106 = levelling_taggedTemplateLiteral(["magical sausage casing"])))) > 0,
    completed: () => property_get("_sausagesEaten") > 0,
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject107 || (_templateObject107 = levelling_taggedTemplateLiteral(["magical sausage"]))));
      (0,external_kolmafia_namespaceObject.eat)(1, template_string_$item(_templateObject108 || (_templateObject108 = levelling_taggedTemplateLiteral(["magical sausage"]))));
    }
  }, {
    name: "Summon Reagents",
    completed: () => property_get("reagentSummons") > 0,
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(1, template_string_$skill(_templateObject109 || (_templateObject109 = levelling_taggedTemplateLiteral(["Advanced Saucecrafting"]))))
  }, {
    name: "Summon Limes",
    completed: () => property_get("_preventScurvy"),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(1, template_string_$skill(_templateObject110 || (_templateObject110 = levelling_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))))
  }, {
    name: "Become Occultic",
    completed: () => have($effect(_templateObject111 || (_templateObject111 = levelling_taggedTemplateLiteral(["Mystically Oiled"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject112 || (_templateObject112 = levelling_taggedTemplateLiteral(["ointment of the occult"]))));
      ensureEffect($effect(_templateObject113 || (_templateObject113 = levelling_taggedTemplateLiteral(["Mystically Oiled"]))));
    }
  }, {
    name: "Become Phorceful",
    completed: () => have($effect(_templateObject114 || (_templateObject114 = levelling_taggedTemplateLiteral(["Phorcefullness"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject115 || (_templateObject115 = levelling_taggedTemplateLiteral(["philter of phorce"]))));
      ensureEffect($effect(_templateObject116 || (_templateObject116 = levelling_taggedTemplateLiteral(["Phorcefullness"]))));
    }
  }, {
    name: "Stabilize your Oils",
    completed: () => have($effect(_templateObject117 || (_templateObject117 = levelling_taggedTemplateLiteral(["Stabilizing Oiliness"])))),
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject118 || (_templateObject118 = levelling_taggedTemplateLiteral(["oil of stability"]))));
      ensureEffect($effect(_templateObject119 || (_templateObject119 = levelling_taggedTemplateLiteral(["Stabilizing Oiliness"]))));
    }
  }, {
    name: "Latte to Full MP",
    prepare: () => (0,external_kolmafia_namespaceObject.restoreHp)(clamp(1000, (0,external_kolmafia_namespaceObject.myMaxhp)() / 2, (0,external_kolmafia_namespaceObject.myMaxhp)())),
    completed: () => property_get("_latteRefillsUsed") >= 2,
    do: () => {
      (0,external_kolmafia_namespaceObject.adv1)($location(_templateObject120 || (_templateObject120 = levelling_taggedTemplateLiteral(["Uncle Gator's Country Fun-Time Liquid Waste Sluice"]))), -1);
      fill("pumpkin", "cinnamon", "vanilla");
    },
    outfit: {
      offhand: template_string_$item(_templateObject121 || (_templateObject121 = levelling_taggedTemplateLiteral(["latte lovers member's mug"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject122 || (_templateObject122 = levelling_taggedTemplateLiteral(["Gulp Latte"])))).trySkill(template_string_$skill(_templateObject123 || (_templateObject123 = levelling_taggedTemplateLiteral(["Throw Latte on Opponent"])))).abort())
  }, {
    name: "Buff the heck up oomfie!",
    completed: () => have($effect(_templateObject124 || (_templateObject124 = levelling_taggedTemplateLiteral(["Bendin' Hell"])))) || property_get("_speakeasyFreeFights") === 3,
    do: () => levellingEffects.forEach(ef => ensureEffect(ef))
  }, {
    name: "Latte for Later",
    completed: () => property_get("_latteRefillsUsed") >= 3,
    do: () => {
      (0,external_kolmafia_namespaceObject.adv1)($location(_templateObject125 || (_templateObject125 = levelling_taggedTemplateLiteral(["Uncle Gator's Country Fun-Time Liquid Waste Sluice"]))), -1);
      fill("pumpkin", "cinnamon", "vanilla");
    },
    outfit: {
      offhand: template_string_$item(_templateObject126 || (_templateObject126 = levelling_taggedTemplateLiteral(["latte lovers member's mug"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject127 || (_templateObject127 = levelling_taggedTemplateLiteral(["Gulp Latte"])))).trySkill(template_string_$skill(_templateObject128 || (_templateObject128 = levelling_taggedTemplateLiteral(["Throw Latte on Opponent"])))).abort())
  }, {
    name: "Flapper Mapper",
    completed: () => property_get("_monstersMapped") >= 2,
    do: () => mapMonster($location(_templateObject129 || (_templateObject129 = levelling_taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))), $monster(_templateObject130 || (_templateObject130 = levelling_taggedTemplateLiteral(["goblin flapper"])))),
    outfit: {
      offhand: template_string_$item(_templateObject131 || (_templateObject131 = levelling_taggedTemplateLiteral(["unbreakable umbrella"]))),
      familiar: template_string_$familiar(_templateObject132 || (_templateObject132 = levelling_taggedTemplateLiteral(["Nanorhino"]))),
      famequip: template_string_$item(_templateObject133 || (_templateObject133 = levelling_taggedTemplateLiteral(["tiny stillsuit"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject134 || (_templateObject134 = levelling_taggedTemplateLiteral(["Feel Nostalgic"])))).trySkill(template_string_$skill(_templateObject135 || (_templateObject135 = levelling_taggedTemplateLiteral(["Feel Envy"])))).trySkill(template_string_$skill(_templateObject136 || (_templateObject136 = levelling_taggedTemplateLiteral(["Lunging Thrust-Smack"])))).attack().repeat())
  }, {
    name: "Oliver's Place",
    completed: () => property_get("_speakeasyFreeFights") === 3,
    do: $location(_templateObject137 || (_templateObject137 = levelling_taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))),
    outfit: levellingOutfit,
    combat: new CombatStrategy().macro(Macro.attack().repeat())
  }, {
    name: "Pick up a club!",
    completed: () => have(template_string_$item(_templateObject138 || (_templateObject138 = levelling_taggedTemplateLiteral(["seal-clubbing club"])))),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject139 || (_templateObject139 = levelling_taggedTemplateLiteral(["seal-clubbing club"]))))
  }, {
    name: "Seal Fights",
    completed: () => (0,external_kolmafia_namespaceObject.myClass)() !== external_kolmafia_namespaceObject.Class.get("Seal Clubber") || property_get("_sealsSummoned") >= 5,
    do: () => {
      (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(_templateObject140 || (_templateObject140 = levelling_taggedTemplateLiteral(["figurine of an ancient seal"]))));
      (0,external_kolmafia_namespaceObject.retrieveItem)(3, template_string_$item(_templateObject141 || (_templateObject141 = levelling_taggedTemplateLiteral(["seal-blubber candle"]))));
      (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(_templateObject142 || (_templateObject142 = levelling_taggedTemplateLiteral(["figurine of an ancient seal"]))));
    },
    outfit: {
      weapon: template_string_$item(_templateObject143 || (_templateObject143 = levelling_taggedTemplateLiteral(["seal-clubbing club"])))
    },
    combat: new CombatStrategy().macro(Macro.attack().repeat())
  }, {
    name: "Get Payphone Quest",
    completed: () => property_get("_shadowAffinityToday"),
    do: () => withChoice(1497, 1, () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(_templateObject144 || (_templateObject144 = levelling_taggedTemplateLiteral(["closed-circuit pay phone"])))))
  }, {
    name: "Payphone Freefights (extingo)",
    ready: () => have($effect(_templateObject145 || (_templateObject145 = levelling_taggedTemplateLiteral(["Shadow Affinity"])))),
    completed: () => property_get("encountersUntilSRChoice") === 0 || have(template_string_$item(_templateObject146 || (_templateObject146 = levelling_taggedTemplateLiteral(["Rufus's shadow lodestone"])))) || property_get("_fireExtinguisherCharge") <= 10,
    do: $location(_templateObject147 || (_templateObject147 = levelling_taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"]))),
    outfit: {
      hat: template_string_$item(_templateObject148 || (_templateObject148 = levelling_taggedTemplateLiteral(["sombrero-mounted sparkler"]))),
      weapon: template_string_$item(_templateObject149 || (_templateObject149 = levelling_taggedTemplateLiteral(["industrial fire extinguisher"])))
    },
    combat: new CombatStrategy().macro(Macro.if_($monster(_templateObject150 || (_templateObject150 = levelling_taggedTemplateLiteral(["shadow slab"]))), Macro.trySkill(template_string_$skill(_templateObject151 || (_templateObject151 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject152 || (_templateObject152 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject153 || (_templateObject153 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject154 || (_templateObject154 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject155 || (_templateObject155 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject156 || (_templateObject156 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject157 || (_templateObject157 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject158 || (_templateObject158 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"])))).trySkill(template_string_$skill(_templateObject159 || (_templateObject159 = levelling_taggedTemplateLiteral(["Fire Extinguisher: Polar Vortex"]))))).attack().repeat())
  }, {
    name: "Payphone Freefights (cleaver)",
    ready: () => have($effect(_templateObject160 || (_templateObject160 = levelling_taggedTemplateLiteral(["Shadow Affinity"])))),
    completed: () => property_get("encountersUntilSRChoice") === 0 || have(template_string_$item(_templateObject161 || (_templateObject161 = levelling_taggedTemplateLiteral(["Rufus's shadow lodestone"])))),
    do: $location(_templateObject162 || (_templateObject162 = levelling_taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"]))),
    outfit: {
      weapon: template_string_$item(_templateObject163 || (_templateObject163 = levelling_taggedTemplateLiteral(["June cleaver"])))
    },
    combat: new CombatStrategy().macro(Macro.attack().repeat())
  }, {
    name: "Payphone Freefights (bossa)",
    prepare: () => (0,external_kolmafia_namespaceObject.restoreHp)((0,external_kolmafia_namespaceObject.myMaxhp)()),
    ready: () => property_get("encountersUntilSRChoice") === 0,
    completed: () => have(template_string_$item(_templateObject164 || (_templateObject164 = levelling_taggedTemplateLiteral(["Rufus's shadow lodestone"])))) || property_get("questRufus") === "step1",
    do: $location(_templateObject165 || (_templateObject165 = levelling_taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"]))),
    outfit: {
      weapon: template_string_$item(_templateObject166 || (_templateObject166 = levelling_taggedTemplateLiteral(["June cleaver"]))),
      familiar: template_string_$familiar(_templateObject167 || (_templateObject167 = levelling_taggedTemplateLiteral(["Machine Elf"]))),
      famequip: template_string_$item(_templateObject168 || (_templateObject168 = levelling_taggedTemplateLiteral(["tiny stillsuit"])))
    },
    combat: new CombatStrategy().macro(Macro.if_($monster(_templateObject169 || (_templateObject169 = levelling_taggedTemplateLiteral(["shadow matrix"]))), Macro.trySkill(template_string_$skill(_templateObject170 || (_templateObject170 = levelling_taggedTemplateLiteral(["Stuffed Mortar Shell"])))).trySkillRepeat(template_string_$skill(_templateObject171 || (_templateObject171 = levelling_taggedTemplateLiteral(["Saucegeyser"]))))).trySkillRepeat(template_string_$skill(_templateObject172 || (_templateObject172 = levelling_taggedTemplateLiteral(["Northern Explosion"])))))
  }, {
    name: "Retrieve Spooky Lodestone",
    ready: () => property_get("questRufus") === "step1",
    completed: () => have(template_string_$item(_templateObject173 || (_templateObject173 = levelling_taggedTemplateLiteral(["Rufus's shadow lodestone"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(_templateObject174 || (_templateObject174 = levelling_taggedTemplateLiteral(["closed-circuit pay phone"])))),
    post: () => (0,external_kolmafia_namespaceObject.cliExecute)("fold garbage shirt")
  }, {
    name: "Set Snojo Controls",
    completed: () => property_get("snojoSetting") === $stat(_templateObject175 || (_templateObject175 = levelling_taggedTemplateLiteral(["Moxie"]))),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?pwd=".concat((0,external_kolmafia_namespaceObject.myHash)(), "&whichchoice=1118&option=3"));
    }
  }, {
    name: "Snojo Fights",
    completed: () => property_get("_snojoFreeFights") >= 10,
    do: $location(_templateObject176 || (_templateObject176 = levelling_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    outfit: {
      shirt: template_string_$item(_templateObject177 || (_templateObject177 = levelling_taggedTemplateLiteral(["makeshift garbage shirt"]))),
      familiar: template_string_$familiar(_templateObject178 || (_templateObject178 = levelling_taggedTemplateLiteral(["Melodramedary"]))),
      famequip: template_string_$item(_templateObject179 || (_templateObject179 = levelling_taggedTemplateLiteral(["tiny stillsuit"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject180 || (_templateObject180 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).attack().repeat())
  }, {
    name: "Visit Hottub",
    completed: () => [$effect(_templateObject181 || (_templateObject181 = levelling_taggedTemplateLiteral(["Snowballed"]))), $effect(_templateObject182 || (_templateObject182 = levelling_taggedTemplateLiteral(["Bruised"]))), $effect(_templateObject183 || (_templateObject183 = levelling_taggedTemplateLiteral(["Relaxed Muscles"]))), $effect(_templateObject184 || (_templateObject184 = levelling_taggedTemplateLiteral(["Hypnotized"]))), $effect(_templateObject185 || (_templateObject185 = levelling_taggedTemplateLiteral(["Bad Haircut"])))].every(ef => !have(ef)),
    do: () => (0,external_kolmafia_namespaceObject.visitUrl)("clan_viplounge.php?action=hottub")
  }, {
    name: "Witchess Fights",
    completed: () => property_get("_witchessFights") >= 3,
    do: () => fightPiece($monster(_templateObject186 || (_templateObject186 = levelling_taggedTemplateLiteral(["Witchess Bishop"])))),
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject187 || (_templateObject187 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).attack().repeat())
  }, {
    name: "Deep Machine Fights",
    completed: () => property_get("_machineTunnelsAdv") >= 5,
    do: () => $location(_templateObject188 || (_templateObject188 = levelling_taggedTemplateLiteral(["The Deep Machine Tunnels"]))),
    outfit: {
      familiar: template_string_$familiar(_templateObject189 || (_templateObject189 = levelling_taggedTemplateLiteral(["Machine Elf"]))),
      famequip: template_string_$item(_templateObject190 || (_templateObject190 = levelling_taggedTemplateLiteral(["tiny stillsuit"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject191 || (_templateObject191 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).attack().repeat())
  }, {
    name: "Awful Bad things have happened, need more spit",
    completed: () => have($effect(_templateObject192 || (_templateObject192 = levelling_taggedTemplateLiteral(["Spit Upon"])))) || (0,external_kolmafia_namespaceObject.myFamiliar)() === template_string_$familiar(_templateObject193 || (_templateObject193 = levelling_taggedTemplateLiteral(["Melodramedary"]))),
    do: () => (0,external_kolmafia_namespaceObject.useFamiliar)(template_string_$familiar(_templateObject194 || (_templateObject194 = levelling_taggedTemplateLiteral(["Melodramedary"]))))
  }, {
    name: "Neverending Free Fights",
    completed: () => property_get("_neverendingPartyFreeTurns") >= 10,
    do: $location(_templateObject195 || (_templateObject195 = levelling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1322: 2,
      1324: 5,
      1326: 2
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject196 || (_templateObject196 = levelling_taggedTemplateLiteral(["Bowl Sideways"])))).trySkill(template_string_$skill(_templateObject197 || (_templateObject197 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).trySkillRepeat(template_string_$skill(_templateObject198 || (_templateObject198 = levelling_taggedTemplateLiteral(["Lunging Thrust-Smack"])))))
  }, {
    name: "Witchess Witch",
    prepare: () => (0,external_kolmafia_namespaceObject.restoreHp)((0,external_kolmafia_namespaceObject.myMaxhp)()),
    completed: () => have(template_string_$item(_templateObject199 || (_templateObject199 = levelling_taggedTemplateLiteral(["battle broom"])))),
    do: () => fightPiece($monster(_templateObject200 || (_templateObject200 = levelling_taggedTemplateLiteral(["Witchess Witch"])))),
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject201 || (_templateObject201 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).trySkillRepeat(template_string_$skill(_templateObject202 || (_templateObject202 = levelling_taggedTemplateLiteral(["Lunging Thrust-Smack"])))))
  }, {
    name: "Witchess Queen",
    prepare: () => (0,external_kolmafia_namespaceObject.restoreHp)((0,external_kolmafia_namespaceObject.myMaxhp)()),
    completed: () => have(template_string_$item(_templateObject203 || (_templateObject203 = levelling_taggedTemplateLiteral(["very pointy crown"])))),
    do: () => fightPiece($monster(_templateObject204 || (_templateObject204 = levelling_taggedTemplateLiteral(["Witchess Queen"])))),
    combat: new CombatStrategy().macro(Macro.attack().repeat())
  }, {
    name: "Shattering Punches",
    completed: () => property_get("_shatteringPunchUsed") >= 3,
    do: $location(_templateObject205 || (_templateObject205 = levelling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1322: 2,
      1324: 5,
      1326: 2
    },
    outfit: {
      weapon: have(template_string_$item(_templateObject206 || (_templateObject206 = levelling_taggedTemplateLiteral(["fish hatchet"])))) ? template_string_$item(_templateObject207 || (_templateObject207 = levelling_taggedTemplateLiteral(["fish hatchet"]))) : template_string_$item(_templateObject208 || (_templateObject208 = levelling_taggedTemplateLiteral(["June cleaver"]))),
      acc2: template_string_$item(_templateObject209 || (_templateObject209 = levelling_taggedTemplateLiteral(["Cincho de Mayo"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject210 || (_templateObject210 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).trySkill(template_string_$skill(_templateObject211 || (_templateObject211 = levelling_taggedTemplateLiteral(["Bowl Sideways"])))).trySkill(template_string_$skill(_templateObject212 || (_templateObject212 = levelling_taggedTemplateLiteral(["Feel Pride"])))).trySkill(template_string_$skill(_templateObject213 || (_templateObject213 = levelling_taggedTemplateLiteral(["Cincho: Confetti Extravaganza"])))).trySkill(template_string_$skill(_templateObject214 || (_templateObject214 = levelling_taggedTemplateLiteral(["Shattering Punch"])))).abort())
  }, {
    name: "Chest X-rays",
    completed: () => property_get("_chestXRayUsed") >= 3,
    do: $location(_templateObject215 || (_templateObject215 = levelling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1322: 2,
      1324: 5,
      1326: 2
    },
    outfit: {
      acc2: template_string_$item(_templateObject216 || (_templateObject216 = levelling_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject217 || (_templateObject217 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).trySkill(template_string_$skill(_templateObject218 || (_templateObject218 = levelling_taggedTemplateLiteral(["Bowl Sideways"])))).trySkill(template_string_$skill(_templateObject219 || (_templateObject219 = levelling_taggedTemplateLiteral(["Chest X-Ray"])))).abort())
  }, {
    name: "Mob-Hit",
    completed: () => property_get("_gingerbreadMobHitUsed"),
    do: $location(_templateObject220 || (_templateObject220 = levelling_taggedTemplateLiteral(["The Neverending Party"]))),
    choices: {
      1322: 2,
      1324: 5,
      1326: 2
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(_templateObject221 || (_templateObject221 = levelling_taggedTemplateLiteral(["%fn, spit on me!"])))).trySkill(template_string_$skill(_templateObject222 || (_templateObject222 = levelling_taggedTemplateLiteral(["Bowl Sideways"])))).trySkill(template_string_$skill(_templateObject223 || (_templateObject223 = levelling_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).abort())
  }]
};
;// CONCATENATED MODULE: ./src/tasks/stats.ts
var stats_templateObject, stats_templateObject2, stats_templateObject3, stats_templateObject4, stats_templateObject5, stats_templateObject6, stats_templateObject7, stats_templateObject8, stats_templateObject9, stats_templateObject10, stats_templateObject11, stats_templateObject12, stats_templateObject13, stats_templateObject14, stats_templateObject15, stats_templateObject16, stats_templateObject17, stats_templateObject18, stats_templateObject19, stats_templateObject20, stats_templateObject21, stats_templateObject22, stats_templateObject23, stats_templateObject24, stats_templateObject25, stats_templateObject26, stats_templateObject27, stats_templateObject28, stats_templateObject29, stats_templateObject30, stats_templateObject31;
function stats_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var muscleQuest = {
  name: "Muscle Test",
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [{
    name: "Train!",
    completed: () => property_get("lastTrainsetConfiguration") !== 0,
    do: () => setConfiguration([Station.COAL_HOPPER, Station.GAIN_MEAT, Station.TOWER_FIZZY, Station.CANDY_FACTORY, Station.ORE_HOPPER, Station.GRAIN_SILO, Station.VIEWING_PLATFORM, Station.TRACKSIDE_DINER])
  }, {
    name: "Muscle Test",
    prepare: () => [$effect(stats_templateObject || (stats_templateObject = stats_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))), $effect(stats_templateObject2 || (stats_templateObject2 = stats_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), $effect(stats_templateObject3 || (stats_templateObject3 = stats_taggedTemplateLiteral(["Aloysius' Antiphon of Aptitude"])))].forEach(ef => uneffect(ef)),
    completed: () => CommunityService.Muscle.isDone(),
    do: () => {
      var testTurns = CommunityService.Muscle.actualCost();
      var predictedTestTurns = CommunityService.Muscle.prediction;
      printModtrace("muscle");
      printModtrace("muscle percent");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.Muscle.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      modifier: "Muscle"
    },
    effects: [$effect(stats_templateObject4 || (stats_templateObject4 = stats_taggedTemplateLiteral(["Big"]))), $effect(stats_templateObject5 || (stats_templateObject5 = stats_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))), $effect(stats_templateObject6 || (stats_templateObject6 = stats_taggedTemplateLiteral(["Quiet Determination"]))), $effect(stats_templateObject7 || (stats_templateObject7 = stats_taggedTemplateLiteral(["Rage of the Reindeer"]))), $effect(stats_templateObject8 || (stats_templateObject8 = stats_taggedTemplateLiteral(["Song of Bravado"]))), $effect(stats_templateObject9 || (stats_templateObject9 = stats_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"])))],
    limit: {
      tries: 1
    }
  }]
};
var mystQuest = {
  name: "Mysticality Test",
  completed: () => CommunityService.Mysticality.isDone(),
  tasks: [{
    name: "Mysticality Test",
    completed: () => CommunityService.Mysticality.isDone(),
    do: () => {
      var testTurns = CommunityService.Mysticality.actualCost();
      var predictedTestTurns = CommunityService.Mysticality.prediction;
      printModtrace("mysticality");
      printModtrace("mysticality percent");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.Mysticality.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      modifier: "Mysticality"
    },
    post: () => uneffect($effect(stats_templateObject10 || (stats_templateObject10 = stats_taggedTemplateLiteral(["The Magical Mojomuscular Melody"])))),
    effects: [$effect(stats_templateObject11 || (stats_templateObject11 = stats_taggedTemplateLiteral(["Big"]))), $effect(stats_templateObject12 || (stats_templateObject12 = stats_taggedTemplateLiteral(["Glittering Eyelashes"]))), $effect(stats_templateObject13 || (stats_templateObject13 = stats_taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))), $effect(stats_templateObject14 || (stats_templateObject14 = stats_taggedTemplateLiteral(["Saucemastery"]))), $effect(stats_templateObject15 || (stats_templateObject15 = stats_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effect(stats_templateObject16 || (stats_templateObject16 = stats_taggedTemplateLiteral(["Quiet Judgement"]))), $effect(stats_templateObject17 || (stats_templateObject17 = stats_taggedTemplateLiteral(["Song of Bravado"])))],
    limit: {
      tries: 1
    }
  }]
};
var moxQuest = {
  name: "Moxie Test",
  completed: () => CommunityService.Moxie.isDone(),
  tasks: [{
    name: "Moxie Test",
    completed: () => CommunityService.Moxie.isDone(),
    do: () => {
      var testTurns = CommunityService.Moxie.actualCost();
      var predictedTestTurns = CommunityService.Moxie.prediction;
      printModtrace("moxie");
      printModtrace("moxie percent");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.Moxie.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      modifier: "Moxie"
    },
    effects: [$effect(stats_templateObject18 || (stats_templateObject18 = stats_taggedTemplateLiteral(["Big"]))), $effect(stats_templateObject19 || (stats_templateObject19 = stats_taggedTemplateLiteral(["Butt-Rock Hair"]))), $effect(stats_templateObject20 || (stats_templateObject20 = stats_taggedTemplateLiteral(["Disco Fever"]))), $effect(stats_templateObject21 || (stats_templateObject21 = stats_taggedTemplateLiteral(["Quiet Desperation"]))), $effect(stats_templateObject22 || (stats_templateObject22 = stats_taggedTemplateLiteral(["Song of Bravado"]))), $effect(stats_templateObject23 || (stats_templateObject23 = stats_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"])))],
    limit: {
      tries: 1
    }
  }]
};
var hpQuest = {
  name: "HP Test",
  completed: () => CommunityService.HP.isDone(),
  tasks: [{
    name: "HP Test",
    completed: () => CommunityService.HP.isDone(),
    do: () => {
      var testTurns = CommunityService.HP.actualCost();
      var predictedTestTurns = CommunityService.HP.prediction;
      printModtrace("maximum hp");
      printModtrace("maximum hp percent");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.HP.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      modifier: "HP"
    },
    effects: [$effect(stats_templateObject24 || (stats_templateObject24 = stats_taggedTemplateLiteral(["Big"]))), $effect(stats_templateObject25 || (stats_templateObject25 = stats_taggedTemplateLiteral(["Go Get 'Em, Tiger!"]))), $effect(stats_templateObject26 || (stats_templateObject26 = stats_taggedTemplateLiteral(["Reptilian Fortitude"]))), $effect(stats_templateObject27 || (stats_templateObject27 = stats_taggedTemplateLiteral(["Quiet Determination"]))), $effect(stats_templateObject28 || (stats_templateObject28 = stats_taggedTemplateLiteral(["Song of Bravado"]))), $effect(stats_templateObject29 || (stats_templateObject29 = stats_taggedTemplateLiteral(["Stevedave's Shanty of Superiority"]))), $effect(stats_templateObject30 || (stats_templateObject30 = stats_taggedTemplateLiteral(["Saucemastery"]))), $effect(stats_templateObject31 || (stats_templateObject31 = stats_taggedTemplateLiteral(["Seal Clubbing Frenzy"])))],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/hotres.ts
var hotres_templateObject, hotres_templateObject2, hotres_templateObject3, hotres_templateObject4, hotres_templateObject5, hotres_templateObject6, hotres_templateObject7, hotres_templateObject8, hotres_templateObject9, hotres_templateObject10, hotres_templateObject11, hotres_templateObject12, hotres_templateObject13, hotres_templateObject14, hotres_templateObject15;
function hotres_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var hotresQuest = {
  name: "Hot Resistance Test",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [{
    name: "Foam Suit",
    completed: () => have($effect(hotres_templateObject || (hotres_templateObject = hotres_taggedTemplateLiteral(["Fireproof Foam Suit"])))) || property_get("_fireExtinguisherCharge") <= 0,
    do: () => reminisce($monster(hotres_templateObject2 || (hotres_templateObject2 = hotres_taggedTemplateLiteral(["ungulith"])))),
    outfit: {
      weapon: template_string_$item(hotres_templateObject3 || (hotres_templateObject3 = hotres_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: template_string_$item(hotres_templateObject4 || (hotres_templateObject4 = hotres_taggedTemplateLiteral(["industrial fire extinguisher"])))
    },
    choices: {
      1387: 3
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(hotres_templateObject5 || (hotres_templateObject5 = hotres_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).trySkill(template_string_$skill(hotres_templateObject6 || (hotres_templateObject6 = hotres_taggedTemplateLiteral(["Use the Force"])))).abort())
  }, {
    name: "Hot Resistance Test",
    completed: () => CommunityService.HotRes.isDone(),
    do: () => {
      var predictedTestTurns = CommunityService.HotRes.prediction;
      if (predictedTestTurns > 1) {
        (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(hotres_templateObject7 || (hotres_templateObject7 = hotres_taggedTemplateLiteral(["pocket maze"]))));
      }
      var testTurns = CommunityService.HotRes.actualCost();
      printModtrace("hot resistance");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.HotRes.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      familiar: template_string_$familiar(hotres_templateObject8 || (hotres_templateObject8 = hotres_taggedTemplateLiteral(["Exotic Parrot"]))),
      famequip: template_string_$item(hotres_templateObject9 || (hotres_templateObject9 = hotres_taggedTemplateLiteral(["tiny stillsuit"]))),
      modifier: "hot resistance"
    },
    effects: [$effect(hotres_templateObject10 || (hotres_templateObject10 = hotres_taggedTemplateLiteral(["Elemental Saucesphere"]))), $effect(hotres_templateObject11 || (hotres_templateObject11 = hotres_taggedTemplateLiteral(["Feeling Peaceful"]))), $effect(hotres_templateObject12 || (hotres_templateObject12 = hotres_taggedTemplateLiteral(["Astral Shell"]))), $effect(hotres_templateObject13 || (hotres_templateObject13 = hotres_taggedTemplateLiteral(["Blood Bond"]))), $effect(hotres_templateObject14 || (hotres_templateObject14 = hotres_taggedTemplateLiteral(["Empathy"]))), $effect(hotres_templateObject15 || (hotres_templateObject15 = hotres_taggedTemplateLiteral(["Leash of Linguini"])))],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/wdmg.ts
var wdmg_templateObject, wdmg_templateObject2, wdmg_templateObject3, wdmg_templateObject4, wdmg_templateObject5, wdmg_templateObject6, wdmg_templateObject7, wdmg_templateObject8, wdmg_templateObject9, wdmg_templateObject10, wdmg_templateObject11, wdmg_templateObject12, wdmg_templateObject13, wdmg_templateObject14, wdmg_templateObject15, wdmg_templateObject16, wdmg_templateObject17, wdmg_templateObject18, wdmg_templateObject19, wdmg_templateObject20, wdmg_templateObject21, wdmg_templateObject22, wdmg_templateObject23;
function wdmg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var wdmgQuest = {
  name: "Weapon Damage Test",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [{
    name: "Pool Buff",
    prepare: () => Clan.join("Bonus Adventures from Hell"),
    completed: () => have($effect(wdmg_templateObject || (wdmg_templateObject = wdmg_taggedTemplateLiteral(["Billiards Belligerence"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pool 1")
  }, {
    name: "Inner Elf",
    prepare: () => Clan.join("Beldungeon"),
    completed: () => have($effect(wdmg_templateObject2 || (wdmg_templateObject2 = wdmg_taggedTemplateLiteral(["Inner Elf"])))) || property_get("_snokebombUsed") >= 3,
    do: $location(wdmg_templateObject3 || (wdmg_templateObject3 = wdmg_taggedTemplateLiteral(["The Slime Tube"]))),
    outfit: {
      weapon: template_string_$item.none,
      offhand: template_string_$item.none,
      familiar: template_string_$familiar(wdmg_templateObject4 || (wdmg_templateObject4 = wdmg_taggedTemplateLiteral(["Machine Elf"])))
    },
    choices: {
      326: 1
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(wdmg_templateObject5 || (wdmg_templateObject5 = wdmg_taggedTemplateLiteral(["Snokebomb"])))).abort())
  }, {
    name: "Deep Dark Visions",
    prepare: () => (0,external_kolmafia_namespaceObject.restoreHp)((0,external_kolmafia_namespaceObject.myMaxhp)()),
    completed: () => have($effect(wdmg_templateObject6 || (wdmg_templateObject6 = wdmg_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(1, template_string_$skill(wdmg_templateObject7 || (wdmg_templateObject7 = wdmg_taggedTemplateLiteral(["Deep Dark Visions"])))),
    outfit: {
      modifier: "spooky res"
    }
  }, {
    name: "Barrel Shrine",
    completed: () => (0,external_kolmafia_namespaceObject.myClass)() !== external_kolmafia_namespaceObject.Class.get("Seal Clubber") || property_get("_barrelPrayer"),
    do: () => {
      (0,external_kolmafia_namespaceObject.visitUrl)("da.php?barrelshrine=1");
      (0,external_kolmafia_namespaceObject.visitUrl)("choice.php?whichchoice=1100&option=4");
    }
  }, {
    name: "Corrupted Marrow",
    completed: () => have($effect(wdmg_templateObject8 || (wdmg_templateObject8 = wdmg_taggedTemplateLiteral(["Cowrruption"])))) || !have(template_string_$item(wdmg_templateObject9 || (wdmg_templateObject9 = wdmg_taggedTemplateLiteral(["corrupted marrow"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(wdmg_templateObject10 || (wdmg_templateObject10 = wdmg_taggedTemplateLiteral(["corrupted marrow"]))))
  }, {
    name: "Imported Taffy",
    completed: () => have($effect(wdmg_templateObject11 || (wdmg_templateObject11 = wdmg_taggedTemplateLiteral(["Imported Strength"])))) || !have(template_string_$item(wdmg_templateObject12 || (wdmg_templateObject12 = wdmg_taggedTemplateLiteral(["imported taffy"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(wdmg_templateObject13 || (wdmg_templateObject13 = wdmg_taggedTemplateLiteral(["imported taffy"]))))
  }, {
    name: "Red Eye",
    completed: () => have($effect(wdmg_templateObject14 || (wdmg_templateObject14 = wdmg_taggedTemplateLiteral(["Seeing Red"])))) || !have(template_string_$item(wdmg_templateObject15 || (wdmg_templateObject15 = wdmg_taggedTemplateLiteral(["red eye"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(wdmg_templateObject16 || (wdmg_templateObject16 = wdmg_taggedTemplateLiteral(["red eye"]))))
  }, {
    name: "Weapon Damage Test",
    completed: () => CommunityService.WeaponDamage.isDone(),
    do: () => {
      var predictedTestTurns = CommunityService.WeaponDamage.prediction;
      var testTurns = CommunityService.WeaponDamage.actualCost();
      printModtrace("weapon damage");
      printModtrace("weapon damage percent");
      if (testTurns > 1) {
        (0,external_kolmafia_namespaceObject.print)("This is annoying, how sad! Manual or fix");
      }
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.WeaponDamage.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      modifier: "weapon dmg"
    },
    effects: [$effect(wdmg_templateObject17 || (wdmg_templateObject17 = wdmg_taggedTemplateLiteral(["Bow-Legged Swagger"]))), $effect(wdmg_templateObject18 || (wdmg_templateObject18 = wdmg_taggedTemplateLiteral(["Scowl of the Auk"]))), $effect(wdmg_templateObject19 || (wdmg_templateObject19 = wdmg_taggedTemplateLiteral(["Rage of the Reindeer"]))), $effect(wdmg_templateObject20 || (wdmg_templateObject20 = wdmg_taggedTemplateLiteral(["Song of the North"]))), $effect(wdmg_templateObject21 || (wdmg_templateObject21 = wdmg_taggedTemplateLiteral(["Carol of the Bulls"]))), $effect(wdmg_templateObject22 || (wdmg_templateObject22 = wdmg_taggedTemplateLiteral(["Tenacity of the Snapper"]))), $effect(wdmg_templateObject23 || (wdmg_templateObject23 = wdmg_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"])))],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/sdmg.ts
var sdmg_templateObject, sdmg_templateObject2, sdmg_templateObject3, sdmg_templateObject4, sdmg_templateObject5, sdmg_templateObject6, sdmg_templateObject7, sdmg_templateObject8, sdmg_templateObject9, sdmg_templateObject10, sdmg_templateObject11, sdmg_templateObject12, sdmg_templateObject13, sdmg_templateObject14, sdmg_templateObject15;
function sdmg_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var sdmgQuest = {
  name: "Spell Damage Test",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [{
    name: "Simmer",
    completed: () => have($effect(sdmg_templateObject || (sdmg_templateObject = sdmg_taggedTemplateLiteral(["Simmering"])))),
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(1, template_string_$skill(sdmg_templateObject2 || (sdmg_templateObject2 = sdmg_taggedTemplateLiteral(["Simmer"])))),
    limit: {
      tries: 1
    }
  }, {
    name: "Tobiko Marble Soda",
    completed: () => have($effect(sdmg_templateObject3 || (sdmg_templateObject3 = sdmg_taggedTemplateLiteral(["Pisces in the Skyces"])))) || !have(template_string_$item(sdmg_templateObject4 || (sdmg_templateObject4 = sdmg_taggedTemplateLiteral(["tobiko marble soda"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(sdmg_templateObject5 || (sdmg_templateObject5 = sdmg_taggedTemplateLiteral(["tobiko marble soda"]))))
  }, {
    name: "Obsidian Nutcracker",
    completed: () => have(template_string_$item(sdmg_templateObject6 || (sdmg_templateObject6 = sdmg_taggedTemplateLiteral(["obsidian nutcracker"])))),
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(sdmg_templateObject7 || (sdmg_templateObject7 = sdmg_taggedTemplateLiteral(["obsidian nutcracker"]))))
  }, {
    name: "Inner Elf",
    prepare: () => Clan.join("Beldungeon"),
    completed: () => have($effect(sdmg_templateObject8 || (sdmg_templateObject8 = sdmg_taggedTemplateLiteral(["Inner Elf"])))) || property_get("_snokebombUsed") >= 3,
    do: $location(sdmg_templateObject9 || (sdmg_templateObject9 = sdmg_taggedTemplateLiteral(["The Slime Tube"]))),
    outfit: {
      familiar: template_string_$familiar(sdmg_templateObject10 || (sdmg_templateObject10 = sdmg_taggedTemplateLiteral(["Machine Elf"])))
    },
    choices: {
      326: 1
    },
    combat: new CombatStrategy().macro(Macro.trySkill(template_string_$skill(sdmg_templateObject11 || (sdmg_templateObject11 = sdmg_taggedTemplateLiteral(["Snokebomb"])))).abort())
  }, {
    name: "Spell Damage Poolbuff",
    prepare: () => Clan.join("Bonus Adventures from Hell"),
    completed: () => have($effect(sdmg_templateObject12 || (sdmg_templateObject12 = sdmg_taggedTemplateLiteral(["Mental A-cue-ity"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pool 2")
  }, {
    name: "Spell Damage Test",
    completed: () => CommunityService.SpellDamage.isDone(),
    do: () => {
      var predictedTestTurns = CommunityService.SpellDamage.prediction;
      var testTurns = CommunityService.SpellDamage.actualCost();
      printModtrace("spell damage");
      printModtrace("spell damage percent");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.SpellDamage.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 35);
    },
    outfit: {
      modifier: "spell damage"
    },
    effects: [$effect(sdmg_templateObject13 || (sdmg_templateObject13 = sdmg_taggedTemplateLiteral(["Song of Sauce"]))), $effect(sdmg_templateObject14 || (sdmg_templateObject14 = sdmg_taggedTemplateLiteral(["Carol of the Hells"]))), $effect(sdmg_templateObject15 || (sdmg_templateObject15 = sdmg_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"])))],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/famwt.ts
var famwt_templateObject, famwt_templateObject2, famwt_templateObject3, famwt_templateObject4, famwt_templateObject5, famwt_templateObject6, famwt_templateObject7, famwt_templateObject8, famwt_templateObject9, famwt_templateObject10, famwt_templateObject11, famwt_templateObject12, famwt_templateObject13;
function famwt_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var famwtQuest = {
  name: "Familiar Weight Test",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [{
    name: "Overloaded Yule Battery",
    ready: () => have(template_string_$item(famwt_templateObject || (famwt_templateObject = famwt_taggedTemplateLiteral(["box of Familiar Jacks"])))),
    completed: () => have(template_string_$item(famwt_templateObject2 || (famwt_templateObject2 = famwt_taggedTemplateLiteral(["overloaded Yule battery"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(famwt_templateObject3 || (famwt_templateObject3 = famwt_taggedTemplateLiteral(["box of Familiar Jacks"])))),
    outfit: {
      familiar: template_string_$familiar(famwt_templateObject4 || (famwt_templateObject4 = famwt_taggedTemplateLiteral(["Mini-Trainbot"])))
    }
  }, {
    name: "Witchess Buff",
    completed: () => property_get("_witchessBuff"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("witchess")
  }, {
    name: "Pool Buff",
    prepare: () => Clan.join("Bonus Adventures from Hell"),
    completed: () => have($effect(famwt_templateObject5 || (famwt_templateObject5 = famwt_taggedTemplateLiteral(["Billiards Belligerence"])))) || property_get("_poolGames") >= 3,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("pool 1")
  }, {
    name: "Hatter Buff",
    completed: () => !have(template_string_$item(famwt_templateObject6 || (famwt_templateObject6 = famwt_taggedTemplateLiteral(["\"DRINK ME\" potion"])))) || have($effect(famwt_templateObject7 || (famwt_templateObject7 = famwt_taggedTemplateLiteral(["You Can Really Taste the Dormouse"])))) || !have(template_string_$item(famwt_templateObject8 || (famwt_templateObject8 = famwt_taggedTemplateLiteral(["sombrero-mounted sparkler"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("hatter sombrero-mounted sparkler")
  }, {
    name: "Familiar Weight Test",
    completed: () => CommunityService.FamiliarWeight.isDone(),
    do: () => {
      var predictedTestTurns = CommunityService.FamiliarWeight.prediction;
      var testTurns = CommunityService.FamiliarWeight.actualCost();
      printModtrace("familiar weight");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.FamiliarWeight.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 42);
    },
    outfit: {
      modifier: "familiar weight",
      familiar: template_string_$familiar(famwt_templateObject9 || (famwt_templateObject9 = famwt_taggedTemplateLiteral(["Mini-Trainbot"]))),
      famequip: template_string_$item(famwt_templateObject10 || (famwt_templateObject10 = famwt_taggedTemplateLiteral(["overloaded Yule battery"])))
    },
    limit: {
      tries: 1
    },
    effects: [$effect(famwt_templateObject11 || (famwt_templateObject11 = famwt_taggedTemplateLiteral(["Empathy"]))), $effect(famwt_templateObject12 || (famwt_templateObject12 = famwt_taggedTemplateLiteral(["Blood Bond"]))), $effect(famwt_templateObject13 || (famwt_templateObject13 = famwt_taggedTemplateLiteral(["Leash of Linguini"])))]
  }]
};
;// CONCATENATED MODULE: ./src/tasks/noncombat.ts
var noncombat_templateObject, noncombat_templateObject2, noncombat_templateObject3, noncombat_templateObject4, noncombat_templateObject5, noncombat_templateObject6, noncombat_templateObject7, noncombat_templateObject8, noncombat_templateObject9, noncombat_templateObject10, noncombat_templateObject11, noncombat_templateObject12, noncombat_templateObject13, noncombat_templateObject14, noncombat_templateObject15, noncombat_templateObject16, noncombat_templateObject17, noncombat_templateObject18, noncombat_templateObject19;
function noncombat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var noncombatQuest = {
  name: "Noncombat Test",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [{
    name: "Shadow Waters",
    completed: () => have($effect(noncombat_templateObject || (noncombat_templateObject = noncombat_taggedTemplateLiteral(["Shadow Waters"])))) || !have(template_string_$item(noncombat_templateObject2 || (noncombat_templateObject2 = noncombat_taggedTemplateLiteral(["Rufus's shadow lodestone"])))),
    do: () => $location(noncombat_templateObject3 || (noncombat_templateObject3 = noncombat_taggedTemplateLiteral(["Shadow Rift"]))),
    choices: {
      1500: 2
    }
  }, {
    name: "Silent Running",
    prepare: () => Clan.join("Bonus Adventures from Hell"),
    completed: () => have($effect(noncombat_templateObject4 || (noncombat_templateObject4 = noncombat_taggedTemplateLiteral(["Silent Running"])))) || property_get("_olympicSwimmingPool"),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("swim noncombat")
  }, {
    name: "Squeaky Rose",
    completed: () => !have(template_string_$item(noncombat_templateObject5 || (noncombat_templateObject5 = noncombat_taggedTemplateLiteral(["squeaky toy rose"])))) || have($effect(noncombat_templateObject6 || (noncombat_templateObject6 = noncombat_taggedTemplateLiteral(["A Rose by Any Other Material"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(noncombat_templateObject7 || (noncombat_templateObject7 = noncombat_taggedTemplateLiteral(["squeaky toy rose"]))))
  }, {
    name: "Shady Shades",
    completed: () => !have(template_string_$item(noncombat_templateObject8 || (noncombat_templateObject8 = noncombat_taggedTemplateLiteral(["shady shades"])))) || have($effect(noncombat_templateObject9 || (noncombat_templateObject9 = noncombat_taggedTemplateLiteral(["Throwing Some Shade"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(noncombat_templateObject10 || (noncombat_templateObject10 = noncombat_taggedTemplateLiteral(["shady shades"]))))
  }, {
    name: "Noncombat Test",
    completed: () => CommunityService.Noncombat.isDone(),
    do: () => {
      var predictedTestTurns = CommunityService.Noncombat.prediction;
      var testTurns = CommunityService.Noncombat.actualCost();
      printModtrace("combat rate");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.Noncombat.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      offhand: template_string_$item(noncombat_templateObject11 || (noncombat_templateObject11 = noncombat_taggedTemplateLiteral(["unbreakable umbrella"]))),
      modifier: "-60 combat rate 13 familiar weight",
      familiar: template_string_$familiar(noncombat_templateObject12 || (noncombat_templateObject12 = noncombat_taggedTemplateLiteral(["Disgeist"]))),
      famequip: template_string_$item(noncombat_templateObject13 || (noncombat_templateObject13 = noncombat_taggedTemplateLiteral(["tiny stillsuit"]))),
      modes: {
        umbrella: "cocoon"
      }
    },
    effects: [$effect(noncombat_templateObject14 || (noncombat_templateObject14 = noncombat_taggedTemplateLiteral(["Empathy"]))), $effect(noncombat_templateObject15 || (noncombat_templateObject15 = noncombat_taggedTemplateLiteral(["Blood Bond"]))), $effect(noncombat_templateObject16 || (noncombat_templateObject16 = noncombat_taggedTemplateLiteral(["Leash of Linguini"]))), $effect(noncombat_templateObject17 || (noncombat_templateObject17 = noncombat_taggedTemplateLiteral(["The Sonata of Sneakiness"]))), $effect(noncombat_templateObject18 || (noncombat_templateObject18 = noncombat_taggedTemplateLiteral(["Smooth Movements"]))), $effect(noncombat_templateObject19 || (noncombat_templateObject19 = noncombat_taggedTemplateLiteral(["Feeling Lonely"])))],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./node_modules/libram/dist/resources/2015/DeckOfEveryCard.js
var DeckOfEveryCard_templateObject;
function DeckOfEveryCard_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/**
 * @returns Do we `have` the Deck of Every Card?
 */
function DeckOfEveryCard_have() {
  return have_($item(DeckOfEveryCard_templateObject || (DeckOfEveryCard_templateObject = DeckOfEveryCard_taggedTemplateLiteral(["Deck of Every Card"]))));
}
var cards = Object.freeze(["X of Clubs", "X of Diamonds", "X of Hearts", "X of Spades", "X of Papayas", "X of Kumquats", "X of Salads", "X of Cups", "X of Coins", "X of Swords", "X of Wands", "XVI - The Tower", "Professor Plum", "Spare Tire", "Extra Tank", "Sheep", "Year of Plenty", "Mine", "Laboratory", "Plains", "Swamp", "Mountain", "Forest", "Island", "Lead Pipe", "Rope", "Wrench", "Candlestick", "Knife", "Revolver", "Gift Card", "1952 Mickey Mantle", "XXI - The World", "III - The Empress", "VI - The Lovers", "Healing Salve", "Dark Ritual", "Lightning Bolt", "Giant Growth", "Ancestral Recall", "XI - Strength", "I - The Magician", "0 - The Fool", "X - The Wheel of Fortune", "The Race Card", "Green Card", "IV - The Emperor", "IX - The Hermit", "Werewolf", "The Hive", "XVII - The Star", "VII - The Chariot", "XV - The Devil", "V - The Hierophant", "Fire Elemental", "Christmas Card", "Go Fish", "Goblin Sapper", "II - The High Priestess", "XIV - Temperance", "XVIII - The Moon", "Hunky Fireman Card", "Aquarius Horoscope", "XII - The Hanged Man", "Suit Warehouse Discount Card", "Pirate Birthday Card", "Plantable Greeting Card", "Slimer Trading Card", "XIII - Death", "Unstable Portal"]);
/**
 * @returns The number of cards we've drawn so far today--remember, cheating counts as 5
 */
function getCardsDrawn() {
  return clamp(property_get("_deckCardsDrawn"), 0, 15);
}
/**
 * @returns The number of draws we have remaining today--remember, cheating counts as 5
 */
function getRemainingDraws() {
  return 15 - getCardsDrawn();
}
/**
 * @returns The number of additional cards we can cheat today
 */
function getRemainingCheats() {
  return Math.floor(getRemainingDraws() / 5);
}
/**
 * @returns An array of the Cards we've seen today
 */
function getCardsSeen() {
  return property_get("_deckCardsSeen") ? property_get("_deckCardsSeen").split("|") : [];
}
/**
 * Cheat a card of your choice from the Deck
 *
 * @param card The card in question
 * @returns `true` if we succeed or if we've already cheated that card today; `false` if we fail or are out of draws/cheats for the day.
 */
function cheatCard(card) {
  if (getCardsSeen().includes(card)) return true;
  if (getRemainingDraws() < 5) return false;
  return (0,external_kolmafia_namespaceObject.cliExecute)("cheat ".concat(card));
}
;// CONCATENATED MODULE: ./src/tasks/booze.ts
var booze_templateObject, booze_templateObject2, booze_templateObject3, booze_templateObject4, booze_templateObject5, booze_templateObject6, booze_templateObject7, booze_templateObject8, booze_templateObject9, booze_templateObject10, booze_templateObject11, booze_templateObject12, booze_templateObject13, booze_templateObject14, booze_templateObject15, booze_templateObject16, booze_templateObject17, booze_templateObject18, booze_templateObject19, booze_templateObject20, booze_templateObject21, booze_templateObject22;
function booze_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var boozeQuest = {
  name: "Item and Booze Drop Test",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [{
    name: "Retreive Clover",
    completed: () => have(template_string_$item(booze_templateObject || (booze_templateObject = booze_taggedTemplateLiteral(["11-leaf clover"])))) || property_get("_cloversPurchased") >= 2,
    do: () => (0,external_kolmafia_namespaceObject.retrieveItem)(1, template_string_$item(booze_templateObject2 || (booze_templateObject2 = booze_taggedTemplateLiteral(["11-leaf clover"]))))
  }, {
    name: "Retrieve Cyclops Eyedrops",
    prepare: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(booze_templateObject3 || (booze_templateObject3 = booze_taggedTemplateLiteral(["11-leaf clover"])))),
    completed: () => have($effect(booze_templateObject4 || (booze_templateObject4 = booze_taggedTemplateLiteral(["One Very Clear Eye"])))) || have(template_string_$item(booze_templateObject5 || (booze_templateObject5 = booze_taggedTemplateLiteral(["cyclops eyedrops"])))),
    do: $location(booze_templateObject6 || (booze_templateObject6 = booze_taggedTemplateLiteral(["The Limerick Dungeon"]))),
    limit: {
      tries: 1
    }
  }, {
    name: "Use Eyedrops",
    completed: () => have($effect(booze_templateObject7 || (booze_templateObject7 = booze_taggedTemplateLiteral(["One Very Clear Eye"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(booze_templateObject8 || (booze_templateObject8 = booze_taggedTemplateLiteral(["cyclops eyedrops"]))))
  }, {
    name: "Feel Lost",
    completed: () => have($effect(booze_templateObject9 || (booze_templateObject9 = booze_taggedTemplateLiteral(["Feeling Lost"])))) || property_get("_feelLostUsed") >= 1,
    do: () => (0,external_kolmafia_namespaceObject.useSkill)(1, template_string_$skill(booze_templateObject10 || (booze_templateObject10 = booze_taggedTemplateLiteral(["Feel Lost"]))))
  }, {
    name: "Wheel of Fortune",
    completed: () => have($effect(booze_templateObject11 || (booze_templateObject11 = booze_taggedTemplateLiteral(["Fortune of the Wheel"])))) || property_get("_deckCardsDrawn") > 0,
    do: () => cheatCard("X - The Wheel of Fortune")
  }, {
    name: "Infernal Thirst Wish",
    completed: () => property_get("_genieWishesUsed") >= 3 || have($effect(booze_templateObject12 || (booze_templateObject12 = booze_taggedTemplateLiteral(["Infernal Thirst"])))),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("genie effect Infernal Thirst")
  }, {
    name: "Bag of Grain",
    completed: () => have($effect(booze_templateObject13 || (booze_templateObject13 = booze_taggedTemplateLiteral(["Nearly All-Natural"])))) || !have(template_string_$item(booze_templateObject14 || (booze_templateObject14 = booze_taggedTemplateLiteral(["bag of grain"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(booze_templateObject15 || (booze_templateObject15 = booze_taggedTemplateLiteral(["bag of grain"]))))
  }, {
    name: "Autumn Leaf",
    completed: () => have($effect(booze_templateObject16 || (booze_templateObject16 = booze_taggedTemplateLiteral(["Crunching Leaves"])))) || !have(template_string_$item(booze_templateObject17 || (booze_templateObject17 = booze_taggedTemplateLiteral(["autumn leaf"])))),
    do: () => (0,external_kolmafia_namespaceObject.use)(1, template_string_$item(booze_templateObject18 || (booze_templateObject18 = booze_taggedTemplateLiteral(["autumn leaf"]))))
  }, {
    name: "Item and Booze Drop Test",
    completed: () => CommunityService.BoozeDrop.isDone(),
    do: () => {
      var predictedTestTurns = CommunityService.BoozeDrop.prediction;
      var testTurns = CommunityService.BoozeDrop.actualCost();
      printModtrace("item drop");
      printModtrace("booze drop");
      (0,external_kolmafia_namespaceObject.print)("Expecting: [".concat(predictedTestTurns, "]"), "blue");
      (0,external_kolmafia_namespaceObject.print)("Took: [".concat(testTurns, "]"), "blue");
      CommunityService.BoozeDrop.run(() => _set("_mustardServiceTests", "".concat(property_get("_mustardServiceTests"), ",").concat(testTurns, " [Expected: ").concat(predictedTestTurns, "]")), 1);
    },
    outfit: {
      modifier: "15 Item Drop, 30 Booze Drop, -100 Gear Drop, -equip broken champagne bottle"
    },
    effects: [$effect(booze_templateObject19 || (booze_templateObject19 = booze_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), $effect(booze_templateObject20 || (booze_templateObject20 = booze_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), $effect(booze_templateObject21 || (booze_templateObject21 = booze_taggedTemplateLiteral(["Steely-Eyed Squint"]))), $effect(booze_templateObject22 || (booze_templateObject22 = booze_taggedTemplateLiteral(["Spice Haze"])))],
    limit: {
      tries: 1
    }
  }]
};
;// CONCATENATED MODULE: ./src/tasks/finale.ts
var finale_templateObject, finale_templateObject2;
function finale_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var finaleQuest = {
  name: "Finale!",
  tasks: [{
    name: "Donate!",
    completed: () => property_get("kingLiberated"),
    do: () => CommunityService.donate(),
    limit: {
      tries: 1
    }
  }, {
    name: "Printing Details!",
    completed: () => property_get("_mustardServiceTime") === "",
    do: () => {
      var currentTime = (0,external_kolmafia_namespaceObject.nowToInt)();
      var baseString = property_get("csServicesPerformed").replace("Feed The Children", "Muscle: ").replace("Build Playground Mazes", "Mysticality: ").replace("Feed Conspirators", "Moxie: ").replace("Donate Blood", "HP: ").replace("Reduce Gazelle Population", "Weapon Damage: ").replace("Make Sausage", "Spell Damage: ").replace("Breed More Collies", "Familiar Weight: ").replace("Be a Living Statue", "Noncombat: ").replace("Make Margaritas", "Item and Booze Drop: ").replace("Clean Steam Tunnels", "Hot Resistance: ");
      (0,external_kolmafia_namespaceObject.print)("(none): [".concat(property_get("_mustardServiceTests").split(",")[0], "]"), "blue");
      for (var i = 1; i <= 10; i++) {
        var testName = baseString.split(",")[i];
        var testDetails = property_get("_mustardServiceTests").split(",")[i];
        (0,external_kolmafia_namespaceObject.print)("".concat(testName, "[").concat(testDetails, "]"));
      }
      (0,external_kolmafia_namespaceObject.print)("Took: ".concat(Math.floor((currentTime - Number(property_get("_mustardServiceTime"))) / 60000), " Minute(s), ").concat(Math.floor((currentTime - Number(property_get("_mustardServiceTime"))) % 60000 / 1000), " Second(s)"), "green");
      _set("_mustardServiceTime", "");
    }
  }, {
    name: "Empty Storage",
    completed: () => property_get("lastEmptiedStorage") === (0,external_kolmafia_namespaceObject.myAscensions)(),
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("hagnk all"),
    limit: {
      tries: 1
    }
  }, {
    name: "Lose Loss",
    completed: () => !have($effect(finale_templateObject || (finale_templateObject = finale_taggedTemplateLiteral(["Feeling Lost"])))),
    do: () => uneffect($effect(finale_templateObject2 || (finale_templateObject2 = finale_taggedTemplateLiteral(["Feeling Lost"]))))
  }, {
    name: "Prismbreak Moment",
    completed: () => property_get("_smithsnessSummons") === 3,
    do: () => (0,external_kolmafia_namespaceObject.cliExecute)("gwa prism; gwa breakfast")
  }]
};
;// CONCATENATED MODULE: ./src/main.ts















function main() {
  var tasks = getTasks([runStartQuest, skeletonsQuest, CoilQuest, levellingQuest, muscleQuest, mystQuest, moxQuest, hotresQuest, wdmgQuest, sdmgQuest, hpQuest, famwtQuest, noncombatQuest, boozeQuest, finaleQuest]);
  var engine = new Engine(tasks);
  (0,external_kolmafia_namespaceObject.setAutoAttack)(0);
  while (!finished()) {
    var task = engine.getNextTask();
    if (task === undefined) throw "Unable to find available task, but the run is not complete";
    engine.execute(task);
  }
}
function finished() {
  return property_get("kingLiberated") && property_get("_smithsnessSummons") === 3;
}
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;