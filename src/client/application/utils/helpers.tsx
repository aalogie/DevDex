/**
 * This function iterates over the formData object properties and uses them as input for the `deepSet` function.
 *
 * @param form The formData submitted by the form component.
 * @returns The object including the returned value of `deepSet` method.
 */
export const formDataObject = (form: FormData) => {
    const root = {};

    for (const [path, value] of form) {
        // @ts-expect-error
        deepSet(root, path, value);
    }

    return root;
};

/**
 * The `deepSet` function is designed to dynamically set a value at a specified path within a nested object structure.
 * The function iterates over the path, ensuring that each level of the object exists. If a level does not exist, it is created either as an array or an object, depending on the nature of the next key in the path.
 * The actual assignment of the `value` is done at the last key in the path, ensuring that the value is set deeply within the object.
 *
 * @param obj   The object that will be modified.
 * @param path  The path at which the value should be set. It can be a dot-separated string or an array of keys.
 * @param value The value to be set at the specified path.
 * @returns The restructured object.
 */
export const deepSet = (obj: object, path: string[] | string, value: string) => {
    if (Object(obj) !== obj) return obj;
    // eslint-disable-next-line no-param-reassign
    if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/gu) ?? [];

    // @ts-expect-error
    // eslint-disable-next-line max-len, no-param-reassign, @nfq/no-magic-numbers, no-return-assign, @typescript-eslint/no-unsafe-return, no-bitwise, security/detect-object-injection
    path.slice(0, -1).reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : a[c] = Math.abs(path[i + 1]) >> 0 === Number(path[i + 1]) ? [] : {}), obj)[path[path.length - 1]] = value;

    return obj;
};