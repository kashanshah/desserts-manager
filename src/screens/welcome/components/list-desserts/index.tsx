import { Table, TableContainer, Tbody, Thead } from '@chakra-ui/react';
import { ListDessertsHeader } from './list-desserts-header';
import { ListDessertsRow } from './list-desserts-row';
import { Empty } from '../../../../components/empty';
import { IDessert } from '../../../../utils/types';

type ListDessertsProps = {
  desserts: IDessert[];
  onDelete: (id: IDessert['id']) => void;
};

export const ListDesserts = (props: ListDessertsProps) => {
  const { desserts = [], onDelete } = props;

  if (!desserts?.length) {
    return <Empty title='No Dessert Found' />;
  }

  return (
    <TableContainer>
      <Table variant='striped'>
        <Thead>
          <ListDessertsHeader />
        </Thead>
        <Tbody>
          {desserts.map((dessert) => {
            return <ListDessertsRow dessert={dessert} key={dessert.id} onDelete={onDelete} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
