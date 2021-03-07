import tag from './tag.js'

export default ({classes,id,name}={}) => ()=>{
    let _select = tag('input',{classes:classes,id:id})()
    if(name)
        _select.setAttribute('name',name)
    return _select
}