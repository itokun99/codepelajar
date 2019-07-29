import React, { Component } from 'react';
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