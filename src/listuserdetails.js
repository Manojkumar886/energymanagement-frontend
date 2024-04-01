import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { onListoneuser } from './connect';

export const Listuserdetails = () => {

    const [userdetails, setUserdetails] = useState({});

    const callreadingvalue = async () => {
        const t = await onListoneuser();
        setUserdetails(t.data);
    }

    useEffect(() => {
        callreadingvalue();
    }, [])
    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-10 col-sm-12'>
                        <h1 className='text-center text-primary'>USER DETAILS</h1>
                        <table className='table table-striped table-primary'>
                            <tbody>
                                <tr>
                                    <td>USERNAME</td>
                                    <td>{userdetails.username}</td>
                                </tr>
                                <tr>
                                    <td>EMAILID</td>
                                    <td>{userdetails.emailid}</td>
                                </tr>
                                <tr>
                                    <td>CONTACT NO</td>
                                    <td>{userdetails.contactno}</td>
                                </tr>
                                <tr>
                                    <td>ROOMNO</td>
                                    <td>{userdetails.roomno}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}