import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import "./NotificationPanel.css";

function NotificationPanel() {
  const [open, setOpen] = useState(false);

  const togglePanel = () => setOpen(!open);

  return (
    <>
      {/* Overlay for mobile */}
      {open && <div className="panel-overlay" onClick={togglePanel}></div>}

      {/* Toggle Button */}
      <button className="panel-toggle" onClick={togglePanel}>
        <FaBell />
      </button>

      {/* Notification Panel */}
      <div className={`panel ${open ? "open" : ""}`}>
        <h4>Notifications</h4>

        <div className="item">
          <span>🐞</span>
          <div>
            <p>You fixed a bug.</p>
            <small>Just now</small>
          </div>
        </div>

        <div className="item">
          <span>👤</span>
          <div>
            <p>New user registered.</p>
            <small>59 minutes ago</small>
          </div>
        </div>

        <div className="item">
          <span>🔔</span>
          <div>
            <p>Andi Lane subscribed to you.</p>
            <small>Today, 11:59 AM</small>
          </div>
        </div>

        <h4 className="title">Activities</h4>

        <div className="item">
          <img src="https://i.pravatar.cc/30?img=1" alt="avatar" />
          <div>
            <p>Changed the style.</p>
            <small>Just now</small>
          </div>
        </div>

        <div className="item">
          <img src="https://i.pravatar.cc/30?img=2" alt="avatar" />
          <div>
            <p>Released a new version.</p>
            <small>59 minutes ago</small>
          </div>
        </div>
        


        <div className="item">
           <img src="https://i.pravatar.cc/30?img=3" alt="" /> 
        <div>
           <p>Submitted a bug.</p> 
           <small>12 hours ago</small> 
           </div> 
           </div>
         <div className="item">
           <img src="https://i.pravatar.cc/30?img=4" alt="" />
            <div>
               <p>Modified data in Page X.</p>
                <small>Today, 11:59 AM</small>
                 </div> 
                 </div> 
         <div className="item">
          <img src="https://i.pravatar.cc/30?img=5" alt="" />
           <div>
             <p>Deleted a page in Project X.</p> 
             <small>Feb 2, 2026</small>
              </div> 
              </div>
        <h4 className="title">Contacts</h4>

        <div className="contact">
          <img src="https://i.pravatar.cc/30?img=6" alt="avatar" />
          <span>Natali Craig</span>
        </div>

        <div className="contact">
          <img src="https://i.pravatar.cc/30?img=7" alt="avatar" />
          <span>Drew Cano</span>
        </div>

        <div className="contact">
          <img src="https://i.pravatar.cc/30?img=8" alt="avatar" />
          <span>Andi Lane</span>
        </div>

        <div className="contact"> <img src="https://i.pravatar.cc/30?img=8" alt="" /> <span>Andi Lane</span> </div> <div className="contact"> <img src="https://i.pravatar.cc/30?img=9" alt="" /> <span>Koray Okumus</span> </div> <div className="contact"> <img src="https://i.pravatar.cc/30?img=10" alt="" /> <span>Kate Morrison</span> </div> <div className="contact"> <img src="https://i.pravatar.cc/30?img=11" alt="" /> <span>Melody Macy</span> </div>
      </div>
    </>
  );
}

export default NotificationPanel;