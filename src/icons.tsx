import type { SVGAttributes } from "react";

const sw = 1.3;
export const PalleteLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M7 19H5"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M13.3137 4.92912L11.1716 7.07121C10.5935 7.64927 10.3045 7.9383 10.1522 8.30585C10 8.67339 10 9.08214 10 9.89964L10 19.5565L18.9705 10.586C19.9606 9.59594 20.4556 9.10091 20.6411 8.53009C20.8042 8.02798 20.8042 7.48712 20.6411 6.98501C20.4556 6.41419 19.9606 5.91917 18.9705 4.92912C17.9805 3.93908 17.4855 3.44406 16.9146 3.25859C16.4125 3.09544 15.8717 3.09544 15.3695 3.25859C14.7987 3.44406 14.3037 3.93908 13.3137 4.92912Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M6 22L18 22C19.4001 22 20.1002 22 20.635 21.7275C21.1054 21.4878 21.4878 21.1054 21.7275 20.635C22 20.1002 22 19.4001 22 18C22 16.5999 22 15.8998 21.7275 15.365C21.4878 14.8946 21.1054 14.5122 20.635 14.2725C20.1002 14 19.4001 14 18 14L15.5 14"
        stroke="currentColor"
        strokeWidth={sw}
      />
    </svg>
  );
};
export const TextBoldLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M5 4.6087C5 3.16795 6.16795 2 7.6087 2H12C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12H5V4.6087Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M5 12H14C16.7614 12 19 14.2386 19 17C19 19.7614 16.7614 22 14 22H7.05882C5.92177 22 5 21.0782 5 19.9412V12Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
    </svg>
  );
};
export const TextItalicLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M3 22H15M9 2H21M9 22L15 2"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const TextUnderlineLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M4 21H20"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 3V9C4 13.4183 7.58172 17 12 17C16.4183 17 20 13.4183 20 9V3"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AltArrowDownLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M19 9L12 15L5 9"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const KeyboardLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z"
        fill="currentColor"
      />
      <path
        d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z"
        fill="currentColor"
      />
      <path
        d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z"
        fill="currentColor"
      />
      <path
        d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z"
        fill="currentColor"
      />
      <path
        d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
        fill="currentColor"
      />
      <path
        d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        fill="currentColor"
      />
      <path
        d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z"
        fill="currentColor"
      />
      <path
        d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z"
        fill="currentColor"
      />
      <path
        d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z"
        fill="currentColor"
      />
      <path
        d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"
        fill="currentColor"
      />
      <path
        d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M7 16H17"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ChecklistLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M3 6.75L4.32468 9L9 3"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17.75L4.32468 20L9 14"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 17H12"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M22 6H12"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};
export const NumberedListLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21 17.5H11"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M21 6.5H11"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M4 5.695L5.695 4V8.52"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.56555 19.4997H4L6.24486 16.9341C6.32909 16.7867 6.38346 16.6242 6.40487 16.4558C6.42628 16.2874 6.4143 16.1164 6.36964 15.9526C6.32497 15.7888 6.24848 15.6354 6.14453 15.5012C6.04058 15.367 5.91122 15.2546 5.76382 15.1703C5.61642 15.0861 5.45387 15.0317 5.28546 15.0103C5.11705 14.9889 4.94607 15.0009 4.78228 15.0456C4.6185 15.0902 4.46511 15.1667 4.33089 15.2707C4.19666 15.3746 4.08423 15.504 4 15.6514"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const BulletListLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21 17.5H11"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M21 6.5H11"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M7 6.5C7 7.32843 6.32843 8 5.5 8C4.67157 8 4 7.32843 4 6.5C4 5.67157 4.67157 5 5.5 5C6.32843 5 7 5.67157 7 6.5Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M7 17.5C7 18.3284 6.32843 19 5.5 19C4.67157 19 4 18.3284 4 17.5C4 16.6716 4.67157 16 5.5 16C6.32843 16 7 16.6716 7 17.5Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
    </svg>
  );
};

export const CodeLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M13.9868 5L12 12.4149L10.0132 19.8297"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SuperScriptLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M1.97949 6.05273L12.2803 18.9287M1.97949 18.9287L12.2803 6.05273"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5811 11.2027H17.4307L21.9373 6.05227C22.1064 5.75637 22.2155 5.43005 22.2585 5.09196C22.3015 4.75387 22.2774 4.41063 22.1878 4.08182C22.0981 3.75302 21.9445 3.4451 21.7359 3.17564C21.5272 2.90618 21.2675 2.68046 20.9716 2.51137C20.6757 2.34228 20.3493 2.23313 20.0112 2.19015C19.6732 2.14717 19.3299 2.17121 19.0011 2.26088C18.6723 2.35055 18.3644 2.50411 18.0949 2.71279C17.8255 2.92146 17.5998 3.18117 17.4307 3.47707"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const SubScriptLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M2 3L12 15.5M2 15.5L12 3"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19.2499H17L21.375 14.2499C21.5392 13.9627 21.6451 13.6459 21.6868 13.3177C21.7286 12.9894 21.7052 12.6562 21.6182 12.337C21.5311 12.0178 21.3821 11.7189 21.1795 11.4573C20.9769 11.1957 20.7248 10.9766 20.4375 10.8124C20.1502 10.6483 19.8334 10.5423 19.5052 10.5006C19.177 10.4589 18.8438 10.4822 18.5246 10.5692C18.2054 10.6563 17.9065 10.8054 17.6449 11.008C17.3833 11.2105 17.1642 11.4627 17 11.7499"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ThematicBreakLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M2 12H22"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const GridLinear = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path d="M8.5 2V22M15.5 2V22" stroke="currentColor" strokeWidth={sw} />
      <path
        d="M22 8.49951L2 8.49951M22 15.4995L2 15.4995"
        stroke="currentColor"
        strokeWidth={sw}
      />
    </svg>
  );
};
