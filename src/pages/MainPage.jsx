import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const MainPage = () => {
  const url="https://mcrbackend.vercel.app/"
  const {data,loading,error,refetch} = useFetch(`${url}reciepe`);
  
  const [searchQuery, setSearchQuery] = useState("")

  const handleDelete = async (id) => {
    try {
      const url = `${url}reciepe/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
  
      if (response.ok) {
        refetch()
       
      } else {
        console.error(`Error deleting recipe with ID ${id}`);
      }
    } catch (error) {
      console.error("Error occurred while deleting the recipe:", error);
    }
  };
  
const filterData= data?.filter((recipe) =>
  recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <>
    {loading && ( <p>Loading....</p> )}
    {error && ( <p>{error}</p> )}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <input type="search" className="form-control" placeholder="Search" aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="row my-3">
          <h4>All Recipies: </h4>
          {filterData.map((recipe) => (
            
              <div className="col-md-3 my-3" key={recipe._id}>
                <div className="card shadow">
                  <img src={recipe.imageLink} alt="" className="img-top" />
                  <div className="card-body">
                    <h4 className="card-title">{recipe.name}</h4>
                    <p>
                      <b>Cuisine:</b> {recipe.cuisineType}
                    </p>
                    <p>
                      <b>Ingredients:</b> <Link to="/details" state={recipe}> See Recipe &gt;</Link> {" "}
                    </p>
                    <p>
                      <b>Instruction:</b> <Link to="/details" state={recipe}> See Recipe  &gt;</Link>{" "}
                    </p>
                    <button onClick={()=>handleDelete(recipe._id)} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
};
export default MainPage;
