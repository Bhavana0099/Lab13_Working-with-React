let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let bobby = 'Bobby Shack';
let harry = 'Harry Potter'
let aria = 'Aria Montgamrey'
let spenser = 'Spenser Hastings'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{bobby}</li>
        <li>{harry}</li>
        <li>{aria}</li>
        <li>{spenser}</li>
    </ul>
);
ReactDOM.render(element, document.getElementById('content'));
