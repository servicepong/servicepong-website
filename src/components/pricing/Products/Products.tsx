import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { useAllProductsQuery } from 'apollo/generated/types';

import { Enterprise } from './Enterprise';
import { ThreeTiers } from './ThreeTiers';

enum PaymentInterval {
  monthly,
  yearly,
}

const Products = () => {
  // hooks
  const [paymentInterval, setPaymentInterval] = useState<PaymentInterval>(
    PaymentInterval.yearly
  );
  // apollo
  const { data: products } = useAllProductsQuery();

  return (
    <Container maxWidth={'container.xl'} py={20}>
      {products && (
        <ThreeTiers
          onChangePaymentInterval={(interval) => setPaymentInterval(interval)}
          products={products}
          paymentInterval={paymentInterval}
        />
      )}

      <Enterprise />
    </Container>
  );
};

export { Products };
