
    import './App.css';
    import MainPage from "./pages/mainPage/MainPage";
    import AboutPage from "./pages/aboutPage/AboutPage";
    import ChangeTitle from "./components/ChangeTitle";
    import ContactsPage from "./pages/contactsPage/ContactsPage";
    import AddTask from "./components/AddTask";
    import TaskList from "./components/TaskList";
    import CategoryFilter from "./components/CategoryFilter";
    import {useState} from "react";
    import UsersPage from "./pages/usersPage/UsersPage";
    import SearchBar from "./components/SearchBar";
    import UserList from "./components/UserList";

    function App() {
        const [filter, setFilter] = useState('')

      return (
        <div className="app-container">
            {/*<MainPage/>*/}
            {/*<h1>------------------</h1>*/}
            {/*<AboutPage/>*/}
            {/*<ChangeTitle/>*/}
            {/*<ContactsPage/>*/}
            {/*<h1>Task Manager</h1>*/}
            {/*<AddTask/>*/}
            {/*<CategoryFilter onChange={setFilter}/>*/}
            {/*<TaskList filter={filter}/>*/}
            {/*<UsersPage/>*/}
            <h1>GitHub User Search</h1>
            <SearchBar/>
            <UserList/>
        </div>
      );
    }

    export default App;
