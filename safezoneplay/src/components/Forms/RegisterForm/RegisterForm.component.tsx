import Button from "../../../styles/Buttons"
import Input from "../../Input/input.component"

const RegisterForm = () => {
    return (
        <form action="">
            <Input label="Nome" placeholder="Seu nome" />
            <Input label="Username" placeholder="Seu SZ username" />
            <Input label="Email" placeholder="email@exemplo.com.br" />
            <Input label="Senha" placeholder="Senha" />
            <Input label="Confirme a senha" placeholder="Confirme a senha" />
            <Button type={'loginButton'}>CADASTRAR</Button>f
        </form>
    )
}

export default RegisterForm