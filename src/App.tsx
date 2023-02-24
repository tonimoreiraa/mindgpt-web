import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Checkout from "./pages/Checkout";
import CheckoutConfirm from "./pages/CheckoutConfirm";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient()

function App()
{
  return <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/complete" element={<CheckoutConfirm />} />
      </Routes>
      <Toaster />
    </AuthProvider>
  </QueryClientProvider>
}

export default App;