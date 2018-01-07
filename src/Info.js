import React, { Component } from "react";
import PropTypes from "prop-types";
//import library and CSS for React Table 
import ReactTable from "react-table";
import "react-table/react-table.css";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            /*
             * Set "loading" to true so that the visitor
             * can see "Loading" screen while the data is
             * being fetched.
             */
            loading: true
        };
    }

    componentDidMount() {
        let num = this.props.location.state.num;
        let url = "https://fierce-falls-36128.herokuapp.com/" + num;
        fetch(url)
         .then(response => response.json())
         .then(data => {
             this.setState({
                 "data": data,
                 /*
                  * Set "loading" to false as we have 
                  * the data now
                  */
                 "loading": false
             });
         });
    }

    render() {

        // Pass value to the "data" prop
        const data = this.state.data;
        
        // Set structure for "columns". This will be passed to the columns prop
        const columns = [{
            Header: "Word",
            accessor: "word", // String-based value accessors!
            /*
             * Apply filter on the "Word" column. This filter allows us to search 
             * a word.
             */
            filterable: true
        }, {
            Header: "Count",
            accessor: "count",
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }];

        return (
          <ReactTable
            data={data}
            columns={columns}
            loading={this.state.loading}
            defaultPageSize={5}
            pageSizeOptions={[5,10,20]}
          />
        );
    }
}

Main.propTypes = {

    location: PropTypes.shape({
        num: PropTypes.number.isRequired,
    }),
};

Main.defaultProps = {

    location: {
        num: 0,
    },
};

export default Main;
