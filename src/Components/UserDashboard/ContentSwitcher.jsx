import React, { useState } from 'react';
import Details from './Details';
import Activities from './Activities';
import SimilarActivities from './SimilarActivities';

const ContentSwitcher = () => {
  const [activeTab, setActiveTab] = useState('DETAILS');

  const renderContent = () => {
    switch (activeTab) {
      case 'DETAILS':
        return <Details />;
      case 'ACTIVITIES':
        return <Activities />;
      case 'SIMILAR_ACTIVITIES':
        return <SimilarActivities />;
      default:
        return <Details />;
    }
  };

  return (
    <div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setActiveTab('DETAILS')}>DETAILS</button>
        <button style={styles.button} onClick={() => setActiveTab('ACTIVITIES')}>ACTIVITIES</button>
        <button style={styles.button} onClick={() => setActiveTab('SIMILAR_ACTIVITIES')}>SIMILAR ACTIVITIES</button>
      </div>
      <div style={styles.contentContainer}>
        {renderContent()}
      </div>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  contentContainer: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
};

export default ContentSwitcher;
