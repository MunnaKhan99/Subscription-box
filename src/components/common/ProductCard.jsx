import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product.name);
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">

            {/* Image section */}
            <div className="relative">
                <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />

                {/* Price badge */}
                <span className="absolute top-3 right-3 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                    ${product.price}
                </span>
            </div>

            {/* Content section */}
            <div className="p-5 space-y-1">

                {/* Category */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-primary">🏷</span>
                    <span>{product.tech_category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-600">
                    {product.name}
                </h3>

                {/* Frequency */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>⏱</span>
                    <span>{product.frequency}</span>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-xl">
                    View More
                </button>
            </div>
        </div>

    );
};

export default ProductCard;

