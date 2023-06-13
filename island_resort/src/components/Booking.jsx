import React, { useState } from 'react'
import Navbar from './Navbar'

function Booking() {

    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [Address1, setAddress1] = useState('')
    const [Address2, setAddress2] = useState('')
    const [City, setCity] = useState('')
    const [Zip, setZip] = useState('')
    const [State, setState] = useState('')
    const [Accomodation, setAccomodation] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: FName + ' ' + LName,
            address: Address1 + '/' + Address2,
            city: City,
            state: State,
            zip: Zip,
            accomodation: Accomodation
        }

        const bookingData = JSON.stringify(formData);

        console.log(bookingData)

        try {
            const response = await fetch('http://localhost:8080/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: bookingData,
            });

            if (response.ok) {
                alert('Room Booked successfully');
            } else {
                alert('Failed to submit booking');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <>
            <Navbar />
            <section className="mb-5 my-2" style={{ margin: "0 10rem" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-5">Wanna Book a Trip? Fill the form and get available discounts</p>

                <div className="">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="FirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="FirstName" name='fname' onChange={(e) => setFName(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="LastName" className="form-label">Last
                                Name</label>
                            <input type="text" className="form-control" id="LastName" name='lname' onChange={(e) => setLName(e.target.value)}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='add1' onChange={(e) => setAddress1(e.target.value)}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='add2' onChange={(e) => setAddress2(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" onChange={(e) => setState(e.target.value)}>
                                <option selected>Choose...</option>
                                <option>Delhi</option>
                                <option>Karnataka</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" onChange={(e) => setZip(e.target.value)}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAccomodation" className="form-label">Accomodation</label>
                            <select id="inputAccomodation" className="form-select" onChange={(e) => setAccomodation(e.target.value)}>
                                <option selected>Choose...</option>
                                <option>Single Bed Air Conditioner</option>
                                <option>Dual Bed Air Conditioner</option>
                                <option>Single Bed Non Air Conditioner</option>
                                <option>Dual Bed Non Air Conditioner</option>
                            </select>
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