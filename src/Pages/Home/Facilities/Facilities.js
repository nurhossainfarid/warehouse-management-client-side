import React from 'react';
import './Facilities.css';

const Facilities = () => {
    return (
        <div className='px-5 py-4 mt-3'>
            <h3 className='text-center text-cyan-500 font-bold'>Our Facilities</h3>
            <div className='grid md:grid-cols-3 gap-5'>
                <section className=''>
                    <div className='mb-3'>
                        <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZFBvPeOigPzx1lx0P-itfNnKY6Nxm2AN5g&usqp=CAU" alt="" />
                        <h5>Quality Products</h5>
                        <p>We are collection most quality full product.Our all categories product are too much qualify. And those are for you , if you find it. </p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 px-2 py-1 rounded text-white hover:text-gray-300 ">Read More</button>
                    </div>
                    <div>
                        <img className='img' src="https://thebagsgarden.com/wp-content/uploads/2016/07/Fast_Delivery.jpg" alt="" />
                        <h5>Fast Delivery</h5>
                        <p>We have lots of track for delivery our product to customer. And our driver is too much experience.</p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 px-2 py-1 rounded text-white hover:text-gray-300">Read More</button>
                    </div>
                </section>
                <section className='flex flex-col justify-center items-center gap-5'>
                    <img className='' src="https://www.laptopstoreindia.in/wp-content/uploads/2022/02/laptopstore-marathahalli.jpg" alt="" />
                    <button className='bg-cyan-500 hover:bg-cyan-600 text-xl px-3 py-1 rounded text-white font-semibold hover:text-gray-300'>Contact Now</button>
                </section>
                <section>
                    <div className='mb-3'>
                        <img className='img' src="https://static.vecteezy.com/system/resources/previews/002/596/494/original/online-order-icon-on-white-vector.jpg" alt="" />
                        <h5>Online Order</h5>
                        <p>Now time online order is not available. Update Soon!!!!</p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 px-2 py-1 rounded text-white hover:text-gray-300 ">Read More</button>
                    </div>
                    <div>
                        <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-OmAB8F-5-pw06_ZFuPYzpBPnZcz8tzZeau0lQrtvb1WBy6ROuSIw0v5medZtNVzOug&usqp=CAU" alt="" />
                        <h5>24/7 Service</h5>
                        <p>You are our luck customer. So, we always time ready to provide good service any time.We have specific team to maintain our service.</p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 px-2 py-1 rounded text-white hover:text-gray-300 ">Read More</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Facilities;