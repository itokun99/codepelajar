import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import WebLayout from '../components/WebLayout';
import Button from '../components/Button';

const Home = () => (
    <WebLayout
        pageTitle = "Code Pelajar - Homepage"
        pageDescription = "Website Portofolio"
        pageUrl = "https://www.codepelajar.com"
    >
        <div className="section hero">
            <div className="container">
                <div className="hero-main row">
                    <div className="full-col text-center">
                        <h2 className="hero-title">Belajar Fundamental Programming</h2>
                        <p className="hero-subtitle">Tempatnya belajar dan berbagi ilmu fundamental programming</p>
                        <div>
                            <Button 
                                type="primary" 
                                title="Apa yang menarik?" 
                                link={true} 
                                href="#"
                                style={{
                                    borderRadius : 50,
                                    backgroundColor : "transparent",
                                    borderWidth : 3,
                                    borderColor : "#fff",
                                    borderStyle : "solid"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style jsx global>{`
            .section {
                position : relative;
                padding : 14px 0;
            }
            .hero {
                background-color : #2ecc71
            }
            .container {
                max-width : 1200px;
                margin : 0 auto;
                padding : 0 14px;
            }
            .hero-main {
                height : 500px;
                align-items : center;
            }
            .row {
                display : flex ;
            }
            .full-col {
                width : 100%;
            }
            .hero-title {
                color : #fff;
                letter-spacing : 1px;
                font-size : 42px;
                margin : 0;
                margin-bottom : 10px;
            }
            .hero-subtitle {
                margin : 0;
                font-size : 20px;
                color : #fff;
                margin-bottom : 24px;
            }
        `}</style>
    </WebLayout>
)

export default Home
