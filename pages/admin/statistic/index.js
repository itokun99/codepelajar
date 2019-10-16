import { AdminLayout } from '../../../containers/templates';
import { getCookiesFromContext } from '../../../utils';

const Statistic = (props) => {
    return(
        <div>
            <AdminLayout
                pageTitle="Statistic - Code Pelajar"
                pageDescription = "Statistic - Code Pelajar"
            >
                <div>Statistic</div>
            </AdminLayout>
        </div>
    )
}


Statistic.getInitialProps = async (ctx) => {
    const cookie_data = getCookiesFromContext(ctx);
    
    return {
        cookie_data
    };
}
export default Statistic;