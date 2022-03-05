import './Answer.scss';

const Answer = ({ userName, userGender, userCountry }) => {
  {
    if (!userName || !userGender || !userCountry) {
      return null;
    }
  }
  return (
    <div className="answer">
      <p className="answer__gender">
        {userGender !== 'unavailable'
          ? `${userName} is ${userGender}.`
          : 'This name is unavailable.'}
      </p>
      <p className="answer__country">
        {userCountry !== 'unavailable'
          ? `${userName} lives in ${userCountry}.`
          : 'Country is unavailable.'}
      </p>
    </div>
  );
};

export default Answer;
