import React, { ReactNode } from 'react'

type Props = {
  tab: string
  children: ReactNode
  isActive?: boolean
  onClick: (tab: string) => void
}

const Tab = ({ tab, children, isActive, onClick }: Props) => {
  return (
    <li className="mr-2" onClick={() => onClick(tab)}>
      <a
        href="#"
        aria-current="page"
        className={
          isActive
            ? 'active inline-block rounded-t-lg bg-gray-100 py-4 px-4 text-center text-sm font-medium text-blue-600 dark:bg-gray-800 dark:text-blue-500'
            : 'inline-block rounded-t-lg py-4 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
        }
      >
        {children}
      </a>
    </li>
  )
}

export default Tab
