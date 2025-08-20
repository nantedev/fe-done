import axios from 'axios';
import { useEffect, useState } from 'react';

const Dons = () => {
  const [dons, setDons] = useState([]);

  useEffect(() => {
    const fetchDons = async () => {
      const response = await axios.get("http://localhost:3001/dons");
      setDons(response.data);
    };
    fetchDons();
  }, []);

  return (
    <div>
      <h1>Tous les Dons</h1>
      <ul>
        {dons.length ? dons.map(don => (
          <li key={don._id}>{don.title}</li>
        )) : <li>Aucun don trouvé</li>}
      </ul>
    </div>
  )
}

export default Dons
