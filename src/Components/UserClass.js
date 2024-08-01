import React from 'react';
import { BiObjectsVerticalBottom } from 'react-icons/bi';
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {
                name: "dummy",
                bio: "This is a dummy bio",
                login: "dummyId",
                avatar_url: "http://dummy.png"
            },
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kavitakundara");
        const JSON = await data.json();
        console.log(JSON);

        this.setState({
            info: JSON,
        });

        console.log(JSON);
    };


    render() {
        // const { name, age } = this.props;
        // const { count } = this.state;
        const { name, bio, login, avatar_url } = this.state.info;
        return (
            <div>
                <h2>This is a user data</h2>
                {/* <p>Counter: {count}</p> */}
                <p>Name: {name}</p>
                <p>Bio: {bio}</p>
                <p>Login Id: {login}</p>
                <img src={avatar_url} />



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