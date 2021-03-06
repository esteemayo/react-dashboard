import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Publish } from '@material-ui/icons';

import { phone } from 'responsive';
import Chart from 'components/Chart';
import { productData } from '../data';

const Product = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to='/new-product' className='product__link'>
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <Top>
        <TopLeft>
          <Chart data={productData} dataKey='Sales' title='Sales performance' />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <Image src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            <ProductName>Apple airpods</ProductName>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey>id:</InfoKey>
              <InfoValue>123</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>sales:</InfoKey>
              <InfoValue>5123</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>active:</InfoKey>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>in stock:</InfoKey>
              <InfoValue>no</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </Top>
      <Bottom>
        <Form onSubmit={handleSubmit}>
          <FormLeft>
            <FormGroup>
              <Input type='text' placeholder='Product name' />
              <Label>Product name</Label>
            </FormGroup>
            <FormGroup>
              <Select name='inStock' id='inStock'>
                <Option disabled>In Stock</Option>
                <Option value='yes'>Yes</Option>
                <Option value='no'>No</Option>
              </Select>
              <Label>In stock</Label>
            </FormGroup>
            <FormGroup>
              <Select name='active' id='active'>
                <Option disabled>Active</Option>
                <Option value='yes'>Yes</Option>
                <Option value='no'>No</Option>
              </Select>
              <Label>Active</Label>
            </FormGroup>
          </FormLeft>
          <FormRight>
            <FileUpload>
              <Img src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
              <Label htmlFor='file'>
                <Publish style={{ fontSize: '2rem', cursor: 'pointer' }} />
              </Label>
              <Input id='file' type='file' style={{ display: 'none' }} />
            </FileUpload>
            <Button>Update</Button>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  padding: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
`;

const Title = styled.h1`
  text-transform: capitalize;
`;

const AddButton = styled.button`
  border: none;
  display: block;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  text-transform: capitalize;
  background-color: #008080;
  color: var(--color-white);
  border-radius: 0.5rem;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(3px);
  }

  &:focus {
    outline: none;
  }
`;

const Top = styled.div`
  display: flex;

  ${phone({ flexDirection: 'column' })}
`;

const TopLeft = styled.div`
  flex: 1;
`;

const TopRight = styled.div`
  flex: 1;
  padding: 2rem;
  margin: 2rem;
  font-size: 1.5rem;
  -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

const ProductName = styled.span`
  text-transform: capitalize;
  fon-weight: 600;
  margin-left: 2rem;
`;

const InfoBottom = styled.div`
  margin-top: 1rem;
`;

const InfoItem = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

const InfoKey = styled.span``;

const InfoValue = styled.span`
  font-weight: 300;
`;

const Bottom = styled.div`
  padding: 2rem;
  margin: 2rem;
  -webkit-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  color: gray;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-left: 2rem;
  margin-top: 0.7rem;
`;

const Input = styled.input`
  border: none;
  display: block;
  padding: 1rem 2rem;
  color: #999;
  border-bottom: 3px solid #bbb;
  caret-color: #00008b;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    text-transform: capitalize;
    font-size: 1.2rem;
    color: #bbb;
  }

  &:placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(4rem);
  }
`;

const Select = styled.select`
  border: none;
  width: 100%;
  display: block;
  padding: 1rem 2rem;
  color: #bbb;
  user-select: none;
  border-bottom: 3px solid #bbb;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
  }

  &:placeholder-shown + ${Label} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(4rem);
  }
`;

const Option = styled.option`
  text-transform: capitalize;
`;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FileUpload = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  display: block;
  object-fit: cover;
  margin-right: 1rem;
`;

const Button = styled.button`
  border: none;
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.5rem;
  background-color: #00008b;
  color: var(--color-white);
  border-radius: 0.5rem;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.8;
    transform: translateX(3px);
  }

  &:focus {
    outline: none;
  }
`;

export default Product;
