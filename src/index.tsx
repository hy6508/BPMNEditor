import './style/index'
import * as $ from 'jquery';
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Editor from './module/view/main';

const init = (mountNodeId = 'root') => {
  ReactDOM.render(<Editor />, document.getElementById(mountNodeId));
};

export {
  init,
  Editor
}