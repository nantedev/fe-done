import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


const Edit = () => {
    const [don, setDon] = useState(undefined);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/dons/${id}`).then((res) => {
            setDon(res.data);
        });
    });

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const don = {
            title: e.target[0].value,
            location: e.target[1].value
        };
        await axios
                .put(`http://localhost:3001/dons/${id}`, don)
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
        <h1>Editer votre don</h1>
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="title">titre</label>
                <input type="text" id="title" name="title" defaultValue={don?.title}/>
            </div>
            <div>
                <label htmlFor="localisation">Localisation</label>
                <textarea id="localisation" name="localisation" defaultValue={don?.location}></textarea>
            </div>
            <button>Submit</button>
            <a href="/dons">Retourner à la liste des dons</a>
        </form>
        </>
    )
}
export default Edit;