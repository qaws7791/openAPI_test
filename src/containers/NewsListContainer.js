import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NewsList} from '../components/NewsList';

class NewsListContainer extends Component {

    render() {
        const { url } = this.props;
        return (<NewsList url={url}/>);
    }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    url: state.form.url,
});

// props 로 넣어줄 액션 생성함수

const mapDispatchToProps = dispatch => ({
    
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewsListContainer);

