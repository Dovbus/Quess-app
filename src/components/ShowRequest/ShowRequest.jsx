import './ShowRequest.scss';

async function getGender(genderUrl, changeGender) {
  try {
    const genderResponse = await fetch(genderUrl);
    const result = await genderResponse.json();
    console.log(result);
    if (!result.gender) {
      changeGender('unavailable');
    } else {
      changeGender(result.gender);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getCountry(nationUrl, changeCountry) {
  try {
    const response = await fetch(nationUrl);
    const result = await response.json();
    const posibleCountry = result.country[0];
    const countryUrl = `https://api.worldbank.org/v2/country/${posibleCountry.country_id}?format=json`;
    const countryResponse = await fetch(countryUrl);
    const countryInformation = await countryResponse.json();
    const countryName = countryInformation[1][0].name;
    if (!countryName) {
      changeCountry('unavailable');
    } else {
      changeCountry(countryName);
    }
  } catch (error) {
    console.log(error);
  }
}

function ShowRequest({ name, changeGender, changeCountry }) {
  const genderUrl = `https://api.genderize.io?name=${name}`;
  const nationUrl = `https://api.nationalize.io?name=${name}`;
  async function getRequest() {
    await getGender(genderUrl, changeGender);
    await getCountry(nationUrl, changeCountry);
  }

  return (
    <input
      className="button"
      type="button"
      value="To find out"
      onClick={getRequest}
    />
  );
}

export default ShowRequest;
