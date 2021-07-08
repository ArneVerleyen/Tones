import React, { useCallback, useEffect, useState } from 'react';
// import './intervals.scss';
import * as Tone from 'tone';
// import  {StartAudioContext} from 'startaudiocontext';
import play from '../../_static/icons/play.svg';
import soundIcon from '../../_static/icons/sound-icon.svg';
import {wrongTheme, rightTheme, normalTheme} from './themes';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './GlobalStyles'

const Intervals = () => {

    const [musicalInterval, setMusicalInterval ] = useState(0);
    const [background, setBackground] = useState(normalTheme);

    const getRandomInterval = () => {

        // const random = Math.floor((Math.random() * 13) + 1);
        const random = Math.floor((Math.random() * 4) + 1);
        console.log(random);
        setMusicalInterval(random);

        /*

        if (random === 1) {
            // Interval = m2
            referenceNote = 'C';
            questionNote = 'Db';
        } else if (random === 2) {
            // Interval = M2
            referenceNote = 'C';
            questionNote= 'D';
        } else if (random === 3) {
            // Interval = m3
            referenceNote = 'C';
            questionNote = 'Eb'
        } else if (random === 4) {
            // Interval = M3
            referenceNote ='C';
            questionNote = 'E';
        } else if (random === 5) {
            // Interval P4
            referenceNote = 'C';
            questionNote = 'F';
        } else if (random === 6) {
            // Interval A4
            referenceNote ='C';
            questionNote = 'F#'
        } else if (random === 7) {
            // Interval = d5
            referenceNote = 'C';
            questionNote= 'Gb';
        } else if (random === 8) {
            // Interval = P5
            referenceNote = 'C';
            questionNote = 'G'
        } else if (random === 9) {
            // Interval = m6
            referenceNote ='C';
            questionNote = 'Ab';
        } else if (random === 10) {
            // Interval M6
            referenceNote = 'C';
            questionNote = 'A';
        } else if (random === 11) {
            // Interval m7
            referenceNote ='C';
            questionNote = 'Bb'
        } else if (random === 12) {
            // Interval M7
            referenceNote = 'C';
            questionNote = 'B';
        } else if (random === 13) {
            // Interval P8
            referenceNote ='C';
            questionNote = 'C'
        };

        */
        return random;
    };

    if (musicalInterval === 0)
    {
        getRandomInterval();
    }

    const getNormalBackground = useCallback(() => {
        setBackground(normalTheme);
    },[]);
    
    const handlePlay = useCallback( () => {

        let referenceNote;
        let questionNote;

        if (musicalInterval === 1) {
            // Interval = m3
            referenceNote = 'C4';
            questionNote = 'Eb4';
        } else if (musicalInterval === 2) {
            // Interval = M3
            referenceNote = 'C4';
            questionNote= 'E4';
        } else if (musicalInterval === 3) {
            // Interval = P5
            referenceNote = 'C4';
            questionNote = 'G4'
        } else if (musicalInterval === 4) {
            // Interval = P8
            referenceNote ='C4';
            questionNote = 'C5';
        };
        
        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(referenceNote, "4n", now);
        synth.triggerAttackRelease(questionNote, "2n", now + 0.5);
    }, [musicalInterval])

    useEffect(() => {
        handlePlay();
    }, [musicalInterval, handlePlay])

    useEffect(() => {
        const timeout = setTimeout(() => {getNormalBackground()}, 1000);
        console.log(timeout);
    }, [background, getNormalBackground])

    const minorThird = () => {
        if (musicalInterval === 1) {
            getRandomInterval();
            setBackground(rightTheme);
        } else {
            setBackground(wrongTheme);
        }
    }

    const majorThird = () => {
        if (musicalInterval === 2) {
            getRandomInterval();
            setBackground(rightTheme);
        } else {
            setBackground(wrongTheme);
        }
    }

    const fifth = () => {
        if (musicalInterval === 3) {
            getRandomInterval();
            setBackground(rightTheme);
        } else {
            setBackground(wrongTheme);
        }
    }

    const octave = () => {
        if (musicalInterval === 4) {
            getRandomInterval();
            setBackground(rightTheme);
        } else {
            setBackground(wrongTheme);
        }
    }


    return  (
        <ThemeProvider theme={background}>
            <GlobalStyles/>
            <div className='intervals-container wrong'>
                <div className='played-notes'>
                    <div className='played-note' >
                        <h3>Reference note</h3>
                        <div>
                            <img src={soundIcon} alt='Sound icon' />
                        </div>
                    </div>
                    <div className='played-note'>
                        <h3>Question note</h3>
                        <div>
                            <img src={soundIcon} alt='Sound icon' />
                        </div>
                    </div>
                </div>
                <div className='play' onClick={handlePlay}>
                    <p>Play interval</p>
                    <img src={play} alt='playbutton' />
                </div>
                <div className='answer-container'>
                    <div className='answer-row'>
                        <div onClick={minorThird}>
                            <p>Minor Third</p>
                        </div>
                        <div onClick={majorThird}>
                            <p>Major Third</p>
                        </div>
                    </div>
                    <div className='answer-row'>
                        <div onClick={fifth}>
                            <p>Fifth</p>
                        </div>
                        <div onClick={octave}>
                            <p>Octave</p>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Intervals;