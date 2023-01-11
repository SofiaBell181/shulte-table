import iphone from '../image/iPhone13.png';
import iphoneCol from '../image/iPhone13-color.png';
import logo from '../image/logo.svg';
import logoColor from '../image/logo-color.svg';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function About() {

    const phone = useRef();
    const logoRef = useRef();
    const app = useRef();

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        let ctx = gsap.context(() => {
        if(window.innerWidth <= 500) {
            gsap.to(phone.current, {
                opacity:1,
                delay: .6,
                duration: 1.5,
                scrollTrigger: {
                    trigger: phone.current,
                    start: "20px 100%",
                    end: "bottom 20%",
                    toggleActions: 'restart reset restart reset'
                }
            });

            gsap.to(logoRef.current, {
                opacity:1,
                delay: .3,
                duration: 1.5,
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: 'restart reset restart reset'
                }
            })
       }

       else {

        gsap.from(".move", {
                opacity: 0,
                x:-200,
                stagger: 1,
                ease: "power1.out",
                delay: .8,
                duration: 1,
                scrollTrigger: {
                    trigger: app.current,
                },
            })

       }
        }, app);

        return () => ctx.revert();
      }, []);
    
    
    return(
        <>
            <div className="container-about" ref={app}>
                <div className="l-about l-move move">
                    <div className='block-text'>
                        <div className='block-image-phone iphone'>
                            <img src={iphone} className="phone" alt="Iphone" />
                            <img src={iphoneCol} className="phone-color" width="300" id='animatePhone' ref={phone} alt="Iphone" />
                        </div>
                        
                    </div>

                </div>

                <div className='c-about c-move move'>
                    <ul className='about-list'>
                        <li>4.7/5 - average app rating based on 3.5k reviews</li>
                        <li>Support for 11 languages</li>
                        <li>3 unique game types</li>
                        <li>5 different board sizes</li>
                        <li>Colored and b/w version with numeric and literal options</li>
                        <li>Your own detailed statistics</li>
                        <li>Results Comparison Table participants from all over the world</li>
                    </ul>
                </div>


                <div className="r-about r-move move">
                    <div className='block-image-phone'>
                        <img src={logo} className="phone logo" width="256" alt="logo shulte" />
                        <img src={logoColor}  className="phone-color logo" ref={logoRef} width="256" alt="logo shulte" />
                    </div>
                    <p>Try the Schulte method to increase attention and speed of perception of information</p>
                    <a href='https://apps.apple.com/us/app/schulte-table/id951462483' target='_blank' rel="noreferrer" className='link-store'>t</a>
                </div>

       
            </div>
        </>
    )
}