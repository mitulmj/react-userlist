import AddUser from "./components/User/AddUser";
import './app.css';
import { useState } from "react";
const App = () => {
    const [user,setUser] = useState([])
    const addUser = (data) =>{
        setUser((previosState) => {return [data,...previosState]})
        console.log(user)
    }
    return(
        <div>
            <AddUser getUser={addUser}/>
        </div>
    )
}

export default App;