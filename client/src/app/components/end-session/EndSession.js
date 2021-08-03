import React, { useCallback, useState, useEffect } from 'react';
import { ProgressBarSmall } from '../progress-bar';
import './endSession.scss';

import { useApi } from '../../services';

const EndSession = () => {

    const { findAllSessions } = useApi();
    const [ sessions, setSessions ] = useState();

    const score = JSON.parse(localStorage.getItem('score'));
    console.log(score);

    const initFetch = useCallback(
        () => {
            const fetchSessions = async () => {
                const data = await findAllSessions(0);
                setSessions(data);
                console.log(data)
            };
            fetchSessions();
        }, [findAllSessions],
    );

    useEffect(() => {
        initFetch();
        console.log(sessions);
        return () => {

        }
    }, [initFetch]);

  

    return (
        <div className='end-session-container'>
           <h1>Training score:</h1>

           <div className='interval-score-container'>
                {
                    score.m2.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Minor second: {score.m2.right}/{score.m2.total}</p>
                        <ProgressBarSmall completed={(score.m2.right/score.m2.total)*100} />
                    </div>
                }
                {
                    score.M2.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Major second: {score.M2.right}/{score.M2.total}</p>
                        <ProgressBarSmall completed={(score.M2.right/score.M2.total)*100} />
                    </div>
                }
               {
                    score.m3.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Minor third: {score.m3.right}/{score.m3.total}</p>
                        <ProgressBarSmall completed={(score.m3.right/score.m3.total)*100} />
                    </div>
                }
                {
                    score.M3.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Major third: {score.M3.right}/{score.M3.total}</p>
                        <ProgressBarSmall completed={(score.M3.right/score.M3.total)*100} />
                    </div>
                }
                {
                    score.P4.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Perfect fourth: {score.P4.right}/{score.P4.total}</p>
                        <ProgressBarSmall completed={(score.P4.right/score.P4.total)*100} />
                    </div>
                }
                {
                    score.tritone.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Tritone: {score.tritone.right}/{score.tritone.total}</p>
                        <ProgressBarSmall completed={(score.tritone.right/score.tritone.total)*100} />
                    </div>
                }
                {
                    score.P5.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Perfect fifth: {score.P5.right}/{score.P5.total}</p>
                        <ProgressBarSmall completed={(score.P5.right/score.P5.total)*100} />
                    </div>
                }
                {
                    score.m6.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Minor sixth: {score.m6.right}/{score.m6.total}</p>
                        <ProgressBarSmall completed={(score.m6.right/score.m6.total)*100} />
                    </div>
                }
                {
                    score.M6.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Major sixth: {score.M6.right}/{score.M6.total}</p>
                        <ProgressBarSmall completed={(score.M6.right/score.M6.total)*100} />
                    </div>
                }
                {
                    score.m7.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Minor seventh: {score.m7.right}/{score.m7.total}</p>
                        <ProgressBarSmall completed={(score.m7.right/score.m7.total)*100} />
                    </div>
                }
                {
                    score.M7.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Major seventh: {score.M7.right}/{score.M7.total}</p>
                        <ProgressBarSmall completed={(score.M7.right/score.M7.total)*100} />
                    </div>
                }
                {
                    score.P8.total !== 0 &&                 
                    <div className='interval-score'>
                        <p>Perfect octave: {score.P8.right}/{score.P8.total}</p>
                        <ProgressBarSmall completed={(score.P8.right/score.P8.total)*100} />
                    </div>
                }
            </div>



           <div className='save'>
               <p>Save session</p>
           </div>
        </div>
    );
};

export default EndSession;
