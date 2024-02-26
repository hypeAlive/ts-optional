"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
/**
 * A container object which may or may not contain a non-null value.
 * If a value is present, `isPresent()` will return true and `get()` will return the value.
 *
 * @template T the type of value
 */
class Optional {
    /**
     * Constructs an instance of Optional.
     *
     * @param {T | null | undefined} value The value to be stored in this Optional
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * Returns an Optional with the specified present non-null value.
     *
     * @template T the type of value
     * @param {T | null} value the value to be present
     * @return {Optional<T>} an Optional with the value present
     */
    static of(value) {
        return new Optional(value);
    }
    /**
     * Returns an empty Optional instance.
     *
     * @template T the type of value
     * @return {Optional<T>} an empty Optional
     */
    static empty() {
        return new Optional(undefined);
    }
    /**
     * If a value is present in this Optional, returns the value, otherwise throws an error.
     *
     * @return {T} the non-null value held by this Optional
     */
    get() {
        if (this.value === null || this.value === undefined) {
            throw new Error("No value present");
        }
        return this.value;
    }
    /**
     * Returns true if there is a value present, otherwise false.
     *
     * @return {boolean} true if there is a value present, otherwise false
     */
    isPresent() {
        return this.value !== null && this.value !== undefined;
    }
    /**
     * Returns true if there is no value present, otherwise false.
     *
     * @return {boolean} true if there is no value present, otherwise false
     */
    isEmpty() {
        return !this.isPresent();
    }
    /**
     * If a value is present, performs the given action with the value, otherwise does nothing.
     *
     * @param {(value: T) => void} consumer block to be executed if a value is present
     */
    ifPresent(consumer) {
        if (this.value !== null && this.value !== undefined) {
            consumer(this.value);
        }
    }
    /**
     * If a value is present, performs the given action with the value, otherwise performs the given empty-based action.
     *
     * @param {(value: T) => void} consumer the action to be performed, if a value is present
     * @param {() => void} emptyAction the empty-based action to be performed, if no value is present
     */
    ifPresentOrElse(consumer, emptyAction) {
        if (this.value !== null && this.value !== undefined) {
            consumer(this.value);
        }
        else {
            emptyAction();
        }
    }
    /**
     * Returns the value if present, otherwise returns `other`.
     *
     * @param {T} other the value to be returned, if no value is present
     * @return {T} the value, if present, otherwise `other`
     */
    orElse(other) {
        return this.value !== null && this.value !== undefined ? this.value : other;
    }
    /**
     * If a value is present, applies the provided mapping function to it, and returns an Optional describing the result.
     *
     * @template R The type of the result of the mapping function
     * @param {(value: T) => R} fn a mapping function to apply to the value, if present
     * @return {Optional<R>} an Optional describing the result of applying a mapping function to the value of this Optional
     */
    map(fn) {
        if (this.isPresent()) {
            return Optional.of(fn(this.get()));
        }
        else {
            return Optional.empty();
        }
    }
    /**
     * If no value is present, performs the given action, otherwise does nothing.
     *
     * @param {() => void} action block to be executed if no value is present
     */
    ifEmpty(action) {
        if (this.isEmpty()) {
            action();
        }
    }
    /**
     * If a value is present, returns the value, otherwise throws an Error with the provided message.
     *
     * @param {string} msg - The message to use for the Error if no value is present.
     * @return {T} - The value, if present.
     * @throws {Error} - If no value is present.
     */
    orElseThrow(msg) {
        if (!this.isPresent()) {
            throw new Error(msg);
        }
        return this.value;
    }
    /**
     * Returns an Optional describing the specified value, if non-null, otherwise returns an empty Optional.
     *
     * @template T the type of the value
     * @param {T | null | undefined} value the possibly-null value to describe
     * @return {Optional<T>} an Optional with a present value if the specified value is non-null, otherwise an empty Optional
     */
    static ofNullable(value) {
        return value === null || value === undefined ? Optional.empty() : Optional.of(value);
    }
}
exports.Optional = Optional;
