import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Input, { PatternInput, VerificationCodeInput } from "../components/Input";
import { useAuth } from "../context/AuthContext";
import api, { catchApiErrorMessage } from "../services/api";
import { SignUpValidator } from "../validators/SignUpValidators";

function SignUp()
{
    const [state, setState] = useState(0)
    const auth = useAuth()

    async function handleContinue(values: any, setErrors: any)
    {
        try {
            setErrors({})
            await SignUpValidator.validate(values, {abortEarly: false})
            if (state == 0) {
                let waa = String(values.whatsapp)
                if (waa.length === 11 && waa.charAt(2) === "9") {
                    waa = waa.substring(0, 2) + waa.substring(3);
                }
                await api.post('/auth/send-code', {whatsapp: '55' + waa})
            }
            setState(state + 1)
        } catch (err: any) {
            if (err.isAxiosError) {
                console.log(err)
                toast.error(catchApiErrorMessage(err))
            }
            setErrors(Object.fromEntries(err.inner.map((i: any) => [i.path, i.message])))
        }
    }

    function handleSubmit(data: any)
    {
        toast.promise(new Promise(async (resolve) => {
            let waa = String(data.whatsapp)
            if (waa.length === 11 && waa.charAt(2) === "9") {
                waa = waa.substring(0, 2) + waa.substring(3);
            }
            waa = '55' + waa
            const {data: {token, user}} = await api.post('/auth/sign-up', {...data, whatsapp: waa})
            auth.signIn(user, token)
            window.location.href = '/checkout'
            resolve(user)
        }), {
            loading: 'Criando conta...',
            success: 'Sucesso!',
            error: catchApiErrorMessage
        })
    }

    return <div>
        <Header />
        <div className="flex flex-row items-center justify-around">
            <div className="bg-indigo-50 rounded-r-3xl to hidden sm:flex w-full h-screen items-center justify-center p-8 md:p-16 flex-col">
                <img src={import.meta.env.BASE_URL + 'public/assets/ai_undraw.svg'} className="max-h-[100%] max-w-[100%]" />
                <h1 className="text-primary text-2xl font-bold mt-4 text-center">Vamos começar?</h1>
            </div>
            <div className="flex w-full sm:p-24 p-12 pt-20 items-center justify-center">
                <div className="sm:max-w-96">                
                    <img src={import.meta.env.BASE_URL + 'assets/mindgpt.svg'} className="h-10 mb-4" />
                    <Formik initialValues={{}} onSubmit={handleSubmit}>
                        {({handleSubmit, values, setErrors}) => <>
                            <div className={state != 0 ? 'hidden' : undefined}>
                                <h1 className="font-semibold text-xl">Seja bem vindo!</h1>
                                <h2 className="font-normal text-sm text-neutral-500">Crie uma conta e comece agora a usar o MindGPT.</h2> {/* @ts-ignore */}
                                <PatternInput
                                    name="whatsapp"
                                    placeholder="+55 ## #####-####"
                                    label="Número do WhatsApp"
                                    type="text" format="+55 (##) #####-####"
                                    allowEmptyFormatting
                                    mask="_"
                                />
                                <Input
                                    name="password" 
                                    type="password" 
                                    placeholder="••••••••••" 
                                    label="Senha"
                                />
                            </div>
                            <div className={state != 1 ? 'hidden' : undefined}>
                                <h1 className="font-semibold text-xl">Por favor, verifique seu WhatsApp</h1>
                                <h2 className="font-normal text-sm text-neutral-500">Nós enviamos um código para: <span className="font-semibold">{values.whatsapp}</span></h2>
                                <VerificationCodeInput label="Código de verificação" name="code" />
                                <h2 className="text-xs mt-2">Não recebeu um código? <span className="underline tracking-tight cursor-pointer" onClick={() => setState(0)}>Clique para reenviar</span>.</h2>
                            </div>
                            <button onClick={state != 0 ? () => handleSubmit() : () => handleContinue(values, setErrors)} className="px-4 py-2 bg-primary text-neutral-200 text-base w-full mt-2 rounded-lg">{state != 0 ? 'Criar conta' : 'Continuar'}</button>
                        </>}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
}

export default SignUp;