import React, { useCallback, useState, useEffect } from 'react';
import './trainingSessions.scss';

import { ProgressBarSmall } from '../progress-bar';

import { useApi } from '../../services';

const ChordTrainingSessions = ({onReadMore}) => {

    const { findAllChordSessionsWithUserId } = useApi();
    const [ sessions, setSessions ] = useState();

    const user = JSON.parse(localStorage.getItem('authUser'));

    const initFetch = useCallback(
        () => {
            const fetchSessions = async () => {
                const data = await findAllChordSessionsWithUserId(0, user.user_id);
                setSessions(data);
                console.log(data)
            };
            fetchSessions();
        }, [findAllChordSessionsWithUserId, user.user_id],
    );

    useEffect(() => {
        initFetch();
        return () => {}
    }, [initFetch]);

    const formatDate = (inputDate) => {
        let date = inputDate.split('T');
        date = date[0].split('-').reverse().join('/');
        return date;
    };

    const getPercentage = (right, total) => {
        const percentage = (parseInt(right))/(parseInt(total))*100;
        console.log(percentage);
        return percentage;
    };
    
    const handleReadMore = (ev, sessionID) => {
        ev.preventDefault();
        if (typeof onReadMore === 'function') {
            onReadMore(sessionID);
        };
    };

    return (
        <div className='training-sessions-container'>
            <h2>{user.user_display_name}'s chord training sessions</h2>
            {sessions && sessions.map((session, index) => (
                <div key={index} className='session-container' onClick={(ev) => handleReadMore(ev,session.id)}>
                    <div className='session-block'>
                        <h4>{session.acf.type_of_training}</h4>
                        <p>{formatDate(session.date)}</p>
                    </div>
                    <div className='session-block-2'>
                        <p>{session.acf.total_right}/{session.acf.total_answers}</p>
                        <ProgressBarSmall completed={getPercentage(session.acf.total_right, session.acf.total_answers)}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChordTrainingSessions;