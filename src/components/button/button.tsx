import styled from "styled-components";
import tw from 'twin.macro'

const ButtonStyle = styled.button`
${tw`
    bg-blue-500
    hover:bg-transparent
    text-white
    text-xs
    font-semibold
    hover:text-blue-500
    h-10
    w-24
    border-2
    border-blue-500
    rounded
`
}
`

const Text = styled.span`
${tw`hover:text-blue-500`}
`

export const Button = (props: any) => {
  return (
    <ButtonStyle>
      <Text>{props.title}</Text>      
    </ButtonStyle>
  )
}