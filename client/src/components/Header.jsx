// React
import React from 'react';

// Chakra UI
import { IconButton } from '@chakra-ui/react';

// React Icons
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

// Redux product action
import { toggleFavorites } from '../redux/actions/productActions.js';

const Header = () => {
	const dispatch = useDispatch();
	const { favoriteToggled } = useSelector((state) => state.product);

	return (
		<>
			{favoriteToggled ? (
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
		</>
	);
};

export default Header;
