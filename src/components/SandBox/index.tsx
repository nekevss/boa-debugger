import React from "react";
import { Editor } from "@monaco-editor/react";
import NormalOutput from "./NormalOutput";
import DebugOutput from "./DebugOutput";
import CompiledDisplay from "./CompiledDisplay";

type SandBoxProps = {
    code: string,
    setCode: (arg: string | undefined) => void,
    output: string,
    asDebug: boolean,
    compiled: string[],
    trace: string[],
}

function SandBox(props: SandBoxProps) {

    return (
        <div id="SandBox" className={"flex flex-col lg:flex-row h-min-content lg:h-screen w-screen"}>
            <div className={`h-96 lg:h-[calc(100vh-3rem)] w-screen lg:w-[${props.asDebug ? "30vw" : "60vw"}]`}>
                <Editor
                    theme="vs-dark"
                    language="javascript"
                    options={{ minimap: { enabled: false } }}
                    value={props.code}
                    onChange={(value)=>props.setCode(value)}
                />
            </div>
            {props.asDebug ? <CompiledDisplay compiled={props.compiled} /> : null}
            {/*TODO: match output color themes to editor themes */}
            { props.asDebug
            ? <DebugOutput output={props.output} trace={props.trace} />
            :<NormalOutput output={props.output} />}
        </div>
    );
}

export default SandBox;
