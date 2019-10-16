import React, { Component } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

class Main extends Component {
    render(){
        return (
            <div>Redirected!</div>
        );
    }
}


Main.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let token = cookies.CPA;

    if(ctx.req && !token){

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
}

export default Main;