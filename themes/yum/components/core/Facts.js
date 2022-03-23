import styled from 'styled-components'
import * as yum from '@@yum'

export default function Facts(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Facts margin-top-lg margin-bottom-lg"+className} style={style} props={props}>
      <yum.Row>
        {props.data.map((item, index) => 
          <yum.Col xs={6} md={3} key={'fact'+index}>
            <div className="item">
              <div className="primary">{item.primary}</div>
              <div className="secondary">{item.secondary}</div>
            </div>
          </yum.Col>
        )}
      </yum.Row>      
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  text-align: center;
  .item {
    border: 3px solid var(--gray-lightest);
    padding: 20px 0;
    .primary {
      ${props => props.theme?.mixin?.font('secondary', 'h1')} 
    }
    .secondary {
  
    }
  }

  // ${props => props.theme?.mq?.max('md')} {
  //   .col {
  //     width: 100%;
  //   }
  // }
`
