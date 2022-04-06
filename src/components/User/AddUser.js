import classes from 'Add.module.css';

const AddUser = () => {
    return (
       <form>
           <div className="form-control">
               <label htmlFor="name">User Name</label>
               <input id="name" type="text" />
           </div>
           <div className="form-control">
               <label htmlFor="age">Age</label>
               <input type="number" id="age" />
           </div>
           <div className="form-control">
               <label htmlFor="male">Male</label>
               <input type="radio" name="gender" value="Male" id="male"/>
               <label htmlFor="">Female</label>
               <input type="radio" name="gender" value="Female" id="female"/>
           </div>
           <div className="form-control">
               <select name="coursename" id="courseName" value>
                    <option value="PHP">PHP</option>
                    <option value="SQL">SQL</option>
                    <option value="Javascript">Javascript</option>
                    <option value=".NET">.NET</option>
               </select>
           </div>
       </form>
    )
}

export default AddUser