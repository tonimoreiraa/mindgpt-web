function Feedback({user, job, photo, content}: {user: string, job: string, photo: string, content: string})
{
    return <div className="rounded-2xl border p-4">
        <p className="text-light text-sm">"{content}"</p>
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
            <Feedback />
            <Feedback />
            <Feedback />
        </div>
    </div>
}

export default Feedbacks;