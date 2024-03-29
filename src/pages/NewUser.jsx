import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { phone } from 'responsive';
import Spinner from 'components/Spinner';
import { userInputs } from 'formData';

const NewUser = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const inputs = [
    {
      id: 'password',
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
    },
    {
      id: 'confirmPassword',
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <Container>
      <Title>New user</Title>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          {userInputs.concat(inputs).map((input) => {
            const { id, name, type, label, placeholder } = input;
            return (
              <FormGroup key={id}>
                <FormInput
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                />
                <FormLabel>{label}</FormLabel>
              </FormGroup>
            )
          })}
          <FormGroup>
            <FormGroupRadio>
              <FormRadioInput
                type='radio'
                name='gender'
                id='male'
                value='Male'
              />
              <FormRadioLabel htmlFor='male'>Male</FormRadioLabel>
              <FormRadioInput
                type='radio'
                name='gender'
                id='female'
                value='Female'
              />
              <FormRadioLabel htmlFor='female'>Female</FormRadioLabel>
              <FormRadioInput
                type='radio'
                name='gender'
                id='other'
                value='Other'
              />
              <FormRadioLabel htmlFor='other'>Other</FormRadioLabel>
            </FormGroupRadio>
            <FormLabel>Gender</FormLabel>
          </FormGroup>
          <FormGroup>
            <Select name='active' id='active'>
              <Option value='yes'>Yes</Option>
              <Option value='no'>No</Option>
            </Select>
            <FormSelectLabel htmlFor='active'>Active</FormSelectLabel>
          </FormGroup>
        </FormContainer>
        <Button>
          Create {loading && <Spinner />}
        </Button>
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

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FormGroup = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;

    ${phone({ marginBottom: '0.5rem' })}
  }
`;

const FormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-top: 0.7rem;
  color: rgb(151, 150, 150);
`;

const FormSelectLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-top: 0.7rem;
  color: rgb(151, 150, 150);
`;

const FormRadioLabel = styled.label`
  margin: 1rem;
  font-size: 1.8rem;
  font-weight: normal;
  color: #555;
  cursor: pointer;

  ${phone({ fontSize: '1.5rem' })}
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  width: 100%;
  padding: 1.25rem 1.75rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid ${({ type, theme }) => type === 'file' ? '#bbb' : theme.borderInput};
  font-family: inherit;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  border-radius: 4px;
  caret-color: ${({ theme }) => theme.crInput};
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;

  &:focus {
    outline: none;
    border-bottom: 3px solid #008080;
    -webkit-box-shadow: ${({ theme }) => theme.box};
    -moz-box-shadow: ${({ theme }) => theme.box};
    box-shadow: ${({ theme }) => theme.box};
  }

  &:focus:invalid {
    border-bottom: 3px solid #ffb952;
  }

  &::-webkit-input-placeholder {
    color: #bbb;
  }

  &:placeholder-shown + ${FormLabel} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(4rem);
  }
`;

const FormRadioInput = styled.input`
  cursor: pointer;
`;

const FormGroupRadio = styled.div`
  margin-top: 1rem;
`;

const Select = styled.select`
  border: none;
  display: inline-block;
  width: 100%;
  padding: 1.25rem 1.75rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid ${({ type, theme }) => type === 'file' ? '#bbb' : theme.borderInput};
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  user-select: none;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  option {
    background-color: ${({ theme }) => theme.bgInput};
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid #008080;
    -webkit-box-shadow: ${({ theme }) => theme.box};
    -moz-box-shadow: ${({ theme }) => theme.box};
    box-shadow: ${({ theme }) => theme.box};
  }

  &:focus:invalid {
    border-bottom: 3px solid #ffb952;
  }
`;

const Option = styled.option``;

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 20rem;
  text-transform: capitalize;
  text-align: center;
  padding: 0.7rem 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.btnNew};
  color: ${({ theme }) => theme.textNew};
  border-radius: 1rem;
  margin-top: 3rem;
  outline-color: ${({ theme }) => theme.text};
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);

    @media only screen and (max-width: 37.5em), only screen and (hover: none) {
      transform: none;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default NewUser;
