/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
* Evaluate the given ECMAScript code.
* @param {string} src
* @returns {string}
*/
export function evaluate(src: string): string;
/**
* Evaluate some JavaScript with trace hooks.
* @param {string} src
* @param {Function} compiled_output_action
* @param {Function} trace_output_action
* @returns {string}
*/
export function evaluate_with_debug_hooks(src: string, compiled_output_action: Function, trace_output_action: Function): string;
