import google from "./assets/google.png";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import LoginBtn from "./components/loginBtn";






function App() {


  // if the user already logedIn use this email, then popup a dialog to Continue as this email
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  // custom google login button
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
    useOneTap
  />;

  return (
    <section className="w-full flex justify-center items-center min-h-screen bg-gray-200">

      {/* google login */}
      <LoginBtn img={google} text="Custom Sign in with Google" getGoogleToken={login} />

      {/* google official button  */}
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </section>
  );
}

export default App;
