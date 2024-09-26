import classes from './Container.module.scss'

export default function Container(props) {
    const {children} = props

    return(
        <div className={classes.container}>
            {children}
        </div>
    )

}