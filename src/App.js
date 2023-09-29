import { useEffect, useState } from "react";
import video from './video.mp4';
import './App.css';
import MyRecipesComponents from './MyRecipesComponents';

 function App() {

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("tomato");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=8e873112&app_key=8d4b3c039f8927015245116b9f1a788e`);
      const data = await response.json();
      setMyRecipes(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) =>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }
    return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <marquee>
          <h1> Pick the best recipe and make the most delicious dish ...</h1>
        </marquee>
      </div>
      <div className="container">
        <form onSubmit={finalSearch}>
          <input className="search" onChange={myRecipeSearch} value={mySearch}/>
          <button onClick={finalSearch}> enter </button>
        </form>
      </div>
      {myRecipes.map((element,index) => (
        <MyRecipesComponents key={index}
        label={element.recipe.label}
        image={element.recipe.image} 
        cuisineType={element.recipe.cuisineType}
        mealType={element.recipe.mealType}
        ingredientLines={element.recipe.ingredientLines}
        calories={element.recipe.calories}
        totalTime={element.recipe.totalTime}/>
      ))}

    </div>
  );

}
export default App;