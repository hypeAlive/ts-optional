/**
 * A container object which may or may not contain a non-null value.
 * If a value is present, `isPresent()` will return true and `get()` will return the value.
 *
 * @template T the type of value
 */
export declare class Optional<T> {
    private readonly value;
    /**
     * Constructs an instance of Optional.
     *
     * @param {T | null | undefined} value The value to be stored in this Optional
     */
    private constructor();
    /**
     * Returns an Optional with the specified present non-null value.
     *
     * @template T the type of value
     * @param {T | null} value the value to be present
     * @return {Optional<T>} an Optional with the value present
     */
    static of<T>(value: T | null): Optional<T>;
    /**
     * Returns an empty Optional instance.
     *
     * @template T the type of value
     * @return {Optional<T>} an empty Optional
     */
    static empty<T>(): Optional<T>;
    /**
     * If a value is present in this Optional, returns the value, otherwise throws an error.
     *
     * @return {T} the non-null value held by this Optional
     */
    get(): T;
    /**
     * Returns true if there is a value present, otherwise false.
     *
     * @return {boolean} true if there is a value present, otherwise false
     */
    isPresent(): boolean;
    /**
     * Returns true if there is no value present, otherwise false.
     *
     * @return {boolean} true if there is no value present, otherwise false
     */
    isEmpty(): boolean;
    /**
     * If a value is present, performs the given action with the value, otherwise does nothing.
     *
     * @param {(value: T) => void} consumer block to be executed if a value is present
     */
    ifPresent(consumer: (value: T) => void): void;
    /**
     * If a value is present, performs the given action with the value, otherwise performs the given empty-based action.
     *
     * @param {(value: T) => void} consumer the action to be performed, if a value is present
     * @param {() => void} emptyAction the empty-based action to be performed, if no value is present
     */
    ifPresentOrElse(consumer: (value: T) => void, emptyAction: () => void): void;
    /**
     * Returns the value if present, otherwise returns `other`.
     *
     * @param {T} other the value to be returned, if no value is present
     * @return {T} the value, if present, otherwise `other`
     */
    orElse(other: T): T;
    /**
     * If a value is present, applies the provided mapping function to it, and returns an Optional describing the result.
     *
     * @template R The type of the result of the mapping function
     * @param {(value: T) => R} fn a mapping function to apply to the value, if present
     * @return {Optional<R>} an Optional describing the result of applying a mapping function to the value of this Optional
     */
    map<R>(fn: (value: T) => R): Optional<R>;
    /**
     * If no value is present, performs the given action, otherwise does nothing.
     *
     * @param {() => void} action block to be executed if no value is present
     */
    ifEmpty(action: () => void): void;
    /**
     * If a value is present, returns the value, otherwise throws an Error with the provided message.
     *
     * @param {string} msg - The message to use for the Error if no value is present.
     * @return {T} - The value, if present.
     * @throws {Error} - If no value is present.
     */
    orElseThrow(msg: string): T;
}
