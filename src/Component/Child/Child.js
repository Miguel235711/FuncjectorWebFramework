
import component from '../../../js/transformers/component.js'

import div from '../../../js/tags/div.js'

let counter = 0

let {SetState,Component} = component({
    elementFunction:div({text: counter.toString()}),
    childrenFunctions: [
        div({
            text:'Inner text',
            click:SetState(()=>{
                console.log('child clicked')
            //console.log('going to change matrix')
                counter++
                console.log('counter',counter)
            })
        }),
        div({
            text:'Hello'
        })
    ]
})
export default Component
