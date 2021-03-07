import {setChildren} from './js/transformers/ref.js'


import div from './js/tags/div.js'
import span from './js/tags/span.js'
import input from './js/tags/input.js'
import table from './js/tags/table.js'
import {withChildrenF} from './js/transformers/ref.js'

const event = document.createEvent('Event')
event.initEvent('SetState',true,true)

let matrix = [
    [3,6,5],
    [2,3,4],
]

let SetState = (callback)=> ()=>{
    callback()
    document.dispatchEvent(event)
}

let main = (event)=> {
    //({element,childrenFunctions})
    console.log('main called')
    setChildren({
        element: document.querySelector('body'),
        childrenFunctions: [
            span({text:'Inner text'}),
            withChildrenF({elementFunction:div(),childrenFunctions:[
                div({id:'1',classes:['amazing','awesome']}),
                div()
            ]}),
            div({text:'Inner text',click:()=>{alert('div clicked')}}),
            div({id:'3'}),
            span(),
            withChildrenF({elementFunction:span(),childrenFunctions:[
                input(),input(),input()
            ]}),
            input(),
            withChildrenF({elementFunction:div(),childrenFunctions:[
                input({type:'password',id:'1',name:'password',placeholder:'password'}),
                input()
            ]}),
            input({
                type:'button',
                value:'Increment Matrix',
                click:SetState(()=>{
                    //console.log('going to change matrix')
                    for(let i = 0 ; i < matrix.length;i++)
                        for(let j = 0 ; j < matrix[i].length; j++)
                            //console.log('record: ',matrix[i][j])
                            matrix[i][j]++;
                })
            }),
            table({headerContentFunction:()=>['a','b','c'],bodyContentFunction:()=>matrix})
        ]        
    })
}

addEventListener('SetState',()=>main(event))
addEventListener('DOMContentLoaded',()=>main(event))
