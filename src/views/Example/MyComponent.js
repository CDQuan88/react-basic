import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
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
        arrJobs: [
            { id: 'Job 1', title: 'Developer', salary: '500' },
            { id: 'Job 2', title: 'Tester', salary: '400' },
            { id: 'Job 3', title: 'Project Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log(' <<<< check job from parent: ', job)
        // let currentJob = this.state.arrJobs;
        // currentJob.push(job)

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJob
        })

    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidMount() {
        console.log('>> run component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>> run did update', 'prevState: ', prevState, 'currentState: ', this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>


        )
    }
}

export default MyComponent;