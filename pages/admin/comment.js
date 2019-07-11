import AdminLayout from "../../components/admin/AdminLayout";
import Router from 'next/router';
import nextCookie from 'next-cookies';


const Comments = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Comments - Code Pelajar"
                pageDescription = "Comments - Code Pelajar"
            >
                <div>Comments</div>
            </AdminLayout>
        </div>
    )
}


Comments.getInitialProps = async (ctx) => {
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

export default Comments;