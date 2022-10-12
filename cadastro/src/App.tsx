import { useState } from 'react';
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import './App.css';
//import './index.css'

export default function () {
  const [route, setRoute] = useState("login")

  return <>
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
  </>
}