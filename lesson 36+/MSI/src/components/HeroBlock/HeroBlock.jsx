import classes from './HeroBlock.module.scss'
import { Button, colors } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '../Conteainer';
import { styled } from '@mui/material';


// const theme = createTheme({
//     palette: {
//       primary: #FFFFFF,
//       secondary: purple,
//     },
//   });


const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        anger: createColor('#F40B27'),
        apple: createColor('#5DBA40'),
        steelBlue: createColor('#5C76B7'),
        violet: createColor('#FFFfff'),
    },
    typography: {
        fontSize: 16,
        fontWeight: 400,
    }
    });


export default function HeroBlock() {

    const SubButton = styled(Button)(({theme}) => ({
        width: '278px',
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
            color: 'rgb(191, 0, 255)',
            backgroundColor: 'rgba(255, 255, 255, 0.2);',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
            border: '2px red',
        },
    }))

    const LearnButton = styled(Button)(({theme}) => ({
        width: '278px',
        height: '52px',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '52px',
        letterSpacing: '0.5px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        
    }))
    
    
    return(
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.HeroBlockContentContainer}>
                        <div className={classes.heroContentHighP}>
                            <div className={classes.MSIContainer}>
                                <p>MS</p>
                                <p className={classes.RedLetter}>I</p>
                            </div>
                            <div className={classes.MSIContainer}>
                                <p className={classes.whiteP}>COMP</p>
                                <p className={classes.RedLetter}>A</p>
                                <p className={classes.whiteP}>NY</p>
                            </div>
                        </div>
                        <div className={classes.heroContentLowP}>
                            <p className={classes.whiteText}>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis </p>
                        </div>
                        <ThemeProvider theme={theme}>
                            <div className={classes.heroContentButton}>
                                <div>
                                    <LearnButton color='violet' className={classes.but1} variant="outlined">Learn more about us</LearnButton>
                                </div>
                                <div>
                                    <SubButton color='error' className={classes.but2} variant="contained">SUBMIT REQUEST</SubButton>
                                </div>
                            </div>
                        </ThemeProvider>
                    </div>
                </Container>
            </div>
        </>
    )
}