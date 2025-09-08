export default function Tableheadpanel(props){
  const {setglobalfilter}=props;
    return(
        <div className="items-center justify-between px-6 py-4 space-y-2 lg:flex lg:space-y-0">
            <div>
              <h2 className="mx-1 text-xl font-semibold text-gray-800 lg:mx-0">
               Online Registration Forms
              </h2>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                 <input type="input" placeholder="Search..." className="px-4 py-2 border outline-none rounded-xl" onChange={(e)=>setglobalfilter(e.target.value)} />
             
              </div>
            </div>
          </div>
            )
        }