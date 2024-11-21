import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

import indusRobo from "../assets/Images/Industrial Robotics & Cobotics.gif";
import acceleratedSys from "../assets/Images/Accelerated Computing Systems.gif";
import cyberPhysical from "../assets/Images/Cyber Physical Control System.gif";
import additiveDesign from "../assets/Images/Additive Manufacturing.gif";
import electroRapid from "../assets/Images/Electronics Rapid Prototyping.gif";
import industries from "../assets/Images/Industrial Metaverse.gif";
import elctronicDesignFabrication from "../assets/Images/Electronics Design Test & Verification.gif";
import industrialDesignFabrication from "../assets/Images/Industrial Design & Fabrication.gif";

import electronicMenufacturing from "../assets/Images/Electronics Manufacturing.gif";
import mechanicalFabrication from "../assets/Images/Mechanical Fabrication.gif";

import mechanicalCompliance from "../assets/Images/Mechanical Compliance.gif";
import electronicsCompliance from "../assets/Images/Electronics Compliance.gif";
import electricalCompliance from "../assets/Images/Electrical Compliance.gif";

const Tab1 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const productInnovationLabDetails = [
        {
            img: indusRobo,
            title: "Industrial Robotics & Cobotics",
            description: "6-Axis Multifunctional Industrial Robot, Robotic Controllers, Robotic Design & Build Tools"
        },
        {
            img: elctronicDesignFabrication,
            title: "Electronics Design, Test & Verification",
            description: "Multifunctional & Mixed-Signal Oscilloscopes, Function/Signal Generator, Network/Spectrum Analysers, Industrial Grade Simulators"
        },
        {
            img: industrialDesignFabrication,
            title: "Industrial Design & Fabrication",
            description: "Machining Workbench Tools, Power Tools & Laser Cutters, Advanced CAD/CAM/CAE Design & Simulation Tools"
        },
        {
            img: acceleratedSys,
            title: "Accelerated Computing Systems",
            description: "Edge IoT & Edge AI Processors and Advanced Workstations"
        },
        {
            img: cyberPhysical,
            title: "Cyber Physical Control Systems",
            description: "Vision Intelligence Systems, Drives & Actuators for Automation & Mechatronics, and HMI & PLC Systems"
        },
        {
            img: additiveDesign,
            title: "Additive Manufacturing",
            description: "Industrial-Grade Multi-material 3D Printers and 3D Scanners"
        },
        {
            img: electroRapid,
            title: "Electronics Rapid Prototyping",
            description: "PCB Assembly & Testing Station, PCB Design Software, and Electronics Prototyping Toolkits"
        },
        {
            img: industries,
            title: "Industrial Metaverse",
            description: "VR/MR Headsets, CAD/CAM to AR/VR Translation Softwares, Metaverse SDKs, and 3D Visualisation Softwares"
        }
    ];

    return (
        <div className="tab-2 d-flex flex-column align-items-center justify-content-between gap-4">
            <ul className="nav nav-tabs border-0 justify-content-center gap-md-5 gap-3" id="myTab" role="tablist">
                {/* Tab 1 */}
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
                        PRODUCT <br /> INNOVATION LABS
                    </button>
                </li>
                {/* Tab 2 */}
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
                        PRODUCT <br /> COMPLIANCE LABS
                    </button>
                </li>
                {/* Tab 3 */}
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected={activeTab === 2}
                        onClick={() => handleTabChange(2)}
                    >
                        PILOT <br /> PRODUCTION FACILITIES
                    </button>
                </li>
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
                {/* Content for Tab 1 */}
                <div
                    className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-2 w-100">
                        <div className="head text-uppercase d-flex flex-column align-items-center w-100 text-center">
                            <span className="">Product innovation labs</span>
                            <h3 className="">Product Design & Development</h3>
                        </div>
                        <p className="text-center">
                            Product Innovation Labs help startups, industrial companies, and student innovators with product design & development of industrial solutions. The Product Innovation Labs comprise of machineries & equipments in the following 8 Industrial Technology Domains:
                        </p>
                        <div className="swiper-container w-100 position-relative p-5">
                            {/* Navigation Buttons */}
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

                            {/* Swiper Component */}
                            <Swiper
                                modules={[Navigation]} // Use the Navigation module
                                spaceBetween={20} // Space between slides
                                slidesPerView={3} // Ensure 3 slides are visible
                                navigation={{
                                    nextEl: ".swiper-button-next", // Link to custom next button
                                    prevEl: ".swiper-button-prev", // Link to custom prev button
                                }}
                                breakpoints={{
                                    1100: {
                                        slidesPerView: 3, // Show 3 slides on large screens
                                    },
                                    768: {
                                        slidesPerView: 2, // Show 2 slides on medium screens
                                    },
                                    320: {
                                        slidesPerView: 1, // Show 1 slide on small screens
                                    },
                                }}
                                onSlideChange={() => console.log("slide change")}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {productInnovationLabDetails.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img src={slide.img} alt={slide.title} width={280} />
                                            <h4 className="text-dark-orange text-center">{slide.title}</h4>
                                            <p className="text-center">{slide.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div
                    className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-2 w-100">
                        <div className="head text-uppercase d-flex flex-column align-items-center w-100 text-center">
                            <span>Product Compliance Labs</span>
                            <h3>Product Verification, Validation & Pre-Certification</h3>
                        </div>
                        <p className="text-center px-3 px-md-5">
                            Product Compliance Lab provides the necessary resources and services to verify, validate, and pre-certify products, ensuring they meet regulatory & industry standards. By facilitating rigorous testing and compliance checks, the lab helps innovators and startups navigate the complex approval processes efficiently, reducing time to market and mitigating risks associated with non-compliance.
                        </p>

                        <div className="row w-100 justify-content-center">
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                <img src={mechanicalCompliance} alt="Automation & Robotics" className="img-fluid" width={280} />
                                <h4 className="text-yellow text-center mt-3">Mechanical Compliance</h4>
                                <p className="text-center px-2">
                                    Vibration Testing, Sound Level Testing, Coating Thickness Measurement, Dimensional Measurements, Flaw Detection, Ingress Protection Test Chambers, and Coordinate Measurement Machines
                                </p>
                            </div>

                            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                <img src={electronicsCompliance} alt="Automation & Robotics" className="img-fluid" width={280} />
                                <h4 className="text-yellow text-center mt-3">Electronics Compliance</h4>
                                <p className="text-center px-2">
                                    Flying Probe Testing and EMC/EMI Testing & Compliance
                                </p>
                            </div>
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4">
                                <img src={electricalCompliance} alt="Automation & Robotics" className="img-fluid" width={280} />
                                <h4 className="text-yellow text-center mt-3">Electrical Compliance</h4>
                                <p className="text-center px-2">
                                    ESG Testing, Hipot Testing, Earth Testing, Current Leakage Testing, Harmonic Analysis, Battery Testing, and Motor Analysis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex="0"
                >
                    <div className="d-flex flex-column align-items-center gap-2 w-100">

                        <div className="head text-uppercase d-flex flex-column align-items-center w-100 text-center">
                            <span>Pilot Production Facilities</span>
                            <h3>Low Volume Production of Hardware Products & Industrial Systems</h3>
                        </div>

                        <p className="text-center px-3 px-md-5">
                            Pilot Production Facilities offer plug & play manufacturing setups tailored for startups and MSMEs working on new product innovations. They bridge the gap between prototyping and large-scale manufacturing, enabling startups to transform into the next generation of industrial tech majors by offering them pilot-scale manufacturing infrastructure & capabilities that drive production while these startups navigate the market stage, to arrive at a Minimum Viable Product, and optimise unit economics & Product-Factory Fit.
                        </p>

                        <div className="row w-100 justify-content-center">
                            <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-4">
                                <img src={electronicMenufacturing} alt="Automation & Robotics" className="img-fluid" width={280} />
                                <h4 className="text-yellow text-center mt-3">Electronics Manufacturing</h4>
                                <p className="text-center px-2">
                                    PCB Design, Fabrication & Assembly
                                </p>
                            </div>
                            <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                                <img src={mechanicalFabrication} alt="Automation & Robotics" className="img-fluid" width={280} />
                                <h4 className="text-yellow text-center mt-3">Mechanical Fabrication</h4>
                                <p className="text-center px-2">
                                    Covering both additive and subtractive manufacturing processes, the facilities include Vertical Milling Centres, MIG, TIG, and Arc welding machines, sheet metal cutting machines, turning machines, vacuum casting, and dough moulding
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Tab1;
