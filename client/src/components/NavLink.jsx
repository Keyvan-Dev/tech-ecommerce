// Chakra UI
import { IconButton } from '@chakra-ui/react';

// React Router Dom
import { Link as ReactLink } from 'react-router-dom';

const NavLink = ({ children, route }) => (
	<IconButton as={ReactLink} px='2' py='1' rounded='md' variant='ghost' to={route}>
		{children}
	</IconButton>
);

export default NavLink;
