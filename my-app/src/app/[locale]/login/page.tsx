import { useTranslations } from "next-intl";
import LoginForm from "../../_components/LoginForm";

const LoginPage = () => {

    const t = useTranslations('Login');

    return (<>
    <h1>{t('title')}</h1>
    <LoginForm />
    </>);
}

export default LoginPage;