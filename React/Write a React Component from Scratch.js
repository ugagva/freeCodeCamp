//Define a class MyComponent that extends React.Component.
// Its render method should return a div that contains an h1 tag with the text: My First React Component! in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.
//
// Render this component to the DOM using ReactDOM.render().
// There is a div with id='challenge-node' available for you to use.


//SOLUTION

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="challegne-node">
                <h1>My First React Component!</h1>

            </div>
        );
    }
};

// Change code below this line

ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"))