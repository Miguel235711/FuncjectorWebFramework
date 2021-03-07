import tag from './tag.js'


let td = ({classes,id,text}={}) => tag('td',{classes:classes,id:id,text:text}) 


///headerFunction needs to generate the data as []
///contentFunction needs to generate the data as [[],[],...]
export default ({classes,id,headerContentFunction,bodyContentFunction}={}) => () => {
    let _table = tag('table',{classes:classes,id:id})()//TODO: define tag later!!!

    //header creation
    let _thead = (()=>{
        let _thead = tag('thead')()

        let _tr = tag('tr')()
        
        console.log('headerContent: ',headerContentFunction())

        headerContentFunction().forEach(content=>_tr.appendChild(td({text:content})()))
        _thead.appendChild(_tr)
        return _thead
    })()
    //body creation
    let _tbody =  (()=>{
        let _tbody = tag('tbody')() 
        bodyContentFunction().forEach(row=>{
            let _tr = tag('tr')()
            row.forEach(content=>_tr.appendChild(td({text:content})()))
            _tbody.appendChild(_tr)
        })
        return _tbody
    })()
    _table.appendChild(_thead)
    _table.appendChild(_tbody)
    return _table
}