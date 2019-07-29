import React, { Component } from 'react';
import initStore from '../store';

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const getOrCreateStore = (initState) => {
  if(isServer){
    return initStore(initState)
  }
  if(!window[__NEXT_REDUX_STORE__]){
    window[__NEXT_REDUX_STORE__] = initStore(initState);
  }
  return window[__NEXT_REDUX_STORE__];
}

const withRedux = App => {
  return class AppWithRedux extends Component {
    static getInitialProps = async (appContext) => {
      const reduxStore = getOrCreateStore();
      
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if(typeof App.getInitialProps === "function"){
        appProps =  await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props){
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render(){
      return (
        <App {...this.props} reduxStore={this.reduxStore} />
      )
    }
  }
}

export default withRedux;