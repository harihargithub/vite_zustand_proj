import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../digital-shop-ls-supabase/pages/signin';
import Signup from '../digital-shop-ls-supabase/pages/signup';
import PrivateRoutes from '../digital-shop-ls-supabase/routes/private';
import PublicRoutes from '../digital-shop-ls-supabase/routes/public';
import NotFound from '../digital-shop-ls-supabase/pages/page404';
import Navbar from '../digital-shop-ls-supabase/components/navbar';
import Logout from '../digital-shop-ls-supabase/pages/logout';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(
  'ORg4AjUWIQA/Gnt2UVhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5SdkFhW3xecXxUQWdb',
);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<h1>Browse</h1>} />
          <Route path="product-list" element={<h1>Product List</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route index element={<h1>Dashboard</h1>} />
        </Route>
        <Route path="/app/*" element={<PrivateRoutes />}>
          <Route path="product-add" element={<h1>Product Add</h1>} />
          <Route path="checkout" element={<h1>checkout</h1>} />
          <Route path="thank-you" element={<h1>Thank You</h1>} />
          <Route path="product-list" element={<h1>Product List</h1>} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
