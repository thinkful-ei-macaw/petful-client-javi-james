import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/config';


class Form extends React.Component  {
    state = {
        name: '',
        submit: false
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        //api post request here
        let name = e.target["input-name"].value;
        this.setState({
            submit: true
        });
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              name,
            }),
          })
            .catch((err) => console.error(err));
        
        }
    
        //jump to adopt page
    
    
    render() {

        const form = (
            <form onSubmit={this.handleSubmit} >
                <fieldset>
                    <legend>Do you want to adopt a pet?</legend>
                    
                    <label />
                    <input type="text" name="input-name" id="input-name" required/>
    
                    <Link to="/">Return</Link>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        )

        const submitted = (
            <div>
                <p>Congrats, you've been submitted</p>
                <Link to="/adopt">Continue</Link>
            </div>
        )


        return (
            <div>
                {this.state.submit ? submitted : form }
            </div>
        )
    }
}


export default Form;