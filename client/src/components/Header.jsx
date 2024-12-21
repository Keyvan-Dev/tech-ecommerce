// React
import { useEffect } from 'react';

// Chakra UI
import {
	Box,
	Flex,
	Stack,
	HStack,
	Icon,
	IconButton,
	Text,
	useColorModeValue as mode,
	useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

// React Icons
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsPhoneFlip } from 'react-icons/bs';
import { BiUserCheck } from 'react-icons/bi';
import { TbShoppingCart } from 'react-icons/tb';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

// React Router Dom
import { Link as ReactLink } from 'react-router-dom';

// Redux product action
import { toggleFavorites } from '../redux/actions/productActions.js';

// Components
import NavLink from './NavLink.jsx';
import ColorModeToggle from './ColorModeToggle.jsx';

const Links = [
	{ name: 'Products', route: '/products' },
	{ name: 'Hot Deals', route: '/hot-deals' },
	{ name: 'Contact', route: '/contact' },
	{ name: 'Services', route: '/services' },
];

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch();
	const { favoritesToggled } = useSelector((state) => state.product);
	const { cartItems } = useSelector((state) => state.cart);

	useEffect(() => {}, [favoritesToggled, dispatch]);

	return (
		<Box bg={mode('cyan.300', 'gray.500')} px='4'>
			<Flex h='16' alignItems='center' justifyContent='space-between'>
				<Flex display={{ base: 'flex', md: 'none' }} alignItems='center'>
					<IconButton
						bg='parent'
						size='md'
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						onClick={isOpen ? onClose : onOpen}
					/>
					<IconButton
						icon={<TbShoppingCart size='20px' />}
						ml='12'
						position='absolute'
						as={ReactLink}
						to='/cart'
						varient='ghost'
					/>
					{cartItems.length > 0 && (
						<Text fontSize='sm' fontWeight='bold' fontStyle='italic' position='absolute' ml='74px' mt='-6'>
							{cartItems.length}
						</Text>
					)}
				</Flex>
				<HStack spacing='8' alignItems='center'>
					<Box alignItems='center' display='flex' as={ReactLink} to='/'>
						<Icon as={BsPhoneFlip} h='6' w='6' color={mode('black', 'yellow.200')} />
						<Text as='b'>Tech lines</Text>
					</Box>
					<HStack as='nav' spacing='4' display={{ base: 'none', md: 'flex' }}>
						{Links.map((link) => (
							<NavLink route={link.route} key={link.route}>
								<Text fontWeight='medium'>{link.name}</Text>
							</NavLink>
						))}
						<Box>
							<IconButton
								icon={<TbShoppingCart size='20px' />}
								as={ReactLink}
								to='/cart'
								varient='ghost'
							/>
							{cartItems.length > 0 && (
								<Text fontSize='sm' fontWeight='bold' fontStyle='italic' position='absolute' ml='26px' mt='-6'>
									{cartItems.length}
								</Text>
							)}
						</Box>
						<ColorModeToggle />
						{favoritesToggled ? (
							<IconButton
								onClick={() => dispatch(toggleFavorites(false))}
								icon={<MdOutlineFavorite size='20px' />}
								variant='ghost'
							/>
						) : (
							<IconButton
								onClick={() => dispatch(toggleFavorites(true))}
								icon={<MdOutlineFavoriteBorder size='20px' />}
								variant='ghost'
							/>
						)}
					</HStack>
				</HStack>
				<Flex alignItems='center'>
					<BiUserCheck />
				</Flex>
			</Flex>
			<Box display='flex'>
				{isOpen && (
					<Box pb='4' display={{ md: 'none' }}>
						<Stack as='nav' spacing='4'>
							{Links.map((link) => (
								<NavLink route={link.route} key={link.route}>
									<Text fontWeight='medium'>{link.name}</Text>
								</NavLink>
							))}
						</Stack>
						{favoritesToggled ? (
							<IconButton
								onClick={() => dispatch(toggleFavorites(false))}
								icon={<MdOutlineFavorite size='20px' />}
								varian
								t='ghost'
							/>
						) : (
							<IconButton
								onClick={() => dispatch(toggleFavorites(true))}
								icon={<MdOutlineFavoriteBorder size='20px' />}
								variant='ghost'
							/>
						)}
						<ColorModeToggle />
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Header;
