'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventxCore = require('eventx-core');

var _eventxCore2 = _interopRequireDefault(_eventxCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== "undefined" && !window.evx) window.evx = _eventxCore2.default;

function kebab(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

_eventxCore2.default.createEvent("attrchange", function (target, callback) {
    var config = { attributes: true, attributeOldValue: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var mutation = _step.value;

                callback(mutation);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createVarEvent("attrchange", function (target, args, callback) {
    var config = { attributes: true, attributeOldValue: true, attributeFilter: [args[0]] };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = mutationsList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var mutation = _step2.value;

                if (mutation.target == target) callback(mutation);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("childnodeadded", function (target, callback) {
    var config = { childList: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = mutationsList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var mutation = _step3.value;

                if (mutation.target == target && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.constructor.name != "Text") {
                            mutation.addedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createVarEvent("childnodeadded", function (target, args, callback) {
    var config = { childList: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = mutationsList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var mutation = _step4.value;

                if (mutation.target == target && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                            mutation.addedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("childnodeadded_deep", function (target, callback) {
    var config = { childList: true, subtree: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = mutationsList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var mutation = _step5.value;

                if (mutation.target == target && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.constructor.name != "Text") {
                            mutation.addedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createVarEvent("childnodeadded_deep", function (target, args, callback) {
    var config = { childList: true, subtree: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = mutationsList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var mutation = _step6.value;

                if (mutation.target == target && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                            mutation.addedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("childnoderemoved", function (target, callback) {
    var config = { childList: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
            for (var _iterator7 = mutationsList[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var mutation = _step7.value;

                if (mutation.target == target && mutation.removedNodes.length > 0) {
                    mutation.removedNodes.forEach(function (node) {
                        if (node.constructor.name != "Text") {
                            mutation.removedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                }
            } finally {
                if (_didIteratorError7) {
                    throw _iteratorError7;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createVarEvent("childnoderemoved", function (target, args, callback) {
    var config = { childList: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
            for (var _iterator8 = mutationsList[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var mutation = _step8.value;

                if (mutation.target == target && mutation.removedNodes.length > 0) {
                    mutation.removedNodes.forEach(function (node) {
                        if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                            mutation.removedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                    _iterator8.return();
                }
            } finally {
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("childnoderemoved_deep", function (target, callback) {
    var config = { childList: true, subtree: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = mutationsList[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var mutation = _step9.value;

                if (mutation.target == target && mutation.removedNodes.length > 0) {
                    mutation.removedNodes.forEach(function (node) {
                        if (node.constructor.name != "Text") {
                            mutation.removedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                }
            } finally {
                if (_didIteratorError9) {
                    throw _iteratorError9;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createVarEvent("childnoderemoved_deep", function (target, args, callback) {
    var config = { childList: true, subtree: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
            for (var _iterator10 = mutationsList[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var mutation = _step10.value;

                if (mutation.target == target && mutation.removedNodes.length > 0) {
                    mutation.removedNodes.forEach(function (node) {
                        if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                            mutation.removedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                    _iterator10.return();
                }
            } finally {
                if (_didIteratorError10) {
                    throw _iteratorError10;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("textnodeadded", function (target, callback) {
    var config = { childList: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
            for (var _iterator11 = mutationsList[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var mutation = _step11.value;

                if (mutation.target == target && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.constructor.name == "Text") {
                            mutation.addedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion11 && _iterator11.return) {
                    _iterator11.return();
                }
            } finally {
                if (_didIteratorError11) {
                    throw _iteratorError11;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("textnoderemoved", function (target, callback) {
    var config = { childList: true };

    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
            for (var _iterator12 = mutationsList[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var mutation = _step12.value;

                if (mutation.target == target && mutation.removedNodes.length > 0) {
                    mutation.removedNodes.forEach(function (node) {
                        if (node.constructor.name == "Text") {
                            mutation.removedNode = node;
                            callback(mutation);
                        }
                    });
                }
            }
        } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                    _iterator12.return();
                }
            } finally {
                if (_didIteratorError12) {
                    throw _iteratorError12;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

_eventxCore2.default.createEvent("textnodechanged", function (target, callback) {
    var config = { characterData: true, characterDataOldValue: true, childList: true, subtree: true };

    console.log("aaa");
    var ob = new MutationObserver(function (mutationsList) {
        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
            for (var _iterator13 = mutationsList[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var mutation = _step13.value;

                //if (mutation.target == target) {
                callback(mutation);
                //}
            }
        } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion13 && _iterator13.return) {
                    _iterator13.return();
                }
            } finally {
                if (_didIteratorError13) {
                    throw _iteratorError13;
                }
            }
        }
    });

    ob.observe(target, config);

    return function () {
        //ob.unobserve(target);
        ob.disconnect();
    };
});

exports.default = _eventxCore2.default;