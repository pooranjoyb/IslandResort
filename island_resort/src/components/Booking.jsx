import React from 'react'
import Navbar from './Navbar'

function Booking() {
    return (
        <>
            <Navbar />
            <section className="mb-5 my-2" style={{ margin: "0 10rem" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-5">Wanna Book a Trip? Fill the form and get available discounts</p>

                <div className="">
                    <form className="row g-3" action=''>
                        <div className="col-md-6">
                            <label htmlFor="FirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="FirstName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="LastName" className="form-label">Last
                                Name</label>
                            <input type="text" className="form-control" id="LastName" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>Delhi</option>
                                <option>Karnataka</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mx-4" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Single Room AC</label>
                            <input className="form-check-input mx-4" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Single Room Non AC</label>
                            <input className="form-check-input mx-4" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Double Room AC</label>
                            <input className="form-check-input mx-4" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Double Room Non AC</label>
                        </div>
                        <label htmlFor="date" className="col-1 col-form-label">Checkin Date</label>
                        <div className="col-5">
                            <div className="input-group date" id="datepicker">
                                <input type="text" className="form-control" id="date" />
                                <span className="input-group-append">
                                    <span className="input-group-text bg-light d-block">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <label htmlFor="date" className="col-1 col-form-label">Checkout Date</label>
                        <div className="col-5">
                            <div className="input-group date" id="datepicker">
                                <input type="text" className="form-control" id="date" />
                                <span className="input-group-append">
                                    <span className="input-group-text bg-light d-block">
                                        <i className="fa fa-calendar"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type='submit' className="btn btn-primary">Checkout and Pay</button>
                        </div>
                    </form>
                </div>


            </section>
        </>
    )
}

export default Booking