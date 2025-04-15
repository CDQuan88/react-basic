import React from "react";
import ChildComponent from "./ChildComponent";

/*
  2 component: class component and function component(function, arrow)
  using JSX
 */
class MyComponent extends React.Component {

    /*
    JSX => return 1 block
    fragment <> </> 
    */

    state = {
        firstName:'',
        lastName:''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log('<<< check data: ', this.state)
    }
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                    onChange={(event)=> this.handleChangeFirstName(event)}
                     />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} 
                    onChange={(event)=> this.handleChangeLastName(event)}
                    />
                    <br />
                    <input type="submit" value="Submit" 
                    onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>

            <ChildComponent name = {'child one'}/>
            <ChildComponent name = {'child two'}/>
            <ChildComponent name = {'child three'}/>

            </>


        )
    }
}

export default MyComponent;