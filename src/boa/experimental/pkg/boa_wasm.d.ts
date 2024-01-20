/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
* Evaluate the given ECMAScript code.
*
* # Errors
*
* If the execution of the script throws, returns a `JsValue` with the error string.
* @param {string} src
* @returns {string}
*/
export function evaluate(src: string): string;
/**
* Evaluate some JavaScript with trace hooks.
*
* # Errors
*
* If the execution of the script throws, returns a `JsValue` with the error string.
* @param {string} src
* @param {Function} compiled_output_action
* @param {Function} trace_output_action
* @returns {string}
*/
export function evaluate_with_debug_hooks(src: string, compiled_output_action: Function, trace_output_action: Function): string;
/**
* The WASM exposed `BoaJs` Object.
*/
export class BoaJs {
  free(): void;
/**
* Create a new BoaJs Object.
*/
  constructor();
/**
* Set a Js Closure action for handling Boa's ByteCompiler trace output.
* @param {Function} f
*/
  set_compiled_output_action(f: Function): void;
/**
* Set a Js Closure action for handling Boa's VM Trace output.
* @param {Function} f
*/
  set_trace_output_action(f: Function): void;
/**
* Evaluate some Js Source Code with trace active.
*
* # Errors
*
* If the execution of the script throws, returns a `JsValue` with the error string.
* @param {string} src
* @returns {string}
*/
  evaluate_with_trace(src: string): string;
/**
* Evaluate Js Source code without running trace.
*
* # Errors
*
* If the execution of the script throws, returns a `JsValue` with the error string.
* @param {string} src
* @returns {string}
*/
  evaluate(src: string): string;
}
