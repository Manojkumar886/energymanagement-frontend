import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Container, Nav, NavItem, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"

export const Mainpage = () => {
    return (
        <>
            <Navbar expand='lg' variant='dark' bg='dark'>
                <Container>
                    <NavbarBrand href='/'>EM DATA<i class="bi bi-power ms-1"></i>
                    </NavbarBrand>
                    <NavbarToggle />
                    <NavbarCollapse>
                        <Nav>
                            <Nav.Link href='addtitle'>ADD_TITLE</Nav.Link>
                            <Nav.Link href='listurls'>LIST_URL</Nav.Link>
                            <Nav.Link href='listuserdetails'>USERDETAILS</Nav.Link>
                        </Nav>
                        <div className='d-flex ms-5'>
                            <div className='row justify-content-end'>
                                <button className=' col- btn btn-outline-danger'
                                    onClick={
                                        () => {
                                            sessionStorage.removeItem("auth")
                                            sessionStorage.removeItem("user");
                                            window.location.assign("/");
                                        }
                                    }>LOGOUT</button>
                            </div>
                        </div>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            {/* <div style={{ backgroundColor: 'green', height: '772px', width: '1590px' }}>
                <div className='row justify-content-center'>
                    <h1 className='text-center'>SOME TITLE
                        <span className='float-end'>
                            <button className='btn btn-outline-primary'
                                onClick={
                                    () => {
                                        sessionStorage.removeItem("auth")
                                        sessionStorage.removeItem("user");
                                        window.location.assign("/");
                                    }
                                }>LOGOUT</button>
                        </span></h1>
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
                </div >
            </div > */}
        </>
    )
}