import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function RemoveBooking() {

    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: FName + ' ' + LName,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate
        }

        const bookingCancelData = JSON.stringify(formData);

        console.log(bookingCancelData)

        try {
            const response = await fetch('http://localhost:8080/api/booking/cancel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: bookingCancelData,
            });

            if (response.ok) {
                alert('Booking Cancelled Successfully');
            } else {
                alert('Failed to Cancel Booking, Recheck your Information');
            }
        } catch (error) {
            console.error('Error Cancelling Booking', error);
        }
    };


  return (
    <>
    <Navbar />
            <section className="mb-2 my-2" style={{ margin: "0 10rem" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">Cancel Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-2">Sorry to hear about your cancellation</p>

                <div className="my-5">
                    <form className="row g-3 my-5" onSubmit={handleSubmit}>
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
                            <label for="inputDate4" className="form-label">Your Check In Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setCheckInDate(e.target.value)} required/>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <label for="inputDate4" className="form-label">Your Check Out Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setCheckOutDate(e.target.value)} required/>
                        </div>
                        
                        <div className="mx-auto text-center">
                            <button type='submit' className="my-5 btn btn-primary">Cancel Booking</button>
                        </div>
                    </form>
                </div>


            </section>
            <Footer/>
        </>
  )
}

export default RemoveBooking