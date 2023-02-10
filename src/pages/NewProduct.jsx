import styled from 'styled-components';

const NewProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>New product</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='stock'>Stock</Label>
          <Input
            id='stock'
            type='number'
            name='stock'
            placeholder='Stock'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='active'>Active</Label>
          <Select name='active' id='active'>
            <Option value='yes'>Yes</Option>
            <Option value='no'>No</Option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='file'>Image</Label>
          <Input
            type='file'
            id='file'
            accept='image/*'
          />
        </FormGroup>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  flex: 4;
  padding: 2rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.bg};
`;

const Title = styled.h1`
  text-transform: capitalize;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.2rem;
  color: gray;
`;

const Input = styled.input`
  display: block;
  width: 30rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: inherit;
  background-color: transparent;
  color: #999;
  caret-color: #00008b;
  border: 1px solid gray;
  border-radius: 3px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
    -webkit-box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
    -moz-box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
    box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
  }

  &::-webkit-input-placeholder {
    color: #bbb;
  }
`;

const Select = styled.select`
  display: block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: inherit;
  color: #999;
  width: 30rem;
  border: 1px solid gray;
  border-radius: 3px;
  user-select: none;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:focus {
    -webkit-box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
    -moz-box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
    box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
  }
`;

const Option = styled.option``;

const Button = styled.button`
  border: none;
  display: block;
  padding: 1rem 2rem;
  text-transform: capitalize;
  background-color: #00008b;
  color: var(--color-white);
  border-radius: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    transform: translate(3px);
  }

  &:focus {
    outline: none;
  }
`;

export default NewProduct;
