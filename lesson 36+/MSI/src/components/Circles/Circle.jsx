import classes from "./Circle.module.scss"
import Container from "../Conteainer"


const Circle = () => {


    return(
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.insideWrapper}>
                        <div className={classes.titleWrapper}>
                            <p className={classes.title}>Some facts and figures</p>
                        </div>
                        <div className={classes.circleWrapper}>
                            <div className={classes.insideCircleWrapper}>
                                <div className={classes.circle1}>
                                    <p className={classes.pInsideCircle}>98%</p>
                                </div>
                                <div className={classes.circleShadow1}></div>
                                <p className={classes.circleTitle}>Totally satisfied clients</p>
                            </div>
                            <div className={classes.insideCircleWrapper}>
                                <div className={classes.circle2}>
                                    <p className={classes.pInsideCircle}>20</p>
                                </div>
                                <div className={classes.circleShadow2}></div>
                                <p className={classes.circleTitle}>Years of experience</p>
                            </div>
                            <div className={classes.insideCircleWrapper}>
                                <div className={classes.circle3}>
                                    <p className={classes.pInsideCircle}>9452</p>
                                </div>
                                <div className={classes.circleShadow3}></div>
                                <p className={classes.circleTitle}>Working hours spent</p>
                            </div>
                            <div className={classes.insideCircleWrapper}>
                                <div className={classes.circle4}>
                                    <p className={classes.pInsideCircle}>100%</p>
                                </div>
                                <div className={classes.circleShadow4}></div>
                                <p className={classes.circleTitle}>Succeeded projects</p> 
                            </div>
                        </div>

                    </div>
                </Container>

            </div>
        </>
    )

}

export default Circle