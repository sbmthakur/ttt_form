import React, { Component } from "react";
import './master.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.target.classList.remove("original");
        e.target.classList.add("active");
        this.setState({
            [e.target.name]: e.target.value
        });

        this.showInputError(e.target.name);
    }

    handleSubmit(e) {
        e.preventDefault();
   /*
    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      alert('form is invalid: do not submit');
    } else {
      alert('form is valid: submit');
    }
   */
        console.log("E", e.target.num.value);
        this.props.history.push({
            pathname: "/data",
            state: {
                "num": e.target.num.value
            }
        });
    }

    showFormErrors() {
        console.log("sdfdf");
        const inputs = document.querySelectorAll("input");
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add("active");

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    showInputError(refName) {
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a number`;
            }
            return false;
        }

        error.textContent = "";
        return true;
    }

    render() {
        return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label id="numLabel">Input: </label>
            <input className="original"
              type="number"
              name="num"
              ref="num"
              value={ this.state.num }
              onChange={ this.handleChange }
              required />
            <div className="error" id="numError" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
        );
    }
}

export default App;
