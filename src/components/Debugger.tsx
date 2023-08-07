import React from "react";
import SandBox from "./SandBox";
import DebugNav from "./DebugNav";
import { evaluate, evaluate_with_debug_hooks } from "boa_wasm";

const initialCode = `function greet(targetName) {
    return 'Hello, ' + targetName + '!';
}

greet('World')
`;

type DebugState = {
    displayAsDebug: boolean,
    compiled: string[],
    trace:string[]
}

export default function Debugger() {
    const [debugEval, setDebugEval] = React.useState<boolean>(false);
    const [code, setCode] = React.useState<string>(initialCode);
    const [output, setOutput] = React.useState<string>("");
    const [debugState, setDebugState] = React.useState<DebugState>({
        displayAsDebug: false,
        compiled: [],
        trace: []
    });

    const compiledOutput: string[] = [];
    const traceOutput: string[] = [];

    const compiledOutputHook = (msg: string) => {
        compiledOutput.push(msg);
    }

    const traceOutputHook = (msg: string) => {
        traceOutput.push(msg)
    }

    const handleEditorUpdate = (value: string | undefined) => {
        setCode(()=>value ? value : "");
    }

    const runEvaluate = () => {
        if (debugEval) {
            const result = evaluate_with_debug_hooks(code, compiledOutputHook, traceOutputHook)
            setOutput(result)
            const debugValue = {
                displayAsDebug: true,
                compiled: compiledOutput.slice(0, compiledOutput.length),
                trace: traceOutput.slice(0, traceOutput.length)
            }
            setDebugState(debugValue);
        } else {
            const result = evaluate(code);
            setOutput(result)
        }
    }

    React.useEffect(()=> {
        runEvaluate()
    })

    return (
        <div className="flex flex-col h-screen w-screen">
            <DebugNav debug={debugEval} setDebug={setDebugEval} run={runEvaluate} />
            <SandBox
                code={code}
                setCode={handleEditorUpdate}
                output={output}
                asDebug={debugState.displayAsDebug && debugEval}
                compiled={debugState.compiled}
                trace={debugState.trace}
            />
        </div>
    );
}