import classes from "./RequestBlock.module.scss"
import Container from "../../Conteainer"
import { TextField, Button } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';
import { styled } from "@mui/material"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RequestBlock =() => {

    const SubButton = styled(Button)(({theme}) => ({
        width: '174px',
        height: '44px',
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
                    <div className={classes.secWrapper}>
                        <div className={classes.applicationBlock}>
                            <div className={classes.insideWrapper}>
                                <p className={classes.title}>Register to know all news</p>
                                <div className={classes.inputsWrapper}>
                                    <div className={classes.nameInputWr}>
                                        <p className={classes.inputsP}>Name</p>
                                        <TextField className={classes.INPUT1} id="outlined-basic" placeholder="Name" size="small" variant="outlined"></TextField>
                                    </div>
                                    <div className={classes.phoneInputWr}>
                                        <p className={classes.inputsP}>Phone</p>
                                        <TextField className={classes.INPUT1} id="outlined-basic" placeholder="Phone" size="small" variant="outlined"></TextField>
                                    </div>
                                    <div className={classes.emailInputWr}>
                                        <p className={classes.inputsP}>Email</p>
                                        <TextField className={classes.INPUT1} id="outlined-basic" placeholder="Email" size="small" variant="outlined"></TextField>
                                    </div>
                                    <div className={classes.messageInputWr}>
                                        <p className={classes.inputsP}>Message</p>
                                        <TextField
                                        sx={{
                                            height: '66px'
                                        }}
                                        
                                        className={classes.INPUT0} id="outlined-basic" placeholder="Message" size="small" variant="outlined"></TextField>
                                    </div>
                                    <div className={classes.checkBoxWrapper}>
                                        <Checkbox
                                            {...label}
                                            defaultChecked
                                            sx={{
                                            color: red[800],
                                            '&.Mui-checked': {
                                                color: red[600],
                                            },
                                            }}/>
                                            <div>
                                                <p></p>
                                            </div>


                                    </div>
                                </div>
                                <div>


                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default RequestBlock