import React from 'react';
import Sidebar from './Sidebar';
//import Layout from '../../hoc/Layout';

const Dashboard = props =>{
    return(
        <>
        <div className="dashboard">
        <div className="sidebar">
        <Sidebar/>
        </div>
        <div className="userPanel">
        {props.children}
        </div>
        </div>
        </>
    );
}

export default Dashboard;