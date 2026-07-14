import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewLab = () => {
    const[data,changeData]= useState([])

    const fetchdata = () => {
        axios.get("http://localhost:3000/view-lab").then(
    (response) => {
        changeData(response.data)
    }
).catch()
    }

    useEffect(
        ()=>{
            fetchdata()
        }
    )
       
    return (
        <div>

            <div className="container mt-4">
                <div className="row g-4">
                    {data.map(
                        (value,index)=>
                        {return(
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Lab App</h5>
                                <p><b>ID:</b>{value.id}</p>
                                <p><b>Name:</b>{value.name}</p>
                                <p><b>Dept:</b>{value.dept}</p>
                                <p><b>Sem:</b>{value.sem}</p>
                                <p><b>course:</b>{value.course}</p>
                                <p><b>SysNo:</b>{value.sysNo}</p>
                                <p><b>LogTime:</b>{value.logTime}</p>
                                <p><b>LogoutTime:</b>{value.logoutTime}</p>
                                <p><b>Date:</b>{value.date}</p>
                            </div>
                        </div>
                    </div>
                        )}
                    )}

                </div>
            </div>
        </div>
    );
};

export default ViewLab