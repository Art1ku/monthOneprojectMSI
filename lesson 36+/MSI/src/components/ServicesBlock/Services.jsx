import classes from "./Services.module.scss"
import Container from "../Conteainer"
import { Title } from "../UI"
import { SubTitle } from "../UI"
import { Button } from "@mui/material"
import cpu from "../../assets/Service/cpu.svg"
import gpu from "../../assets/Service/gpu2.svg"
import repair from "../../assets/Service/repair.svg"
import construction from "../../assets/Service/construction.svg"
import { styled } from "@mui/material"

export const Service = () => {


    // function findZeroPositions(string) {
    //     let gde0 = [];
    //     for (let i = 0; i < string.length; i++) {
    //         if (string[i] === '0') {
    //             gde0.push(i);
    //         }
    //     }
    //     return gde0;
    // }
    
    // let string = '023m0df0dfg0';
    // let zeroPosition = findZeroPositions(string);
    // console.log(zeroPosition);

    const SubButton = styled(Button)(({theme}) => ({
        width: '207px',
        height: '52px',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '52px',
        letterSpacing: '0.5px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'red',
        '&:hover': {
            color: 'red',
            backgroundColor: 'rgba(255, 255, 255, 0.592);',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
            border: '2px red',
        },
    }))


    return(
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.ServiceBlock}>
                        <div className={classes.ServiceName}>
                            <Title>Our services</Title>
                            <SubTitle>Createx Construction Bureau is a construction giant with a full range of construction services.</SubTitle>
                        </div>
                        <div className={classes.CardsWrapper}>
                            <div>
                                <div className={classes.cardHover1}>
                                    <div className={classes.card1}>
                                        <div className={classes.insideCard}>
                                            <img className={classes.BlockIMG} src={cpu} alt="" />
                                            <p className={classes.CardName}>Construction</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.cardHoverback1}>

                                </div>
                            </div>
                            <div>
                                <div className={classes.cardHover2}>
                                    <div className={classes.card1}>
                                        <div className={classes.insideCard}>
                                            <img className={classes.BlockIMG} src={construction} alt="" />
                                            <p className={classes.CardName}>Features</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.cardHoverback2}>

                                </div>
                            </div>
                            <div>
                                <div className={classes.cardHover3}>
                                    <div className={classes.card1}>
                                        <div className={classes.insideCard}>
                                            <img className={classes.BlockIMGgpu} src={gpu} alt="" />
                                            <p className={classes.CardName}>New models</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.cardHoverback3}>

                                </div>
                            </div>
                            <div>
                                <div className={classes.cardHover4}>
                                    <div className={classes.card1}>
                                        <div className={classes.insideCard}>
                                            <img className={classes.BlockIMG} src={repair} alt="" />
                                            <p className={classes.CardName}>Repair</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.cardHoverback4}>

                                </div>
                            </div>
                        </div>
                        <div className={classes.LearnBlock}>
                            <p className={classes.LearnP}>Learn more about our services</p>
                            <SubButton>View services</SubButton>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}