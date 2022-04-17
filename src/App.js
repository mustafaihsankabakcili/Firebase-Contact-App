import "./App.css";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";
import { AddUserDB, EditUserDB } from "./utils/functions";
import { ToastContainer } from "react-toastify";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      EditUserDB(info);
    } else {
      AddUserDB(info);
    }
    setInfo(initialValues);
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts editUser={editUser} />
      <ToastContainer />
    </div>
  );
}

export default App;
