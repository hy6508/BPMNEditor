import './style/index'
import * as joint from './rappid/rappid.min';
import * as $ from 'jquery';
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Main from './module/view/main'

export default (mountNodeId = 'root') => {
  ReactDOM.render(<Main />, document.getElementById(mountNodeId));
};