//In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state.
//
// Note: The h1 should only render the value from state and nothing else. In JSX, any code you write with curly braces { } will be treated as JavaScript.
// So to access the value from state just enclose the reference in curly braces.



//
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                { /* Change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* Change code above this line */ }
            </div>
        );
    }
};