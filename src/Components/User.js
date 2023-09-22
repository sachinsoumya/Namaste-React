import { useState } from "react";
const User = (props)=>{
  const [count] = useState(0);
  const [count2] = useState(1)

    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h1>Name:{props.name}</h1>
            <h2>Balasore , Odisha</h2>
            <h3>Contact : @sachinsoumya</h3>

        </div>
    )
}

export default User;