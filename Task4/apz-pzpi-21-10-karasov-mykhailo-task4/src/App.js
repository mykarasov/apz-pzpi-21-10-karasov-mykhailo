import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Header from "./components/header/Header";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {checkAuth} from "./API/authApi";

const App = observer(() => {
    const { userStore } = useContext(Context);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await checkAuth();
                userStore.setUser(data);
                userStore.setIsAuth(true);
            } catch (error) {
                userStore.setUser(null);
                userStore.setIsAuth(false);
            }
        }

        getUserData().then();
    }, [userStore]);

    return (
        <BrowserRouter >
            <div className={'app__container'} >
                <div>
                    <Header />
                </div>
                <div style={{height: '90%'}}>
                    <div style={{ height: '100%'}}>
                        <AppRouter />
                    </div>
                </div>
            </div>
        </BrowserRouter>
      );
});

export default App;
