import React from 'react';
import { Section, Container } from '../../atoms'

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

export default FreshUpdate;