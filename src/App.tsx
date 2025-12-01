import { Route, Routes } from 'react-router';
import PageWithoutSkipLink from './PageWithoutSkipLink';
import PageWithSkipLink from './PageWithSkipLink';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/without-skip" element={<PageWithoutSkipLink />} />
        <Route path="/with-skip" element={<PageWithSkipLink />} />
      </Routes>
    </>
  );
}

export default App;
