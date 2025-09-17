import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>

            <User name ={"Samad Khan (function)"} />

            <UserClass name ={"Akshay Saini (class)"} location ={"Dehradun Class"}/>
        </div>
    );
};

export default About;