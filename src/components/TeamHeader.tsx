import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  AcademicCapIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  MapIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  HeartIcon,
  BriefcaseIcon,
  LightBulbIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const teams = [
  { name: 'Education', description: 'Educational initiatives and workshops', href: '/teams/education', icon: AcademicCapIcon },
  {
    name: 'Marketing and Communications',
    description: 'Promotion and public relations',
    href: '/teams/marketing-and-communications',
    icon: MegaphoneIcon,
  },
  {
    name: 'Treks',
    description: 'Organizing entrepreneurial journeys',
    href: '/teams/treks',
    icon: MapIcon,
  },
  { name: 'Careers', description: 'Career guidance and opportunities', href: '/teams/careers', icon: BriefcaseIcon },
  { name: 'External Relations', description: 'Building relationships with external entities', href: '/teams/external-relations', icon: UserGroupIcon },
  {
    name: 'Chief of Staff',
    description: 'Overseeing operations and strategy',
    href: '/teams/chief-of-staff',
    icon: LightBulbIcon,
  },
  {
    name: 'DEI',
    description: 'Promoting diversity, equity, and inclusion',
    href: '/teams/dei',
    icon: GlobeAltIcon,
  },
  {
    name: 'Finance',
    description: 'Managing finances and fundraising',
    href: '/teams/finance',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Social and Community',
    description: 'Organizing social events and building community',
    href: '/teams/social-and-community',
    icon: HeartIcon,
  },
  {
    name: 'Startup Week',
    description: 'Organizing a week-long startup event',
    href: '/teams/startup-week',
    icon: LightBulbIcon,
  },
]

export default function TeamHeader() {
  const [isShowing, setIsShowing] = useState(false)

  function conditionallyLeave(event){
    // get mouse position
    // if mouse is not in the popover, then leave
    var bounds = event.target.getBoundingClientRect();
    var middle = (bounds.left + bounds.right) / 2;
    var x = event.clientX - middle;
    var y = event.clientY - bounds.bottom;

    if (Math.abs(y) > 10) {
      setIsShowing(false);
    }
  }

  return (
    <Popover className="relative">
      <Popover.Button onMouseEnter={() => setIsShowing(true)} onMouseLeave={(event)=>conditionallyLeave(event)} className="inline-flex text-base leading-7 text-gray-900 hover:bg-gray-50 items-center lg:gap-x-1 lg:text-sm font-semibold lg:leading-6 lg:text-gray-900 ">
        <span>Our Team</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        show={isShowing}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-xl flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2 ">
              {teams.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#026cbf]" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 px-8 py-6">
              <div className="flex items-center gap-x-3">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Not sure?</h3>
                <p className="rounded-full bg-[#110f5b]/10 px-2.5 py-1.5 text-xs font-semibold text-[#026cbf]">We'd love to help.</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Reach out to us!
              </p>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
