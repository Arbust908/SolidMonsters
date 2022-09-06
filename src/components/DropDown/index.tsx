import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

interface DropDownProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

const DropDown: Component<Partial<DropDownProps>> = (props: Partial<DropDownProps>) => {
  const [opened, setOpened] = createSignal(false);
  const { label = 'Label', options = [], onChange = (value) => {} } = props;

  return (
    <div>
      <label id="listbox-label" class="block text-sm font-medium text-gray-700">
        {' '}
        {label}{' '}
      </label>
      <div class="relative mt-1">
        <button
          type="button"
          class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => setOpened(!opened())}
        >
          {/* Selected Option */}
          <span class="flex items-center">
            <span aria-label="Online" class="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400"></span>
            <span class="ml-3 block truncate">Tom Cook</span>
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        {/* Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0" */}
        {opened() && (
          <ul
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {/* Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900" */}
            {options &&
              options.map((opt) => (
                <li
                  class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                  onClick={() => onChange(opt)}
                >
                  <div class="flex items-center">
                    {/*Online: "bg-green-400", Not Online: "bg-gray-200" */}
                    <span
                      class="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400"
                      aria-hidden="true"
                    ></span>
                    {/*Selected: "font-semibold", Not Selected: "font-normal" */}
                    <span class="font-normal ml-3 block truncate">
                      {opt}
                      <span class="sr-only"> is online</span>
                    </span>
                  </div>

                  {/*
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        */}
                  <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    {/*Heroicon name: mini/check */}
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              ))}

            {/*More items... */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
