import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';

const IndividualData = () => {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        // Make an API request to fetch data for the specific ID
        fetch(`https://users-information-server.vercel.app/userinfo`)
          .then((response) => response.json())
          .then((datas) => setDatas(datas))
          .catch((error) => console.error(error));
      }, []);
    
      if (!datas) {
        return <p>Loading...</p>;
      }
    
    return (
        <div>
          {
            
            datas.map(data => <Table
            key = {data.id}
            data = {data}
            ></Table>)
          }

        </div>
    );
};

export default IndividualData;