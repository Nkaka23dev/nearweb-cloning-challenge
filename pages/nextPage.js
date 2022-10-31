import Link from "next/link";

export default function Wallet () {
    return (
        <>
         <div className="flex h-screen bg-gray-200">
         <div className="m-auto">
        <Link href="/">
        <h1 className="text-2xl text-gray-700 cursor-pointer">Page2 .... Click to go back to home page</h1>
        </Link>
          </div> 
        </div> 
        </>
      )
    }
    