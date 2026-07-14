import React, { useState } from 'react'
import axios from 'axios'


const AddLab = () => {
    const[input,changeInput]=useState(
        {   id: "",
            name: "",
            dept: "",
            sem: "",
            course: "",
            sysNo: "",
            logTime: "",
            logoutTime: "",
            date: "",
        })

        const inputHandler = event =>{
            changeInput({...input,[event.target.name]:event.target.value})
         }

         const readvalue=()=>{

         console.log(input)
         axios.post("http://localhost:3000/add-lab",input).then(

         (response)=>{

         console.log(response.data)
         }
 ).catch() 
 }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="num" className="form-control" name="donor_name" value={input.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="number" className="form-control" name="age" value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">dept</label>
                             <input type="number" className="form-control" name="gender" value={input.dept} onChange={inputHandler}/>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">sem</label>
                             <input type="number" className="form-control" name="blood_group" value={input.sem} onChange={inputHandler}/>
    
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course</label>
                            <input type="num" className="form-control" name="phone" value={input.course} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">sysNo</label>
                            <input type="email" className="form-control" name="email" value={input.sysNo} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">logTime</label>
                            <input type="text" className="form-control" name="city" value={input.logTime} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">logoutTime</label>
                            <input type="text" className="form-control" name="weight_kg" value={input.logoutTime} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">date</label>
                            <input type="date" name="" id="" className="form-control" name="last_donation_date" value={input.date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddLab