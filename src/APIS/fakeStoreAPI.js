/* eslint-disable no-useless-catch */
export const APIproducts = async () => {

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error('Error al cargar los productos');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw error;
    }
}