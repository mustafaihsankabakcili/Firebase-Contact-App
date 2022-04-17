import firebase from "./firebase";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import Toast from "./toast";

const db = getDatabase(firebase);

export const AddUserDB = (info) => {
  const userRef = ref(db, "contacts");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  Toast('User Added!');
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);

    const userRef = ref(db, "contacts");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];

      for (let id in data) {
        baglantiArray.push({ id, ...data[id] });
      }
      setContactList(baglantiArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const DeleteUserDB = (id) => {
  // const userRef = ref(db, "contacts");
  remove(ref(db, "contacts/"+id))
  Toast('User Deleted!');
};

export const EditUserDB=(info)=>{
  const updates = {};

  updates["contacts/"+info.id]=info;
  Toast('User Edited!')
  return update(ref(db),updates);
}
