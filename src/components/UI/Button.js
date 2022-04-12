import classes from './Button.module.css'

const Button = (props) => {
    // const clickButton =()=>{
    //     props.onClickbtn()
    // }
    
    return (
        <button onClick={props.onClickbtn} className={classes.button} type={props.type}>{props.children}</button>
    )
}

export default Button