import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({requestLocale}) => {

    const requested = await requestLocale;
    console.log("Requested locale is: " , requested);
    const locale = hasLocale(routing.locales , requested)? requested : routing.defaultLocale;
    console.log("Locale is in request: " , locale);

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});