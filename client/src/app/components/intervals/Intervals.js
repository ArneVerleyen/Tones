import React, { useState } from 'react';
import './intervals.scss';
import * as Tone from 'tone';
// import  {StartAudioContext} from 'startaudiocontext';
import play from '../../_static/icons/play.svg';
import soundIcon from '../../_static/icons/sound-icon.svg';

const Intervals = () => {

    const [musicalInterval, setMusicalInterval ] = useState(0);
 
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
        // return [referenceNote, questionNote]
    };

    if (musicalInterval === 0)
    {
        getRandomInterval();
    }

    const handlePlay = () => {

        let referenceNote;
        let questionNote;

        if (musicalInterval === 1) {
            // Interval = m3
            referenceNote = 'C';
            questionNote = 'Eb';
        } else if (musicalInterval === 2) {
            // Interval = M3
            referenceNote = 'C';
            questionNote= 'E';
        } else if (musicalInterval === 3) {
            // Interval = P5
            referenceNote = 'C';
            questionNote = 'G'
        } else if (musicalInterval === 4) {
            // Interval = P8
            referenceNote ='C';
            questionNote = 'C';
        };
        

        Tone.start();
        const now = Tone.now();
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(referenceNote, "4n", now);
        synth.triggerAttackRelease(questionNote, "2n", now + 0.5);
    }

    const minorThird = () => {
        if (musicalInterval === 1) {
            getRandomInterval();
        } else {

        }
    }


    return  (
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
                    <div onClick={getRandomInterval}>
                        <p>Minor Third</p>
                    </div>
                    <div>
                        <p>Major Third</p>
                    </div>
                </div>
                <div className='answer-row'>
                    <div>
                        <p>Fifth</p>
                    </div>
                    <div>
                        <p>Octave</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intervals;