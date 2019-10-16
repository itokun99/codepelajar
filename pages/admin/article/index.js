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
    const cookie_data = getCookiesFromContext(ctx);

    return {
        cookie_data
    }
}

export default Main;