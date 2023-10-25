import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ color: 'white', fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface GAccordionProps {
  title: string;
  text: string;
  initiallyOpen: boolean; // Nova propriedade
}

export default function GAccordion({ title, text, initiallyOpen }: GAccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(initiallyOpen ? 'panel1' : false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        className=" border border-white bg-black"
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ maxWidth: '550px' }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="text-white"
        >
          <Typography className="text-4xl text-left text-white">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ maxWidth: '800px' }}>
          <Typography className="text-white text-left text-2xl">
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
