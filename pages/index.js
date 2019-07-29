import React from 'react'
import { WebLayout } from '../containers/templates';
import { FreshUpdate } from '../components/organisms';

const Home = (props) => {
    let dummy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pellentesque sapien, a scelerisque justo. Nam vitae urna pellentesque, tincidunt justo at, porta neque. Fusce auctor lobortis sem, ut dignissim mi dapibus ac. Curabitur tincidunt, tortor sed tempus imperdiet, ipsum ipsum dapibus leo, id fermentum purus enim id libero. Suspendisse cursus nulla ut sodales imperdiet.';
    return(
        <WebLayout
            siteTitle = {props.site_title}
            pageTitle = {props.site_title}
            pageDescription = "Website Portofolio"
            pageUrl = "https://www.codepelajar.com"
        >
            <FreshUpdate
                author = "Indrawan Lisanto"
                date="Senin, 15 July 2019"
                title="Code Pelajar : React Developer"
                snippet={dummy}
                tags = {[
                    "HTML",
                    "PHP"
                ]}
            />
        </WebLayout>
    )
}

Home.getInitialProps = async (context) => {
    // var data = {}
    // await axios.get("http://localhost:8000/api/settings")
    // .then((response) => {
    //     if(response.status === 200){
    //         data = response.data.data
    //     }
    // })
    // return {
    //     ...data         
    // }
    return {
        site_title : "Code Pelajar",
        site_description: "Code Pelajar"
    }
}

export default Home
