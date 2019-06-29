import React from 'react';
import Head from './head';
import Nav from './nav';
import { string } from 'prop-types'
import Header from './Header';
import Footer from './Footer';
const WebLayout = (props) => {
    return (
        <div className="main">
            <Head 
                title={props.pageTitle}
                description = {props.pageDescription}
                url = {props.pageUrl}
                ogImage = {props.pageThumbnail}
            />
            <Header />
            <div className="content-main">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

WebLayout.propTypes = {
    pageTitle: string,
    pageDescription: string,
    pageUrl: string,
    pageThumbnail: string
}

export default WebLayout;