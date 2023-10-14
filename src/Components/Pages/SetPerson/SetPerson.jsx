import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SetPerson = (person) => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            {/* individual detail */}
            <div>
           <table className="bg-white rounded-lg justify-around gap-4 mt-8 w-full h-24 mx-auto items-center">
  <thead>
    <tr>
      <th className='uppercase text-md font-bold justify-evenly'>Id</th>
      <th className='uppercase text-md font-bold justify-evenly'>Name</th>
      <th className='uppercase text-md font-bold justify-evenly'>surname</th>
      <th className='uppercase text-md font-bold justify-evenly'>email</th>
      <th className='uppercase text-md font-bold justify-evenly'>phone</th>
      <th className='uppercase text-md font-bold justify-evenly'>website</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.website}</td>
     
   
    </tr>
  </tbody>
</table> 
        </div>
            {/* all details */}
            <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
			<p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default SetPerson;