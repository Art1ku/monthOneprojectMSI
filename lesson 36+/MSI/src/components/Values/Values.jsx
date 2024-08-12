import classes from './Values.module.scss'
import Container from '../Conteainer'
import gpu from '../../assets/VlauesBlockassets/gpu.svg'
import hand from '../../assets/VlauesBlockassets/hand.svg'
import secure from '../../assets/VlauesBlockassets/secure.svg'
import { Title } from '../UI'
import { SubTitle } from '../UI'

export const Values = () => {


    return(
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.valuesWrapper}>
                        <div className={classes.text}>
                            <Title>Our core values</Title>
                            <SubTitle>Our mission is to set the highest standards for construction sphere</SubTitle>
                        </div>
                        <div className={classes.blocks}>
                            <div className={classes.block1}>
                                <img src={hand} alt="" />
                                <div className={classes.highP}>
                                    <p>Quality</p>
                                </div>
                                <div className={classes.lowP}>
                                    <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                                </div>
                            </div>
                            <div className={classes.block2}>
                                <img src={secure} alt="" />
                                <div className={classes.highP}>
                                    <p>Safety</p>
                                </div>
                                <div className={classes.lowP}>
                                    <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                                </div>
                            </div>
                            <div className={classes.block3}>  
                                <img src={gpu} alt="Comfort"/> 
                                <div className={classes.highP}>
                                    <p>Comfort</p>
                                </div>
                                <div className={classes.lowP}>
                                    <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}