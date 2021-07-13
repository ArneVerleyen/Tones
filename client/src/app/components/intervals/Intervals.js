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
        const random = Math.floor((Math.random() * 8) + 1);
        setIntervalOctave(random);
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

        // Nog alle 

        if (practiseIntervals[musicalInterval - 1] === 'm2') {
            console.log('elo m2');
            questionNote = allIntervals[tone - 1][1] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'M2') {
            console.log('elo M2');
            questionNote = allIntervals[tone - 1][2] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'm3') {
            console.log('elo m3');
            questionNote = allIntervals[tone - 1][3] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'M3') {
            console.log('elo M3');
            questionNote = allIntervals[tone - 1][4] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'P4') {
            console.log('elo P4');
            questionNote = allIntervals[tone - 1][5] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'tritone') {
            console.log('elo P8');
            questionNote = allIntervals[tone - 1][6] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'P5') {
            console.log('elo P5');
            questionNote = allIntervals[tone - 1][7] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'm6') {
            console.log('elo m6');
            questionNote = allIntervals[tone - 1][8] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'M6') {
            console.log('elo M6');
            questionNote = allIntervals[tone - 1][9] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'm7') {
            console.log('elo m7');
            questionNote = allIntervals[tone - 1][10] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'M7') {
            console.log('elo M7');
            questionNote = allIntervals[tone - 1][11] + intervalOctave.toString();
        } else if (practiseIntervals[musicalInterval - 1] === 'P8') {
            console.log('elo P8');
            questionNote = allIntervals[tone][12] + intervalOctave.toString();
        } ; 

        console.log(referenceNote);

        console.log(practiseIntervals);
        
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