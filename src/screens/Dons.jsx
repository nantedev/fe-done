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
    <div>
      <h1>Tous les Dons</h1>
      <a href="/new">Créer un nouveau don</a>
      <ul>
        {dons.length ? dons.map((don, idx) => (
          <a href={`/dons/${don._id}`} key={idx}>
            <li>{don.title}</li>
          </a>
        )) : <li>Aucun don trouvé</li>}
      </ul>
    </div>
  )
}

export default Dons
