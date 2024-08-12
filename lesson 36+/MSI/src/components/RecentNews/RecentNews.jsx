import classes from "./RecentNews.module.scss"
import Container from "../Conteainer";
import { styled } from '@mui/material';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const RecentNews = () => {

    const SubButton = styled(Button)(({theme}) => ({
        width: '212px',
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


    return (
        <div className={classes.wrapper}>
            <Container>
                <div>
                    <div className={classes.insideWrapper}>
                        <div className={classes.TitleWrapper}>
                            <p className={classes.Title}>Recent News</p>
                        </div>
                        <div className={classes.BlocksWrapper}>
                            <div className={classes.block1}>
                                <div className={classes.firstHalf}></div>
                                <div className={classes.secondHalf}>
                                    <p className={classes.HighBp}>How to Build Climate Change-Resilient Infrastructure</p>
                                    <div className={classes.underTitleBlock}>
                                        <p className={classes.LowGp}>Industry News</p>
                                        <div className={classes.divider}></div>
                                        <p className={classes.LowGp}>June 24, 2020</p>
                                        <div className={classes.divider}></div>
                                        <p className={classes.LowGp}>4 comments</p>
                                    </div>
                                    <p className={classes.block1p}>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...</p>
                                </div>
                            </div>
                            <div className={classes.secondBlockWrapper}>
                                <div className={classes.block2}>
                                    <div className={classes.firstHalf}></div>
                                    <div className={classes.secondHalf}>
                                        <p className={classes.HighBp}>How Construction Can Help Itself</p>
                                        <div className={classes.underTitleBlock}>
                                            <p className={classes.LowGp}>Innovation</p>
                                            <div className={classes.divider}></div>
                                            <p className={classes.LowGp}>June 12, 2020</p>
                                            <div className={classes.divider}></div>
                                            <p className={classes.LowGp}>No comments</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.block3}>
                                    <div className={classes.firstHalf}></div>
                                    <div className={classes.secondHalf}>
                                        <p className={classes.HighBp}>Types of Flooring Materials</p>
                                        <div className={classes.underTitleBlock}>
                                            <p className={classes.LowGp}>Company News</p>
                                            <div className={classes.divider}></div>
                                            <p className={classes.LowGp}>December 1, 2019</p>
                                            <div className={classes.divider}></div>
                                            <p className={classes.LowGp}>No comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.ButtonBlock}>
                            <p className={classes.NearButtonText}>Explore all our news posts</p>
                            <Link to={"/News"}><SubButton>VIEW ALL NEWS</SubButton></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RecentNews