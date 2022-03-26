import React from 'react';

const Answers = () => {
    return (
        <div>
            <section className="w-50 mx-auto p-3 mt-5">
            <h2 className="text-center mt-5"> Answers of Questions:</h2>
            <div>
                <h5 className="py-3">What different props between state</h5>
                <table className="table table table-bordered border-primary">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">Props</th>
                        <th className="text-center" scope="col">State</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>React allows us to pass information to a Component using something called props</td>
                        <td>The state is a built-in React object that is used to contain data about the component. </td>
                      </tr>
                      <tr>
                        <td>Props are variables passed to it by its parent component.</td>
                        <td>State is still variables, but directly initialized and managed by the component</td>
                      </tr>
                      <tr>
                        <td>We use props in React to pass data from a parent component to a child component.</td>
                        <td>The state object is where you store property values that belongs to the component.
                        When the state object changes, the component re-renders.</td>
                      </tr>
                    </tbody>
                  </table>
                <h5 className="pt-3">How does react work? </h5>
                <p className="py-3">
                React is a declarative, efficient, and flexible JavaScript library. React internally creates, updates, and destroys instances to figure out the DOM elements tree that needs to be rendered to the browser.  It makes simple views for each state in your application, and React will efficiently update and render just the right component by virtual DOM, when your data changes.
                </p>
                <h5 className="pt-3">How state works in react js</h5>
                <p className="pt-3">React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. State can be updated in response to event handlers, server responses, or prop changes.
                The setState enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.</p>
            </div>
        </section>
        </div>
    );
};

export default Answers;