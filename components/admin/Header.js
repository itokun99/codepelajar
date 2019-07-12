import React, { Component } from 'react';
import jsCookie from 'js-cookie';
import Router from 'next/router';

class Header extends Component {
    logout = () => {
        jsCookie.remove('cp_token');
        jsCookie.remove('cp_user');
        Router.push('/admin/login');
    }
    render(){
        return(
            <div className="header">
                <div className="col">
                    <h1 className="title">Code Pelajar</h1>
                </div>
                <div className="col">
                    <div>
                        <span onClick={this.logout}>Logout</span>
                    </div>
                </div>
                <style jsx>{`
                    .header {
                        position : fixed;
                        width : 100%;
                        height : 60px;
                        left: 0;
                        top : 0;
                        display : flex;
                        background-color : #fff;
                        border-bottom : 1px solid #ddd;
                        justify-content : space-between;
                        padding : 0 14px;
                        z-index : 2;
                    }
                    .title { 
                        font-size : 24px;

                    }
                `}
                </style>
            </div>
        )
    }
}

export default Header;