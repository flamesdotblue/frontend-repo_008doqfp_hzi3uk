import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 md:ml-0 ml-0 md:pl-0" style={{ marginLeft: 0 }}>
          <div className="md:ml-72">{/* Space for fixed sidebar on desktop */}
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
