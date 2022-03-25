import Layout from '@@components/Layout'
import styled from 'styled-components'
import * as yum from '@@yum'

export default function index(props) {
  return (
    <Layout global={props.global}>
      <Component>

        <yum.Container className="mockup-bg">
          <img width="600" src="https://images.unsplash.com/photo-1575303093127-18b3c4ef8c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3814&q=80"/>
        </yum.Container>

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
  .mockup-bg {
    // margin-top: 88px;
  }
`
