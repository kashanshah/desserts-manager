import { IconButton, Td, Tr } from '@chakra-ui/react';
import { IDessert } from '../../../../utils/types';
import { formatDate } from '../../../../utils/date';
import { NotAllowedIcon } from '@chakra-ui/icons';

type ListDessertsRowProps = {
  dessert: IDessert;
  onDelete: (id: string) => void;
};

export const ListDessertsRow = (props: ListDessertsRowProps) => {
  const {
    dessert: { id, name, amount, createdAt },
    onDelete,
  } = props;

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td isNumeric>{amount.toFixed(2)}</Td>
      <Td>{formatDate(createdAt)}</Td>
      <Td textAlign='center'>
        <IconButton
          size='sm'
          colorScheme='red'
          aria-label='Delete'
          title='Delete'
          icon={<NotAllowedIcon />}
          onClick={() => {
            if (window?.confirm(`Are you sure to delete ${name}?`)) {
              onDelete(id);
            }
          }}
        />
      </Td>
    </Tr>
  );
};
