import { signInWithGooglePopup, createUserFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user)
    }

    return (
        <div>
            <h1>SignIn page</h1>
            <button onClick={logGoogleUser}>Log in with Google</button>
        </div>
    );
}

export default SignIn;