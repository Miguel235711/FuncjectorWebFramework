import tag from './tag.js'

export default ({classes,id,value}={}) => ()=>{
    let _option = tag('option',{classes:classes,id:id})()
    if(value)
        _option.setAttribute('name',value)
    return _option
}