import React from "react";
import '../../Assets/CSS/home.css'
import { Header } from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import LogoHome from './../../Assets/img/image 1.png'


export default class Home extends React.Component {

    render() {

        return (
            <>
                    <div className="corHome">
                        <Header />

                        <div className="Alinhamento">
                            <div className="h1Home">
                                <h1 className="">PointTour</h1>
                            </div>
                            <div className="logoHome">
                                <img src={LogoHome} alt="logo" />
                            </div>

                            <div className="alinhamentoP">
                                <p className="PtextHome1">São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.</p>
                            </div>
                            <div className="alinhamentoP">
                                <p className="PtextHome2">A PointTour é um site que te ajuda a economizar na hora de visitar os  pontos turisticos de São Paulo.Existem centenas de sites de turismo com diferentes preços e promoções Encontre o melhor roteiro com preços atraentes.</p>
                            </div>
                        </div>

                        <Footer />
                    </div>
            </>
        );

    }

}