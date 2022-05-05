import React from "react";
import '../../Assets/CSS/header.css'
import { Link } from "react-router-dom";


export  const Header = ():JSX.Element =>{


    return( 
        <>
        
        <div className="header">

            <div className="AlinhamentoTotalBtnHeader">

            <div className="btnAlinhamentosHeader">
            <Link className="btnHome" to='/'>PointTour</Link>
            <Link className="btnRoteiro" to='/Roteiro'>Roteiro</Link>
            </div>

            </div>

        </div>
        
        </>
    );

}