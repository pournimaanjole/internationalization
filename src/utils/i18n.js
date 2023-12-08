import translatore from './config.json'
const i18n = (keyword)=>{
    const lag =localStorage.getItem("lang") || "en"
return translatore[lag][keyword]
}
export default i18n;