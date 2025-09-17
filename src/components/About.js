import user from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component did Mount");
    }

    render () {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste react</h2>

                <UserClass name={"First"} location ={"Dehradun Class"} />
                <UserClass name={"Second"} location ={"US"} />
            </div>
        );
    }
}

/*
 -Parent Constructor
 -Parent Render

    -FirstChild Constructor
    -FirstChild Render

    -SecondChild Constructor
    -SecondChild Render

    <DOM UPDATED - IN SINGLE BATCH>

    -FirstChild ComponentDidMount
    -SecondChild ComponentDidMount

-Parent ComponentDidMount

*/

export default About;