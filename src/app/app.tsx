import styled from "styled-components";
import tw from 'twin.macro'
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs";
import Main from "../pages/main";

const AppStyle = styled.div`
${tw`flex flex-col min-h-screen justify-between`}`

function App() {
  return (
    <AppStyle>
      <>
        <Header>Header</Header>
        <Breadcrumbs />
      </>
        <Main />
        <Footer />
    </AppStyle>
  );
}

export default App;
