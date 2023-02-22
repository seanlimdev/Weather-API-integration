import { motion } from 'framer-motion'
import { easing, weatherInfoVariant } from '../utils/framerProps'

type ForecastDay = {
  date: string
  day: {
    maxtemp_c: number
    mintemp_c: number
    maxwind_kph: number
    avghumidity: number
    condition: {
      text: string
      icon: string
    }
  }
}

type WeatherHistoryProps = {
  weatherData: {
    forecast: {
      forecastday: ForecastDay[]
    }
  }
}

const WeatherHistory = ({
  weatherData: {
    forecast: { forecastday },
  },
}: WeatherHistoryProps) => {
  return (
    <div className="flex-3 flex flex-col gap-y-8">
      <motion.div
        className="grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-3"
        variants={weatherInfoVariant}
        initial="hidden"
        animate="visible"
        exit={{
          opacity: 0,
          transition: {
            duration: 0.6,
            ease: easing,
          },
        }}
      >
        {forecastday.map((forecast, index) => {
          const {
            day: {
              maxtemp_c,
              mintemp_c,
              maxwind_kph,
              avghumidity,
              condition: { text, icon },
            },
            date,
          } = forecast

          return (
            <motion.div
              className="flex flex-col gap-y-8 rounded-md bg-white bg-opacity-5 px-6 py-6 shadow-lg md:px-8"
              variants={weatherInfoVariant}
              key={index}
            >
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs text-gray-300">Date</span>
                    <p className="tracking-wide text-white">{date}</p>
                  </div>
                  <img src={icon} alt="Weather icon" className=":w-12 h-12" />
                </div>

                <div>
                  <span className="text-xs text-gray-300">Min / Max</span>
                  <h1 className="text-2xl text-white">
                    {mintemp_c}°C / {maxtemp_c}°C
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <div>
                  <span className="text-xs text-gray-300">Condition</span>
                  <div className="flex items-center gap-x-2">
                    <p className="tracking-wide text-white">{text}</p>
                  </div>
                </div>

                <div className="grid-cols-2-custom grid gap-4">
                  <div>
                    <span className="text-xs text-gray-300">Max wind speed</span>
                    <p className="tracking-wide text-white">{maxwind_kph} km/h</p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-300">Ave. humidity</span>
                    <p className="tracking-wide text-white">{avghumidity}%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default WeatherHistory
