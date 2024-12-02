// Chakra UI
import { Box, Image, Text, Badge, Flex, IconButton, Skeleton } from '@chakra-ui/react';

// React Icons
import { BiExpand } from 'react-icons/bi';

const ProductCard = ({ product, loading }) => {
	return (
		<Skeleton isLoaded={!loading} _hover={{ size: 1.5 }}>
			<Box
				_hover={{ transform: 'scale(1.1)', transitionDuration: '0.5s' }}
				borderWidth='1px'
				overflow='hidden'
				p='4'
				shadow='md'
			>
				<Image />
				{product.stock < 5 ? (
					<Badge colorScheme='yellow'>only {product.stock} left</Badge>
				) : product.stock < 1 ? (
					<Badge colorSchema='red'>Sold out</Badge>
				) : (
					<Badge colorScheme='green'>In stock</Badge>
				)}
				{product.produtIsNew && (
					<Badge ml='2' colorScheme='purple'>
						New
					</Badge>
				)}
			</Box>
		</Skeleton>
	);
};

export default ProductCard;
