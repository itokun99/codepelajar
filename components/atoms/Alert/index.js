import React from 'react';
import { string, bool } from 'prop-types';
import { COLOR, METRICS, THEMESCOLOR } from '../../../utils';

const Alert = ({ show, message, type, ...props }) => {
    return(
        <>
            {
                show ?
                <div {...props} className={`alert ${type}`}>
                    <p>{message}</p>
                    <style jsx>{`
                        .alert {
                            background-color : ${COLOR.grey100};
                            padding : ${METRICS.gutters.string.sm} ${METRICS.gutters.string.md};
                            border-radius : ${METRICS.gutters.string.sm};
                            color : ${THEMESCOLOR.fontLight};
                        }
                        .alert.success {
                            background-color: ${THEMESCOLOR.success};
                        }
                        .alert.danger {
                            background-color: ${THEMESCOLOR.danger};
                            color: ${THEMESCOLOR.fontLight}
                        }
                        .alert.info {
                            background-color: ${THEMESCOLOR.info};
                        }
                        .alert.warning {
                            border-color: ${COLOR.orange75};
                            background-color: ${THEMESCOLOR.warning};
                            color: ${THEMESCOLOR.fontLight}
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