import { Button, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { AddDessertForm } from './components/add-dessert-form';
import { useState } from 'react';
import { IAddDessert, IDessert } from '../../utils/types';
import { ListDesserts } from './components/list-desserts';
import { useToast } from '../../hooks/use-toast';

export const Welcome = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { successToast } = useToast();
  const [desserts, setDesserts] = useState<IDessert[]>([]);

  const addDessert = (dessert: IAddDessert) => {
    setDesserts([...desserts, { id: (desserts.length + 1).toString(), createdAt: new Date().toString(), ...dessert }]);
    successToast({ description: 'Dessert has been added successfully!' });
    onClose();
  };

  const deleteDessert = (id: IDessert['id']) => {
    setDesserts([...desserts.filter((dessert) => dessert.id !== id)]);
    successToast({ description: 'Dessert has been deleted successfully!' });
    onClose();
  };

  return (
    <Stack spacing='2em' pt='3em' px='1em' minHeight='100vh' width='800px' maxWidth='100%' m='auto'>
      <Stack
        spacing={['2em', '0']}
        alignItems={['center', 'flex-start']}
        justifyContent='space-between'
        mt='2em'
        flexDirection={['column', 'row']}
      >
        <Heading fontSize='2em'>🍨 Desserts Manager</Heading>
        <Button colorScheme='green' onClick={onOpen} size='sm'>
          Add Dessert
        </Button>
      </Stack>
      <AddDessertForm isOpen={isOpen} onClose={onClose} onSubmit={addDessert} />
      <ListDesserts desserts={desserts} onDelete={deleteDessert} />
    </Stack>
  );
};
