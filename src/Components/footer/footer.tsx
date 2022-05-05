import React from "react";
import '../../Assets/CSS/footer.css'
import Whats from '../../Assets/img/Whats.png'
import Face from '../../Assets/img/Face.png'
import Twitter from '../../Assets/img/Twitter.png'
import Inst from '../../Assets/img/Inst.png'



export const Footer = (): JSX.Element => {
    return (
        <>
            <div className="rodape">
                <div className="txtFooter">
                    <p>Todos os direitos reservados</p>
                </div>
                <div className='footerIcons'>
                    <img src={Whats} alt="whatsapp" />
                    <img src={Inst} alt="instagram" />
                    <img src={Face} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </div>
        </>
    )
}

export default Footer;