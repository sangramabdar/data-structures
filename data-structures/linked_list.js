"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LinkedList_instances, _LinkedList_head, _LinkedList_tail, _LinkedList_length, _LinkedList_isValidIndex, _LinkedList_getNodeByIndex, _LinkedList_getNode;
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.next = null;
        this.prevoius = null;
        this.value = value;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        _LinkedList_instances.add(this);
        _LinkedList_head.set(this, null);
        _LinkedList_tail.set(this, null);
        _LinkedList_length.set(this, 0);
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        if (!__classPrivateFieldGet(this, _LinkedList_head, "f")) {
            this.inserFirst(value);
            return;
        }
        this.insertLast(value);
    };
    LinkedList.prototype.insertAtindex = function (index, newValue) {
        if (!__classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_isValidIndex).call(this, index))
            return;
        var localIndex = 0;
        if (index === localIndex) {
            this.inserFirst(newValue);
            return;
        }
        if (index === __classPrivateFieldGet(this, _LinkedList_length, "f") - 1) {
            this.insertLast(newValue);
            return;
        }
        var tempNode = __classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_getNodeByIndex).call(this, index);
        var previosNode = tempNode.prevoius;
        var node = new LinkedListNode(newValue);
        node.prevoius = previosNode;
        previosNode.next = node;
        node.next = tempNode;
        tempNode.prevoius = node;
        __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") + 1, "f");
        this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
    };
    LinkedList.prototype.inserFirst = function (value) {
        var node = new LinkedListNode(value);
        if (!__classPrivateFieldGet(this, _LinkedList_head, "f")) {
            __classPrivateFieldSet(this, _LinkedList_head, node, "f");
            __classPrivateFieldSet(this, _LinkedList_tail, __classPrivateFieldGet(this, _LinkedList_head, "f"), "f");
            __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") + 1, "f");
            this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
            return;
        }
        node.next = __classPrivateFieldGet(this, _LinkedList_head, "f");
        __classPrivateFieldGet(this, _LinkedList_head, "f").prevoius = node;
        __classPrivateFieldSet(this, _LinkedList_head, node, "f");
        __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") + 1, "f");
        this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
    };
    LinkedList.prototype.insertLast = function (value) {
        var node = new LinkedListNode(value);
        if (!__classPrivateFieldGet(this, _LinkedList_tail, "f")) {
            __classPrivateFieldSet(this, _LinkedList_tail, node, "f");
            __classPrivateFieldSet(this, _LinkedList_head, __classPrivateFieldGet(this, _LinkedList_tail, "f"), "f");
            __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") + 1, "f");
            this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
            return;
        }
        node.prevoius = __classPrivateFieldGet(this, _LinkedList_tail, "f");
        __classPrivateFieldGet(this, _LinkedList_tail, "f").next = node;
        __classPrivateFieldSet(this, _LinkedList_tail, node, "f");
        __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") + 1, "f");
        this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
    };
    LinkedList.prototype.getByIndex = function (index) {
        if (!__classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_isValidIndex).call(this, index))
            return null;
        var localIndex = 0;
        if (localIndex === index) {
            return __classPrivateFieldGet(this, _LinkedList_head, "f").value;
        }
        if (index === __classPrivateFieldGet(this, _LinkedList_length, "f") - 1) {
            return __classPrivateFieldGet(this, _LinkedList_tail, "f").value;
        }
        var tempNode = __classPrivateFieldGet(this, _LinkedList_head, "f").next;
        localIndex++;
        while (tempNode) {
            if (index === localIndex) {
                return tempNode.value;
            }
            localIndex++;
            tempNode = tempNode.next;
        }
        return null;
    };
    LinkedList.prototype.getHead = function () {
        if (!__classPrivateFieldGet(this, _LinkedList_head, "f"))
            return __classPrivateFieldGet(this, _LinkedList_head, "f").value;
        return null;
    };
    LinkedList.prototype.update = function (value, newValue) {
        var tempNode = __classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_getNode).call(this, value);
        if (!tempNode) {
            console.log("value is not in linkedlist");
            return;
        }
        tempNode.value = newValue;
        console.log("element is updated");
    };
    LinkedList.prototype.updateAtIndex = function (index, newValue) {
        if (!__classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_isValidIndex).call(this, index))
            return;
        var tempNode = __classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_getNodeByIndex).call(this, index);
        if (!tempNode)
            return;
        tempNode.value = newValue;
    };
    LinkedList.prototype.delete = function (value) {
        var _a, _b;
        if (value == ((_a = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _a === void 0 ? void 0 : _a.value)) {
            return this.deleteFirst();
        }
        if (value == ((_b = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _b === void 0 ? void 0 : _b.value)) {
            return this.deleteLast();
        }
        var node = __classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_getNode).call(this, value);
        if (!node) {
            console.log("provided value is not in linkedlist");
            return null;
        }
        var result = node.value;
        var nextNode = node.next;
        var previousNode = node.prevoius;
        previousNode.next = nextNode;
        nextNode.prevoius = previousNode;
        return result;
    };
    LinkedList.prototype.deleteAtIndex = function (index) {
        if (!__classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_isValidIndex).call(this, index))
            return null;
        if (index === 0) {
            return this.deleteFirst();
        }
        if (index === __classPrivateFieldGet(this, _LinkedList_length, "f") - 1) {
            return this.deleteLast();
        }
        var tempNode = __classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_getNodeByIndex).call(this, index);
        if (!tempNode)
            return null;
        var previous = tempNode.prevoius;
        var next = tempNode.next;
        previous.next = next;
        next.prevoius = previous;
        __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") - 1, "f");
        this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
        return tempNode.value;
    };
    LinkedList.prototype.deleteFirst = function () {
        var _a, _b, _c, _d;
        if (!__classPrivateFieldGet(this, _LinkedList_head, "f")) {
            return null;
        }
        if ((_a = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _a === void 0 ? void 0 : _a.next) {
            var value_1 = (_b = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _b === void 0 ? void 0 : _b.value;
            __classPrivateFieldSet(this, _LinkedList_head, (_c = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _c === void 0 ? void 0 : _c.next, "f");
            __classPrivateFieldGet(this, _LinkedList_head, "f").prevoius = null;
            __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") - 1, "f");
            this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
            return value_1;
        }
        var value = (_d = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _d === void 0 ? void 0 : _d.value;
        __classPrivateFieldSet(this, _LinkedList_head, null, "f");
        __classPrivateFieldSet(this, _LinkedList_tail, null, "f");
        __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") - 1, "f");
        this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
        return value;
    };
    LinkedList.prototype.deleteLast = function () {
        var _a, _b, _c, _d;
        if (!__classPrivateFieldGet(this, _LinkedList_tail, "f")) {
            return null;
        }
        if ((_a = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _a === void 0 ? void 0 : _a.prevoius) {
            var value_2 = (_b = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _b === void 0 ? void 0 : _b.value;
            __classPrivateFieldSet(this, _LinkedList_tail, (_c = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _c === void 0 ? void 0 : _c.prevoius, "f");
            __classPrivateFieldGet(this, _LinkedList_tail, "f").next = null;
            __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") - 1, "f");
            this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
            return value_2;
        }
        var value = (_d = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _d === void 0 ? void 0 : _d.value;
        __classPrivateFieldSet(this, _LinkedList_tail, null, "f");
        __classPrivateFieldSet(this, _LinkedList_head, null, "f");
        __classPrivateFieldSet(this, _LinkedList_length, +__classPrivateFieldGet(this, _LinkedList_length, "f") - 1, "f");
        this.length = __classPrivateFieldGet(this, _LinkedList_length, "f");
        return value;
    };
    LinkedList.prototype.getAllValues = function () {
        var curretNode = __classPrivateFieldGet(this, _LinkedList_head, "f");
        var listOfValues = [];
        while (curretNode) {
            listOfValues.push(curretNode.value);
            curretNode = curretNode === null || curretNode === void 0 ? void 0 : curretNode.next;
        }
        return listOfValues;
    };
    LinkedList.prototype.contains = function (value) {
        var _a, _b;
        if (!__classPrivateFieldGet(this, _LinkedList_head, "f"))
            return -1;
        if (value == ((_a = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _a === void 0 ? void 0 : _a.value)) {
            return 0;
        }
        if (value == ((_b = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _b === void 0 ? void 0 : _b.value)) {
            return this.length - 1;
        }
        var tempNode = __classPrivateFieldGet(this, _LinkedList_head, "f").next;
        var localIndex = 1;
        while (tempNode) {
            if ((tempNode === null || tempNode === void 0 ? void 0 : tempNode.value) == value) {
                return localIndex;
            }
            localIndex++;
            tempNode = tempNode.next;
        }
        return -1;
    };
    LinkedList.prototype.printNodes = function () {
        var _a, _b;
        var tempNode = __classPrivateFieldGet(this, _LinkedList_head, "f");
        while (tempNode) {
            console.log(tempNode.value + " => " + ((_a = tempNode === null || tempNode === void 0 ? void 0 : tempNode.prevoius) === null || _a === void 0 ? void 0 : _a.value) + " " + ((_b = tempNode === null || tempNode === void 0 ? void 0 : tempNode.next) === null || _b === void 0 ? void 0 : _b.value));
            tempNode = tempNode === null || tempNode === void 0 ? void 0 : tempNode.next;
        }
    };
    return LinkedList;
}());
_LinkedList_head = new WeakMap(), _LinkedList_tail = new WeakMap(), _LinkedList_length = new WeakMap(), _LinkedList_instances = new WeakSet(), _LinkedList_isValidIndex = function _LinkedList_isValidIndex(index) {
    if (index < 0 || index >= __classPrivateFieldGet(this, _LinkedList_length, "f")) {
        console.log("index is out of range");
        return false;
    }
    return true;
}, _LinkedList_getNodeByIndex = function _LinkedList_getNodeByIndex(index) {
    if (!__classPrivateFieldGet(this, _LinkedList_instances, "m", _LinkedList_isValidIndex).call(this, index))
        return null;
    var localIndex = 0;
    if (index === localIndex) {
        return __classPrivateFieldGet(this, _LinkedList_head, "f");
    }
    if (index == __classPrivateFieldGet(this, _LinkedList_length, "f") - 1) {
        return __classPrivateFieldGet(this, _LinkedList_tail, "f");
    }
    var tempNode = __classPrivateFieldGet(this, _LinkedList_head, "f").next;
    localIndex++;
    while (tempNode) {
        if (index === localIndex) {
            return tempNode;
        }
        localIndex++;
        tempNode = tempNode.next;
    }
    return null;
}, _LinkedList_getNode = function _LinkedList_getNode(value) {
    var _a, _b;
    if (!__classPrivateFieldGet(this, _LinkedList_head, "f")) {
        return null;
    }
    if (value == ((_a = __classPrivateFieldGet(this, _LinkedList_head, "f")) === null || _a === void 0 ? void 0 : _a.value)) {
        return __classPrivateFieldGet(this, _LinkedList_head, "f");
    }
    if (value == ((_b = __classPrivateFieldGet(this, _LinkedList_tail, "f")) === null || _b === void 0 ? void 0 : _b.value)) {
        return __classPrivateFieldGet(this, _LinkedList_tail, "f");
    }
    var tempNode = __classPrivateFieldGet(this, _LinkedList_head, "f").next;
    while (tempNode) {
        if ((tempNode === null || tempNode === void 0 ? void 0 : tempNode.value) == value) {
            return tempNode;
        }
        tempNode = tempNode.next;
    }
    return null;
};
exports.default = LinkedList;
