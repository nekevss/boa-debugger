
type OutputProps = {
    output: string
}

export default function NormalOutput(props: OutputProps) {
    return (
        <div className={"bg-stone-200 h-[50vh] lg:h-[calc(100vh-3rem)] w-screen lg:w-[40vw] text-slate-800 p-4"}>
            <h1>Output</h1>
            {`> ${props.output}`}
        </div>
    )
}
