import React from 'react';
import styles from './App.css';

import Upload from './Upload/uploadContainer';
import Image from './Image/imageContainer';
import Filter from './Filter/filterContainer';
import Download from './Download/downloadContainer';

const App = () => (
  <div className={styles.app}>
    <h2> Refresh Image </h2>
    <Upload />
    <Image />
    <Download />
    <Filter />
  </div>
);

export default App;
