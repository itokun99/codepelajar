import React from 'react';
import { string, bool } from 'prop-types';

const Alert = (props) => {
    let color, background, borderColor;
    switch(props.type){
        case "success": background = "rgba(5, 196, 107, .5)"; borderColor = "rgba(8, 152, 85, .5)"; color = "rgba(8, 152, 85, 1)";
            break;
        case "danger": background = "rgba(255, 63, 52, .5)"; borderColor = "rgba(189, 46, 38, .5)"; color = "rgba(189, 46, 38, 1)";
            break;
        case "warning": background = "rgba(255, 168, 1, .6)"; borderColor = "rgba(208, 137, 1, .5)"; color = "rgba(208, 137, 1, 1)";
            break;
        case "secondary": background = "rgba(128, 142, 155, .5)"; borderColor = "rgba(89, 100, 109, .5)"; color = "rgba(89, 100, 109, 1)";
            break;
        case "info": background = "rgba(72, 52, 212, .5)"; borderColor = "rgba(49, 35, 144, .5)"; color = "rgba(49, 35, 144, 1)";
            break;
        default: color = "#444"; background = "#ddd"; borderColor = "#aaa";
            break;
    }
    return(
        <>
            {
                props.show ?
                <div style={props.style} className="alert">
                    <p>{props.message}</p>
                    <style jsx>{`
                        .alert {
                            background-color : ${background};
                            padding : 10px 14px;
                            border : 2px solid ${borderColor};
                            border-radius : 8px;
                            color : ${color};
                            ${props.align === "center" ? `text-align : center` : `` };
                        }
                        p {
                            margin : 0;
                        }
                    `}</style>
                </div>     
                : null
            }
        </>
    )
}


Alert.propTypes = {
    show : bool,
    message : string,
    type : string,
}

Alert.defaultProps = {
    show : false,
    message : "",
    type : "default"
}


export default Alert;