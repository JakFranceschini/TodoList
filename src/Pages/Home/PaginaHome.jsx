import React from "react";
import TopBar from "../../components/TopBar.jsx";
import SectionPrincipal from "../../components/SectionPrincipal.jsx";
import "./PaginaHome.css";

function PaginaHome() {
    return (
      <div className="paginaHome">
        <TopBar/>
        <div className="containerPrincipal">
            <SectionPrincipal/>
        </div>
      </div>
    );
  }
  
  export default PaginaHome;