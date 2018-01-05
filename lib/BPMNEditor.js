(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var BPMNEditor = (function (exports,React,ReactDOM,joint) {
'use strict';

joint = joint && joint.hasOwnProperty('default') ? joint['default'] : joint;

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    // stencil: joint.ui.Stencil;
    // keyboard: joint.ui.Keyboard;
    // clipboard: joint.ui.Clipboard;
    // selection: joint.ui.Selection;
    // toolbar: joint.ui.Toolbar;
    // navigator: joint.ui.Navigator;
    Main.prototype.initializePaper = function () {
        var graph = this.graph = new joint.dia.Graph;
        console.log(graph);
        // graph.on('add', (cell: joint.dia.Cell, collection: any, opt: any) => {
        //   if (opt.stencil) this.createInspector(cell);
        // });
        this.commandManager = new joint.dia.CommandManager({ graph: graph });
        var paper = this.paper = new joint.dia.Paper({
            width: 1000,
            height: 1000,
            gridSize: 10,
            drawGrid: true,
            model: graph,
        });
        // paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this);
        // paper.on('cell:mousewheel', this.onMousewheel.bind(this));
        this.snaplines = new joint.ui.Snaplines({ paper: paper });
        var paperScroller = this.paperScroller = new joint.ui.PaperScroller({
            paper: paper,
            autoResizePaper: true,
            cursor: 'grab'
        });
        $(this.paperContainer).append(paperScroller.el);
        paperScroller.render().center();
    };
    Main.prototype.componentDidMount = function () {
        this.initializePaper();
    };
    Main.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "BPMNEditor" },
            React.createElement("div", { className: "bpmn-app" },
                React.createElement("div", { className: "app-body" },
                    React.createElement("div", { className: "stencil-container", ref: function (node) { _this.stencilContainer = node; } }),
                    React.createElement("div", { className: "paper-container", ref: function (node) { _this.paperContainer = node; } })))));
    };
    return Main;
}(React.Component));

var init = function (mountNodeId) {
    if (mountNodeId === void 0) { mountNodeId = 'root'; }
    ReactDOM.render(React.createElement(Main, null), document.getElementById(mountNodeId));
};

exports.init = init;
exports.Editor = Main;

