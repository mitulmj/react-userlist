import classes from './Button.module.css'

const Button = (props) => {
    const clickButton =()=>{
        props.onClick()
    }
    
    return (
        <button onClick={clickButton} className={classes.button} type={props.type}>{props.children}</button>
    )
}

export default Button