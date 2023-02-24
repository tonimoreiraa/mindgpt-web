import { loadStripe } from "@stripe/stripe-js";
import {PaymentElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import api from "../services/api";
import { useEffect, useState } from "react";

function Payment()
{
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState<string>()

    async function handlePay()
    {
        if (!stripe || !elements) return

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: window.location.origin + "/checkout/complete"}
        })
    
        if (result.error) {
            setError(result.error.message)
        }
    }

    return <div className="flex items-center w-full">
        <div className="px-8 sm:px-24 max-w-[50rem]">
            <img src={import.meta.env.BASE_URL + 'assets/mindgpt.svg'} className="h-10 mb-4" />
            <h1 className="font-bold text-2xl">Detalhes do pagamento</h1>
            <h2 className="text-sm font-normal text-neutral-600">Insira seus dados de pagamento para continuar. Seus dados estão seguros e encriptados pela <a href="https://stripe.com" target="_blank" className="text-blue-500 underline">Stripe</a>.</h2>
            {!!error && <div className="text-xs font-light text-red-500 mt-1">{error}</div>}
            <PaymentElement className="mb-4 mt-8" />
            <button disabled={!stripe} onClick={handlePay} className="px-4 py-2 bg-black text-neutral-200 text-base w-full mt-2 rounded-lg">Confirmar assinatura (R$ 29,90/mês)</button>
        </div>
    </div>
}

function Checkout()
{ 
    const [stripeConfig, setStripeConfig] = useState<any>()

    useEffect(() => {
        api.get('/payments/config').then(({data}) => {
            setStripeConfig(data)
        })
    }, [])

    const stripePromise = stripeConfig ? loadStripe(stripeConfig.STRIPE_CLIENT_API_KEY) : undefined

    return stripeConfig ? <Elements stripe={stripePromise} options={{clientSecret: stripeConfig.clientSecret}}>
        <Payment />
    </Elements> : <></>
}

export default Checkout;