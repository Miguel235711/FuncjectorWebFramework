import tag from './tag.js'

export default ({classes,id,type,placeholder,name,value,click}={}) => ()=>{
    let _input = tag('input',{classes:classes,id:id,click:click})()
    if(type)
        _input.setAttribute('type',type)
    if(placeholder)
        _input.setAttribute('placeholder',placeholder)
    if(name)
        _input.setAttribute('name',name)
    if(value)
        _input.setAttribute('value',value)
    return _input
}