import { Th, Tr } from '@chakra-ui/react';

export const ListDessertsHeader = () => {
  return (
    <Tr>
      <Th>ID</Th>
      <Th>Name</Th>
      <Th isNumeric>Amount</Th>
      <Th>Created At</Th>
      <Th textAlign='center'>Actions</Th>
    </Tr>
  );
};
