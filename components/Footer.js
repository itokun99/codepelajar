import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="footer-container">
                    <div className="row">
                        <div className="col">
                            <div className="footer-item">
                                <h4>Title</h4>
                                <ul>
                                    <li>Item</li>
                                    <li>Item</li>
                                    <li>Item</li>
                                    <li>Item</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item">
                                <h4>Title</h4>
                                <ul>
                                    <li>Item</li>
                                    <li>Item</li>
                                    <li>Item</li>
                                    <li>Item</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-item">
                                <h4>Title</h4>
                                <ul>
                                    <li>Item</li>
                                    <li>Item</li>
                                    <li>Item</li>
                                    <li>Item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row brand">
                        <div className="col">
                            <div className="footer-brand">
                                <h2>Code Pelajar</h2>
                                <p>Tempat belajar programming</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="footer-social">
                                <span>Facebook</span>
                                <span>Github</span>
                                <span>Instagram</span>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>{`
                    .footer {
                        background-color : #222;
                        padding : 14px 0;
                    }
                    .footer-container {
                        max-width : 1200px;
                        margin : 0 auto;
                        padding : 0 14px;
                    }
                    .row {
                        display : flex;
                    }
                    .row.brand {
                        justify-content : space-between
                    }
                    .col {
                        flex : 1;
                    }
                    .row.brand .col {
                        flex : none
                    }
                `}</style>
            </footer>
        )
    }
}

export default Footer;