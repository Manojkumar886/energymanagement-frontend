import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { onCreate } from './connect'
import { useState } from 'react'

export const Registerpage = () => {


    const [energydetails, setEnergydetails] = useState({
        "username": "",
        "password": "",
        "emailid": "",
        "contactno": 0,
        "roomno": ""
    })


    const getinputvalues = (temp) => {
        const { name, value } = temp.target;

        setEnergydetails((myvalues) => {
            return {
                ...myvalues,
                [name]: value
            }
        })
    }
    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-10 col-sm-12'>
                    <h1>ENERGY MANAGEMENT REGISTER PAGE</h1>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col'>
                                <label className='form-label'>USERNAME</label>
                                <input className='form-control'
                                    type='text'
                                    place="enter your username/Registerno"
                                    name='username'
                                    onChange={getinputvalues}
                                    value={energydetails.username} />
                            </div>
                            <div className='col'>
                                <label className='form-label'>PASSWORD</label>
                                <input
                                    className='form-control'
                                    type='password'
                                    name='password'
                                    onChange={getinputvalues}
                                    value={energydetails.password}
                                />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>EMAIL ID</label>
                            <input
                                placeholder='Enter your EMAIL id'
                                type='email'
                                className='form-control'
                                name='emailid'
                                onChange={getinputvalues}
                                value={energydetails.emailid} />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>TELEPHONE NO</label>
                            <input
                                placeholder='Enter your Aadhar linked Number'
                                type='tel'
                                className='form-control'
                                name='contactno'
                                onChange={getinputvalues}
                                value={energydetails.contactno} />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>ROOM NO</label>
                            <input
                                placeholder='Enter your Room no'
                                type='text'
                                className='form-control'
                                name='roomno'
                                onChange={getinputvalues}
                                value={energydetails.roomno} />
                        </div>
                        <div className='row justify-content-center'>
                            <button className='btn btn-outline-success'
                                onClick={
                                    async () => {
                                        const t = await onCreate(energydetails);
                                        alert(energydetails.username + " has beenadded successfully")
                                        window.location.assign("/");
                                    }
                                }>REGISTER</button>
                            <button className='btn btn-outline-danger'>CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}