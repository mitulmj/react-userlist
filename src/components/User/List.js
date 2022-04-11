import Card from "../UI/Card"
import classes from "./List.module.css"

const List = (props) => {
    return (
        <Card className={classes.users}>
            <ul >{
                props.lists.map((list) => (
                    
                        <li key={list.id}>Name: {list.user} <br/>
                        Age: {list.Age} <br/>
                        Gender: {list.gender} <br/>
                        Course: {list.course}</li>
                    
                )
            )
            }</ul>
        </Card>
    )
}

export default List