import React, { Component } from 'react';
import AdminLayout, { SectionLayout } from "../../../components/admin/AdminLayout";
import Router from 'next/router';
import nextCookie from 'next-cookies';
import Button from '../../../components/Button';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus'

const dummy = {
    siteTitle : "Code Pelajar",
    siteDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue neque in dapibus tincidunt. Aliquam consectetur ipsum eget pellentesque rhoncus. Mauris ornare quis sapien non fermentum. Integer posuere lorem quis felis semper, eget efficitur enim faucibus. Proin tempus id diam lacinia ullamcorper."
}

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            editMode : ""
        }
    }

    openEdit = (value) => {
        this.setState({
            editMode : value
        })
    }

    closeEdit = () => {
        this.setState({
            editMode : ""
        })
    }

    render(){
        return(
            <div>
                <AdminLayout
                    pageTitle="Setting - Code Pelajar"
                    pageDescription = "Setting - Code Pelajar"
                >   
                    <SectionLayout title="Setting">
                        {
                            this.state.editMode === "SITE_TITLE" ?
                            <div className="form-group">
                                <label className="form-label">Site Title</label>
                                <div className="form-input">
                                    <input type="text" placeholder="Code Pelajar" value={dummy.siteTitle} />
                                    <div className="action-wrapper">
                                        <Button  size =  "small" link = {false} variant = "default" title = "Save Changes" style = {{marginRight : 5}} />
                                        <Button onClick={this.closeEdit}  size =  "small" link = {false} variant = "secondary" title = "Cancel" style = {{marginRight : 5}} />
                                    </div>
                                </div>

                            </div>
                            :
                            <div className="form-group">
                                <label className="form-label">Site Title</label>
                                <div className="form-input">
                                    <span className="form-value"><strong>{dummy.siteTitle}</strong></span>
                                </div>
                                <span onClick={() => this.openEdit('SITE_TITLE')} className="edit-button">Edit</span>
                            </div>
                        }
                        {
                            this.state.editMode === "SITE_DESCRIPTION" ?
                            <div className="form-group">
                                <label className="form-label">Site Description</label>
                                <div className="form-input">
                                    <textarea rows={5} defaultValue={dummy.siteDescription}></textarea>
                                    <div className="action-wrapper">
                                        <Button  size =  "small" link = {false} variant = "default" title = "Save Changes" style = {{marginRight : 5}} />
                                        <Button onClick={this.closeEdit}  size =  "small" link = {false} variant = "secondary" title = "Cancel" style = {{marginRight : 5}} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="form-group">
                                <label className="form-label">Site Description</label>
                                <div className="form-input">
                                    <span className="form-value">{dummy.siteDescription}</span>
                                </div>
                                <span onClick={() => this.openEdit("SITE_DESCRIPTION")} className="edit-button">Edit</span>
                            </div>
                        }
                        {
                            this.state.editMode === "ADMIN" ?
                            <div className="form-group">
                                <label className="form-label">New Admin</label>
                                <div className="form-input">
                                    <div className="admin-form">
                                        <label>Fullname</label>
                                        <input type="text" placeholder="Fullname" />
                                    </div>
                                    <div className="admin-form">
                                        <label>Username</label>
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="admin-form">
                                        <label>Email</label>
                                        <input type="text" placeholder="email" />
                                    </div>
                                    <div className="admin-form">
                                        <label>Password</label>
                                        <input type="password" placeholder="******" />
                                    </div>
                                    <div className="admin-form">
                                        <label>Verify password</label>
                                        <input type="password" placeholder="******" />
                                    </div>
                                    <div className="action-wrapper">
                                        <Button  size =  "small" link = {false} variant = "default" title = "Save Changes" style = {{marginRight : 5}} />
                                        <Button onClick={this.closeEdit}  size =  "small" link = {false} variant = "secondary" title = "Cancel" style = {{marginRight : 5}} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="form-group">
                                <label className="form-label">Admin</label>
                                <div className="form-input">
                                    <ul className="list-admin">
                                        <li>SuperAdmin</li>
                                        <li>SuperAdmin</li>
                                        <li>SuperAdmin</li>
                                        <li>
                                            <span onClick={() => this.openEdit("ADMIN")} style={{color : "blue", cursor : "pointer"}}>
                                                <Icon icon={plus} size={18} />
                                                <span style={{marginLeft : 6}}>Add User</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </SectionLayout>
                    <style jsx>{`
                        .form-group {
                            max-width : 800px;
                            position : relative;
                            display : flex;
                            // transition : .1s;
                            padding : 14px 24px;
                        }
                        .edit-button {
                            position : absolute;
                            display : none;
                            bottom : 14px;
                            right : 14px;
                            padding : 4px 8px;
                            font-size : 14px;
                            color : #fff;
                            border-radius : 4px;
                            background-color : #ff3f34;
                            cursor : pointer;
                            z-index  : 1
                        }
                        .form-group:hover {
                            background-color : #eee;
                        }
                        .form-group:hover .edit-button {
                            display : inline-block;
                        }
                        .form-label {
                            width : 250px;
                            padding : 8px 14px 0 0;
                        }
                        .form-value {
                            display : inline-block;
                            padding : 8px 14px 0 0;
                            line-height : 1.6;
                        }
                        .form-input {
                            width : calc(100% - 300px)
                        }
                        .action-wrapper {
                            padding : 14px 0 0 0;
                        }
                        .admin-form {
                            margin-bottom :10px;
                        }
                        .admin-form label {
                            display : inline-block;
                            margin-bottom : 5px;
                        }
                        input[type="text"], input[type="email"], input[type="password"], textarea {
                            width :100%;
                            border : 1.5px solid rgba(0,0,0,0.2);
                            padding : 8px 8px;
                            border-radius : 8px;
                            color : #444;
                            font-family: "Google Sans", sans-serif;
                            font-size : 16px;
                            outline : none;
                            transition : .3s ease;
                        }
                        input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus, textarea:focus {
                            border-color : rgba(0,0,0,0.5)
                        }
                        .list-admin {
                            padding :0;
                            margin :0;
                            list-style : none;
                        }
                        .list-admin li:not(:last-child) {
                            padding : 8px 14px;
                            background-color : #ddd;
                            margin-bottom : 8px;
                        }
    
                    `}</style>
                </AdminLayout>
            </div>
        )
    }
}

Main.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let cp_token = cookies.cp_token;
    let cp_user = typeof(cp_token) !== "undefined" ? JSON.parse(cookies.cp_user) : null;

    if(ctx.req && !cp_token){
        ctx.res.writeHead(302, {
            Location : '/admin/login'
        })
        ctx.res.end();
        return
    }

    if(!cp_token){
        Router.push('/admin/login');
    }
    
    return {
        cp_token : cp_token,
        cp_user : cp_user,
        setting : {
            siteTitle : dummy.siteTitle,
            siteDescription : dummy.siteDescription,
        }
    };
}

export default Main;