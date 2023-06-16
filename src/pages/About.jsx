import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card variant="outlined" sx={{ maxWidth: 400 }}>
        <Typography textAlign="center" level="h1">Vi-Da Guest Resort</Typography>
        <Typography textAlign="center" level="h2" fontSize="xl" sx={{ mb: 0.5 }} >
          4707, Sorsogon, Irosin, Monbon, Purok 1, +63-908-526-2192
        </Typography>
        <Typography textAlign="justify" level="body1">
          Lorem Lorem sinta
          Buko ng papaya
          Dala-dala'y buslo
          Sisidlan ng sinta
          Pagdating sa dulo'y
          Nabali ang sanga
          Kapos kapalaran
          Humanap ng iba
          Gumising ka Neneng
          Tayo'y manampalok
          Dalhin mo ang buslo
          Sisidlan ng hinog
          Pagdating sa dulo'y
          Lalamba-lambayog
          Kumapit ka Neneng
          Baka ka mahulog
          Ako'y ibigin mo
          Lalaking matapang
          Ang baril ko'y pito
          Ang sundang ko'y siyam
          Ang lalakarin ko'y
          Parte ng dinulang
          Isang pinggang pansit
          Ang aking kalaban
          Leron Leron sinta
          Buko ng papaya
          Dala-dala'y buslo
          Sisidlan ng sinta
          Pagdating sa dulo'y
          Nabali ang sanga
          Kapos kapalaran
          Humanap ng iba
          Gumising ka Neneng
          Tayo'y manampalok
          Dalhin mo ang buslo't
          Sisidlan ng hinog
          Pagdating sa dulo'y
          Lalamba-lambayog
          Kumapit ka Neneng
          Baka ka mahulog
        </Typography>
      </Card>
    </motion.div>
  );
};

export default About;
