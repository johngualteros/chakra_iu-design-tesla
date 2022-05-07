import { Button,Box,Text,Grid,Flex,Image,Center,Spacer,HStack,Link} from '@chakra-ui/react'
import logo from '../image/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.webp'

export function Header(){
    return(
        // Container
        <Box
        backgroundImage="url(https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD)"
        backgroundSize="100% 110%"
        backgroundRepeat="no-repeat">
            {/* Container Text bg White */}
            <Grid  as="h3"  size='sm' bg='white' w="100%" h='calc(7vh)' placeItems="center">
                <Text as='u' cursor="pointer" color='gray.800'>
                Read Tesla's 2021 Impact Report
                </Text>
            </Grid>
            {/* Menu */}
            <Box as="h3"  size='sm' h='calc(93vh)' w='100%' 
            >
                {/* Items */}
                <Flex fontWeight='bold' h='calc(5vh)'  maxW="calc(98vw)" pt={5}>
                    {/* Image */}
                    <Center p='4'>
                    <Image src={logo}  boxSize='80px'/>
                    </Center>
                    {/* Space */}
                    <Spacer/>
                    {/* Text */}
                    <Center p='4'>
                        <HStack>
                        <Link px='2'_hover={{background: "gray.300",borderRadius:"5px",}} ml="28">
                        Model S
                        </Link>
                         <Link px='2'_hover={{background: "gray.300",borderRadius:"5px",}}>
                        Model 3
                        </Link>
                         <Link px='2'_hover={{background: "gray.300",borderRadius:"5px",}}>
                        Model X
                        </Link>
                         <Link px='2'_hover={{background: "gray.300",borderRadius:"5px",}}>
                        Model Y
                        </Link>
                         <Link px='2'_hover={{background: "gray.300",borderRadius:"5px",}}>
                        Solar Roof
                        </Link>
                         <Link px='2'_hover={{background: "gray.300",borderRadius:"5px",}}>
                        Solar Panels
                        </Link>
                        </HStack>
                    </Center>
                    {/* Space */}
                    <Spacer/>
                    {/* Text */}
                    <Center p='4'>
                    <HStack>
                    <Link _hover={{background: "gray.300",borderRadius:"5px",}}>
                        Shop
                        </Link>
                         <Link _hover={{background: "gray.300",borderRadius:"5px",}}>
                        Account
                        </Link>
                         <Link _hover={{background: "gray.300",borderRadius:"5px",}}>
                        Menu
                        </Link>
                    </HStack>
                    </Center>
                </Flex>
                {/* Text */}
                <Grid placeItems="center" w="100%" h="calc(15vh)" mt="10">
                    <Text as="h2" fontWeight="bold" fontSize="5xl">
                         Model 3
                    </Text>
                    <Text as="h3" fontWeight="bold">
                    Order Online for <Text as="u" cursor="pointer">Touchless Delivery</Text>
                    </Text>
                </Grid>
                {/* Buttons */}
                <Flex w="100%" h="calc(10vh)" mt="80" justifyContent="center" gap="10">
                <Button bg="blackAlpha.700" variant='solid' w="16%" color="white"
                _hover={{
                    bg:"gray.400",
                    color:"black"
                }}
                >
                    Custom Order
                </Button>
                <Button bg="whiteAlpha.700" variant='solid' w="16%">
                    EXISTING INVENTORY
                </Button>
                </Flex>

                {/* Arrow */}
                <Grid w="100%" h="calc(5vh)" mt="6" placeItems="center">
                    <Text fontSize="32" color="gray.600" fontWeight="bold" transform="rotate(90deg)"> &gt; </Text>
                </Grid>
            </Box>
        </Box>
    )
}