import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Add.module.css';

const AddUser = (props) => {
    const [user,setUser] = useState('');
    const [Age,setAge] = useState('');
    const [gender,setGender] = useState('Male');
    const [course,setCourse] = useState('PHP');

    const userChangeHandler = (e) =>{
        setUser(e.target.value);
    }
    const ageChangeHandler = (e) =>{
        setAge(e.target.value);
    }
    const genderChange = (e)=>{
        setGender(e.target.value)
    }
    const courseChange = (e)=>{
        setCourse(e.target.value);
    }

    const submitForm = (e) =>{
        e.preventDefault()
        const userObj = {
            id: Math.random()*10,
            user,
            Age,
            gender,
            course
        }
        props.getUser(userObj)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="name">User Name</label>
                    <input id="name" type="text" value={user} onChange={userChangeHandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={Age} onChange={ageChangeHandler}/>
                </div>
                <div className={`form-control ${classes.radio}`}>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value="Male" checked={gender === 'Male'} id="male" onChange={genderChange}/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value="Female" checked={gender=== 'Female'} id="female" onChange={genderChange}/>
                </div>
                <div className="form-control">
                    <select name="coursename" id="courseName" value={course}  onChange={courseChange}>
                            <option value="PHP">PHP</option>
                            <option value="SQL">SQL</option>
                            <option value="Javascript">Javascript</option>
                            <option value=".NET">.NET</option>
                    </select>
                </div>
                <Button type="submit">Submit</Button>
            </form>
       </Card>
    )
}

export default AddUser