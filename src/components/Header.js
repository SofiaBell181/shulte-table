import React  from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from "gsap";

export default function Header() {
    const [active, setActive] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const app = useRef();

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
        if(window.innerWidth > 500) {
            gsap.from(".container-left", {delay:.6,opacity:0, duration:1, x:-50 });
            gsap.from(".container-right", {delay:.6,opacity:0, duration:1, x:50});
            gsap.from(".l-header", {delay:.8, opacity:0, duration:.7, x:-50 });
            gsap.from(".r-header", {delay:.8, opacity:0, duration:.7, x:50 });
            gsap.from(".l-part", {delay:1.7, opacity:0, duration:1.7 });
            gsap.from(".r-part", {delay:1.7, opacity:0, duration:1.7 });
            gsap.from(".l-nav", {delay:1.5, opacity:0, duration:1.7});
        }

        else {
            gsap.from(".l-nav", {delay:1.5, opacity:0, duration:1.7});
            gsap.from(".container-left", {delay:.6,opacity:0, duration:1, y:-50 });
            gsap.from(".container-right", {delay:.6,opacity:0, duration:1, y:50});
        }

        }, app);
        
        return () => ctx.revert();
      }, []);


    return(
        <>
            <div className="bg effect11" ref={app} >
        
                    <div className="container-left">
                        <div className="block-l">
                        </div>

                    <div className="block-l__mb">
                        <p className='l-par__white'>Your brain will never be <br /> in good shape</p>
                    </div>

                    </div>

                    <div className={(active &&  !isActive && window.innerWidth > 500) ? 'container-right-bl speed' : 'container-right speed'}>
                        <div className="block-r">
                        </div>  

                             <div className="block-l__mb-r">
                                <p className='l-par__bl'>if you don't take <br /> care of it</p>
                            </div> 
                    </div>

                    <div className="l-nav" onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                        <a href="/home"></a>
                    </div>


                    <div className="l-header">
                        <h2 >Your brain will <span className='l-color-1'>never</span></h2>
                        <h2 className='header'> if you don't </h2>
                    </div>

                    <div className="l-part">
                        <p >Schulte table is a great app to improve yo <br />
                        This application has a long list of feat <br /> 
                        statistics of the res</p>
                    </div>

                    <div className="r-header">
                        <h2> be in good shape</h2>
                        <h2> take care of it</h2>
                    </div>
                                
                    <div className="r-part">
                        <p>ur peripheral vision and speed reading. <br /> 
                        ures such as in-depth customization,<br /> 
                        ults and online leaderboards.</p>
                    </div>

               
                    <div className="leftSide_mask" onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}></div>
                    <div className="rightSide_mask" onMouseMove={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}></div>
                    <div className='leftSide' ></div>
                    <div className='rightSide'></div>
            </div>
        </>
    )
}