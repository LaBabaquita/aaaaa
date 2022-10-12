import { Dispatch, FormEventHandler, SetStateAction } from "react";

export default function ({setRoute}: {setRoute: Dispatch<SetStateAction<string>>}) {
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { email, password } = ev.currentTarget

    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const responseData = await request.json()

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.token)
      alert("PARABÉNS YEY!")
      setRoute("teste")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu erro aqui e eu nem sei o que foi!")
  }
  
  
  return <>
    <form onSubmit={enviarDados}>
      <h1>Login</h1>
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <button onClick={() => {}}>entrar</button>
      <button onClick={() => setRoute("cadastro")}>cadastrar-se</button>
    </form>
  </>
}