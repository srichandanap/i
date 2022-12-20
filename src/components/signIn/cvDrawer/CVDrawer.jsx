import React from 'react'
import "./CVDrawer.css"
import exp from "../../../assets/images/icn_workexp.png";
import walkin from "../../../assets/images/icn_walkin.png";
import icnLocation from "../../../assets/images/icn_location.png";
import icnSalary from "../../../assets/images/icn_salary.png";
import insta from "../../../assets/images/img_instagram.png";
import fb from "../../../assets/images/img_facebook.png";
import ln from "../../../assets/images/img_likedin.png";
import bribbble from "../../../assets/images/img_dribbble.png";
import behance from "../../../assets/images/img_behance.png";
import photo from "../../../assets/images/img_pdf_thumbnail.png";
import zip from "../../../assets/images/img_zip_thumbnail.png";
import hr from "../../../assets/images/icn_hr.png";

const CVDrawer = () => {

    return (
        <>
            <div className="Drawer-personDetails">

                <div className="Drawer-mainDiv">
                    <div className="Drawer-Photo">

                    </div>
                    <div className="Drawer-PhotoInfo">
                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={exp} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    6+ Years
                                </div>
                                <div className="Drawer-workExpText">
                                    Work experience
                                </div>
                            </div>
                        </div>

                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={walkin} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    Walkin
                                </div>
                                <div className="Drawer-workExpText">
                                    Reference
                                </div>
                            </div>
                        </div>

                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={icnLocation} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    Udupi
                                </div>
                                <div className="Drawer-workExpText">
                                    Work Location
                                </div>
                            </div>
                        </div>

                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={icnSalary} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    15L per Annum
                                </div>
                                <div className="Drawer-workExpText">
                                    Salary Expectation
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="Drawer-workBorder"></hr>
                    <div className="Drawer-photoContacts">
                        <div className="Drawer-contactText"> Contacts </div>
                        <div className="Drawer-photoMobile"> +91 9863247561</div>
                        <div className="Drawer-photoMobile"> sdf@gmail.com</div>
                    </div>
                    <hr className="Drawer-workBorder"></hr>
                    <div className="Drawer-contactText">Socials</div>
                    <div className="Drawer-photoImages">
                        <img src={bribbble} alt="image" />
                        <img src={behance} alt="image" />
                        <img src={ln} alt="image" />
                        <img src={fb} alt="image" />
                        <img src={insta} alt="image" />
                    </div>
                </div>
                <div className="Drawer-personDeatailInfo">
                    <div className="Drawer-personNameInfo">
                        <div className="Drawer-personName">Dhipu E S</div>
                        <div className="Drawer-personyrs">28 years</div>
                    </div>
                    <div className="Drawer-personRole">Senior UI  Designer</div>

                    <div className="Drawer-btnPlace">
                        <button className="Drawer-downloadCVbtn">Download CV</button>

                        <div className="Drawer-dropDownbtn">
                            <button className="Drawer-assignToBtn">Assign To</button>
                            <div className="Drawer-dropdown-content">
                                <div className="Drawer-hr">
                                    <img src={hr} alt="image" className="Drawer-hrImg" />
                                    <div className="Drawer-hrName">Raksha</div>
                                </div>

                                <div className="Drawer-hr">
                                    <img src={hr} alt="image" className="Drawer-hrImg" />
                                    <div className="Drawer-hrName">Raksha</div>
                                </div>

                                <div className="Drawer-hr">
                                    <img src={hr} alt="image" className="Drawer-hrImg" />
                                    <div className="Drawer-hrName">Raksha</div>
                                </div>

                                <div className="Drawer-hr">
                                    <img src={hr} alt="image" className="Drawer-hrImg" />
                                    <div className="Drawer-hrName">Raksha</div>
                                </div>

                            </div>
                        </div>

                        <button className="Drawer-rejectbtn">Reject</button>
                    </div>

                    <div className="Drawer-personAbout">Senior UI Designer with 6+ years of
                        experience in the management of the complete
                        design process, from conceptualization to delivery.
                        Expert at interdepartmental coordination and
                        communication.

                        Skilled with Adobe Creative Suite (Illustrator,
                        Photoshop, Sketch) Microsoft Office and web
                        design applications (Dreamweaver, HTML).

                        Able to stretch the boundaries of web design and
                        digital storytelling to help my client’s brands
                        stand out.</div>
                    <hr className="Drawer-workBorder"></hr>
                    <div className="Drawer-educationInfo">
                        <div className="Drawer-educationText">Work Experience</div>
                        <div className="Drawer-prevComapnyInfo">
                            <div className="Drawer-prevComapny">
                                <div className="Drawer-prevComapnyCard">
                                    <div className="Drawer-prevComapnyLogo">dfgsgd</div>
                                    <div className="Drawer-prevComapnyAlign">
                                        <div className="Drawer-collegeName">
                                            UX Designer
                                        </div>
                                        <div className="Drawer-collegePlace">
                                            Amazon
                                        </div>
                                    </div>
                                </div>
                                <div className="Drawer-collegePlace">
                                    4y 2m
                                </div>
                            </div>

                            <div className="Drawer-prevComapny">
                                <div className="Drawer-prevComapnyCard">
                                    <div className="Drawer-prevComapnyLogo">dfgsgd</div>
                                    <div className="Drawer-prevComapnyAlign">
                                        <div className="Drawer-collegeName">
                                            UX Designer
                                        </div>
                                        <div className="Drawer-collegePlace">
                                            Amazon
                                        </div>
                                    </div>
                                </div>
                                <div className="Drawer-collegePlace">
                                    4y 2m
                                </div>
                            </div>

                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-educationInfo">
                        <div className="Drawer-educationText">Education</div>
                        <div className="Drawer-collegeInfo">
                            <div>
                                <div className="Drawer-collegeName">
                                    MIT - MBA in Multimed

                                </div>
                                <div className="Drawer-collegePlace">
                                    Manipal
                                </div>
                            </div>
                            <div className="Drawer-collegePlace">2016</div>
                        </div>
                        <div className="Drawer-collegeInfo">
                            <div>
                                <div className="Drawer-collegeName">
                                    Amrita Vishwa Vidyapeetham - BBA

                                </div>
                                <div className="Drawer-collegePlace">
                                    Bengaluru
                                </div>
                            </div>
                            <div className="Drawer-collegePlace">2016</div>
                        </div>
                        <div className="Drawer-collegeInfo">
                            <div>
                                <div className="Drawer-collegeName">
                                    Modi School of Political Science - PCMB
                                </div>
                                <div className="Drawer-collegePlace">
                                    Kozikod
                                </div>
                            </div>
                            <div className="Drawer-collegePlace">2016</div>
                        </div>
                        <div className="Drawer-collegeInfo">
                            <div>
                                <div className="Drawer-collegeName">
                                    Educating Slaves English Medium School
                                </div>
                                <div className="Drawer-collegePlace">
                                    Tamilnadu
                                </div>
                            </div>
                            <div className="Drawer-collegePlace">2016</div>
                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-referenceInfo">
                        <div className="Drawer-educationText">Reference</div>
                        <div className="Drawer-referencePerson">
                            <div className="Drawer-collegeName">Jeevan Lazarus</div>
                            <div className="Drawer-collegePlace">Crystal Technologies Pvt Ltd. Bangalore</div>
                        </div>
                        <div className="Drawer-referenceContact">
                            <div className="Drawer-referenceContactno">
                                <div className="Drawer-collegePlace"> Phone &nbsp; : &nbsp; </div>
                                <div className="Drawer-refMail"> 8965743216</div>
                            </div>
                            <div className="Drawer-referenceContactno">
                                <div className="Drawer-collegePlace">Email &nbsp; : &nbsp; </div>
                                <div className="Drawer-refMail">jeelit.laz@gmail.com</div>
                            </div>
                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-softwareInfo">
                        <div className="Drawer-educationText">Software</div>
                        <div className='Drawer-pplSkills'>
                            <div className='Drawer-pplSkillItem'>
                                rfgzc\\
                            </div>
                            <div className='Drawer-pplSkillItem'>
                                Photoshop
                            </div>
                            <div className='Drawer-pplSkillItem'>
                                Photoshop
                            </div>
                            <div className='Drawer-pplSkillItem'>
                                Photoshop
                            </div>
                            <div className='Drawer-pplSkillItem'>
                                Photoshop
                            </div>
                            <div className='Drawer-pplSkillItem'>
                                Photoshop
                            </div>
                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-AttachmentInfo">
                        <div className="Drawer-educationText">Attachment</div>
                        <div className='Drawer-pplSkills'>
                            <div className='Drawer-attachCard'>
                                <img src={photo} alt="image" className='Drawer-thumbnailWidth' />
                                <div className='Drawer-pdfName'>xyz.pdf</div>
                                <div className='Drawer-pdfSize'>200KB</div>
                            </div>

                            <div className='Drawer-attachCard'>
                                <img src={photo} alt="image" className='Drawer-thumbnailWidth' />
                                <div className='Drawer-pdfName'>xyz.pdf</div>
                                <div className='Drawer-pdfSize'>200KB</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CVDrawer