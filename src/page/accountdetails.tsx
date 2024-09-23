export default function AddDetails () { 
    return <div>
        <form >
           

           <div>
              <div className="my-2"><label>Bank Name</label></div>
            <select className="text-black w-full rounded-lg border border-indigo-300 p-1">
              <option>Select a Bank</option>
              <option>Access Bank</option>
              <option>Fidelity Bank</option>
              <option>Gtb</option>
              <option>Signature Bank</option>
              <option>UBA</option>
            </select>
            </div>

            <div>
             <div className="my-2"><label>Account Name</label></div>
            <input type="text" placeholder="Account Name" className="w-full rounded-lg border border-indigo-300 p-1"/>
           </div>

          
            
            <div>
            <div className="my-2"><label> Account Number</label></div>
            <input type="number" placeholder=" 0012345678" className="w-full rounded-lg border border-indigo-300 p-1"/>
            </div>
           <div className="text-center my-5">     
            <button className="bg-blue-600 rounded-lg text-white px-3">Add</button>
           </div>
          </form>
    </div>;
}