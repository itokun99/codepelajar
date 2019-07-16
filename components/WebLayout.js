import React from 'react';
import Head from './head';
import Nav from './nav';
import { string } from 'prop-types'
import Header from './Header';
import Footer from './Footer';

//Web Layout
const WebLayout = (props) => {
    return (
        <div className="main">
            <Head 
                title={props.pageTitle}
                description = {props.pageDescription}
                url = {props.pageUrl}
                ogImage = {props.pageThumbnail}
            />
            <Header 
                siteTitle = {props.siteTitle}
            />
            <div className="content-main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

WebLayout.propTypes = {
    pageTitle: string,
    siteTitle: string,
    pageDescription: string,
    pageUrl: string,
    pageThumbnail: string
}


// section
export const Section = (props) => {
    return(
        <div { ...props } className="section">
            { props.children }
            <style jsx>{`
            .section {
                position : relative;
                padding : 24px 0;
            }
            `}</style>
        </div>
    )
}

//container
export const Container = (props) => {
    return(
        <div { ...props } className="container">
            { props.children }
            <style jsx>{`
                .container {
                    margin : 0 auto 0 auto;
                    max-width : 1200px;
                    padding : 0 14px;
                }
            `}
            </style>
        </div>
    )
}

export default WebLayout;