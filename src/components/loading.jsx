const LoadingItem = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-blue-600 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p className="mt-4 text-lg text-gray-600">Cargando productos...</p>
        </div>
    );
}

export default LoadingItem;