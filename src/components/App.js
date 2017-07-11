import React from 'react';
import styles from './App.css';

import Upload from './Upload/uploadContainer';
import Image from './Image/imageContainer';
import Filter from './Filter/filterContainer';
import Download from './Download/downloadContainer';

const App = () => (
  <div className={styles.app}>
    <div className={styles.left}>
      <h2> Refresh Image </h2>
      <Upload />
      <Filter />
      <Download />
    </div>
    <div className={styles.right}> <Image /> </div>
  </div>
);

export default App;
