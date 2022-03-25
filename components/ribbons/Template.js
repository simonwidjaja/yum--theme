import styled from 'styled-components'
import * as yum from '@@yum'

export default function PreNavigationRibbon(props) {
  return (
    <Component onClick={() => {location = '/trainings/big-picture'}}>
        <div className="message">
          🎉 Kostenloses Webinar: "Interaktive Web Animationen" (#DATUM#)  
        </div>
        <div>
          <button>ZUM EVENT</button>
        </div>
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

  display: flex;
  // justify-content: space-between;
  // justify-content: flex-end;
  justify-content: center;

  padding: 4px 15px;
  color: white;
  font-size: 12px;

  .message {
    display: flex;
    align-items: center;    
    margin-right: 12px;
  }

  button {
    background-color: transparent;
    border: 1.4px solid white;;
    padding: 1px 14px;
    height: auto;
    // margin: 0 20px;
    border-radius: 100px;
    color: white;
    white-space: nowrap;
    font-size: 10px;
  }

  &:hover {
    button {
      background-color: white;
      color: black
    }
  }
`
