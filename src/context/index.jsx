/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const [isDetailProductOpen, setisDetailProductOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ismobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [carProducts, setcarProducts] = useState([]);
    const [isCheckoutProductsOpen, seIsCheckoutProductsOpen] = useState(false);

    const openDetailProduct = () => setisDetailProductOpen(true);
    const closeDetailProduct = () => setisDetailProductOpen(false);

    const openCheckoutProducts = () => seIsCheckoutProductsOpen(true);
    const closeCheckoutProducts = () => seIsCheckoutProductsOpen(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openMobileMenu = () => setMobileMenuOpen(true);
    const closeMobileMenu = () => setMobileMenuOpen(false);
    

    return (
        <ShoppingCartContext.Provider value={{ count, setCount, openDetailProduct, closeDetailProduct, isDetailProductOpen,
            productToShow, setProductToShow, openModal, closeModal, isModalOpen, ismobileMenuOpen, setMobileMenuOpen,
            openMobileMenu, closeMobileMenu, carProducts, setcarProducts, isCheckoutProductsOpen, openCheckoutProducts, closeCheckoutProducts
         }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

