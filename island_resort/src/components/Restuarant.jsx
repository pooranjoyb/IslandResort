import React from 'react'
import '../App.css'
function Restuarant() {
    return (
        <>
            <div className='flex text-center my-4' id='kitchen'>
                <p className="h2 text-primary fw-bold">Kitchen</p>
                <span>Unforgettable Flavors Await at Our Restaurant!</span>
            </div>
            <div id='food'>
                <div className="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body mx-auto">
                            <p className="card-text">Mixed Vegetable</p>
                        </div>
                </div>
                <div className="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body mx-auto">
                            <p className="card-text">Egg Curry</p>
                        </div>
                </div>
                <div className="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body mx-auto">
                            <p className="card-text">Roasted Fish</p>
                        </div>
                </div>
                <div className="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/4.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body mx-auto">
                            <p className="card-text">Chicken Biryani</p>
                        </div>
                </div>
                <div className="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/5.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body mx-auto">
                            <p className="card-text">Baked Bread</p>
                        </div>
                </div>
                <div className="card p-3 m-3" style={{width: "30%"}}>
                    <img src="./food/6.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body mx-auto">
                            <p className="card-text">Veggie Salad</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Restuarant