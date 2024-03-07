// Gridview.js
import React from 'react';
import gridStyles from './Gridview.module.css';

function Gridview() {
  // Sample data for the grid items
  const gridItems = [
    { icon: '/art.png', text: 'Templates' },
    { icon: '/box.png', text: 'Layout' },
    { icon: '/gola.png', text: 'Colurs' },
    { icon: '/idcard.png', text: 'Assets' },
    { icon: '/image.png', text: 'Background' },
    { icon: '/listview.png', text: 'Shapes' },
    { icon: '/bagbox.png', text: 'Images' },
    { icon: '/art.png', text: 'Icons' },
  ];

  return (
    <div className={gridStyles.mainGridview}>
      <div className={gridStyles.searchBar}>
        <input type="text" placeholder="Search" />
        <img src="/search.png" alt="Search Icon" />
      </div>

      {gridItems.map((item, index) => (
        <div className={gridStyles.gridItem} key={index}>
          <img src={item.icon} alt={`Icon ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}

      <div className={gridStyles.additionalContent}>
        <div className={gridStyles.signatureTitle}>
          <p>Signature Title</p>
        </div>
        <div className={gridStyles.textArea}>
          <textarea placeholder="Enter text here"></textarea>
        </div>
        <div className={gridStyles.saveButton}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Gridview;
