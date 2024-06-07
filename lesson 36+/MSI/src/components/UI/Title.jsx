import classes from '../UI/UIstyles.module.scss'

export default function Title(props){
    const {children} = props

    return(
        <p className={classes.title}>{children}</p>
    )
}