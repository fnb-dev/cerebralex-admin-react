import React from 'react';
import accounts from '../../images/svgs/accounts.svg'
import accountsActive from '../../images/svgs/accounts-color.svg'
import analytics from '../../images/svgs/analytics.svg'
import analyticsActive from '../../images/svgs/analytics-color.svg'
import campaigns from '../../images/svgs/campaigns.svg'
import campaignsActive from '../../images/svgs/campaigns-color.svg'
import dashboard from '../../images/svgs/dashboard.svg'
import dashboardDefault from '../../images/svgs/dashboard-default.svg'
import history from '../../images/svgs/history.svg'
import historyActive from '../../images/svgs/history-color.svg'
import library from '../../images/svgs/library.svg'
import libraryActive from '../../images/svgs/library-color.svg'

const Sidebar = () => {
    return(
        <aside className="sidebar-expanded sidebar-container bg-light-dark" id="sidebar-container">
            <ul className="list-group">
                < li className = "list-group-item bg-light-dark" >
                    <a href="#" className=" d-flex align-items-center text-white">
                        <div className="nav-icon">
                            <img src={accounts} alt="accounts icon" />
                            <img className="active-icon" src={accountsActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3">Accounts</div>
                    </a>
                </li>
                < li className = "list-group-item bg-light-dark" >
                    <a href="#" className=" d-flex align-items-center text-white">
                        <div className="nav-icon">
                            <img className="active-icon" src={dashboard} style={{width:'17px', height: '14px'}} alt="accounts icon" />
                            <img src={dashboardDefault} style={{width:'17px', height: '14px'}} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3">Dashboard</div>
                    </a>
                </li>
                < li className = "list-group-item bg-light-dark" >
                    <a href="#" className=" d-flex align-items-center text-white">
                        <div className="nav-icon">
                            <img src={campaigns} alt="accounts icon" />
                            <img className="active-icon" src={campaignsActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3">Campaigns</div>
                    </a>
                </li>
                < li className = "list-group-item bg-light-dark" >
                    <a href="#" className=" d-flex align-items-center text-white">
                        <div className="nav-icon">
                            <img src={analytics} alt="accounts icon" />
                            <img className="active-icon" src={analyticsActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3">Analytics</div>
                    </a>
                </li>
                < li className = "list-group-item bg-light-dark" >
                    <a href="#" className=" d-flex align-items-center text-white">
                        <div className="nav-icon">
                            <img src={library} alt="accounts icon" />
                            <img className="active-icon" src={libraryActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3">Creative Library</div>
                    </a>
                </li>
                < li className = "list-group-item bg-light-dark" >
                    <a href="#" className=" d-flex align-items-center text-white">
                        <div className="nav-icon">
                            <img src={history} alt="accounts icon" />
                            <img className="active-icon" src={historyActive} alt="accounts icon" />
                        </div>
                        <div className="nav-text ml-3">Change History</div>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;