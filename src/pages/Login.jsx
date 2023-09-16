import TemplateLoginSignup from "../components/TemplateLoginSignup"

export default function Login({setIsLogged, isLogged}) {
  return (
      <TemplateLoginSignup 
        title = "Welcome Back"
        desc = "Build skills for today, tomorrow, and beyond."
        italicDesc= "Education to future-proof your career."
        formType="login"
        thumbnail="https://codehelp-router-project.netlify.app/static/media/login.4d877a447365e5137b67.png"
        setIsLogged={setIsLogged}
        isLogged={isLogged}
      />
  );
}
