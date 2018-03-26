import React, { Component } from 'react';
import MdData from '../data/post.md';

class Post extends Component {
	render() {
		return (
			<div
				className="post"
				dangerouslySetInnerHTML={{ __html: MdData.__content }}
			/>
		);
	}
}

export default Post;