return exports;

}({},React,ReactDOM,joint));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlBNTkVkaXRvci5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS92aWV3L21haW4udHN4IiwiLi4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgam9pbnQgZnJvbSAnLi4vLi4vcmFwcGlkL3JhcHBpZC5taW4nXG4vLyBjb25zdCBqb2ludCA9IHJlcXVpcmUoJy4uLy4uL3JhcHBpZC9yYXBwaWQubWluJylcblxuZXhwb3J0IGludGVyZmFjZSBNYWluUHJvcHMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5TdGF0ZSB7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWFpblByb3BzLCBNYWluU3RhdGU+IHtcblxuICAvLyBDb25hdGluZXJcbiAgcGFwZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50XG4gIHN0ZW5jaWxDb250YWluZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgLy8gcmFwcGlkIHRoaW5nc1xuICBncmFwaDogam9pbnQuZGlhLkdyYXBoO1xuICBjb21tYW5kTWFuYWdlcjogam9pbnQuZGlhLkNvbW1hbmRNYW5hZ2VyO1xuICBwYXBlcjogam9pbnQuZGlhLlBhcGVyO1xuICBzbmFwbGluZXM6IGpvaW50LnVpLlNuYXBsaW5lcztcbiAgcGFwZXJTY3JvbGxlcjogam9pbnQudWkuUGFwZXJTY3JvbGxlcjtcbiAgLy8gc3RlbmNpbDogam9pbnQudWkuU3RlbmNpbDtcbiAgLy8ga2V5Ym9hcmQ6IGpvaW50LnVpLktleWJvYXJkO1xuICAvLyBjbGlwYm9hcmQ6IGpvaW50LnVpLkNsaXBib2FyZDtcbiAgLy8gc2VsZWN0aW9uOiBqb2ludC51aS5TZWxlY3Rpb247XG4gIC8vIHRvb2xiYXI6IGpvaW50LnVpLlRvb2xiYXI7XG4gIC8vIG5hdmlnYXRvcjogam9pbnQudWkuTmF2aWdhdG9yO1xuXG4gIGluaXRpYWxpemVQYXBlcigpIHtcbiAgICBjb25zdCBncmFwaCA9IHRoaXMuZ3JhcGggPSBuZXcgam9pbnQuZGlhLkdyYXBoO1xuICAgIGNvbnNvbGUubG9nKGdyYXBoKTtcblxuICAgIC8vIGdyYXBoLm9uKCdhZGQnLCAoY2VsbDogam9pbnQuZGlhLkNlbGwsIGNvbGxlY3Rpb246IGFueSwgb3B0OiBhbnkpID0+IHtcbiAgICAvLyAgIGlmIChvcHQuc3RlbmNpbCkgdGhpcy5jcmVhdGVJbnNwZWN0b3IoY2VsbCk7XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLmNvbW1hbmRNYW5hZ2VyID0gbmV3IGpvaW50LmRpYS5Db21tYW5kTWFuYWdlcih7IGdyYXBoOiBncmFwaCB9KTtcblxuICAgIGNvbnN0IHBhcGVyID0gdGhpcy5wYXBlciA9IG5ldyBqb2ludC5kaWEuUGFwZXIoe1xuICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICBoZWlnaHQ6IDEwMDAsXG4gICAgICBncmlkU2l6ZTogMTAsXG4gICAgICBkcmF3R3JpZDogdHJ1ZSxcbiAgICAgIG1vZGVsOiBncmFwaCxcbiAgICAgIC8vIGRlZmF1bHRMaW5rOiBuZXcgam9pbnQuc2hhcGVzLmFwcC5MaW5rKClcbiAgICB9KTtcblxuICAgIC8vIHBhcGVyLm9uKCdibGFuazptb3VzZXdoZWVsJywgXy5wYXJ0aWFsKHRoaXMub25Nb3VzZXdoZWVsLCBudWxsKSwgdGhpcyk7XG4gICAgLy8gcGFwZXIub24oJ2NlbGw6bW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZXdoZWVsLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5zbmFwbGluZXMgPSBuZXcgam9pbnQudWkuU25hcGxpbmVzKHsgcGFwZXI6IHBhcGVyIH0pO1xuXG4gICAgY29uc3QgcGFwZXJTY3JvbGxlciA9IHRoaXMucGFwZXJTY3JvbGxlciA9IG5ldyBqb2ludC51aS5QYXBlclNjcm9sbGVyKHtcbiAgICAgIHBhcGVyLFxuICAgICAgYXV0b1Jlc2l6ZVBhcGVyOiB0cnVlLFxuICAgICAgY3Vyc29yOiAnZ3JhYidcbiAgICB9KTtcblxuICAgICQodGhpcy5wYXBlckNvbnRhaW5lcikuYXBwZW5kKHBhcGVyU2Nyb2xsZXIuZWwpO1xuXG4gICAgcGFwZXJTY3JvbGxlci5yZW5kZXIoKS5jZW50ZXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNYWluUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVBhcGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQlBNTkVkaXRvclwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicG1uLWFwcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlbmNpbC1jb250YWluZXJcIiByZWY9eyhub2RlKSA9PiB7IHRoaXMuc3RlbmNpbENvbnRhaW5lciA9IG5vZGUgfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyLWNvbnRhaW5lclwiIHJlZj17KG5vZGUpID0+IHsgdGhpcy5wYXBlckNvbnRhaW5lciA9IG5vZGUgfX0gPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlL2luZGV4J1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL21vZHVsZS92aWV3L21haW4nO1xuXG5jb25zdCBpbml0ID0gKG1vdW50Tm9kZUlkID0gJ3Jvb3QnKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcig8RWRpdG9yIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb3VudE5vZGVJZCkpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5pdCxcbiAgRWRpdG9yXG59Il0sIm5hbWVzIjpbIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJSZWFjdC5Db21wb25lbnQiLCJSZWFjdERPTS5yZW5kZXIiLCJFZGl0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVlO0lBQW1CLHdCQUFxQztJQXNEckUsY0FBWSxLQUFnQjtRQUE1QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUliO1FBRkMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUE7O0tBQ0Y7Ozs7Ozs7SUF4Q0QsOEJBQWUsR0FBZjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1FBTW5CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRXJFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM3QyxLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxLQUFLO1NBRWIsQ0FBQyxDQUFDOzs7UUFLSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUUxRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDcEUsS0FBSyxPQUFBO1lBQ0wsZUFBZSxFQUFFLElBQUk7WUFDckIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFaEQsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pDO0lBU0QsZ0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCO0lBRUQscUJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEMsUUFDRUEsNkJBQUssU0FBUyxFQUFDLFlBQVk7WUFDekJBLDZCQUFLLFNBQVMsRUFBQyxVQUFVO2dCQUN2QkEsNkJBQUssU0FBUyxFQUFDLFVBQVU7b0JBQ3ZCQSw2QkFBSyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsR0FBRyxFQUFFLFVBQUMsSUFBSSxJQUFPLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUEsRUFBRSxHQUFRO29CQUMxRkEsNkJBQUssU0FBUyxFQUFDLGlCQUFpQixFQUFDLEdBQUcsRUFBRSxVQUFDLElBQUksSUFBTyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQSxFQUFFLEdBQ3hFLENBQ0YsQ0FDRixDQUNGLEVBQ047S0FDSDtJQUNILFdBQUM7Q0FBQSxDQTlFaUNDLGVBQWU7O0FDRmpELElBQU0sSUFBSSxHQUFHLFVBQUMsV0FBb0I7SUFBcEIsNEJBQUEsRUFBQSxvQkFBb0I7SUFDaENDLGVBQWUsQ0FBQ0Ysb0JBQUNHLElBQU0sT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztDQUNuRTs7Ozs7Ozs7Ozs7In0=
