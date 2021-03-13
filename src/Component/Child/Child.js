import {setChildren} from '../../../js/transformers/ref.js'

import div from '../../../js/tags/div.js'

export default ()=>{
    let SetState = (callback)=> ()=>{ ///extrapolate functionality to ref.js
        let old = instance
        parent.replaceChild(main(),old)
        callback()
    }
    
    let counter = 0
    let instance = undefined
    let parent = undefined
    
    let main = () => { 
        //({element,childrenFunctions})
        let root = div({text: counter.toString()})()
        instance = setChildren({
            element: root,
            childrenFunctions: [
                div({
                    text:'Inner text',
                    click:SetState(()=>{
                        console.log('setState')
                    //console.log('going to change matrix')
                        counter++
                    })
                }),
                div({
                    text:'Hello'
                }),
            ]        
        })
        return instance
    }
    return (parentIn)=>{ ///TODO: extrapolate functionality to ref.js
        parent = parentIn
        return main
    }
}
