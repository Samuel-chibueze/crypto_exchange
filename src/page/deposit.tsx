import { useState } from "react"

export default function Deposit (){
    const [copy, setCopy] = useState('')
    const walletAddress = `ghdfgdkkjdkmdjhvcrcdhvhdvghdhddh`

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(walletAddress).then(()=>{
            setCopy('copied!');
            setTimeout(() =>setCopy(''), 2000);
        }).catch(err =>{
            setCopy('failed to copy!');
            console.error('Failed to copy text: ', err);
        });
    }

    
    return<div className="my-10">
        <p className="my-10">Select the asset you want to deposit</p>

        <button className="bg-slate-400 p-2 rounded-lg mx-2">Back</button>
        <button className="bg-slate-400 p-2 rounded-lg mx-2">Usdt</button>
        <button className="bg-slate-400 p-2 rounded-lg mx-2">Btc</button>

       <div className="my-10"> 
        <div><p className="bg-slate-200 text-black w-full rounded-sm" >{walletAddress}</p></div>
        <button
        className="bg-slate-400 p-2 rounded-lg"
        onClick={copyToClipboard}
        
      >
        Copy
      </button>
      {copy && <span>{copy}</span>}

      </div>
    </div>
}