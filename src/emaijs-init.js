const emailJSUserID = process.env.REACT_APP_EMAILJS_USER_ID;
if (emailJSUserID) {
  window.emailjs.init(emailJSUserID);
} else {
  console.error('EmailJS user ID is not defined in environment variables.');
}
