import React from 'react';
import Link from 'next/link';
import {string, object, bool} from 'prop-types';
const Button = (props) => {
    let background = "";
    let hoverBackground = "";
    let textColor = "";
    
    switch(props.variant){
        case "success": background = "#05c46b"; hoverBackground = "#089855"; textColor = "#fff";
            break;
        case "danger": background = "#ff3f34"; hoverBackground = "#bd2e26"; textColor = "#fff";
            break;
        case "warning": background = "#ffa801"; hoverBackground = "#d08901"; textColor = "#fff";
            break;
        case "secondary": background = "#808e9b"; hoverBackground = "#59646d"; textColor = "#fff";
            break;
        default: background = "#4834d4"; hoverBackground = "#312390"; textColor = "#fff";
            break;
    }

    return(
        <>
            {
                props.link ? 
                (
                    <Link href={props.href}>
                        <a style={props.style} variant={props.variant} title={props.title}>{props.title}</a>
                    </Link>
                )
                :
                (
                    <button onClick={props.onClick} type={props.type} style={props.style} variant={props.variant}>
                        {props.title}
                    </button>
                )
            }
            <style jsx>{`
                a , button {
                    display : inline-block;
                    text-decoration : none;
                    font-weight : 600;
                    padding : 10px 18px;
                    color : ${textColor};
                    background-color : ${background};
                    border-radius : 4px;
                    border-width : 2px;
                    border-color : ${background};
                    box-shadow : none;
                    border-style : solid;
                    font-size : 16px;
                    line-height : 1.2;
                    transition : .3s;
                    cursor : pointer;
                    outline : none;
                    ${props.outline ? ` background-color : transparent; color : ${background};` : ""}
                    ${props.size === "small" ?  `padding : 8px 14px; font-size : 14px;` : props.size === "large"? `padding : 14px 26px;font-size : 18px;` : ""}
                    ${props.rounded ? "border-radius : 100px;" :  ""}
                    ${props.block ? "display : block; width : 100%;" : ""}
                    ${props.disable ? `
                        user-select : none;
                        touch-action : manipulation;
                        cursor : not-allowed;
                        opacity : .65;
                        box-shadow : none;
                    `: ''}
                }

                a:hover, button:hover {
                    background-color : ${hoverBackground};
                    border-color : ${hoverBackground};
                    ${props.outline ? `color : ${textColor}`: ""}
                    ${props.disable ? `
                        border-color : ${background};
                        background-color : ${background};
                        transition : 0;
                        user-select : none;
                        touch-action : manipulation;
                        cursor : not-allowed;
                        opacity : .65;
                        box-shadow : none;
                    `: ''}
                }
                a:focus, button:focus {
                    background-color : ${hoverBackground};
                    border-color : ${hoverBackground};
                    box-shadow : 0 1px 8px 2px ${background};
                    ${props.outline ? `color : ${textColor}`: ""} 
                    ${props.disable ? `
                        border-color : ${background};
                        background-color : ${background};
                        transition : 0;
                        user-select : none;
                        touch-action : manipulation;
                        cursor : not-allowed;
                        opacity : .65;
                        box-shadow : none;
                    `: ''}
                }
            `}</style>
        </>
    )
}

Button.propTypes = {
    variant : string,
    size : string,
    style : object,
    outline : bool,
    rounded : bool,
    block : bool,
    title : string,
    link : bool
}

export default Button;