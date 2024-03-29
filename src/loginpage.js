import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
import { Loginperformance } from './connect';
import { Registerpage } from './registerpage';

export const Loginpage = () => {


    const [createview, setCreateview] = useState(false);
    const [user, setUser] = useState({
        "username": "",
        "password": ""
    })
    const onGet = (gettinginput) => {
        const { name, value } = gettinginput.target;

        setUser((temp) => {
            return {
                ...temp,
                [name]: value
            }
        })
    }

    const onlogin = async () => {
        await Loginperformance(user);
        window.location.assign("/");
    }
    return (
        <>
            {
                (createview) ?
                    <>
                        <Registerpage />
                    </>
                    :
                    <>
                        <div className='row justify-content-center'>
                            <div className='col-lg-6 col-md-10 col-sm-12'>
                                <h1 className='text-center'>ENERGY MANAGEMENT</h1>
                                <div className='row'>
                                    <div className='card col-4'>
                                        <img className='card-img' src='./energymanagement_logo.png' />
                                    </div>
                                    <div className=' card col '>
                                        <div className='mt-4 ms-2'>
                                            <div>
                                                <h5>LOGININ
                                                    <div className='float-end'>
                                                        <i class="bi bi-facebook me-3 bg-light"></i>
                                                        <i class="bi bi-instagram"></i>
                                                    </div>
                                                </h5>
                                            </div>
                                            <div className='form-group mt-4'>
                                                <label className='form-label '>USERNAME</label>
                                                <input type='text'
                                                    className='form-control mt-2'
                                                    name='username'
                                                    onChange={onGet}
                                                    value={user.username}
                                                    placeholder='ENTER YOUR REGISTER ID' />
                                            </div>
                                            <div className='form-group mt-4'>
                                                <label className='form-label'>PASSWORD</label>
                                                <input type='password'
                                                    className='form-control mt-2'
                                                    name='password'
                                                    onChange={onGet}
                                                    value={user.password}
                                                    placeholder='ENTER YOU PASSWORD' />
                                            </div>
                                            <div className='row justify-content-center  mt-4'>
                                                <button className='btn btn-warning col-10'
                                                    onClick={onlogin}>LOGIN </button>
                                            </div>
                                            <div className='float-end mt-2'>
                                                <button className='btn btn-outline-info'>
                                                    <a onClick={() => {
                                                        setCreateview(true);
                                                    }}>Register</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}