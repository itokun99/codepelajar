import { AdminLayout } from '../../../containers/templates';
import { getCookiesFromContext } from '../../../utils';

const Main = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Layout - Code Pelajar"
                pageDescription = "Layout - Code Pelajar"
            >
                <div>Layout</div>
            </AdminLayout>
        </div>
    )
}

Main.getInitialProps = async (ctx) => {
    const cookie_data = getCookiesFromContext(ctx);
    return {
        cookie_data
    };
}

export default Main;