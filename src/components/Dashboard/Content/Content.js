import React from 'react';
import {Route,Switch} from 'react-router-dom';
import CreatePost from './CreatePost';
import Dashboard from '../Dashboard';
import Layout from '../../../hoc/Layout';

const Content = props => {
    return(
        <Layout>
     
             <Dashboard>
             <Route path="/dashboard/:user/create-post" exact component={CreatePost} />
             </Dashboard>
        </Layout>
    );
}

export default Content;