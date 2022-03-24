import Layout from '@@components/Layout'
import {CardSet, Section, Container, Row, Col, Spacer, Headline, Button, Pill, HeadlineAndText, Separator, ImageAndText, Claim, WorkshopTeaser} from '@@yum'
import Link from 'next/link';
import CallToAction1 from '../themes/yum/components/content/CallToAction1';

export default function index(props) {
  return (
    <Layout global={props.global}>

      <Spacer height="120"></Spacer>

      <Container style={{textAlign: 'center'}}>
        <Headline type="h1" meta="Design System">Yum Theme</Headline>
      </Container>

      <Container>
        <div>
          <Link href={'/theme'}>Theme</Link>
        </div>
        <div>
          <Link href={'/layout'}>Layout</Link>
        </div>
        <div>
          <Link href={'/navigation'}>Navigation</Link>
        </div>
        <div>
          <Link href={'/components'}>Components</Link>
        </div>
      </Container>

    </Layout>
  )
}



////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////
