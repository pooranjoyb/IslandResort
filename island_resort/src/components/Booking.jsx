import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Booking() {

    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [Address1, setAddress1] = useState('')
    const [Address2, setAddress2] = useState('')
    const [City, setCity] = useState('')
    const [Zip, setZip] = useState('')
    const [State, setState] = useState('')
    const [Accommodation, setAccommodation] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: FName + ' ' + LName,
            address: Address1 + '/' + Address2,
            city: City,
            state: State,
            zip: Zip,
            accommodation: Accommodation,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate
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
            <section className="mb-2 my-2" style={{ margin: "0 10rem" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-2">Wanna Book a Trip? Fill the form and get available discounts</p>
                <b>
                    <p className="text-center w-responsive mx-auto mb-5">Already Booked and Want to Update your Details? <br /><a href="/booking/update">CLICK HERE</a></p>
                </b>


                <div className="">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="FirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="FirstName" name='fname' onChange={(e) => setFName(e.target.value)} required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="LastName" className="form-label">Last
                                Name</label>
                            <input type="text" className="form-control" id="LastName" name='lname' onChange={(e) => setLName(e.target.value)} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='add1' onChange={(e) => setAddress1(e.target.value)} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='add2' onChange={(e) => setAddress2(e.target.value)} required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" onChange={(e) => setState(e.target.value)} required>
                                <option selected>Choose...</option>
                                <option>Delhi</option>
                                <option>Karnataka</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" onChange={(e) => setZip(e.target.value)} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAccomodation" className="form-label">Accomodation</label>
                            <select id="inputAccomodation" className="form-select" onChange={(e) => setAccommodation(e.target.value)} required>
                                <option selected>Choose...</option>
                                <option>Single Bed Air Conditioner</option>
                                <option>Dual Bed Air Conditioner</option>
                                <option>Single Bed Non Air Conditioner</option>
                                <option>Dual Bed Non Air Conditioner</option>
                            </select>
                        </div>
                        <div className="col-md-6 onChangemx-auto">
                            <label htmlFor="inputDate4" className="form-label">Your Check In Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setCheckInDate(e.target.value)} required/>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <label htmlFor="inputDate4" className="form-label">Your Check Out Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setCheckOutDate(e.target.value)} required/>
                        </div>

                        <div className="mx-auto my-5 text-center">
                            <button type='submit' className="btn btn-primary">Checkout and Book</button>
                        </div>
                    </form>
                </div>


            </section>

            <p className="text-center w-responsive mx-auto mb-5 mt-5">
                <b>

                    Want to Review your Bookings? <br /><a href="/booking/review">CLICK HERE</a>
                </b>
            </p>

            <p className="text-center w-responsive mx-auto mb-2 my-5">Want to Cancel your Booking ?
                <a href="/booking/cancel">
                    <button type='submit' className="mx-3 btn btn-primary">Cancel Booking</button>
                </a>
            </p>

            <Footer />
        </>
    )
}

export default Booking