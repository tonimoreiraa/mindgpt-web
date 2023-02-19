import { useState } from "react";
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

function Question({name, content}: {name: string, content: string})
{
    const [expand, setExpand] = useState(false)
    const Icon = expand ? IoChevronUp : IoChevronDown

    return <div className="border-b py-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpand(!expand)}>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <Icon />
        </div>
        {expand && <p className="text-lg font-light mt-2">{content}</p>}
    </div>
}

function FrequentlyQuestions()
{
    return <div className="px-24 py-8 bg-indigo-50">
        <h1 className="font-bold text-4xl text-center">Perguntas frequentes</h1>
        <div className="grid grid-flow-row">
            <Question name="O que é o MindGPT?" content="O MindGPT é uma inteligência artificial que utiliza a tecnologia GPT-3 desenvolvida pela OpenAI para te auxiliar em tarefas, dúvidas, ou qualquer pergunta, através do seu WhatsApp." />
            <Question name="Como o MindGPT pode me ajudar?" content="O MindGPT é uma inteligência artificial que utiliza a tecnologia GPT-3 desenvolvida pela OpenAI para te auxiliar em tarefas, dúvidas, ou qualquer pergunta, através do seu WhatsApp." />
            <Question name="Como usar o MindGPT?" content="O MindGPT é uma inteligência artificial que utiliza a tecnologia GPT-3 desenvolvida pela OpenAI para te auxiliar em tarefas, dúvidas, ou qualquer pergunta, através do seu WhatsApp." />
        </div>
    </div>
}

export default FrequentlyQuestions;