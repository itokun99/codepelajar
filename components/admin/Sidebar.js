import React, { Component } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import {home} from 'react-icons-kit/fa/home';
import {thLarge} from 'react-icons-kit/fa/thLarge';
import {paintBrush} from 'react-icons-kit/fa/paintBrush';
import {book} from 'react-icons-kit/fa/book';
import {fileO} from 'react-icons-kit/fa/fileO';
import {barChart} from 'react-icons-kit/fa/barChart';
import {comments} from 'react-icons-kit/fa/comments';
import {gear} from 'react-icons-kit/fa/gear';
const MenuLink = (props) => {
    return(
        <>
            <Link href={props.href}>
                <a style={props.style} title={props.title} target={props.target}>
                    <Icon style={{marginRight : 14, color : '#444'}} icon={props.icon} size={24} />
                    <span>{props.title}</span>
                </a>
            </Link>
            <style jsx>{`
                a {
                    display : flex;
                    padding : 10px 24px;
                    width : calc(100% - 14px);
                    transition : .2s;
                    color : #444;
                    font-size : 16px;
                    align-items : center;
                }
                a:hover {
                    color : #222;
                    background-color : rgba(0,0,0,0.05);
                    border-radius : 0 40px 40px 0;
                }
                span {
                    display : block;
                    vertical-align : middle;
                }
            `}
            </style>
        </>
    )
}

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-item">
                    <ul>
                        <li><MenuLink icon={thLarge} title="Dashboard" href="/admin/dashboard" /></li>
                        <li><MenuLink icon={book} title="Articles" href="/admin/article" /></li>
                        <li><MenuLink icon={fileO} title="Pages" href="/admin/page" /></li>
                        <li><MenuLink icon={barChart} title="Statistic" href="/admin/statistic" /></li>
                        <li><MenuLink icon={comments} title="Comments" href="/admin/comment" /></li>
                        <li><MenuLink icon={paintBrush} title="Layout" href="/admin/layout" /></li>
                        <li><MenuLink icon={gear} title="Settings" href="/admin/setting" /></li>
                    </ul>
                </div>
                <style jsx>{`
                    .sidebar {
                        position :fixed;
                        top : 60px;
                        left : 0;
                        bottom : 0;
                        width : 250px;
                        border-right : 1px solid #ddd;
                        overflow-y : auto;
                        overflow-x : hidden;
                    }
                    .sidebar-item {
                        padding : 14px 0;
                    }
                    .sidebar-item ul {
                        margin : 0;
                        padding : 0;
                        list-style: none;
                    }
                    .sidebar-item ul > li {

                    }
                `}</style>
            </div>
        )
    }
}

export default Sidebar;