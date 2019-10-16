import React, { Component } from 'react';
import { AdminLayout } from '../../../containers/templates'
import { Button, AdminSection as SectionLayout } from '../../../components';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus';
import { getCookiesFromContext, COLOR } from '../../../utils';
import { API } from '../../../config';
import _ from 'lodash';

const dummy = {
    siteTitle : "Code Pelajar",
    siteDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue neque in dapibus tincidunt. Aliquam consectetur ipsum eget pellentesque rhoncus. Mauris ornare quis sapien non fermentum. Integer posuere lorem quis felis semper, eget efficitur enim faucibus. Proin tempus id diam lacinia ullamcorper."
}

class Main extends Component {
    constructor(props){
        super(props);
        let { codepelajar } = this.props;
        this.state = {
            initState: codepelajar,
            setting: codepelajar,
            editMode : ""
        }
    }

    openEdit = (value) => {
        this.setState({ editMode : value })
    }
    closeEdit = () => {
        const { setting, initState } = this.state;
        console.log(setting, initState)
        let match = true;
        for(let key in setting){
            if(setting[key] !== initState[key]){
                match = false;
            }
        }
        if(match){
            this.setState({ editMode : "" })
        } else {
            let conf = confirm('Save change?');
            if(conf){
                alert('Saved!')
                this.setState({ editMode : "" })
            } else {
                alert('Cancel!')
                this.setState({ editMode : "" })
            }
        }
    }

    updateSetting = () => {
        const { setting } = this.state;
    }

    _handleChangeText = (value, name) => {
        const { setting } = this.state;
        setting[name] = value;
        this.setState({
            setting: setting
        }, () => console.log(this.state.initState))
    }

    render(){
        const { editMode, setting } = this.state
        console.log(this.state, this.props)
        return(
            <div>
                <AdminLayout
                    pageTitle="Setting - Code Pelajar"
                    pageDescription = "Setting - Code Pelajar"
                >
                    <SectionLayout title="Setting">
                        {
                            editMode === "SITE_TITLE" ?
                            <div className="form-group">
                                <label className="form-label">Site Title</label>
                                <div className="form-input">
                                    <input type="text" placeholder="Site title" onChange={e => this._handleChangeText(e.target.value, 'site_title')} defaultValue={setting.site_title} />
                                    <div className="action-wrapper">
                                        <Button  size =  "small" link = {false} variant = "success" title = "Save Changes" style = {{marginRight : 5}} />
                                        <Button onClick={this.closeEdit}  size =  "small" link = {false} variant = "secondary" title = "Cancel" style = {{marginRight : 5}} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="form-group">
                                <label className="form-label">Site Title</label>
                                <div className="form-input">
                                    <span className="form-value"><strong>{setting.site_title}</strong></span>
                                </div>
                                <span onClick={() => this.openEdit('SITE_TITLE')} className="edit-button">Edit</span>
                            </div>
                        }
                        {
                            editMode === "SITE_DESCRIPTION" ?
                            <div className="form-group">
                                <label className="form-label">Site Description</label>
                                <div className="form-input">
                                    <textarea onChange={e => this._handleChangeText(e.target.value, 'site_description')} rows={5} defaultValue={setting.site_description}></textarea>
                                    <div className="action-wrapper">
                                        <Button  size =  "small" link = {false} variant = "success" title = "Save Changes" style = {{marginRight : 5}} />
                                        <Button onClick={this.closeEdit}  size =  "small" link = {false} variant = "secondary" title = "Cancel" style = {{marginRight : 5}} />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="form-group">
                                <label className="form-label">Site Description</label>
                                <div className="form-input">
                                    <span className="form-value">{setting.site_description}</span>
                                </div>
                                <span onClick={() => this.openEdit("SITE_DESCRIPTION")} className="edit-button">Edit</span>
                            </div>
                        }
                        {
                            editMode === "ADMIN" ?
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
                                        <Button  size =  "small" link = {false} variant = "success" title = "Save Changes" style = {{marginRight : 5}} />
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
                            color : ${COLOR.light100};
                            border-radius : 4px;
                            background-color : ${COLOR.red100};
                            cursor : pointer;
                            z-index  : 1
                        }
                        .form-group:hover {
                            background-color : ${COLOR.grey25};
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
                            border : 1.5px solid ${COLOR.dark25};
                            padding : 8px 8px;
                            border-radius : 8px;
                            color : ${COLOR.dark100};
                            font-family: "Google Sans", sans-serif;
                            font-size : 16px;
                            outline : none;
                            transition : .3s ease;
                        }
                        input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus, textarea:focus {
                            border-color : ${COLOR.dark75}
                        }
                        .list-admin {
                            padding :0;
                            margin :0;
                            list-style : none;
                        }
                        .list-admin li:not(:last-child) {
                            padding : 8px 14px;
                            background-color : ${COLOR.red100};
                            margin-bottom : 8px;
                        }
    
                    `}</style>
                </AdminLayout>
            </div>
        )
    }
}

Main.getInitialProps = async (ctx) => {
    const cookie_data = getCookiesFromContext(ctx);
    const response = await API.codepelajar();
    const codepelajar = response.data;
    return {
        cookie_data,
        setting : {
            siteTitle : dummy.siteTitle,
            siteDescription : dummy.siteDescription,
        },
        codepelajar
    };
}

export default Main;