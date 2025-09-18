import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                userInfo: {
                    name: "Dummy",
                    location: "Default",
                },
            };
            console.log( this.props.name + "Child Constructor");
        }

        async componentDidMount() {
           console.log(this.props.name + "Child Component Did Mount");

            //API call

            const data = await fetch("https://api.github.com/users/SamadKhan");
            const json = await data.json();

            this.setState( {
                userInfo: json,
            })

            console.log(json);
        }

        componentDidUpdate() {
            console.log("Component Did Update");
        }

        componentWillUnmount() {
            console.log("Component will unmount"); // Happens when component is removed from the webpage such as when switching to another page
        }

      render() {
        
         console.log(this.props.name +"Child Render");

        const { name , location , avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src = {avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ssamadkhancs7</h4>
            </div>
        );
    }
}

export default UserClass;

/****
 * ----- MOUNTING -------
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> --> State Variable is updated
 * 
 * ------ UPDATE ------
 *       Render( API data )
 *       <HTML (new API data)
 *       Component Did Update    
 */