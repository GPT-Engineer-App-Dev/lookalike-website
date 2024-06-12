import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";
import logo from "../assets/stripe-logo.png";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} textAlign="center">
        <Image src={logo} alt="Stripe Logo" boxSize="50px" />
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="#635bff">Congratulations Lovable Labs Incorporated!</Text>
          <Text fontSize="lg">You've just received your first payment through Stripe.</Text>
          <Text fontSize="lg" mt={2}>Your first payout for this payment of <b>$10.00</b> (minus any fees) should land in your bank account on <b>12/28/23</b>.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;