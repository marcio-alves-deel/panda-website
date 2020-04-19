import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles, Typography, Button } from './Styles'
import { Fade } from 'react-awesome-reveal'
import { navigate } from '@reach/router'

const Component = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.thirdBlockRoot} direction={'column'} alignItems={'center'} justify={'center'}>
      <Grid container className={classes.outerTitle} direction={'column'}>
        <Grid item>
          <Fade triggerOnce delay={500}>
            <Typography variant={'h2'}>Downloads</Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Fade direction={'top'} triggerOnce>
            <Typography variant={'caption'}>
              Por favor, antes de tentar um suporte por mal funcionamento do jogo ou erro ao iniciar, certifique-se de
              que você está com a versão mais recente da data.grf e o patch do servidor.
            </Typography>
          </Fade>
        </Grid>
      </Grid>
      <Grid container spacing={10} justify={'space-between'}>
        <Grid item style={{ display: 'flex', flex: 1 }}>
          <Fade delay={200}>
            <div className={classes.downloadCard}>
              <div className={classes.downloadCardTitle}>bRO</div>
              <div className={classes.downloadCardDescription}>
                O bRO é necessário para poder executar corretamente o servidor. Mantenha-o sempre atualizado! Ao baixar
                e atualizar, copie o arquivo data.grf para o diretório do servidor.
              </div>
              <Grid container justify={'space-around'} style={{ marginTop: 20 }}>
                <Grid item>
                  <Button>Link Direto</Button>
                </Grid>
                <Grid item>
                  <Button>Torrent</Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Grid>
        <Grid item style={{ display: 'flex', flex: 1 }}>
          <Fade delay={500}>
            <div className={classes.downloadCard}>
              <div className={classes.downloadCardTitle}>Patch Panda RO</div>
              <div className={classes.downloadCardDescription}>
                O link abaixo contem todos os arquivos necessários para poder executar corretamente o servidor!
                Extraia-o para uma pasta limpa.
              </div>
              <Grid container justify={'space-around'} style={{ marginTop: 20 }}>
                <Grid item>
                  <Button
                    onClick={() =>
                      navigate('https://mega.nz/file/AI4BXCJC#nj1KiRXyRUG3JKRNJ1w9uyOVgW998oyfblLamdNO31c')
                    }
                  >
                    Mega
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => navigate('https://www.mediafire.com/file/0ol3s3nmrlv0q2r/PandaRO.rar/file')}>
                    Mediafire
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Component
