import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    return (
        <>
        <Navbar/>
            <section className="mb-5 my-4" style={{margin: "0 20rem"}}>
                <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="" method="POST">

                            <div className="row">


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" />
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label for="email" className="">Your email</label>
                                    </div>
                                </div>


                            </div>

                            <div className="row my-4">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label for="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-4">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                        <div className="text-center text-light">
                            <a className="btn disabled btn-primary">Send</a>
                        </div>
                        </form>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Delhi, India</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 91 4455667788</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>webpage.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    )
}

export default Contact