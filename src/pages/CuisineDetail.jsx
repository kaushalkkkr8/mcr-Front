import { useLocation } from "react-router-dom";

const CuisineDetail = () => {
  const location = useLocation();
  const data = location.state;

  const instruction = data.instructions.trim().split(".").map((step) => step.trim()).filter((step) => step);;

  return (
    <>
      <div className="container my-4">
        <h3>{data.name}</h3>
        <div className="card mb-3 shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={data.imageLink} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 px-3">
              <div className="card-body">
                <h4 className="card-title">Cuisine: {data.cuisineType}</h4>
                <h5 className="card-text ">Ingredients: </h5>
                <p>{data.ingredients}</p>
                <h5 className="card-text ">Instructions:  </h5>
                <ol>
                {instruction.map((inst, index) => (
                  <>
                   <li key={index}> {inst}</li>
                  </>
                ))}
                </ol>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CuisineDetail;
