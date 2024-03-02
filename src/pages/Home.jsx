import React from 'react';
import QingPhoto from '../utils/QingqingYang-photo.jpg';
import Background from '../utils/background.jpg';

function Home() {

    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    
    return (
        <div>
            {/* Hero Section */}
            <div className="masthead py-5 bg-light">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 text-center">
                            <img src={QingPhoto} className="mx-lg-auto rounded-3 img-fluid" style={{ maxWidth: 230 }} alt="Qing photo" />
                        </div>
                        <div className="col-lg-6">
                            <div className="m-auto text-left px-4">
                                <h1 className="display-5 fw-bolder text-body-emphasia 1h-1 mb-3">Hi, I'm Qing,</h1>
                                <h2 className="display-4 fw-bolder 1h-1 mb-3">Web Designer</h2>
                                <p className="fs-4">Let's collaborate to bring innovative and user-centric solutions to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="py-5" style={backgroundStyle}>
                <div className="container">
                    <div className="p-5 text-center rounded-3">
                        <h2 className="text-body-emphasis display-5">About Me</h2>
                        <p className="col-lg-9 mx-auto fs-4 ">
                            I'm Qingqing Yang, a passionate UX/UI designer and front-end developer. I specialize in crafting seamless, engaging digital experiences, combining my expertise in design and development for visually appealing and intuitively functional interfaces.
                        </p>
                        <div className="d-inline-flex gap-2 ">
                            <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                            Check PDF Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;