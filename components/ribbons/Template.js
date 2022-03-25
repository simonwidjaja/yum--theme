import styled from 'styled-components'
import * as yum from '@@yum'

export default function PreNavigationRibbon(props) {
  return (
    <Component onClick={() => {location = '/trainings/big-picture'}}>
      <yum.Container>
        <div className="message">
          🎉 Kostenloses Webinar: "Interaktive Web Animationen" (#DATUM#)  
        </div>
        <button>ZUM EVENT</button>
      </yum.Container>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  // background-color: #00ceab;
  background: linear-gradient(to right,#82009e 0%,#5d34ae 50%,#00ceab 100%);
  // background-color: var(--coal);
  cursor: pointer;

  .Container {
    display: flex;
    // justify-content: space-between;
    // justify-content: flex-end;
    justify-content: center;

    padding: 6px 15px;
    color: white;
    font-size: 12px;
  }

  .message {
    margin-right: 12px;
  }

  button {
    background-color: transparent;
    border: 1.6px solid white;;
    padding: 0px 14px;
    // margin: 0 20px;
    border-radius: 100px;
    color: white;
    white-space: nowrap;
  }

  &:hover {
    button {
      background-color: white;
      color: black
    }
  }
`
