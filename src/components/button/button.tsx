import styled from "styled-components";
import tw from 'twin.macro'

const ButtonStyle = styled.button`
${tw`
    bg-transparent
    hover:bg-blue-500
    text-blue-500
    font-semibold
    hover:text-white
    h-10
    w-20
    py-1
    px-4
    border-2
    border-blue-500
    hover:border-transparent
    rounded
`
}
`

const Text = styled.span`
${tw`hover:text-white`}
`

export const Button = (props: any) => {
  return (
    <ButtonStyle>
      <Text>{props.title}</Text>      
    </ButtonStyle>
  )
}