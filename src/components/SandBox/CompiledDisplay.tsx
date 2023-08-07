import React from "react";
import Editor from "@monaco-editor/react";

type CompiledDisplayProps = {
    compiled: string[]
}

export default function CompiledDisplay(props: CompiledDisplayProps) {
    const [identifiers, setIdentifiers] = React.useState<string[]>([])
    const [focused, setFocused] = React.useState(0);

    React.useEffect(()=>{
        const newIds: string[] = [];
        const ident = /Compiled Output: '(.*)'/

        props.compiled.forEach((value, index)=>{
            const matches = ident.exec(value);
            newIds.push(matches !== null ? matches[0] : "function-" + index)
        })

        setIdentifiers(newIds)
    }, [props.compiled])

    return(
        <div className="bg-stone-400" style={{ height: "calc(100vh-3rem)", width: "35vw"}}>
            <FunctionSelector focused={focused} setFocus={(s)=>{setFocused(s)}} idents={identifiers} />
            <Editor
                theme="vs-dark"
                options={{minimap: {enabled:false}, domReadOnly:true }}
                value={props.compiled[focused].replace(new RegExp("^\n"), "")}
                height={"calc(100vh - 6rem)"}
                width={"35vw"}
                />
        </div>
    )
}

type SelectorProps = {
    idents: string[],
    focused: number,
    setFocus: (arg: number) => void,
}

function FunctionSelector(props: SelectorProps) {
    const [display, setDisplay] = React.useState("hidden")

    const handleSelection = (index:number) => {
        setDisplay("hidden")
        props.setFocus(index)
    }

    return (
        <div className="h-12 w-full p-1">
            <div className="relative inline-block text-left">
                <div onMouseEnter={()=>setDisplay("block")}>
                    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {props.idents[props.focused]}
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className={`${display} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" onMouseLeave={()=>setDisplay("hidden")}>
                    <div className="py-1" role="none">
                        {props.idents.map((value, index)=>{
                            return <div
                                key={"dropdown-"+index}
                                className="hover:cursor-pointer hover:bg-gray-200 text-gray-700 block px-4 py-2 text-sm"
                                onClick={(e)=>handleSelection(index)}
                                >{value}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}