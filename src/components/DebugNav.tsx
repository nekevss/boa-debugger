import React from "react";

type NavProps = {
    debug: boolean,
    setDebug: (arg: boolean) => void,
    run: () => void,
}

export default function DebugNav(props: NavProps) {
    return (
        <div className={"flex flex-row bg-stone-500 h-12 w-screen"}>
            <div className="py-1.5">
                <button type="button" onClick={()=>props.run()} className="text-white bg-stone-700 hover:bg-slate-800 focus:ring-1 focus:ring-stone-300 rounded-lg text-sm px-4 py-1.5 mx-2 my-px dark:bg-stone-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800">Run</button>
            </div>
            <label className="relative inline-flex items-center cursor-pointer m-3">
                <input type="checkbox" checked={props.debug} onChange={(e)=>props.setDebug(e.target.checked)} className="sr-only peer" />
                <div className="w-9 h-5 bg-stone-200 peer-focus:outline-none peer-focus:ring peer-focus:ring-stone-300 dark:peer-focus:ring-stone-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-stone-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Debug</span>
            </label>
        </div>
    )
}