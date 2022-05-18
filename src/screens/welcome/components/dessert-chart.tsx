import { Box } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';
import { IDessert } from '../../../utils/types';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

type DessertChartProps = {
  desserts: IDessert[];
};

function makeTooltipContent(entry: DessertChartProps['desserts'][0]) {
  return `${entry.name}: ${entry.amount}`;
}

export const DessertChart = (props: DessertChartProps) => {
  const { desserts = [] } = props;
  const [hovered, setHovered] = useState<number | null>(null);

  if (!desserts?.length) {
    return null;
  }

  return (
    <Box px='1em'>
      <div data-tip='' data-for='chart'>
        <PieChart
          data={desserts.map((dessert) => {
            return {
              title: dessert.name,
              value: dessert.amount,
              color: dessert.color,
            };
          })}
          style={{
            width: '100%',
            height: '100%',
          }}
          animate={true}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={() => {
            setHovered(null);
          }}
        />
        <ReactTooltip
          id='chart'
          getContent={() => (typeof hovered === 'number' ? makeTooltipContent(desserts[hovered]) : null)}
        />
      </div>
    </Box>
  );
};
