import { BrowserRouter } from 'react-router-dom';

import "animate.css";
import Header from './components/header';
import Footer from './components/footer';
import { ShoppingCartProvider } from './context';
import AppRoutes from './routes/routes';



const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ShoppingCartProvider>

  );
}

export default App
