
import React, { useState, useEffect } from 'react';
import './UiUx.css';
import SideNav from "../sideNavBar/SideNav";
import CVBar from "../cvBar/CVBar";
import rejImage from '../../../assets/images/icn_rejected (1).png'
import newImage from "../../../assets/images/icn_new.png"
import shortImage from "../../../assets/images/icn_shortlist.png";
import CVDrawer from '../cvDrawer/CVDrawer';
import hr from "../../../assets/images/icn_hr.png";
import arrow from '../../../assets/images/icn_active dropdown.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

const UiUx = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [newList, setNewList] = useState()
    const [shortList, setShortList] = useState()
    const [rejList, setRejList] = useState()

    var newNum = 0;
    var shortNum = 0;
    var rejNum = 0;
    newNum = newList.info.length;
    shortNum = shortList.info.length;
    rejNum = rejList.info.length;

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const tech = useSelector((state) => state.cv.tech);

    const profileNew = "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/profiles/" + tech + "/new";
    const profileShort = "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/profiles/" + tech + "/shortlisted ";
    const profileRej = "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/profiles/" + tech + "/rejected";

    useEffect(() => {
        getProfileNew()
            .then((data) => {
                console.log(data);
                setNewList(data);

                // console.log(newNum);
            })
    }, []);

    useEffect(() => {
        getProfileShort()
            .then((data) => {
                console.log(data);
                setShortList(data);

            })
    }, []);

    useEffect(() => {
        getProfileRej()
            .then((data) => {
                console.log(data);
                setRejList(data);

            })
    }, []);

    const totalNum = newNum + shortNum + rejNum;

    const count = shortNum / totalNum + '%';

    const getProfileNew = async () => {
        try {
            const response = await axios.get(profileNew,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/JSON",
                        // "Accept": "application/JSON",
                        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
                    },

                });
            // console.log(response);
            return response?.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    const getProfileShort = async () => {
        try {
            const response = await axios.get(profileShort,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/JSON",
                        // "Accept": "application/JSON",
                        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
                    },

                });
            // console.log(response);
            return response?.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    const getProfileRej = async () => {
        try {
            const response = await axios.get(profileRej,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/JSON",
                        // "Accept": "application/JSON",
                        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
                    },

                });
            // console.log(response);
            return response?.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size='900px'
                style={{ 'background-color': '#FFFFFF', 'borderRadius': '40px 0px  0px 40px', 'boxShadow': '0 6px 11px 5px rgba(0,0,0,0.07)' }}
                className='UiUx-drawer'

            >
                <CVDrawer />
            </Drawer>

            <div className="UiUx-mainDiv">
                <div className='UiUx-mainDivComponents'>
                    <SideNav />
                    <div className='UiUx-assignDiv'>
                        <CVBar />
                        <div className="UiUx-components">
                            <div className="UiUx-header">
                                <div className='UiUx-CVText'>
                                    {tech}
                                </div>
                                <div className='UiUx-headerRight'>

                                    <div className="UiUx-CandidateInfo">
                                        <div className="UiUx-CandidateData">
                                            <div className="UiUx-CandidateName" >
                                                Renuka Shetty
                                            </div>
                                            <div className="UiUx-CandidateArrow">
                                                <img className="UiUx-CandidateArrowImage" src={arrow} alt="arrowImage" />
                                            </div>
                                        </div>
                                        <div className="UiUx-CandidateProfession">
                                            Recruiter
                                        </div>

                                    </div>
                                    <div>
                                        <img src={hr} alt="image" className="UiUx-hrImg" />
                                    </div>
                                </div>
                            </div>
                            <hr className='UiUx-headerborder'></hr>
                            <div className='UiUx-progressBars'>
                                <div className='UiUx-newBar UiUxBar'>
                                    <div className='UiUx-newImageBar' style={{ width: "30%" }}>
                                        <div className='UiUx-newBarInfo'>
                                            <div>
                                                <img className="UiUx-NewImage" src={newImage} alt="arrowImage" />
                                            </div>
                                            <div className="UiUx-NewText">
                                                New
                                            </div>
                                            <div className='UiUx-newCount UiUxCount'>
                                                {/* {newNum}/{totalNum} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='UiUx-shortListedBar UiUxBar'>
                                    <div className='UiUx-shortImageBar' style={{ width: "10%" }}>
                                        <div className='UiUx-newBarInfo'>
                                            <div>
                                                <img className="UiUx-shortImage" src={shortImage} alt="arrowImage" />
                                            </div>
                                            <div className="UiUx-shortText">
                                                Shortlisted
                                            </div>
                                            <div className='UiUx-shortCount UiUxCount'>
                                                {/* {shortNum}/{totalNum} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='UiUx-rejectedBar UiUxBar'>
                                    <div className='UiUx-rejImageBar' style={{ width: `${count}` }}>
                                        <div className='UiUx-newBarInfo'>
                                            <div>
                                                <img className="UiUx-rejImage" src={rejImage} alt="arrowImage" />
                                            </div>
                                            <div className="UiUx-rejText">
                                                Rejected
                                            </div>
                                            <div className='UiUx-rejCount UiUxCount'>
                                                {/* {rejNum}/{totalNum} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='UiUx-pplList'>


                                <div className='UiUx-newPplData'>
                                    {newList?.info.map((newList) => {
                                        return (
                                            <div className='UiUx-pplItem' onClick={toggleDrawer}>
                                                <div className='UiUx-pplNameImage'>
                                                    <div>
                                                        <img src={newList?.imageUrl} className='UiUx-Image' />
                                                    </div>
                                                    <div className='UiUx-nameInfo'>
                                                        <div className='UiUx-name'>
                                                            {newList?.name}
                                                        </div>
                                                        <div className='UiUx-Position'>
                                                            {newList?.position}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='UiUx-pplSkills'>


                                                    <div className='UiUx-pplSkillItem'>
                                                        xdvz
                                                    </div>


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className='UiUx-newPplData'>
                                    {shortList?.info.map((shortList) => {
                                        return (
                                            <div className='UiUx-pplItem'>
                                                <div className='UiUx-pplNameImage'>
                                                    <div>
                                                        <img src={shortList?.imageUrl} className='UiUx-Image' />
                                                    </div>
                                                    <div className='UiUx-nameInfo'>
                                                        <div className='UiUx-name'>
                                                            {shortList?.name}
                                                        </div>
                                                        <div className='UiUx-Position'>
                                                            {shortList?.position}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='UiUx-pplSkills'>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>

                                <div className='UiUx-newPplData'>
                                    {rejList?.info.map((rejList) => {
                                        return (
                                            <div className='UiUx-pplItem'>
                                                <div className='UiUx-pplNameImage'>
                                                    <div>
                                                        <img src={rejList?.imageUrl} className='UiUx-Image' />
                                                    </div>
                                                    <div className='UiUx-nameInfo'>
                                                        <div className='UiUx-name'>
                                                            {rejList?.name}
                                                        </div>
                                                        <div className='UiUx-Position'>
                                                            {rejList?.position}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='UiUx-pplSkills'>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>
                                                    <div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div><div className='UiUx-pplSkillItem'>
                                                        rfgzc\\
                                                    </div>


                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UiUx
