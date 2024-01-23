import './styles.css'
import React, { useState } from 'react'
/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 
      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
       
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {
  const [currentDay, setCurrentDay] = useState(0) // mevcut gunun dizideki konumunu takip etmek icin
  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
    },
  ]
  //test butonuna basilinca bir sonraki gune gecemek icin bir fonksiyon yazalim
  //bu fonksiyon aslinda setCurrentDay() fonksiyonuyla CurrentDay guncelleyecek
  //
  const getNextDay = () => {
    setCurrentDay((prevDay) => (prevDay + 1) % weatherData.length)
  } //Bu fonksiyon, "Test" düğmesine tıklandığında mevcut günü bir sonraki güne güncellemek için kullanılır. Bu, günlerin döngüsel bir şekilde devam etmesini sağlar.
  //% weatherData.length ifadesi, günlerin döngüsel olarak devam etmesini sağlar. Yani, son güne geldiğinde bir sonraki günü tekrar birinci güne döndürür.
  const currentWeather = weatherData[currentDay] //currentWeather adlı bir değişken, mevcut günün hava durumu verisini temsil eder. Bu, UI'yı güncellemek için kullanılır.

  return (
    <div
      className={`app-container ${currentWeather.condition.toLowerCase()}-background`}
    >
      {/*Arka plan rengini ve emoji simgesini dinamik olarak ayarlamak için JSX içinde sınıfları ve içerikleri dinamik olarak değiştirdim
       currentWeather.condition: Bu, mevcut günün hava durumu şartını temsil eden bir özelliktir ('Güneşli', 'Yağmurlu', veya 'Karlı').
       -background: Her hava durumu şartı için bir arka plan sınıfı eklenir (örneğin, güneşli-background, yağmurlu-background, karlı-background).
       */}
      <div className="weather-container">
        <div className="icon">
          {currentWeather.condition === 'Güneşli'
            ? '☀️'
            : currentWeather.condition === 'Yağmurlu'
            ? '🌧️'
            : '❄️'}
          {/*Emoji simgesini dinamik olarak ayarlamak için koşullu bir ifade ekledik. */}
        </div>
        <div className="condition-text">{currentWeather.condition}</div>
        <div className="temp-range-container">
          <div className="low-temp-container">
            <p className="low-temp-data">{currentWeather.lowTemp}°</p>
            <p>En Düşük</p>
          </div>
          <div className="high-temp-container">
            <p className="high-temp-data">{currentWeather.highTemp}°</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className="day">{currentWeather.day}</div>
      </div>
      <button onClick={getNextDay}>Test</button>
    </div>
  )
}
