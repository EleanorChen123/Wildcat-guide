import React, { useState } from 'react'; // Import useState hook

/**
 * QuestionMapView component displays the detailed "Question Map" page.
 * It features a left sidebar for categories and a main content area for questions.
 * This is a placeholder structure, actual content needs to be filled in.
 *
 * @returns {JSX.Element} The Question Map page layout.
 */
function QuestionMapView() {
  // State to manage the currently selected category
  const [selectedCategory, setSelectedCategory] = useState('IT Support'); // Default selected category

  // Mock data for questions based on category
  const questionsData = {
    'IT Support': [
      // Modified to include 'type' and 'url' for external link
      { id: 'resetNetID', text: 'Reset NetID password', type: 'external', url: 'https://services.northwestern.edu/TDClient/30/Portal/KB/ArticleDet?ID=1399' },
      { id: 'wifiNotWorking', text: 'Wi-Fi not working', type: 'internal' }, // Explicitly set type to internal
      { id: 'serviceDeskLocation', text: 'Service Desk location', type: 'internal' }, // Explicitly set type to internal
    ],
    'OISS': [
      { id: 'extendF1', text: 'Extend F-1 visa', type: 'internal' },
      { id: 'optApplication', text: 'OPT application steps', type: 'internal' },
      { id: 'pickupI20', text: 'Pick up I-20', type: 'internal' },
    ],
    'Libraries': [
      { id: 'openingHours', text: 'Opening hours', type: 'internal' },
      { id: 'bookStudyRoom', text: 'Book a study room', type: 'internal' },
      { id: 'subjectLibrarian', text: 'Subject librarian', type: 'internal' },
    ],
    'Health Services': [
      { id: 'scheduleAppointment', text: 'Schedule appointment', type: 'internal' },
      { id: 'patientPortal', text: 'Patient portal', type: 'internal' },
      { id: 'immunizationRequirements', text: 'Immunization requirements', type: 'internal' },
    ],
    'Campus Life': [
      { id: 'diningHours', text: 'Dining hours', type: 'internal' },
      { id: 'studentOrganizations', text: 'Student organizations', type: 'internal' },
      { id: 'campusMap', text: 'Campus map', type: 'internal' },
    ],
    'Housing': [
      { id: 'onCampusHousing', text: 'On-campus housing options', type: 'internal' },
      { id: 'offCampusHousing', text: 'Off-campus housing resources', type: 'internal' },
      { id: 'housingApplication', text: 'Housing application', type: 'internal' },
    ],
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container-fluid" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <h1 className="display-4 fw-bold mb-4 search-title text-purple text-center" style={{ marginTop: '2rem' }}>Question Map</h1>
      <div className="input-group mb-5 w-75 mx-auto" style={{ maxWidth: '600px' }}> {/* Centered search bar */}
          <input type="text" className="form-control" placeholder="Type your question" id="questionMapSearchInput" />
          <button className="btn btn-brand" type="button" id="questionMapSearchButton">Search</button>
      </div>

      <div className="row justify-content-center"> {/* Center the row */}
        {/* Left Sidebar for Categories */}
        <div className="col-md-3">
          <div className="card shadow-sm quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">Question Map</h5>
              <ul className="list-group list-group-flush">
                {Object.keys(questionsData).map((category) => (
                  <li
                    key={category}
                    className={`list-group-item bg-transparent ${selectedCategory === category ? 'active-category' : ''}`} // Corrected line
                    onClick={() => handleCategoryClick(category)} // Add onClick handler
                    style={{ cursor: 'pointer' }} // Indicate it's clickable
                  >
                    <button type="button" className="btn btn-link text-purple" style={{ textDecoration: 'none', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content Area for Specific Questions */}
        <div className="col-md-7"> {/* Adjusted column width for better layout */}
          <div className="card shadow-sm quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">{selectedCategory} Questions</h5>
              <ul className="list-unstyled quick-qa">
                {/* Updated rendering logic for each question item */}
                {questionsData[selectedCategory].map((q) => (
                  <li key={q.id}>
                    {/* Render based on type: external link or button for internal action */}
                    {q.type === 'external' ? (
                      <a
                        href={q.url} // Use the URL from the data
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {q.text}
                      </a>
                    ) : (
                      // If type is not external (i.e., 'internal' or undefined), render as button
                      // This ensures no href="#" issues, and prepares for future onClick handling.
                      <button type="button" className="btn btn-link card-link">
                        {q.text}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                {selectedCategory === 'IT Support' ? 'Click on a question above or select another category.' : 'Select a category from the left to see related questions.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionMapView;