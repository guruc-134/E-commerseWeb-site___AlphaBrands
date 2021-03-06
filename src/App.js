import React from 'react';
import './App.css';
import { Switch ,Route,Redirect}  from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
 import ShopPage from './pages/shop/shop.component';
import SignInAndSignupPage from './pages/sign-in-and-signup/sign-in-sign-up.component';
 import Header from './components/header/header.component';
import {auth ,createUserProfile } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount()
  {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>
    {
      if ( userAuth)
      {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot( snapshot =>
          {
              setCurrentUser( 
                {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              )
              // console.log(this.state)

          });      
      } 
      else
          setCurrentUser(userAuth);
    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  
  render(){  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route exact path='/shop' component = {ShopPage}/>
        <Route exact path='/signin' render = {() =>this.props.currentUser?
        (<Redirect to = '/'/>)
        :
        (<SignInAndSignupPage/>) }
        />
      </Switch>
    </div>
  );}
}
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user =>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);