import Restaurant from "./Restaurant"
import restaurantData from "../utility/data"
import { useState } from "react"

function filterData(input, data) {
 return data.filter((d) => d.name.includes(input))
}

const Body = () => {
  const [resData, setResData] = useState(restaurantData);
  const [searchInput, setSearchInput] = useState();

  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
        <button onClick={() =>{
          const res = filterData(searchInput, restaurantData);
          setResData(res);
        } }>Search</button>
        {
        /* 
        Understanding useStatehook with below example
        <button
          onClick={() => {
            filterData = resData.filter((e) => e.avgRating > 4)
            setResData(filterData)
          }}
        >
          Top Rated
        </button> */}
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