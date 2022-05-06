import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='grid md:grid-cols-4 px-6 md:px-12 gap-5 mt-10 bg-gray-800 py-3'>
            {/* about medico service */}
            <section>
                <h2 className='text-cyan-500'>About LHC</h2>
                <p className='text-white'>
                    I work with clients big and small across a range of sectors and I utilize all forms of media to get your name out there in a way that’s right for you. I believe that analysis of your company.
                    Happiness Begins with Good Health.
                </p>
            </section>
            {/* address section */}
            {/* <section>
                <h3 className='text-cyan-500'>Address</h3>
                <p className='text-white'>Amphitheatre Parkway, Mountain View, California, 94043</p>
                <p className='text-white flex'><ClockIcon width={20} hanging={20}></ClockIcon> <span className='ml-2'>Mon - Fri: 08.00 - 17.00</span></p>
                <p className='text-white flex'><MailIcon width={20} hanging={20}></MailIcon> <span className='ml-2'>micahel47@gmail.com</span></p>
                <p className='text-white flex'><PhoneIcon width={20} hanging={20}></PhoneIcon> <span className='ml-2'>+123 456 789</span></p>
            </section> */}


            <section className='flex flex-column'>
                <h3 className='text-cyan-500'>Support</h3>
                <Link to={'/help'} className='text-white text-decoration-none'>Help Center</Link>
                <Link to={'/ticket'} className='text-white text-decoration-none'>Ticket Support</Link>
                <Link to={'/contact'} className='text-white text-decoration-none'>Contact Me</Link>
            </section>

            <section>
                <h3 className='text-cyan-500'>Download App</h3>
                <p className='text-white'>This app for you. It's easy your life. Any time any place you can use this app for your good health. So, please download this for your safety....</p>
                <div className='md:flex gap-3'>
                    <img width={150} src="https://show.moxcreative.com/mydoctor/wp-content/uploads/sites/29/2021/12/Google-Play_button.png" alt="" />
                    <img width={150} src="https://show.moxcreative.com/mydoctor/wp-content/uploads/sites/29/2021/12/App-Store_button.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Footer;