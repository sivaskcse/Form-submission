// import { useState, } from "react";
// import "./index.css";

// function App() {
//   //   const [time, setTime] = useState(0);
//   //   const [isRunning, setIsrunning] = useState(false);

//   //   useEffect(() => {
//   //     let timer;
//   //     if (isRunning) {
//   //       timer = setInterval(() => setTime((prev) => prev + 10), 10);
//   //     } else {
//   //       clearInterval(timer);
//   //     }
//   //     return () => clearInterval(timer);
//   //   }, [isRunning]);
//   //   const formatTime = (unit) => String(unit).padStart(2, "0");
//   //   const hours = Math.floor(time / 3600000);
//   //   const minutes = Math.floor(time / 60000);
//   //   const seconds = Math.floor((time % 60000) / 1000);

//   //   return (
//   //     <div class="stopwatch">
//   //       <div class="timer-sec">
//   //         <h1>
//   //           {formatTime(hours)}h:{formatTime(minutes)}m:{formatTime(seconds)}s

//   //         </h1>
//   //       </div>
//   //       <br />
//   //       <div class="buttons">
//   //         <button onClick={() => setIsrunning(true)}>start</button>
//   //         <button onClick={() => setIsrunning(false)}>Stop</button>
//   //         <button onClick={() => setTime(0)}>Restart</button>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <div className="button-group">
//         <button className="button" onClick={increment}>
//           Increment
//         </button>
//         <button className="button" onClick={decrement}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }
// export default App;

import React from "react";
import InputField from "./components/InputField.jsx";
import SelectField from "./components/SelectField.jsx";
import RadioGroup from "./components/RadioGroup.jsx";
import CheckboxField from "./components/CheckboxField.jsx";
import MessageBox from "./components/MessageBox.jsx";
import "./index.css";

const App = () => {
  return (
    <div className="Form">
      <h1>Submission Form</h1>
      <form
        action="https://formsubmit.co/sivapraveenb6@gmail.com"
        method="POST"
        target="_blank"
      >
        <InputField
          label="Full name"
          name="name"
          type="text"
          placeholder="Full name"
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Phone number"
        />
        <InputField
          label="Subject"
          name="subject"
          type="text"
          placeholder="Subject"
        />

        <SelectField name="gender" option={["Male", "Female", "Others"]} />
        <RadioGroup
          label="Prefered Contact Method"
          name="preferred_contact"
          option={["Email", "Phone"]}
        />
        <CheckboxField
          label="Subscribe to Newsletter"
          name="checkbox"
          value="Yes"
        />
        <MessageBox name="message" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
