import React from 'react';

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

export default ArticleCard;