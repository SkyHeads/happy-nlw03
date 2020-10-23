import React from 'react';
import mapMarkerImg from '../../assets/images/map-marker.svg';
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from 'react-router-dom';

import './sidebar.css';

const Siderbar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
  );
}

export default Siderbar;