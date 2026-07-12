import google from "./assets/google.png";

interface LoginButtonType {
  img: string;
  text: string;
}

function LoginButton({ img, text }: LoginButtonType) {
  return (
    <div className="flex justify-center items-center bg-white w-100 h-50 rounded-md ">
      <button className="flex gap-4 items-center border rounded-md p-4 border-gray-300 cursor-pointer">
        <img src={img} alt="" className="w-8 h-8" />
        {text}
      </button>
    </div>
  );
}

function App() {
  return (
    <section className="w-full flex justify-center items-center min-h-screen bg-gray-200">
      {/* google login  */}
      <LoginButton img={google} text="Sign in with Google" />
    </section>
  );
}

export default App;
