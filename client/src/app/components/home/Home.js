import React from 'react';
import {Link} from 'react-router-dom';
import * as Routes from '../../routes';

import './home.scss';

import banner from '../../_static/images/tones.png';

const Home = () => {
    return (
        <div className='home-container'>
            <div>
                <h1>Welcome to Tones!</h1>
                <p>
                    Tones is a progressive web app developed for musicians and music 
                    enthousiasts that want to train their hearing. By following our training path 
                    you'll awaken your hearing and learn to play by ear rather than by repeating scales.
                </p>
                <a href='#read-more' >learn more...</a>
            </div>
            <Link to={Routes.TRAINING} className='link-btn' >Start training</Link>
            <img src={banner} alt='Tones banner' />
            <p id='read-more'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra. Cursus vitae congue mauris rhoncus aenean vel. Ante metus dictum at tempor. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Facilisi nullam vehicula ipsum a. Tempor nec feugiat nisl pretium fusce id velit. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Platea dictumst vestibulum rhoncus est. Accumsan in nisl nisi scelerisque eu ultrices vitae. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Dignissim diam quis enim lobortis scelerisque fermentum. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Et leo duis ut diam quam nulla porttitor massa id. Ante in nibh mauris cursus mattis molestie a iaculis. Tortor posuere ac ut consequat. Rhoncus dolor purus non enim.
                Sapien pellentesque habitant morbi tristique senectus et netus. Amet massa vitae tortor condimentum. Feugiat in fermentum posuere urna nec tincidunt praesent. Tellus mauris a diam maecenas sed enim. Orci nulla pellentesque dignissim enim. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sed faucibus turpis in eu. Feugiat nisl pretium fusce id velit ut tortor pretium. Fringilla ut morbi tincidunt augue interdum velit euismod. Justo laoreet sit amet cursus sit amet dictum sit amet.
                Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Volutpat sed cras ornare arcu dui vivamus. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Natoque penatibus et magnis dis parturient montes. Ante metus dictum at tempor commodo ullamcorper. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Quis varius quam quisque id. Lorem ipsum dolor sit amet consectetur.
                Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Urna porttitor rhoncus dolor purus non enim praesent elementum. Suscipit tellus mauris a diam maecenas sed enim ut sem. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Cursus metus aliquam eleifend mi in. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Curabitur gravida arcu ac tortor. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Enim ut tellus elementum sagittis vitae et leo. Non sodales neque sodales ut etiam sit amet nisl. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Leo urna molestie at elementum. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nunc vel risus commodo viverra maecenas. Id interdum velit laoreet id.
                Id consectetur purus ut faucibus pulvinar elementum. Adipiscing commodo elit at imperdiet dui accumsan. Sed velit dignissim sodales ut eu sem integer vitae justo. Et netus et malesuada fames ac turpis egestas. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Accumsan sit amet nulla facilisi morbi tempus iaculis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Suspendisse faucibus interdum posuere lorem ipsum. Magnis dis parturient montes nascetur ridiculus mus mauris. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Massa tempor nec feugiat nisl pretium. Habitant morbi tristique senectus et netus et malesuada fames ac.
            </p>
            <Link className='link-btn' to={Routes.AUTH_SIGN_UP}>Register</Link>
        </div>
    );
}

export default Home;