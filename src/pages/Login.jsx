import { useState } from "react";
import Header from "../components/Header";
import "../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    function entrar() {
        const usuarioSalvo = JSON.parse(
            localStorage.getItem("usuario")
        );

        if (!usuarioSalvo) {
            setMensagem("Nenhuma conta cadastrada.");
            setTipoMensagem("erro");
            return;
        }

        if (
            email === usuarioSalvo.email &&
            senha === usuarioSalvo.senha
        ) {
            setMensagem("Login realizado com sucesso!");
            setTipoMensagem("sucesso");
            return;
        }

        setMensagem("E-mail ou senha incorretos.");
        setTipoMensagem("erro");
    }

    return (
        <>
            <Header />

            <main className="login">
                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button onClick={entrar}>
                    Entrar
                </button>

                {mensagem && (
                    <div className={`mensagem-login ${tipoMensagem}`}>
                        {mensagem}
                    </div>
                )}

                <p className="criar-conta">
                    Ainda não tem uma conta?{" "}
                    <a href="/cadastro">Criar conta</a>
                </p>
            </main>
        </>
    );
}

export default Login;