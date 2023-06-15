import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div className="container-fluid">
                    <a className="navbar-brand text-primary fw-bold bg-white px-2 rounded" href={`/`}>
                    <i className="fa-solid fa-house"></i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-bold">
                            <li className="nav-item">
                                <a className=" text-primary nav-link" aria-current="page" href={`/`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-primary nav-link" aria-current="page" href={`/#rooms`}>Rooms</a>
                            </li>
                            <li className="nav-item">
                                <a className=" text-primary nav-link" aria-current="page" href={`/#kitchen`}>Food</a>
                            </li>
                            <li className="nav-item ">
                                <a className=" text-primary nav-link" href={`/contact`}>Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-primary" type="submit"><a href={`/booking`} style={{textDecoration: "none", color: "white"}}>BOOK NOW</a></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar