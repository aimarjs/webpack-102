import React, { Component } from 'react';
import MdData from '../data/post.md';

class PostPage extends Component {
	render() {
		return (
			<div className="container">
				<div
					className="post"
					dangerouslySetInnerHTML={{ __html: MdData.__content }}
				/>
			</div>
		);
	}
}

export default { component: PostPage };
