import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import ClientList from "./components/ClientList";

function App() {
  const [clients, setClients] = useState([]);

  const getAllClients = async () => {
    var response = await fetch("http://localhost:8080/client");
    setClients(await response.json());
  };

  const getAllMen = async () => {
    var response = await fetch("http://localhost:8080/client/getAllByGender?gender=M");
    setClients(await response.json());
  };

  const getAllOntariens = async () => {
    var response = await fetch("http://localhost:8080/client/getAllByProvince?province=ON");
    setClients(await response.json());
  };

  return (
    <div className="App">
      <Button text="Get All Clients" get={getAllClients} />
      <Button text="Get All Men" get={getAllMen} />
      <Button text="Get All Province" get={getAllOntariens} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
