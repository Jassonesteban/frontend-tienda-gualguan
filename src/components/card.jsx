import { useContext } from 'react';
import { ShoppingCartContext } from '../context';

const Card = (data) => {

    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openDetailProduct();
        context.setProductToShow(productDetail);
    }

    const addProductsCart = (event, product) => {
        event.stopPropagation();
        context.openCheckoutProducts();
        context.setCount(context.count + 1);
        context.closeDetailProduct();
        context.setcarProducts([...context.carProducts, product]);
    }

    const renderIcon = (id) => {

        const isInCart = context.carProducts.filter(product => product.id === id).length > 0;

        if (isInCart) {
            return (
                <button
                    className="flex items-center gap-2 bg-green-200 text-black-700 px-2 py-1 rounded-md hover:bg-green-300 transition-colors focus:ring-2 focus:ring-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>

                    <span className="text-sm">en el carrito</span>
                </button>
            )
        } else {
            return (
                <button onClick={(event) => addProductsCart(event, data.data)}
                    className="flex items-center gap-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 transition-colors focus:ring-2 focus:ring-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className="text-sm">Añadir</span>
                </button>
            )
        }
    }


    return (
        <div className="bg-white cursor-pointer w-full max-w-lg h-48 rounded-lg flex overflow-hidden shadow-md transform transition-transform hover:shadow-lg hover:-translate-y-2"
            onClick={() => showProduct(data.data)}>

            <figure className="w-1/3 h-full flex items-center justify-center bg-white-100">
                <img className="object-contain w-full h-full p-4" src={data.data.image} alt={data.data.title} />
            </figure>

            <div className="w-2/3 h-full flex flex-col justify-between p-4">
                <div>
                    <span className="block text-xs text-gray-500 mb-2">{data.data.category}</span>
                    <h5 className="text-lg font-medium text-gray-800">{data.data.title}</h5>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-500 font-light">$</span>
                        <span className="text-xl font-bold text-gray-800">{data.data.price}</span>
                    </div>

                    {renderIcon(data.data.id)}
                </div>
            </div>
        </div>

    );
}

export default Card;
