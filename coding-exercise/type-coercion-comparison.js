console.log([] == false);  // true
console.log([] === false); // false
console.log('' == 0);      // true
console.log('' === 0);     // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

/**
 * Rules:
 *
 * 1. == (Loose Equality)
 *    - If types are different, JavaScript performs type coercion.
 *
 * 2. === (Strict Equality)
 *    - No type coercion.
 *    - Type and value both must be same.
 *
 * 3. Object in == comparison
 *    - Object converts to primitive first.
 *    - [] becomes '' using toString().
 *
 * 4. Boolean in == comparison
 *    - false becomes 0
 *    - true becomes 1
 *
 * 5. String in == comparison
 *    - Numeric string converts to number.
 *    - '' becomes 0
 *
 * 6. null and undefined special rule
 *    - null == undefined → true
 *    - only in loose equality
 *
 * 7. In strict equality:
 *    - Different types always false.
 *
 * -----------------------------------
 *
 * Step:
 *
 * [] == false
 * [] → ''
 * false → 0
 * '' → 0
 * 0 == 0 → true
 *
 * [] === false
 * object !== boolean → false
 *
 * '' == 0
 * '' → 0
 * 0 == 0 → true
 *
 * '' === 0
 * string !== number → false
 *
 * null == undefined
 * special JS rule → true
 *
 * null === undefined
 * different types → false
 *
 * Best Practice:
 * Always use ===
 */
