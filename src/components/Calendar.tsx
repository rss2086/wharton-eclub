import { Fragment } from 'react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks',
    description: "Non veniam elit magna occaecat irure deserunt cupidatat. Cupidatat et aliquip excepteur esse qui sint commodo ipsum laboris aute anim. Eu elit tempor voluptate sunt exercitation id veniam ut duis consectetur eu. Commodo duis et ut laboris ad exercitation."
  },
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks',
    description: "Non veniam elit magna occaecat irure deserunt cupidatat. Cupidatat et aliquip excepteur esse qui sint commodo ipsum laboris aute anim. Eu elit tempor voluptate sunt exercitation id veniam ut duis consectetur eu. Commodo duis et ut laboris ad exercitation."
  },
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks',
    description: "Non veniam elit magna occaecat irure deserunt cupidatat. Cupidatat et aliquip excepteur esse qui sint commodo ipsum laboris aute anim. Eu elit tempor voluptate sunt exercitation id veniam ut duis consectetur eu. Commodo duis et ut laboris ad exercitation."
  },
  // {
  //   id: 1,
  //   date: 'January 10th, 2022',
  //   time: '5:00 PM',
  //   datetime: '2022-01-10T17:00',
  //   name: 'Leslie Alexander',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   location: 'Starbucks',
  // },
  // {
  //   id: 1,
  //   date: 'January 10th, 2022',
  //   time: '5:00 PM',
  //   datetime: '2022-01-10T17:00',
  //   name: 'Leslie Alexander',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   location: 'Starbucks',
  // },
  // {
  //   id: 1,
  //   date: 'January 10th, 2022',
  //   time: '5:00 PM',
  //   datetime: '2022-01-10T17:00',
  //   name: 'Leslie Alexander',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   location: 'Starbucks',
  // },
  // More meetings...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32">
      <h1 className='text-4xl font-bold text-center'>Upcoming Events</h1>
      <div className="lg:grid lg:grid-cols-8 lg:gap-x-16">
        <ol className="mt-4 divide-y divide-gray-300 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
              <div className='flex-auto flex flex-row'>
                <div>
                  <h1 className='text-5xl font-bold text-left'>{new Date(meeting.datetime).getDate()}</h1>
                  <h4 className='text-md font-bold pl-1'>{new Date(meeting.datetime).toLocaleString('default', { month: 'long' })}</h4>
                </div>
                <div className="pl-10">
                  <h3 className="font-semibold text-gray-900">{meeting.name}</h3>
                  <p className="text-gray-500 mt-2  mb-4">{meeting.description}</p>
                  <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>
                        <time dateTime={meeting.datetime}>
                          {meeting.date} at {meeting.time}
                        </time>
                      </dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>{meeting.location}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
