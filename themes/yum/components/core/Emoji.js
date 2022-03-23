import styled from 'styled-components'
import * as yum from '@@yum'

// Types as Escape Sequence
// Use Dec option > Code on https://apps.timwhitlock.info/unicode/inspect/hex/1F44B
const types = {
  wave: <>&#128075;</>,
  sunglasses: <>&#128526;</>,
  party: <>&#127881;</>,
  present: <>&#127873;</>,
  pointing: <>&#9757;</>,
  alarm: <>&#9200;</>,
  rocket: <>&#128640;</>,
  w00t: <>&#128588;</>,
  love: <>&#128525;</>,
  smile: <>&#128515;</>,
};

/**
 * Emoji
 * Omit type to render all available emoji types
 * @param {*} props 
 * @param {String} props.type Type (e.g. 'wave')
 * @param {String} props.size Optional size (e.g. '33px')
 */
export default function Emoji(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};
  return (
    <Component className={"Emoji "+className} style={style} props={props}>
      {types[props.type]}
      { 
        // If type is omitted show all available emojis
        (!props.type) && Object.getOwnPropertyNames(types).map(item => 
          <>{item}: {types[item]} </>
        )
      }
    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.span`
  font-size: ${props => props.props.size || 'inherit'};
`
