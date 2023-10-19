import axios from "axios";
import validations from "../validations";
import { getCountries } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [errors, setErrors] = useState({});
  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
    countrySearch: "",
    searchResults: [],
  });

  const changeHandler = (event) => {
    setActivityData({
      ...activityData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validations({
        ...activityData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleCountrySearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchQuery)
    );
    setActivityData({
      ...activityData,
      countrySearch: event.target.value,
      searchResults: filteredCountries,
    });
  };

  const handleAddCountry = (country) => {
    if (!activityData.countries.includes(country.name)) {
      setActivityData((prevData) => ({
        ...prevData,
        countrySearch: "",
        searchResults: [],
        countries: [...prevData.countries, country.name],
      }));
    }
  };

  const handleRemoveCountry = (country) => {
    setActivityData((prevData) => ({
      ...prevData,
      countries: prevData.countries.filter((count) => count !== country),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = "http://localhost:3001/activities";
    try {
      const response = await axios.post(endpoint, activityData);
      console.log("Response from server:", response.data);
      alert("Activity created successfully!");
      navigate("/home");
    } catch (error) {
      // console.error(`Error creating activity:" ${error}`);
      if (error.response) {
        alert(`Error response from server: ${error.response.data.error}`);
      } else {
      alert("Error creating activity. Please try again.");
      }
    }
  };


  return (
    <div>
      {console.log(activityData)}
    <form onSubmit={handleSubmit}>

      <div>
        <h2>CREATE ACTIVITY FOR YOUR COUNTRIES</h2>
        <p>Fields with * are required</p>
      </div>

      <div>
        <label>Name: *</label>
        <input type="text" name="name" placeholder="Give the activity name" value={activityData.name} onChange={changeHandler}/>
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Difficulty: *</label>
        <select type="number" name="difficulty" value={activityData.difficulty} onChange={changeHandler}>
          <option value="">Select difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.difficulty && <p>{errors.difficulty}</p>}
      </div>

      <div>
        <label>Duration In Hour: *</label>
        <input type="number" name="duration" value={activityData.duration} onChange={changeHandler}/>
        {errors.duration && <p>{errors.duration}</p>}
      </div>

      <div>
        <label>Season: *</label>
        <select name="season" value={activityData.season} onChange={changeHandler}>
          <option value="">Select season</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        {errors.season && <p>{errors.season}</p>}
      </div>

      <div>
        <label>Countries: *</label>
        <input type="text" name="countries" placeholder="Search countries" value={activityData.countrySearch} onChange={handleCountrySearch} />
        <div>
            {
              activityData.searchResults.map((country) => ( 
                <div key={country.name} onClick={() => handleAddCountry(country)}>
                  {country.name}
                  {activityData.countries.includes(country.name) && (<span>Added</span>)}
                </div>
              ))
            }
          </div>
      </div>
      <div>
          {
            activityData.countries.map((country) => (
              <div key={country}>
                <span>{country}</span>
                <button type="button" onClick={() => handleRemoveCountry(country)}>
                  X
                </button>
              </div>
            ))
          }
        </div>
       
      <div>
          {
            activityData.name && activityData.difficulty && activityData.season && activityData.countries.length > 0 
            ? ( <button>CREATE ACTIVITY</button> )
            : ( <button disabled>COMPLETE ALL FIELDS FIRST</button>)
          }
        </div>

    </form>
    </div>

  )
}

export default Form;