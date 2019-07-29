import React from 'react';
import propTypes from 'prop-types';
import loading from '../../../static/images/loading.svg';
import { METRICS, COLOR, THEMESCOLOR } from '../../../utils';
const Loading = ({ show, ...props }) => {
  return show ?
    (<div className="loading">
      <div className="wrapper">
        <img src={loading} alt="Loading.." title="Loading..." />
        <span>Please Wait...</span>
      </div>
      <style style jsx>{`
        .loading {
          background-color: ${COLOR.lighth75};
          position: fixed;
          top:0;
          left:0;
          width:100%;
          height: 100%;
          display:flex;
          justify-content: center;
          align-items: center;
          z-index: 9999999
        }
        .wrapper {
          width: 200px;
          height: 200px;
        }
        img: {
          width: 100%;
        }
        span {
          display: inline-block;
          width: 100%;
          color: ${THEMESCOLOR.fontDark};
          font-size: 24px;
          text-align: center;
        }
      `}</style>
    </div>) 
    :
    null
}

Loading.propTypes = {
  show: propTypes.bool
}

Loading.defaultProps = {
  show: false,
}



export default Loading;