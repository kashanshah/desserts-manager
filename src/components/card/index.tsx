import { Stack, StackProps } from '@chakra-ui/react';

export const Card = (props: StackProps) => {
  return (
    <Stack
      alignItems='center'
      spacing='0.5em'
      boxShadow={`0px 0px 10px rgba(0,0,0,0.5)`}
      borderRadius='7px'
      paddingX='2em'
      paddingY='1em'
      width='100%'
      {...props}
    />
  );
};
