// Desc: This is the main app file. It is the parent component of all other components. It is the first component to be rendered. It renders the Main component which is the landing page of the app. The Main component renders the SignUp component which is the sign up page of the app. The SignUp component renders the SignIn component which is the sign in page of the app. The SignIn component renders the Dashboard component which is the dashboard page of the app. The Dashboard component renders the Profile component which is the profile page of the app. The Profile component renders the EditProfile component which is the edit profile page of the app. The EditProfile component renders the ChangePassword component which is the change password page of the app. The ChangePassword component renders the DeleteAccount component which is the delete account page of the app. The DeleteAccount component renders the Dashboard component which is the dashboard page of the app.   
import Main from './components/landingpage/Main';

function App() {
  return (
  <div>
    <Main/>
  </div>
  );
}

export default App;
