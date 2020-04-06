import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { dividerDots, dividerCenter, hat } from 'assets/images'
import {
  Divider,
  LeftDots,
  RightDots,
  Center,
  CardRow,
  H1,
  InfoItem,
  InfoList,
  InfoDescription,
  SystemInfo,
  SystemDescription
} from './Styles'
import { InfoCard } from 'components'

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <CardRow>
          <InfoCard
            title={'Pré-renovação'}
            subtitle={'Servidor contem os itens e mecânica pré-renovação. com classes 2-1 e 2-2 incluido Transclasses!'}
            icon={hat}
            color={'#9D9D9D'}
          />
          <InfoCard
            title={'Sistemas exclusivos'}
            subtitle={
              'Para melhorar sua jogabilidade fornecemos sistemas unicos como restock e arena dungeon, e muito mais!'
            }
            icon={hat}
            color={'#9D9D9D'}
          />
          <InfoCard
            title={'ROPS Gacha'}
            subtitle={
              'Para suavizar o efeito do desbalanceamento dos ROPS, implementamos um gacha onde os ROPS são adquiridos de forma aleatórea!'
            }
            icon={hat}
            color={'#9D9D9D'}
          />
          <InfoCard
            title={'Balanceamento e Equilibrio'}
            subtitle={'Classes como Assassin Cross balanceadas para manter uma boa experiência dentro do jogo!'}
            icon={hat}
            color={'#9D9D9D'}
          />
        </CardRow>
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

        <H1>Informações Gerais</H1>
        <InfoList>
          <Col>
            <InfoItem>Mecânica Full PvP</InfoItem>
            <InfoDescription>~ 1 clique nível máximo/InfoDescription</InfoDescription>
            <InfoDescription>~ Mercado negro com todos os itens (exceto itens ROPS)</InfoDescription>
            <InfoDescription>~ Consumíveis liberados</InfoDescription>
            <InfoDescription>~ Refine 0~10 disponíivel por comando @refine</InfoDescription>
            <InfoDescription>~ Premiação mensal de top PvP e PvP Baby</InfoDescription>
          </Col>

          <Col>
            <InfoItem>Datacenter Brasileiro</InfoItem>
            <InfoDescription>~ 0 Lag</InfoDescription>
            <InfoDescription>~ Uptime 99%</InfoDescription>
            <InfoDescription>~ Memória e processamênto escalável</InfoDescription>
            <InfoDescription>~ Backup diário</InfoDescription>
          </Col>

          <Col>
            <InfoItem>Sistemas Exclusivos</InfoItem>
            <InfoDescription>
              ~ Sistema de restock, recarregue seus itens de qualquer lugar utilizando um comando (o personage ficará
              impossibilidado de se mover ou atacar por 5s)
            </InfoDescription>
            <InfoDescription>~ Arena Dungeon: Morra e ressucite em 5 segundos pronto pra a luta</InfoDescription>
            <InfoDescription>~ Encantaento de equipamentos com status ou atributos aleatorios</InfoDescription>
          </Col>
        </InfoList>

        <H1>Sistemas</H1>
        <InfoList noGutters>
          <SystemInfo>Arena Dungeon</SystemInfo>
          <SystemDescription>
            Uma arena implementada no mapa Orcsdun com limite para 90 jogadores. Battle Royale sem precisar retornar à
            cidade, a cada vez que o jogador morre, é renascido e 5s co os buffs e todos os equipamentos consertados!
          </SystemDescription>
        </InfoList>
        <InfoList noGutters>
          <SystemInfo>Sistema de Encantamento</SystemInfo>
          <SystemDescription>
            Com um ticket de encantamento você pode encantar araduras e elmos, podendo adquirir entre diversos status ou
            atributos como dano ou resistência a humanóides, força, agilidade, destreza e muitos outros.
          </SystemDescription>
        </InfoList>
        <InfoList noGutters>
          <SystemInfo>Rops Gacha</SystemInfo>
          <SystemDescription>
            Para evitar que o jogador com mais dinheiro tenha mais vantagens no servidor, colocamos um sistema onde os
            ROPS dependem da sorte do usuário.
          </SystemDescription>
          <SystemDescription>
            Com 10 centavos você pode comprar um dos 3 ovos disponíveis na loja ROPS, cada ovo possui uma lista de
            equipamentos que podem ser adquiridos.
          </SystemDescription>
          <SystemDescription>
            <strong>Ovo da Páscoa:</strong> Tem uma pequena change de conceder ao usuário uma dentre diversas cartas MvP
            e Mini-Boss da loja ROPS.
          </SystemDescription>
          <SystemDescription>
            <strong>Ovo da Sorte:</strong> Tem uma pequena change de conceder ao usuário um dentre os elmos exclusivos
            para topo, meio ou baixo.
          </SystemDescription>
          <SystemDescription>
            <strong>Ovo da Donzela:</strong> Tem uma pequena change de conceder ao usuário um dentre os equipamentos
            disponíveis na loja ROPS.
          </SystemDescription>
        </InfoList>
        <InfoList noGutters>
          <SystemInfo>Comandos Disponíveis</SystemInfo>
          <SystemDescription>@refine: refina seus equipamentos de +0 a +10</SystemDescription>
          <SystemDescription>@restock: como ja informado restaura seus stuffs</SystemDescription>
          <SystemDescription>@homevolve: evolui seu hommúnculo</SystemDescription>
          <SystemDescription>@homlevel: aumenta o nivel do seu homúnculo</SystemDescription>
          <SystemDescription>@allskills: habilita todas as skills da sua classe</SystemDescription>
          <SystemDescription>e muito mais...</SystemDescription>
        </InfoList>
      </Container>
    </React.Fragment>
  )
}

export default () => <Home />
