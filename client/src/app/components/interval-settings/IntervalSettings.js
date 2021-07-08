import React from 'react';

import './intervalSettings.scss';

const IntervalSettings = () => {

    const onSubmit = () => {

    };

    return (
        <div className="interval-settings-container">
            <div className="row" >
                <div>
                    <p>minor second</p>
                    <p>m2</p>
                    <p>1(semitone)</p>
                </div>
                <div>
                    <p>major second</p>
                    <p>M2</p>
                    <p>2(semitone)</p>
                </div>
            </div>
            <div className="row" >
                <div>
                    <p>minor third</p>
                    <p>m3</p>
                    <p>3(semitone)</p>
                </div>
                <div>
                    <p>major third</p>
                    <p>M3</p>
                    <p>4(semitone)</p>
                </div>
            </div>
            <div className="row" >
                <div>
                    <p>perfect fourth</p>
                    <p>P4</p>
                    <p>5(semitone)</p>
                </div>
                <div>
                    <p>Tritone</p>
                    <p>d5/A4</p>
                    <p>6(semitone)</p>
                </div>
            </div>
            <div className="row" >
                <div>
                    <p>perfect fifth</p>
                    <p>P5</p>
                    <p>7(semitone)</p>
                </div>
                <div>
                    <p>minor sixth</p>
                    <p>m6</p>
                    <p>8(semitone)</p>
                </div>
            </div>
            <div className="row" >
                <div>
                    <p>major sixth</p>
                    <p>M6</p>
                    <p>9(semitone)</p>
                </div>
                <div>
                    <p>minor seventh</p>
                    <p>m7</p>
                    <p>10(semitone)</p>
                </div>
            </div>
            <div className="row" >
                <div>
                    <p>major seventh</p>
                    <p>M7</p>
                    <p>11(semitone)</p>
                </div>
                <div>
                    <p>perfect octave</p>
                    <p>P8</p>
                    <p>12(semitone)</p>
                </div>
            </div>
            <div className="select">
                <select>
                    <option>Ascending/descending</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>
            <div className='link'>
                <h3>Recommended training</h3>
            </div>
            <div className='link'>
                <h3>More info about intervals</h3>
            </div>
        </div>
    );
};

export default IntervalSettings;