import React, { Component } from 'react';
import AdminLayout, { SectionLayout } from "../../../components/admin/AdminLayout";
import nextCookie from 'next-cookies';
import Router from 'next/router';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            skelLoader : true,
        }
    }

    render(){
        return(
            <AdminLayout
                pageTitle="Add Article - Code Pelajar"
                pageDescription = "Add Article - Code Pelajar"
            >
                <SectionLayout title="Add Article">

                </SectionLayout>
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