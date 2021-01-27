import React,{useEffect} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './containers/Home';
import singleFullPost from './components/posts/singleFullPost';
import Layout from './hoc/Layout';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Dashboard from './components/Dashboard/Dashboard';
import * as actions from './store/actions/index'; 
import CreatePost from './components/Dashboard/Content/CreatePost';
import Blogs from './components/Blogs/Blogs';
import Page from './components/Blogs/Page';

const App = props => {

  useEffect(()=>{
    props.onCheckAuth();
  },[]);

  let content = (
    <Layout>
    <Route path="/" exact component={Home} />
    <Switch>
    <Route path="/blogs" exact component={Blogs} /> 
    <Route path="/post/:id" exact component={singleFullPost} />
    <Route path="/login" exact component={Login} />
    <Route path="/page/:id" exact component={Page} />
    </Switch>
    </Layout>
  );

  let dashboardRoute = (
    <Dashboard>
    <Route path="/dashboard/:user/create-post" exact component={CreatePost} />
    </Dashboard>
  );

  if(props.location.pathname === '/'){
    dashboardRoute = null;
  } 

  if(props.location.pathname === '/blogs'){
    dashboardRoute = null;
  } 
  
 //console.log(props.location.pathname);
  if(props.location.pathname.split('/')[1]==='post'){
    dashboardRoute = null;
  }

  if(props.location.pathname.split('/')[1]==='page'){
    dashboardRoute = null;
  }

  if(props.loggedIn){
    content =(
      <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/blogs" exact component={Blogs} /> 
     
      <Route path="/post/:id" exact component={singleFullPost} />
      <Route path="/page/:id" exact component={Page} />
      <Route path="/logout" exact component={Logout} />
      {dashboardRoute}
      </Layout>
    );
  }
  
  return (
    <>
    {content}
     </>
  );
}

const mapStateToProps = state => {
  return{
    loggedIn:state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onCheckAuth:()=>dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));