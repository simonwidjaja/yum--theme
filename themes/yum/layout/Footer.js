import styled from 'styled-components'

export default function Footer(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return (
    <Component className={"Footer "+className} style={style}>
      {props.children}
    </Component>
  )
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  
  ${props => props.theme?.mixin?.font};

  background-color: var(--coal);

  margin-top: 120px;
  padding: 60px 0 120px 0;
  background-color: ${props => props.theme?.colors?.black};
  color: ${props => props.theme?.colors?.white};
  font-size: 14px;
  a {
    color: ${props => props.theme?.colors?.white};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`