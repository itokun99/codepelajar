import { AdminLayout } from '../../../containers/templates'
import { getCookiesFromContext } from "../../../utils";


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
    const cookie_data = getCookiesFromContext(ctx);
    
    return {
        cookie_data
    };
}

export default Comments;