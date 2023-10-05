import UserContext from "../Utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react"

class About extends Component {
  constructor(){
    super();
    console.log("Parent")
  }

  componentDidMount(){
    console.log("parent did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        {/* This is About Page in class component
        <User name={"Sachin(function)"} /> */}
        <UserClass propname={"1st child(class)"} proplocation={"Balasore"} />
        <UserContext.Consumer >
          {({ loggedinUser })=> (<h1 className="font-bold text-xxl">{loggedinUser}</h1>)}
        </UserContext.Consumer>
        {/* <UserClass name={"2nd child(class)"} />
        <UserClass name={"3rd child(class)"} /> */}
      </div>
    );
  }
}
export default About;
