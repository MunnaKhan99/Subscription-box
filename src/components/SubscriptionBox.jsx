import React from 'react';
import ProductCard from './common/ProductCard';

const SubscriptionBox = ({ products }) => {
    console.log(products);
    return (
        <section className='py-10 '>
            <div className='flex flex-col justify-center items-center mb-10 text-center max-w-2xl mx-auto'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black'>Our Subscription Boxes</h3>
                <p className='text-base md:text-lg text-gray-600 mt-2'>Discover carefully curated boxes featuring premium products from local artisans and creators</p>
            </div>
            <div className='w-11/12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </section>
    );
};

export default SubscriptionBox;