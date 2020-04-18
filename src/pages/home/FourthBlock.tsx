import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles, Typography } from './Styles'
import { Fade } from 'react-awesome-reveal'
import CheckIcon from '@material-ui/icons/Check'
import { donateThumb } from 'assets/images'

const vipBenefs = [
  'Redução da taxa do mercado de 30% para 10%.',
  'Comandos exclusivos como @mobalive e @restock e outros.',
  'Itens em destaque no comércio.',
  'Buffs disponíveis na Curandeira.',
  'Obtenção de 1 Galho Sangrento e 1 Goma de mascar por dia.'
]

const Component = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.secondBlockRoot} direction={'column'} alignItems={'center'} justify={'center'}>
      <Grid
        container
        className={classes.outerTitle}
        style={{ marginBottom: 30 }}
        direction={'column'}
        justify={'center'}
      >
        <Grid item>
          <Fade triggerOnce delay={500}>
            <Typography variant={'h2'}>Doações</Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Fade direction={'top'} triggerOnce>
            <Typography variant={'caption'}>
              Como forma de evitar o famoso “pay to win” onde o jogador que doar mais para o servidor, obterá mais
              vantagens, colocamos um sistema de ROPS por Gacha.
            </Typography>
          </Fade>
        </Grid>
      </Grid>
      <Typography variant={'h3'} style={{ marginBottom: 30, textAlign: 'center' }}>
        O que você precisa saber!
      </Typography>
      <Grid item md={12} lg={10}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Fade triggerOnce direction={'left'}>
              <div className={classes.donationRule}>
                As doações não são reembolsáveis. Uma vez realizadas as doações serão processadas e os ROPS serão
                adicionados à conta do usuário. Caso haja algum problema com as doações ou pagamento, pode entrar em
                contato com a equipe pelo Suporte. Rops são adicionados em <strong>1</strong> a <strong>24</strong>{' '}
                horas para pagamentos com cartão e 1 a 3 dias em pagamento com boleto.
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade triggerOnce direction={'right'}>
              <div className={classes.donationRule}>
                As doações são uma forma de ajudar a manter o servidor online, os ROPS são uma forma de incentivar as
                doações dos usuário. <strong>Cada R$ 1,00 doado é equivalente a 10 ROPS.</strong>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade triggerOnce direction={'left'}>
              <div className={classes.donationRule}>
                Os itens disponíveis na loja rops podem ser alterados ou modificados sem aviso prévio.
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade triggerOnce direction={'right'}>
              <div className={classes.donationRule}>
                Usuários que tentem fraudar o sistema de doações estarão sujeitos a penalizações.
              </div>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify={'space-between'} style={{ marginTop: 50 }}>
        <Grid item lg={5} md={12} style={{ marginBottom: 30 }}>
          <Fade triggerOnce delay={500}>
            <Typography variant={'h3'}>Vantagens ROPS</Typography>
            <Typography variant={'body2'}>
              Todos os itens ROPS disponíveis no servidor estarão dentro de ovos que serão comercializados
              ocasionalmente, por exemplo, o Ovos disponíveis em um determinado mês podem não estar no outro, e assim os
              itens ROPS que podem ser obtidos dos mesmos. Cada ovo custa o equivalente a 1 ROPS. Os Itens obtidos são
              aleatórios. Junto com os ovos está disponível na loja ROPS o Ticket VIP (270 ROPS) que garantem ao usuário
              por 30 dias os benefícios abaixo.
            </Typography>
          </Fade>

          <ul className={classes.vipContainer}>
            <Fade triggerOnce cascade damping={0.2} delay={500}>
              {vipBenefs.map(item => {
                return (
                  <li className={classes.vipItem}>
                    {' '}
                    <span className={classes.vipIcon} style={{ marginRight: 15 }}>
                      <CheckIcon style={{ fontSize: 12 }} />
                    </span>
                    {item}
                  </li>
                )
              })}
            </Fade>
          </ul>
        </Grid>
        <Grid item lg={4} md={12}>
          <Typography variant={'h2'}>Faça sua doação!</Typography>
          <Typography variant={'subtitle2'}>Insira o valor que deseja doar!</Typography>
          <Typography variant={'caption'}>Funcionalidade temporariamente indisponível</Typography>
        </Grid>
        <img src={donateThumb} alt="Doação" className={classes.donateThumb} />
      </Grid>
    </Grid>
  )
}

export default Component
