import { useState } from "react";
import { getDatabase, ref, push, onValue, set } from "firebase/database";
import myFirebaseApp from "../firebase/database";

const useDataCall = () => {
  const [dataList, setDataList] = useState();

  //! ------------------------- ADD DATA ------------

  const addData = (infoData) => {
    const db = getDatabase(myFirebaseApp);

    const dataRef = ref(db, "points/");
    const newDataRef = push(dataRef);

    set(newDataRef, {
      userName: infoData.username,
      userSetTime: infoData.userSetTime,
      userClickCount: infoData.userClickCount,
      userPoint: infoData.userPoint,
    });
  };

  //! ------------------------- GET DATA ------------

  const fetchData = () => {
    const db = getDatabase(myFirebaseApp);
    const dataRef = ref(db, "points/");

    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = [];

      for (let id in data) {
        dataArray.push({ id, ...data[id] });
      }
      setDataList(dataArray);
    });
  };

  return { addData, fetchData, dataList };
};

export default useDataCall;
