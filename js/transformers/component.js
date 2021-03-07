import {setChildren} from './ref.js'

export default ({elementFunction,childrenFunctions}) => {
    let main=undefined
    let instance = undefined
    let parent = undefined
    let SetState = (callback)=> ()=>{ ///extrapolate functionality to ref.js
        callback()
        let old = instance
        parent.replaceChild(main(),old)
    } 
    main = () =>{
        instance = setChildren({
            element: elementFunction(),
            childrenFunctions: childrenFunctions       
        })
        return instance
    }
    return {SetState: SetState, element: (parentIn)=>{
        parent = parentIn
        return main
    }}
}

export {SetState}