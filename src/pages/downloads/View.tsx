import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { dividerDots, dividerCenter } from 'assets/images'
import { Divider, LeftDots, RightDots, Center, InfoItem, InfoList, InfoDescription, TopMessage, Link } from './Styles'

const Infos = () => {
  return (
    <React.Fragment>
      <Container>
        <TopMessage>
          Os arquivos abaixo são necessários para poder executar corretamente nosso servidor! Por favor, não altere ou
          sobrescreva os arquivos, caso contrário pode resultar em erros!
        </TopMessage>
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
        <br />
        <br />
        <InfoList>
          <Col>
            <InfoItem>Downlad BRO</InfoItem>
            <InfoDescription>
              O bRO é necessário para poder executar corretamente o servidor. Mantenha-o sempre atualizado!
            </InfoDescription>
            <InfoDescription>
              Ao baixar e atualizar, copie o arquivo data.grf para o diretório do servidor.
            </InfoDescription>
            <Link href={'http://download.playragnarokonlinebr.com/Ragnarok/Installer/Ragnarok.exe'}>Link Direto</Link> |{' '}
            <Link href={'http://download.playragnarokonlinebr.com/Ragnarok/Installer/Ragnarok.exe.torrent'}>
              Torrent
            </Link>
          </Col>

          <Col>
            <InfoItem>Download Client</InfoItem>
            <InfoDescription>
              O link abaixo contem todos os arquivos necessários para poder executar corretamente o servidor!
            </InfoDescription>
            <InfoDescription>Extraia-o para uma pasta limpa.</InfoDescription>
            <Link href={'https://mega.nz/file/4JRjSQjS#Q2BwB3vRSvOHWBhrTG6KR2pbjU_yZ3Qf2FzsHWt2--w'}>Mega</Link> |{' '} 
			<Link href={'http://www.mediafire.com/file/76xi00odebfg6kg/Play_-_PandaRO.rar/file'}>Mediafire</Link>
          </Col>
        </InfoList>
        <br />
        <br />
      </Container>
    </React.Fragment>
  )
}

export default () => <Infos />
