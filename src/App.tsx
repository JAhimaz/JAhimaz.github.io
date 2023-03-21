
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react'
import { Home } from './components';
import Loading from './components/Loading';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
