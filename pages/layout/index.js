import Layout from '@@components/Layout'
import styled from 'styled-components'
import * as yum from '@@yum'

export default function index(props) {
  return (
    <Layout global={props.global}>
      <Component>

        <yum.Container>
          <yum.Spacer height="100"/>
          <yum.Headline>WIP</yum.Headline>
        </yum.Container>

      </Component>
    </Layout>
  )
}




////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
`
