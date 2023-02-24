function Feedback({user, job, photo, content}: {user: string, job: string, photo: string, content: string})
{
    return <div className="rounded-2xl border p-4 flex flex-col justify-between">
        <div className="flex items-center h-full">
            <p className="text-light text-sm">"{content}"</p>
        </div>
        <div className="flex items-center justify-start border-t pt-2 mt-2">
            <img className="h-12 w-12 rounded-full" src={photo} />
            <div className="ml-2">
                <h1 className="font-semibold text-sm">{user}</h1>
                <h2 className="font-light text-neutral-500 text-xs">{job}</h2>
            </div>
        </div>
    </div>
}

function Feedbacks()
{
    return <div className="px-8 sm:px-24 py-16">
        <h1 className="font-bold text-4xl text-center mb-2">Escute dos nossos usuários</h1>
        <h2 className="font-light text-sm text-center">Veja como o MindGPT conseguiu ajudar diversas usuários e empresas a melhorar suas atividades.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2 mt-6">
            <Feedback user="Toni Moreira" job="Desenvolvedor de Software" photo="https://lh3.googleusercontent.com/a/AEdFTp5fUdTcqti_GQGjoY32_-MEgcH6HKjWD2Y5oZeW=s83-c-mo" content="O MindGPT me ajuda com esclarecimento de dúvidas técnicas, sugerindo sugestões para um problema, auxiliando no aprendizado e até mesmo me dando códigos prontos." />
            <Feedback user="Daniela Lopes" job="Professora de matemática e física" content="O MindGPT é essencial pra mim, pois me ajuda a economizar tempo em tarefas rotineiras, como a correção de trabalhos e a elaboração de planos de aula. E pelo WhatsApp, pude responder perguntas complexas de forma rápida e precisa" />
            <Feedback user="Pedro Barbosa" job="Gestor de marketing" content="Ele me ajuda a analisar grandes volumes de dados de mercado e oferecer insights precisos e relevantes, o que me permite tomar decisões estratégicas mais informadas. Além disso, me ajuda a economizar tempo em tarefas rotineiras, como a análise de desempenho de campanhas e a criação de relatórios de marketing." />
            <Feedback />
        </div>
    </div>
}

export default Feedbacks;