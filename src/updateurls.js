import { useEffect, useState } from "react"
import { onAddurls, onListoneuser, onUpdateurls, onsingleurl } from "./connect";
import { useNavigate, useParams } from "react-router";

export const Updatetitle = () => {
    const navi = useNavigate();

    const [urldetails, setUrldetails] = useState({})

    const { title } = useParams();

    const track = (getdata) => {
        // setUrldetails(getdata.target.value)
        const { name, value } = getdata.target;
        setUrldetails((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })
    }
    const [oneuser, setOneuser] = useState({});

    const getsingleurl = async () => {
        const t = await onsingleurl(title);
        setUrldetails(t.data);
    }

    const callreadingvalue = async () => {
        const t = await onListoneuser();
        setOneuser(t.data);
    }

    useEffect(() => {
        callreadingvalue();
    }, [])


    useEffect(() => {
        getsingleurl();
    }, [])


    const updateurl = async () => {
        urldetails.userdetails = oneuser;
        alert(JSON.stringify(urldetails));
        const t = await onUpdateurls(urldetails);
        navi("/listurls")
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className='form-group col-5 mt-5 bg-info'>
                    <h1 className='text-center'>UPDATE YOUR LINK</h1>
                    <div className='forn-group'>
                        <label className='form-label fw-bold'>TITLE</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='enter your title'
                            onChange={track}
                            name='title'
                            value={urldetails.title}
                        />
                    </div>
                    <div className='mt-5'>
                        <label className='form-label fw-bolder'>URL</label>
                        <input
                            type='text'
                            placeholder='enter your URL'
                            onChange={track}
                            className='form-control text-info'
                            name='url'
                            value={urldetails.url}

                        />
                    </div>
                    <div className=' row justify-content-center mt-5 mb-5'>
                        <button className='btn btn-outline-warning col-5 fw-bold'
                            onClick={() => {
                                updateurl();
                            }}>UPDATE</button>
                    </div>
                </div>
            </div>
        </>
    )
}