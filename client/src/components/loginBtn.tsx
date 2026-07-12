
interface LoginButtonType {
    img: string;
    text: string;
    getGoogleToken?: () => void
}


function LoginButton({ img, text, getGoogleToken }: LoginButtonType) {
    return (
        <div className="flex justify-center items-center bg-white w-100 h-50 rounded-md " onClick={getGoogleToken}>
            <button className="flex gap-4 items-center border rounded-md p-4 border-gray-300 cursor-pointer">
                <img src={img} alt="" className="w-8 h-8" />
                {text}
            </button>
        </div>
    );
}

export default LoginButton