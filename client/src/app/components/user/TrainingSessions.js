import React, { useCallback, useState, useEffect } from 'react';
import './trainingSessions.scss';

import { useApi } from '../../services';

const TrainingSessions = () => {

    const { findAllSessionsWithUserId } = useApi();
    const [ sessions, setSessions ] = useState();

    const user = JSON.parse(localStorage.getItem('authUser'));

    const initFetch = useCallback(
        () => {
            const fetchSessions = async () => {
                const data = await findAllSessionsWithUserId(0, user.user_id);
                setSessions(data);
                console.log(data)
            };
            fetchSessions();
        }, [findAllSessionsWithUserId, user.user_id],
    );

    useEffect(() => {
        initFetch();
        return () => {

        }
    }, [initFetch]);

    return (
        <div>

        </div>
    );
};

export default TrainingSessions;