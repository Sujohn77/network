// @flow


export const required = (value:number) =>{
    if (value) return undefined
    return "Field is required"
}
