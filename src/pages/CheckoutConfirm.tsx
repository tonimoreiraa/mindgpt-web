import { IoCheckmarkCircle } from "react-icons/io5";
import TypingAnimation from "../components/TypingAnimation";

function CheckoutConfirm()
{
    return <div className="bg-green-500 h-screen w-screen flex items-center justify-center text-white">
        <div className="max-w-[24rem] flex items-center justify-center text-center flex-col">
            <IoCheckmarkCircle size={96} />
            <h1 className="font-bold text-xl mt-2 mb-4"><TypingAnimation texts={['Seja bem vindo ao MindGPT!']} /></h1>
            <h2 className="text-base font-light">O pagamento confirmado e agora você tem acesso ilimitado ao MindGPT.<br/> Descubra o potêncial da IA agora mesmo:</h2>
            <a target="_blank" href="https://wa.me/5582981335944?text=Ol%C3%A1" className="px-4 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg mt-4 w-full">Abrir no WhatsApp</a>
            <img src={import.meta.env.BASE_URL + 'assets/mindgpt.svg'} className="h-12 mt-4 bg-green-300 p-2 rounded-lg" />
        </div>
    </div>
}

export default CheckoutConfirm;