import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


const Edit = () => {
    const [don, setDon] = useState(undefined);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/dons/${id}`).then((res) => {
            setDon(res.data);
        });
    });

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const don = {
            title: e.target[0].value,
            location: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        };
        await axios
                .put(`/dons/${id}`, don)
                .then((res) => {
                    navigate(`/dons/${res.data}`)
                    console.log(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
    }
    return (
    <>
      <div className="row">
        <h1 className="text-center">Modifier votre don</h1>
        <div className="col-6 offset-3">
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Je donne
              </label>
              <input
                className="form-control"
                type="text"
                id="title"
                name="title"
                placeholder="par exemple, un canapé"
                defaultValue={don ? don.title : ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="location">
                où ?
              </label>
              <input
                className="form-control"
                type="text"
                id="location"
                name="location"
                placeholder="Par exemple, à Saint-Denis"
                defaultValue={don ? don.location : ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="image">
                Photo de l'objet
              </label>
              <input
                className="form-control"
                type="text"
                id="image"
                name="image"
                defaultValue={don ? don.image : ""}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                className="form-control"
                type="text"
                id="description"
                name="description"
                defaultValue={don ? don.description : ""}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-success">Valider ?</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Edit;