import React, { useState } from "react";
// function AuthenticationPage() {
//   const [currentForm, setCurrentForm] = useState("signIn");
//   // State variables for sign-in form
//   const [signInEmail, setSignInEmail] = useState("");
//   const [signInPassword, setSignInPassword] = useState("");
//   // State variables for sign-up form
//   const [signUpName, setSignUpName] = useState("");
//   const [signUpEmail, setSignUpEmail] = useState("");
//   const [signUpPassword, setSignUpPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   // State variables for password recovery form
//   const [recoveryEmail, setRecoveryEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   // Sign-in form submit handler
//   const handleSignIn = (event) => {
//     event.preventDefault();
//     // Perform form validation
//     if (!signInEmail || !signInPassword) {
//       alert("Please fill in both email and password fields.");
//       return;
//     }
//     // Proceed with the sign-in process
//     alert("Sign-in successful!");
//   };
//   // Sign-up form submit handler
//   const handleSignUp = (event) => {
//     event.preventDefault();
//     // Perform form validation
//     if (!signUpName || !signUpEmail || !signUpPassword || !confirmPassword) {
//       alert("Please fill in all fields.");
//       return;
//     }
//     if (signUpPassword !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }
    
//     alert("Sign-up successful!");
//   };

//   const handleRecovery = (event) => {
//     event.preventDefault();
   
//     if (!recoveryEmail || !newPassword) {
//       alert("Please fill in both email and new password fields.");
//       return;
//     }

//     alert("Password recovery successful!");
//   };
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-80 p-6 bg-white rounded shadow-lg">
//         {currentForm === "signIn" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Sign In</h2>
//             <form onSubmit={handleSignIn}>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Email"
//                   value={signInEmail}
//                   onChange={(e) => setSignInEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Password"
//                   value={signInPassword}
//                   onChange={(e) => setSignInPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Sign In
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("recovery")}
//               >
//                 Forgot Password?
//               </button>
//               <br />
//               Already don't have an account?{" "}
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("signUp")}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </>
//         )}
//         {currentForm === "signUp" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
//             <form onSubmit={handleSignUp}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Full Name"
//                   value={signUpName}
//                   onChange={(e) => setSignUpName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Email"
//                   value={signUpEmail}
//                   onChange={(e) => setSignUpEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Password"
//                   value={signUpPassword}
//                   onChange={(e) => setSignUpPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Register
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               Already have an account?{" "}
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("signIn")}
//               >
//                 Sign In
//               </button>
//             </div>
//           </>
//         )}
//         {currentForm === "recovery" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Recover Password</h2>
//             <form onSubmit={handleRecovery}>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Email"
//                   value={recoveryEmail}
//                   onChange={(e) => setRecoveryEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="New Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Confirm
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("signIn")}
//               >
//                 Back to Sign In
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
// export default AuthenticationPage;
function AuthenticationPage() {
    // ...
  
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    // Sign-in form submit handler
    const handleSignIn = (event) => {
      event.preventDefault();
      // Perform form validation
      if (!signInEmail || !signInPassword) {
        setShowError(true);
        setErrorMessage('Please fill in both email and password fields.');
        return;
      }
      // Proceed with the sign-in process
      setShowError(false);
      setErrorMessage('Sign-in successful!');
    };
  
    // Sign-up form submit handler
    const handleSignUp = (event) => {
      event.preventDefault();
      // Perform form validation
      if (!signUpName || !signUpEmail || !signUpPassword || !confirmPassword) {
        setShowError(true);
        setErrorMessage('Please fill in all fields.');
        return;
      }
      if (signUpPassword !== confirmPassword) {
        setShowError(true);
        setErrorMessage('Passwords do not match.');
        return;
      }
      setShowError(false);
      setErrorMessage('Sign-up successful!');
    };
  
    // Password recovery form submit handler
    const handleRecovery = (event) => {
      event.preventDefault();
      if (!recoveryEmail || !newPassword) {
        setShowError(true);
        setErrorMessage('Please fill in both email and new password fields.');
        return;
      }
      setShowError(false);
      setErrorMessage('Password recovery successful!');
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-80 p-6 bg-white rounded shadow-lg">
          {/* Render the error message component */}
          {showError && <ErrorMessage message={errorMessage} />}
  
          {/* Rest of your component code */}
          {/* ... */}
        </div>
      </div>
    );
  }
  
  export default AuthenticationPage;