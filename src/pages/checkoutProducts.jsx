import { useContext } from 'react';
import './../assets/css/checkoutProducts.css';
import { ShoppingCartContext } from '../context';
import OrderCard from '../components/orderCard';
import { totalPrice } from '../utils/utils';

const CheckoutProducts = () => {

    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.carProducts.filter(product => product.id !== id);
        context.setcarProducts(filteredProducts);
    }


    return (
        <aside
            className={`${context.isCheckoutProductsOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
                } checkout-side-menu flex flex-col fixed right-0 top-0 w-80 h-full bg-white border-l border-gray-300 shadow-lg rounded-l-lg transform transition-transform duration-300 ease-in-out`}
        >
            <div className="flex justify-between items-center p-4 border-gray-200">
                <h2 className="font-semibold text-lg text-gray-700">Mi carrito</h2>
                <button className="p-2 rounded-full hover:bg-gray-200 transition" onClick={() => context.closeCheckoutProducts()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='p-4 flex-1 overflow-y-auto'>
                {
                    context.carProducts.map(product => (
                        <OrderCard key={product.id} title={product.title} id={product.id}
                            price={product.price} image={product.image} handleDelete={handleDelete} />
                    ))
                }
            </div>

            <div className="p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Total</span>
                    <span className="text-lg font-semibold text-gray-800">${totalPrice(context.carProducts)}</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
                    onClick={() => context.closeCheckoutProducts()}>
                    Pagar
                </button>
            </div>

        </aside>
    )

}

export default CheckoutProducts;