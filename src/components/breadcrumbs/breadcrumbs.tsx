import styled from "styled-components";
import tw from 'twin.macro'

const BreadcrumbsStyle = styled.nav.attrs({
  className: `
  flex
  justify-center
  text-black
  font-bold
  my-4
  `
})``;

const Ol = styled.ol.attrs({
  className: `
  list-none
  p-0
  inline-flex
  `
})``;

const Li = styled.ol.attrs({
  className: `
  flex
  items-center
  `
})``;

const Link = styled.span<{ active: string }>`
  ${props => props.active === "true" ? tw`cursor-auto` : tw`cursor-pointer`};
  ${props => props.active === "true" ? tw`text-gray-200` : tw`text-gray-900`}
  ${props => props.active === "true" ? tw`pointer-events-none` : tw`pointer-events-auto`}
  ${props => props.active === "true" ? "" : tw`hover:text-red-900`}
  ${tw`select-none`}
`;

const Svg = styled.svg.attrs({
  className: `
  fill-current
  w-3
  h-3
  mx-3
  `,
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 320 512',
})``;

export const Breadcrumbs = (props: any) => {
  return (
    <BreadcrumbsStyle>
      <Ol>
        <Li>
          <Link active='false' onClick={() => clickLink(1)}>SingUpInfo</Link>
          <Svg>
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </Svg>
        </Li>
        <Li>
          <Link active='true' onClick={() => clickLink(2)}>PersonalInfo</Link>
        </Li>
      </Ol>
    </BreadcrumbsStyle>
  )
}

function clickLink(target: number) {
  console.log(target)
}