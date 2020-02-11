import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Auth from './pages/auth/auth.component'
import Header from './components/header/header.component'
import { auth, createUserProfilDocument } from './firebase/firebase.utils'

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if(userAuth) {
				const userRef = await createUserProfilDocument(userAuth)
				userRef.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					})
				})
			}
			this.setState({currentUser: userAuth})
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage}></Route>
					<Route path='/shop' component={ShopPage}></Route>
					<Route path='/signin' component={Auth}></Route>
				</Switch>
			</div>
		)
	}
}

export default App;
