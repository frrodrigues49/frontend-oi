import React from "react";
import { HeaderLayout } from "./styles";

function Header() {
  return (
    <HeaderLayout>
      <div>
        <svg viewBox="0 0 42 44">
          <defs>
            <linearGradient
              id="oilogo-linearGradient-85"
              x1="19.259%"
              x2="86.498%"
              y1="12.379%"
              y2="81.618%"
            >
              <stop offset="0%" stop-color="#50B748"></stop>
              <stop offset="50%" stop-color="#50B748"></stop>
              <stop offset="56%" stop-color="#56B946"></stop>
              <stop offset="64%" stop-color="#66BE3F"></stop>
              <stop offset="73%" stop-color="#81C734"></stop>
              <stop offset="82%" stop-color="#A7D424"></stop>
              <stop offset="93%" stop-color="#D7E410"></stop>
              <stop offset="100%" stop-color="#FFF100"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="nonzero">
            <path
              fill="url(#oilogo-linearGradient-85)"
              d="M20.747 43.636c5.7 1.07 14.09.286 14.067-9.402-.036-15.56 11.787-17.918 5.178-27.304C31.99-4.432 5.075-1.84.789 14.837c-3.798 14.778 6.644 26.298 19.958 28.8z"
            ></path>
            <path
              fill="#FFF"
              d="M27.01 17.9c.776 0 1.475-.476 1.771-1.205a1.974 1.974 0 0 0-.417-2.125 1.895 1.895 0 0 0-2.09-.42 1.95 1.95 0 0 0-1.183 1.802c0 .517.203 1.013.563 1.378.36.365.847.57 1.356.57zm.028 1.443c-1.076.003-1.95 2.611-1.942 5.826.007 3.215.89 5.818 1.968 5.815 1.077-.004 1.945-2.61 1.936-5.824-.01-3.215-.884-5.819-1.962-5.817zm-8.706.014c-3.21.008-5.34 2.595-5.332 5.833.007 3.239 2.148 5.819 5.357 5.81 3.203-.007 5.329-2.592 5.322-5.834-.008-3.242-2.146-5.816-5.347-5.809zm.02 8.9c-1.473.003-2.291-1.532-2.294-3.092-.004-1.56.808-3.053 2.28-3.057 1.472-.003 2.284 1.488 2.287 3.047.003 1.558-.806 3.098-2.274 3.101z"
            ></path>
          </g>
        </svg>
        <span>Minha Oi</span>
      </div>
    </HeaderLayout>
  );
}

export default Header;
