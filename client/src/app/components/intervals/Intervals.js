import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
    const [ answers, setAnswers ] = useState({right: 0, wrong: 0});
    const [background, setBackground] = useState(normalTheme);

    let settings = JSON.parse(localStorage.getItem('settings'));

    // Use memo hook so array doesn't reredener because of useCallback hook dependency
    let practiseIntervals = useMemo(() => {
        const getPractiseIntervals = () => {
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
    
            return practiseIntervals;
        }
        return getPractiseIntervals();
    }, [settings.M2, settings.M3, settings.M6, settings.M7, settings.P4, settings.P5, settings.P8, settings.m2, settings.m3, settings.m6, settings.m7, settings.tritone]);

    let practiseIntervalsLength = practiseIntervals.length;

    const getRandomInterval = () => {
        const random = Math.floor((Math.random() * practiseIntervalsLength) + 1);
        setMusicalInterval(random);
    };

    const getRandomTone = () => {
        const random = Math.floor((Math.random() * 12) + 1);
        setTone(random);
    };

    const getRandomOctave = () => {
        const random = Math.floor((Math.random() * 4) + 2);
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
    
    const handlePlay = useCallback(() => {

        // array containing all intervals for each note (without accounting for octaves).

        const allIntervals = [
            ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C'],
            ['Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db'],
            ['D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D'],
            ['Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb'],
            ['E', 'F', 'F#', 'G', 'Ab', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
            ['F', 'F#', 'G', 'Ab', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F'],
            ['Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb'],
            ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'],
            ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
            ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'],
            ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb'],
            ['B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
        ];

        let referenceNote;
        let questionNote;

        referenceNote = allIntervals[tone - 1][0] + intervalOctave.toString();

        // Calculate correct interval from reference note.

        if (practiseIntervals[musicalInterval - 1] === 'm2') {
            console.log('m2');
            questionNote = allIntervals[tone - 1][1] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B') {
                questionNote = allIntervals[tone - 1][1] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'M2') {
            console.log('M2');
            questionNote = allIntervals[tone - 1][2] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb') {
                questionNote = allIntervals[tone - 1][2] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'm3') {
            console.log('m3');
            questionNote = allIntervals[tone - 1][3] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A') {
                questionNote = allIntervals[tone - 1][3] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'M3') {
            console.log('M3');
            questionNote = allIntervals[tone - 1][4] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab') {
                questionNote = allIntervals[tone - 1][4] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'P4') {
            console.log('P4');
            questionNote = allIntervals[tone - 1][5] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G') {
                questionNote = allIntervals[tone - 1][5] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'tritone') {
            console.log('tritone');
            questionNote = allIntervals[tone - 1][6] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G' || allIntervals[tone - 1][0] === 'Gb') {
                questionNote = allIntervals[tone - 1][6] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'P5') {
            console.log('P5');
            questionNote = allIntervals[tone - 1][7] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G' || allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F') {
                questionNote = allIntervals[tone - 1][7] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'm6') {
            console.log('m6');
            questionNote = allIntervals[tone - 1][8] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G' || allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F' || allIntervals[tone - 1][0] === 'E') {
                questionNote = allIntervals[tone - 1][8] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'M6') {
            console.log('M6');
            questionNote = allIntervals[tone - 1][9] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G' || allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F' || allIntervals[tone - 1][0] === 'E' || allIntervals[tone - 1][0] === 'Eb') {
                questionNote = allIntervals[tone - 1][9] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'm7') {
            console.log('m7');
            questionNote = allIntervals[tone - 1][10] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G' || allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F' || allIntervals[tone - 1][0] === 'E' || allIntervals[tone - 1][0] === 'Eb' || allIntervals[tone - 1][0] === 'D') {
                questionNote = allIntervals[tone - 1][10] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'M7') {
            console.log('M7');
            questionNote = allIntervals[tone - 1][11] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'|| allIntervals[tone - 1][0] === 'Bb' || allIntervals[tone - 1][0] === 'A' || allIntervals[tone - 1][0] === 'Ab' || allIntervals[tone - 1][0] === 'G' || allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F' || allIntervals[tone - 1][0] === 'E' || allIntervals[tone - 1][0] === 'Eb' || allIntervals[tone - 1][0] === 'D' || allIntervals[tone - 1][0] === 'Db') {
                questionNote = allIntervals[tone - 1][11] + (intervalOctave + 1).toString();
            };
        } else if (practiseIntervals[musicalInterval - 1] === 'P8') {
            console.log('P8');
            questionNote = allIntervals[tone - 1][0] + (intervalOctave + 1).toString();
            referenceNote = allIntervals[tone -1][0] + intervalOctave.toString();
        } ; 

        console.log(referenceNote);
        console.log(questionNote);

        // console.log(answers);

        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(referenceNote, "4n", now);
        synth.triggerAttackRelease(questionNote, "2n", now + 0.5);
    }, [ intervalOctave, musicalInterval, practiseIntervals, tone])

    useEffect(() => {
        handlePlay();
    }, [musicalInterval, handlePlay])

    useEffect(() => {
        setTimeout(() => {getNormalBackground()}, 1000);
    }, [background, getNormalBackground]);

    // Functions that check if interval is correct.

    const minorSecond = () => {
        if (practiseIntervals[musicalInterval - 1] === 'm2') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const majorSecond = () => {
        if (practiseIntervals[musicalInterval - 1] === 'M2') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const minorThird = () => {
        if (practiseIntervals[musicalInterval - 1] === 'm3') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const majorThird = () => {
        console.log(answers)
        if (practiseIntervals[musicalInterval - 1] === 'M3') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
            setBackground(rightTheme);
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const perfectFourth = () => {
        if (practiseIntervals[musicalInterval - 1] === 'P4') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const tritone = () => {
        if (practiseIntervals[musicalInterval - 1] === 'tritone') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const fifth = () => {
        if (practiseIntervals[musicalInterval - 1] === 'P5') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const minorSixth = () => {
        if (practiseIntervals[musicalInterval - 1] === 'm6') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const majorSixth = () => {
        if (practiseIntervals[musicalInterval - 1] === 'M6') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const minorSeventh = () => {
        if (practiseIntervals[musicalInterval - 1] === 'm7') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const majorSeventh = () => {
        if (practiseIntervals[musicalInterval - 1] === 'M7') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const octave = () => {
        if (practiseIntervals[musicalInterval - 1] === 'P8') {
            getRandomInterval();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    //@ TODO: Counter weergeven in balk op het scherm juist/fout


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
                    {
                        settings.m2 &&
                        <div onClick={minorSecond}>
                            <p>Minor Second</p>
                        </div>
                    }

                    {
                        settings.M2 &&
                        <div onClick={majorSecond}>
                            <p>Major Second</p>
                        </div>
                    }
                    {
                        settings.m3 &&
                        <div onClick={minorThird}>
                            <p>Minor Third</p>
                        </div>
                    }
                    {
                        settings.M3 &&
                        <div onClick={majorThird}>
                            <p>Major Third</p>
                        </div>
                    }
                    {
                        settings.P4 &&
                        <div onClick={perfectFourth}>
                            <p>Perfect Fourth</p>
                        </div>
                    }
                    {
                        settings.tritone &&
                        <div onClick={tritone}>
                            <p>Tritone</p>
                        </div>
                    }
                    {
                        settings.P5 &&
                        <div onClick={fifth}>
                            <p>Perfect Fifth</p>
                        </div>
                    }
                    {
                        settings.m6 &&
                        <div onClick={minorSixth}>
                            <p>Minor Sixth</p>
                        </div>
                    }
                    {
                        settings.M6 &&
                        <div onClick={majorSixth}>
                            <p>Major Sixth</p>
                        </div>
                    }
                    {
                        settings.m7 &&
                        <div onClick={minorSeventh}>
                            <p>Minor Seventh</p>
                        </div>
                    }
                    {
                        settings.M7 &&
                        <div onClick={majorSeventh}>
                            <p>Major Seventh</p>
                        </div>
                    }
                    {
                        settings.P8 &&
                        <div onClick={octave}>
                            <p>Octave</p>
                        </div>
                    } 
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Intervals;