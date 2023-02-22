import * as Yup from 'yup'

export const SignUpValidator = Yup.object().shape({
    whatsapp: Yup.string().min(10, 'Insira um número válido').max(11, 'Insira um número válido').required('Este campo é obrigatório.'),
    password: Yup.string().min(6, 'A senha deve conter ao menos 6 caracteres.').required('Este campo é obrigatório.')
})

