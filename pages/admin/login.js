import React, { Component } from 'react'; 
import Head from "../../components/head";
import Button from "../../components/Button";
import Router from 'next/router';
import Alert from '../../components/Alert';
import axios from 'axios';
import API from '../../utils/services';
import cookies from 'js-cookie';
import nextCookie from 'next-cookies';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            alert : {
                show : false,
                type : "",
                message : "",
            },
            loginForm : {
                email : "",
                password : "",
                role : "admin",

            },
            isLoading : false
        }
    }

    static getInitialProps = async (ctx) => {
        let cookies = nextCookie(ctx);
        let cp_token = cookies.cp_token;
    
        if(ctx.req && cp_token){
            ctx.res.writeHead(302, {
                Location : '/admin/dashboard'
            })
            ctx.res.end();
            return
        }
        
        if(cp_token){
            Router.push('/admin/dashboard');
        }
        return {};
    }

    handleChangeText = ( input, name ) => {
        let value = input.target.value;
        let loginForm = this.state.loginForm;
        loginForm[name] = value;
        this.setState({
            loginForm : loginForm
        })
    }

    submitLogin = async () => {
        try {
            let data = this.state.loginForm
            let noValue = false;
            for(let key in data){
                if(data[key] === ""){
                    noValue = true;
                }
            }

            if(noValue){
                this.setState({
                    alert : {
                        show :true,
                        type : "warning",
                        message : "Email dan Password harap diisi!"
                    }
                })
            } else {
                await this.setState({
                    isLoading : true,
                    alert : {
                        show : true,
                        type : "info",
                        message : "Signing..."
                    }
                }, () => {
                    API.adminLogin(data)
                    .then((response) => {
                        if(response.status === 200){
                            this.setState({
                                alert : {
                                    show : true,
                                    type : "success",
                                    message : "Sign in Successfull!!"
                                }
                            }, () => {
                                var responseData = response.data.data;
                                var { token } = responseData;
                                var user = responseData;
                                delete user.user_password;
                                delete user.token;
                                cookies.set('cp_token', token, { expires : 1 });
                                cookies.set('cp_user', user, { expires : 1 });
                                Router.push('/admin/dashboard');
                            })
                        } else {
                            console.log(response)
                            this.setState({
                                isLoading : false,
                                alert : {
                                    show : true,
                                    type : "danger",
                                    message : response.data.message
                                }
                            })
                        }
                    })
                })
            }
        } catch (error) {
            let message = "Error Code and Network request";
            console.error("Error Code and Network request")
            this.state({
                alert : {
                    show : true,
                    message : message
                }
            })
        }
    }


    componentDidMount(){
        addEventListener('keypress', (event) => {
            var key = event.which || event.keyCode;
            if(key === 13){
                this.submitLogin();
            }
        })
    }

    componentWillUnmount(){
        removeEventListener('keypress', null);
    }



    render(){
        return (
            <>
                <Head
                    title = "Login - Admin"
                />
                <div className="main row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                <Alert
                                    show = {this.state.alert.show}
                                    align = "center"
                                    type = {this.state.alert.type}
                                    message = {this.state.alert.message}
                                    style={{marginTop : 14, marginBottom : 14}}
                                />
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" onChange={(e) => this.handleChangeText(e, "email")} placeholder="your@mail.com" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" onChange={(e) => this.handleChangeText(e, "password")} placeholder="*******" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <div>
                                    {
                                        this.state.isLoading ? 
                                        <Button variant="secondary" title="Loading..." disable block />
                                        :
                                        <Button onClick={this.submitLogin} variant="success" title="Login" block />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <style>
    
                    </style>
                </div>
                <style jsx>{`
                    .main {
                        min-height : 100vh;
                        background : #ddd;
                    }
                    .row {
                        display : flex;
                        justify-content : center;
                        align-items : center;
                    }
                    .col {
                        width : 425px;
                        max-width : 100%;
                        margin : 14px;
                    }
                    .card {
                        width : 100%;
                        background-color : #fff;
                        border-top : 5px solid #2ecc71;
                    }
                    .card-header {
                        padding : 24px 24px 0 24px;
                    }
                    .card-body {
                        padding : 0 24px;
                    }
                    .card-footer {
                        padding : 0 24px 24px 24px;
                    }
                    h2 {
                        margin : 0;
                    }
                    .form-group {
                        margin-bottom : 14px;
                    }
                    label {
                        display : inline-block;
                        width : 100%;
                        font-size : 16px;
                        line-height : 1.4;
                        margin-bottom : 8px;
                    }
                    input {
                        font-family : "Google Sans", sans-serif;
                        border : 2px solid #ddd;
                        border-radius : 8px;
                        outline : none;
                        width : 100%;
                        font-size : 16px;
                        line-height : 1.6;
                        padding : 6px 8px;
                        transition : .3s;
                    }
                    input:focus {
                        box-shadow : 0 0 4px 0px #2ecc71;
                        border-color : #2ecc71;
                    }
                `}</style>
            </>
        )
    }
}

export default Login;