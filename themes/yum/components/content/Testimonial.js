import styled from 'styled-components'

export default function Testimonial({image, name, ...props}) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Testimonial "+className} style={style} image={image}>
      <div className="base">
        <div className="image"></div>
        <div className="text">
          {props.children}
          <div className="name">{name}</div>
        </div>
      </div>
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin: 60px 0;
  .base {
    display: flex;
    align-items: center;
    .image {
      min-width: 100px;
      min-height: 100px;
      background-image: url(${props => props.image});
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 50%;
    }
  
    .text {
      padding-left: 20px;
      // font-style: italic;
      .name {
        margin-top: 8px;
        // font-style: normal;
        font-weight: 600;
      }
    }
  }
`
