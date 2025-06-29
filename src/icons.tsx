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

export const Save = (props: SVGAttributes<SVGElement>) => {
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
        d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M17 22V21C17 19.1144 17 18.1716 16.4142 17.5858C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 17.5858C7 18.1716 7 19.1144 7 21V22"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M7 8H13"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Music = (props: SVGAttributes<SVGElement>) => {
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
        d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M21 17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17C15 15.3431 16.3431 14 18 14C19.6569 14 21 15.3431 21 17Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path d="M9 19V8" stroke="currentColor" strokeWidth={sw} />
      <path d="M21 17V6" stroke="currentColor" strokeWidth={sw} />
      <path
        d="M15.7351 3.75564L11.7351 5.08897C10.4151 5.52898 9.75503 5.74899 9.37752 6.27276C9 6.79654 9 7.49226 9 8.8837V12.0007L21 8.00067V7.55037C21 5.01791 21 3.75168 20.1694 3.15303C19.3388 2.55439 18.1376 2.9548 15.7351 3.75564Z"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const RadialBlur = (props: SVGAttributes<SVGElement>) => {
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
        d="M3.33995 16.9997C6.10137 21.7826 12.2173 23.4214 17.0002 20.66C18.9498 19.5344 20.377 17.8514 21.1967 15.9286C22.388 13.1341 22.2963 9.83304 20.6605 6.99972C19.0246 4.1664 16.2117 2.43642 13.196 2.07088C11.1209 1.81935 8.94981 2.21386 7.00021 3.33946C2.21728 6.10089 0.578527 12.2168 3.33995 16.9997Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M15.5 14.25C15.5 14.9404 14.9404 15.5 14.25 15.5C13.5596 15.5 13 14.9404 13 14.25C13 13.5596 13.5596 13 14.25 13C14.9404 13 15.5 13.5596 15.5 14.25Z"
        stroke="currentColor"
      />
      <path
        d="M15.5 9.75C15.5 10.4404 14.9404 11 14.25 11C13.5596 11 13 10.4404 13 9.75C13 9.05964 13.5596 8.5 14.25 8.5C14.9404 8.5 15.5 9.05964 15.5 9.75Z"
        stroke="currentColor"
      />
      <path
        d="M11 14.25C11 14.9404 10.4404 15.5 9.75 15.5C9.05964 15.5 8.5 14.9404 8.5 14.25C8.5 13.5596 9.05964 13 9.75 13C10.4404 13 11 13.5596 11 14.25Z"
        stroke="currentColor"
      />
      <path
        d="M11 9.75C11 10.4404 10.4404 11 9.75 11C9.05964 11 8.5 10.4404 8.5 9.75C8.5 9.05964 9.05964 8.5 9.75 8.5C10.4404 8.5 11 9.05964 11 9.75Z"
        stroke="currentColor"
      />
      <path
        d="M15 18.25C15 18.6642 14.6642 19 14.25 19C13.8358 19 13.5 18.6642 13.5 18.25C13.5 17.8358 13.8358 17.5 14.25 17.5C14.6642 17.5 15 17.8358 15 18.25Z"
        fill="currentColor"
      />
      <path
        d="M10.5 18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25C9 17.8358 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.8358 10.5 18.25Z"
        fill="currentColor"
      />
      <path
        d="M15 18.25C15 18.6642 14.6642 19 14.25 19C13.8358 19 13.5 18.6642 13.5 18.25C13.5 17.8358 13.8358 17.5 14.25 17.5C14.6642 17.5 15 17.8358 15 18.25Z"
        fill="currentColor"
      />
      <path
        d="M15 5.75C15 6.16421 14.6642 6.5 14.25 6.5C13.8358 6.5 13.5 6.16421 13.5 5.75C13.5 5.33579 13.8358 5 14.25 5C14.6642 5 15 5.33579 15 5.75Z"
        fill="currentColor"
      />
      <path
        d="M10.5 18.25C10.5 18.6642 10.1642 19 9.75 19C9.33579 19 9 18.6642 9 18.25C9 17.8358 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.8358 10.5 18.25Z"
        fill="currentColor"
      />
      <path
        d="M10.5 5.75C10.5 6.16421 10.1642 6.5 9.75 6.5C9.33579 6.5 9 6.16421 9 5.75C9 5.33579 9.33579 5 9.75 5C10.1642 5 10.5 5.33579 10.5 5.75Z"
        fill="currentColor"
      />
      <path
        d="M18.25 9C18.6642 9 19 9.33579 19 9.75C19 10.1642 18.6642 10.5 18.25 10.5C17.8358 10.5 17.5 10.1642 17.5 9.75C17.5 9.33579 17.8358 9 18.25 9Z"
        fill="currentColor"
      />
      <path
        d="M5.75 9C6.16421 9 6.5 9.33579 6.5 9.75C6.5 10.1642 6.16421 10.5 5.75 10.5C5.33579 10.5 5 10.1642 5 9.75C5 9.33579 5.33579 9 5.75 9Z"
        fill="currentColor"
      />
      <path
        d="M18.25 13.5C18.6642 13.5 19 13.8358 19 14.25C19 14.6642 18.6642 15 18.25 15C17.8358 15 17.5 14.6642 17.5 14.25C17.5 13.8358 17.8358 13.5 18.25 13.5Z"
        fill="currentColor"
      />
      <path
        d="M5.75 13.5C6.16421 13.5 6.5 13.8358 6.5 14.25C6.5 14.6642 6.16421 15 5.75 15C5.33579 15 5 14.6642 5 14.25C5 13.8358 5.33579 13.5 5.75 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FX = (props: SVGAttributes<SVGElement>) => {
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
      <path
        d="M6 8V7.25C5.58579 7.25 5.25 7.58579 5.25 8H6ZM10 8.75C10.4142 8.75 10.75 8.41421 10.75 8C10.75 7.58579 10.4142 7.25 10 7.25V8.75ZM10 12.75C10.4142 12.75 10.75 12.4142 10.75 12C10.75 11.5858 10.4142 11.25 10 11.25V12.75ZM18.6 8.45C18.8485 8.11863 18.7814 7.64853 18.45 7.4C18.1186 7.15147 17.6485 7.21863 17.4 7.55L18.6 8.45ZM11.4 15.55C11.1515 15.8814 11.2186 16.3515 11.55 16.6C11.8814 16.8485 12.3515 16.7814 12.6 16.45L11.4 15.55ZM12.6 7.55C12.3515 7.21863 11.8814 7.15147 11.55 7.4C11.2186 7.64853 11.1515 8.11863 11.4 8.45L12.6 7.55ZM17.4 16.45C17.6485 16.7814 18.1186 16.8485 18.45 16.6C18.7814 16.3515 18.8485 15.8814 18.6 15.55L17.4 16.45ZM5.25 16C5.25 16.4142 5.58579 16.75 6 16.75C6.41421 16.75 6.75 16.4142 6.75 16H5.25ZM6 8V8.75H10V8V7.25H6V8ZM6 12V12.75H10V12V11.25H6V12ZM18 8L17.4 7.55L14.4 11.55L15 12L15.6 12.45L18.6 8.45L18 8ZM15 12L14.4 11.55L11.4 15.55L12 16L12.6 16.45L15.6 12.45L15 12ZM12 8L11.4 8.45L14.4 12.45L15 12L15.6 11.55L12.6 7.55L12 8ZM15 12L14.4 12.45L17.4 16.45L18 16L18.6 15.55L15.6 11.55L15 12ZM6 8H5.25V12H6H6.75V8H6ZM6 12H5.25V16H6H6.75V12H6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Tick = (props: SVGAttributes<SVGElement>) => {
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
        d="M1.24414 13.5366L7.39025 19.6827L22.7555 4.31738"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Copy = (props: SVGAttributes<SVGElement>) => {
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
        d="M16 17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9V17.1Z"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9V11.1C22 14.6 20.6 16 17.1 16H16"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9996 12.9C15.9996 9.4 14.5996 8 11.0996 8"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AudioSound = (props: SVGAttributes<SVGElement>) => {
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
        d="M1.53479 10.9704C1.60847 9.76158 1.64531 9.15716 1.95854 8.57581C2.24473 8.04466 2.7923 7.52944 3.33988 7.2761C3.93921 6.99881 4.62617 6.99881 6.00008 6.99881C6.51215 6.99881 6.76819 6.99881 7.0162 6.95693C7.26138 6.91553 7.50046 6.8438 7.72795 6.74341C7.95806 6.64185 8.17181 6.50091 8.59932 6.21904L8.81825 6.07469C11.3612 4.398 12.6327 3.55966 13.7001 3.92389C13.9047 3.99373 14.1028 4.09453 14.2797 4.21886C15.2024 4.86731 15.2725 6.37602 15.4127 9.39343C15.4646 10.5107 15.5 11.4669 15.5 11.9988C15.5 12.5307 15.4646 13.4869 15.4127 14.6042C15.2725 17.6216 15.2024 19.1303 14.2797 19.7788C14.1028 19.9031 13.9047 20.0039 13.7001 20.0737C12.6327 20.438 11.3612 19.5996 8.81825 17.9229L8.59932 17.7786C8.17181 17.4967 7.95806 17.3558 7.72795 17.2542C7.50046 17.1538 7.26138 17.0821 7.0162 17.0407C6.76819 16.9988 6.51215 16.9988 6.00008 16.9988C4.62617 16.9988 3.93921 16.9988 3.33988 16.7215C2.7923 16.4682 2.24473 15.953 1.95854 15.4218C1.64531 14.8405 1.60847 14.236 1.53479 13.0272C1.51299 12.6696 1.5 12.3212 1.5 11.9988C1.5 11.6764 1.51299 11.328 1.53479 10.9704Z"
        stroke="currentColor"
        strokeWidth={sw}
      />
      <path
        d="M20 6C20 6 21.5 7.8 21.5 12C21.5 16.2 20 18 20 18"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M18 9C18 9 18.5 9.9 18.5 12C18.5 14.1 18 15 18 15"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const AudioMuted = (props: SVGAttributes<SVGElement>) => {
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
        d="M16.6589 6C16.5186 5.20217 16.2887 4.68467 15.8669 4.37163C15.7026 4.24973 15.5186 4.15089 15.3286 4.08241C14.3375 3.72527 13.1569 4.54728 10.7955 6.1913L10.5922 6.33284C10.1953 6.60922 9.99677 6.74741 9.78309 6.84699C9.57186 6.94543 9.34985 7.01576 9.12219 7.05635C8.89189 7.09742 8.65414 7.09742 8.17865 7.09742C6.90287 7.09742 6.26498 7.09742 5.70846 7.3693C5.19999 7.61771 4.69153 8.12289 4.42579 8.64369C4.13493 9.21371 4.10072 9.80635 4.0323 10.9916C4.01206 11.3423 4 11.6839 4 12C4 12.3161 4.01206 12.6577 4.0323 13.0084C4.10072 14.1936 4.13493 14.7863 4.42579 15.3563C4.69153 15.8771 5.19999 16.3823 5.70846 16.6307C6.26498 16.9026 6.90287 16.9026 8.17865 16.9026C8.65414 16.9026 8.89189 16.9026 9.12219 16.9436C9.34985 16.9842 9.57186 17.0546 9.78309 17.153C9.99677 17.2526 10.1953 17.3908 10.5922 17.6672L10.7955 17.8087C13.1569 19.4527 14.3375 20.2747 15.3286 19.9176C15.5186 19.8491 15.7026 19.7503 15.8669 19.6284C16.2887 19.3153 16.5186 18.7978 16.6589 18"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M20 9.00002L14 15M14 9L19.9999 15"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
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
