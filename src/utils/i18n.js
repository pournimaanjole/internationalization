import translatore from './config.json'
const translate = ({keyword,lag})=>{
return translatore[lag][keyword]
}
export default translate