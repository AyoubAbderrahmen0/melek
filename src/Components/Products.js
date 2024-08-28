import React from 'react'
import ProductCard from './ProductCard';
import { Spinner } from 'react-bootstrap';


const Products = () => {
    const products = [
        {
            name: "iPhone",
            price: 4600,
            description: "État neuf",
            imgUrl: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-15-128go-bleu-apple12.jpg"
        },
        {
            name: "Redmi",
            price: 3500,
            description: "État neuf",
            imgUrl: "https://www.graiet.tn/media/catalog/product/cache/fb4fbd9d41acbe50a1e96292a8b8604b/s/m/smartphone_-_xiaomi_-_redmi-12_-4g-128go.jpg"
        },
        {
            name: "Samsung",
            price: 5500,
            description: "État neuf",
            imgUrl: "https://www.samsungtunisie.tn/10443-large_default/samsung-galaxy-s24-prix-tunisie.jpg"
        },
        {
            name: "iPhone",
            price: 4600,
            description: "État neuf",
            imgUrl: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-15-128go-bleu-apple12.jpg"
        },
        {
            name: "Redmi",
            price: 3500,
            description: "État neuf",
            imgUrl: "https://www.graiet.tn/media/catalog/product/cache/fb4fbd9d41acbe50a1e96292a8b8604b/s/m/smartphone_-_xiaomi_-_redmi-12_-4g-128go.jpg"
        },
        {
            name: "Samsung",
            price: 5500,
            description: "État neuf",
            imgUrl: "https://www.samsungtunisie.tn/10443-large_default/samsung-galaxy-s24-prix-tunisie.jpg"
        },
        {
            name: "iPhone",
            price: 4600,
            description: "État neuf",
            imgUrl: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-15-128go-bleu-apple12.jpg"
        },
        {
            name: "Redmi",
            price: 3500,
            description: "État neuf",
            imgUrl: "https://www.graiet.tn/media/catalog/product/cache/fb4fbd9d41acbe50a1e96292a8b8604b/s/m/smartphone_-_xiaomi_-_redmi-12_-4g-128go.jpg"
        },
        {
            name: "Samsung",
            price: 5500,
            description: "État neuf",
            imgUrl: "https://www.samsungtunisie.tn/10443-large_default/samsung-galaxy-s24-prix-tunisie.jpg"
        },
        {
            name: "Samsung",
            price: 5500,
            description: "État neuf",
            imgUrl: "https://www.samsungtunisie.tn/10443-large_default/samsung-galaxy-s24-prix-tunisie.jpg"
        }
    ];
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {products ? products.map((product, index) => (
                <ProductCard key={index} product={product} />
            )) : <Spinner animation="border" />}
        </div>
    )
}

export default Products
