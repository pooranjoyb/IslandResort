import React from 'react'

function Room() {
    return (
        <>
            <div className='flex text-center my-4' id='rooms'>
                <p className="h2 text-primary fw-bold">Explore Our Rooms</p>
                <span>Where Luxury is Priority</span>
            </div>
            <div style={{justifyContent: "center", display: "flex"}}>
                <div id="carouselExampleCaptions" style={{ width: "60%" }} className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./rooms/room3.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block fw-bold">
                                <h5>Sample room</h5>
                                <p>Experience unparalleled luxury and stunning ocean views from this spacious suite, where comfort meets elegance</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./rooms/room2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block fw-bold">
                                <h5>Sample Room</h5>
                                <p>Indulge in the tranquility of this cozy room, featuring a private balcony and lush garden views, perfect for a peaceful retreat.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./rooms/room6.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block fw-bold">
                                <h5>Sample Room</h5>
                                <p>Step into a world of modern sophistication in this stylish room adorned with contemporary decor and state-of-the-art amenities</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./rooms/room4.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block fw-bold">
                                <h5>Sanple Room</h5>
                                <p>Escape to a tropical paradise in this beachfront villa, offering direct access to pristine sands and breathtaking sunsets</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./rooms/room5.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block fw-bold">
                                <h5>Sample Room</h5>
                                <p>Find your sanctuary in this charming cottage nestled amidst lush greenery, offering a cozy atmosphere and utmost privacy</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./rooms/room6.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block fw-bold">
                                <h5>Sample Room</h5>
                                <p>Unwind in this expansive penthouse suite, boasting panoramic city skyline vistas and an array of deluxe amenities for a lavish stay.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Room;