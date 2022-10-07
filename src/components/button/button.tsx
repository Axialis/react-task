import styled from "styled-components";
import tw from 'twin.macro'
import store from "../../store";
import { pressButton, setPage } from "../../store/actionCreator/action-creator";

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
function clickHandler(props: any) {
  if(props.reset === "RESET_STORE") {
    store.dispatch({type: 'RESET_STORE'});    
  }
  store.dispatch(pressButton(props.id))
}
export const Button = (props: any) => {
  return (
    <ButtonStyle onClick={() => clickHandler(props)}>
      <Text>{props.title}</Text>
    </ButtonStyle>
  )
}

