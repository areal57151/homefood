
function MyRecipesComponents ({label, image, cuisineType, mealType,ingredientLines, calories,totalTime }){
   return(<div>
    <div className="container">
        <h2>{label}</h2>
    </div>  
    <div className="container">
      <img src={image} alt="dish"/> 
    <div className="ingre">
      <p> Kitchen : {cuisineType}</p>
      <p>{mealType}</p>
      <ul>
        {ingredientLines.map((ingredient, index) =>(
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{calories.toFixed()} calories</p>
      <p>Cooking time : {totalTime} minutes </p>
   </div>
   </div>

   </div> )

}
export default MyRecipesComponents;