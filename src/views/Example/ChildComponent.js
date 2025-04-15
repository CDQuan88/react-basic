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
        console.log('<<< check data input: ', this.state)
    }

    render() {
        console.log('>>> check props: ', this.props)

        //key: value
        let {name, age, address, arrJobs} = this.props
        return (
            <>
                <div>Child component: {name} - {age} - {address}</div>
                <div className="job-lists">
                    {
                        arrJobs.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }

                </div>
            </>


        )
    }
}

export default ChildComponent;