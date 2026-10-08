"use client"
export default function Button(){
    return(
       <button className="bg-blue-200 cursor-pointer p-2 rounded-md text-black m-2 "
             onClick={()=>{alert("button clicked")

            }}>Click me </button>
    )
}