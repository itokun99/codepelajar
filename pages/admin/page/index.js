import { AdminLayout } from "../../../containers/templates";
import { getCookiesFromContext } from '../../../utils';


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
    const cookie_data = getCookiesFromContext(ctx);
    return {
        cookie_data
    };
}

export default Pages;