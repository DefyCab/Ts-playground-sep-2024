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
  const [list, setList] = useState(shoppingList)

  const handleClick = () => setIsHidden(!isHidden)

  return (
    <>
      <div className="container">
        <button
          onClick={handleClick}
          className="bg-teal-500 text-white rounded py-2 px-4"
        >
          Show shopping list
        </button>
        <ul
          className={isHidden ? "hidden" : ""}
          style={{ paddingTop: "20px" }}
        >
          {list.map((item) => (
            <li className="text-2xl text-slate-300"
            key={item.id}>{item.item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default App
