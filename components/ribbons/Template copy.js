import styled from 'styled-components'
import * as yum from '@@yum'

export default function PreNavigationRibbon(props) {
  return (
    <Component>
      <yum.Container>
        <div className="left">
          🎉 Kostenloses Webinar: "Interaktive Web Animationen" (#DATUM#)  
        </div>
        <div className="right">
          <button onClick={() => {location = '/trainings/big-picture'}}>ZUM EVENT</button>
        </div>
      </yum.Container>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  background-color: #00ceab;
  background: linear-gradient(to right,#82009e 0%,#5d34ae 50%,#00ceab 100%);

  .Container {
    display: flex;
    align-items: center;
    // justify-content: center;  
    padding: 6px 0;
    color: white;
    font-size: 14px;
  }
  .left {
    flex: 2 1 100%;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 20px;
    
    button {
      background-color: transparent;
      border: 1.6px solid white;;
      padding: 4px 18px;
      border-radius: 100px;
      color: white;
      white-space: nowrap;
    }
  }
`
