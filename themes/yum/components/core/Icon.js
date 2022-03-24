import styled from 'styled-components'
import * as yum from '@@yum'

// Types as Escape Sequence
// replace pattern to get rid of ids: id=".*?"
// replace pattern to get rid of names: data-name=".*?" 
// replace kebab case with camel case: strokeLinecap, strokeLinejoin, strokeWidth, strokeDasharray
const types = {
  default: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-315 -1610)">
        <g transform="translate(319.314 1613.854)">
          <circle cx="12" cy="12" r="12" transform="translate(-0.315 0.146)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M12,17.975l4.78-4.988L12,8" transform="translate(0.167 -1.066)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x2="9" transform="translate(7.685 11.624)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  cart: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-101 -1574)">
        <g transform="translate(104.524 1578)">
          <circle cx="1.263" cy="1.263" r="1.263" transform="translate(8.211 21.474)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <circle cx="1.263" cy="1.263" r="1.263" transform="translate(20.211 21.474)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M1,1H5.537l3.04,15.186a2.268,2.268,0,0,0,2.268,1.826H21.868a2.268,2.268,0,0,0,2.268-1.826l1.815-9.515H6.671" transform="translate(-1 -1)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  talk: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-106 -1722)">
        <g transform="translate(108.419 1726.254)">
          <path d="M11.628,17.369q-.529.044-1.057.044a10.8,10.8,0,0,1-4.8-1.131L.059,17.1l.866-5.741H.94A10.061,10.061,0,0,1,2.951,0" transform="translate(0 6.078)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
          <g transform="translate(10.732 9.132)">
            <path d="M.975,1.95A.975.975,0,1,1,1.95.975.975.975,0,0,1,.975,1.95Z" transform="translate(-0.152 0.197)" fill="none" stroke="#000" strokeWidth="2"/>
            <path d="M.975,1.95A.975.975,0,1,1,1.95.975.975.975,0,0,1,.975,1.95Z" transform="translate(4.848 0.197)" fill="none" stroke="#000" strokeWidth="2"/>
            <path d="M.975,1.95A.975.975,0,1,1,1.95.975.975.975,0,0,1,.975,1.95Z" transform="translate(9.848 0.197)" fill="none" stroke="#000" strokeWidth="2"/>
          </g>
          <path d="M21.069,20.246l-5.711-.822a10.621,10.621,0,0,1-3.333,1.028,9.6,9.6,0,0,1-1.468.1A10.407,10.407,0,0,1,0,10.277,10.013,10.013,0,0,1,3.069,3.054,10.558,10.558,0,0,1,10.571,0,10.407,10.407,0,0,1,21.127,10.277a10.184,10.184,0,0,1-.94,4.228H20.2Z" transform="translate(6.034 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
        </g>
      </g>
    </svg>
  </>,
  download: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-101 -1574)">
        <g transform="translate(104.839 1577.619)">
          <path d="M27.322,15v5.4a2.7,2.7,0,0,1-2.7,2.7H5.7A2.7,2.7,0,0,1,3,20.4V15" transform="translate(-3 1.273)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M7,10l6.756,6.756L20.512,10" transform="translate(-1.595 -0.483)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line y1="16.067" transform="translate(12.161 0.381)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  bulb: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-142 -1722)">
        <g transform="translate(149.03 1725.247)">
          <g transform="translate(0)">
            <path d="M.207,7.015a8.969,8.969,0,0,0,2.056,7.907A5.805,5.805,0,0,1,3.739,18.73v1.49a2.238,2.238,0,0,0,1.546,2.139,3.73,3.73,0,0,0,7.369,0A2.251,2.251,0,0,0,14.2,20.22V18.73a5.949,5.949,0,0,1,1.518-3.878A8.961,8.961,0,0,0,7.037.2,8.909,8.909,0,0,0,.207,7.015Z" transform="translate(0 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M0,0A4.738,4.738,0,0,1,4.733,4.719" transform="translate(8.955 4.255)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M0,0H8.514" transform="translate(4.705 21.283)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M0,0H9.984" transform="translate(4.012 17.019)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
          </g>
        </g>
      </g>
    </svg>
  </>,
  aim: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-216 -1574)">
        <g transform="translate(218.652 1576.652)">
          <circle cx="13" cy="13" r="13" transform="translate(0.348 0.348)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <circle cx="7" cy="7" r="7" transform="translate(6.348 6.348)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <circle cx="2" cy="2" r="2" transform="translate(11.348 11.348)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  rocket: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-178 -1722)">
        <g transform="translate(183.894 1725.247)">
          <g transform="translate(0 0)">
            <path d="M8.623.482a19.575,19.575,0,0,1,4.616,6.132,16.514,16.514,0,0,1,.772,1.957c.179.579.331,1.157.455,1.75.648,3.183-.069,6.476-1.075,9.508A14.42,14.42,0,0,1,12,23.425c-.041.055-.069.11-.1.152a1.958,1.958,0,0,1-1.571.785H4.379a1.958,1.958,0,0,1-1.571-.785.927.927,0,0,0-.1-.152,14.217,14.217,0,0,1-1.392-3.6C.328,16.8-.4,13.5.245,10.321.369,9.728.521,9.15.7,8.571a16.515,16.515,0,0,1,.772-1.957A19.744,19.744,0,0,1,6.088.482a1.907,1.907,0,0,1,2.535,0Z" transform="translate(2.758 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M0,7.785,2.467,9.6a1.323,1.323,0,0,0,1.254.179,1.543,1.543,0,0,0,.455-.3,1.3,1.3,0,0,0,.358-.661l.882-4.368A1.919,1.919,0,0,0,5,2.825L2.646.083A.175.175,0,0,0,2.659,0" transform="translate(14.757 15.64)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M2.81,0,.454,2.742A1.931,1.931,0,0,0,.041,4.368L.923,8.736a1.3,1.3,0,0,0,2.067.785L5.456,7.7" transform="translate(0 15.708)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M2.728,5.457A2.728,2.728,0,1,1,5.457,2.728,2.728,2.728,0,0,1,2.728,5.457Z" transform="translate(7.385 7)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
            <path d="M0,0H10.913" transform="translate(4.657 19.277)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokeDasharray="0 0"/>
          </g>
        </g>
      </g>
    </svg>
  </>,
  mail: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-243 -1574)">
        <g transform="translate(247.051 1580.44)">
          <path d="M4.39,4H23.509A2.4,2.4,0,0,1,25.9,6.39V20.729a2.4,2.4,0,0,1-2.39,2.39H4.39A2.4,2.4,0,0,1,2,20.729V6.39A2.4,2.4,0,0,1,4.39,4Z" transform="translate(-2 -4)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M25.9,6,13.95,14.365,2,6" transform="translate(-2 -3.61)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  bling: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-279 -1574)">
        <g transform="translate(283.001 1578)">
          <line y2="5" transform="translate(12 -0.001)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line y2="5" transform="translate(12 18.999)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x2="3.382" y2="3.382" transform="translate(3.476 3.642)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x2="3.382" y2="3.382" transform="translate(16.991 17.157)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x2="5" transform="translate(0 11.999)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x2="4" transform="translate(18.999 11.999)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line y1="3.382" x2="3.382" transform="translate(3.476 17.157)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line y1="3.382" x2="3.382" transform="translate(16.991 3.642)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  check: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-315 -1574)">
        <g transform="translate(319.648 1579.245)">
          <path d="M9,12.365l3.585,3.585L24.534,4" transform="translate(-1.831 -2.805)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M24.509,13.755v8.365a2.39,2.39,0,0,1-2.39,2.39H5.39A2.39,2.39,0,0,1,3,22.119V5.39A2.39,2.39,0,0,1,5.39,3H18.534" transform="translate(-3 -3)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  compass: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-315 -1646)">
        <g transform="translate(318.092 1648.735)">
          <circle cx="13" cy="13" r="13" transform="translate(-0.091 0.265)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M18.738,7.76l-2.744,7.9L7.76,18.3l2.744-7.9Z" transform="translate(-0.116 0.123)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  eye: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-171 -1614)">
        <g transform="translate(70 40)">
          <g transform="translate(103 1580)">
            <path d="M1,14S6.091,4,15,4,29,14,29,14,23.909,24,15,24,1,14,1,14Z" transform="translate(-1 -4)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <ellipse cx="3.898" cy="3.829" rx="3.898" ry="3.829" transform="translate(10.318 6.17)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </g>
        </g>
      </g>
    </svg>
  </>,
  present: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-171 -1614)">
        <g transform="translate(70 40)">
          <g transform="translate(105.093 1579)">
            <path d="M22.68,12V23.675H4V12" transform="translate(-1.593 -0.675)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <rect width="23.406" height="5.851" transform="translate(0.204 5.311)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <line y1="17.554" transform="translate(11.907 5.311)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <path d="M13.173,7.838H7.919A2.919,2.919,0,0,1,7.919,2C12.005,2,13.173,7.838,13.173,7.838Z" transform="translate(-1.426 -3)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <path d="M12,7.838h5.254a2.919,2.919,0,1,0,0-5.838C13.168,2,12,7.838,12,7.838Z" transform="translate(-0.253 -3)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </g>
        </g>
      </g>
    </svg>
  </>,
  smile: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-171 -1614)">
        <g transform="translate(70 40)">
          <g transform="translate(104.453 1577.544)">
            <ellipse cx="12.343" cy="12" rx="12.343" ry="12" transform="translate(0.204 0.456)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <path d="M8,14a6.649,6.649,0,0,0,4.925,2.463A6.649,6.649,0,0,0,17.851,14" transform="translate(-0.548 0.919)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <line x2="0.012" transform="translate(8.684 8.763)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <line x2="0.012" transform="translate(16.072 8.763)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </g>
        </g>
      </g>
    </svg>
  </>,
  people: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-279 -1610)">
        <g transform="translate(282.356 1615.15)">
          <path d="M20.119,22.17V19.78A4.78,4.78,0,0,0,15.339,15H5.78A4.78,4.78,0,0,0,1,19.78v2.39" transform="translate(-1 -0.643)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <circle cx="4.5" cy="4.5" r="4.5" transform="translate(5.088 0.291)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M23.585,22.144v-2.39A4.78,4.78,0,0,0,20,15.13" transform="translate(2.704 -0.618)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M16,3.13a4.78,4.78,0,0,1,0,9.261" transform="translate(1.924 -2.957)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  code: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-279 -1646)">
        <g transform="translate(283.051 1654.83)">
          <path d="M16,20.339l7.17-7.17L16,6" transform="translate(-1.27 -6)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M9.17,6,2,13.17l7.17,7.17" transform="translate(0 -6)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  pin: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-315 -1646)">
        <g transform="translate(320.245 1648.856)">
          <path d="M24.509,11.755c0,8.365-10.755,15.534-10.755,15.534S3,20.119,3,11.755a10.755,10.755,0,1,1,21.509,0Z" transform="translate(-3 -1)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <ellipse cx="3.353" cy="3.353" rx="3.353" ry="3.353" transform="translate(7.236 7.51)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  feather: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-315 -1646)">
        <g transform="translate(319.209 1650.404)">
          <path d="M23.211,14.238A7.174,7.174,0,0,0,13.066,4.093L5,12.159V22.316H15.157Z" transform="translate(-1.426 -1.992)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x1="17" y2="17" transform="translate(-0.306 6.191)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x1="10" transform="translate(8.694 15.191)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  video: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-101 -1574)">
        <g transform="translate(105.238 1578.292)">
          <circle cx="12" cy="12" r="12" transform="translate(-0.238 -0.292)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M10,8l7.183,4.789L10,17.577Z" transform="translate(-0.502 -0.914)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
  shopping: <>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g transform="translate(-101 -1574)">
        <g transform="translate(106.223 1578)">
          <path d="M6.6,2,3,6.8V23.6A2.4,2.4,0,0,0,5.4,26H22.2a2.4,2.4,0,0,0,2.4-2.4V6.8L21,2Z" transform="translate(-3.011 -2)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <line x2="21.384" transform="translate(-0.034 4.814)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          <path d="M17.6,10A4.8,4.8,0,1,1,8,10" transform="translate(-2.011 -0.4)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </g>
    </svg>
  </>,
};

/**
 * Icon
 * Omit type to render all available emoji types
 * @param {*} props 
 * @param {String} props.type Type (e.g. 'shopping')
 * @param {String} props.size Optional size (e.g. '33px')
 */
export default function Emoji(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Emoji "+className} style={style} props={props}>
      {types[props.type]}
      { 
        // If type is omitted show all available emojis
        (!props.type) && Object.getOwnPropertyNames(types).map((item, index) => 
          <div key={`icon-preview-${index}`}>{types[item]} {item}</div>
        )
      }
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.span`
  svg * {
    stroke: ${props => props.props.color || 'var(--coal)'};
  }
  svg {
    width: ${props => props.props.size || '30px'};
    height: ${props => props.props.size || '30px'};
  }
`