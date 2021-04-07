import React from 'react';
import {Link} from 'react-router-dom';
import './training.scss';
import * as Routes from '../../routes';

const Training = () => {
    return (
        <div className='training-container' >
            <Link to={Routes.INTERVALS} >Intervals training</Link>
        </div>
    );
};

export default Training;