import React from 'react';
import '../styles/Booking.css'; // Import your CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';


function Booking() {
  return (
    <div className="booking-container">
      <h2>My bookings:</h2>
      <div className="booking-card">
        <div className="booking-header">
          <div className="booking-icon">
            <img src="memo.png" alt="Booking Icon"/>
          </div>
          <div className="booking-title">
            Graphic design (full course)
          </div>
          <div className="booking-actions">
          <button className="invoice-button"><img src="download.png" alt="" className='down-img'/>Invoice PDF</button>
          <button className="receipt-button"><img src="download.png" alt="" className='down-img'/>Receipt PDF</button>
        </div>
        </div>
        <div className="booking-details">
          <div className="booking-info">
            <div className="info-label">Subject</div>
            <div className="info-label">Sessions</div>
            <div className="info-label">Invoice</div>
            <div className="info-label">Valid till</div>
            
          </div>
          <div className="booking-info">
          <div className="info-value">Design for intermediates - L1</div>
            <div className="info-value">10 sessions</div>
            <div className="info-value">13</div>
            <div className="info-value">Feb 15, 2024 (23 days left)</div>
          </div>
         
        </div>
      
    
      <div className="App">
      <div className="balance">
        Balance 6
        <div className="bar">
          <div className="filled"></div>
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
          <input type="checkbox" className="checkbox" checked={false} />
        </div>
      </div>
      <div className="scheduled">
        Scheduled 3
        <div className="icon">
          <i className="fas fa-clock"></i>
          <i className="fas fa-clock"></i>
          <i className="fas fa-clock"></i>
        </div>
      </div>
      <div className="attended">
          Attended 5
          <div className="icon">
           <img src="check-box.png" alt="" />
           <img src="check-box.png" alt="" />
           <img src="check-box.png" alt="" />
           <img src="check-box.png" alt="" />
            <img src="no.png" alt="" />
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Booking;
