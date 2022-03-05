import { useState } from 'react';
import QuessRequest from './components/QuessRequest/QuessRequest';
import ShowRequest from './components/ShowRequest/ShowRequest';
import Answer from './components/Answer/Answer';

import './App.scss';

function App() {
  const [name, changeName] = useState('');
  const [gender, discoverGender] = useState('');
  const [country, discoverCountry] = useState('');

  function onChange(value) {
    discoverGender('');
    discoverCountry('');
    changeName(value);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>
          What is your most likely gender? And what is your most likely country
          to live in? Please, enter your name and figure it out.
        </h1>
        <div className="quess">
          <QuessRequest initialValue={name} changeValue={onChange} />
          <ShowRequest
            name={name}
            changeGender={discoverGender}
            changeCountry={discoverCountry}
          />
        </div>
        <Answer userName={name} userGender={gender} userCountry={country} />
      </div>
    </div>
  );
}

export default App;
