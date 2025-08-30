import axios from 'axios';
import { useEffect, useState } from 'react';

const Dons = () => {
  const [dons, setDons] = useState([]);

  useEffect(() => {
    const fetchDons = async () => {
      const response = await axios.get("/dons");
      setDons(response.data);
    };
    fetchDons();
  }, []);

 return (
    <>
      <ul>
        <h1>Objets disponibles</h1>
        {dons?.length ? (
          dons.map((don, idx) => (
            <div className="card mb-3" key={idx}>
              <div className="row">
                <div className="col-md-4">
                  <img src={don.image} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{don.title}</h5>
                    <p className="card-text">{don.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{don.location}</small>
                    </p>
                    <a href={`/dons/${don._id}`} className="btn btn-primary">
                      {" "}
                      Intéressé(e) ?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>No data</h2>
        )}
      </ul>
    </>
  );
}

export default Dons
