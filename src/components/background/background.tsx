import styled from "styled-components";
import tw from 'twin.macro'


const BackgroundStyle = styled.div`
${tw` fixed 
flex 
w-full 
h-full 
bg-black
opacity-20
justify-center 
items-center
`}`

function Background () {    
    return (
        <BackgroundStyle>             
        </BackgroundStyle>
    )
}
export default Background;