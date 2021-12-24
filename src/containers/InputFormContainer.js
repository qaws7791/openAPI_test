import React, { Component } from 'react';
import { connect } from 'react-redux';
import {InputForm} from '../components/InputForm';
import { submit } from '../store/form';

class InputFormContainer extends Component {
    handleSubmit = url => {
        const { submit } = this.props;
        console.log('submit');
        submit(url);
        console.log('submit2');
        this.render()
    };

    render() {
        const { url } = this.props;
        return (<InputForm onSubmit={this.handleSubmit} url={url}/>);
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    url: state.form.url,
});

// props 로 넣어줄 액션 생성함수

const mapDispatchToProps = dispatch => ({
    submit: url => dispatch(submit(url)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InputFormContainer);

