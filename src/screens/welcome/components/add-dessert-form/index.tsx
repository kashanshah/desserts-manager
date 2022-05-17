import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAddDessert } from '../../../../utils/types';
import { Yup } from '../../../../utils/yup';
import { Modal } from '../../../../components/modal';

type AddDessertFormProps = Omit<ModalProps, 'children'> & {
  onSubmit: (dessert: IAddDessert) => void;
};

export const AddDessertForm = (props: AddDessertFormProps) => {
  const { isOpen, onClose, onSubmit, ...rest } = props;

  const defaultValues = {
    name: '',
    amount: undefined,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddDessert>({
    defaultValues,
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('Please enter dessert name').min(2, 'Name should have 2 characters at least'),
        amount: Yup.number()
          .transform((value) => {
            return isNaN(value) ? undefined : value;
          })
          .required('Please enter amount')
          .positive('Amount should be greater than 0'),
      })
    ),
  });

  const submitHandler = (data: IAddDessert) => {
    onSubmit(data);
    reset(defaultValues);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <ModalHeader>
          <Heading fontSize='1em'>Add Dessert</Heading>
        </ModalHeader>
        <ModalBody>
          <Stack spacing='1em'>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <FormControl isInvalid={!!errors?.name}>
                <Input type='text' {...register('name')} />
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
              </FormControl>
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <FormControl isInvalid={!!errors?.amount}>
                <Input type='number' {...register('amount')} />
                <FormErrorMessage>{errors?.amount?.message}</FormErrorMessage>
              </FormControl>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='green' type='submit'>
            Save
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
