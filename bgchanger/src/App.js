
import { useState } from 'react';


function App() {
  
  const [color , setColor] = useState("skyblue");

  return (
    <div className="w-full h-screen" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full bg-red-500 text-white shadow-lg'>RED</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full bg-blue-500 text-white shadow-lg'>BLUE</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-lg'>GREEN</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full bg-yellow-500 text-white shadow-lg'>YELLOW</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg'>BLACK</button>
        </div>
      </div>
    </div>

  );
}

export default App;
