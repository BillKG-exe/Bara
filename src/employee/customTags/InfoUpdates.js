import './InfoUpdates.css'



const InfoUpdates = () => {
    return ( 
        <div className="account-setting">
            <div className="setting-title">Account Settings</div>
            <div className="account-update-textfiled">
                <input type="text" placeholder="Name" defaultValue="" />
            </div>
            <div className="account-update-textfiled">
                <input type="email" placeholder="Email" defaultValue="" />
            </div>
            <div className="account-update-textfiled">
                <input type="number" placeholder="Phone" defaultValue="" />
            </div>
            <div className="account-update-city-country">
                <input type="text" placeholder="City" defaultValue="" />
                <input type="text" placeholder="Country" defaultValue="" />
            </div>
            <div className="account-update-textfiled">
                <input type="password" placeholder="Current password" defaultValue="" />
            </div>
            <div className="account-update-textfiled">
                <input type="password" placeholder="New password" defaultValue="" />
            </div>
            <div className="account-update-bio">
                <textarea placeholder="Introduction" defaultValue="" />
            </div>
        </div>
    )
}
 
export default InfoUpdates