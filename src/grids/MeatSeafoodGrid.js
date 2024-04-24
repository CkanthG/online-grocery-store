import React, { useState, useEffect } from 'react';
import fetchMeatSeafoodData from '../service/MeatSeafoodService';

const MeatSeafoodGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMeatSeafoodData();
            console.log("web service call",data);
            setProducts(data);
        };
        fetchData();
    }, []);

    // Function to handle editing a product (just an example, replace with actual edit logic)
    const handleEdit = (productId) => {
        console.log("Editing product with ID:", productId);
        // Add your edit logic here
    };

    return (
        <div>
            <h1 className="mb-4">Meat & Seafood</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{product.meat_seafood}</h5>
                                <p className="card-text">Price: {product.price} {product.currency}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleEdit(product.id)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeatSeafoodGrid;
