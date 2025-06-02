import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CaseList() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/case')
      .then(res => setCases(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {cases.map(c => <li key={c._id}>{c.title}</li>)}
    </ul>
  );
}

export default CaseList;
