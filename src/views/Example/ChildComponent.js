import React from "react";
/*
  2 component: class component and function component(function, arrow)
  using JSX
 */
// class ChildComponent extends React.Component {

//     /*
//     JSX => return 1 block
//     fragment <> </> 
//     */

//     render() {
//         console.log('>>> check props: ', this.props)

//         //key: value
//         let {name, age, address, arrJobs} = this.props
//         return (
//             <>
//                 <div>Child component: {name} - {age} - {address}</div>

//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item,index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//             </>


//         )
//     }
// }

//use when Component is stateless, here is example
const ChildComponent = (props) => {

        let {name, age, address, arrJobs} = props;

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

export default ChildComponent;