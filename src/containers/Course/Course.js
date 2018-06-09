import React, { Component } from 'react';

class Course extends Component {
	state = {
		loadedCourse: null
	}
	componentDidMount() {
		this.loadData();
	}

	componentDidUpdate() {
		this.loadData();
	}

	loadData() {
		const id = +this.props.match.params.id;
		const query = new URLSearchParams(this.props.location.search);
		let title = null;
		for (let param of query.entries()) {
			if (param[0] === 'title') {
				title = param[1];
			}
		}
		if (id) {
			if (!this.state.loadedCourse || (this.state.loadedCourse && this.state.loadedCourse.id !== id)) {
				this.setState({
					loadedCourse: {
						title: title,
						id: id
					}
				});
			}
		}
	}

	render() {
		let course = null;
		if (this.state.loadedCourse) {
			course = (
				<div>
					<h1>{this.state.loadedCourse.title}</h1>
					<p>You selected the Course with ID: {this.state.loadedCourse.id}</p>
				</div>
			);
		}
		return course;
	}
}

export default Course;