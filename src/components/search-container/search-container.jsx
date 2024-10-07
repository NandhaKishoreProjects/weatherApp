import { FadeLoader } from 'react-spinners';
import styles from './search-container.module.css';
import { WeatherHook } from '../../custom-hooks/WeatherHook';
import { useSelector } from 'react-redux';
import { WeatherDetails } from '../weather-details/weather-details';

export function SearchContainer() {
    const { setCity, queryLoading, errorText } = WeatherHook();
    const { weatherDetails } = useSelector(state => state.weatherSlicer);
    let temporaryCity = '';

    function onCityChange(e) {
        temporaryCity = e.target.value;
    }

    return (
    <>
    <div className={styles.searchContainer}>
            <div className={styles.title}>
                 <h1>Weather in your city</h1>
            </div>
       
        <div className={styles.searchBox}>
                <input onChange={ onCityChange } className={styles.searchTxt} type="text" name="searchCity" ></input>
                <button onClick={ () => setCity(temporaryCity)} className={styles.searchBtn}>
                        <div className={styles.iconClass}> ? </div>
                        &nbsp;
                        <span className={styles.searchText}>Search</span>   
                </button>

              
        </div>

    
       { queryLoading && <FadeLoader /> }
        </div>
        <div className={styles.detailReport}>
       { 
        weatherDetails?.map(function(item, i) {

            return <WeatherDetails weatherData = {item} key={i} />;
        }) 
        }
        { errorText && <div className={styles.errorText}> {errorText} </div> }
        </div>

        </>
        );
}