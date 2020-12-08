import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConfigProvider from 'antd/es/config-provider'
import zh_CN from 'antd/es/locale-provider/zh_CN'
import { HashRouter,  Route, Switch} from 'react-router-dom';
import ErrorPage from './pages/Error'
import IndexPage from './pages/Index'
import ImagePage from './pages/Image'
import ImagePage2 from './pages/Image2'
import ImagePage3 from './pages/Image3'
import VideoPage from './pages/Video'
import CryPtoPage from './pages/CryPto'
import AudioEffect from './pages/AudioEffect'
import Calculation from './pages/calculation'
import MemoryPage from './pages/MemoryPage'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
  <HashRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/video" component={VideoPage} />
      <Route exact path="/img" component={ImagePage} />
      <Route exact path="/img2" component={ImagePage2} />
      <Route exact path="/img3" component={ImagePage3} />
      <Route exact path="/cry" component={CryPtoPage} />
      <Route exact path="/aud" component={AudioEffect} />
      <Route exact path="/math" component={Calculation} />
      <Route exact path="/memory" component={MemoryPage} />
      <Route component={ErrorPage} />
    </Switch>
  </HashRouter>
  </ConfigProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
