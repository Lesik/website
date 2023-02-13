import { Disclosure, Transition } from "@headlessui/react"
import { FunctionComponent, ReactElement } from "react"
import { HiChevronRight } from "react-icons/hi2"
import { classNames } from "src/styling"

export const FlathubDisclosure: FunctionComponent<{
  buttonItems: ReactElement | ReactElement[]
  children: ReactElement | ReactElement[]
}> = ({ buttonItems, children }): ReactElement => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center gap-3 bg-flathubWhite dark:bg-flathubJet px-4 py-3">
            <HiChevronRight
              className={classNames(
                open ? "rotate-90 " : "",
                "h-6 w-6 transform text-flathubNickel dark:text-flathubDarkGray duration-150",
              )}
            />
            {buttonItems}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
