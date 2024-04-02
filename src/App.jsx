import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/pages/Home";
import PreviousChats from "./components/pages/PreviousChats";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/previous-chats" component={PreviousChats} />
          <Redirect exact from="/" to="/home" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
