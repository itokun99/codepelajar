import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="skel-container">
            <div className="skel-header">
                <span className="skel-title"></span>
                <span className="skel-subtitle"></span>
            </div>
            <div className="skel-body">
                <div className="skel-content">
                    <span className="skel-text"></span>
                    <span className="skel-text"></span>
                    <span className="skel-text"></span>
                    <span className="skel-text"></span>
                </div>
            </div>
            <div className="skel-footer">

            </div>
            <style jsx>{`
                .skel-container {
                    position : absolute;
                    width : 100%;
                    height : 100%;
                    padding : 24px;
                    top : 0;
                    left : 0;
                    display : flex;
                    flex-direction : column;
                    justify-content : space-between;
                }
                .skel-header { 
                    max-height : 100px;
                    flex : 1;
                    // background-color : red;
                }
                .skel-body {
                    flex : 1;
                    // background-color : blue;
                }
                .skel-footer {
                    max-height : 50px;
                    flex : 1;
                    // background-color : green;
                }
                .skel-title { 
                    display : block;;
                    width : 40%;
                    height : 30px;
                    background-color : #eee;
                    border-radius : 8px;
                    margin-bottom : 24px;
                }
                .skel-subtitle { 
                    display : block;;
                    width : 70%;
                    height : 20px;
                    background-color : #eee;
                    border-radius : 8px;
                    margin-bottom : 24px;
                }
                .skel-text { 
                    display : block;;
                    width : 70%;
                    height : 20px;
                    background-color : #eee;
                    border-radius : 8px;
                    margin-bottom : 24px;
                }
                .skel-content .skel-text:nth-child(1){
                    width : 50%;
                }
                .skel-content .skel-text:nth-child(2){
                    width : 70%;
                }
                .skel-content .skel-text:nth-child(3){
                    width : 40%;
                }
                .skel-content .skel-text:nth-child(4){
                    width : 30%;
                }
            `}
            </style>
        </div>
    )
}

export default SkeletonLoader;