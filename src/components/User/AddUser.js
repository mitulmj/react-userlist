import { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal.js';
import classes from './Add.module.css';

const AddUser = (props) => {
    const userRefs = useRef();
    const ageRefs = useRef();
    const maleRefs = useRef('Male');
    const femaleRefs = useRef('Female');
    const courseRefs = useRef();
    // const [user,setUser] = useState('');
    // const [Age,setAge] = useState(0);
    // const [gender,setGender] = useState('Male');
    // const [course,setCourse] = useState('PHP');
    const [error,setError] = useState();

    // const userChangeHandler = (e) =>{
    //     setUser(e.target.value);
    // }
    // const ageChangeHandler = (e) =>{
    //     setAge(e.target.value);
    // }
    // const genderChange = (e)=>{
    //     setGender(e.target.value)
    // }
    // const courseChange = (e)=>{
    //     setCourse(e.target.value);
    // }
    const closeModal = () =>{
        setError(null);
    }
    const submitForm = (e) =>{
        e.preventDefault()
        const user = userRefs.current.value;
        const Age = ageRefs.current.value;
        const course = courseRefs.current.value;
        let gender;
        if(maleRefs.current.checked){
            gender = maleRefs.current.defaultValue;
        }else{
            gender = femaleRefs.current.defaultValue;
        }
       
        if(user.trim().length === 0 ){
           setError({
               title: "Invalid Input",
               message: "Please Enter Valid Input"
           })
           return
        }
        if(Age < 1){
            setError({
                title: "Invalid Age",
                message: "Please Enter Valid Age"
            })
            return
        }
        const userObj = {
            id: Math.random()*10,
            user,
            Age,
            gender,
            course
        }
        props.getUser(userObj)
        // setUser('')
        // setAge(0)
        // setGender('Male')
        // setCourse('PHP')
        userRefs.current.value= '';
        ageRefs.current.value ='';
        courseRefs.current.value = 'PHP';
        
    }
    return (
        <>
        {error && <ErrorModal close={closeModal} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="name">User Name</label>
                    <input id="name" type="text"  ref={userRefs}/>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age"  ref={ageRefs}/>
                </div>
                <div className={`form-control ${classes.radio}`}>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value="Male" checked={maleRefs.current.checked}  id="male"  ref={maleRefs}/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value="Female" checked={femaleRefs.current.checked}   id="female" ref={femaleRefs}/>
                </div>
                <div className="form-control">
                    <select name="coursename" id="courseName"  ref={courseRefs}>
                            <option value="PHP">PHP</option>
                            <option value="SQL">SQL</option>
                            <option value="Javascript">Javascript</option>
                            <option value=".NET">.NET</option>
                    </select>
                </div>
                <Button type="submit">Submit</Button>
            </form>
       </Card>
       </>
    )
}

export default AddUser