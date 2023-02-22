import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Tab from '../components/Tab'
import TabContent from '../components/TabContent'

const tabs = ['New York', 'London', 'Berlin', 'Paris', 'Tokyo']

const IndexPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('New York')

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <Head>
        <title>Weather app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Header />
        <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <Tab key={tab} tab={tab} isActive={tab === activeTab} onClick={setActiveTab}>
              {tab}
            </Tab>
          ))}
        </ul>
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  )
}

export default IndexPage
