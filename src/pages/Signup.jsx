import TemplateLoginSignup from "../components/TemplateLoginSignup"

export default function Signup({setIsLogged, isLogged}) {
  return (
      <TemplateLoginSignup 
        title = {"Join the millions learning to code with StudyNotion for free"}
        desc = {"Build skills for today, tomorrow, and beyond."}
        italicDesc= {"Education to future-proof your career."}
        formType={"signup"}
        thumbnail={"https://codehelp-router-project.netlify.app/static/media/signup.b431d919de01b6515dd6.png"}
        setIsLogged={setIsLogged}
        isLogged={isLogged}
      />
 );
}
