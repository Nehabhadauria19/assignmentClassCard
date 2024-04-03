// ProfilePage.js
import React from 'react';
import '../styles/Profile.css'; // Import your CSS file for styling


function Profile() {
  return (
    <>
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <img src="img2.png" alt="User Avatar" className="avatar" />
          <div className="user-details">
            <h2 className="user-name">Suraj Talreja   <span> <img src="arrow.png" alt=""  className='arrow'/></span>  </h2>
       
            <p className="user-email">surajvtalreja@gmail.com</p>
           
          </div>
        </div>
       
        </div>
        <div className="profile-actions">
          <div className="input-like-box" onClick={() => console.log("Switch organization clicked")}>
            <span><img src="swap.png" alt="Switch organization" className="prof-icon" />Switch organization</span>
          </div>
          <div className="input-like-box" onClick={() => console.log("Edit profile clicked")}>
            <span><img src="edit.png" alt="Edit profile" className="prof-icon" />Edit profile</span>
          </div>
        </div>
      
      <div className="profile-menu">
        <ul>
          <li>
            <img src="calender.png" alt="My calendar" className="prof-icon" />
            <span>My calendar</span>
          </li>
          <li>
            <img src="booking-online.png" alt="My bookings" className="prof-icon" />
            <span>My bookings</span>
          </li>
          <li>
            <img src="hand.png" alt="Attendance history" className="prof-icon" />
            <span>Attendance history</span>
          </li>
          <li>
            <img src="invoice.png" alt="Billing history" className="prof-icon" />
            <span>Billing history</span>
          </li>
          <li>
            <img src="files.png" alt="My files" className="prof-icon" />
            <span>My files</span>
          </li>
          <li>
            <img src="folder.png" alt="My courses" className="prof-icon" />
            <span>My courses</span>
          </li>
          <li>
            <img src="bar-chart.png" alt="Grades" className="prof-icon" />
            <span>Grades</span>
          </li>
        </ul>
      </div>
    </div>
   
    </>
  );
}

export default Profile;