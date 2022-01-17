import './overview.css'


const Overview = ({ title, location, degree, description, qualifications, preferredQualifications }) => {
    return (
        <div className="overview-container">
            <img src={process.env.PUBLIC_URL + "/img/google.png"} />
            <div className="company-name">Google Inc</div>
            <div className="job-tile">{title}</div>
            <div className="degree">{degree}</div>
            <div className="location">{location}</div>
            <div className="description">Description</div>
            <div className="description-text">{description}</div>
            <div className="description">Qualifications</div>
            <ul className="list">
                {
                    qualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div className="description">Preferred Qualifications</div>
            <ul className="list">
                {
                    preferredQualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
 
export default Overview