import nextCookie from 'next-cookies';
import Router from 'next/router';
import { AdminLayout } from '../../../containers/templates'
import { Button, AdminSection as SectionLayout } from '../../../components'
import ReactTable from 'react-table';
import { getCookiesFromContext } from '../../../utils';

let data = [
    {
        title : "Code Pelajar  : Postingan",
        label : "HTML",
        content : "dawadadwa adwadada adawdadawd adwada"
    },
    {
        title : "Code Pelajar  : Postingan",
        label : "HTML",
        content : "dawadadwa adwadada adawdadawd adwada"
    },
    {
        title : "Code Pelajar  : Postingan",
        label : "HTML",
        content : "dawadadwa adwadada adawdadawd adwada"
    },
    {
        title : "Code Pelajar  : Postingan",
        label : "HTML",
        content : "dawadadwa adwadada adawdadawd adwada"
    }
]

let columns = [
    {
        Header : "NO",
        Cell : (row) => {
            return (
                <span>{row.index + 1}</span>
            )
        }
        
    },
    {
        Header : "Post Title",
        accessor : "title"
    },
    {
        Header : "Label",
        accessor : "label"
    },
    {
        Header : "Content",
        accessor : "content"
    },
]

const Main = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Articles - Code Pelajar"
                pageDescription = "Articles - Code Pelajar"
            >
                <SectionLayout title="Articles">
                    <Button
                        href = "#"
                        link = {true} 
                        size = "small"
                        title="Add Post"
                    />
                    <div className="wrapper">
                        <ReactTable
                            columns = {columns}
                            data = {data}
                        />
                    </div>
                </SectionLayout>
            </AdminLayout>
        </div>
    )
}

Main.getInitialProps = async (ctx) => {
    // let cookies = nextCookie(ctx);
    // let cp_token = cookies.cp_token;
    // let cp_user = typeof(cp_token) !== "undefined" ? JSON.parse(cookies.cp_user) : {};

    // if(ctx.req && !cp_token){
    //     ctx.res.writeHead(302, {
    //         Location : '/admin/login'
    //     })
    //     ctx.res.end();
    //     return
    // }

    // if(!cp_token){
    //     Router.push('/admin/login');
    // }
    
    
    // return {
    //     cp_token : cp_token,
    //     cp_user : cp_user
    // };
    const cookie_data = getCookiesFromContext(ctx);

    return {
        cookie_data
    }
}

export default Main;