import styled from "styled-components";
const BreadcrumbsStyle = styled.nav.attrs({

  className: `font-sans	font-family: Roboto text-xl flex flex-row`
})``;


function Breadcrumbs() {
  return (
    <BreadcrumbsStyle>
        <ol>
          <li>
            <a href="#">SingUpInfo</a>
          </li>
          <li>
              <a href="#">PersonalInfo</a>
          </li>
        </ol>
    </BreadcrumbsStyle>

  );
}

export default Breadcrumbs;