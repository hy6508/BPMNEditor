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
    Main.prototype.initializePaper = function () {
        var graph = this.graph = new joint.dia.Graph;
        console.log(graph);
    };
    Main.prototype.componentDidMount = function () {
        this.initializePaper();
    };
    Main.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "BPMNEditor" },
            React.createElement("div", { className: "bpmn-app" },
                React.createElement("div", { className: "app-body" },
                    React.createElement("div", { className: "paper-container", ref: function (node) { _this.paperContainer = node; } }, "paper-container")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlBNTkVkaXRvci5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS92aWV3L21haW4udHN4IiwiLi4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgam9pbnQgZnJvbSAnLi4vLi4vcmFwcGlkL3JhcHBpZC5taW4nXG4vLyBjb25zdCBqb2ludCA9IHJlcXVpcmUoJy4uLy4uL3JhcHBpZC9yYXBwaWQubWluJylcblxuZXhwb3J0IGludGVyZmFjZSBNYWluUHJvcHMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5TdGF0ZSB7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TWFpblByb3BzLCBNYWluU3RhdGU+IHtcblxuICAvLyBDb25hdGluZXJcbiAgcGFwZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgLy8gcmFwcGlkIHRoaW5nc1xuICBncmFwaDogam9pbnQuZGlhLkdyYXBoO1xuICAvLyBjb21tYW5kTWFuYWdlcjogam9pbnQuZGlhLkNvbW1hbmRNYW5hZ2VyO1xuICAvLyBwYXBlcjogam9pbnQuZGlhLlBhcGVyO1xuICAvLyBzbmFwbGluZXM6IGpvaW50LnVpLlNuYXBsaW5lcztcbiAgLy8gcGFwZXJTY3JvbGxlcjogam9pbnQudWkuUGFwZXJTY3JvbGxlcjtcbiAgLy8gc3RlbmNpbDogam9pbnQudWkuU3RlbmNpbDtcbiAgLy8ga2V5Ym9hcmQ6IGpvaW50LnVpLktleWJvYXJkO1xuICAvLyBjbGlwYm9hcmQ6IGpvaW50LnVpLkNsaXBib2FyZDtcbiAgLy8gc2VsZWN0aW9uOiBqb2ludC51aS5TZWxlY3Rpb247XG4gIC8vIHRvb2xiYXI6IGpvaW50LnVpLlRvb2xiYXI7XG4gIC8vIG5hdmlnYXRvcjogam9pbnQudWkuTmF2aWdhdG9yO1xuXG4gIGluaXRpYWxpemVQYXBlcigpIHtcbiAgICBjb25zdCBncmFwaCA9IHRoaXMuZ3JhcGggPSBuZXcgam9pbnQuZGlhLkdyYXBoO1xuICAgIGNvbnNvbGUubG9nKGdyYXBoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNYWluUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVBhcGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQlBNTkVkaXRvclwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicG1uLWFwcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXItY29udGFpbmVyXCIgcmVmPXsobm9kZSkgPT4geyB0aGlzLnBhcGVyQ29udGFpbmVyID0gbm9kZSB9fSA+XG4gICAgICAgICAgICAgIHBhcGVyLWNvbnRhaW5lclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlL2luZGV4J1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuL21vZHVsZS92aWV3L21haW4nO1xuXG5jb25zdCBpbml0ID0gKG1vdW50Tm9kZUlkID0gJ3Jvb3QnKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcig8RWRpdG9yIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb3VudE5vZGVJZCkpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5pdCxcbiAgRWRpdG9yXG59Il0sIm5hbWVzIjpbIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJSZWFjdC5Db21wb25lbnQiLCJSZWFjdERPTS5yZW5kZXIiLCJFZGl0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVlO0lBQW1CLHdCQUFxQztJQXVCckUsY0FBWSxLQUFnQjtRQUE1QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUliO1FBRkMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUE7O0tBQ0Y7Ozs7Ozs7Ozs7O0lBVkQsOEJBQWUsR0FBZjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0lBU0QsZ0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCO0lBRUQscUJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEMsUUFDRUEsNkJBQUssU0FBUyxFQUFDLFlBQVk7WUFDekJBLDZCQUFLLFNBQVMsRUFBQyxVQUFVO2dCQUN2QkEsNkJBQUssU0FBUyxFQUFDLFVBQVU7b0JBQ3ZCQSw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFFLFVBQUMsSUFBSSxJQUFPLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBLEVBQUUsc0JBRXhFLENBQ0YsQ0FDRixDQUNGLEVBQ047S0FDSDtJQUNILFdBQUM7Q0FBQSxDQS9DaUNDLGVBQWU7O0FDRmpELElBQU0sSUFBSSxHQUFHLFVBQUMsV0FBb0I7SUFBcEIsNEJBQUEsRUFBQSxvQkFBb0I7SUFDaENDLGVBQWUsQ0FBQ0Ysb0JBQUNHLElBQU0sT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztDQUNuRTs7Ozs7Ozs7Ozs7In0=
