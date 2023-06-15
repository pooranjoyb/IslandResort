import React from 'react'
import '../Testimonial.css'
function Testimonials() {
    return (
        <>
            <div className="container-xl">
                <div className="row">
                    <div className="col-sm-12">
                        <h2><b>Testimonials</b></h2>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="media">

                                                <div className="media-body h6 text-body">
                                                    <div className="testimonial">
                                                        <p>Our stay at the resort was nothing short of magical! From the breathtaking views to the impeccable service, every moment felt like a dream. We can't wait to come back!</p>
                                                        <p className="overview"><b>Paula Wilson</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="media">

                                                <div className="media-body h6 text-body">
                                                    <div className="testimonial">
                                                        <p>The resort exceeded our expectations in every way. The luxurious accommodations, world-class amenities, and friendly staff made our vacation truly unforgettable. We highly recommend it!</p>
                                                        <p className="overview"><b>Antonio Moreno</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="media">

                                                <div className="media-body h6 text-body">
                                                    <div className="testimonial">
                                                        <p>This resort is a hidden gem! The tranquil atmosphere, beautiful surroundings, and top-notch facilities provided the perfect escape from the daily hustle and bustle. We left feeling rejuvenated and relaxed.</p>
                                                        <p className="overview"><b>Michael Holz</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="media">

                                                <div className="media-body h6 text-body">
                                                    <div className="testimonial">
                                                        <p>As newlyweds, we couldn't have asked for a more romantic honeymoon destination. The resort's secluded beach, candlelit dinners, and luxurious suite made our time together incredibly special. It was pure paradise!</p>
                                                        <p className="overview"><b>Mary Saveley</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="media">

                                                <div className="media-body h6 text-body">
                                                    <div className="testimonial">
                                                        <p>We've traveled to many resorts, but this one truly stood out. The attention to detail, from the exquisite decor to the personalized service, made us feel like VIP guests. We were pampered from the moment we arrived.</p>
                                                        <p className="overview"><b>Martin Sommer</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="media">

                                                <div className="media-body h6 text-body">
                                                    <div className="testimonial">
                                                        <p>As newlyweds, we couldn't have asked for a more romantic honeymoon destination. The resort's secluded beach, candlelit dinners, and luxurious suite made our time together incredibly special. It was pure paradise!</p>
                                                        <p className="overview"><b>John Williams</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials