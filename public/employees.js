let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let bobby = 'Bobby Shack';
let harry = 'Harry Potter';
let aria = 'Aria Montgamrey';
let spenser = 'Spenser Hastings';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, bobby), /*#__PURE__*/React.createElement("li", null, harry), /*#__PURE__*/React.createElement("li", null, aria), /*#__PURE__*/React.createElement("li", null, spenser));
ReactDOM.render(element, document.getElementById('content'));