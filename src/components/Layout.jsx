/* eslint-disable react/prop-types */
const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center bg-white">
            {children}
        </div>
    );

}

export default Layout;