import React from 'react';
import { string } from 'prop-types';
import { Header, Footer } from '../../../components/organisms';
import { Head } from '../../../components/molecules';
import { Loading } from '../../../components';
import { connect } from 'react-redux';

//Web Layout
const WebLayout = (props) => {
    return (
        <div className="main">
            <Head 
                title={props.pageTitle}
                description= {props.pageDescription}
                url= {props.pageUrl}
                ogImage= {props.pageThumbnail}
            />
            <Loading />
            <Header 
                siteTitle= {props.siteTitle}
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

const mapStateToProps = state => {
    console.log(state);
    return {
        isLoading: state.loading.show
    }
}

export default connect(mapStateToProps)(WebLayout);