import React from "react";

const MessageBox = ({ name }) => {
  return (
    <div className="message-box">
      <label>Your Message</label>
      <textarea
        name={name}
        placeholder="Your Message"
        rows="4"
        required
      ></textarea>
    </div>
  );
};

export default MessageBox;
