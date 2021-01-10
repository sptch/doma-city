import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layers from './Layers'
import { Typography, Box } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import * as Atoms from './../Atoms'


export default ()=>{
  const [layers] = useRecoilState(Atoms.tileLayers)
  return (
    <Box
      style={{
        position:'absolute',
        display: 'block',
        top: 0,
        right:0,
        bottom: 0,
        minWidth:'350px', 
        width:'350px', 
        backgroundColor:'#eeeeee' ,
        opacity: 0.85,
        zIndex:2,
        boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
        textAlign: 'left',
        padding: '0.5rem',
        overflowY:'scroll'
      }} 
      className="Dashboard"
    >
      <Box style={{position: 'relative', height:'fit-content', width: '100%'}}>
        <Typography variant="h5" style={{paddingLeft: '1.5rem', paddingTop: '2.5rem'}}>
          Vancouver
        </Typography>
        {layers && <Layers />}
      </Box>
    </Box>
  );
}