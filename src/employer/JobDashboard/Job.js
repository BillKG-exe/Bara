import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './job.css'
import JobCard from './JobCard'
import Navbar from '../Nav/Navbar'
import ReportHeader from '../Report/ReportHeader'

const data = [
    {title: 'Software Engineer', appliedAcc: 124, qualifications: ['Strong knowledge in data structure', 'Strong knowledge in algorithm', 'C++, Python, or Java', 'Bachelor or Master'], datePosted: '01/2020'},
    {title: 'Dentist', appliedAcc: 45, qualifications: ['Knowledge in digestive system', 'Pros and cons of certain operation methods', 'Practiced for at Least 1 year'], datePosted: '12/2020'},
    {title: 'Civil Engineer', appliedAcc: 214, qualifications: ['Experience doing some engineering work', 'Basic knowledge in architecture'], datePosted: '03/2021'},
    {title: 'Architect', appliedAcc: 41, qualifications: ['Have an experience of at least 2 years', 'Master or Doctorat in Architechture or civil engineering'], datePosted: '04/2021'},
    {title: 'Real Estate Agent', appliedAcc: 511, qualifications: ['Experience in sales', 'Good communication skills', '2 or 3 years of experience is a plus', 'Good listening skills' ], datePosted: '05/2021'},
    {title: 'Software Engineer', appliedAcc: 124, qualifications: ['Strong knowledge in data structure', 'Strong knowledge in algorithm', 'C++, Python, or Java', 'Bachelor or Master'], datePosted: '01/2020'},
    {title: 'Dentist', appliedAcc: 45, qualifications: ['Knowledge in digestive system', 'Pros and cons of certain operation methods', 'Practiced for at Least 1 year'], datePosted: '12/2020'},
    {title: 'Civil Engineer', appliedAcc: 214, qualifications: ['Experience doing some engineering work', 'Basic knowledge in architecture'], datePosted: '03/2021'},
    {title: 'Architect', appliedAcc: 41, qualifications: ['Have an experience of at least 2 years', 'Master or Doctorat in Architechture or civil engineering'], datePosted: '04/2021'},
    {title: 'Real Estate Agent', appliedAcc: 511, qualifications: ['Experience in sales', 'Good communication skills', '2 or 3 years of experience is a plus', 'Good listening skills' ], datePosted: '05/2021'},
    {title: 'Software Engineer', appliedAcc: 124, qualifications: ['Strong knowledge in data structure', 'Strong knowledge in algorithm', 'C++, Python, or Java', 'Bachelor or Master'], datePosted: '01/2020'},
    {title: 'Dentist', appliedAcc: 45, qualifications: ['Knowledge in digestive system', 'Pros and cons of certain operation methods', 'Practiced for at Least 1 year'], datePosted: '12/2020'},
    {title: 'Civil Engineer', appliedAcc: 214, qualifications: ['Experience doing some engineering work', 'Basic knowledge in architecture'], datePosted: '03/2021'},
    {title: 'Architect', appliedAcc: 41, qualifications: ['Have an experience of at least 2 years', 'Master or Doctorat in Architechture or civil engineering'], datePosted: '04/2021'},
    {title: 'Real Estate Agent', appliedAcc: 511, qualifications: ['Experience in sales', 'Good communication skills', '2 or 3 years of experience is a plus', 'Good listening skills' ], datePosted: '05/2021'},
    {title: 'Software Engineer', appliedAcc: 124, qualifications: ['Strong knowledge in data structure', 'Strong knowledge in algorithm', 'C++, Python, or Java', 'Bachelor or Master'], datePosted: '01/2020'},
    {title: 'Dentist', appliedAcc: 45, qualifications: ['Knowledge in digestive system', 'Pros and cons of certain operation methods', 'Practiced for at Least 1 year'], datePosted: '12/2020'}
]



function Job({ authorized }) {
    const history = useHistory()

    useEffect(() => {
        authorized()
            .then(authenticated => {
                if(!authenticated) {
                    history.push('/employer/login');
                }
            }).catch((e) => console.log(e))
    }, [])

    return (
        <>
            <Navbar />
            <ReportHeader />
            <div className="report-job-section">
                <div className="job-posted-section">
                    { 
                        data.map((job, index) => (
                            <JobCard key={index}  jobPosted={job} />
                        ))
                    }
                </div>
                {/* Popup show description and number applicants. */}
            </div>
        </>
    )
}

export default Job
