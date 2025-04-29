// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = () => {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 setError('No token found. Please log in.');
//                 navigate('/login');
//                 return;
//             }

//             try {
//                 const res = await axios.get('http://localhost:5000/products', {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setProducts(res.data.products || res.data);
//                 console.log("Products from API:", res.data.products||res.data);
//             } catch (err) {
//                 const message = err?.response?.data?.message || 'Failed to fetch products';
//                 setError(message);

//                 if (err?.response?.status === 403) {
//                     navigate('/login');
//                 }
//             }
//         };

//         fetchProducts();
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/login');
//     };

//     return (
//         <div className="flex min-h-screen bg-gray-100">
//             {/* ----------------------- */}
//             <div className="w-64 bg-black text-white p-6">
            
//                 <h2 className="text-xl font-bold mb-6">Main Menu</h2>
//                 <ul>
//                     {[
//                         ['📊', 'Dashboard'],
//                         ['📦', 'Orders'],
//                         ['🚗', 'Rides'],
//                         ['👥', 'Clients'],
//                         ['👤', 'Drivers'],
//                         ['🌍', 'Live map'],
//                         ['🚙', 'Car classes'],
//                         ['🏢', 'Branches'],
//                         ['⚙️', 'Moderators'],
//                         ['🛠️', 'Settings'],
//                     ].map(([icon, label], i) => (
//                         <li className="mb-4" key={i}>
//                             <a href="#" className="flex items-center space-x-2">
//                                 <span>{icon}</span>
//                                 <span>{label}</span>
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//                 <button
//                     onClick={handleLogout}
//                     className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
//                 >
//                     Logout
//                 </button>
//             </div>

//                       {/* ----------------------- */}

//             <div className="flex-1 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-2xl font-bold">Good morning, Krishna! 🌞</h1>
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                         Knowledge base
//                     </button>
//                 </div>

//                            {/* ----------------------- */}

//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                     {[
//                         ['Total Orders', '1,234'],
//                         ['Total Earnings', '$56,789'],
//                         ['Portfolio', '45'],
//                     ].map(([label, value], i) => (
//                         <div key={i} className="bg-white p-4 rounded-lg shadow">
//                             <h3 className="text-lg font-semibold">{label}</h3>
//                             <p className="text-2xl font-bold">{value}</p>
//                         </div>
//                     ))}
//                 </div>

               
//                 {error && (
//                     <div className="bg-red-100 text-red-700 p-3 rounded mb-6">
//                         {error}
//                     </div>
//                 )}

//                          {/* ----------------------- */}

//                 <div className="bg-white p-4 rounded-lg shadow mb-6">
//                     <h3 className="text-lg font-semibold mb-4">Progress Score</h3>
//                     <div className="h-48 bg-gray-200 flex items-center justify-center">
//                         <img
//                             src="https://img.freepik.com/free-vector/infographic-timeline-design-template_23-2149141543.jpg"
//                             alt="Graph Placeholder"
//                             className="h-full object-contain"
//                         />
//                     </div>
//                 </div>

//                            {/* ---------DRIVER-------------- */}

//                 <div className="bg-white p-4 rounded-lg shadow mb-6">
//                     <h3 className="text-lg font-semibold mb-4">Top Drivers</h3>
//                     <ul>
//                         {[
//                             ['Sachin', 5, '$98'],
//                             ['Rahul', 5, '$15'],
//                             ['Saurav', 5, '$23'],
//                         ].map(([name, orders, income], i) => (
//                             <li
//                                 key={i}
//                                 className="flex justify-between py-2 border-b last:border-b-0"
//                             >
//                                 <span>{name}</span>
//                                 <span>Orders: {orders}</span>
//                                 <span>{income}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                          {/* ----------PRODUCT TABLE------------- */}

