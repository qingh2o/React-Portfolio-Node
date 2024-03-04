import React from 'react';
import QingPhoto from '../utils/QingqingYang-photo.jpg';
import Background from '../utils/background.jpg';
import ResumePDF from '../utils/Resume-Qing-Qing-Yang.pdf';

function Home() {
    // Add background image
    const backgroundStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    // Open the PDF file in a window
    const openResume = () => {
        window.open(ResumePDF, '_blank');
    };

    // Open the google docs file in a window
    const openPortfolio = () => {
        window.open("https://docs.google.com/presentation/d/1O7NykgbqAva0EgI93KSyETh7jIWwNgwOV3IMhr5ixTA/edit?usp=sharing");
    }

    return (
        <main>
            {/* Hero Section */}
            <div className="masthead py-5 bg-light">
                <div className="container col-xxl-8 px-4 pt-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-12 col-lg-6 text-center">
                            {/* My photo */}
                            <img
                                src={QingPhoto}
                                className="mx-lg-auto rounded-3 img-fluid"
                                style={{ maxWidth: 230 }}
                                alt="Qing photo"
                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="m-auto text-left p-4">
                                <h3 className="fs-6 text-secondary mb-2 text-uppercase">Hello</h3>
                                <h1 className="display-4 mb-3">I'm <span className='fw-bolder'>Qing</span></h1>
                                <h2 className="display-4 fw-bolder mb-3">Web Designer</h2>
                                <p className="fs-4 display-3">Let's collaborate to bring innovative and user-centric solutions to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="py-5" style={backgroundStyle}>
                <div className="container ">
                    <div className="p-5 text-center rounded-3">
                        <h3 className="fs-4 mb-2 text-uppercase">
                            <span className="bi bi-briefcase-fill me-2"></span> Hire Me
                        </h3>
                        <p className="col-lg-9 mx-auto fs-3 text-center">
                            I'm Qingqing Yang, a passionate UX/UI designer and front-end developer. I specialize in crafting seamless, engaging digital experiences, combining my expertise in design and development for visually appealing and intuitively functional interfaces.
                        </p>
                        <div className="d-inline-flex gap-2 ">
                            {/* Open PDF file */}
                            <button
                                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                                type="button"
                                onClick={openResume}
                            >
                                Resume
                            </button>
                            {/* Open google file */}
                            <button
                                className="d-inline-flex align-items-center btn btn-outline-dark btn-lg px-4 rounded-pill"
                                type="button"
                                onClick={openPortfolio}
                            >
                                Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;