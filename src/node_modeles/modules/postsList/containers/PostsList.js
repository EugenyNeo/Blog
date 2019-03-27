import React from 'react';
import { connect } from 'react-redux';
//import  { PostsList }  from './node_modeles/components';
import PostsListActions from '../actions';
import PostsList from "../../../components/postsList";

class PostsListContainer extends React.Component {
    componentWillMount() {
        const { fetchItems } = this.props;
        fetchItems();
    }
    render() {
        const { fetchRemoveItem } = this.props;
        return <PostsList items={this.props.items} onRemove={fetchRemoveItem} />;
    }
}

export default connect(
    ({ posts }) => posts,
    PostsListActions,
)(PostsListContainer);