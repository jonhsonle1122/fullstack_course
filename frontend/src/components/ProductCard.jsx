import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updatedProduct } = useProductStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [updateProduct, setUpdateProduct] = useState(product);
  const handleDelete = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      toast({
        title: "Error",
        status: "error",
        description: message,
        isClosable: true,
      });
    } else {
      toast({
        description: message,
        title: "Success",
        status: "success",

        isClosable: true,
      });
    }
  };
  const handleUpdateProduct = async (id, newProduct) => {
    const { success, message } = await updatedProduct(id, newProduct);
    if (!success) {
      toast({
        title: "Error",
        status: "error",
        description: message,
        isClosable: true,
        duration: 3000,
      });
    } else {
      toast({
        description: message,
        title: "Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s ease-in-out"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        w={"full"}
        h={48}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" onClick={onOpen} />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDelete(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={updateProduct.name}
                  onChange={(e) =>
                    setUpdateProduct({ ...updateProduct, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={updateProduct.price}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      price: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updateProduct.image}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      image: e.target.value,
                    })
                  }
                />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => handleUpdateProduct(product._id, updateProduct)}
              >
                Update
              </Button>
              <Button variant={"ghost"} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  );
};

export default ProductCard;
