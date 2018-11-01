import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Col, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

class Search extends React.Component {

    state = {
        searchTerm: '',
    };

    handleChange = searchTerm => event => {
        this.setState({
            searchTerm: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return ([
            <Col sm={12}>
                <TextField
                    id="outlined-name"
                    label="Search the OMDB API"
                    value={this.state.searchTerm}
                    onChange={this.handleChange('searchTerm')}
                    margin="normal"
                    variant="outlined"
                />
            </Col>,
            <Col sm={8}>
                {this.state.searchTerm}
            </Col>
        ]);
    }

}

export default Search;