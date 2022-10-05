import { Header } from "../components/header/header";
import { Footer} from "../components/footer/footer";
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs";
import { Button } from "../components/button/button";

import Main from "../pages/main";

function App() {
  return (
    <div>
      <Header>Header</Header>
      <Breadcrumbs/>
      <Button/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
