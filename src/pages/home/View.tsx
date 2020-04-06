import React from 'react'
import { Floating, SignIn, NewsNavigation } from 'components'
import { Row, Container, Col } from 'react-bootstrap'
import { gepard, hat, goal, dividerDots, dividerCenter } from 'assets/images'
import { Column, Divider, LeftDots, RightDots, Center, PlaceholderText } from './Styles'

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Row className={'justify-content-center'}>
          <Col xs={10}>
            <Row noGutters>
              <Column xs={6}>
                <Floating title={'Equipamentos balanceados'} icon={hat} color={'#FF84A6'} top={'100px'} left={'0%'} />
                <Floating title={'Nível Máximo 99/70'} icon={goal} color={'#CB2D43'} top={'100px'} left={'100%'} />
                <Floating title={'Segurança Gepard 3.0'} icon={gepard} color={'#04AB63'} left={'50%'} />
              </Column>
              <Col xs={6} className={'d-flex justify-content-end'}>
                <SignIn />
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider>
          <LeftDots>
            <img src={dividerDots} alt={''} />
          </LeftDots>
          <RightDots>
            <img src={dividerDots} alt={''} />
          </RightDots>
          <Center>
            <img src={dividerCenter} alt={''} />
          </Center>
        </Divider>
        <NewsNavigation />
        <PlaceholderText>
          O Website do PandaRO está em desenvolvimento, algumas funções estão desabilitadas durante nossa etapa Beta!
        </PlaceholderText>
      </Container>
    </React.Fragment>
  )
}

export default () => <Home />
