"use strict";

// Q8: Custom Array.prototype.myMap() implementation.
if (typeof Array.prototype.myMap !== "function") {
    Object.defineProperty(Array.prototype, "myMap", {
        value: function (callback, thisArg) {
            if (this == null) {
                throw new TypeError("myMap called on null or undefined.");
            }
            if (typeof callback !== "function") {
                throw new TypeError("myMap callback must be a function.");
            }

            const source = Object(this);
            const length = source.length >>> 0;
            const result = new Array(length);

            // Preserve sparse array holes, matching the built-in map behaviour.
            for (let index = 0; index < length; index++) {
                if (index in source) {
                    result[index] = callback.call(thisArg, source[index], index, source);
                }
            }
            return result;
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
}

console.log([1, 2, 3].myMap((number) => number * 2)); // [2, 4, 6]
console.log(["a", "b"].myMap((value, index) => `${index}:${value}`));
// ["0:a", "1:b"]
