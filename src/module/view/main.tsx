import * as React from 'react';
import joint from '../../rappid/rappid.min'
// const joint = require('../../rappid/rappid.min')

export interface MainProps {
}

export interface MainState {
  showInspector: any
}

export default class Main extends React.Component<MainProps, MainState> {

  // Conatiner
  paperContainer: HTMLDivElement
  stencilContainer: HTMLDivElement
  navigatorContainer: HTMLDivElement
  toolbarContainer: HTMLDivElement
  inspectorContainer: HTMLDivElement

  // rappid things
  graph: joint.dia.Graph;
  commandManager: joint.dia.CommandManager;
  paper: joint.dia.Paper;
  snaplines: joint.ui.Snaplines;
  paperScroller: joint.ui.PaperScroller;
  // stencil: joint.ui.Stencil;
  // keyboard: joint.ui.Keyboard;
  // clipboard: joint.ui.Clipboard;
  // selection: joint.ui.Selection;
  // toolbar: joint.ui.Toolbar;
  // navigator: joint.ui.Navigator;

  initializePaper() {
    const graph = this.graph = new joint.dia.Graph;
    console.log(graph);

    // graph.on('add', (cell: joint.dia.Cell, collection: any, opt: any) => {
    //   if (opt.stencil) this.createInspector(cell);
    // });

    this.commandManager = new joint.dia.CommandManager({ graph: graph });

    const paper = this.paper = new joint.dia.Paper({
      width: 1000,
      height: 1000,
      gridSize: 10,
      drawGrid: true,
      model: graph,
      // defaultLink: new joint.shapes.app.Link()
    });

    // paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this);
    // paper.on('cell:mousewheel', this.onMousewheel.bind(this));

    this.snaplines = new joint.ui.Snaplines({ paper: paper });

    const paperScroller = this.paperScroller = new joint.ui.PaperScroller({
      paper,
      autoResizePaper: true,
      cursor: 'grab'
    });

    $(this.paperContainer).append(paperScroller.el);

    paperScroller.render().center();
  }

  constructor(props: MainProps) {
    super(props);

    this.state = {
      showInspector: false
    }
  }
  hideInspector() {
    this.setState({
      showInspector: false
    })

  }
  add() {
    this.setState({
      showInspector: true
    })
  }
  componentDidMount() {
    this.initializePaper();
  }
  renderInspectorContainer() {
    if (this.state.showInspector) {
      return (
        <div className="inspector-container" ref={(node: HTMLDivElement) => { this.inspectorContainer = node }} >
          <button onClick={this.hideInspector.bind(this)} >收起</button>
        </div>
      )
    } else {
      return (
        <div className="inspector-container hide-inspector"></div>
      )
    }

  }
  render() {
    return (
      <div className="BPMNEditor" >
        <div className="bpmn-app">
          <div className="app-body">
            <div className="stencil-container" ref={(node: HTMLDivElement) => { this.stencilContainer = node }}>
              <div onClick={this.add.bind(this)}><button>测试点击</button></div>
            </div>
            <div className="toolbar-container" ref={(node: HTMLDivElement) => { this.toolbarContainer = node }}></div>
            <div className="paper-container" ref={(node: HTMLDivElement) => { this.paperContainer = node }} >

            </div>
            {this.renderInspectorContainer()}
            <div className="navigator-container" ref={(node: HTMLDivElement) => { this.navigatorContainer = node }} ></div>
          </div>
        </div>
      </div >
    );
  }
}
