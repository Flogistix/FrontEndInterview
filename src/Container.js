import React from 'react';
import Component from './Component';
import { fetchSubs } from './api';

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      emailError: false,
      subLength: null,
      submitted: false,
      subOptions: []
    }
  }

  componentDidMount() {
    this.setState({ emailError: true });

    // This returns a list of subscription options. 
    // Set state of 'subOptions' to this array to populate the Select component
    fetchSubs();
  }

  componentDidUpdate() {
    if (this.state.emailError
        && this.state.email.includes('@') 
        && this.state.email.includes('.')
     ) {
       this.setState({ emailError: false }); 
     }

     if (!this.state.emailError
        && (!this.state.email.includes('@') || !this.state.email.includes('.'))
     ) {
       this.setState({ emailError: true }); 
     }
  }

  componentWillUnmount() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      emailError: false,
      subLength: 0,
      submitted: false
    })
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <>
        <Component
          email={this.state.email}
          phone={this.state.email}
          lastName={this.state.lastName}
          firstName={this.state.firstName}
          subLength={this.state.subLength}
          subOptions={this.state.subOptions}
          handleChange={this.handleChange}
          emailError={this.state.emailError}
        />
        <button onClick={() => this.setState({ submitted: true })}> Submit </button>
        { this.state.submitted && (
          <div>
            {this.state.firstName} {this.state.lastName},
            <br />
            Thank you for your {this.state.subLength} Month Subscription!
            <br />
            You will receive a confirmation message at {this.state.email} and {this.state.phone}
          </div>
        )}
      </>
    );
  };
};

export default Container;
