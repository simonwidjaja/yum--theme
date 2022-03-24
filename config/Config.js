import Link from 'next/link'
// import PreNavigationRibbon from '@@components/PreNavigationRibbon'
import { getWorkshops } from '@@data/workshops'

export default {
  site: {
    title: 'yumtastic',
    description: 'Tools, Trainings and Tutorials for Rich Content Design and Interactive Web Animations',
    keywords: 'Adobe XD, Adobe Animate, Greensock, Design System, Animation, Interactive, Rich Content, Design, Animate',
    author: 'Simon Widjaja',
    brand: 
      <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: '4px', cursor: 'pointer'}} width="140" height="42" viewBox="0 0 190.203 49.978">
          <path d="M2254.371,1230.069c-1.628-1.7-2.181-5.01.457-8.238,2.658-3.216,7.921-6.157,15.644-8.746.557-1.211,1.311-2.88,2.128-4.811a32.781,32.781,0,0,1-2.781,3.2,6.934,6.934,0,0,1-3.106,1.827,4.757,4.757,0,0,1-3.809-1.264c-1.446-1.153-1.212-2.984,1.1-8.5,1.852-4.376,2.606-7.458,2.693-8.881.021-.679.308-1.056.876-1.147a6.525,6.525,0,0,1,2.489.163,3.535,3.535,0,0,1,2.383,1.5c.583.973.6,2.422.049,4.563-.278,1.114-.648,2.361-1.005,3.568-.271.912-.548,1.849-.78,2.713,2.208-2.083,4.513-5.5,7.025-10.419.981-1.933,1.238-2.393,1.9-2.5a11.143,11.143,0,0,1,2.459.329,2.923,2.923,0,0,1,2.2,1.183,2.328,2.328,0,0,1,.04,2.035c-1.138,3.378-3.276,8.674-5.743,14.238a13.5,13.5,0,0,0,3.435-1.369c.292-.1.574-.175.774-.021a.6.6,0,0,1,.181.535,2.805,2.805,0,0,1-.723,1.445,6.479,6.479,0,0,1-2.124,1.6,23.9,23.9,0,0,1-3.2,1.377c-5.042,10.294-11.1,16.483-17.077,17.428a6.015,6.015,0,0,1-1.065.094A6.092,6.092,0,0,1,2254.371,1230.069Zm5.191-6.832,0,0c-1.555,1.681-2.3,3.227-2.119,4.388,3.6-.629,7.072-3.9,10.588-9.985C2264.131,1219.443,2261.284,1221.324,2259.563,1223.237Zm68.625-10.653c0-6.2,4.929-11.289,4.929-13.409a.741.741,0,0,0-.848-.795c-.795,0-2.544.689-4.082,3.074-1.855,2.861-3.763,7.632-3.763,9.911,0,.795-.158,1.272-1.007,1.272-2.49,0-5.671-.636-5.671-2.544,0-3.018,3.552-9.274,3.552-10.918,0-.026,0-.051-.005-.077a.81.81,0,0,0-.895-.717c-.8,0-1.647.371-3.184,2.756-1.855,2.915-4.346,7.951-4.346,10.229,0,.795-.158,1.272-1.007,1.269-2.49,0-5.936-.636-5.936-2.544,0-3.816,4.823-11.448,4.823-15.688,0-.529.477-.9,1.484-.9,4.717,0,4.928,3.392,5.141,3.392.265,0,3.021-3.392,7.049-3.392,4.24,0,4.982,3.392,5.194,3.392s3.392-3.392,7.473-3.392c2.65,0,4.028,1.38,4.028,3.5,0,3.6-4.293,8.321-4.293,13.462,0,2.65,1.643,4.717,4.876,4.717a11.282,11.282,0,0,0,2.862-.583h.049a.611.611,0,0,1,.587.636c0,1.057-3.339,4.558-9.01,4.558C2331.789,1219.792,2328.188,1216.877,2328.188,1212.583Zm100.426.368c-4.664,0-7.155-2.491-7.155-6.412,0-6.1,7.526-13.038,14.468-13.038,4.188,0,6.043,1.749,6.043,4.081a3.115,3.115,0,0,1-1.583,2.768,1.917,1.917,0,0,1-2.19.24,2.707,2.707,0,0,1-.669-1.277c-.074-.31-.175-.706-.413-1.473a1.324,1.324,0,0,0-1.452-.947c-2.385,0-5.247,4.823-5.247,7.95,0,2.12,1.007,2.968,2.862,2.968,3.5,0,4.982-2.438,5.777-2.438a.919.919,0,0,1,.8.9l0,0c0,.954-3.755,6.676-11.238,6.675Zm-33.227-2.854c0-2.332,4.029-9.8,4.029-11.448l0-.005c-.53,0-1.59,0-1.592-.684a7.4,7.4,0,0,1,1.59-3.339,2.631,2.631,0,0,1,1.908-.53c1.381-3.391,2.6-6.359,2.6-7.684,0-.477.476-.849,1.483-.849,2.227,0,5.142,2.333,5.142,3.869,0,.743-.8,2.385-1.7,4.664a26.461,26.461,0,0,0,3.18-.211c.371,0,.53.211.53.583,0,1.961-1.272,4.24-5.565,4.24-1.379,2.862-4.665,10.653-4.665,12.667,0,.8-.211,1.273-1.059,1.273C2398.831,1212.642,2395.386,1212.006,2395.386,1210.1Zm-28.934-.429c-.636,0-3.339,2.968-8.162,2.968-2.7,0-4.4-1.8-4.4-4.77,0-6.889,7-14.363,15.635-14.363,4.558,0,7.844,2.651,7.844,3.869,0,1.007-4.134,5.724-4.134,12.243a12.064,12.064,0,0,0,.371,2.385c0,.372-.264.636-.794.636C2368.519,1212.637,2366.823,1209.668,2366.452,1209.668Zm-4.88-3.069a.809.809,0,0,0,0,.133.89.89,0,0,0,.954.821c2.808,0,7.208-8.639,7.208-9.8,0-.477-.212-.689-.636-.689C2365.868,1197.059,2361.575,1203.15,2361.572,1206.6Zm-21.039,3.493c0-2.332,4.029-9.8,4.029-11.448-.53,0-1.59,0-1.59-.688a7.411,7.411,0,0,1,1.59-3.339,2.622,2.622,0,0,1,1.908-.53c1.381-3.392,2.6-6.36,2.6-7.685,0-.477.477-.848,1.484-.848,2.226,0,5.141,2.332,5.141,3.869,0,.742-.8,2.385-1.7,4.664a26.632,26.632,0,0,0,3.18-.212c.372,0,.53.212.53.583,0,1.961-1.272,4.24-5.565,4.24-1.378,2.862-4.664,10.653-4.664,12.668,0,.795-.212,1.272-1.06,1.272C2343.979,1212.637,2340.534,1212,2340.534,1210.092Zm68.739,0c0-3.816,5.3-11.448,5.3-15.688,0-.529.477-.9,1.484-.9,3.18,0,5.141,2.385,5.141,3.869,0,3.074-4.98,9.964-4.982,13.991,0,.795-.158,1.272-1.007,1.272C2412.718,1212.636,2409.273,1212,2409.273,1210.091Zm-112.938-.424c-.586,0-3.448,2.968-7.9,2.968-2.491,0-4.452-1.431-4.452-4.187,0-3.816,4.293-9.806,4.293-14.045,0-.529.53-.9,1.537-.9,2.594,0,5.194,2.332,5.194,4.505,0,2.75-2.809,6.095-2.805,8.737,0,.635.317.954.9.954,3.074,0,6.731-8.319,6.731-13.3,0-.529.371-.9,1.113-.9,3.079,0,6.1,2.169,6.1,3.869,0,1.642-3.974,7.313-3.974,12.03a12.361,12.361,0,0,0,.371,2.6c0,.372-.27.636-.8.636C2298.349,1212.636,2296.707,1209.667,2296.335,1209.667Zm79.6-1.318c0-1.537,3.128-3.869,4.928-3.869.742,0,.954.318,1.06.742.371,1.8,1.59,3.074,2.756,3.074l.055,0a1.034,1.034,0,0,0,1.058-1.009c0-3.392-6.467-3.869-6.467-7.844,0-3.551,4.295-5.936,9.7-5.936,4.346,0,6.837,2.12,6.837,3.974l0,0c0,1.38-3.02,3.55-4.35,3.556-.583,0-.688-.318-.848-1.06-.265-1.112-.9-2.385-2.12-2.385a1.175,1.175,0,0,0-.136,0,1.125,1.125,0,0,0-1.083,1.169c0,2.7,6.148,3.55,6.148,7.579,0,3.654-3.075,6.254-9.275,6.254C2378.8,1212.589,2375.934,1209.78,2375.934,1208.349Zm41.764-20.039c0-2.756,2.071-5.3,4.661-5.3a2.832,2.832,0,0,1,.328-.008,3.1,3.1,0,0,1,3.01,3.189c0,2.7-2.062,5.247-4.5,5.247l-.123.006-.124,0A3.258,3.258,0,0,1,2417.7,1188.31Z" transform="translate(-2252.267 -1182.5)" fill="#282C31" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
        </svg>   
      </>
  },
  formSubmissionURL: 'https://hq.xdhero.com/xdhero/inquiry',
  hubspotTrackingURL: '//js-eu1.hs-scripts.com/##########.js', // e.g. '//js-eu1.hs-scripts.com/123456789.js' 
  // preNavigationRibbon: <PreNavigationRibbon />,
  preNavigationRibbon: <></>,
  primaryNavigation: [
    {
      label: 'Full Service',
      href: null,
      children: [
        {
          icon: 'video',
          label: 'Videos für Marketing und Kommunikation',
          brief: 'Effizient erklären, überzeugen und verkaufen',
        },
        {
          icon: 'code',
          label: 'Programmierung',
          brief: 'Web, App und Custom Solutions',
        },
      ]
    },
    {
      label: 'NEW ITEM',
      href: '/de/contact' 
    },
    {
      label: 'NEW ITEM',
      // href: () => { alert('nav item clicked') },
      children: [
        {
          label: 'Child 1',
        },
        {
          label: 'Child 2',
        },
      ]       
    },
    // {
    //   label: 'NEW ITEM',
    //   href: () => { alert('nav item clicked') } 
    // },
    // {
    //   label: 'Tools',
    //   icon: 'pi pi-fw pi-briefcase',
    //   items: [
    //     {
    //       template: (item, options) => {
    //         return (<div style={{minWidth: '400px'}}></div>)
    //       }
    //     },
        // {
        //   label: 'All Tool',
        //   icon: 'pi pi-fw pi-briefcase',
        //   command: () => { window.location = '/#' }          
        // },
        // {
        //   label: 'Hero for Adobe XD',
        //   icon: 'pi pi-fw pi-briefcase',
        //   command: () => { window.location = '/hero' }          
        // },
        // {
        //   label: 'Toolbelt for Adobe Animate',
        //   icon: 'pi pi-fw pi-briefcase',
        //   command: () => { window.location = '/toolbelt' }          
        // },

    //     {
    //       template: (item, options) => {
    //         return (
    //           <a href="/hero">
    //             <div className="yumtastic-product">
    //               <img src="/images/nav_hero.svg" />
    //             </div>
    //           </a>
    //         )
    //       }          
    //     },
    //     {
    //       template: (item, options) => {
    //         return (
    //           <a href="/toolbelt">
    //             <div className="yumtastic-product">
    //               <img src="/images/nav_toolbelt.svg" />
    //             </div>
    //           </a>
    //         )
    //       }          
    //     },
    //   ]
    // },
    // {
    //   label: 'Trainings',
    //   icon: 'pi pi-fw pi-compass',
    //   items: [
    //     {
    //       label: 'Coming soon...',
    //       icon: 'pi pi-fw pi-compass',
    //       command: () => {
    //         // window.location = '/#workshops'
    //       }          
    //     },
    //     {
    //       template: (item, options) => {
    //         return (<div style={{minWidth: '400px'}}></div>)
    //       }
    //     },
    //     // ...getWorkshops().map((item, index) => { return {
    //     //   label: item.title.title,
    //     //   icon: 'pi pi-fw pi-briefcase',
    //     //   command: () => {
    //     //     window.location = `/workshops/lac/${item.id}`
    //     //   }  
    //     // }}),
    //   ]
    // },
    // // {
    // //   label: 'Learning',
    // //   icon: 'pi pi-fw pi-compass',
    // //   items: [{
    // //       label: 'Coming soon...',
    // //       icon: 'pi pi-fw pi-align-left'
    // //     },

    // //   ]
    // // },
    // {
    //   label: 'Contact',
    //   icon: 'pi pi-fw pi-envelope',
    //   command: () => {
    //     window.location = '/contact'
    //   }      
    // },
    // {
    //   label: 'Hire Us',
    //   icon: 'pi pi-fw pi-user',
    //   command: () => {
    //     window.location = '/contact'
    //   }
    // },
  ]
}