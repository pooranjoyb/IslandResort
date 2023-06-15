import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ReadBooking() {
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [bookingData, setBookingData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: FName + ' ' + LName,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate
        }


        try {
            const response = await fetch('http://localhost:8080/api/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.name == null){
                setBookingData(null)
                alert("Please Recheck the details")
            }
            else{
                console.log(bookingData)
                setBookingData(data);
            }
        } catch (error) {
            console.error('Error Getting Response', error);
        }
    };


    return (
        <>
            <Navbar />
            <section className="mb-2 my-2" style={{ margin: "0 10rem" }}>

                <h2 className="h1-responsive font-weight-bold text-center my-4">REVIEW Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-2">Review your Booking Information</p>

                <div className="my-5">
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
                        <div className="col-md-6 mx-auto">
                            <label htmlFor="inputDate4" className="form-label">Your Check In Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setCheckInDate(e.target.value)} required/>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <label htmlFor="inputDate4" className="form-label">Your Check Out Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setCheckOutDate(e.target.value)} required/>
                        </div>
                        <div className="mx-auto text-center">
                            <button type='submit' className="my-4 btn btn-primary">Review</button>
                        </div>
                    </form>
                </div>


                {bookingData ? (
                    <div className='mx-auto'>
                        <h3>User Information:</h3>
                        <p><b>Name:</b> {bookingData.name}</p>
                        <p><b>Address:</b> {bookingData.address}</p>
                        <p><b>City:</b> {bookingData.city}</p>
                        <p><b>State:</b> {bookingData.state}</p>
                        <p><b>Zip:</b> {bookingData.zip}</p>
                        <p><b>Accomodation:</b> {bookingData.accommodation}</p>
                        <p><b>Checkin Date:</b> {bookingData.checkInDate}</p>
                        <p><b>Checkout Date:</b> {bookingData.checkOutDate}</p>
                    </div>
                ) : <h3>No Details found</h3>}
            </section>
            <b>
                <p className="text-center w-responsive mx-auto mb-5">Already Booked and Want to Update your Details? <br /><a href="/booking/update">CLICK HERE</a></p>
            </b>

            <p className="text-center w-responsive mx-auto mb-2 my-5">Want to Cancel your Booking ?
                <a href="/booking/cancel">
                    <button type='submit' className="mx-3 btn btn-primary">Cancel Booking</button>
                </a>
            </p>

            
            <Footer />
        </>
    );
};

export default ReadBooking