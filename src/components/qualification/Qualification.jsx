import React from 'react'
import "./qualification.css"

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech. in Software Engineering</h3>
                                <span className="qualification__subtitle">DTU</span>
                                <br></br>
                                <span className="qualification__subtitle">CGPA - 8.11/10</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th</h3>
                                <span className="qualification__subtitle">Greenfields Public School</span>
                                <br></br>
                                <span className="qualification__subtitle">Percentage - 92.2%</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2020
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th</h3>
                                <span className="qualification__subtitle">Greenfields Public School</span>
                                <br></br>
                                <span className="qualification__subtitle">Percentage - 88.8%</span>
                                <div className="qualification__calendar"></div>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualification