import AdminLayout from "../../components/admin/AdminLayout";
import nextCookie from 'next-cookies';
import Router from 'next/router';


const Article = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Articles - Code Pelajar"
                pageDescription = "Articles - Code Pelajar"
            >
                <div>Post</div>
            </AdminLayout>
        </div>
    )
}

Article.getInitialProps = async (ctx) => {
    let cookies = nextCookie(ctx);
    let cp_token = cookies.cp_token;
    let cp_user = typeof(cp_token) !== "undefined" ? JSON.parse(cookies.cp_user) : {};

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

export default Article;