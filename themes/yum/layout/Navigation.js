import * as yum from '@@yum'
import styled from 'styled-components'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import DefaultTheme from '../theme/DefaultTheme'
import useResizeObserver from '../hooks/useResizeObserver';

/**
 * @param {*} props
 * @param {Array} props.config.primaryNavigation
 * @param {Object} props.config.primaryNavigation[].label Label
 * @param {String|Function} props.config.primaryNavigation[].href Href. Can be a URL or a function
 * @param {Array} props.config.primaryNavigation[].children Children
 * @param {String} props.config.primaryNavigation[].children[].icon Icon (e.g. eye|bulb|aim|rocket|download )
 * @param {String} props.config.primaryNavigation[].children[].label Label
 * @param {String} props.config.primaryNavigation[].children[].brief Brief description
 */
export default function Navigation(props) {
  const [open, set_open] = useState(false);
  
  const componentRef = React.createRef();
  const linksRef = React.createRef();
  const toggleRef = React.createRef();

  function toggle() {
    // linksRef.current.style.display = open ? 'none' : 'block';
    // Toggle Hamburger vs X
    const children = toggleRef.current.querySelectorAll('div');
    children[0].style.display = open ? 'block' : 'none';
    children[1].style.display = open ? 'none' : 'block';
    // Set class to indicate mobile-nav-open
    open ? linksRef.current.classList.remove('mobile-nav-open') : linksRef.current.classList.add('mobile-nav-open');

    set_open(!open);
  }

  useEffect(() => {
    function handleResize() {
      window.matchMedia(`(min-width: ${DefaultTheme.breakpoints.lg})`).matches
        ? componentRef.current.classList.remove('mobile')
        : componentRef.current.classList.add('mobile');
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  // const resizeObserver = useResizeObserver(({width, height}) => { console.log('open', open);  /*if (width > 1200 && open) toggle();*/ });

  return (
    <Component ref={componentRef} className="Navigation">
      <yum.Container>
        <div className="brand" onClick={()=>{window.open('/', '_self')}}>
          #BRAND <yum.Icon type="eye"/>
        </div>
        <div className="narrow-menu-trigger" ref={toggleRef} onClick={toggle}>
          <div className="active">☰</div>
          <div>✕</div>
        </div>
        <div className="separator"></div>
        <div className="links" ref={linksRef}>
          {
            props.config.primaryNavigation.map((item, index) => {
              return (
                <div className="link" key={`primary-navigation-item-${index}`}>
                  <div className="link-wrapper" onClick={typeof(item.href) == "function" ? item.href : null}>
                    <Link href={typeof(item.href) == "string" ? item.href : '#'}>{item.label}</Link>
                  </div>
                  { item.children &&
                    <div className="children">
                      <div className="title">{item.label}</div>
                      {
                        item.children.map((child, childIndex) => {
                          return (
                            <div className="child" key={`primary-navigation-item-child-${childIndex}`}>
                              <div className="icon">
                                <yum.Icon type={child.icon || 'default'} size="30px" color="var(--coal-lighter)" />
                              </div>
                              <div className="content">
                                <div className="child-link">
                                  <Link href={typeof(item.href) == "string" ? item.href : '#'}>{child.label}</Link><span className="arrow">⭢</span>
                                </div>
                                <div className="child-brief">
                                  {child.brief}
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </yum.Container>
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  box-shadow: 0px 25px 25px rgba(0,0,0,.03);

  .Container {
    height: 80px;
    position: relative;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;
    flex-wrap: wrap;
    
    ${props => props.theme?.mq?.min('lg')} {
      flex-direction: row;
      .narrow-menu-trigger {
        display: none;
      }
      .separator {
        display: none;
      }
      .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        padding-top: 26px;
        .link {
          padding-bottom: 10px;
          margin-bottom: 0;

          &:hover {
            .link-wrapper > a {
              border-bottom: 4px solid var(--purple);
            }
          }

          .children {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            width: 100%;
            max-width: 800px;
            min-height: 100px;
            background-color: white;
            border-radius: 12px;
            box-shadow: rgba(136, 165, 191, 0.48) 3px 2px 16px 0px, rgba(255, 255, 255, 0.8) -3px -2px 16px 0px;
            padding: 40px 40px 60px 40px;

            .title {
              display: block;
              margin-bottom: 20px;
              color: var(--coal-lighter);
              opacity: 0.7;
            }

            .child {
              display: flex;

              .icon {
                flex: 0 0 40px;
                margin-top: 4px;
              }
              .content {
                .child-link {
                  font-size: 18px;
                  font-weight: 600;
                  a {
                    border: none !important;
                    margin: 0;
                    padding: 0;
                  }
                  .arrow {
                    position: relative;
                    top: 1px;
                    left: 2px;
                    opacity: 0;
                    color: var(--coal-lighter);
                    transition: .3s;
                  }
                }
                .child-brief {
                  font-size: 14px;
                }
              }

              &:hover {
                .content {
                  .child-link {
                    a {
                      color: var(--purple) !important;
                    }
                    .arrow {
                      opacity: 1;
                      left: 8px;
                    }
                  }
                }
              }                 
            }
          }

          &:hover {
            .children {
              display: block;
            }
          }
        }
      }
    }
  }

  .separator {
    flex: 1 1 100%;
  }

  .brand {
    width: 120px;
    height: 50px;
    background-image: url(/images/brand.svg);
    cursor: pointer;
  }

  .links {
    display: none;
    align-items: center;

    &.mobile-nav-open {
      display: flex !important;
    }

    flex-direction: column;
    padding-top: 60px;

    .link {
      padding: 0 20px;

      a {
        color: var(--coal) !important;
        text-decoration: none;
        padding-bottom: 4px;
      }

      .children {
        .title {
          display: none;
        }
        .child {
          margin: 8px 0;
          cursor: pointer; 
          .content {
            .child-link {
              a {
                border: none !important;
                margin: 0;
                padding: 0;
              }              
            }
          }
          .child-brief {
            margin-top: -4px;
            color: var(--coal-lighter);
            font-size: 12px;
          }               
        }
      }      
    }
  }

  .narrow-menu-trigger {
    display: flex;
    align-items: center;
    font-size: 28px;
    user-select: none;
    padding-right: 20px;
    >div {
      display: none;
      cursor: pointer;
      &.active {
        display: block;
      }
    }
  }

  &.mobile {
    .Container {
      max-width: 100%;
    }
    .links {
      background-color: white;
      width: 100%;
      position: absolute;
      top: 50px;
      right: 0;
      left: 0;    
      box-shadow: rgba(136, 165, 191, 0.2) 3px 20px 16px 0px, rgba(255, 255, 255, 0.8) -3px -2px 16px 0px;
      padding-bottom: 80px;

      .link {
        width: 100%;
        margin: 4px 0;
      }

      .children {
        padding-bottom: 10px;
        .child {
          .icon {
            display: none;
          }
          .content {
            .child-link {
              font-size: 20px;
              line-height: 22px;
              .arrow {
                margin-left: 4px;
              }
            }
            .child-brief {
              margin-top: 3px;
              font-size: 14px;
              line-height: 16px;
            }
          }            
        }
      }
    }
  }

  &:not(.mobile) {
    
  }
`
