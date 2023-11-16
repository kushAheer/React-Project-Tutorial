import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"



function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordCopy = useRef()

  const passWordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*(){}[]"

    for (let index = 1; index <= length; index++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])
  useEffect(()=>{

    passWordGenerator()
  },[length,numberAllowed,characterAllowed,passWordGenerator])


  const copyClipBoard = useCallback(()=>{
    
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-sky-500 bg-gray-700">
        <h1 className=" text-center my-3 text-white">Password Generator</h1>
        <div>
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0" ref={passwordCopy} onClick={copyClipBoard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" className="cursor-pointer" min={0} max={15} value={length} onChange={(event) => { setLength(event.target.value) }} />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"  onChange={() => { setNumberAllowed((prev) => (!prev)) }} />
            <label>Numbers : {numberAllowed}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"  onChange={() => { setcharacterAllowed((prev) => (!prev)) }} defaultChecked={characterAllowed} />
            <label>Characters : {numberAllowed}</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
