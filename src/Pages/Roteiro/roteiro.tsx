import React, { useState } from "react";
import '../../Assets/CSS/roteiro.css'
import { Header } from "../../Components/header/header";
import Footer from "../../Components/footer/footer"
import { Modal } from "../../Components/Modal/Modal"
export const Roteiro = (): JSX.Element => {




    const [modal, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual:any) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }
        else
        {
            SetModal('hide')
        }

        window.scroll({top: 
            590,left: 0,behavior: 'smooth'});
    }

    return (
        <>
         
            <div className="corRoteiro">
                <Header />

                <h1>Roteiro</h1>
                <div className="AlinhamentoLabels">
                    <label className="labels">Local</label>
                </div>
                <div className="AlinhamentoInputs">
                    <input type="text" placeholder="" className="inputs" />
                </div>

                <div className="AlinhamentoLabels">
                    <label className="labels">Endereço</label>
                </div>
                <div className="AlinhamentoInputs">
                    <input type="text" placeholder="" className="inputs" />
                </div>

                <div className="AlinhamentoLabels">
                    <label className="labels">Descrição</label>
                </div>
                <div className="AlinhamentoInputs">
                    <input type="text" placeholder="" className="inputDescricao" />
                </div>

                <div className="AlinhamentoLabels">
                    <label className="labels">Funcionamento</label>
                </div>
                <div className="AlinhamentoInputs">
                    <input type="text" placeholder="" className="inputs" />
                </div>
                <div className="AlinhamentoBtnRoteiro">
                    <button className="btnRoteiroPage">Cadastrar</button>
                </div>
                <Modal info="X" mostrar={modal} funcao={AbrirFecharModal}/>
                <div className="AlinhamentoBoxEDiv1">

                    <div className="boxP">
                        <p>MASP</p>
                    </div>
                    <div className="AlinhamentoCentral">

                        <div className="txtRoteiro">
                            <p className="txtInfo1">Um dos maiores símbolos da arquitetura moderna, o Museu de Arte de São Paulo é tido como um dos marcos de São Paulo, conhecido no país inteiro e ao redor do mundo. Essa é só um pouco da história do MASP, que tem muito mais a ser contado.</p>
                        </div>


                        <div className="btnRoteiros">
                            <button className="btnEditar">Editar</button>
                            <button className="btnExcluir">Excluir</button>
                        </div>

                        <div className="saibaMaisBtn1">
                            <button className="btnSaiba" onClick={() => AbrirFecharModal(modal) }>Saiba Mais</button>
                        </div>
                    </div>


                </div>


                <div className="AlinhamentoBoxEDiv2">

                    <div className="boxP">
                        <p>Ibirapuera</p>
                    </div>


                    <div className="AlinhamentoCentral">
                        <div className="txtRoteiro">
                            <p className="txtInfo2">No meio da selva de pedra, o Parque do Ibirapuera – Ibira para os mais íntimos – reluz como uma grande área verde. Para muitos é o pulmão da capital paulista, uma das principais atrações de SP, abriga dezenas de atividades para curtir todos os dias da semana.</p>
                        </div>


                        <div className="btnRoteiros2">
                            <button className="btnEditar2">Editar</button>
                            <button className="btnExcluir2">Excluir</button>
                        </div>

                        <div className="saibaMaisBtn2">
                            <button className="btnSaiba2" onClick={() => AbrirFecharModal(modal) }>SaibaMais</button>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    );



}