import React from 'react';

export const Container = (props) => {
  return(
      <div { ...props } className="container">
          { props.children }
          <style jsx>{`
              .container {
                  margin : 0 auto 0 auto;
                  max-width : 1200px;
                  padding : 0 14px;
              }
          `}
          </style>
      </div>
  )
}

export default Container;