import React, { useEffect } from 'react';
import {useRef, useState } from 'react';
import squares from '../image/Squares.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Game() {

    const [intervalId, setIntervalId] = useState('Start');
    const [notActive, setNotActive] = useState(false);
    const [nextNumber, setNextNumber] = useState(() => {
        const savedNumber = localStorage.getItem('nextNumber');
        const initialNumber = JSON.parse(savedNumber);
        return initialNumber || 1;
    });
    const [correctNumber, setCorrectNumber] = useState(false);
    const [cellNum, setCellNum] = useState('');
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("time");
        const initialValue = JSON.parse(saved);
        return initialValue || 0 ;
    });
    const [color, setColor] = useState('');
    const [active, setActive] = useState(false);
    const [endGame, setEndGame] = useState(() => {
        const saved = localStorage.getItem("endGame");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });
    
    const image = useRef();
    const table = useRef();
    const intervalRef = useRef();


    const startTimer = (e) => {
        e.preventDefault();
        let three='3..';
        let two = '2..';
        setNotActive(prevCheck => !prevCheck);
        setTimeout(() => {
            setIntervalId(three)
        } , 500);

        setTimeout(() => {
            setIntervalId(three + two)
        } , 2000);

        setTimeout(() => {
            setIntervalId(three + two + '1')
        } , 3000);

        setTimeout(() => {
            setIntervalId('');
            startGame();
        } , 4000);
    }


    const startGame = () => {
        image.current.style.display = 'none';
        // setNotActive(prevCheck => !prevCheck);
        createElementsInside();
    }

    const createElementsInside = () => {
        let html = "";
        let array = [];
        for (let i = 0; i < 16; i++) {   
            array[i] = i + 1;
        }

        for(let i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * 16); 
            let arrayI = array[i];
            array[i] = array[random];
            array[random] = arrayI;
        }

        for(let i = 0; i < 16; i++){

        if ((i === 3) || i === 6 || i === 9 || i === 12) {
            html += "<div class='cell white' data-number='" + array[i] + "'> <input disabled='"+ correctNumber +"'> "+ array[i] +" </input></div>\n";
        }

        else if ((i === 0) || i === 5 || i === 7 || i === 8 || i === 15) {
            html += "<div class='cell light' data-number='" + array[i] + "'><input disabled='"+ correctNumber +"'> "+ array[i] +" </input></div>\n";
        }

        else if ((i === 1) || i === 4 || i === 11 || i === 14) {
            html += "<div class='cell grey' data-number='" + array[i] + "'><input disabled='"+ correctNumber +"'> "+ array[i] +" </input></div>\n";
        }

        else {
            html += "<div class='cell dark' data-number='" + array[i] + "'><input disabled='"+ correctNumber +"'> "+ array[i] +" </input></div>\n";
        }
        table.current.innerHTML = html;
        }
    }

    useEffect(() => {
        if (notActive === true && intervalId === '') {
            intervalRef.current = setInterval(() => {
                setCount((sec) => sec + 1);
            }, 1000);
            return () => clearInterval(intervalRef.current);
        }
      }, [notActive, setNotActive, intervalId, setIntervalId]);

      useEffect(() => {
        localStorage.setItem("time", Number(count));
        }, [count]);


      useEffect(() => {
        const cancelInterval = () => {
            if (count >= 90) {
                clearInterval(intervalRef.current);
                image.current.style.display = 'block';
                table.current.innerHTML = '';
                setActive(prevActive => !prevActive);
                setEndGame(true); 
            }
          };
          
          cancelInterval();
      }, [count])
    
    
    const formatSeconds = (secs) => {
        let h = Math.floor(secs/3600%60);
        let m = Math.floor(secs/60%60);
        let s = secs%60;

        if (s < 10) s = '0' + s;
        if (m < 10) m = '0' + m;
        if (h <= 0) h ='' 
        else h = '0' + h + '.'

        return `${h}${m}.${s}`
    }

    const onHandlerCell = (e) => {
        let data = e.target.closest('.block-game');
        let cellNumber = Number(e.target.getAttribute('data-number'));
        // console.log( cellNumber);
        setCellNum(cellNumber);

        if (cellNumber === nextNumber) {
            setCorrectNumber(true);
            increaseNumber(data);
        }

        else {  
            setCorrectNumber(false);
            reduceNumber(data);      
        }

    }

    useEffect(() => {
        if(cellNum === 16 && nextNumber > 16)  {
            clearInterval(intervalRef.current);
            image.current.style.display = 'block';
            table.current.innerHTML = '';
            let background = '#F7F7F7';
            setColor(background);
            let blockGame = image.current.closest('.block-game');
            blockGame.style.background = background;
            setActive(prevActive => !prevActive); 
            setEndGame(true);
        }

    }, [cellNum, nextNumber, setColor])

    const increaseNumber = (data) => {
        setNextNumber(number => number + 1);
        let background = color;
        background = '#9BC698';
        setColor(background);
        data.style.background = background;
        setTimeout(() => {
            background = '#FFFFFF';
            setColor(background);
            data.style.background = background;
        }, 200)

    }

    const reduceNumber = (data) => {
        setNextNumber(nextNumber);
        let background = color;
        background = '#CD8585';
        setColor(background);
        data.style.background = background 
        setTimeout(() => {
            background = '#FFFFFF';
            setColor(background);
            data.style.background = background;
        }, 200)
    }

    useEffect(() => {
        localStorage.setItem("endGame", JSON.stringify(endGame));  
        }, [endGame]);


    useEffect(() => {
        localStorage.setItem("nextNumber", Number(nextNumber));
        }, [nextNumber])


    useEffect(() => {
        if(endGame) {
            setIntervalId('');
        }

    }, [endGame])

    useEffect(() => {
        AOS.init({duration:2000, once:true})
    },[])

    return(
        <>
            <div className='container-game'>
                <div className='block-header'>
                    <p className={(notActive || endGame)  ? 'game-header displayNone' : 'game-header'}>Try it on a simplified version of the Schulte table </p>
                    <p className={((nextNumber > 16) || (count >= 90) || (!notActive)) ? 'next-number game-par opacity' : count < 0 ? 'next-number game-par opacity' : 'next-number game-par show'}>{nextNumber > 16 ? '' : 'Next: ' + nextNumber}</p>
                </div>

                <div className='block-game' data-aos="zoom-in">
                    <div ref={table} className="table-game" onClick={onHandlerCell}></div>
                    <p className={(endGame === true) || (active === true) ? 'par-GameEnd show' : 'displayNone'}>Try our app for more customizations and track your results</p>
                    <div className={active === true || (endGame === true) ? 'link-store store2 show' : 'displayNone'}></div>

                    <button onClick={startTimer} disabled={notActive} className='btnStart'>{intervalId}</button>
                    <img className='game-bg' ref={image} src={squares} alt="background" />
                </div>

                <div className='block-timer'>
                    <p className={(notActive || endGame) ? 'game-par opacity' : 'game-par show'}>Focus your eyes in the center and try to press from 1 to 16 <br /> without moving them as fast as possible</p>
                    <p className={((cellNum === 16 && nextNumber > 16) || (count >= 90) || (!notActive)) ? 'game-par-end' : 'game-par'}>{(count <= 0) ? '' : 'Time: ' + formatSeconds(count) + 's'}</p>

                    <p className={(notActive && count < 90 ) ? 'game-par' : 'game-par opacity'}>{(count < 0 || endGame) ? '' : 'Time: ' + formatSeconds(count) + 's'}</p>
                </div>
            </div>
        </>
    )
}