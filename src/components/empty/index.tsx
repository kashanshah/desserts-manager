import { Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';
import { Card } from '../card';

type EmptyProps = {
  title?: string;
  subTitle?: string;
  icon?: ReactElement;
};

export const Empty = (props: EmptyProps) => {
  const { icon, title, subTitle } = props;

  if (!title && !subTitle) {
    return null;
  }

  return (
    <Card>
      {icon ? <>{icon}</> : <InfoIcon fontSize='2em' />}
      {title && <Heading fontSize='1.5em'>{title}</Heading>}
      {subTitle && <Text fontSize='1.25em'>{subTitle}</Text>}
    </Card>
  );
};
