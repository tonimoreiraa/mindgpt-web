import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Checkout from "./pages/Checkout";
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
      </Routes>
      <Toaster />
    </AuthProvider>
  </QueryClientProvider>
}

export default App;