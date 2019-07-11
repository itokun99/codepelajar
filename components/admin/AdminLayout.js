import React from 'react';
import Head from '../head';
import Header from './Header';
import Sidebar from './Sidebar';
import { string } from 'prop-types'
import Content from './Content';


const AdminLayout = (props) => {
    return(
        <div className="main">
            <Head 
                title={props.pageTitle}
                description = {props.pageDescription}
                url = {props.pageUrl}
                ogImage = {props.pageThumbnail}
            />
            <Header />
            <Sidebar />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}

AdminLayout.propTypes = {
    pageTitle: string,
    pageDescription: string,
    pageUrl: string,
    pageThumbnail: string
}

export default AdminLayout;