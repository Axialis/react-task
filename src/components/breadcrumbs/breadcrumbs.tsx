import styled from "styled-components";
import tw from 'twin.macro'
import store from "../../store";
import { useState } from 'react'
import { setPage } from "../../store/actionCreator/action-creator";

const BreadcrumbsStyle = styled.nav`
${tw`
    flex
    justify-center
    text-black
    font-bold
    my-4
`}`

const Ol = styled.ol`
${tw`
    list-none
    p-0
    inline-flex
`}`

const Li = styled.ol`
${tw`
    flex
    items-center
`}`

const Link = styled.span<{ active: string }>`
  ${props => props.active === "true" ? tw`text-gray-200` : tw`text-gray-900`}
  ${tw`select-none`}
`;

const Svg = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 320 512',
})`
${tw`fill-current w-3 h-3 mx-3`}`;

export const Breadcrumbs = (props: any) => {

  let [isActivePersonal, togglePersonal] = useState('true')

  store.subscribe(() => {
    if (store.getState().page === 'next') {
      togglePersonal('false')
    }
    else {
      togglePersonal('true')
    }
  })


  return (
    <BreadcrumbsStyle>
      <Ol>
        <Li>
          <Link active='false'>SingUpInfo</Link>
          <Svg>
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </Svg>
        </Li>
        <Li>
          <Link active={isActivePersonal}>PersonalInfo</Link>
        </Li>
      </Ol>
    </BreadcrumbsStyle>
  )
}

