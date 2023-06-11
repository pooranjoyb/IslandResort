import React from 'react'
import '../Testimonial.css'
function Testimonials() {
    return (
        <>
            <div class="container-xl">
                <div class="row">
                    <div class="col-sm-12">
                        <h2><b>Testimonials</b></h2>
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="media">

                                                <div class="media-body h6 text-body">
                                                    <div class="testimonial">
                                                        <p>Our stay at the resort was nothing short of magical! From the breathtaking views to the impeccable service, every moment felt like a dream. We can't wait to come back!</p>
                                                        <p class="overview"><b>Paula Wilson</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="media">

                                                <div class="media-body h6 text-body">
                                                    <div class="testimonial">
                                                        <p>The resort exceeded our expectations in every way. The luxurious accommodations, world-class amenities, and friendly staff made our vacation truly unforgettable. We highly recommend it!</p>
                                                        <p class="overview"><b>Antonio Moreno</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="media">

                                                <div class="media-body h6 text-body">
                                                    <div class="testimonial">
                                                        <p>This resort is a hidden gem! The tranquil atmosphere, beautiful surroundings, and top-notch facilities provided the perfect escape from the daily hustle and bustle. We left feeling rejuvenated and relaxed.</p>
                                                        <p class="overview"><b>Michael Holz</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="media">

                                                <div class="media-body h6 text-body">
                                                    <div class="testimonial">
                                                        <p>As newlyweds, we couldn't have asked for a more romantic honeymoon destination. The resort's secluded beach, candlelit dinners, and luxurious suite made our time together incredibly special. It was pure paradise!</p>
                                                        <p class="overview"><b>Mary Saveley</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="media">

                                                <div class="media-body h6 text-body">
                                                    <div class="testimonial">
                                                        <p>We've traveled to many resorts, but this one truly stood out. The attention to detail, from the exquisite decor to the personalized service, made us feel like VIP guests. We were pampered from the moment we arrived.</p>
                                                        <p class="overview"><b>Martin Sommer</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="media">

                                                <div class="media-body h6 text-body">
                                                    <div class="testimonial">
                                                        <p>As newlyweds, we couldn't have asked for a more romantic honeymoon destination. The resort's secluded beach, candlelit dinners, and luxurious suite made our time together incredibly special. It was pure paradise!</p>
                                                        <p class="overview"><b>John Williams</b></p>
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