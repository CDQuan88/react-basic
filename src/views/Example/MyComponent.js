import React from "react";
/*
  2 component: class component and function component(function, arrow)
  using JSX
 */
class MyComponent extends React.Component {

    //key:value
    state = {
        name:'Eric',
        channel:'Hoi Dan IT'
    }
    /*
    JSX => return 1 block
    fragment <> </> 
    */

   // Example of state, change UI real-time
   handleOnChangeName = (event) => {
    this.setState({
        name: event.target.value
    })
   }

    render() {

        return (
            <>
                <div className="first">
                    <input type="text" value={this.state.name} 
                            onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>

                <div className="second">
                    My channel: {this.state.channel}
                </div>
            </>


        )
    }
}

export default MyComponent;