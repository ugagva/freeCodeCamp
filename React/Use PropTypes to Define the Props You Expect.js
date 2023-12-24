//In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the options.
//
// Note: As of React v15.5.0,
// PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';
//
// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.

//Solution
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
    quantity:PropTypes.number.isRequired};

// Change code above this line

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items quantity={10} />
    }
};