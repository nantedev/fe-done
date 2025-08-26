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
        <div>
            <h1>Don</h1>
            {don ? (
                <div>
                    <h2>{don.title}</h2>
                    <p>{don.location}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <a href={`/dons/${id}/edit`}>Edit</a>
            <br />
            <button onClick={onDeleteClick}>Delete</button>
            <br />
            <a href="/dons">Retourner à la liste des dons</a>
        </div>
    )
}

export default Show;