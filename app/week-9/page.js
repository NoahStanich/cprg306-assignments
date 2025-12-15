// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
export default function LandingPage(){
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    // Sign in to Firebase with GitHub authentication
    async function signIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    
    // Sign out of Firebase
    async function signOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }
    
    // Display some of the user's information
    <p>
    Welcome, {user.displayName} ({user.email})
    </p>;
}
