import React, { Component } from 'react';
import Head from '../head';
import Header from './Header';
import Sidebar from './Sidebar';
import { string } from 'prop-types'
import Content from './Content';
import LoadingBar from 'react-top-loading-bar';

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

class AdminLayout extends Component {
    constructor(props){
        super(props)
        this.state = {
            loadingBar : 0
        }
    }

    addLoadingBar = value => {
        this.setState({
            loadingBar : this.state.loadingBar + value
        })
    }

    completeLoadingBar = () => {
        this.setState({
            loadingBar : 100
        })
    }

    onLoadingFinish = () => {
        this.setState({
            loadingBar : 0
        })
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        
    }

    render(){
        if(this.state.loadingBar <= 100){
            setTimeout(() => {
                this.addLoadingBar(30)
            }, 50)
        }
        return(
            <div className="main">
                <Head 
                    title={this.props.pageTitle}
                    description = {this.props.pageDescription}
                    url = {this.props.pageUrl}
                    ogImage = {this.props.pageThumbnail}
                />
                <LoadingBar
                    progress={this.state.loadingBar}
                    height = {3}
                    background = "blue"
                    onLoaderFinished = {() => this.state.onLoadingFinish}
                />
                <Header />
                <Sidebar />
                <Content>
                    {this.props.children}
                </Content>
            </div>
        )
    }
}

AdminLayout.propTypes = {
    pageTitle: string,
    pageDescription: string,
    pageUrl: string,
    pageThumbnail: string
}

export default AdminLayout;