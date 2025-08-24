import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Show = () => {
    const { id } = useParams();
    const [don, setDon] = useState(null);

    useEffect(() => {
        const fetchDon = async () => {
            const response = await axios.get(`http://localhost:3001/don/${id}`);
            setDon(response.data);
        };
        fetchDon();
    }, [id]);

    return (
        <div>
            <h1>Don</h1>
            {don ? (
                <div>
                    <h2>{don.title}</h2>
                    <p>{don.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Show;