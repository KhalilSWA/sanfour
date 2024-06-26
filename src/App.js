import React from "react";
import "./App.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NvExpedition from "./pages/NvExpedition";
import LivraisonAaccepter from "./pages/LivraisonAaccepter";
import LivraisonAccepter from "./pages/LivraisonAccepter";
import Encours from "./pages/Encours";
import Livré from "./pages/Livré";
import NewAdmin from "./pages/NewAdmin";
import NewSeller from "./pages/NewSeller";
import Runsheet from "./pages/Runsheet";
import BonDeLivraison from "./pages/BonDeLivraison";
import FourDash from "./pages/FourDash";
/*import Login from "./Components/Login/Login";*/
/*import { useSelector } from "react-redux";*/

function App() {
  /*const user = useSelector((state) => state.user.user);*/
  /*const { authUser } = user;*/

  return (
    <div className="App">
      <BrowserRouter style={{ display: "flex" }}>
        <Routes>

          <Route path="/"element={/*authUser ?*/ <Home></Home> /*: <Login></Login>*/}></Route>

          <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>

          <Route path="/fournisseur-dashboard" element={<FourDash></FourDash>}></Route>

          <Route path="/Nv-expedition" element={<NvExpedition></NvExpedition>}></Route>
          
          <Route path="/Livraisonaaccepter" element={<LivraisonAaccepter></LivraisonAaccepter>}></Route>

          <Route path="/Livraison-accepte" element={<LivraisonAccepter></LivraisonAccepter>}></Route>

          <Route path="/En-cours-de-livraison" element={<Encours></Encours>}></Route>

          <Route path="/Livraison-Livré" element={<Livré></Livré>}></Route>

          <Route path="/Ajouter-admin" element={<NewAdmin></NewAdmin>}></Route>

          <Route path="/Ajouter-fournisseur" element={<NewSeller></NewSeller>}></Route>

          <Route path="/Runsheet" element={<Runsheet></Runsheet>}></Route>

          <Route path="/BonDeLivraison" element={<BonDeLivraison></BonDeLivraison>}></Route>


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
