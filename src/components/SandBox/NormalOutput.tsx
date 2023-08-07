
type OutputProps = {
    output: string
}

export default function NormalOutput(props: OutputProps) {
    return (
        <div className={"bg-stone-200 text-slate-800 p-4"} style={{height: "calc(100vh - 3rem)", width: "40vw"}}>
            <h1>Output</h1>
            {`> ${props.output}`}
        </div>
    )
}
