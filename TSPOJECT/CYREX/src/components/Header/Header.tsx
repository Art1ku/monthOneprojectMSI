import { FC } from "react"

interface HeaderProps{
    state: string
    setState: (arg: string) => void
    arr: number[]
}



const Header:FC<HeaderProps> = (props) => {

    const {state, setState, arr} = props


    // const arr: number[] = [1,2,3,4,5,6,7,8,9]

    const arr2 = arr.map((item) => {
        return item * 10
    })

    // console.log(arr2)

    

    // async function CYREX( url = 'https://pokeapi.co/api/v2/pokemon/', data={}) {
    //     const response = await fetch(url)
        
    // }

    return(
        <>
            {state}
            <button onClick={() => setState('click')}>click</button>
            
        </>
    )
}

export default Header













 // const {data} = props

    // const myVal: number = 10
    // const myStr: string = 'hello'
    // const myBool: boolean = true
    // const myObj: {name: string, id: number, score: number} = {
    //     name: 'Ilya',
    //     id: 1,
    //     score: 12345
    // }
    // const myVar: any = 123

    // console.log(myVal)




    // const myFunc = (number: number):(() => number) => {
    //     return number + 10

    // }










    // interface HeaderObjData{
//     name: string
//     age: number
//     isSingle: boolean
// }