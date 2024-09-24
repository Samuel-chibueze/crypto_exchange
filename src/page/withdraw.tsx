import { useState } from "react"

export default function withdrawal (){
    

    
    return<div className="my-10">
        <p className="my-10">Select the asset you want to withdraw</p>

        <button className="bg-slate-400 p-2 rounded-lg mx-2">Back</button>
        <button className="bg-slate-400 p-2 rounded-lg mx-2">Usdt</button>
        <button className="bg-slate-400 p-2 rounded-lg mx-2">Btc</button>

        <div>
             <div className="my-2"><label>Amount</label></div>
             <div className="relative">
            <input type="text" placeholder="Btc Amount" className="w-full rounded-lg border border-indigo-300 p-1"/>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm">Max</span>
            </div>

        </div>
           <div>=0.00</div>

      
    </div>
}