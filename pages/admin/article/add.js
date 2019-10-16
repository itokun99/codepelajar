import React, { Component } from 'react';
import { AdminLayout } from '../../../containers/templates'
import { getCookiesFromContext } from '../../../utils'
import { AdminSection as SectionLayout } from '../../../components'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            skelLoader : true,
        }
    }

    render(){
        return(
            <AdminLayout
                pageTitle="Add Article - Code Pelajar"
                pageDescription = "Add Article - Code Pelajar"
            >
                <SectionLayout title="Add Article">

                </SectionLayout>
            </AdminLayout>
        )   
    }
}

Main.getInitialProps = async (ctx) => {
    const cookie_data = getCookiesFromContext(ctx);
    return {
        cookie_data
    };
}

export default Main;