function AffiliationProfile() {
    return ( <>
    
    <main>
        <div className="profile_heading">
            <h5 className="ml-3 mt-3 fw-bold text-muted " style={{fontWeight:"bold"}}>Profile</h5>
            <hr />
        </div>

        <div className="profile_container">
            <div className="profile_btn_container">
                <button className="btn btn-danger m-2">Profile Info</button>
                <button className="btn btn-danger m-2">Profile Document </button>
            </div>

            <div className="profile_content_container">
                <div className="profile_info">

                    <table className="table ">
                        <thead>
                            <tr>
                                <td>Title </td>
                                <td>info</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="profile_document"></div>
            </div>
        </div>
    </main>
    
    </> );
}

export default AffiliationProfile;