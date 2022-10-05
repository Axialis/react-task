import { Header } from "../components/header/header";
import { Footer} from "../components/footer/footer";
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs";

import Main from "../pages/main";

function App() {
  return (
    <div>
      <Header>Header</Header>
      <Breadcrumbs/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
