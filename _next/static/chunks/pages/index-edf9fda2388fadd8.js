(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2Findex.tsx&page=%2F!":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("./src/pages/index.tsx")}])},"./src/boa/experimental/pkg/boa_wasm.js":function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.d(t,{Bk:function(){return i.Bk}});var o=n("./src/boa/experimental/pkg/boa_wasm_bg.wasm"),i=n("./src/boa/experimental/pkg/boa_wasm_bg.js"),c=e([o]);o=(c.then?(await c)():c)[0],(0,i.oT)(o),o.__wbindgen_start(),r()}catch(e){r(e)}})},"./src/boa/experimental/pkg/boa_wasm_bg.js":function(e,t,n){"use strict";let r;function o(e){r=e}n.d(t,{$d:function(){return ec},AC:function(){return F},BN:function(){return Y},Bk:function(){return O},EV:function(){return ei},Fu:function(){return ee},G7:function(){return el},Hh:function(){return J},JN:function(){return L},KM:function(){return P},N5:function(){return A},Or:function(){return es},Pl:function(){return z},QC:function(){return eo},U4:function(){return en},UF:function(){return Q},Un:function(){return et},Wl:function(){return R},XP:function(){return B},Xn:function(){return W},_e:function(){return er},a2:function(){return M},bN:function(){return ea},cP:function(){return K},eC:function(){return D},eE:function(){return H},eY:function(){return V},gD:function(){return $},h4:function(){return k},iX:function(){return S},m_:function(){return E},mr:function(){return G},o$:function(){return q},oH:function(){return ed},oM:function(){return U},oO:function(){return T},oT:function(){return o},pT:function(){return Z},sq:function(){return X},ug:function(){return N},vD:function(){return C},wV:function(){return eu},zw:function(){return I}}),e=n.hmd(e);let i="undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder,c=new i("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let u=null;function a(){return(null===u||0===u.byteLength)&&(u=new Uint8Array(r.memory.buffer)),u}function l(e,t){return e>>>=0,c.decode(a().subarray(e,e+t))}let s=Array(128).fill(void 0);s.push(void 0,null,!0,!1);let d=s.length;function f(e){d===s.length&&s.push(s.length+1);let t=d;return d=s[t],s[t]=e,t}function g(e){let t=s[e];return e<132||(s[e]=d,d=e),t}let _=0,p="undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder,b=new p("utf-8"),h="function"==typeof b.encodeInto?function(e,t){return b.encodeInto(e,t)}:function(e,t){let n=b.encode(e);return t.set(n),{read:e.length,written:n.length}};function m(e,t,n){if(void 0===n){let n=b.encode(e),r=t(n.length,1)>>>0;return a().subarray(r,r+n.length).set(n),_=n.length,r}let r=e.length,o=t(r,1)>>>0,i=a(),c=0;for(;c<r;c++){let t=e.charCodeAt(c);if(t>127)break;i[o+c]=t}if(c!==r){0!==c&&(e=e.slice(c)),o=n(o,r,r=c+3*e.length,1)>>>0;let t=a().subarray(o+c,o+r),i=h(e,t);c+=i.written}return _=c,o}let w=null;function y(){return(null===w||0===w.byteLength)&&(w=new Int32Array(r.memory.buffer)),w}let v=128;function x(e){if(1==v)throw Error("out of js stack");return s[--v]=e,v}function j(e,t){try{return e.apply(this,t)}catch(e){r.__wbindgen_exn_store(f(e))}}class O{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){let e=this.__destroy_into_raw();r.__wbg_boajs_free(e)}set_compiled_output_action(e){try{r.boajs_set_compiled_output_action(this.__wbg_ptr,x(e))}finally{s[v++]=void 0}}set_trace_output_action(e){try{r.boajs_set_trace_output_action(this.__wbg_ptr,x(e))}finally{s[v++]=void 0}}evaluate_with_trace(e){let t,n;try{let d=r.__wbindgen_add_to_stack_pointer(-16),f=m(e,r.__wbindgen_malloc,r.__wbindgen_realloc),p=_;r.boajs_evaluate_with_trace(d,this.__wbg_ptr,f,p);var o=y()[d/4+0],i=y()[d/4+1],c=y()[d/4+2],u=y()[d/4+3],a=o,s=i;if(u)throw a=0,s=0,g(c);return t=a,n=s,l(a,s)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n,1)}}evaluate(e){let t,n;try{let d=r.__wbindgen_add_to_stack_pointer(-16),f=m(e,r.__wbindgen_malloc,r.__wbindgen_realloc),p=_;r.boajs_evaluate(d,this.__wbg_ptr,f,p);var o=y()[d/4+0],i=y()[d/4+1],c=y()[d/4+2],u=y()[d/4+3],a=o,s=i;if(u)throw a=0,s=0,g(c);return t=a,n=s,l(a,s)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n,1)}}constructor(){let e=r.boajs_new();return this.__wbg_ptr=e>>>0,this}}function k(e,t){let n=l(e,t);return f(n)}function N(e){g(e)}function E(e){let t=s[e];return f(t)}function M(){let e=Error();return f(e)}function P(e,t){let n=s[t].stack,o=m(n,r.__wbindgen_malloc,r.__wbindgen_realloc),i=_;y()[e/4+1]=i,y()[e/4+0]=o}function S(e,t){let n,o;try{n=e,o=t,console.error(l(e,t))}finally{r.__wbindgen_free(n,o,1)}}function C(){return j(function(e,t){s[e].getRandomValues(s[t])},arguments)}function D(){return j(function(e,t){s[e].randomFillSync(g(t))},arguments)}function T(e){let t=s[e].crypto;return f(t)}function R(e){let t=s[e];return"object"==typeof t&&null!==t}function A(e){let t=s[e].process;return f(t)}function F(e){let t=s[e].versions;return f(t)}function I(e){let t=s[e].node;return f(t)}function V(e){let t="string"==typeof s[e];return t}function L(e){let t=s[e].msCrypto;return f(t)}function U(){return j(function(){let t=e.require;return f(t)},arguments)}function q(e){let t="function"==typeof s[e];return t}function z(e){let t=s[e].performance;return f(t)}function B(e){let t=void 0===s[e];return t}function X(e){let t=s[e].now();return t}function Z(e){return f(e)}function H(e,t){let n=Function(l(e,t));return f(n)}function W(){return j(function(e,t){let n=s[e].call(s[t]);return f(n)},arguments)}function $(){return j(function(e,t,n){let r=s[e].call(s[t],s[n]);return f(r)},arguments)}function Y(e){let t=s[e].getTime();return t}function G(e){let t=s[e].getTimezoneOffset();return t}function J(e){let t=new Date(s[e]);return f(t)}function K(){let e=new Date;return f(e)}function Q(e,t,n,r,o,i){let c=new Date(e>>>0,t,n,r,o,i);return f(c)}function ee(e){let t=s[e].buffer;return f(t)}function et(){return j(function(){let e=self.self;return f(e)},arguments)}function en(){return j(function(){let e=window.window;return f(e)},arguments)}function er(){return j(function(){let e=globalThis.globalThis;return f(e)},arguments)}function eo(){return j(function(){let e=n.g.global;return f(e)},arguments)}function ei(e,t,n){let r=new Uint8Array(s[e],t>>>0,n>>>0);return f(r)}function ec(e){let t=new Uint8Array(s[e]);return f(t)}function eu(e,t,n){s[e].set(s[t],n>>>0)}function ea(e){let t=new Uint8Array(e>>>0);return f(t)}function el(e,t,n){let r=s[e].subarray(t>>>0,n>>>0);return f(r)}function es(e,t){throw Error(l(e,t))}function ed(){let e=r.memory;return f(e)}},"./src/components/DebugNav.tsx":function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n("./node_modules/react/jsx-runtime.js");function o(e){return(0,r.jsxs)("div",{className:"flex flex-row bg-stone-500 h-12 w-screen",children:[(0,r.jsx)("div",{className:"py-1.5",children:(0,r.jsx)("button",{type:"button",onClick:()=>e.run(),className:"text-white bg-stone-700 hover:bg-slate-800 focus:ring-1 focus:ring-stone-300 rounded-lg text-sm px-4 py-1.5 mx-2 my-px dark:bg-stone-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800",children:"Run"})}),(0,r.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer m-3",children:[(0,r.jsx)("input",{type:"checkbox",checked:e.debug,onChange:t=>e.setDebug(t.target.checked),className:"sr-only peer"}),(0,r.jsx)("div",{className:"w-9 h-5 bg-stone-200 peer-focus:outline-none peer-focus:ring peer-focus:ring-stone-300 dark:peer-focus:ring-stone-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-stone-600"}),(0,r.jsx)("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Debug"})]})]})}n("./node_modules/react/index.js")},"./src/components/ExpirementalDebugger.tsx":function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.d(t,{Z:function(){return s}});var o=n("./node_modules/react/jsx-runtime.js"),i=n("./node_modules/react/index.js"),c=n("./src/components/SandBox/index.tsx"),u=n("./src/components/DebugNav.tsx"),a=n("./src/boa/experimental/pkg/boa_wasm.js"),l=e([a]);function s(){let[e,t]=i.useState(!1),[n,r]=i.useState("function greet(targetName) {\n    return 'Hello, ' + targetName + '!';\n}\n\ngreet('World')\n"),[l,s]=i.useState(""),[d,f]=i.useState({displayAsDebug:!1,compiled:[],trace:[]}),g=[],_=[],p=new a.Bk;p.set_compiled_output_action(e=>g.push(e)),p.set_trace_output_action(e=>_.push(e));let b=()=>{if(e)try{let e=p.evaluate_with_trace(n);s(e);let t={displayAsDebug:!0,compiled:g.slice(0,g.length),trace:_.slice(0,_.length)};f(t)}catch(e){console.error(e),s("".concat(e))}else try{let e=p.evaluate(n);s(e)}catch(e){console.error(e),s("".concat(e))}};return i.useEffect(()=>{b()},[]),(0,o.jsxs)("div",{className:"flex flex-col h-screen w-screen",children:[(0,o.jsx)(u.Z,{debug:e,setDebug:t,run:b}),(0,o.jsx)(c.Z,{code:n,setCode:e=>{r(()=>e||"")},output:l,asDebug:d.displayAsDebug&&e,compiled:d.compiled,trace:d.trace})]})}a=(l.then?(await l)():l)[0],r()}catch(e){r(e)}})},"./src/components/SandBox/index.tsx":function(e,t,n){"use strict";n.d(t,{Z:function(){return J}});var r,o,i=n("./node_modules/react/jsx-runtime.js"),c=n("./node_modules/react/index.js");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e){return function t(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function g(e){return({}).toString.call(e).includes("Object")}function _(e){return"function"==typeof e}var p=f(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),b={changes:function(e,t){return g(t)||p("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&p("changeField"),t},selector:function(e){_(e)||p("selectorType")},handler:function(e){_(e)||g(e)||p("handlerType"),g(e)&&Object.values(e).some(function(e){return!_(e)})&&p("handlersType")},initial:function(e){e||p("initialIsRequired"),g(e)||p("initialType"),Object.keys(e).length||p("initialContent")}};function h(e,t){return _(t)?t(e.current):t}function m(e,t){return e.current=d(d({},e.current),t),t}function w(e,t,n){return _(t)?t(e.current):Object.keys(n).forEach(function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])}),n}var y={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},v=(r=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=r.length?r.apply(this,o):function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.apply(t,[].concat(o,r))}})(y),x={config:function(e){return e||v("configIsRequired"),({}).toString.call(e).includes("Object")||v("configType"),e.urls?(console.warn(y.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},j=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},O={type:"cancelation",msg:"operation is manually canceled"},k=function(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(O):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n},N=function(e){if(Array.isArray(e))return e}(o=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b.initial(e),b.handler(t);var n={current:e},r=f(w)(n,t),o=f(m)(n),i=f(b.changes)(e),c=f(h)(n);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return b.selector(e),e(n.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(r,o,i,c)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(o,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),E=N[0],M=N[1];function P(e){return document.body.appendChild(e)}function S(e){var t,n,r=E(function(e){return{config:e.config,reject:e.reject}}),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function C(){var e=E(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){D(t),e.resolve(t)},function(t){e.reject(t)})}function D(e){E().monaco||M({monaco:e})}var T=new Promise(function(e,t){return M({resolve:e,reject:t})}),R={config:function(e){var t=x.config(e),n=t.monaco,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["monaco"]);M(function(e){return{config:function e(t,n){return Object.keys(n).forEach(function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))}),a(a({},t),n)}(e.config,r),monaco:n}})},init:function(){var e=E(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(M({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),k(T);if(window.monaco&&window.monaco.editor)return D(window.monaco),e.resolve(window.monaco),k(T);j(P,S)(C)}return k(T)},__getMonacoInstance:function(){return E(function(e){return e.monaco})}},A={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},F={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},I=function({children:e}){return c.createElement("div",{style:F.container},e)},V=(0,c.memo)(function({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperProps:u}){return c.createElement("section",{style:{...A.wrapper,width:e,height:t},...u},!n&&c.createElement(I,null,r),c.createElement("div",{ref:o,style:{...A.fullWidth,...!n&&A.hide},className:i}))}),L=function(e){(0,c.useEffect)(e,[])},U=function(e,t,n=!0){let r=(0,c.useRef)(!0);(0,c.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)};function q(){}function z(e,t,n,r){return e.editor.getModel(B(e,r))||e.editor.createModel(t,n,r?B(e,r):void 0)}function B(e,t){return e.Uri.parse(t)}(0,c.memo)(function({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:u,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:s="light",loading:d="Loading...",options:f={},height:g="100%",width:_="100%",className:p,wrapperProps:b={},beforeMount:h=q,onMount:m=q}){let[w,y]=(0,c.useState)(!1),[v,x]=(0,c.useState)(!0),j=(0,c.useRef)(null),O=(0,c.useRef)(null),k=(0,c.useRef)(null),N=(0,c.useRef)(m),E=(0,c.useRef)(h),M=(0,c.useRef)(!1);L(()=>{let e=R.init();return e.then(e=>(O.current=e)&&x(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return j.current?(t=j.current?.getModel(),void(a||t?.original?.dispose(),l||t?.modified?.dispose(),j.current?.dispose())):e.cancel()}}),U(()=>{let e=j.current.getModifiedEditor();e.getOption(O.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],w),U(()=>{j.current?.getModel()?.original.setValue(e||"")},[e],w),U(()=>{let{original:e,modified:t}=j.current.getModel();O.current.editor.setModelLanguage(e,r||n||"text"),O.current.editor.setModelLanguage(t,o||n||"text")},[n,r,o],w),U(()=>{O.current?.editor.setTheme(s)},[s],w),U(()=>{j.current?.updateOptions(f)},[f],w);let P=(0,c.useCallback)(()=>{if(!O.current)return;E.current(O.current);let c=z(O.current,e||"",r||n||"text",i||""),a=z(O.current,t||"",o||n||"text",u||"");j.current?.setModel({original:c,modified:a})},[n,t,o,e,r,i,u]),S=(0,c.useCallback)(()=>{!M.current&&k.current&&(j.current=O.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...f}),P(),O.current?.editor.setTheme(s),y(!0),M.current=!0)},[f,s,P]);return(0,c.useEffect)(()=>{w&&N.current(j.current,O.current)},[w]),(0,c.useEffect)(()=>{v||w||S()},[v,w,S]),U(()=>{if(j.current&&O.current){let t=j.current.getOriginalEditor(),o=z(O.current,e||"",r||n||"text",i||"");o!==t.getModel()&&t.setModel(o)}},[i],w),U(()=>{if(j.current&&O.current){let e=j.current.getModifiedEditor(),r=z(O.current,t||"",o||n||"text",u||"");r!==e.getModel()&&e.setModel(r)}},[u],w),c.createElement(V,{width:_,height:g,isEditorReady:w,loading:d,_ref:k,className:p,wrapperProps:b})});var X=function(e){let t=(0,c.useRef)();return(0,c.useEffect)(()=>{t.current=e},[e]),t.current},Z=new Map,H=(0,c.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:u="light",line:a,loading:l="Loading...",options:s={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:g=!1,width:_="100%",height:p="100%",className:b,wrapperProps:h={},beforeMount:m=q,onMount:w=q,onChange:y,onValidate:v=q}){let[x,j]=(0,c.useState)(!1),[O,k]=(0,c.useState)(!0),N=(0,c.useRef)(null),E=(0,c.useRef)(null),M=(0,c.useRef)(null),P=(0,c.useRef)(w),S=(0,c.useRef)(m),C=(0,c.useRef)(),D=(0,c.useRef)(r),T=X(i),A=(0,c.useRef)(!1),F=(0,c.useRef)(!1);L(()=>{let e=R.init();return e.then(e=>(N.current=e)&&k(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>E.current?void(C.current?.dispose(),g?f&&Z.set(i,E.current.saveViewState()):E.current.getModel()?.dispose(),E.current.dispose()):e.cancel()}),U(()=>{let c=z(N.current,e||r||"",t||o||"",i||n||"");c!==E.current?.getModel()&&(f&&Z.set(T,E.current?.saveViewState()),E.current?.setModel(c),f&&E.current?.restoreViewState(Z.get(i)))},[i],x),U(()=>{E.current?.updateOptions(s)},[s],x),U(()=>{E.current&&void 0!==r&&(E.current.getOption(N.current.editor.EditorOption.readOnly)?E.current.setValue(r):r===E.current.getValue()||(F.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),F.current=!1))},[r],x),U(()=>{let e=E.current?.getModel();e&&o&&N.current?.editor.setModelLanguage(e,o)},[o],x),U(()=>{void 0!==a&&E.current?.revealLine(a)},[a],x),U(()=>{N.current?.editor.setTheme(u)},[u],x);let I=(0,c.useCallback)(()=>{if(!(!M.current||!N.current)&&!A.current){S.current(N.current);let c=i||n,a=z(N.current,r||e||"",t||o||"",c||"");E.current=N.current?.editor.create(M.current,{model:a,automaticLayout:!0,...s},d),f&&E.current.restoreViewState(Z.get(c)),N.current.editor.setTheme(u),j(!0),A.current=!0}},[e,t,n,r,o,i,s,d,f,u]);return(0,c.useEffect)(()=>{x&&P.current(E.current,N.current)},[x]),(0,c.useEffect)(()=>{O||x||I()},[O,x,I]),D.current=r,(0,c.useEffect)(()=>{x&&y&&(C.current?.dispose(),C.current=E.current?.onDidChangeModelContent(e=>{F.current||y(E.current.getValue(),e)}))},[x,y]),(0,c.useEffect)(()=>{if(x){let e=N.current.editor.onDidChangeMarkers(e=>{let t=E.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=N.current.editor.getModelMarkers({resource:t});v?.(e)}});return()=>{e?.dispose()}}return()=>{}},[x,v]),c.createElement(V,{width:_,height:p,isEditorReady:x,loading:l,_ref:M,className:b,wrapperProps:h})});function W(e){return(0,i.jsxs)("div",{className:"bg-stone-200 h-[50vh] lg:h-[calc(100vh-3rem)] w-screen lg:w-[40vw] text-slate-800 p-4",children:[(0,i.jsx)("h1",{children:"Output"}),"> ".concat(e.output)]})}function $(e){return(0,i.jsxs)("div",{className:"flex h-96 lg:h-[calc(100vh-3rem)] w-screen lg:w-[35vw] flex-col bg-stone-200 text-slate-800 p-4",children:[(0,i.jsxs)("div",{className:"h-24",children:[(0,i.jsx)("h1",{children:"Output"}),"> ".concat(e.output)]}),(0,i.jsx)("div",{className:"border flex flex-col h-5/6 lg:h-[calc(100vh-7rem)] overflow-auto",children:e.trace.map((e,t)=>{if(e.includes("Call Frame")){let n=/Call Frame -- (.*)(?= --)/gi.exec(e);return(0,i.jsx)("div",{className:"h-12 w-full py-3 border border-slate-900 text-center",children:null==n?void 0:n[0]},"frame-row"+t)}return(0,i.jsx)("div",{className:"flex flex-row border border-slate-900",children:e.replace(/\n/gi,"").split(/\s\s+/gi).map((e,n,r)=>0===n?(0,i.jsx)("div",{className:"h-8 w-1/12 p-1 border-r border-slate-900 text-center",children:e},"time-"+t+"-col-"+n):1===n?(0,i.jsx)("div",{className:"h-8 w-3/12 p-1 border-r border-slate-900 ",children:e},"opcode"+t+"-col-"+n):2===n&&n!==r.length-1?(0,i.jsx)("div",{className:"h-8 w-1/3 p-1 border-r border-slate-900",children:e},"operand-"+t+"-col-"+n):2===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"h-8 w-1/3 py-1 border-r border-slate-900"},"spacer-"+t+"-col-"+n),(0,i.jsx)("div",{className:"h-8 w-1/3 p-1 whitespace-nowrap overflow-hidden",children:e},"stack-"+t+"-col-"+(n+1))]}):(0,i.jsx)("div",{className:"h-8 w-1/3 p-1 whitespace-nowrap overflow-hidden",children:e},"stack"+t+"-col-"+n))},"values-row-"+t)})})]})}function Y(e){let[t,n]=c.useState([]),[r,o]=c.useState(0);return c.useEffect(()=>{let t=[],r=/Compiled Output: '(.*)'/;e.compiled.forEach((e,n)=>{let o=r.exec(e);t.push(null!==o?o[0]:"function-"+n)}),n(t)},[e.compiled]),(0,i.jsxs)("div",{className:"bg-stone-400 h-96 w-screen lg:h-[calc(100vh-3rem)] lg:w-[35vw]",children:[(0,i.jsx)(G,{focused:r,setFocus:e=>{o(e)},idents:t}),(0,i.jsx)("div",{className:"h-80 w-screen lg:h-[calc(100vh-6rem)] lg:w-[35vw]",children:(0,i.jsx)(H,{theme:"vs-dark",options:{minimap:{enabled:!1},domReadOnly:!0},value:e.compiled[r].replace(RegExp("^\n"),"")})})]})}function G(e){let[t,n]=c.useState("hidden"),r=t=>{n("hidden"),e.setFocus(t)};return(0,i.jsx)("div",{className:"h-12 w-full p-1",children:(0,i.jsxs)("div",{className:"relative inline-block text-left",children:[(0,i.jsx)("div",{onMouseEnter:()=>n("block"),children:(0,i.jsxs)("button",{type:"button",className:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",id:"menu-button","aria-expanded":"true","aria-haspopup":"true",children:[e.idents[e.focused],(0,i.jsx)("svg",{className:"-mr-1 h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})]})}),(0,i.jsx)("div",{className:"".concat(t," absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",onMouseLeave:()=>n("hidden"),children:(0,i.jsx)("div",{className:"py-1",role:"none",children:e.idents.map((e,t)=>(0,i.jsx)("div",{className:"hover:cursor-pointer hover:bg-gray-200 text-gray-700 block px-4 py-2 text-sm",onClick:e=>r(t),children:e},"dropdown-"+t))})})]})})}var J=function(e){return(0,i.jsxs)("div",{id:"SandBox",className:"flex flex-col lg:flex-row h-min-content lg:h-screen w-screen",children:[(0,i.jsx)("div",{className:"h-96 lg:h-[calc(100vh-3rem)] w-screen ".concat(e.asDebug?"lg:w-[30vw]":"lg:w-[60vw]"),children:(0,i.jsx)(H,{theme:"vs-dark",language:"javascript",options:{minimap:{enabled:!1},automaticLayout:!0},value:e.code,onChange:t=>e.setCode(t)})}),e.asDebug?(0,i.jsx)(Y,{compiled:e.compiled}):null,e.asDebug?(0,i.jsx)($,{output:e.output,trace:e.trace}):(0,i.jsx)(W,{output:e.output})]})}},"./src/pages/index.tsx":function(e,t,n){"use strict";n.a(e,async function(e,r){try{n.r(t),n.d(t,{default:function(){return d}});var o=n("./node_modules/react/jsx-runtime.js"),i=n('./node_modules/next/font/google/target.css?{"path":"src/pages/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}'),c=n.n(i),u=n("./node_modules/next/head.js"),a=n.n(u),l=n("./src/components/ExpirementalDebugger.tsx"),s=e([l]);function d(){return(0,o.jsxs)("main",{className:"h-screen w-screen flex-col items-center ".concat(c().className),children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)(a(),{children:(0,o.jsx)("title",{children:"Debugger POC"})})]})}l=(s.then?(await s)():s)[0],r()}catch(e){r(e)}})},'./node_modules/next/font/google/target.css?{"path":"src/pages/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}':function(e){e.exports={style:{fontFamily:"'__Inter_00398b', '__Inter_Fallback_00398b'",fontStyle:"normal"},className:"__className_00398b"}},"./node_modules/next/head.js":function(e,t,n){e.exports=n("./node_modules/next/dist/shared/lib/head.js")},"./src/boa/experimental/pkg/boa_wasm_bg.wasm":function(e,t,n){"use strict";var r=n("./src/boa/experimental/pkg/boa_wasm_bg.js");e.exports=n.v(t,e.id,"bd9d567883d8bb7b",{"./boa_wasm_bg.js":{__wbindgen_string_new:r.h4,__wbindgen_object_drop_ref:r.ug,__wbindgen_object_clone_ref:r.m_,__wbg_new_abda76e883ba8a5f:r.a2,__wbg_stack_658279fe44541cf6:r.KM,__wbg_error_f851667af71bcfc6:r.iX,__wbg_getRandomValues_7e42b4fb8779dc6d:r.vD,__wbg_randomFillSync_b70ccbdf4926a99d:r.eC,__wbg_crypto_d05b68a3572bb8ca:r.oO,__wbindgen_is_object:r.Wl,__wbg_process_b02b3570280d0366:r.N5,__wbg_versions_c1cb42213cedf0f5:r.AC,__wbg_node_43b1089f407e4ec2:r.zw,__wbindgen_is_string:r.eY,__wbg_msCrypto_10fc94afee92bd76:r.JN,__wbg_require_9a7e0f667ead4995:r.oM,__wbindgen_is_function:r.o$,__wbg_performance_3f3012faa4463882:r.Pl,__wbindgen_is_undefined:r.XP,__wbg_now_2fd65358804c9485:r.sq,__wbindgen_number_new:r.pT,__wbg_newnoargs_c62ea9419c21fbac:r.eE,__wbg_call_90c26b09837aba1c:r.Xn,__wbg_call_5da1969d7cd31ccd:r.gD,__wbg_getTime_9272be78826033e1:r.BN,__wbg_getTimezoneOffset_e742a5098e2c04d3:r.mr,__wbg_new_d77fabdc03b9edd6:r.Hh,__wbg_new0_622c21a64f3d83ea:r.cP,__wbg_newwithyearmonthdayhrminsec_8288090e39a68ed6:r.UF,__wbg_buffer_a448f833075b71ba:r.Fu,__wbg_self_f0e34d89f33b99fd:r.Un,__wbg_window_d3b084224f4774d7:r.U4,__wbg_globalThis_9caa27ff917c6860:r._e,__wbg_global_35dfdd59a4da3e74:r.QC,__wbg_newwithbyteoffsetandlength_d0482f893617af71:r.EV,__wbg_new_8f67e318f15d7254:r.$d,__wbg_set_2357bf09366ee480:r.wV,__wbg_newwithlength_6c2df9e2f3028c43:r.bN,__wbg_subarray_2e940e41c0f5a1d9:r.G7,__wbindgen_throw:r.Or,__wbindgen_memory:r.oH}})}},function(e){e.O(0,[774,888,179],function(){return e(e.s="./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2Findex.tsx&page=%2F!")}),_N_E=e.O()}]);