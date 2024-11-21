import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import definingRightProduct from "../assets/Images/Defining the Right PRODUCT.gif";
import buildingProductRight from "../assets/Images/Building the Product Right.gif";
import buildingRightProduct from "../assets/Images/Building the Right PRODUCT.gif";

import technoManagerialExpertise from "../assets/Images/Techno-Managerial Expertise.gif";
import humanResourceAugmentation from "../assets/Images/Human Resource Augmentation.gif";
import innovationGrants from "../assets/Images/Innovation Grants.gif";

const Tab3 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-2 tab-3 d-flex flex-column align-items-center  justify-content-center gap-4">
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs border-0 justify-content-start gap-3 gap-md-5" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 0 ? "active" : ""}`}
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected={activeTab === 0}
                        onClick={() => handleTabChange(0)}
                    >
                        PRODUCT ADVISORY
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected={activeTab === 1}
                        onClick={() => handleTabChange(1)}
                    >
                        PRODUCT DEVELOPMENT
                    </button>
                </li>
            </ul>

            {/* Tabs Content */}
            <div className="tab-content mt-4" id="myTabContent">
                {/* Tab 1 Content */}
                <div
                    className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-4 w-100 px-3">
                        <div className="text-center">
                            <h3 className="text-uppercase d-block text-dark-orange">PRODUCT ADVISORY</h3>
                            <h3>Startup Product Management (SPM) Practices to
                                Accelerate Product Market Fit (PMF)</h3>
                        </div>
                        <p className="text-center">
                        Product Innovations come with inherent risks, relating to problem definition, problem significance, customer selection & specificity, customer motivation to solve the problem, acceptance of the Value Proposition by the target customer, among others. Validating these risks is crucial for startups to reduce the likelihood of the product failing in the market.
                            <br />
                            <br />
                            Forge’s Startup Product Management (SPM) helps startups with a structured approach to validate these inherent risks by linking their progress to customer acceptance and customer commitment, thereby building a product that customers are willing to buy & use. SPM essentially helps startups in Defining the Right PRODUCT, Building the Right PRODUCT, and Building the Product RIGHT.
                        </p>
                        <div className="swiper-container w-100 position-relative">
                            <button
                                className="swiper-button-prev position-absolute top-50 start-0 translate-middle-y text-white border-0 bg-transparent"
                                style={{ left: "-30px", zIndex: 10 }}
                            >
                            </button>
                            <button
                                className="swiper-button-next position-absolute top-50 end-0 translate-middle-y text-white border-0 bg-transparent"
                                style={{ right: "-30px", zIndex: 10 }}
                            >
                            </button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >
                                <SwiperSlide>
                                    <div className="row w-100 align-items-center">
                                        <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
                                            <img src={definingRightProduct} className="img-fluid" style={{ maxWidth: "300px" }} />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-3 content-container">
                                            <h1 className="text-white">Defining the Right PRODUCT</h1>
                                            <p>
                                                Defining the Right PRODUCT is essentially about defining the Right Problem/Need, identifying the Right Customer, and offering the Right Value Proposition. This ensures that the right product is built downstream, enabling seamless adoption by customers.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row w-100 align-items-center">
                                        <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
                                            <img src={buildingRightProduct} className="img-fluid" style={{ maxWidth: "300px" }} />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-3 content-container">
                                            <h1 className="text-white">Building the Right PRODUCT</h1>
                                            <p>
                                            Building the Right PRODUCT is all about building a product that most efficiently solves the problem while effectively delivering the value proposition. The Right PRODUCT is the one with the Right Utility (Features & Functions), Right Usability (UX, Integration & Operations), and Right Quality (Performance, Reliability & Standards).
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row w-100 align-items-center">
                                        <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
                                            <img src={buildingProductRight} className="img-fluid" style={{ maxWidth: "300px" }} />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-3 content-container">
                                            <h1 className="text-white">Building the Product RIGHT</h1>
                                            <p>
                                            Building the Product RIGHT focuses on building the product by applying best practices in design and engineering for industrial-grade solutions. This includes timely integration, trials, and certification to minimise technical debt and prevent costly failures. This also ensures that the product is designed for manufacturability at industrial standards of scale, and reliability while ensuring easy extensibility, upgrades, and maintenance in line with industrial standards.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* Tab 2 Content */}
                <div
                    className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-4 w-100 px-3">
                        <div className="text-center">
                            <h3 className="text-uppercase d-block text-dark-orange">PRODUCT DEVELOPMENT SUPPORT</h3>
                            <h3 className="text-white">Accelerating the Translation of Industrial Tech IPs into Commercial Products</h3>
                        </div>
                        <p className="text-center">
                            Forge offers a comprehensive range of services to support innovators and startups throughout their product development journey. In addition to providing expert guidance on product management practices, Forge also offers:
                        </p>
                        <div className="row w-100">
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                <img src={technoManagerialExpertise} className="img-fluid" width={280} />
                                <h4 className="text-yellow mt-3 text-center">Techno-Managerial Expertise</h4>
                                <p className="text-center">
                                Access to in-house and external experts offering techno-managerial expertise
                                </p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                <img src={humanResourceAugmentation} className="img-fluid" width={280} />
                                <h4 className="text-yellow mt-3 text-center">Human Resource Augmentation</h4>
                                <p className="text-center">
                                Assistance in scaling up product development capacity by augmenting additional resources and talent
                                </p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                <img src={innovationGrants} className="img-fluid" width={280} />
                                <h4 className="text-yellow mt-3 text-center">Innovation Grants</h4>
                                <p className="text-center">
                                For product development, enabling promising prototypes to mature into market-ready solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab3;
