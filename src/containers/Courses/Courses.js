import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: 'Angular - The Complete Guide' },
			{ id: 2, title: 'Vue - The Complete Guide' },
			{ id: 3, title: 'PWA - The Complete Guide' }
		],
		selectedCourseId: null
	}

	componentDidMount() {
		console.log('[Courses] componentDidMount');
	}

	courseClickHandler = (id, title) => {
		// this.setState({ selectedCourseId: id });
		this.props.history.push({pathname: '/course/' + id});
	}

	render() {
		return (
            <div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{
						this.state.courses.map(course => {
							return <Link
								to={{
									pathname: '/courses/' + course.id,
									search: '?title=' + course.title
								}}
								key={course.id}
								><article className="Course">{course.title}</article></Link>
							// return <article className="Course" key={course.id} onClick={() => this.courseClickHandler(course.id)}>{course.title}</article>;
							// return <Course id={course.id} title={course.title} />
						})
					}
				</section>
				<Route path={this.props.match.url + '/:id'} component={Course} />
			</div>
        );
	}
}

export default Courses;