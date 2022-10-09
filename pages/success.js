import Error from 'next/error'
import {
  Box,
  Input,
  Divider,
  Card,
  Container,
  Text,
  Button,
  Heading,
  Flex,
  Select,
  Textarea,
  Field,
  Grid
} from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Register({ notFound, registrationRecord, params }) {
  return (
    <Container py={4} variant="copy">
      <Card
        px={[4, 4]}
        py={[3, 3]}
        sx={{
          color: 'blue',
          textAlign: 'left'
        }}
      >
        <Text sx={{ color: 'red', fontSize: '27px', fontWeight: 800 }}>
          Thank you for signing up!
        </Text>
        <br />
        <Text>
          ❤️ Welcome to Hack Bahamas! This form really helps us determine
          how much food to buy, where to do host, and more! Make sure you check
          your email in the coming months for important updates. Also,
          check out {' '}
          <Text
            as={'a'}
            href="https://app.slack.com/client/T0266FRGM/C045HML0Q86"
            target="_blank"
            sx={{ color: 'red' }}
          >
            our slack channel
          </Text>
          .
        </Text>
      </Card>
    </Container>
  )
}
