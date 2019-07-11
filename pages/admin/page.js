import AdminLayout from "../../components/admin/AdminLayout";
import Router from 'next/router';
import nextCookie from 'next-cookies';


const Pages = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Pages - Code Pelajar"
                pageDescription = "Pages - Code Pelajar"
            >
                <div>Pages</div>
            </AdminLayout>
        </div>
    )
}

Pages.getInitialProps = async (ctx) => {
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

export default Pages;