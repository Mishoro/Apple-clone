import './component/Css/bootstrap.css';
import './component/Css/style.css';

import Applcomponent from './component/Applcomponent';
import React, { Component } from 'react'
import Header from './component/Header/Header';
import First from './component/Firist/Firist';
import Second from './component/Seconde/Seconde';
import Thired from './component/Thired/Thired';
import Forth from './component/Forth/Forth';
import Fivith from './component/Fivith/Fivith';
import Six from './component/Six/Six';
import Footer from './component/Footer/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <First/>
      <Second />
      <Thired />
      <Forth/>
      <Fivith />
      <Six/>
      <Applcomponent/>
      < Footer/>
      </div>
    );
  };
};
