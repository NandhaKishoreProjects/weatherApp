import styles from "./weather-details.module.css";

export function WeatherDetails({ weatherData }) {

    const input = weatherData?.key ;
    const { humidity, pressure, temp_min,  temp_max } = weatherData.data?.main;
    const [year, month, day] =  input?.split('-');

    

    return (
      
           <div className={styles.gridContainer}>
            <div className={styles.item1}>Date: {day}/{month}/{year} </div>
            <div className={styles.item2}>Temparature</div>
            <div className={styles.item3}>
                <div className={styles.itemHalf}>
                    Min
                </div>
                <div className={styles.itemHalf}>
                    Max
                </div>
            </div>
            <div className={styles.item6}>
                <div className={styles.itemHalf}>
                    {temp_min}
                </div>
                <div className={styles.itemHalf}>
                {temp_max}
                </div>
            </div>
            <div className={styles.item4}>
                <div className={styles.itemHalf}>
                    Pressure
                </div>
                <div className={styles.itemHalf}>  {pressure} </div>
            </div>  
            <div className={styles.item5}>
                <div className={styles.itemHalf}>
                    Humidity
                </div>
                <div className={styles.itemHalf}>  {humidity} </div>
                </div>
            </div>
        
    )
}