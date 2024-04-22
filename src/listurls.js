import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { onListoneuserURLS, removeurl } from './connect';


export const Listurldetails = () => {

    const navi = useNavigate();
    const [urls, setUrls] = useState([]);

    const callreadingurls = async () => {
        const t = await onListoneuserURLS()
        setUrls(t.data)
    }

    useEffect(() => {
        callreadingurls();
    }, [])
    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-10 col-sm-12 '>
                        <h1 className='text-center text-primary'>LIST URL DETAILS</h1>
                        <div className='table-responsive' style={{ overflowX: 'auto', letterSpacing: '1px' }}>
                            <table className='table table-hover table-striped  text-nowrap  table-bordered'>
                                <tbody>
                                    <thead>
                                        <tr className='d-flex justify-content-start'>
                                            <th className='ms-5'>TITLE</th>
                                            <th className='ms-5'>URL</th>
                                            <th className='ms-5'>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            urls.map((data) =>
                                            (
                                                <>
                                                    <tr className='d-flex justify-content-start'>
                                                        <td className='ms-5'>{data.title}</td>
                                                        <td className='ms-5'><a href={`${data.url}`} target='_blank'>{data.url}</a></td>
                                                        <td className=''>
                                                            <button className='btn btn-outline-warning'
                                                            ><a href={`editurls/${data.title}`}>UPDATE</a></button>
                                                            <button className='btn btn-outline-danger'
                                                                onClick={async () => {
                                                                    const temp = await removeurl(data.title);
                                                                    alert(temp.data);
                                                                    navi("/listurls");
                                                                }}>DELETE</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}