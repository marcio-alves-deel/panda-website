import React, { useState } from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { useStyles, Typography } from './Styles'
import Div100vh from 'react-div-100vh'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { infosThumb } from 'assets/images'
import { Fade } from 'react-awesome-reveal'

const initialServerInfo = [
  {
    title: 'Nível max. (base/classe):',
    value: '99/70'
  },
  {
    title: 'Taxa de equipamentos:',
    value: '30%'
  },
  {
    title: 'Taxa de cartas normais:',
    value: '5%'
  },
  {
    title: 'Taxa de cartas boxx/mini-boss:',
    value: '0.01%'
  },
  {
    title: 'Episódio encontro com o desconhecido'
  }
]

const outerInfo = [
  {
    title: 'Batalha Campal:',
    value: 'Rush, Conquest, TDM e KVM'
  },
  {
    title: 'Itens ROPS disponíveis por emblemas'
  },
  {
    title: 'Aliança entre clãs liberada'
  },
  {
    title: 'Túmulo MvP ativado:'
  },
  {
    title: 'Sistema de reflexão de dano corrigido'
  },
  {
    title: 'Pack Iniciante e Pack Guild'
  }
]

const Component = () => {
  const classes = useStyles()
  const [serverInfo] = useState(initialServerInfo)

  return (
    <Div100vh style={{ height: '100%' }} id={'infos'}>
      <Grid container className={classes.secondBlockRoot} direction={'column'} alignItems={'center'} justify={'center'}>
        <Grid container className={classes.outerTitle} direction={'column'}>
          <Grid item>
            <Fade triggerOnce delay={500}>
              <Typography variant={'h2'}>Informações</Typography>
            </Fade>
          </Grid>
          <Grid item>
            <Fade direction={'top'} triggerOnce>
              <Typography variant={'subtitle2'}>Saiba mais sobre o servidor</Typography>
            </Fade>
          </Grid>
          <Grid item>
            <Fade direction={'left'} triggerOnce delay={500}>
              <Typography variant={'caption'}>
                O Panda Ragnarok Online tenta trazer para os jogadores a essência do Ragnarok Online de épocas antigas e
                nostálgicas. A ideia é unir a parte antiga e boa do Ragnarok, com sistemas atuais e interativos. E assim
                proporcionar a nossos jogadores uma experiência única e inesquecível.
              </Typography>
            </Fade>
          </Grid>
        </Grid>
        <Grid container justify={'space-between'} style={{ marginBottom: 20 }}>
          <Grid item>
            <ul className={classes.infosLeft}>
              <Fade triggerOnce cascade damping={0.2}>
                {serverInfo.map(info => {
                  return (
                    <div className={'w-100 d-flex justify-contentstart'}>
                      <li className={classes.infosItem}>
                        <span className={classes.infosIcon} style={{ marginRight: 15 }}>
                          <ChevronRightIcon />
                        </span>
                        {info.title} <span className={classes.infoValue}>{info.value}</span>
                      </li>
                    </div>
                  )
                })}
              </Fade>
            </ul>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <ul className={classes.infosRight}>
                <Fade triggerOnce cascade damping={0.2}>
                  {outerInfo.map(info => {
                    return (
                      <div className={'w-100 d-flex justify-content-end'}>
                        <li className={classes.infosItem} style={{ textAlign: 'right' }}>
                          {info.title} <span className={classes.infoValue}>{info.value}</span>
                          <span className={classes.infosIcon} style={{ marginLeft: 15 }}>
                            <ChevronLeftIcon />
                          </span>
                        </li>
                      </div>
                    )
                  })}
                </Fade>
              </ul>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container spacing={4} justify={'space-between'}>
          <Grid item lg={4} sm={12} xs={12} className={classes.cardGrid}>
            <Fade direction={'right'} triggerOnce>
              <div className={classes.infoCard}>
                <div className={classes.infoCardTitle}>Batalha Campal</div>
                <div className={classes.infoCardDescription}>
                  A nossa batalha campal servirá como treino para a guerra do emperium, contendo uma série de stuffs
                  (apenas em área campal) e alguns itens ROPS. Possuímos 4 modalidades de batalh: Rush, Conquest, TDM e
                  KvM.
                </div>
              </div>
            </Fade>
          </Grid>

          <Grid item lg={4} sm={12} xs={12} className={classes.cardGrid}>
            <Fade direction={'right'} triggerOnce delay={200}>
              <div className={classes.infoCard}>
                <div className={classes.infoCardTitle}>Pintor de Equipamento</div>
                <div className={classes.infoCardDescription}>
                  Para trazer um pouco mais de customização para os personagens, adicionamos um sistema de pintura, onde
                  alguns itens podem ser customizado em diversas cores. Para isso será necessário uma tintura essencial,
                  disponível na loja ROPS ou através da batalha campal.
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item lg={4} sm={12} xs={12} className={classes.cardGrid}>
            <Fade direction={'right'} triggerOnce delay={400}>
              <div className={classes.infoCard}>
                <div className={classes.infoCardTitle}>Mercado Comum Online</div>
                <div className={classes.infoCardDescription}>
                  A ideia do mercado comum é eliminar um pouco da mecânica P2W (Pay to Win) existente no mundo dos
                  MMORPG. Todos os itens só poderão ser negociados através deste sistema. Cada item vendido será taxado
                  em 30% do valor (10% para jogadores VIP).
                </div>
              </div>
            </Fade>
          </Grid>
        </Grid>
        <img className={classes.floatingInfoThumb} src={infosThumb} alt="" />
      </Grid>
    </Div100vh>
  )
}

export default Component
