import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import './intervals.scss';
import * as Tone from 'tone';
// import  {StartAudioContext} from 'startaudiocontext';
import play from '../../_static/icons/play.svg';
import soundIcon from '../../_static/icons/sound-icon.svg';
import {wrongTheme, rightTheme, normalTheme} from './themes';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './GlobalStyles';
import * as ROUTES from '../../routes';
import { ProgressBar } from '../progress-bar';

const Triads = () => {

    let history = useHistory();

    let settings = JSON.parse(localStorage.getItem('settings'));

    if (settings === null) {
        history.push(ROUTES.INTERVAL_SETTINGS);
    };

    const [ musicalInterval, setMusicalInterval ] = useState(0);
    const [ intervalOctave, setIntervalOctave ] = useState(4);  
    const [ tone, setTone ] = useState(1);
    const [ firstNote, setFirstNote ] = useState('E4');
    const [ secondNote, setSecondNote ] = useState('E4');
    const [ thirdNote, setThirdNote ] = useState('E4');

    const [ score, setScore ] = useState({
        minor: {right: 0, total: 0},
        major: {right: 0, total: 0},
        augmented: {right: 0, total: 0},
        diminished: {right: 0, total: 0},
        sus2: {right: 0, total: 0},
        sus4: {right: 0, total: 0},
        dominant_seventh: {right: 0, total: 0},
        minor_seventh: {right: 0, total: 0},
        major_seventh: {right: 0, total: 0},
    });


    const [ answers, setAnswers ] = useState({right: 0, wrong: 0});

    const [background, setBackground] = useState(normalTheme);

    // Use memo hook so array doesn't reredener because of useCallback hook dependency
    let practiseChords = useMemo(() => {
        const getPractiseIntervals = () => {
            let practiseChords = [];
            if (settings.minor) {practiseChords.push('minor')};
            if (settings.major) {practiseChords.push('major')};
            if (settings.augmented) {practiseChords.push('augmented')};
            if (settings.diminished) {practiseChords.push('diminished')};
            if (settings.sus2) {practiseChords.push('sus2')};
            if (settings.sus4) {practiseChords.push('sus4')};
    
            return practiseChords;
        }
        return getPractiseIntervals();
    }, [settings.augmented, settings.diminished, settings.major, settings.minor, settings.sus2, settings.sus4]);

    let practiseChordsLength = practiseChords.length;

    // Get random interval, octave, asc/desc order and note.

    const getRandomChord = () => {
        const random = Math.floor((Math.random() * practiseChordsLength) + 1);
        setMusicalInterval(random);
    };

    const getRandomTone = () => {
        const random = Math.floor((Math.random() * 12) + 1);
        setTone(random);
    };

    const getRandomOctave = () => {
        const random = Math.floor((Math.random() * 4) + 2);
        setIntervalOctave(random);
    };


    if (musicalInterval === 0) {
        getRandomChord();
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

        let first;
        let second;
        let third;

        first = allIntervals[tone - 1][0] + intervalOctave.toString();

        // Calculate correct interval from reference note.

        if (practiseChords[musicalInterval - 1] === 'minor') {
            console.log('minor');
            second = allIntervals[tone - 1][3] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A') {
                second = allIntervals[tone - 1][3] + (intervalOctave + 1).toString();
            };
            third = allIntervals[tone - 1][7] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G' ||??allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F') {
                third = allIntervals[tone - 1][7] + (intervalOctave + 1).toString();
            };
        } else if (practiseChords[musicalInterval - 1] === 'major') {
            console.log('major');
            second = allIntervals[tone - 1][4] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab') {
                second = allIntervals[tone - 1][4] + (intervalOctave + 1).toString();
            };
            third = allIntervals[tone - 1][7] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G' ||??allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F') {
                third = allIntervals[tone - 1][7] + (intervalOctave + 1).toString();
            };
        } else if (practiseChords[musicalInterval - 1] === 'augmented') {
            console.log('augmented');
            second = allIntervals[tone - 1][4] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab') {
                second = allIntervals[tone - 1][4] + (intervalOctave + 1).toString();
            };
            third = allIntervals[tone - 1][8] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G' ||??allIntervals[tone - 1][0] === 'Gb' ||??allIntervals[tone - 1][0] === 'F' ||??allIntervals[tone - 1][0] === 'E') {
                third = allIntervals[tone - 1][8] + (intervalOctave + 1).toString();
            };
        } else if (practiseChords[musicalInterval - 1] === 'diminished') {
            console.log('dim');
            second = allIntervals[tone - 1][3] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A') {
                second = allIntervals[tone - 1][3] + (intervalOctave + 1).toString();
            };
            third = allIntervals[tone - 1][6] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G' ||??allIntervals[tone - 1][0] === 'Gb') {
                third = allIntervals[tone - 1][6] + (intervalOctave + 1).toString();
            };
        } else if (practiseChords[musicalInterval - 1] === 'sus2') {
            console.log('sus2');
            second = allIntervals[tone - 1][2] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb') {
                second = allIntervals[tone - 1][2] + (intervalOctave + 1).toString();
            };
            third = allIntervals[tone - 1][7] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G' ||??allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F') {
                third = allIntervals[tone - 1][7] + (intervalOctave + 1).toString();
            };
        } else if (practiseChords[musicalInterval - 1] === 'sus4') {
            console.log('sus4');
            second = allIntervals[tone - 1][5] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G') {
                second = allIntervals[tone - 1][5] + (intervalOctave + 1).toString();
            };
            third = allIntervals[tone - 1][7] + intervalOctave.toString();
            if (allIntervals[tone - 1][0] === 'B'||??allIntervals[tone - 1][0] === 'Bb' ||??allIntervals[tone - 1][0] === 'A' ||??allIntervals[tone - 1][0] === 'Ab' ||??allIntervals[tone - 1][0] === 'G' ||??allIntervals[tone - 1][0] === 'Gb' || allIntervals[tone - 1][0] === 'F') {
                third = allIntervals[tone - 1][7] + (intervalOctave + 1).toString();
            };
        };

        setFirstNote(first);
        setSecondNote(second);
        setThirdNote(third);

        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination(); 
        const synth2 = new Tone.Synth().toDestination();
        const synth3 = new Tone.Synth().toDestination();

        synth.triggerAttackRelease(first, "2n", now);
        synth2.triggerAttackRelease(second, "2n", now);
        synth3.triggerAttackRelease(third, "2n", now);
        
    }, [intervalOctave, musicalInterval, practiseChords, tone]);

    useEffect(() => {
        handlePlay();
    }, [musicalInterval, handlePlay]);

    useEffect(() => {
        setTimeout(() => {getNormalBackground()}, 1000);
    }, [background, getNormalBackground]);

    // Play each note seperate

    const playFirstNote = () => {
        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(firstNote, "4n", now);
    };

    const playSecondNote = () => {
        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(secondNote, "4n", now);
    };

    const playThirdNote = () => {
        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(thirdNote, "4n", now);
    };

    // Keep track of which interval you guess right and which one you geuss wrong.

    const scoreRight = () => {
        if (practiseChords[musicalInterval - 1] === 'minor') {
            let updatedScore = {...score, minor : {right: score.minor.right + 1, total: score.minor.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'major') {
            let updatedScore = {...score, major : {right: score.major.right + 1, total: score.major.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'augmented') {
            let updatedScore = {...score, augmented : {right: score.augmented.right + 1, total: score.augmented.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'diminished') {
            let updatedScore = {...score, diminished : {right: score.diminished.right + 1, total: score.diminished.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'sus2') {
            let updatedScore = {...score, sus2 : {right: score.sus2.right + 1, total: score.sus2.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'sus4') {
            let updatedScore = {...score, sus4 : {right: score.sus4.right + 1, total: score.sus4.total + 1}};
            setScore(updatedScore);
        };
    };

    const scoreWrong = () => {
        if (practiseChords[musicalInterval - 1] === 'minor') {
            let updatedScore = {...score, minor : {right: score.minor.right, total: score.minor.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'major') {
            let updatedScore = {...score, major : {right: score.major.right, total: score.major.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'augmented') {
            let updatedScore = {...score, augmented : {right: score.augmented.right, total: score.augmented.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'diminished') {
            let updatedScore = {...score, diminished : {right: score.diminished.right, total: score.diminished.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'sus2') {
            let updatedScore = {...score, sus2 : {right: score.sus2.right, total: score.sus2.total + 1}};
            setScore(updatedScore);
        } else if (practiseChords[musicalInterval - 1] === 'sus4') {
            let updatedScore = {...score, sus4 : {right: score.sus4.right, total: score.sus4.total + 1}};
            setScore(updatedScore);
        };
    };

    // Functions that check if interval is correct.

    const minor = () => {
        if (practiseChords[musicalInterval - 1] === 'minor') {
            getRandomChord();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            scoreRight();
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            scoreWrong();
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const major = () => {
        if (practiseChords[musicalInterval - 1] === 'major') {
            getRandomChord();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            scoreRight();
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            scoreWrong();
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const augmented = () => {
        if (practiseChords[musicalInterval - 1] === 'augmented') {
            getRandomChord();
            getRandomTone();
            getRandomOctave();
            setBackground(rightTheme);
            scoreRight();
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            scoreWrong();
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const diminished = () => {
        if (practiseChords[musicalInterval - 1] === 'diminished') {
            getRandomChord();
            getRandomTone();
            getRandomOctave();
            scoreRight();
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
            setBackground(rightTheme);
        } else {
            setBackground(wrongTheme);
            scoreWrong();
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const sus2 = () => {
        if (practiseChords[musicalInterval - 1] === 'sus2') {
            getRandomChord();
            getRandomTone();
            getRandomOctave();
            scoreRight();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            scoreWrong();
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };

    const sus4 = () => {
        if (practiseChords[musicalInterval - 1] === 'sus4') {
            getRandomChord();
            getRandomTone();
            getRandomOctave();
            scoreRight();
            setBackground(rightTheme);
            const rightAnswer =  answers.right + 1;
            setAnswers({right: rightAnswer, wrong: answers.wrong});
        } else {
            setBackground(wrongTheme);
            scoreWrong();
            const wrongAnswer =  answers.wrong + 1;
            setAnswers({right: answers.right, wrong: wrongAnswer});
        }
    };


    const endSession = () => {
        localStorage.setItem('score', JSON.stringify({...score, ...answers}));
        console.log({...score, ...answers});
        history.push(ROUTES.CHORDS_END_SESSION);
    };

    return  (
        <ThemeProvider theme={background}>
            <GlobalStyles/>
            <div className='intervals-container wrong'>
                <div className='played-notes'>
                    <div className='played-note' onClick={playFirstNote} >
                        <h3>First note</h3>
                        <div>
                            <img src={soundIcon} alt='Sound icon' />
                        </div>
                    </div>
                    <div className='played-note' onClick={playSecondNote} >
                        <h3>Second note</h3>
                        <div>
                            <img src={soundIcon} alt='Sound icon' />
                        </div>
                    </div>
                    <div className='played-note' onClick={playThirdNote} >
                        <h3>Third note</h3>
                        <div>
                            <img src={soundIcon} alt='Sound icon' />
                        </div>
                    </div>
                </div>
                <div className='play' onClick={handlePlay}>
                    <p>Play Chord</p>
                    <img src={play} alt='playbutton' />
                </div>
                <div className='score'>
                    <div>
                        {answers.right}/{answers.wrong + answers.right}
                    </div>
                    <div>
                        <ProgressBar key={1} completed={(answers.right/(answers.wrong + answers.right))*100} />
                    </div>
                </div>
                <div className='answer-container'>
                    {
                        settings.minor &&
                        <div onClick={minor}>
                            <p>Minor Chord</p>
                        </div>
                    }

                    {
                        settings.major &&
                        <div onClick={major}>
                            <p>Major Chord</p>
                        </div>
                    }
                    {
                        settings.augmented &&
                        <div onClick={augmented}>
                            <p>Augmented Chord</p>
                        </div>
                    }
                    {
                        settings.diminished &&
                        <div onClick={diminished}>
                            <p>Diminished Chord</p>
                        </div>
                    }
                    {
                        settings.sus2 &&
                        <div onClick={sus2}>
                            <p>Suspended Second Chord</p>
                        </div>
                    }
                    {
                        settings.sus4 &&
                        <div onClick={sus4}>
                            <p>Suspended Fourth Chord</p>
                        </div>
                    }
                </div>

                <div className='intervals-footer'>
                    <div className='icons-container'>
                        <Link to={ROUTES.CHORDS_INFO}>                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="108" viewBox="0 0 38 108">
                                <text id="_" data-name="?" transform="translate(19 85)" fill="#ffb94e" fontSize="95" fontFamily="Baskerville"><tspan x="-18.81" y="0">?</tspan></text>
                            </svg>
                        </Link>

                        <Link to={ROUTES.TRIADS_SETTINGS}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="58.234" height="60.832" viewBox="0 0 58.234 60.832">
                                <path id="cog-solid" d="M76.134,45.824l-5.225-3.017a23.624,23.624,0,0,0,0-8.61l5.225-3.017a1.482,1.482,0,0,0,.675-1.717,30.545,30.545,0,0,0-6.709-11.6,1.476,1.476,0,0,0-1.815-.282L63.06,20.6a23.146,23.146,0,0,0-7.457-4.3V10.27a1.469,1.469,0,0,0-1.153-1.435,30.832,30.832,0,0,0-13.393,0A1.469,1.469,0,0,0,39.9,10.27V16.3a23.876,23.876,0,0,0-7.457,4.3l-5.212-3.017a1.457,1.457,0,0,0-1.815.282,30.362,30.362,0,0,0-6.709,11.6,1.467,1.467,0,0,0,.675,1.717l5.225,3.017a23.624,23.624,0,0,0,0,8.61l-5.225,3.017a1.482,1.482,0,0,0-.675,1.717,30.545,30.545,0,0,0,6.709,11.6,1.476,1.476,0,0,0,1.815.282l5.225-3.017a23.146,23.146,0,0,0,7.457,4.3V66.76a1.469,1.469,0,0,0,1.153,1.435,30.832,30.832,0,0,0,13.393,0,1.469,1.469,0,0,0,1.153-1.435V60.726a23.876,23.876,0,0,0,7.457-4.3L68.3,59.438a1.457,1.457,0,0,0,1.815-.282,30.362,30.362,0,0,0,6.709-11.6A1.515,1.515,0,0,0,76.134,45.824Zm-28.38,2.49A9.812,9.812,0,1,1,57.566,38.5,9.825,9.825,0,0,1,47.754,48.314Z" transform="translate(-18.644 -8.099)" fill="#ffb94e"/>
                            </svg>
                        </Link>
                    </div>
                    <div onClick={endSession} className='end-session'>
                        <p>End session</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Triads;