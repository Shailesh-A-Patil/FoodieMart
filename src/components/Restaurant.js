import { RES_IMG } from "../utility/constants"

const Restaurant = (props) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    props.data
  return (
    <div className="res-container">
      <img src={RES_IMG + cloudinaryImageId}></img>
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo / 100} For Two</p>
      <p>{avgRating}</p>
    </div>
  )
}

export default Restaurant