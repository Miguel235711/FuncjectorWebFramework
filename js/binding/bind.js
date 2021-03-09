///add to framework

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

let bindListenerToHolderBi =  (elementFunction,valueHolder,eventName) =>/// 
    ()=>{
        let element = elementFunction()
        ///change value when element changes
        element.addEventListener(eventName,event=>{
            valueHolder.value = event.target.value
            //for changing for all listeners of value
            valueHolder.listenerElements.forEach(elementP=>{
                if(elementP!=element)
                    elementP.value = valueHolder.value
            })
        })
        ///change element when value changes
        valueHolder.listenerElements.push(element)
        ///set html element with value of valueHolder
        element.value = valueHolder.value
        return element
    }

export{valueHolder,bindListenerToHolderBi}