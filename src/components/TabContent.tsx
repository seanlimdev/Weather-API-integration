import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { formatDate, addDays } from '../services/formatDate'
import { useGetWeatherHistoryQuery } from '../services/weather'
import WeatherHistory from './WeatherHistory'

type Props = {
  activeTab: string
}

const TabContent = ({ activeTab }: Props) => {
  const [activeDate, setActiveDate] = useState<Date>(new Date())

  const { data, isLoading, error, isError } = useGetWeatherHistoryQuery({
    searchQuery: activeTab,
    start: formatDate(addDays(activeDate, -6)),
    end: formatDate(activeDate),
  })

  if (isError) {
    console.error(error)
  }

  if (isLoading) return <div className="py-4 text-white">Loading...</div>

  return (
    <div className="font-sub container mx-auto flex min-h-screen flex-col xl:flex-row">
      <div className="order-last flex basis-1/2 flex-col gap-y-8 p-6 md:p-10 lg:basis-3/4 xl:order-first xl:pl-0">
        {!error ? (
          <WeatherHistory weatherData={data} key={`${activeTab} ${activeDate}`} />
        ) : (
          <div className="text-rose-900	">Error Occured! Try select another date</div>
        )}
      </div>
      <div className="relative order-first flex basis-1/2 flex-col px-6 py-6 md:p-10 lg:basis-1/4 lg:py-10 lg:pr-10 xl:order-last xl:pl-0">
        <Calendar onChange={setActiveDate} value={activeDate} />
      </div>
    </div>
  )
}

export default TabContent
