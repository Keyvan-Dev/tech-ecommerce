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
				<Text noOfLines={1} fontSize='xl' fontWeight='semibold' mt='2'>
					{product.brand} {` `} {product.name}
				</Text>
				<Text noOfLines={1} fontSize='md' color='gray.600'>
					{product.subtitle}
				</Text>
				<Flex justify='space-between' alignItems='center' mt='2'>
					<Badge colorSchema='cyan'>{product.category}</Badge>
					<Text fontSize='xl' fontWeight='semibold' color='cyan.600'>
						${product.price}
					</Text>
				</Flex>
				<IconButton icon={<BiExpand size='20'/>} colorSchema='cyan' size='sm'/>
			</Box>
		</Skeleton>
	);
};

export default ProductCard;
