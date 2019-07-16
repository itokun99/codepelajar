import React from 'react'
import WebLayout, {
    Section,
    Container
} from '../components/WebLayout';
import axios from 'axios';

const FreshUpdate = (props) => {
    let thumb = 'https://2.bp.blogspot.com/-XayP7EPTkPI/XAhT8IkLllI/AAAAAAAAAuk/nQFH4etiWSwIMuHI2Fd1yTxwJ3vFbFBcQCLcBGAs/s640/Lamp%2Bgrid.png';
    return(
        <Section style={{backgroundColor : "#100E17"}}>
            <div className="floating-thumb">
                <img src={thumb} title="dadwada" alt="dawdawaw" />
            </div>
            <div className="overlay"></div>
            <Container>
                <div className="main">
                    <div className="header">
                        <div className="date">
                            <span>{props.date}</span>
                        </div>
                        <h2 className="title">{props.title}</h2>
                        <div className="author">
                            <div className="photo">
                                <span className="dummy-photo"></span>
                            </div>
                            <div className="name-wrapper">
                                <span>{props.author}</span>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="content">
                            <p>{props.snippet}</p>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="label-wrapper">
                            {
                                props.tags.length > 0 ?
                                props.tags.map((tag, index) => {
                                    return(
                                        <span key={index} className={`label ${tag}`}>{tag}</span>
                                    )
                                })
                                :
                                (<span className="label">Uncategory</span>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
            <style jsx>{`
                .floating-thumb {
                    position : absolute;
                    right : 0;
                    top : 0;
                    bottom : 0;
                    width : calc(100% - 40%);
                    overflow : hidden;
                }
                .overlay {
                    position : absolute;
                    right : 0;
                    top : 0;
                    bottom : 0;
                    width : calc(100% - 40%);
                    overflow : hidden;
                    background: radial-gradient(ellipse closest-side, rgba(15, 14, 22, 0.5), #100E17);
                }
                .floating-thumb img {
                    height : 100%;
                }
                .main {
                    position : relative;
                    color : #fff;
                    padding : 24px 0;
                    line-height : 1.6;
                    max-width : 767px;
                    z-index :1;
                }
                .date {
                    font-size : 16px;
                    margin-bottom : 24px;
                }
                .date span {
                    padding-bottom : 5px;
                }
                .title {
                    margin : 0 0 24px 0;
                    font-size : 42px;
                    font-weight : 600;
                    line-height : 1.2;
                }
                .author {
                    display : flex;
                    margin-bottom : 24px;
                }
                .photo {
                    margin-right: 24px;
                }
                .name-wrapper {
                    display : flex;
                    align-items : center;
                }
                .dummy-photo {
                    display: inline-block;
                    width : 50px;
                    height : 50px;
                    background : #ddd;
                    border-radius : 100px;
                }
                p {
                    margin : 0
                }
                .content {
                    color : rgba(255,255,255,0.7);
                    font-size : 20px;
                    margin-bottom : 24px;
                }
                .footer {
                    margin-bottom : 24px;
                }
                .label-wrapper {
                    position : relative;
                }
                .label {
                    display : inline-block;
                    padding : 4px 14px;
                    border : 2px solid #fff;
                    margin-right : 10px;
                    margin-bottom : 10px;
                    font-size : 14px;
                    border-radius : 50px;
                }
            `}</style>
        </Section>
    )
}

const ArticleCard = () => {
    let snippet = 'Fusce nunc enim, faucibus a lorem eget, posuere tincidunt arcu. Integer fermentum lorem et tortor maximus fringilla. Nunc consequat laoreet justo, sit amet elementum mi pretium a.';
    return(
        <div className="card">
            <div className="card-image">

                <div className="card-label">
                    <span className="label">HTML</span>
                </div>
            </div>
            <div className="card-body">
                <div className="content">
                    <h2 className="card-title">Tutorial Cara Membuat Aplikasi Mobile dengan React Native</h2>
                    <p className="card-text">{snippet}</p>
                </div>
            </div>
            <div className="card-footer">

            </div>
            <style jsx>{`
                .card {
                    position : relative;
                    width : 100%;
                    background-color : #fff;
                    transition : .3s ease;
                    overflow : hidden;
                    border-radius : 4px;
                }
                .card:hover {
                    box-shadow : 0 8px 24px 0px rgba(0, 0, 0, 0.1);
                    transform : translateY(-14px);
                }
                .card-image {
                    overflow : hidden;
                    position : relative;
                    height : 200px;
                    background-color : #ddd;
                }
                .card-label {
                    position : absolute;
                    bottom : 0;
                    padding : 14px 24px;
                }
                .label {
                    display : inline-block;
                    padding : 4px 14px;
                    background : #2ecc71;
                    color : #fff;
                    border-radius : 4px;
                }
                .card-body {
                    padding : 24px;
                }
                .card-title {
                    margin : 0;
                    font-size : 18px;
                }
                .card-text {
                    color : rgba(0,0,0,0.5);
                    font-size : 16px;
                    line-height : 1.6;
                }
            `}
            </style>
        </div>
    )
}


const ArticleStack = (props) => {
    return(
        <Section>
            <Container>
                <div className="main">
                    <div className="header">
                        <h2 title="title">Artikel Terbaru</h2>     
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col">
                                <ArticleCard />
                            </div>
                            <div className="col">
                                <ArticleCard />
                            </div>
                            <div className="col">
                                <ArticleCard />
                            </div>
                        </div>
                    </div>
                    <div className="footer">

                    </div>
                </div>
            </Container>
            <style jsx>{`
                .title {
                    margin : 0;
                }
                .row {
                    display : flex;
                    margin : 0 -14px;
                }
                .col {
                    width : 33.3333%;
                    padding : 0 14px 28px 14px;
                }
            `}</style>
        </Section>
    )
}

const Home = (props) => {
    console.log(props)
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
            <ArticleStack />
        </WebLayout>
    )
}

Home.getInitialProps = async (context) => {
    var data = {}
    await axios.get("http://localhost:8000/api/settings")
    .then((response) => {
        if(response.status === 200){
            data = response.data.data
        }
    })
    return {
        ...data         
    }
}

export default Home
