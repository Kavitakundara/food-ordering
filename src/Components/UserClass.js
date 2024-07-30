import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    render() {
        const { name, age } = this.props;
        const { count } = this.state;
        return (
            <div>
                <h2>This is a user data</h2>
                <p>Counter: {count}</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>

                <button onClick={() => {
                    this.setState({

                        count: this.state.count + 1,
                    });
                }}
                >

                    Update Satate</button>
            </div>
        )
    }
}

export default UserClass;