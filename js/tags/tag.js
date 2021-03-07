import {setClasses,setId} from '../transformers/ref.js'

export default (tagName,{classes,id,text,click}={}) => () =>{
    let _tag = document.createElement(tagName)
    if(classes)
        //(element,classes)
        _tag = setClasses({element:_tag,classes:classes})
    if(id){
        //(element,id)
        _tag = setId({element:_tag,id:id})
    }
    if(text)
        _tag.innerText=text
    if(click)
        _tag.addEventListener("click",click) ///TODO: extend later
    return _tag
}