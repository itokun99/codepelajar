import React from 'react';
import Link from 'next/link';

const Button = (props) => {
    let background = "";
    let textColor = "";
    switch(props.type){
        default:
            background = "#4834d4";
            textColor = "#fff";
    }
    return(
        <>
            {
                props.link ? 
                (
                    <Link href={props.href}>
                        <a style={props.style} type={props.type} title={props.title}>{props.title}</a>
                    </Link>
                )
                :
                (
                    <button style={props.style} type={props.type}>
                        {props.title}
                    </button>
                )
            }
            <style jsx>{`
                a , button {
                    display : inline-block;
                    text-decoration : none;
                    font-weight : bold;
                    padding : 10px 18px;
                    color : ${textColor};
                    background-color : ${background};
                    letter-spacing : 1px;
                }
            `}</style>
        </>
    )
}

export default Button;