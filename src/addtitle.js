import { useEffect, useState } from "react"
import { onAddurls, onListoneuser } from "./connect";
import { useNavigate } from "react-router";

export const Addtitle = () => {
    const navi = useNavigate();

    const [urldetails, setUrldetails] = useState({
        "title": "",
        "url": "",
        "userdetails": {}
    })
    const [oneuser, setOneuser] = useState({});

    const callreadingvalue = async () => {
        const t = await onListoneuser();
        setOneuser(t.data);
    }

    useEffect(() => {
        callreadingvalue();
    }, [])

    const onGet = (getdata) => {
        // setUrldetails(getdata.target.value)
        const { name, value } = getdata.target;
        setUrldetails((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })

    }

    const addurl = async () => {

        urldetails.userdetails = oneuser;
        alert(urldetails);
        const t = await onAddurls(urldetails)
        navi("/listurls")
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className='form-group col-5 mt-5 bg-info'>
                    <h1 className='text-center'>REGISTER YOUR LINK</h1>
                    <div className='forn-group'>
                        <label className='form-label fw-bold'>TITLE</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='enter your title'
                            name='title'
                            value={urldetails.title}
                            onChange={onGet} />
                    </div>
                    <div className='mt-5'>
                        <label className='form-label fw-bolder'>URL</label>
                        <input
                            type='text'
                            placeholder='enter your URL'
                            className='form-control text-info'
                            name='url'
                            value={urldetails.url}
                            onChange={onGet}
                        />
                    </div>
                    <div className=' row justify-content-center mt-5 mb-5'>
                        <button className='btn btn-outline-warning col-5 fw-bold'
                            onClick={() => {
                                addurl();
                            }}>ADD</button>
                    </div>
                </div>
            </div>
        </>
    )
}