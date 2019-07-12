import React, { Component } from 'react';
import AdminLayout from "../../../components/admin/AdminLayout";
import nextCookie from 'next-cookies';
import Router from 'next/router';
import SkeletonLoader from '../../../components/admin/SkeletonLoader';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            skelLoader : true
        }
    }

    hideLoader = () => {
        setTimeout(() => {
            this.setState({
                skelLoader : false
            })
        }, 1000)
    }

    componentDidMount(){
        this.hideLoader();
    }

    render(){
        return(
            <AdminLayout
                pageTitle="Dashboard - Code Pelajar"
                pageDescription = "Dashboard - Code Pelajar"
            >
                {
                    this.state.skelLoader ? 
                    <SkeletonLoader />
                    :
                    (
                        <div>Dashboard</div>
                    )
                }
            </AdminLayout>
        )   
    }
}

Main.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let cp_token = cookies.cp_token;
    let cp_user = typeof(cp_token) !== "undefined" ? JSON.parse(cookies.cp_user) : {};

    if(ctx.req && !cp_token){
        ctx.res.writeHead(302, {
            Location : '/admin/login'
        })
        ctx.res.end();
        return
    }

    if(!cp_token){
        Router.push('/admin/login');
    }
    
    return {
        cp_token : cp_token,
        cp_user : cp_user
    };
}

export default Main;