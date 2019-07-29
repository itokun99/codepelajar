import React from 'react';

const Content = (props) => {
    return(
        <div className="content">
            <div className="content-inner">
                {props.children}
            </div>
            <style jsx>{`
                .content {
                    margin-top : 60px;
                    margin-left : 250px;
                    padding : 24px;
                }
                .content-inner {
                    position : relative;
                    padding : 24px;
                    border : 1px solid #ddd;
                    min-height : calc(100vh - 60px - 48px);
                }
            `}</style>
        </div>
    )
}

export default Content;