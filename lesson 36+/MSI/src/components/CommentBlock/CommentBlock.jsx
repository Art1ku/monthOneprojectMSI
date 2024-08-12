import classes from './CommentBlock.module.scss'
import Container from '../Conteainer'

const CommentBlock =() => {





    return(
        <>
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.secondWrapper}>
                        <div className={classes.TopBlock}>
                            <p className={classes.BlockName}>Gaming components</p>
                            <div className={classes.Products}>
                                <div className={classes.productDiv}></div>
                                <div className={classes.productDiv}></div>
                                <div className={classes.productDiv}></div>
                                <div className={classes.productDiv}></div>
                                <div className={classes.productDiv}></div>
                                <div className={classes.productDiv}></div>
                            </div>
                        </div>
                        <div className={classes.CommentBlockWrapper}>
                            <div className={classes.Comment}>
                                <div className={classes.titleWrapper}>
                                    <p className={classes.InsideCommentBlockName}>What our clients are saying</p>
                                </div> 
                                <div className={classes.InsideCommentBlockWrapper}>
                                    <div className={classes.commentPersonIcon}></div>
                                    <div className={classes.commentPBlock}>
                                        <div className={classes.CommentPP}>
                                            <p>Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. </p>
                                        </div>
                                        <div className={classes.PersonNameBlock}>
                                            <div className={classes.PersonName}>
                                                <p className={classes.name}>Shawn Edwards</p>
                                                <p className={classes.companyName}>Position, Company name</p>
                                            </div>
                                            <div className={classes.slider}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.imgDiv}></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}


export default CommentBlock