import './Contact.css'

const Contact = () => {
    return (
        <div id='connect' className='bg-base-100'>
             <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-down" data-aos-duration={1000} className="text-5xl font-bold m-gallery">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content ">
                    <div className="card shadow-2xl">
                        <div data-aos="zoom-out" data-aos-duration={1000} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name*</span>
                                </label>
                                <input type="text" placeholder="first name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name*</span>
                                </label>
                                <input type="text" placeholder="last name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address*</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company*</span>
                                </label>
                                <input type="text" placeholder="company" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;