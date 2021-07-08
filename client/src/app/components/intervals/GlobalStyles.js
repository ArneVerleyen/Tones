import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
    background: ${({theme})=> theme.body};
    color: #FFB94E;
    font-family: baskerville-urw, serif;
    transition: all 0.1s linear;
    touch-action:manipulation;
}
.intervals-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    .played-notes{
        display: flex;
        justify-content: space-around;
        margin: 4px 0;
        div{
            background-color: #470047;
            width: 42vw;
            margin: 0 5px;
        }
        .played-note{
            margin: 0 2px;
            width: 47vw;
            padding: 1.2vh 0vw;
            text-align: center;
            background-color: #470047;
            border-radius: 24px;
            h3{
                background-color: #470047;
                font-size: 24px;
                width: 42vw;
                margin: 0 5px;
                // color: white;
                font-weight: 300;
            }
            img{
          
                background-color: #470047;
            }
        }
    }

    .play {
        border: none;
        text-decoration: none;
        width: 84vw;
        padding: 20px;
        background-color: #470047;
        display: flex;
        justify-content: center;
        border-radius: 24px;
        p{
            font-size: 24px;
            // color: white;
            font-weight: 300;
            margin-right: 20px;
            background-color: #470047;
        }
        img{
            background-color: #470047;
        }
    }

    .answer-container {
            .answer-row{
            display: flex;
            justify-content: space-around;
            margin: 4px 0;
            div{
                text-align: center;
                margin: 0 2px;
                height: 12vh;
                width: 47vw;
                background-color: #470047;
                border-radius: 24px;
                p{
                    margin: 4vh 0 0 12px;
                    background-color: #470047;
                    font-size: 18px;
                    // color: white;
                    font-weight: 300;
                    margin-right: 20px;
                }
            }
        }
    }
}

@media only screen and (min-width: 600px) {
    .intervals-container{
        display: flex;
        align-items: center;
        flex-direction: column;
        .played-notes{
            display: flex;
            justify-content: space-around;
            margin: 4px 0;
            div{
                background-color: #470047;
                width: 260px;
                margin: 0 5px;
            }
            .played-note{
                margin: 0 2px;
                width: 280px;
                padding: 1.2vh 0vw;
                text-align: center;
                background-color: #470047;
                border-radius: 24px;
                h3{
                    background-color: #470047;
                    font-size: 24px;
                    width: 260px;
                    margin: 0 5px;
                    // color: white;
                    font-weight: 300;
                }
                img{
              
                    background-color: #470047;
                }
            }
        }
    
        .play {
            border: none;
            text-decoration: none;
            width: 525px;
            padding: 20px;
            background-color: #470047;
            display: flex;
            justify-content: center;
            border-radius: 24px;
            p{
                font-size: 24px;
                // color: white;
                font-weight: 300;
                margin-right: 20px;
                background-color: #470047;
            }
            img{
                background-color: #470047;
            }
        }
    
        .answer-container {
                .answer-row{
                display: flex;
                justify-content: space-around;
                margin: 4px 0;
                div{
                    text-align: center;
                    margin: 0 2px;
                    height: 12vh;
                    width: 280px;
                    background-color: #470047;
                    border-radius: 24px;
                    p{
                        margin: 4vh 0 0 12px;
                        background-color: #470047;
                        font-size: 18px;
                        // color: white;
                        font-weight: 300;
                        margin-right: 20px;
                    }
                }
            }
        }
    }
    
}
`;