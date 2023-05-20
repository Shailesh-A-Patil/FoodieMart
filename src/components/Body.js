import Restaurant from "./Restaurant"
import restaurantData from "../utility/data"
import { useState } from "react"

const Body = () => {
  const [resData, setResData] = useState(restaurantData)

  return (
    <div>
      <div>
        <button
          onClick={() => {
            filterData = resData.filter((e) => e.avgRating > 4)
            setResData(filterData)
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-list">
        {resData.map((data) => (
          <Restaurant key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Body