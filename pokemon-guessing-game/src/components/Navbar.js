import { Link, Link as ReactLink } from 'react-router-dom';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const links = [
    { linkName: 'Home', path: '/' },
    { linkName: 'Leaderboard', path: '/leaderboard' },
    { linkName: 'About', path: '/about' }
];

const NavLink = ({ path, children }) => (
    <Link
        as={ReactLink}
        to={path}
        px={30}
        py={30}
        rounded={'md'}
        _hover={{
            textDecoration: 'none'
        }}
    >
        {children}
    </Link>
);

const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Box
                bg={'teal.800'}
                px={3}
                style={{ zIndex: 10, position: 'sticky' }}
            >
                <Flex h={20} alignItems='center' justifyContent='space-around'>
                    <IconButton
                        size='md'
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {links.map((link) => (
                            <NavLink key={link.linkName} path={link.path}>
                                {link.linkName}
                            </NavLink>
                        ))}
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as='nav' spacing={4}>
                            {links.map((link) => (
                                <NavLink key={link.linkName} path={link.path}>
                                    {link.linkName}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};


export default Navbar;