import style from "./Form.module.css";
import validations from "../validations";
import { getCountries, postActivities } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector((state) => state.allCountries);

  const activities = useSelector(state => state.activities);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

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
      }, activities)
    );
    console.log(errors)
  };

  const handleCountrySearch = (event) => {
    const searchAct = event.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchAct)
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
    setActivityData((data) => ({
      ...data,
      countries: data.countries.filter((count) => count !== country),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivities(activityData));
    navigate("/home");
  }

  return (
    <div>
      {/* {console.log(activityData)} */}
    <form onSubmit={handleSubmit}  className={style.contForm}>

      <div>
        <h2 className={style.title}>CREATE ACTIVITY FOR YOUR COUNTRIES</h2>
        <p className={style.subTitle}>Fields with * are required</p>
      </div>

      <div>
        <label className={style.label}>Name: *</label>
        <input className={style.input} type="text" name="name" placeholder="Give the activity name" value={activityData.name} onChange={changeHandler}/>
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label className={style.label}>Difficulty: *</label>
        <select className={style.input} type="number" name="difficulty" value={activityData.difficulty} onChange={changeHandler}>
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
        <label className={style.label}>Duration In Hour: *</label>
        <input className={style.input} type="number" name="duration" value={activityData.duration} onChange={changeHandler}/>
        {errors.duration && <p>{errors.duration}</p>}
      </div>

      <div>
        <label className={style.label}>Season: *</label>
        <select className={style.input} name="season" value={activityData.season} onChange={changeHandler}>
          <option value="">Select season</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        {errors.season && <p>{errors.season}</p>}
      </div>

      <div>
        <label className={style.label}>Countries: *</label>
        <input className={style.input} type="text" name="countries" placeholder="Search countries" value={activityData.countrySearch} onChange={handleCountrySearch} />
        <div>
            {
              activityData.searchResults.map((country) => ( 
                <div key={country.name} onClick={() => handleAddCountry(country)}>
                  {country.name}
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
                <button type="button" onClick={handleRemoveCountry}>
                  X
                </button>
              </div>
            ))
          }
        </div>
       
      <div>
          {
            errors.name || errors.difficulty || errors.season || !activityData.countries.length  
          
            ?( <button disabled>COMPLETE ALL FIELDS FIRST</button>)
            :( <button>CREATE ACTIVITY</button> )
          }
        </div>

    </form>
    </div>

  )
}

export default Form;