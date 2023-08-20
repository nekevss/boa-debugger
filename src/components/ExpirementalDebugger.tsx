import React from "react";
import SandBox from "./SandBox";
import DebugNav from "./DebugNav";
import { BoaJs } from "@/boa/experimental/pkg/boa_wasm";

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

    const boa = new BoaJs();
    boa.set_compiled_output_action((msg:string)=>compiledOutput.push(msg));
    boa.set_trace_output_action((msg: string)=>traceOutput.push(msg));

    const handleEditorUpdate = (value: string | undefined) => {
        setCode(()=>value ? value : "");
    }

    const runEvaluate = () => {
        if (debugEval) {
            try {
                const result = boa.evaluate_with_trace(code);
                setOutput(result)
                const debugValue = {
                    displayAsDebug: true,
                    compiled: compiledOutput.slice(0, compiledOutput.length),
                    trace: traceOutput.slice(0, traceOutput.length)
                }
                setDebugState(debugValue);
            } catch (e) {
                console.error(e);
                setOutput(`${e}`)
            }
        } else {
            try {
                const result = boa.evaluate(code);
                setOutput(result)
            } catch(e) {
                console.error(e);
                setOutput(`${e}`)
            }
        }
    }

    React.useEffect(()=> {
        runEvaluate()
    },[])

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