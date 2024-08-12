import classes from "./GpuCards.module.scss"
import Container from "../Conteainer"
import { Button } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from "@mui/material";


export const GpuCards =() => {

    const MyStyledButton = styled(Button)(({ theme }) => ({
        backgroundColor: 'rgba(224, 224, 224, 0.425)',
        color: 'black',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        '&:hover': {
            color: 'white',
            backgroundColor: 'red',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
        },
        width: '48px',
        height: '48px',
        border: '0',
        borderRadius: '100%',
        padding: '0',
        minWidth: '0',
        paddingBottom: '6px',
    }));
      
    const BoxButton = styled(Button)(({ theme }) => ({
        backgroundColor: 'transparent',
        color: 'red',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        width: '172px',
        height: '44px',
        border: '2px red',
        borderRadius: '5px',
        padding: '0',
        minWidth: '0',
        fontFamily: " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '44px',
        letterSpacing:' 0.5px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center' ,
        margin: 'auto',
        '&:hover': {
            color: 'white',
            backgroundColor: 'red',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
            border: '2px red',
        },

    }));

    const SubButton = styled(Button)(({theme}) => ({
        width: '224px',
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
            backgroundColor: 'transparent',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
            border: '2px red',
        },
    }))

    const Card1 = () => {
        return(
            <>
                <p className={classes.CardName}>Laptops</p>
                <p className={classes.CardTitle}>Gaming laptops</p>
                <BoxButton variant="outlined">See more</BoxButton>
            </>
        )
    }
    const Card2 = () => {
        return(
            <>
                <p className={classes.CardName}>After Burner</p>
                <p className={classes.CardTitle}>Fps tracker</p>
                <BoxButton variant="outlined">See more</BoxButton>
            </>
        )
    }
    const Card3 = () => {
        return(
            <>
                <p className={classes.CardName}>Products</p>
                <p className={classes.CardTitle}>Products in MSI</p>
                <BoxButton variant="outlined">See more</BoxButton>
            </>
        )
    }



    return(
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.GpuCardsWrapper}>
                    <div className={classes.NameDivWrapper}>
                        <div className={classes.NameWrapper}> 
                            <p className={classes.Name}>Watch a new test of 4070 super in games and order him to your home</p>
                        </div>
                        <div className={classes.Switcher}>
                            <MyStyledButton variant="contained">
                                <p className={classes.arrow1}> &lsaquo; </p>
                            </MyStyledButton>
                            <MyStyledButton variant="contained">
                                <p className={classes.arrow2}> &rsaquo; </p>
                            </MyStyledButton>
                        </div>
                    </div>
                    <div className={classes.CardsWrapper}>
                        <div className={classes.card}>
                            <div className={classes.background1}></div>
                            <div className={classes.hoverBottom}>
                                <Card1></Card1>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.background1}></div>
                            <div className={classes.hoverBottom}>
                                <Card2></Card2>
                                
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.background1}></div>
                            <div className={classes.hoverBottom}>
                                <Card3></Card3>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ButtonWrapper}>
                        <div className={classes.SecondWrapper}>
                            <p>Explore all our works</p>
                            <SubButton>View portfolio</SubButton>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}



// <button className={classes.ButtonGo}><div className={classes.arrow}>&#8249;</div></button>
//                             <button className={classes.ButtonGo}><div className={classes.arrow}>&#8250;</div></button>