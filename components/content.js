import Style from '../styles/stepper.module.css'
import { Grid } from '@mui/material';
import Image from 'next/image'


export const content = [
    {
      label: 'First',
      imgPath:
        <Grid container className={Style.containerImage}>

           <Grid item className={Style.item}>
               <Image
                           src="/img/1.jpeg"
                           alt="alt"
                           layout="fill"
                           objectFit="cover"
                         />
           </Grid>

           <Grid item className={Style.item}>
               <Image
                           src="/img/2.jpeg"
                           alt="alt"
                           layout="fill"
                           objectFit="cover"
                         />
           </Grid>

        </Grid>
    },


    {
        label: 'Second',
        imgPath:
          <Grid container className={Style.containerImage}>
  
             <Grid item className={Style.item}>
                 <Image
                             src="/img/3.jpeg"
                             alt="alt"
                             layout="fill"
                             objectFit="cover"
                           />
             </Grid>
  
             <Grid item className={Style.item}>
                 <Image
                             src="/img/4.jpeg"
                             alt="alt"
                             layout="fill"
                             objectFit="cover"
                           />
             </Grid>
  
          </Grid>
      },
  ];