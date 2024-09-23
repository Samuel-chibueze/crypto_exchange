import { useState } from "react"

export default function Rate (){
    

    
    return<div className="my-10">
        <p className="my-10">Rate</p>

        <div>
             <div className="my-2"><label>Usdt</label></div>
             <div className="relative">
            <input type="text" placeholder="$1" className="w-full rounded-lg border border-indigo-300 p-1"/>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm">Max</span>
            </div>

        </div>

        <div>
             <div className="my-2"><label>Naira</label></div>
             <div className="relative">
            <input type="text" placeholder="1600" className="w-full rounded-lg border border-indigo-300 p-1"/>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm">Max</span>
            </div>

        </div>
           <div>=0.00</div>

      
    </div>
}