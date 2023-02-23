import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Pricing()
{
    return <div id="plans" className="px-8 sm:px-24 py-16">
        <h1 className="font-bold text-4xl text-center mb-4">Escolha seu plano</h1>
        <h2 className="font-light text-sm text-center">Descubra agora como o MindGPT vai fazer seu dia-a-dia mais rápido, prático e aumentar sua eficiência em aprendizagem.</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            <div className="bg-indigo-100 p-4 rounded-2xl flex flex-col justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Plano básico</h1>
                    <h2 className="mt-1 text-sm">Para você testar e conhecer o MindGPT!</h2>
                    <h2 className="text-xl my-4 font-semibold flex items-center ">R$ <span className="text-4xl font-bold">0</span></h2>
                    <ul className="text-sm">
                        <li className="flex flex-row items-center">
                            <IoCheckmarkCircleOutline size={20} />
                            Acesso a IA no WhatsApp
                        </li>
                        <li className="flex flex-row items-center">
                            <IoCheckmarkCircleOutline size={20} />
                            10 mensagens gratuítas
                        </li>
                        <li className="flex flex-row items-center">
                            <IoCheckmarkCircleOutline size={20} />
                            Testar potencial da IA
                        </li>
                    </ul>
                </div>
                <div>
                    <a target="_blank" href="https://wa.me/5582981335944?text=Ol%C3%A1">
                        <button className="px-4 py-2 bg-black text-neutral-200 text-base w-full mt-2 rounded-lg">Testar agora!</button>
                    </a>
                </div>
            </div>
            <div className="bg-amber-100 p-4 rounded-2xl">
                <h1 className="text-xl font-semibold">Plano completo</h1>
                <h2 className="mt-1 text-sm">Para você que quer ajuda e ganhar tempo todos os dias.</h2>
                <h2 className="text-xl my-4 font-semibold flex items-center ">R$ <span className="text-4xl font-bold">29,90</span><span className="text-neutral-500 font-light">/mês</span></h2>
                <ul className="text-sm">
                    <li className="flex flex-row items-center">
                        <IoCheckmarkCircleOutline size={20} />
                        Acesso a IA do WhatsApp
                    </li>
                    <li className="flex flex-row items-center">
                        <IoCheckmarkCircleOutline size={20} />
                        Mensagens ilimitadas
                    </li>
                    <li className="flex flex-row items-center">
                        <IoCheckmarkCircleOutline size={20} />
                        Testar potencial da IA
                    </li>
                    <li className="flex flex-row items-center">
                        <IoCheckmarkCircleOutline size={20} />
                        Prioridade no acesso a atualizações
                    </li>
                    <li className="flex flex-row items-center">
                        <IoCheckmarkCircleOutline size={20} />
                        Velocidade de resposta mais rápida
                    </li>
                </ul>
                <NavLink to="/sign-up">
                    <button className="px-4 py-2 bg-black text-neutral-200 text-base w-full mt-2 rounded-lg">Assinar agora!</button>
                </NavLink>
            </div>
        </div>
    </div>
}

export default Pricing;