import { useField } from 'formik';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import VerificationInput, {VerificationInputProps} from 'react-verification-input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    name: string
}

function Input({label, name, ...rest}: Props)
{
    const [field, meta, helpers] = useField(name)

    return <div className="mt-2">
        {!!label && <label className="font-semibold text-sm tracking-tight">{label}</label>}
        <input onChange={(event: any) => helpers.setValue(event.target.value)} value={field.value} className="w-full px-4 py-2 border rounded-lg" {...rest} />
        {meta.error ? <div className="text-xs font-light text-red-500 mt-1">{meta.error}</div>: null}
    </div>
}

interface PatternInputProps extends PatternFormatProps<HTMLInputElement> {
    label?: string,
    name: string
}

export function PatternInput({label, name, ...rest}: PatternInputProps)
{
    const [field, meta, helpers] = useField(name)

    return <div className="mt-2">
        {!!label && <label className="font-semibold text-sm tracking-tight">{label}</label>}
        <PatternFormat onChange={(event: any) => helpers.setValue(Number(event.target.value.replace('+55', '').replace(/\D/g, "")))} value={field.value} {...rest} name={name} className="w-full px-4 py-2 border rounded-lg" />
        {meta.error ? <div className="text-xs font-light text-red-500 mt-1">{meta.error}</div>: null}
    </div>
}

interface VerificationCodeInputProps extends VerificationInputProps {
    label?: string,
    name: string
}

export function VerificationCodeInput({label, name, ...rest}: VerificationCodeInputProps)
{
    const [field, meta, helpers] = useField(name)

    return <div className="mt-2">
        {!!label && <label className="font-semibold text-sm tracking-tight">{label}</label>}
        <VerificationInput value={field.value} {...rest} classNames={{character: "px-4 py-2 border rounded-lg text-lg flex items-center justify-center border-neutral-200 bg-white"}} onChange={(value) => helpers.setValue(value)} />
        {meta.error ? <div className="text-xs font-light text-red-500 mt-1">{meta.error}</div>: null}
    </div>
}

export default Input;