import App, { Container } from 'next/app';
import React from 'react';
import  withRedux from '../config/redux/withRedux';
import { Provider } from 'react-redux'; 

class AppContainer extends App {
  render(){
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}


export default withRedux(AppContainer)