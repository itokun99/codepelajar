import React from 'react';
import Link from 'next/link';
import {string, object, bool} from 'prop-types';
import { METRICS, COLOR, THEMESCOLOR } from '../../../utils';

const Button = ({ variant, size, outline, rounded, block, title, link, style, className, type, disable, ...props }) => {

    return(
        <>
            {
                props.link ? 
                (
                    <Link href={props.href}>
                        <a 
                            style={style} 
                            className={`${className} ${variant}`} 
                            title={title}
                        >
                            {title}
                        </a>
                    </Link>
                )
                :
                (
                    <button 
                        onClick={props.onClick}
                        className={`${className} ${variant} ${block? "block" : ""} ${rounded? "rounded" : ""} ${outline? "outline" : ""} ${disable? "disable": ""}`} 
                        type={type} style={style}>
                        {title}
                    </button>
                )
            }
            <style jsx>{`
                a , button {
                    display : inline-block;
                    text-decoration : none;
                    font-weight : 600;
                    padding : ${METRICS.gutters.string.sm} ${METRICS.gutters.string.md};
                    color : ${COLOR.dark100};
                    background-color : ${COLOR.light100};
                    border-radius : ${METRICS.gutters.string.s};
                    border-width : ${METRICS.gutters.string.xs};
                    border-color : ${COLOR.light100};
                    box-shadow : none;
                    border-style : solid;
                    font-size : 16px;
                    line-height : 1.2;
                    transition : .3s;
                    cursor : pointer;
                    outline : none;
                }

                button.success, a.success {
                    background-color: ${THEMESCOLOR.success};
                    border-color: ${THEMESCOLOR.success};
                    color: ${THEMESCOLOR.fontLight}
                }

                button.warning, a.warning {
                    background-color: ${THEMESCOLOR.warning};
                    border-color: ${THEMESCOLOR.warning};
                    color: ${THEMESCOLOR.fontLight}
                }
                button.danger, a.danger {
                    background-color: ${THEMESCOLOR.danger};
                    border-color: ${THEMESCOLOR.danger};
                    color: ${THEMESCOLOR.fontLight}
                }
                button.info, a.info {
                    background-color: ${THEMESCOLOR.info};
                    border-color: ${THEMESCOLOR.info};
                    color: ${THEMESCOLOR.fontLight}
                }
                button.secondary, a.secondary {
                    background-color: ${THEMESCOLOR.secondary};
                    border-color: ${THEMESCOLOR.secondary};
                }
                button.success:hover , a.success:hover {
                    background-color: ${THEMESCOLOR.successHover};
                    border-color: ${THEMESCOLOR.successHover}
                }
                button.warning:hover , a.warning:hover {
                    background-color: ${THEMESCOLOR.warningHover};
                    border-color: ${THEMESCOLOR.warningHover};
                }
                button.danger:hover, a.danger:hover {
                    background-color: ${THEMESCOLOR.dangerHover};
                    border-color: ${THEMESCOLOR.dangerHover};
                }
                button.info:hover, a.info:hover {
                    background-color: ${THEMESCOLOR.infoHover};
                    border-color: ${THEMESCOLOR.infoHover};
                }
                button.secondary:hover, a.secondary:hover {
                    background-color: ${THEMESCOLOR.secondaryHover};
                    border-color: ${THEMESCOLOR.secondaryHover}
                }

                button.success:focus , a.success:focus {
                    background-color: ${THEMESCOLOR.successHover};
                    box-shadow : 0 2px 8px 0px ${THEMESCOLOR.success};
                }
                button.warning:focus , a.warning:focus {
                    background-color: ${THEMESCOLOR.warningHover};
                    box-shadow : 0 2px 8px 0px ${THEMESCOLOR.warning};
                }
                button.danger:focus, a.danger:focus {
                    background-color: ${THEMESCOLOR.dangerHover};
                    box-shadow : 0 2px 8px 0px ${THEMESCOLOR.danger};
                }
                button.info:focus, a.info:focus {
                    background-color: ${THEMESCOLOR.infoHover};
                    box-shadow : 0 2px 8px 0px ${THEMESCOLOR.info};
                }
                button.secondary:focus, a.secondary:focus {
                    background-color: ${THEMESCOLOR.secondaryHover};
                    box-shadow : 0 2px 8px 0px ${THEMESCOLOR.secondary};
                }
                button.outline, a.outline {
                    background-color: transparent !important
                }
                button.success.outline, a.succes.outline {
                    color: ${THEMESCOLOR.success}
                }

                button.warning.outline, a.warning.outline {
                    color: ${THEMESCOLOR.warning}
                }
                button.danger.outline, a.danger.outline {
                    color: ${THEMESCOLOR.danger}
                }
                button.info.outline, a.info.outline {
                    color: ${THEMESCOLOR.info}
                }
                button.secondary.outline, a.secondary.outline {
                    color: ${THEMESCOLOR.secondary}
                }

                button.success.outline:hover , a.success.outline:hover {
                    background-color: ${THEMESCOLOR.successHover} !important;
                    color: ${THEMESCOLOR.fontLight}
                }
                button.warning.outline:hover , a.warning.outline:hover {
                    background-color: ${THEMESCOLOR.warningHover}  !important;
                    color: ${THEMESCOLOR.fontLight}
                }
                button.danger.outline:hover, a.danger.outline:hover {
                    background-color: ${THEMESCOLOR.dangerHover}  !important;
                    color: ${THEMESCOLOR.fontLight}                    
                }
                button.info.outline:hover, a.info.outline:hover {
                    background-color: ${THEMESCOLOR.infoHover}  !important;
                    color: ${THEMESCOLOR.fontLight}                    
                }
                button.secondary.outline:hover, a.secondary.outline:hover {
                    background-color: ${THEMESCOLOR.secondaryHover}  !important;
                    color: ${THEMESCOLOR.fontLight}                    
                }

                button.rounded {
                    border-radius: 150px;
                }

                button.block, a.block {
                    display: block !important;
                    width: 100%;
                }

                button.disable, a.disable {
                    transition: 0 !important;
                    user-select: none !important;
                    touch-action: manipulation !important;
                    cursor: not-allowed !important;
                    opacity: .65 !important;
                    box-shodow: none !important;
                }
            `}</style>
        </>
    )
}

Button.propTypes = {
    className: string,
    variant : string,
    size : string,
    style : object,
    outline : bool,
    rounded : bool,
    block : bool,
    title : string,
    link : bool,
    type: string,
    disable: bool
}

Button.defaultProps = {
    className: "",
    variant: "",
    size: "",
    style: {},
    outline: false,
    rounded: false,
    block: false,
    title: "Button",
    link: false,
    type: "",
    disable: false

}

export default Button;