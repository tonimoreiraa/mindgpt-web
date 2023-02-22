import Demo from "../components/Demo";
import Feedbacks from "../components/Feedbacks";
import FrequentlyQuestions from "../components/FrequentlyQuestions";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import TypingAnimation from "../components/TypingAnimation";

function Main()
{
  return <div>
      <div className="w-full h-[90vh] bg-gradient-to-br from-primary to-primary-hover text-white">
      <Header />
      <div className="h-[80vh] px-24 pt-24 grid grid-cols-2 items-center">
        <div>
          <h1 className="text-5xl font-bold">Converse com o futuro: <span className="text-indigo-500 hover:text-indigo-400">MindGPT</span>, a inteligência artificial no <span className="text-emerald-500 hover:text-emerald-400">WhatsApp</span> que entende você!</h1>
          <p className="text-neutral-300 mt-4"><TypingAnimation texts={['Com inteligência artificial, agora é mais fácil automatizar processos repetitivos ou tirar qualquer dúvida.']} /></p>
          <button className="px-4 py-3 bg-indigo-500 rounded-lg mt-4">Teste no WhatsApp</button>
          <p className="mt-4 text-neutral-300">Confiado por mais de 2 mil de usuários.</p>
        </div>
        <div className="flex justify-end">
          <img className="h-[75vh]" src={import.meta.env.BASE_URL + 'assets/demo_1.png'} />
        </div>
      </div>
    </div>
    <Demo />
    <Feedbacks />
    <Pricing />
    <FrequentlyQuestions />
  </div>
}

export default Main;