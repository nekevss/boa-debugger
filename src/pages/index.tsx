import Head from "next/head";
import { Inter } from 'next/font/google'

// Keeping the below imports here to comment out for toggling in dev env only.
// import Debugger from '@/components/Debugger'
import Debugger from "@/components/ExpirementalDebugger"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`h-screen w-screen flex-col items-center ${inter.className}`}>
      <Debugger />
      <Head>
        <title>{"Debugger POC"}</title>
      </Head>
    </main>
  )
}
