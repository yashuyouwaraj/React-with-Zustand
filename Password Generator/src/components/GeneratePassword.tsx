import usePasswordStore from "../store/store"

const GeneratePassword = () => {
  const {
    length,setLength,includeNumbers,toggleNumbers,includeSymbols,toggleSymbols,includeUppercase,toggleUppercase,includeLowercase,toggleLowercase,generatedPassword, generatePassword
  } = usePasswordStore()

  const handleGeneratePassword= ()=>generatePassword()
  return (
    <div className="p-8 w-[40rem] mx-auto bg-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">Password Length</label>
          <input type="number" id="length" value={length} onChange={e=>setLength(+e.target.value)} min={4} max={64} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={includeNumbers} onChange={toggleNumbers} />
          <label className="ml-2 text-sm">Inclue Numbers</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={includeSymbols} onChange={toggleSymbols} />
          <label className="ml-2 text-sm">Inclue Symbols</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={includeUppercase} onChange={toggleUppercase} />
          <label className="ml-2 text-sm">Inclue Uppercase</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={includeLowercase} onChange={toggleLowercase} />
          <label className="ml-2 text-sm">Inclue Lowercase</label>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={handleGeneratePassword}>
          Generate Password
        </button>
        {generatedPassword && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg ">
            <p className="text-lg break-all">
              {generatedPassword}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GeneratePassword