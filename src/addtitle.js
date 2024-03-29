export const Addtitle = () => {
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
                            name='title' />
                    </div>
                    <div className='mt-5'>
                        <label className='form-label fw-bolder'>URL</label>
                        <input
                            type='text'
                            placeholder='enter your URL'
                            className='form-control text-info'
                            name='url'
                        />
                    </div>
                    <div className=' row justify-content-center mt-5 mb-5'>
                        <button className='btn btn-outline-warning col-5 fw-bold'>ADD</button>
                    </div>
                </div>
            </div>
        </>
    )
}