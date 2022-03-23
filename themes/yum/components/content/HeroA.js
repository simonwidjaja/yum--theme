import * as yum from '@@yum'
import styled from 'styled-components'

export default function HeroA(props) {
  let className = props.className ? props.className : '';
  className += (props.reversed) ? ' reversed' : '';
  let style = props.style ? props.style : {};

  return (
    <Component className={"HeroA "+className} style={style} props={props}>
      <yum.Row>
        <yum.Col>
          <yum.Separator />
          <yum.Headline>{props.title}</yum.Headline>
          {props.text}
        </yum.Col>
        <yum.Col>
          {props.content}
        </yum.Col>
      </yum.Row>

    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`

  // ${props => props.theme?.mq?.min('lg')} {
  // }  
`
