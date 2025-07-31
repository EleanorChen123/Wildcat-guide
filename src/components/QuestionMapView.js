import React, { useState } from 'react'; // Import useState hook

function QuestionMapView() {
  const [selectedCategory, setSelectedCategory] = useState('IT Support');
  const [searchInput, setSearchInput] = useState('');

  const questionsData = {
    'IT Support': [
      { id: 'resetNetID', text: 'Reset NetID password', type: 'external', url: 'https://services.northwestern.edu/TDClient/30/Portal/KB/ArticleDet?ID=1399' },
      { id: 'wifiNotWorking', text: 'Wi-Fi not working', type: 'internal' },
      { id: 'serviceDeskLocation', text: 'Service Desk location', type: 'internal' },
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleQuestionClick = async (questionText) => {
    const userEmail = 'test@example.com'; // 可改成 localStorage.getItem('email')
    try {
      const response = await fetch('http://localhost:5001/api/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, search_query: questionText }),
      });

      if (!response.ok) throw new Error('Failed to record history');
      console.log('✅ History recorded successfully');
    } catch (error) {
      console.error('❌ Failed to record history:', error);
    }
  };

  const handleSearchClick = async () => {
    const trimmed = searchInput.trim();
    if (!trimmed) return;
    const userEmail = 'test@example.com'; // 可改成 localStorage.getItem('email')

    try {
      const response = await fetch('http://localhost:5001/api/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, search_query: trimmed }),
      });

      if (!response.ok) throw new Error('Failed to record search history');
      console.log('✅ Search history recorded successfully');
    } catch (error) {
      console.error('❌ Failed to record search history:', error);
    }
  };

  return (
    <div className="container-fluid" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <h1 className="display-4 fw-bold mb-4 search-title text-purple text-center" style={{ marginTop: '2rem' }}>Question Map</h1>
      
      <div className="input-group mb-5 w-75 mx-auto" style={{ maxWidth: '600px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Type your question"
          id="questionMapSearchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="btn btn-brand"
          type="button"
          id="questionMapSearchButton"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card shadow-sm quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">Question Map</h5>
              <ul className="list-group list-group-flush">
                {Object.keys(questionsData).map((category) => (
                  <li
                    key={category}
                    className={`list-group-item bg-transparent ${selectedCategory === category ? 'active-category' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                    style={{ cursor: 'pointer' }}
                  >
                    <button
                      type="button"
                      className="btn btn-link text-purple"
                      style={{ textDecoration: 'none', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card shadow-sm quick-card">
            <div className="card-body">
              <h5 className="card-title text-purple">{selectedCategory} Questions</h5>
              <ul className="list-unstyled quick-qa">
                {questionsData[selectedCategory].map((q) => (
                  <li key={q.id}>
                    {q.type === 'external' ? (
                      <a
                        href={q.url}
                        className="card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleQuestionClick(q.text)}
                      >
                        {q.text}
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-link card-link"
                        onClick={() => handleQuestionClick(q.text)}
                      >
                        {q.text}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                {selectedCategory === 'IT Support'
                  ? 'Click on a question above or select another category.'
                  : 'Select a category from the left to see related questions.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionMapView;
