// ログイン時はHomeコンポーネントを表示して非ログイン時はSignUp,SignInコンポーネントを表示するようにする
// App.jsxでそれぞれのコンポーネントのルーティングを作成してそのルーティングをログイン時と非ログイン時で分けていく
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "./api/auth";
import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Movies } from './containers/Movies.jsx';
import { Sounds } from './containers/Sounds.jsx';
import { Photos } from './containers/Photos.jsx';
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'


export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();


  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Redirect to="signin" />;
      }
    } else {
      return <></>;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/sounds">
            <Sounds />
          </Route>
          <Route exact path="/photos">
            <Photos />
          </Route>
          <Private>
            <Route exact path="/">
              <Home />
            </Route>
          </Private>
        </Switch>
      </BrowserRouter>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;