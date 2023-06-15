import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function UpdateBooking() {

    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [bookingData, setBookingData] = useState(null);


    //updated vals

    const [newFName, setnewFName] = useState('')
    const [newLName, setnewLName] = useState('')
    const [newAddress1, setnewAddress1] = useState('')
    const [newAddress2, setnewAddress2] = useState('')
    const [newCity, setnewCity] = useState('')
    const [newZip, setnewZip] = useState('')
    const [newState, setnewState] = useState('')
    const [newAccommodation, setnewAccommodation] = useState('')
    const [newcheckInDate, setnewCheckInDate] = useState('')
    const [newcheckOutDate, setnewCheckOutDate] = useState('')

    const validate = async (e) => {
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
                alert("Invalid Credentials")
            }
            else{
                console.log(bookingData)
                setBookingData(data);
            }
        } catch (error) {
            console.error('Error Getting Response', error);
        }
    };


    const updateData = async (e) => {
        e.preventDefault();

        const formData = {
            name: FName + ' ' + LName,
            address: newAddress1 + '/' + newAddress2,
            city: newCity,
            state: newState,
            zip: newZip,
            accommodation: newAccommodation,
            checkInDate: newcheckInDate,
            checkOutDate: newcheckOutDate
        }

        try {
            const response = await fetch('http://localhost:8080/api/booking/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (response.ok) {
                alert('Data Updated Successfully');
            } else {
                alert('Failed to update Information');
            }
        } catch (error) {
            console.error('Error Getting Response', error);
        }
    };

    return (
        <>
            <Navbar />
            <section className="mb-2 my-2" style={{ margin: "0 10rem" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-4">UPDATE Bookings</h2>
                <p className="text-center w-responsive mx-auto mb-2">Update your previous Information with the new ones</p>

                <h5 className="h1-responsive font-weight-bold text-center my-5">Enter Your Old Details</h5>
                <div className="">
                    <form className="row g-3" onSubmit={validate}>
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
                        <div className="mx-auto text-center my-5">
                            <button type='submit' className="btn btn-primary">Validate</button>
                        </div>
                    </form>
                </div>


            </section>

            {bookingData ? (
                <section className="mb-2 my-2" style={{ margin: "0 10rem" }}>

                <h5 className="h1-responsive font-weight-bold text-center my-5">Enter Your New Details</h5>
                <div className="">
                    <form className="row g-3" onSubmit={updateData}>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name='add1' onChange={(e) => setnewAddress1(e.target.value)} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='add2' onChange={(e) => setnewAddress2(e.target.value)} required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" onChange={(e) => setnewCity(e.target.value)} required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" onChange={(e) => setnewState(e.target.value)} required>
                                <option selected>Choose...</option>
                                <option>Delhi</option>
                                <option>Karnataka</option>
                                <option>Uttar Pradesh</option>
                                <option>West Bengal</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" onChange={(e) => setnewZip(e.target.value)} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAccomodation" className="form-label">Accomodation</label>
                            <select id="inputAccomodation" className="form-select" onChange={(e) => setnewAccommodation(e.target.value)} required>
                                <option selected>Choose...</option>
                                <option>Single Bed Air Conditioner</option>
                                <option>Dual Bed Air Conditioner</option>
                                <option>Single Bed Non Air Conditioner</option>
                                <option>Dual Bed Non Air Conditioner</option>
                            </select>
                        </div>
                        <div className="col-md-6 mx-auto">
                            <label htmlFor="inputDate4" className="form-label">Your Check In Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setnewCheckInDate(e.target.value)} required />
                        </div>
                        <div className="col-md-6 mx-auto">
                            <label htmlFor="inputDate4" className="form-label">Your Check Out Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="dd/mm/yyyy" min="1930-01-01" max="2030-01-01" onChange={(e) => setnewCheckOutDate(e.target.value)} required/>
                        </div>

                        <div className="mx-auto text-center my-5">
                            <button type='submit' className="btn btn-primary">Update New Information</button>
                        </div>
                    </form>
                </div>


            </section>
            
            ) : null}
            

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

export default UpdateBooking