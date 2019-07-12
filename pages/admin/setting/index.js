import AdminLayout, { SectionLayout } from "../../../components/admin/AdminLayout";
import Router from 'next/router';
import nextCookie from 'next-cookies';
import Button from '../../../components/Button';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus'

const Main = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Setting - Code Pelajar"
                pageDescription = "Setting - Code Pelajar"
            >   
                <SectionLayout title="Setting">
                    <div className="form-group">
                        <label className="form-label">Site Title</label>
                        <div className="form-input">
                            <input type="text" placeholder="Code Pelajar" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Site Description</label>
                        <div className="form-input">
                            <textarea type="text" rows={5} placeholder="Site description"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Admin</label>
                        <div className="form-input">
                            <ul className="list-admin">
                                <li>SuperAdmin</li>
                                <li>SuperAdmin</li>
                                <li>SuperAdmin</li>
                                <li>
                                    <span style={{color : "blue"}}>
                                        <Icon icon={plus} size={18} />
                                        <span style={{marginLeft : 6}}>Add User</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label"></label>
                        <div className="form-input">
                            <Button 
                                link = {false}
                                title="Save Changes"

                            />
                            {/* <textarea type="text" rows={5} placeholder="Site description"></textarea> */}
                        </div>
                    </div>
                </SectionLayout>
                <style jsx>{`
                    .form-group {
                        max-width : 800px;
                        position : relative;
                        margin-bottom : 24px;
                        display : flex;
                    }
                    .form-label {
                        width : 250px;
                        padding : 8px 14px 0 0;
                    }
                    .form-input {
                        width : calc(100% - 300px)
                    }
                    input[type="text"], input[type="email"], input[type="password"], textarea {
                        width :100%;
                        border : 1.5px solid rgba(0,0,0,0.2);
                        padding : 8px 8px;
                        border-radius : 8px;
                        color : #444;
                        font-family: "Google Sans", sans-serif;
                        font-size : 14px;
                        outline : none;
                        transition : .3s ease;
                    }
                    input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus, textarea:focus {
                        border-color : rgba(0,0,0,0.5)
                    }
                    .list-admin {
                        padding :0;
                        margin :0;
                        list-style : none;
                    }
                    .list-admin li:not(:last-child) {
                        padding : 8px 14px;
                        background-color : #eee;
                        margin-bottom : 8px;
                    }

                `}</style>
            </AdminLayout>
        </div>
    )
}

Main.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let cp_token = cookies.cp_token;
    let cp_user = typeof(cp_token) !== "undefined" ? JSON.parse(cookies.cp_user) : null;

    if(ctx.req && !cp_token){
        ctx.res.writeHead(302, {
            Location : '/admin/login'
        })
        ctx.res.end();
        return
    }

    if(!cp_token){
        Router.push('/admin/login');
    }
    
    return {
        cp_token : cp_token,
        cp_user : cp_user
    };
}

export default Main;