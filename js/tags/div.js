///Change in framework

import tag from './tag.js'
import {withChildrenF} from '../../js/transformers/ref.js'

export default (childrenFunctions,{classes,id,text,click}={}) => {
    let _div = tag('div',{classes:classes,id:id,text:text,click:click})
    return childrenFunctions ? 
        withChildrenF({elementFunction:_div,childrenFunctions:childrenFunctions}):
        _div
}
        