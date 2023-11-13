import './App.css';
import F from './Footer';
import H from './Header';
import M from './Main';
import N from './Nav';
import mataimg from './Asstes/Mario and Adrian A.jpg' ;
function App() {
  return (
<>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta property="og:title" content="Little Lemon Restaurant"/>
<meta name="description" content="little lemon restaurants web app"/>
<meta name="og:description" content="little lemon restaurants web app"/>
<meta name="og:image" content={mataimg}/>
<N/>

<F/>
</>
  );
}

export default App;
