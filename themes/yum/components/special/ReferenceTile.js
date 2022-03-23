import styled from 'styled-components'

export default function ReferenceTile(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"ReferenceTile "+className} style={style} props={props}>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  width: 106px;
  height: 106px;

  background-image: url(${props => props.props.src});
  background-size: cover;


  // ${props => props.theme?.mixin?.font('primary')} 
  // ${props => props.theme?.mixin?.fontSize('h1')}
  
  // ${props => props.theme?.mq?.min('sm')} {
  //  border-right: 10px solid blue;
  //}
`
