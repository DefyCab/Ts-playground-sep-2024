import { useState } from "react"

const shoppingList: Items[] = [
  {
    id: 1,
    item: "Milk",
  },
  {
    id: 2,
    item: "Goat cheese",
  },
]

type Items = {
  id: number
  item: string
}

function App() {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => setIsHidden(!isHidden)

  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}
export default App
