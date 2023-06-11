import React from 'react'
import Navbar from './Navbar'

function Booking() {
    return (
        <>
            <Navbar />
            <section className="mb-5 my-4" style={{ margin: "0 20rem" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-5">Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-5">Wanna Book a Trip? Fill the form and get available discounts</p>

                <div className="">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="FirstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="FirstName"/>
                        </div>
                        <div class="col-md-6">
                            <label for="LastName" class="form-label">Last 
                        Name</label>
                            <input type="text" class="form-control" id="LastName"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
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
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Checkout and Pay</button>
                        </div>
                    </form>
                </div>


            </section>
        </>
    )
}

export default Booking