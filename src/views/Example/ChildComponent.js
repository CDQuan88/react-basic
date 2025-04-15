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
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        //key: value
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs ===true ?'showJobs = true':'showJobs = false';
        console.log('>>> check conditional: ', check)

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} >Hide</button>
                        </div>
                    </>
                }
            </>


        )
    }
}

//use when Component is stateless, here is example
// const ChildComponent = (props) => {

//         let {name, age, address, arrJobs} = props;

//         return (
//             <>
//                 <div>Child component: {name} - {age} - {address}</div>

//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item,index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//             </>

//         )
// }

export default ChildComponent;