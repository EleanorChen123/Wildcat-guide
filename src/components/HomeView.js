import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeView() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchClick = async () => {
    const userEmail = 'test@example.com';

    try {
      const response = await fetch('http://localhost:5001/api/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          search_query: searchInput,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to record search history');
      }

      console.log('✅ Search history recorded successfully from HomeView');
    } catch (error) {
      console.error('❌ Failed to record search history from HomeView:', error);
    }
  };

  return (
    <div className="container-fluid py-5 d-flex flex-column align-items-center home-top" id="homeView">
      <h1 className="display-4 fw-bold mb-4 search-title">Wildcat Guide</h1>
      <div className="input-group mb-5 w-75">
        <input
          type="text"
          className="form-control"
          placeholder="Type your question"
          id="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="btn btn-brand"
          type="button"
          id="searchButton"
          onClick={() => {
            if (searchInput.trim()) {
              handleSearchClick();
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="row w-75 g-4" id="cardsContainer">
        {/* IT Support Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">IT Support</h5>
              <ul className="list-unstyled quick-qa">
                <li>
                  <a
                    href="https://services.northwestern.edu/TDClient/30/Portal/KB/ArticleDet?ID=1399"
                    className="card-link"
                    id="resetNetID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reset NetID password
                  </a>
                </li>
                <li><button type="button" className="btn btn-link card-link" id="wifiNotWorking">Wi-Fi not working</button></li>
                <li><button type="button" className="btn btn-link card-link" id="serviceDeskLocation">Service Desk location</button></li>
              </ul>
              <Link to="/ask-more" className="mt-3 ask-more-link" id="askMoreIT">Ask More</Link>
            </div>
          </div>
        </div>

        {/* OISS Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">OISS</h5>
              <ul className="list-unstyled quick-qa">
                <li><button type="button" className="btn btn-link card-link" id="extendF1">Extend F-1 visa</button></li>
                <li><button type="button" className="btn btn-link card-link" id="optApplication">OPT application steps</button></li>
                <li><button type="button" className="btn btn-link card-link" id="pickupI20">Pick up I-20</button></li>
              </ul>
              <Link to="/ask-more" className="mt-3 ask-more-link" id="askMoreOISS">Ask More</Link>
            </div>
          </div>
        </div>

        {/* Libraries Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">Libraries</h5>
              <ul className="list-unstyled quick-qa">
                <li><button type="button" className="btn btn-link card-link" id="openingHours">Opening hours</button></li>
                <li><button type="button" className="btn btn-link card-link" id="bookStudyRoom">Book a study room</button></li>
                <li><button type="button" className="btn btn-link card-link" id="subjectLibrarian">Subject librarian</button></li>
              </ul>
              <Link to="/ask-more" className="mt-3 ask-more-link" id="askMoreLibraries">Ask More</Link>
            </div>
          </div>
        </div>

        {/* Health Services Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">Health Services</h5>
              <ul className="list-unstyled quick-qa">
                <li><button type="button" className="btn btn-link card-link" id="scheduleAppointment">Schedule appointment</button></li>
                <li><button type="button" className="btn btn-link card-link" id="patientPortal">Patient portal</button></li>
                <li><button type="button" className="btn btn-link card-link" id="immunizationRequirements">Immunization requirements</button></li>
              </ul>
              <Link to="/ask-more" className="mt-3 ask-more-link" id="askMoreHealth">Ask More</Link>
            </div>
          </div>
        </div>

        {/* Campus Life Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">Campus Life</h5>
              <ul className="list-unstyled quick-qa">
                <li><button type="button" className="btn btn-link card-link" id="diningHours">Dining hours</button></li>
                <li><button type="button" className="btn btn-link card-link" id="studentOrganizations">Student organizations</button></li>
                <li><button type="button" className="btn btn-link card-link" id="campusMap">Campus map</button></li>
              </ul>
              <Link to="/ask-more" className="mt-3 ask-more-link" id="askMoreCampusLife">Ask More</Link>
            </div>
          </div>
        </div>

        {/* Housing Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">Housing</h5>
              <ul className="list-unstyled quick-qa">
                <li><button type="button" className="btn btn-link card-link" id="onCampusHousing">On-campus housing options</button></li>
                <li><button type="button" className="btn btn-link card-link" id="offCampusHousing">Off-campus housing resources</button></li>
                <li><button type="button" className="btn btn-link card-link" id="housingApplication">Housing application</button></li>
              </ul>
              <Link to="/ask-more" className="mt-3 ask-more-link" id="askMoreHousing">Ask More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
