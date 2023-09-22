import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
        userInfo :{
            name:"dummy",
            location:"Default"
        }
     
    };

    // console.log(this.props.name + "Child Constructor is called")
  }

  async componentDidMount (){


    // console.log(this.props.name +"First child did mount");

    //Api call
    const data = await fetch(`https://api.github.com/users/SACHINSOUMYA`)
    const json = await data.json();
    console.log(json);
    this.setState({userInfo:json});

  }

  componentDidUpdate(){
    console.log("component is updated");
  }

  componentWillUnmount(){
    console.log("Component is unmounted");
  }

  render() {
    const { propname, proplocation } = this.props;

    const {name , location ,avatar_url} = this.state.userInfo;
    
    // console.log(this.props.name +"Child Render is called")
    return (
      <div className="user-card">
        <div><img src={`${avatar_url}`} alt="profile pic" /></div>
        <h1>Name:{name}</h1>
        <h1>Location : {location}</h1>
        
        <h1>Name : {propname}</h1>
        <h2>Location :{proplocation}</h2>
        <h3>Contact : @sachinsoumya</h3>
      </div>
    );
  }
}
export default UserClass;

/*  
------Mounting cycle

 * Constructor is called 
 * Render method is called with dummy data
      * <HTML dummy >
 * ComponenetDidMount is called
 
      *  Api call there
      * this.setState({}) - state variable is updated
       
       
       
 ------------update cycle
 * Render method is called once agin but with the api data , because state variable is updated .
 * <HTML api data >
 * ComponentDidUpdate () is called .
 
 -----Unmountaing 

 * ComponentWillunmount () - It is called just before going to new component . 

   
 */

