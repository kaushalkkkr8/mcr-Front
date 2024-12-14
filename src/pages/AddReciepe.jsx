import { useState } from "react";

const AddReciepe = () => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstruction] = useState("");

  console.log("name",name);
  

  const postRecipe = async (e) => {
    e.preventDefault(); 
    const recipeData = {
      name,
      cuisineType:cuisine,
      imageLink,
      ingredients,
      instructions,
    };

    try {
      const url = "https://mcrbackend.vercel.app/addreciepe";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw "Unable add data"
      } 
      const data = await response.json();
      console.log("allData", data);
    } catch (error) {
      console.error("Error occurred:", error);
    }

    setName("")
    setCuisine("")
    setImageLink("")
    setIngredients("")
    setInstruction("")
  };

  return (
    <>
      <div className="container my-5">
        <h3>Add Recipe</h3>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={postRecipe}>
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label className="form-label">Cuisine Type:</label>
              <input
                type="text"
                className="form-control"
                placeholder="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
              <br />
              <label className="form-label">Image Link:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Image Link"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
              />
              <br />
              <label className="form-label">Ingredients:</label>
              <textarea
                className="form-control"
                cols="5"
                rows="3"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
              <br />
              <label className="form-label">Instruction:</label>
              <textarea
                className="form-control"
                cols="5"
                rows="3"
                value={instructions}
                onChange={(e) => setInstruction(e.target.value)}
              ></textarea>
              <br />
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReciepe;
