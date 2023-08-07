import React from "react";

type DebugOutputProps = {
    output: string
    trace: string[]
}

export default function DebugOutput(props: DebugOutputProps) {

    return (
        <div className={"flex flex-col bg-stone-200 text-slate-800 p-4"} style={{height: "calc(100vh - 3rem)", width: "35vw"}}>
            <div className="h-1/6">
                <h1>Output</h1>
                {`> ${props.output}`}
            </div>
            {/* Below is not really ideal. Would be better served by better mapping from Boa's side though */}
            <div className="border flex flex-col h-5/6 overflow-auto">
                {props.trace.map((value, idx)=>{
                    if (value.includes("Call Frame")) {
                        const callFrameName = /Call Frame -- (.*)(?= --)/gi;
                        const results = callFrameName.exec(value);
                        return <div key={"row"+idx} className="h-12 w-full py-3 border border-slate-900 text-center">{results?.[0]}</div>
                    }

                    const newLine = /\n/gi;
                    const spacer = /\s\s+/gi;
                    return <div key={"row-"+idx} className="flex flex-row border border-slate-900">
                        {value.replace(newLine, "").split(spacer).map((word, index, arr)=>{
                            if (index === 0) {
                                return <div key={"cell-"+ idx + "-" + index} className="h-8 w-1/12 p-1 border-r border-slate-900 text-center">{word}</div>
                            } else if (index === 1) {
                                return <div key={"cell-"+ idx + "-" + index} className="h-8 w-3/12 p-1 border-r border-slate-900 ">{word}</div>
                            } else if (index === 2 && index !== arr.length - 1) {
                                return <div key={idx+"col"+index} className="h-8 w-1/3 p-1 border-r border-slate-900">{word}</div>
                            } else if (index === 2) {
                                return <>
                                    <div key={idx+"col"+index} className="h-8 w-1/3 py-1 border-r border-slate-900"></div>
                                    <div key={idx+"col"+index+1} className="h-8 w-1/3 p-1 whitespace-nowrap overflow-hidden">{word}</div>
                                </>
                            } else {
                                return <div key={idx+"col"+index} className="h-8 w-1/3 p-1 whitespace-nowrap overflow-hidden">{word}</div>
                            }
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}
