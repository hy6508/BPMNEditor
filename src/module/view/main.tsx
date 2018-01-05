import * as React from 'react';
import joint from '../../rappid/rappid.min'
// const joint = require('../../rappid/rappid.min')

export interface MainProps {
}

export interface MainState {
}

export default class Main extends React.Component<MainProps, MainState> {

  // Conatiner
  paperContainer: HTMLDivElement

  // rappid things
  graph: joint.dia.Graph;
  // commandManager: joint.dia.CommandManager;
  // paper: joint.dia.Paper;
  // snaplines: joint.ui.Snaplines;
  // paperScroller: joint.ui.PaperScroller;
  // stencil: joint.ui.Stencil;
  // keyboard: joint.ui.Keyboard;
  // clipboard: joint.ui.Clipboard;
  // selection: joint.ui.Selection;
  // toolbar: joint.ui.Toolbar;
  // navigator: joint.ui.Navigator;

  initializePaper() {
    const graph = this.graph = new joint.dia.Graph;
    console.log(graph);
  }

  constructor(props: MainProps) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    this.initializePaper();
  }

  render() {
    return (
      <div className="BPMNEditor" >
        <div className="bpmn-app">
          <div className="app-body">
            <div className="paper-container" ref={(node) => { this.paperContainer = node }} >
              paper-container
            </div>
          </div>
        </div>
      </div>
    );
  }
}
