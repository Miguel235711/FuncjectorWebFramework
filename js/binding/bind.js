
let valueHolder = (initialValue) =>{
    return {
        value:initialValue,
        listenerElements:[],
        setValue(value){
            this.value=value
            ///listener
            this.listenerElements.forEach(element=>element.value=value)
        }
    }
}


let bindListenerToHolderBiValue =  (elementFunction,valueHolder,eventName,{interceptorFunction}={}) =>/// 
    ()=>{
        let element = elementFunction()
        ///change value when element changes
        element.addEventListener(eventName,event=>{
            let value = event.target.value
            if(interceptorFunction)
                value=interceptorFunction(event.target.value) ///intercepts event and changes if it wants 
            //console.log(`new value ${value}`)
            valueHolder.setValue(value)
        })
        ///change element when value changes
        valueHolder.listenerElements.push(element)
         ///set value with interceptor
         if(interceptorFunction){
            let value = interceptorFunction(element.value)
            valueHolder.setValue(value)
        }else{
            ///set html element with value of valueHolder
            element.value = valueHolder.value
        }
        return element
    }

let selectHolder = (initialIndex) =>{
    return {
        index:initialIndex,
        listenerElements:[],
        setIndex(index){
            this.index = index 
            ///listener
            this.listenerElements.forEach(element=>element.selectedIndex=index)
        }
    }
}

let bindChangeListenerToHolderBiIndex =  (elementFunction,indexHolder,{interceptorFunction}={}) =>/// 
    ()=>{
        let element = elementFunction()
        ///change value when element changes
        element.addEventListener('change',event=>{
            let index = element.selectedIndex
            if(interceptorFunction)
                index=interceptorFunction(index) ///intercepts event and changes if it wants 
            //console.log(`new index ${index}`)
            indexHolder.setIndex(index)
        })
        ///change element when value changes
        indexHolder.listenerElements.push(element)
        ///set index with interceptor
        if(interceptorFunction){
            let index = interceptorFunction(element.selectedIndex)
            indexHolder.setIndex(index)
        }else{
            ///set html element with index of indexHolder
            element.selectedIndex = indexHolder.index
        }
        return element
    }


export{valueHolder,bindListenerToHolderBiValue,selectHolder,bindChangeListenerToHolderBiIndex}