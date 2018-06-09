import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Courses from '../Courses/Courses';
import Course from '../Course/Course';
import Users from '../Users/Users';
import './School.css';

class School extends Component {
	render() {
		return (
			<div className="School">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/courses"
									exact
									activeStyle={{textDecoration: 'underline'}}>Courses</NavLink>
							</li>
							<li>
								<NavLink
									to="/users"
									exact
									activeStyle={{textDecoration: 'underline'}}>Users</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/courses" component={Courses} />
					<Route path="/users" component={Users} />
					<Redirect from="/all-courses" to="/courses" />
					<Route render={() => <h1>Not found</h1>} />
				</Switch>
			</div>
		);
	}
}

export default School;