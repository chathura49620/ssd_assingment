import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SuperAdminSideNav from '../components/SuperAdmin/sideNav/Sidebar';
import EmpsideNav from '../components/Worker/EmpsideNav/EmpSidebar';
import FinanceTeamMemberSideNav from '../components/Manager/sideNav/Sidebar';

import ProductionManagerDashboard from './Manager/ProManagerDashboard'


import SuperAdminDashboard from './SuperAdmin/Dashboard'
import EmployeeDashboard from './Worker/EmployeeDashboard'

//super admin routers
import UserRoles from './SuperAdmin/UserRoles';
import UserList from './SuperAdmin/UserList';

//login route
import  login  from './SuperAdmin/login';

//worker routes
import Assignments from './Worker/Message';


//manager routes
import UploadFile from "./Manager/UploadFile";




class Dashboard extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            superAdmin: false
        }
        this.renderSideNavigation = this.renderSideNavigation.bind(this);
        this.renderDashboard = this.renderDashboard.bind(this);
    }

    renderSideNavigation(){
        const user_role = localStorage.getItem('user_role');
        const is_login = localStorage.getItem('is_login');
        if(is_login != '1'){
                return false;
        }else{
            if(user_role == 'worker'){
                return (
                    <EmpsideNav/>   
                );
            }
            if(user_role == 'manager'){
                return (
                    <FinanceTeamMemberSideNav />
                );
            }
            if(user_role == 'Super Admin'){
                return (
                    <SuperAdminSideNav/> 
                );
            }else{
                return false;
            }
        }
    }



    renderDashboard(){
        const user_role = localStorage.getItem('user_role')
        const is_login = localStorage.getItem('is_login')
        if(is_login != '1'){
            return (
                <div>
                    <Route path= '/' exact component={login} />
                </div>
            );
        }else{
            if(user_role == 'worker'){
                return (
                    <div>
                        <Route path= '/' exact component={EmployeeDashboard} />
                        <Route path= '/message' exact component={Assignments}/>
                    </div>
                );
            }if(user_role == 'Super Admin'){
                return (
                    <div>
                        <Route path='/' exact component={SuperAdminDashboard} />
                        <Route path='/user-roles' exact component={UserRoles} />
                        <Route path='/user-list' exact component={UserList} />
                    </div>
                );
                }if(user_role == 'manager'){
                return (
                    <div>
                        <div>
                           <Route path= '/' exact component={ProductionManagerDashboard}/>
                            <Route path= '/message' exact component={Assignments} />
                            <Route path= '/file' exact component={UploadFile} />
                        </div>
                    </div>
                );
            }else{
                return false;
            }
        }
    }

    render(){
       return(
           <div>
                 {this.renderSideNavigation()}
                 {this.renderDashboard()}
           </div> 
       );
    }
}

export default Dashboard;
