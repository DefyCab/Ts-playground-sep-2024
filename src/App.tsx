import { useState } from "react"

function App() {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => setIsHidden(!isHidden)

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-teal-500 text-white rounded py-2 px-4"
      >
        Toggle
      </button>
      <h1
        className={isHidden ? "hidden" : ""}
        style={{ color: "red", paddingTop: "10px" }}
      >
        SECRET MESSAGE!
      </h1>
    </>
  )
}
export default App
