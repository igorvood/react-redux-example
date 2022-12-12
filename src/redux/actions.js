import {DECREMENT, INCREMENT, INPUT_TEXT} from "./types";


export function incrementLikesAction(){
    return {
        type: INCREMENT
    }
}

export function decrementLikesAction(){
    return {
        type: DECREMENT
    }
}

export function inputTextAction(text){
    return {
        type: INPUT_TEXT,
        text
    }
}