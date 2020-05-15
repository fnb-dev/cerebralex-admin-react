import React from 'react';
import accounts from '../../images/svgs/accounts.svg'
import analytics from '../../images/svgs/analytics.svg'
import campaigns from '../../images/svgs/campaigns.svg'
import dashboard from '../../images/svgs/dashboard.svg'
import history from '../../images/svgs/history.svg'
import library from '../../images/svgs/library.svg'

const Sidebar = () => {
    return(
        <aside className="sidebar-expanded bg-light-dark" id="sidebar-container">
            <ul className="list-group">
                <li className="list-group-item d-flex">
                    <div className="nav-icon"><img src={accounts} alt="accounts icon" /></div>
                    <div className="nav-text">Accounts</div>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;