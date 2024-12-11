'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronRightIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/products', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white mb-2">
      <nav aria-label="Global" className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8 mx-w-7xl h-[100px] gap-[10px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)]">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="./logo.svg" className="h-20 w-20" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Product
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xl rounded-2xl bg-white shadow-md ring-1 ring-gray-900/10 transition-transform duration-150">
              <div className="p-8">
                {/* Container for Products */}
                <div className="flex">
                  {/* Product Section */}
                  <div className="flex-1 pr-8 border-r border-gray-200">
                    <h2 className="text-gray-300 text-lg font-semibold mb-6">Product</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-gray-800 font-semibold text-base">Screen</h3>
                        <p className="text-gray-600 text-sm">Save time and accelerate your hiring.</p>
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-semibold text-base">Interview</h3>
                        <p className="text-gray-600 text-sm">Conduct stellar technical interviews.</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Section */}
                  <div className="flex-1 pl-8">
                    <h2 className="text-gray-300 text-lg font-semibold mb-6">Feature</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-gray-800 font-semibold text-base">Certified Assessment</h3>
                        <p className="text-gray-600 text-sm">
                          Launch standardized, role-based tests in minutes.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-semibold text-base">Real World Questions</h3>
                        <p className="text-gray-600 text-sm">
                          Assess technical hires with real-world coding questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>

          </Popover>
          <Link To="/solutions" className="text-sm font-semibold text-gray-900 flex items-center">
            Solutions
            <ChevronRightIcon className="ml-2 h-4 w-4 text-gray-400" aria-hidden="true" />
          </Link>
          <Link To="/pricing" className="text-sm font-semibold text-gray-900 flex items-center">
            Pricing
            <ChevronRightIcon className="ml-2 h-4 w-4 text-gray-400" aria-hidden="true" />
          </Link>
          <Link To="/resource" className="text-sm font-semibold text-gray-900 flex items-center">
            Resources
            <ChevronRightIcon className="ml-2 h-4 w-4 text-gray-400" aria-hidden="true" />
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4 items-center">
          <Link to="/login" className="text-sm font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
          <Link
            to="/signup"
            className="py-2 px-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Join Now
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm ring-1 ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link To="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link To="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Solutions</Link>
                <Link To="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Pricing</Link>
                <Link To="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Resources</Link>
              </div>
              <div className="py-6">
                <Link To="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
