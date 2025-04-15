import React from "react";
/*
  2 component: class component and function component(function, arrow)
  using JSX
 */
class ChildComponent extends React.Component {

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
                <div>Child component: {this.props.name}</div>

            </>


        )
    }
}

export default ChildComponent;