import { FC } from 'react';
import {
  Center,
  Container,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';

import Integrations from '@icons/integrations.svg';
import Monitoring from '@icons/monitoring.svg';
import Projects from '@icons/projects.svg';
import Statistics from '@icons/statistics.svg';
import StatusPage from '@icons/status-page.svg';
import Team from '@icons/team.svg';
import { BenefitItem } from './BenefitItem';

const Benefits: FC = () => {
  return (
    <Container maxW="container.xl">
      <Stack>
        <Center mt={20}>
          <Heading size="xl" as="h2">
            Everything is monitored in one place
          </Heading>
        </Center>
        <Text fontSize="xl" textAlign="center">
          We take care of monitoring your services so you don&apos;t have to do
          anything.
        </Text>
      </Stack>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(12, 1fr)' }}
        mt={20}
        gap={{ base: 5, md: 10 }}
        mb={24}
      >
        <BenefitItem
          icon={<Icon as={Monitoring} boxSize="5" />}
          title="Monitoring"
          text={
            <Text>
              Create a new Pong with just one click to monitor another server or
              service. Afterwards you can also adjust settings, e.g. when the
              pong is offline (timeout/period) or when an alarm should be sent
              after a status change (grace period).
            </Text>
          }
        />

        <BenefitItem
          icon={<Icon as={Projects} boxSize="5" />}
          title="Projects"
          text={
            <Text>
              In order to have the best possible overview of your monitoring,
              you can divide it into projects. You can create as many projects
              as you need.
            </Text>
          }
        />

        <BenefitItem
          icon={<Icon as={Team} boxSize="5" />}
          title="Work with your team"
          text={
            <Text>
              Invite your colleagues or your team to your projects. With the
              groups you can additionally set the rights of the users. This
              makes it very easy to collaborate.
            </Text>
          }
        />

        <BenefitItem
          icon={<Icon as={Integrations} boxSize="5" />}
          title="10+ Integrations"
          text={
            <Text>
              So that everyone can be reached, we have especially many
              integration, because again everyone uses something different. So
              that you can also inform your team, you can configure multiple
              integrations and also activate them individually per pong.
            </Text>
          }
        />

        <BenefitItem
          icon={<Icon as={Statistics} boxSize="5" />}
          title="Reports & statistics"
          text={
            <Text>
              In the settings you can configure reports, which we send you
              regularly, so that you have the best possible overview of your
              services and the status. Also you have per pong graphs and logs to
              give you an accurate overview of the events received.
            </Text>
          }
        />

        <BenefitItem
          icon={<Icon as={StatusPage} boxSize="5" />}
          title="Status page (coming soon)"
          text={
            <Text>
              With the Status page you can create a public website to give your
              users an overview of the status of the servers.
            </Text>
          }
        />
      </Grid>
    </Container>
  );
};

export { Benefits };