//                 <div className="bg-white p-4 rounded-lg shadow">
//                     <h3 className="text-lg font-semibold mb-4">Products</h3>
//                     <table className="w-full">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="p-2 text-left">User</th>
//                                 <th className="p-2 text-left">Car Comfort</th>
//                                 <th className="p-2 text-left">Order Timed</th>
//                                 <th className="p-2 text-left">Start Location</th>
//                                 <th className="p-2 text-left">Finish Location</th>
//                                 <th className="p-2 text-left">Income</th>
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {Array.isArray(products) && products.length > 0 ? (
//                                 products.map((product, index) => (
//                                     <tr key={index} className="border-b">
//                                         <td className="p-2">{product.name}</td>
//                                         <td className="p-2">{product.description || 'N/A'}</td>
//                                         <td className="p-2">{new Date().toLocaleDateString()}</td>
//                                         <td className="p-2">Start Location</td>
//                                         <td className="p-2">Finish Location</td>
//                                         <td className="p-2">${product.price}</td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="6" className="p-4 text-center text-gray-500">
//                                         No products found.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


//----------------------------------------------------------------------------------



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  
//   const fetchProducts = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.get("http://localhost:5000/products", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log("Fetched products:", response.data);
//       setProducts(response.data.products || []);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     try {
//       const res = await axios.post("http://localhost:5000/products", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(prev => [...prev, res.data.product || res.data]);
//       setFormData({ name: "", description: "", price: "" });
//     } catch (err) {
//       alert("Error adding product");
//       console.error(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(`http://localhost:5000/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(products.filter(product => product.id !== id));
//     } catch (err) {
//       alert("Failed to delete product");
//       console.error(err);
//     }
//   };

//   const handleEdit = async (product) => {
//     const newName = prompt("Edit name", product.name);
//     const newDescription = prompt("Edit description", product.description);
//     const newPrice = prompt("Edit price", product.price);

//     if (!newName || !newPrice) return;

//     const token = localStorage.getItem("token");
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/products/${product.id}`,
//         { name: newName, description: newDescription, price: newPrice },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setProducts(products.map(p => (p.id === product.id ? res.data.product || res.data : p)));
//     } catch (err) {
//       alert("Failed to update product");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

//       {/* Add Product Form */}
//       <form onSubmit={handleSubmit} className="mb-6 space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Product name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           required
//         />
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
//           Add Product
//         </button>
//       </form>

//       {/* Product Table */}
//       <table className="min-w-full bg-white border rounded-lg shadow">
//         <thead>
//           <tr className="bg-gray-200 text-left">
//             <th className="p-2">Name</th>
//             <th className="p-2">Description</th>
//             <th className="p-2">Date</th>
//             <th className="p-2">Start Location</th>
//             <th className="p-2">Finish Location</th>
//             <th className="p-2">Price</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products?.map((product, index) => (
//             <tr key={index} className="border-b hover:bg-gray-50">
//               <td className="p-2">{product.name}</td>
//               <td className="p-2">{product.description}</td>
//               <td className="p-2">{new Date().toLocaleDateString()}</td>
//               <td className="p-2">Start Location</td>
//               <td className="p-2">Finish Location</td>
//               <td className="p-2">${product.price}</td>
//               <td className="p-2 flex gap-2">
//                 <button
//                   className="bg-yellow-500 px-2 py-1 rounded text-white"
//                   onClick={() => handleEdit(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 px-2 py-1 rounded text-white"
//                   onClick={() => handleDelete(product.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {products.length === 0 && (
//             <tr>
//               <td colSpan="7" className="text-center py-4 text-gray-500">
//                 No products found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

//-----------------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', price: '' });
    const navigate = useNavigate();

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found. Please log in.');
                navigate('/login');
                return;
            }

            try {
                const res = await axios.get('http://localhost:5000/products', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProducts(res.data.products || res.data);
                console.log("Products from API:", res.data.products || res.data);
            } catch (err) {
                const message = err?.response?.data?.message || 'Failed to fetch products';
                setError(message);

                if (err?.response?.status === 403) {
                    navigate('/login');
                }
            }
        };

        fetchProducts();
    }, [navigate]);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Handle form data changes
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Handle adding a new product
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const res = await axios.post('http://localhost:5000/products', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProducts((prev) => [...prev, res.data.product || res.data]);
            setFormData({ name: '', description: '', price: '' });
        } catch (err) {
            alert('Error adding product');
            console.error(err);
        }
    };

    // Handle deleting a product
    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:5000/products/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProducts(products.filter((product) => product.id !== id));
        } catch (err) {
            alert('Failed to delete product');
            console.error(err);
        }
    };

    // Handle editing a product
    const handleEdit = async (product) => {
        const newName = prompt('Edit name', product.name);
        const newDescription = prompt('Edit description', product.description);
        const newPrice = prompt('Edit price', product.price);

        if (!newName || !newPrice) return;

        const token = localStorage.getItem('token');
        try {
            const res = await axios.put(
                `http://localhost:5000/products/${product.id}`,
                { name: newName, description: newDescription, price: newPrice },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setProducts(
                products.map((p) =>
                    p.id === product.id ? res.data.product || res.data : p
                )
            );
        } catch (err) {
            alert('Failed to update product');
            console.error(err);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-black text-white p-6">
                <h2 className="text-xl font-bold mb-6">Main Menu</h2>
                <ul>
                    {[
                        ['📊', 'Dashboard'],
                        ['📦', 'Orders'],
                        ['🚗', 'Rides'],
                        ['👥', 'Clients'],
                        ['👤', 'Drivers'],
                        ['🌍', 'Live map'],
                        ['🚙', 'Car classes'],
                        ['🏢', 'Branches'],
                        ['⚙️', 'Moderators'],
                        ['🛠️', 'Settings'],
                    ].map(([icon, label], i) => (
                        <li className="mb-4" key={i}>
                            <a href="#" className="flex items-center space-x-2">
                                <span>{icon}</span>
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleLogout}
                    className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Logout
                </button>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Good morning, Krishna! 🌞</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Knowledge base
                    </button>
                </div>

                {/* Add Product Form */}
                <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Product name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                        Add Product
                    </button>
                </form>

                {/* Product Table */}
                <div className="bg-white p-4 rounded-lg shadow mb-6">
                    <h3 className="text-lg font-semibold mb-4">Products</h3>
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left">User</th>
                                <th className="p-2 text-left">Car Comfort</th>
                                <th className="p-2 text-left">Order Timed</th>
                                <th className="p-2 text-left">Start Location</th>
                                <th className="p-2 text-left">Finish Location</th>
                                <th className="p-2 text-left">Income</th>
                                <th className="p-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(products) && products.length > 0 ? (
                                products.map((product, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="p-2">{product.name}</td>
                                        <td className="p-2">{product.description || 'N/A'}</td>
                                        <td className="p-2">{new Date().toLocaleDateString()}</td>
                                        <td className="p-2">Start Location</td>
                                        <td className="p-2">Finish Location</td>
                                        <td className="p-2">${product.price}</td>
                                        <td className="p-2 flex gap-2">
                                            <button
                                                className="bg-yellow-500 px-2 py-1 rounded text-white"
                                                onClick={() => handleEdit(product)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 px-2 py-1 rounded text-white"
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="p-4 text-center text-gray-500">
                                        No products found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




