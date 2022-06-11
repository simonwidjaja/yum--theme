import styled from 'styled-components'
import {MetaLabel, Separator} from '@@yum'

/**
 * Headline
 * @param {*} props 
 * @param {String} props.font Font 
 * @param {HTMLAttribute} props.separator Separator
 * @param {HTMLAttribute} props.center Center
 * @param {HTMLAttribute} props.inverted Inverted
 * @param {String|ReactElement} props.meta Meta
 * @param {String|ReactElement} props.title Title
 * @param {String|ReactElement} props.children Same as title
 * @param {String|ReactElement} props.sub Sub
 */
export default function Headline(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};    

  const font = props.font || 'font-h1';

  return (
    <Component className={"Headline "+className} style={style} props={props}>
      {props.separator && <Separator inverted={props.inverted} />}
      {props.meta && <MetaLabel>{props.meta}</MetaLabel> }
      <h1 className={`${font} margin-top-none margin-bottom-none`}>{props.title || props.children}</h1>
      {props.sub && <div className="sub font2-p">{props.sub}</div> }
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  margin-bottom: var(--xs);
  ${props => props.props.center && 'text-align: center;'}
  color: ${props => props.props.inverted ? 'var(--white)' : 'var(--coal)'};
`