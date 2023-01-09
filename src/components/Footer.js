import logoCol from '../image/schulte-logo-color.png';
import appStore from '../image/appStore-bl.png'

export default function Footer() {
    return(
        <>
            <div className="container-footer">

                <div className="footer-logo__mb">
                  <div className="link__mb">
                    <img src={logoCol} width="128"  alt="" />
                    <img className="img__appStore" src={appStore} alt="" />
                  </div>
                </div>

                <div className="footer-link">
                    <a href="/home">Back to home page</a>

                </div>

                <div className="footer-dev">
                    <a href="#sofiabell">Created by SofiaBell</a>
                </div>
            </div>
        </>
    )
}