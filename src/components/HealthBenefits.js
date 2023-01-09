import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import group from '../image/Group.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function HealthBenefits() {
    const [active, setActive] = useState(false);
    const app = useRef();
    const bg = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if(window.innerWidth <= 500) {
                gsap.to(bg.current, {
                    webkitFilter: "grayscale(0)",
                    filter: "grayscale(0)",
                    delay: .6,
                    duration: 2,
                    scrollTrigger: {
                        trigger: bg.current,
                        start: "top 100%",
                        end: "bottom 20%",
                        toggleActions: 'restart reset restart reset'
                    }
                });
            }

            else {
                gsap.to(".par-1", {
                    opacity: 1, 
                    y: 0,
                    duration: 1, 
                    delay: .5,
                    scrollTrigger: {
                        trigger: ".benefits-text",
                    }
                });

                gsap.to(".par-2", {
                    opacity: 1, 
                    x: 0,
                    duration: 1, 
                    delay: .8,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: ".benefits-text",
                    }
                });

                gsap.to(".par-3", {
                    opacity: 1, 
                    x: 0,
                    duration: 1, 
                    delay: .9,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: ".benefits-text",
                    }
                });

                gsap.to(".par-4", {
                    opacity: 1, 
                    y: 0,
                    duration: 1, 
                    delay: .5,
                    scrollTrigger: {
                        trigger: ".benefits-text",
                    }
                })
            }

         
               
        
        }, app);
        
        return () => ctx.revert();
      }, []);


    return(
        <>
            <div ref={app}>
                <div ref={bg} className={(active && window.innerWidth > 500) ? 'bgOrange styleBG' : 'bgOrange container-benefits styleBG'}>
                    <div className='benefits-header'>
                        <h3>Health benefits</h3>
                    </div>
                    <div className="benefits-text">
                        <img src={group} className="brain-desctop" alt="brain" onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)} />
                        <div className='txt-1' onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                            <p className='txt par-1'>speed up of the development of mental perception</p>
                        </div>
                        <div className='txt-2' onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)} >
                            <p className='txt par-2'>directed search capabilities</p>
                        </div>
                        <div className='txt-3' onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                            <p className='txt par-2'>improve attention</p>
                        </div>
                        <img src={group} className="brain-mb" alt="brain"/>
                        <div className='txt-5' onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                            <p className='txt par-3' >discernment</p>
                        </div>
                        <div className='txt-6' onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                            <p className='txt par-3'>stability of vision</p>
                        </div>
                        <div className='txt-4' onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                            <p className='txt par-4'>visual directional speed search movement</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}