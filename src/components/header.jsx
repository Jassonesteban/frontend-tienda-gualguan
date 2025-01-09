import { Bars3Icon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context';

const navigation = [
    { name: 'Inicio', href: '/home' },
    { name: 'Categorias', href: '#' },
    { name: 'Nosotros', href: '#' },
    { name: 'Promociones', href: '#' },
];


const Header = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <>
            <header className="sticky inset-x-0 top-0 z-50 bg-white">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1 items-center">
                        <a href="/home" className="-m-1.5 p-1.5 flex items-center">
                            <span className="mr-2">Gualguan Trends</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => context.openMobileMenu()}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
                        <a onClick={() => context.openModal()} className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300">
                            Ingresar
                        </a>

                        <button className='bg-transparent' onClick={() => context.openModal()}>
                            Crear cuenta
                        </button>

                        <button className="bg-transparent hover:bg-gray-200 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                        <button className="relative bg-transparent hover:bg-gray-200 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                <label id='countProducts'>{context.count}</label>
                            </span>
                        </button>
                    </div>

                </nav>
            </header>
        </>

    );
}

export default Header;