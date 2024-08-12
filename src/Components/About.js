import UserClass from "./UserClass";
import userContext from "../utils/userContex";
const About = () => {
    return (
        <div>
            <div>
                <userContext.Consumer>
                    {({loggedIn}) => (
                        <h1>{loggedIn}</h1>
                    )}
                </userContext.Consumer>
            </div>
            <UserClass name={"Suresh"} age={20} />
        </div>
    )
};
export default About;