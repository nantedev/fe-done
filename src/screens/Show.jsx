import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Show = () => {
    const { id } = useParams();
    const [don, setDon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDon = async () => {
            const response = await axios.get(`/dons/${id}`);
            setDon(response.data);
        };
        fetchDon();
    }, [id]);

    const onDeleteClick = () => {
        axios.get(`/dons/${id}/delete`).then((res) => {
            if(res.status === 200) {
                navigate("/dons");
            }
        });
    }

    return (
    <>
      {don ? (
        <>
          <div className="row">
            <div className="col-6 offset-3">
              <div className="card mb-3">
                <img src={don.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{don.title}</h5>
                  <p className="card-text">{don.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-muted">{don.location}</li>
                  <li className="list-group-item">$ {don.price} / month</li>
                </ul>
                <div className="card-body d-flex gap-2">
                  <a
                    className="card-link btn btn-info"
                    href={`/dons/${id}/edit`}
                  >
                    Modifier
                  </a>
                  <button className="btn btn-danger" onClick={onDeleteClick}>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
}

export default Show;