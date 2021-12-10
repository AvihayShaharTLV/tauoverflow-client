import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/solid'
import { BookmarkAltIcon, CalendarIcon, ChartBarIcon, CursorClickIcon, MenuIcon, PhoneIcon, PlayIcon, RefreshIcon, ShieldCheckIcon, SupportIcon, ViewGridIcon, XIcon, } from '@heroicons/react/outline'
import useDarkMode from '../../hooks/useDarkMode'
import LoginButton from '../../general-components/LoginButton'
import LogoutButton from '../../general-components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

const solutions = [
  {
    name: 'אנליטיקה',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'נסיון',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'אבטחה', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'אינטגרציה',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'אוטומציות',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'צפה בדמו', href: '#', icon: PlayIcon },
  { name: 'צור קשר', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'מרכז תמיכה',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'מדריך',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'אירועים',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'אבטחה', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {

  const { user } = useAuth0();
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  console.log(user);

  return (
    <Popover className="bg-white sticky top-0 z-10 dark:bg-black dark:text-white">
      <div className=" mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center border-b-2 dark:border-gray-600 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <span className="sr-only">תרשים זרימה</span>
            <a href="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="" />
            </a>

          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">פתח תפריט</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  dark:bg-black dark:hover:text-gray-400 dark:text-white'
                    )}
                  >
                    <span>פתרונות</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500 dark:hover:text-gray-400 dark:text-white'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div dir='rtl' className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative dark:bg-gray-900 grid gap-6 z-15 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-700 hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 ml-4 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4 ">
                                <p className="text-base font-medium dark:text-white text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 dark:bg-gray-700 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 flex justify-evenly">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 dark:text-white p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 mx-2 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>

                  <div className="w-10 flex justify-center">
                    {isDarkMode && <MoonIcon onClick={() => setIsDarkMode(false)} className='h-6 w-6 text-indigo-700 cursor-pointer' aria-hidden="true" />}
                    {!isDarkMode && <SunIcon onClick={() => setIsDarkMode(true)} className='h-6 w-6 text-yellow-500 cursor-pointer' aria-hidden="true" />}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div dir='rtl' className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 ml-4 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div dir='rtl' className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">פירסומים אחרונים</h3>
                            <ul className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                              {' '}
                              צפה בכל הפירסומים <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-center md:flex-1 lg:w-0 ">
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {!user && <LoginButton />}
              {user && <div className='flex items-center'>
                <LogoutButton />
                <a href="/profile">
                  <div className="ml-5">
                    <div className="flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="cursor-pointer h-full w-full text-gray-300 dark:bg-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className=" absolute   top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ">
          <div className="rounded-lg dark:bg-gray-900  shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 dark:text-white">
              <div className="flex items-center justify-between">
                <div>
                  <a href="/">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow" />
                  </a>

                </div>
                {isDarkMode && <MoonIcon onClick={() => setIsDarkMode(false)} className='h-6 w-6 text-indigo-700 cursor-pointer' aria-hidden="true" />}
                {!isDarkMode && <SunIcon onClick={() => setIsDarkMode(true)} className='h-6 w-6 text-yellow-500 cursor-pointer' aria-hidden="true" />}

                <div className="-mr-2">
                  <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only ">סגור תפריט</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

              </div>

              <div dir='rtl' className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center justify-center rounded-md dark:hover:bg-gray-700 hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 ml-4 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium dark:text-white text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div dir='rtl' className="py-6 px-5 text-center space-y-6 ">
              <div>
                {!user && <LoginButton />}
                {user && <LogoutButton />}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
export default Nav
