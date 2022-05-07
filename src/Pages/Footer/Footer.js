import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='grid md:grid-cols-4 px-6 md:px-12 gap-5 mt-10 bg-gray-800 py-3'>
            {/* store location section */}
            <section>
                <h5 className='text-cyan-500'>Store Location</h5>
                <ul className='text-gray-300 pl-0'>
                    <li><span className='font-semibold text-white'>Address :</span> H45-483, road-10, sector-6, Uttara, Dhaka, Bangladesh</li>
                    <li><span className='font-semibold text-white'>Email :</span> official-lhc-47@gmail.com</li>
                    <li><span className='font-semibold text-white'>Phone :</span> +0212555216</li>
                    <li><span className='font-semibold text-white'>Facebook page :</span> lhc.fb.com</li>
                </ul>
            </section>

            {/* useful link section */}
            <section className='flex flex-column'>
                <h5 className='text-cyan-500'>Useful Link</h5>
                <Link to={'/help'} className='text-gray-300 text-decoration-none'>About us</Link>
                <Link to={'/ticket'} className='text-gray-300 text-decoration-none'>Block</Link>
                <Link to={'/contact'} className='text-gray-300 text-decoration-none'>Check Out</Link>
                <Link to={'/ticket'} className='text-gray-300 text-decoration-none'>Contact</Link>
                <Link to={'/contact'} className='text-gray-300 text-decoration-none'>Service</Link>
                <Link to={'/contact'} className='text-gray-300 text-decoration-none'>Shop</Link>
            </section>

            <section>
                <h5 className='text-cyan-500'>Categories</h5>
                <ul className='text-gray-300 pl-0'>
                    <li>
                        GIGABYTE LAPTOP
                    </li>
                    <li>
                        HP LAPTOP
                    </li>
                    <li>
                        ASUS LAPTOP
                    </li>
                    <li>
                        DELL
                    </li>
                    <li>
                        APPLE LAPTOP
                    </li>
                </ul>
            </section>

            {/* opening hour section */}
            <section>
                <h5 className='text-cyan-500'>Opening Hour</h5>
                <ul className='text-gray-300 pl-0'>
                    <li>
                        <p className='mb-0 pb-0'>Sat-Mon</p>
                        <p className='mb-2'>9am-8pm</p>
                    </li>
                    <li>
                        <p className='mb-0'>Tus-Wed</p>
                        <p className='mb-2'>10am-8pm</p>
                    </li>
                    <li>
                        <p className='mb-0'>Thus</p>
                        <p className='mb-2'>8am-10pm</p>
                    </li>
                    <li>
                        <p className='mb-0'>Fri</p>
                        <p className='mb-2'>Off Day</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Footer;