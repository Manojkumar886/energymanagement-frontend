import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { onListoneuserURLS } from './connect';


export const Listurldetails = () => {
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
                    <div className='col-lg-8 col-md-10 col-sm-12'>
                        <h1 className='text-center text-primary'>USER DETAILS</h1>
                        <table className='table table-striped table-primary'>
                            <tbody>
                                <thead>
                                    <tr>
                                        <th>TITLE</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        urls.map((data) =>
                                        (
                                            <>
                                                <tr>
                                                    <td>{data.title}</td>
                                                    <td><a href={`${data.url}`} target='_blank'>{data.url}</a></td>
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
        </>
    )
}