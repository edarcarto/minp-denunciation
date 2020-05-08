import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Header from '../parts/header/Header';

const Template = (Content) => class extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="no-padding">
                    <Content {...this} />
                </main>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return{}
}

const ComposedTemplateRedux = compose(connect(mapStateToProps, mapDispatchToProps), Template);
export default ComposedTemplateRedux;