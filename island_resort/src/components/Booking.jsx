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
                    <form class="row g-3" action=''>
                        <div class="col-md-6">
                            <label for="FirstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="FirstName" />
                        </div>
                        <div class="col-md-6">
                            <label for="LastName" class="form-label">Last
                                Name</label>
                            <input type="text" class="form-control" id="LastName" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>Delhi</option>
                                <option>Karnataka</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input mx-4" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="form-check-label" for="inlineCheckbox1">Single Room AC</label>
                            <input class="form-check-input mx-4" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Single Room Non AC</label>
                            <input class="form-check-input mx-4" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Double Room AC</label>
                            <input class="form-check-input mx-4" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" for="inlineCheckbox2">Double Room Non AC</label>
                        </div>
                        <label for="date" class="col-1 col-form-label">Checkin Date</label>
                        <div class="col-5">
                            <div class="input-group date" id="datepicker">
                                <input type="text" class="form-control" id="date" />
                                <span class="input-group-append">
                                    <span class="input-group-text bg-light d-block">
                                        <i class="fa fa-calendar"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <label for="date" class="col-1 col-form-label">Checkout Date</label>
                        <div class="col-5">
                            <div class="input-group date" id="datepicker">
                                <input type="text" class="form-control" id="date" />
                                <span class="input-group-append">
                                    <span class="input-group-text bg-light d-block">
                                        <i class="fa fa-calendar"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type='submit' class="btn btn-primary">Checkout and Pay</button>
                        </div>
                    </form>
                </div>


            </section>
        </>
    )
}

export default Booking