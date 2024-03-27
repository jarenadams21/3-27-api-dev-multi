import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react'
import SpinningLogo from '../components/SpinningLogo'
import multiLight from '../media/multi-light.png'
import multiDark from '../media/multi-dark.png'
import pictochat from '../media/pictochat.jpeg'
  
  export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    const openNumultiPage = () => {
      window.open('https://www.numulti.com', '_blank');
    };

    const openChallengePage = () => {
        window.open('https://docs.google.com/document/d/1cOau84OFrqIxnQQ8yyzPWDgpKxWbUabPaUgm4Il3sWE/edit?usp=sharing', '_blank');
      };

    return (
      <>
        <Box bg={useColorModeValue('#43D7C5', '#022E31')} px={4}>
          <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <Box onClick={openChallengePage} style={{ cursor: 'pointer' }}>
                    API Development Spring 2024
                </Box>
            </Box>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button width={100} height={100} onClick={toggleColorMode}>
                  {colorMode === 'light' ? <SpinningLogo src={multiLight} /> : <SpinningLogo src={multiDark} />}
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={pictochat}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>User 1337</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Switch User</MenuItem>
                    <MenuItem>Invent</MenuItem>
                    <MenuItem onClick={openNumultiPage}>[BROKEN DO NOT CLICK]</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    )
  }
  