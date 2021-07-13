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
        
            const [ musicalInterval, setMusicalInterval ] = useState(0);
            const [ intervalOctave, setIntervalOctave ] = useState(4);  
            const [ tone, setTone ] = useState(1);
            const [background, setBackground] = useState(normalTheme);
        
            let settings = JSON.parse(localStorage.getItem('settings'));
        
            let practiseIntervals = [];
            if (settings.m2) {practiseIntervals.push('m2')};
            if (settings.M2) {practiseIntervals.push('M2')};
            if (settings.m3) {practiseIntervals.push('m3')};
            if (settings.M3) {practiseIntervals.push('M3')};
            if (settings.P4) {practiseIntervals.push('P4')};
            if (settings.tritone) {practiseIntervals.push('tritone')};
            if (settings.P5) {practiseIntervals.push('P5')};
            if (settings.m6) {practiseIntervals.push('m6')};
            if (settings.M6) {practiseIntervals.push('M6')};
            if (settings.m7) {practiseIntervals.push('m7')};
            if (settings.M7) {practiseIntervals.push('M7')};
            if (settings.P8) {practiseIntervals.push('P8')};
        
            let practiseIntervalsLength = practiseIntervals.length;
        
            /*
            const intervalsC = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C'];
            const intervalsDb = ['Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db'];
            const intervalsD = ['D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D'];
            const intervalsEb =['Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb'];
            const intervalsE = ['E', 'F', 'F#', 'G', 'Ab', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'];
            const intervalsF = ['F', 'F#', 'G', 'Ab', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F'];
            const intervalsGb = ['Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb'];
            const intervalsG = ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
            const intervalsAb = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
            const intervalsA = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'];
            const intervalsBb = ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb'];
            const intervalsB = ['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
            */
        
            // object containing all intervals for each note (without accounting for octaves).
            const allIntervals = {
                C: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C'],
                Db: ['Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db'],
                D: ['D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D'],
                Eb: ['Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb'],
                E: ['E', 'F', 'F#', 'G', 'Ab', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
                F: ['F', 'F#', 'G', 'Ab', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F'],
                Gb: ['Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb'],
                G: ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
                Ab: ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
                A: ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'],
                Bb: ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb'],
                B: ['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
            };
        
            const getRandomInterval = () => {
                const random = Math.floor((Math.random() * practiseIntervalsLength) + 1);
                setMusicalInterval(random);
                console.log (random);
            };
        
            const getRandomTone = () => {
                const random = Math.floor((Math.random() * 12) + 1);
                setTone(random);
                console.log(random);
            };
        
            const getRandomOctave = () => {
                const random = Math.floor((Math.random() * 12) + 1);
                setIntervalOctave(random);
                console.log(random);
            };
        
            if (musicalInterval === 0) {
                getRandomInterval();
                getRandomTone();
                getRandomOctave();
            };
        
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
                setTimeout(() => {getNormalBackground()}, 1000);
            }, [background, getNormalBackground])
        
            const minorThird = () => {
                if (musicalInterval === 1) {
                    getRandomInterval();
                    getRandomTone();
                    getRandomOctave();
                    setBackground(rightTheme);
                } else {
                    setBackground(wrongTheme);
                }
            }
        
            const majorThird = () => {
                if (musicalInterval === 2) {
                    getRandomInterval();
                    getRandomTone();
                    getRandomOctave();
                    setBackground(rightTheme);
                } else {
                    setBackground(wrongTheme);
                }
            }
        
            const fifth = () => {
                if (musicalInterval === 3) {
                    getRandomInterval();
                    getRandomTone();
                    getRandomOctave();
                    setBackground(rightTheme);
                } else {
                    setBackground(wrongTheme);
                }
            }
        
            const octave = () => {
                if (musicalInterval === 4) {
                    getRandomInterval();
                    getRandomTone();
                    getRandomOctave();
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