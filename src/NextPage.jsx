import { Link } from "react-router-dom"
import React from "react"


class NextPage extends React.Component{

   render(){
    return(
       <div className="flex">
        <p>
         {this.props.users.map(item =>{
         return(
               <div className="flex">
                <p className='box'>{`Name :${item.name} | Department : ${item.depart} | Rating :${item.rate}`}</p> </div>
            )
         })
        }
        </p>
       <p>
         <Link to="/"><button className="btn2">BACK</button></Link>
       </p>
       </div>
    )
   }
}
export default NextPage;