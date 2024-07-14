import React from 'react';
import styled from 'styled-components';

const ProductPage = () => {
  return (
    <Container>
      <Main>
        <ImageWrapper>
          <ProductImage src="path/to/astronaut-shirt.jpg" alt="Astronaut Print T-shirt" />
        </ImageWrapper>
        <ProductDetails>
          <Breadcrumb>Home / T-shirts / Astronaut print</Breadcrumb>
          <Title>Astronaut print</Title>
          <Price>
            <OldPrice>$45.00</OldPrice>
            <NewPrice>$40.00</NewPrice>
          </Price>
          <ReviewStars>★★★★★</ReviewStars>
          <Description>
            A description of the product goes here. This is where you can elaborate on the
            features and details of the astronaut print t-shirt.
          </Description>
          <SizeSelector>
            <label>Size</label>
            <SizeOptions>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
            </SizeOptions>
          </SizeSelector>
          <AddToCartButton>Add to Cart</AddToCartButton>
          <PaymentMethods>Accepted Payment Methods: Visa, MasterCard, PayPal</PaymentMethods>
        </ProductDetails>
      </Main>
      <RelatedProducts>
        <RelatedTitle>Related Products</RelatedTitle>
        <ProductList>
          <Product>
            <ProductImage src="path/to/related-product1.jpg" alt="Related Product 1" />
          </Product>
          <Product>
            <ProductImage src="path/to/related-product2.jpg" alt="Related Product 2" />
          </Product>
          <Product>
            <ProductImage src="path/to/related-product3.jpg" alt="Related Product 3" />
          </Product>
        </ProductList>
      </RelatedProducts>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductDetails = styled.div`
  flex: 2;
  padding: 10px;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #666;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
`;

const OldPrice = styled.span`
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
`;

const NewPrice = styled.span`
  font-size: 24px;
  color: #e60023;
`;

const ReviewStars = styled.div`
  font-size: 20px;
  color: #ffd700;
`;

const Description = styled.p`
  font-size: 16px;
`;

const SizeSelector = styled.div`
  margin: 20px 0;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const Size = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  background: none;
  cursor: pointer;
  &:hover {
    border-color: #000;
  }
`;

const AddToCartButton = styled.button`
  padding: 15px 20px;
  background-color: #e60023;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d0001c;
  }
`;

const PaymentMethods = styled.div`
  margin: 20px 0;
`;

const RelatedProducts = styled.div`
  margin-top: 40px;
`;

const RelatedTitle = styled.h2`
  font-size: 20px;
`;

const ProductList = styled.div`
  display: flex;
  gap: 20px;
`;

const Product = styled.div`
  flex: 1;
  text-align: center;
`;



export default ProductPage;
