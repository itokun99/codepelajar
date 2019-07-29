import React, { Component } from 'react';
import { AdminSection as SectionLayout } from '../../../components'
import { AdminLayout } from "../../../containers/templates";
import nextCookie from 'next-cookies';
import Router from 'next/router';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            skelLoader : true,
            loadingBar : 20
        }
    }

    render(){
        return(
            <AdminLayout
                pageTitle="Dashboard - Code Pelajar"
                pageDescription = "Dashboard - Code Pelajar"
            >
                <SectionLayout title="Dashboard">
                </SectionLayout>
            </AdminLayout>
        )   
    }
}

Main.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let token = cookies.CPA;
    let user = typeof(token) !== "undefined" ? JSON.parse(cookies.user_data) : {};

    if(ctx.req && !token){
        ctx.res.writeHead(302, {
            Location : '/admin/login'
        })
        ctx.res.end();
        return
    }

    if(!token){
        Router.push('/admin/login');
    }
    
    return {
        token,
        user,
    };
}

export default Main;