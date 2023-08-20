import * as wasm from "./boa_wasm_bg.wasm";
import { __wbg_set_wasm } from "./boa_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./boa_wasm_bg.js";

wasm.__wbindgen_start();
