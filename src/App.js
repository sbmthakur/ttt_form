import React, { Component } from "react";
import "./master.css";

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
        console.log("sdf", typeof e.target.num.value);
        this.props.history.push({
            pathname: "/data",
            num: Number(e.target.num.value)
        });
    }

    showInputError(refName) {
        const validity = this[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required numeric field`;
            } else if (validity.typeMismatch) {
            /*
             * For browsers which fire a change event on text input
             */
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
              ref={ n => { this.num = n; }}
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
