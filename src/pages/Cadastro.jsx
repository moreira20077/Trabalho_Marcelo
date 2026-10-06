import { useState } from "react";
import Header from "../components/Header";
import "../styles/cadastro.css";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    return (
        <>
            <Header />

            <main className="cadastro">
                <h1>Criar conta</h1>

                <input
                    type="text"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

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

                <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                />

                <button
                    onClick={() => {
                        if (senha !== confirmarSenha) {
                            alert("As senhas não são iguais.");
                            return;
                        }

                        localStorage.setItem(
                            "usuario",
                            JSON.stringify({
                                nome: nome,
                                email: email,
                                senha: senha
                            })
                        );

                        alert("Conta criada com sucesso!");
                    }}
                >
                    Criar conta
                </button>
            </main>
        </>
    );
}

export default Cadastro;