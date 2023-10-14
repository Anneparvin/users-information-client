import React from 'react';
import { Link } from 'react-router-dom';

const Table = (data) => {
     const {name, username, email, phone, website,id} = data.data;
     console.log(data.data);

    return (
        <div className='overflow-x-auto'>
           <table className="bg-white rounded-lg justify-around gap-4 mt-8 w-full h-24 mx-auto items-center">
  <thead>
    <tr>
      <th className='uppercase text-md font-bold justify-evenly'>Id</th>
      <th className='uppercase text-md font-bold justify-evenly'>Name</th>
      <th className='uppercase text-md font-bold justify-evenly'>surname</th>
      <th className='uppercase text-md font-bold justify-evenly'>email</th>
      <th className='uppercase text-md font-bold justify-evenly'>phone</th>
      <th className='uppercase text-md font-bold justify-evenly'>website</th>
      <th className='uppercase text-md font-bold justify-evenly'>Button</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
     <td>
      {/* <Link to={`/dataperson/${id}`}> Link to the user details route with the ID parameter */}
                <button className='bg-red-500 rounded-full p-2 btn btn-sm font-bold mt-4 text-white'>View Details</button>
              {/* </Link> */}
              </td>    
     
    </tr>
  </tbody>
</table> 
        </div>
    );
};

export default Table;