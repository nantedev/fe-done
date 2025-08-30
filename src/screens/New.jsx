import axios from "axios";
import { useNavigate } from "react-router";


const New = () => {
    const navigate = useNavigate();
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const don = {
            title: e.target[0].value,
            location: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        };
        await axios
                .post("/dons/new", don)
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
        <h1 className="text-center">Donnez vos objets</h1>
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
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-success">Donnez!</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default New