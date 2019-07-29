import React, { Component } from 'react';
import { Head, Alert, Button, Loading } from '../../../components';
import Router from 'next/router';
import cookies from 'js-cookie';
import nextCookie from 'next-cookies';
import _ from 'lodash';
import { connect } from 'react-redux';
import { login, API } from '../../../config'

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

    saveTokenUser = (token, user_data) => {
        cookies.set('CPA', token, { expires : 1 })
        cookies.set('user_data', user_data, { expires : 1 })
    }

    sendLoginData = async (user_data) => {
        try {
            var response = await API.login({ body: user_data });
            if(response.status === 200 && !_.isEmpty(response.data)){
                var user_data = response.data;
                var token = user_data.token;
                delete user_data.user_password;
                delete user_data.token;
                this.saveTokenUser(token, user_data);
                this.setState({
                    alert : {
                        show : true,
                        type : "success",
                        message : "Sign in Successfull!!"
                    }
                }, () => {
                    Router.push('/admin/dashboard');
                })
            }
        } catch (error) {
            console.log(error);
            this.setState({
                isLoading : false,
                alert : {
                    show : true,
                    type : "danger",
                    message : _.isObject(error) ? error.data.message : "Something wrong!"
                }
            })
        }
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
                this.setState({
                    isLoading: true,
                    alert: {
                        show: true,
                        type: "info",
                        message: "Try to signing..."
                    }
                }, () => this.sendLoginData(data))
            }
        } catch (error) {
            let message = "Something wrong!";
            console.error(message)
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
                <Loading show={this.props.isLoading} />
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
const mapStateToProps = state => {
    return {
        isLoading: state.loading.show
    }
}

const mapDispathToProps = dipatch => {
    return {
        userLogin: userdata => dipatch(login(userdata))
    }
}

const LoginPage = connect(mapStateToProps, mapDispathToProps)(Login)

export default LoginPage;