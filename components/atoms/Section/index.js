import React from 'react';

// section
export const Section = (props) => {
  return(
      <div { ...props } className="section">
          { props.children }
          <style jsx>{`
          .section {
              position : relative;
              padding : 24px 0;
          }
          `}</style>
      </div>
  )
}

export default Section;