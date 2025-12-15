import { useTranslations } from "next-intl";
import RegisterForm from "../../_components/RegisterForm";

const register = () => {

    const t = useTranslations('Register');

    return(
        <>
        <h1>{t('title')}</h1>
        <RegisterForm />
        </>
    );
}
export default register;