import axios from "axios";
import { useNavigate } from "react-router";


const New = () => {
    const navigate = useNavigate();
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const don = {
            title: e.target[0].value,
            location: e.target[1].value
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
        <h1>Donnez !</h1>
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="title">titre</label>
                <input type="text" id="title" name="title" />
            </div>
            <div>
                <label htmlFor="location">Localisation</label>
                <textarea id="location" name="location"></textarea>
            </div>
            <button>Submit</button>
            <a href="/dons">Retourner à la liste des dons</a>
        </form>
        </>
    )
}
export default New