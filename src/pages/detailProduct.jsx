import { useContext, useState } from 'react';
import './../assets/css/detailProduct.css';
import { ShoppingCartContext } from '../context';

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    const [isExpanded, setIsExpanded] = useState(false);

    const description = context.productToShow.description || 'No hay descripción disponible';
    const shortDescription = description.slice(0, 100);

    return (
        <aside
            className={`${context.isDetailProductOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
                } product-detail flex flex-col fixed right-0 top-0 w-80 h-full bg-white border-l border-gray-300 shadow-lg rounded-l-lg transform transition-transform duration-300 ease-in-out`}
        >
            <div className="flex justify-between items-center p-4 border-gray-200">
                <h2 className="font-semibold text-lg text-gray-700">Detalles del producto</h2>
                <button
                    className="p-2 rounded-full hover:bg-gray-200 transition"
                    onClick={context.closeDetailProduct}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-700"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="overflow-y-auto flex-1 p-4">
                <figure>
                    <img
                        className="object-contain w-full h-60 rounded-lg shadow-sm"
                        src={context.productToShow.image}
                        alt={context.productToShow.title}
                    />
                    <figcaption className="mt-4">
                        <h3 className="font-medium text-lg text-gray-800">{context.productToShow.title}</h3>

                        <p className="text-sm text-gray-600 mt-2">
                            {isExpanded ? description : `${shortDescription}...`}
                        </p>

                        <button
                            className="text-black-600 text-bold mt-2"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Ver menos' : 'Ver más'}
                        </button>
                    </figcaption>
                </figure>
            </div>

            {/* Contenedor del precio y botón con fondo gris y fijo en la parte inferior */}
            <div className="flex justify-between items-center p-4 bg-gray-100 absolute bottom-0 left-0 right-0 border-t border-gray-300">
                <p className="text-xl font-bold text-gray-800">${context.productToShow.price}</p>

                <button
                    className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors focus:ring-2 focus:ring-gray-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                    <span className="text-sm">Añadir</span>
                </button>
            </div>
        </aside>
    )

}

export default ProductDetail;