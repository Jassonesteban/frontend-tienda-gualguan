import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/card";
import BannerInit from "../components/bannerInit";
import ProductDetail from "./detailProduct";
import Login from '../pages/login';
import LoadingItem from "../components/loading";
import ErrorItem from "../components/error";
import { APIproducts } from "../APIS/fakeStoreAPI";

/* si consumimos una API usamos el useEffect */

function Home() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const loadProducts = async () => {
            try {
                const data = await APIproducts();
                setItems(data);
            } catch (error) {
                setError(true);
                console.error(error);
            } finally {
                setLoading(false);
              }
        }
        loadProducts();
    }, []);

    if(loading) {
        return <LoadingItem />;
    }

    if(error) {
        return <ErrorItem />;
    }


    return (
        <>
            <ProductDetail />
            <Login />
            <BannerInit />
            <Layout>
                <div className="mt-24 mb-24">
                    <h2 className="text-3xl font-medium text-gray-600 mt-10 mb-6">Productos | Tendencias</h2>
                    <div className="grid gap-12 grid-cols-2 w-full max-w-screen-lg mt-12">
                        {
                            items?.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                        }
                    </div>
                </div>
            </Layout>
        </>

    );
}

export default Home;