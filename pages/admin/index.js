import React, { Component } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

class Main extends Component {
    render(){
        return (
            <></>
        );
    }
}


Main.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let cp_token = cookies.cp_token;
    // let cp_user = JSON.parse(cookies.cp_user);

    if(ctx.req && !cp_token){

        ctx.res.writeHead(302, {
            Location : '/admin/login'
        })
        ctx.res.end();
        return
    } else {
        ctx.res.writeHead(302, {
            Location : '/admin/dashboard'
        })
        ctx.res.end();
        return
    }

    if(!cp_token){
        Router.push('/admin/login');
    } else {
        Router.push('/admin/dashboard');        
    }

    return cp_token;
}

export default Main;