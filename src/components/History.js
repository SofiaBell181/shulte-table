import ver1 from '../image/logo-ver1.png';
import ver2 from '../image/logo-ver2.png';
import logoCol from '../image/schulte-logo-color.png';
import iphoneSE from '../image/iPhoneSE.png';
import iphoneXR from '../image/iPhoneXR.png';
import iphone13 from '../image/iPhone13Pro.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function History() {

    useEffect(() => {
        AOS.init({duration:2000, once:true})
    },[])

    return(
        <>
            <div>
                <div className="container-history">
                   
                    <div className='block-version version-1' >
                        <div className='section' data-aos="fade-up" data-easing="linear">
                            <div className="history-header__mb">
                                <div>
                                    <h2>App version history</h2>
                                </div>
                            </div>
                            <img src={ver1} alt="" />
                            <p>ver. 1.0</p>
                            <img src={iphoneSE} className="mocap"   alt="" />
                            
                                <ul>
                                    <li>Color & b/w version</li>
                                    <li>Letters and numbers</li>
                                    <li>Different board sizes</li>
                                </ul>
                        </div>
                        
                    </div>

                    <div className='block-version version-2'>

                        <div className="history-header">
                            <h2>App version history</h2>
                        </div>

                        <div className='section' data-aos="fade-up" data-easing="linear" data-aos-delay="700">
                            <img src={ver2} alt="" />
                            <p>ver. 2.0</p>
                            <img src={iphoneXR} className="mocap"  alt="" />
                            
                                <ul>
                                    <li>Completely redesigned for better user experience</li>
                                    <li>Added Gorbov-Schulte and Practice mode</li>
                                    <li>Added detailed statistics</li>
                                </ul>
                        </div>
                       
                    </div>
                    <div className='block-version version-3'>
                        <div className='section' data-aos="fade-up" data-easing="linear" data-aos-delay="1400">
                            <img src={logoCol} alt="" />
                            <p>ver. 2.2</p>
                            <img src={iphone13} className="mocap"  alt="" />
                                <ul>
                                    <li>Minor improvments and bug fixes</li>
                                    <li>Support for 11 languages</li>
                                    <li>Added more settings</li>
                                </ul>
                        </div>
                       
                    </div>
                </div>
            </div>

        </>
    )
}