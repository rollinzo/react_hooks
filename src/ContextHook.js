import React, { useContext, useRef } from "react";
import { AppInfo } from './AppInfo';


export default function ContextHook1(){
  const [myAppName, setAppName] = useContext(AppInfo);

  const inputAnnounce = useRef(null);

  // useEffect(() => {
  //   console.log(
  //     `useEffect has fired: Announce: ${myAnnouncement}: Wows: ${wows} `
  //   )
  // });

  return(
    <div>
      <h1>This is ContextHook1</h1>
      <p>Here we can change the appName which displays in the Router at the top of the page.</p>

      <input ref={inputAnnounce} type="text" id="announcement" name="announcment"
             onChange={() => setAppName(inputAnnounce.current.value)}>

      </input>


    </div>
    );

}
