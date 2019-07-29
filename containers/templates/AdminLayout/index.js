import React, { Component } from 'react';
import { string } from 'prop-types'
import { AdminContent as Content, Head } from '../../../components/molecules';
import { AdminHeader as Header, AdminSidebar as Sidebar } from '../../../components/organisms';
import LoadingBar from 'react-top-loading-bar';



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