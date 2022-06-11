//----------
// Import components in two different ways:
//
// (1) import { Container, Row, Col, Spacer, Button } from '@@yum'
// (2) import * as yum from '@@yum'
//----------

// Theme
import DefaultTheme from './theme/DefaultTheme';
// Layout
import Layout from './layout/Layout';
import Navigation from './layout/Navigation';
// Core
import Version from './components/core/Version'
import MetaLabel from './components/core/MetaLabel'
import Headline from './components/core/Headline'
import List from './components/core/List'
import Section from './components/core/Section'
import Container from './components/core/Container'
import Row from './components/core/Row'
import Col from './components/core/Col'
import Spacer from './components/core/Spacer'
import Text from './components/core/Text'
import Button from './components/core/Button'
import Separator from './components/core/Separator'
import Pill from './components/core/Pill'
import YouTube from './components/core/YouTube'
import Video from './components/core/Video'
import Placeholder from './components/core/Placeholder'
import Spinner from './components/core/Spinner'
import Card from './components/core/Card'
import CardSet from './components/core/CardSet'
import Emoji from './components/core/Emoji'
import Icon from './components/core/Icon'
import Facts from './components/core/Facts'
// Content
import CallToAction1 from './components/content/CallToAction1'
import CallToActionDuo from './components/content/CallToActionDuo'
import HeadlineAndText from './components/content/HeadlineAndText'
import ColorfulHeadlineAndText from './components/content/ColorfulHeadlineAndText'
import Claim from './components/content/Claim'
import ImageAndText from './components/content/ImageAndText'
import TextVideo from './components/content/TextVideo'
import PriceCard from './components/content/PriceCard'
import HeroA from './components/content/HeroA'
import Testimonial from './components/content/Testimonial'
// Forms
import FormGroup from './components/forms/FormGroup'
import FormLabel from './components/forms/FormLabel'
import FormControl from './components/forms/FormControl'
import FormSelect from './components/forms/FormSelect'
import HubspotForm from './components/forms/HubspotForm'
// Special
import WorkshopTeaser from './components/special/WorkshopTeaser'
import ReferenceTile from './components/special/ReferenceTile'
import InfinityHorizontalAnimation_A from './components/special/InfinityHorizontalAnimation_A';
// Internal
import XrayLabel from './components/internal/XrayLabel';
// WIP

export {
  Version,
  DefaultTheme,
  Layout,
  Navigation,

  Section,
  Container,
  Row,
  Col,
  Spacer,
  MetaLabel,
  Headline,
  Text,
  Button,
  Separator,
  Pill,
  YouTube,
  Video,
  Placeholder,
  Spinner,
  Card, CardSet,
  List,
  Emoji,
  Icon,
  Facts,

  HeadlineAndText,
  ColorfulHeadlineAndText,
  Claim,
  ImageAndText,
  TextVideo,
  PriceCard,
  CallToAction1,
  CallToActionDuo,
  HeroA,
  Testimonial,

  // Special
  WorkshopTeaser,
  ReferenceTile,
  InfinityHorizontalAnimation_A,
  
  // Forms
  FormGroup, FormLabel, FormControl, FormSelect, 
  HubspotForm,

  // Internal
  XrayLabel,

  // WIP
}