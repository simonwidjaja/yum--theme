import styled from 'styled-components'
import pkg from '../../../../package.json'

export default function Version(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Version "+className} style={style}>
      YUM VERSION: {pkg.version}
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  padding: 10px 30px;
  border: 2px solid #BADA55;
`
