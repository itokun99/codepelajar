import React from 'react';
import Head from '../head';
import Header from './Header';
import Sidebar from './Sidebar';
import { string } from 'prop-types'
import Content from './Content';

export const SectionLayout = (props) => {
    return (
        <div className="section">
            <div className='section-header'>
                <h2 className='section-title'>{props.title}</h2>
            </div>
            <div className="section-content">
                {props.children}
            </div>
            <div className="section-footer">

            </div>
            <style jsx>{`
                .section {
                    position : relative;
                }
                .section-title {
                    display : inline-block;
                    margin : 0 0 5px 0;
                    padding-bottom : 5px;
                    color : #444;
                }
                .section-content { 
                    padding : 24px 0;
                }
            `}</style>
        </div>
    )
}

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