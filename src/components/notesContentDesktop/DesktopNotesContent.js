import React from "react";
import "./DesktopNotesContent.css";
import Ellipse from "../../assets/Ellipse.png"

function DesktopNotesContent({ note }) {
  
  return (
    <div className="desktop__notes__content__note">
        <div className="desktop__notes__content__date">{note.date}</div>
        <div className="ellipse"><img src= {Ellipse} alt = "Ellipse"></img></div>
        <div className="desktop__notes__content__time">{note.time}</div>
      <div className="desktop__notes__content__details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default DesktopNotesContent;
