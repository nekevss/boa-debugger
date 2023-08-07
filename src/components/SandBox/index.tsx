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
        <div className={"flex flex-row h-screen w-screen"}>
            <Editor
                theme="vs-dark"
                language="javascript"
                options={{ minimap: { enabled: false } }}
                value={props.code}
                height={"calc(100vh - 3rem"}
                width={props.asDebug ? "30vw" : "60vw"}
                onChange={(value)=>props.setCode(value)}
            />
            {props.asDebug ? <CompiledDisplay compiled={props.compiled} /> : null}
            {/*TODO: match output color themes to editor themes */}
            { props.asDebug
            ? <DebugOutput output={props.output} trace={props.trace} />
            :<NormalOutput output={props.output} />}
        </div>
    );
}

export default SandBox;
