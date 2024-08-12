import classes from "./inputBlock.module.scss"
import Container from "../Conteainer"
import { TextField } from "@mui/material"
import { Title } from "../UI"
import { Button } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/material"




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





export const InputBlock = () => {
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
                    <div className={classes.inputBlock}>
                        <div className={classes.paddingg}>
                            <div className={classes.Title}>
                                <p>Want to know more? Ask us a question:</p>
                            </div>
                            <div className={classes.InputBlocksWrapper}>
                                <div className={classes.input1}>
                                    <p className={classes.inputNames}>Name</p>
                                    <div className={classes.inputBack}>
                                        <TextField className={classes.INPUT} id="outlined-basic"  size="small" label="Your name" variant="outlined"></TextField>
                                    </div>
                                </div>
                                <div className={classes.input1}>
                                    <p className={classes.inputNames}>Phone</p>
                                    <div className={classes.inputBack}>
                                        <TextField className={classes.INPUT} id="outlined-basic"  size="small" label="Your phone" type="number" variant="outlined"></TextField>
                                    </div>
                                </div>
                                <div className={classes.input2}>
                                    <p className={classes.inputNames}>Message</p>
                                    <div className={classes.inputBack1}>
                                        <TextField className={classes.INPUT1} id="outlined-basic" label="Your message" size="small" variant="outlined"></TextField>
                                    </div>
                                </div>
                                <div className={classes.SendButtonWrapper}>
                                    <SubButton className={classes.SendButton} variant="contained">SEND</SubButton>
                                </div>
                

                            </div>
                        </div>
                    </div>
                </Container>


            </div>
        
        </>
    )
}