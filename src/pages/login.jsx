import { useContext } from 'react';
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { ShoppingCartContext } from "../context";

const Login = () => {

  const context = useContext(ShoppingCartContext);

    return(
        <div className={`${context.isModalOpen ? 'flex' : 'hidden'} bg-white-500 text-black-500`}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-2/3 p-6 rounded-lg shadow-lg relative grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <div className="flex items-center mb-4">
                  <a href="#" className="-m-1.5 p-1.5 flex items-center">
                    <span className="mr-2">Gualguan Trends</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Correo electronico
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder='usuario@example.com'
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                          Contraseña
                        </label>
                        <div className="text-sm">
                          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Olvido la contraseña?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          autoComplete="current-password"
                          placeholder='********'
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Iniciar sesion
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      <button
                        type="button"
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-red-600"
                      >
                        <FaGoogle className="mr-2 text-xl" />
                        Ingresar con Google
                      </button>
                      <button
                        type="button"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600"
                      >
                        <FaMicrosoft className="mr-2 text-xl" />
                        Ingresar con Hotmail
                      </button>
                    </div>

                  </form>

                  <p className="mt-9 text-center text-sm text-gray-500 mb-4">
                    No tienes cuenta?{' '}
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Registrarme
                    </a>
                  </p>
                </div>
              </div>


              <div className="flex justify-center items-center">
                <img
                  src="https://camonclass.com/tienda/wp-content/uploads/2022/07/marketing.jpg"
                  alt="Ecommerce"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <button
                onClick={() => context.closeModal()}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                ✖</button>
            </div>
          </div>
      </div>
    );

}

export default Login;