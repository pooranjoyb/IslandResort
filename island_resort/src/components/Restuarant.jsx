import React from 'react'
import '../App.css'
function Restuarant() {
    return (
        <>
            <div className='flex text-center my-4' id='kitchen'>
                <p class="h2 text-primary fw-bold">Kitchen</p>
                <span>Unforgettable Flavors Await at Our Restaurant!</span>
            </div>
            <div id='food'>
                <div class="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/1.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body mx-auto">
                            <p class="card-text">Mixed Vegetable</p>
                        </div>
                </div>
                <div class="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/2.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body mx-auto">
                            <p class="card-text">Egg Curry</p>
                        </div>
                </div>
                <div class="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/3.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body mx-auto">
                            <p class="card-text">Roasted Fish</p>
                        </div>
                </div>
                <div class="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/4.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body mx-auto">
                            <p class="card-text">Chicken Biryani</p>
                        </div>
                </div>
                <div class="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/5.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body mx-auto">
                            <p class="card-text">Baked Bread</p>
                        </div>
                </div>
                <div class="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/6.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body mx-auto">
                            <p class="card-text">Veggie Salad</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Restuarant