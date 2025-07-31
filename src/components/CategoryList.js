import { useEffect, useState } from "react";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Select a Category</h2>
      <div className="row">
        {categories.map((cat, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-primary">
              <div className="card-body d-flex justify-content-center align-items-center">
                <h5 className="card-title">{cat.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
