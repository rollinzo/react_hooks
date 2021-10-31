import React, { useEffect, useState, useRef } from "react";
import {useParams} from 'react-router';

function EffectHook1(){
  const [wows, setWows] = useState(0);
  const [myAnnouncement, setAnnouncement] = useState("What would you like to announce?");
  const inputAnnounce = useRef(null);

  useEffect(() => {
    console.log(
      `useEffect has fired: Announce: ${myAnnouncement}: Wows: ${wows} `
    )
  });

  return(
    <div>
      <h1>This is EffectHook version 1</h1>
      <p>useEffect() fires anytime either of the state variables change.</p>
      <h2>{myAnnouncement}</h2>
      <input ref={inputAnnounce} type="text" id="announcement" name="announcment"
             onChange={() => setAnnouncement(inputAnnounce.current.value)}>

      </input>
      <br />
      <h3>Wows: {wows}</h3>
      <button onClick={()=>setWows(wows+1)}>Plus Wow!</button>

    </div>
    );

}

function EffectHook2(){
  const [wows, setWows] = useState(0);
  const [myAnnouncement, setAnnouncement] = useState("What would you like to announce?");
  const inputAnnounce = useRef(null);

  useEffect(() => {
    console.log(
      `useEffect has fired: Announce: ${myAnnouncement}: Wows: ${wows} `
    )
  },[wows]); //HERE WE REQUIRE a change in wows to run the console.log

  return(
    <div>
      <h1>This is EffectHook version 2</h1>
      <p>useEffect() only fires if the number of wows change</p>
      <h2>{myAnnouncement}</h2>
      <input ref={inputAnnounce} type="text" id="announcement" name="announcment"
             onChange={() => setAnnouncement(inputAnnounce.current.value)}>

      </input>
      <br />
      <h3>Wows: {wows}</h3>
      <button onClick={()=>setWows(wows+1)}>Plus Wow!</button>

    </div>
    );

}


function EffectHook3(){

  const [myAnnouncement, setAnnouncement] = useState("What would you like to announce?");
  const inputAnnounce = useRef(null);

  useEffect(() => {
    console.log(
      `useEffect has fired! `
    )
  });

  return(
    <div>
      <h1>This is EffectHook version 3</h1>
      <p>Will useEffect() fire if the state is not used?</p>
      <h2>FIXED ANNOUNCEMENT</h2>
      <input ref={inputAnnounce} type="text" id="announcement" name="announcment"
             onChange={() =>setAnnouncement(inputAnnounce.current.value)}>

      </input>


    </div>
    );

}

export { EffectHook1, EffectHook2, EffectHook3 };

// export default function EffectHook(){
//
//   let { option } = useParams();
//   if (!option) {
//     option = "default";
//   }
//   return <EffectSwitch option={option} />;
// }
//
// function EffectSwitch({option}) {
//   switch( option){
//     case 'daves':
//       return <Daves />;
//       break;
//     default:
//       return <NoOption />;
//     }
// };
//
// function NoOption(){
//   useEffect(()=>{
//     console.log("useEffect() fired: NO OPTIONS");
//   });
//   return <MyDisplay />;
// }
//
// function Daves(){
//   useEffect(()=>{
//     console.log("These are the Daves I know");
//   });
//   return <MyDisplay />;
// }
//
// function MyDisplay(){
//   return (
//     <div>
//       <h1>The useEffect() Hook</h1>
//     </div>
//
//     );
// }
