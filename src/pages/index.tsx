import Head from "next/head";
import { Inter } from 'next/font/google'
import Debugger from '@/components/Debugger'

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
