import React, { Component } from 'react';
import Link from 'next/link';


const NavLink = (props) => {
    return (
        <Link href={props.href} >
            <a title={props.title}>{props.title}</a>
        </Link>
    )
}

const HeaderNav = (props) => {
    return (
        <>
            <div className="header-nav">
                <ul>
                    <li><NavLink href="/" title="Home" /></li>
                    <li><NavLink href="/about" title="About" /></li>
                    <li><NavLink href="#" title="Contact" /></li>
                    <li><NavLink href="#" title="Product" /></li>
                </ul>
            </div>
            <style jsx global>{`
                .header-nav ul {
                    margin : 0;
                    padding : 0;
                    list-style : none;
                }
                .header-nav ul li {
                    font-size : 16px;
                    display: inline-block;
                }
                .header-nav ul li a {
                    display : inline-block;
                    color : #222;
                    font-weight : bold;
                    text-decoration : none;
                    transition : .3s ease;
                }
                .header-nav ul li > a {
                    line-height : 1.6;
                    padding : 28px;
                }
                .header-nav ul li > a:hover { 
                    background-color : #2ecc71;
                    color : #fff;
                }
            `}</style>
        </>
    )
}

const Brand = (props) => {
    return (
        <>
            <div className="brand">
                <h1 className="brand-title">
                    <Link href="/"><a title={props.title}>{props.title}</a></Link>
                </h1>
            </div>
            <style jsx>{`
                .brand {
                    padding : 24px 0 0 0;
                }
                .brand-title {
                    font-size : 24px;
                    margin : 0;
                }
                a { 
                    text-decoration : none;
                    color : #222;
                }
            `}</style>
        </>
    )
}

class Header extends Component {
    render(){
        return(
            <header className="header">
                <div className="header-container">
                    <div className="header-row">
                        <div className="header-left">
                            <Brand title={this.props.siteTitle} />
                        </div>
                        <div className="header-right">
                            <HeaderNav />
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .header {
                        background-color : #fff;
                        border-bottom : 1px solid #eee;
                        box-shadow : 0 2px 10px rgba(0,0,0,0.05);
                        height : 80px;
                    }
                    .header-container {
                        max-width : 1200px;
                        margin : 0 auto;
                        padding : 0 14px;
                    }
                    .header-row { 
                        display : flex;
                        justify-content : space-between
                    }
                `}
                </style>
            </header>
        )
    }
}

export default Header;