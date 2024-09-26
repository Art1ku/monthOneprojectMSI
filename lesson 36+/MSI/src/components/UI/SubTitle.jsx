import classes from './UIstyles.module.scss'

export default function SubTitle(props){
    const {children} = props

    return(
        <p className={classes.subTitle}>{children}</p>
    )
}