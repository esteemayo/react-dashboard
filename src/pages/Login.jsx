import styled from 'styled-components';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

import { loginInputs } from 'formData';
import { useGlobalContext } from 'context/darkMode/DarkModeContext';
import Spinner from 'components/Spinner';

const initialState = {
  username: '',
  password: '',
  showPassword: false,
};

const Login = () => {
  const { darkMode } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  const { showPassword } = inputs;

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setInputs((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          {loginInputs.map((input) => {
            const { id, name, type, label, placeholder } = input;
            return (
              <FormGroup key={id}>
                <FormInput
                  type={showPassword ? 'text' : type}
                  name={name}
                  placeholder={placeholder}
                  required
                  autoFocus={name === 'username' ? true : false}
                  onChange={handleChange}
                />
                <FormLabel>{label}</FormLabel>
                {name === 'username' ? (
                  <FaceOutlinedIcon
                    className='username__icon'
                  />
                ) : (
                  showPassword ? (
                    <VisibilityOff
                      onClick={handleToggle}
                      className='password__icon'
                    />
                  ) : (
                    <Visibility
                      onClick={handleToggle}
                      className='password__icon'
                    />
                  )
                )}
              </FormGroup>
            )
          })}
          <ErrorMessage>Oops! Something went wrong...</ErrorMessage>
          <Button>
            Login {loading && <Spinner size='sm' />}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  svg {
    color: ${({ theme }) => theme.colorIcon};
  }
`;

const FormLabel = styled.label`
  margin-left: 2rem;
  margin-top: 0.7rem;
  font-weight: 600;
  font-size: 1.3rem;
`;

const FormInput = styled.input`
  display: block;
  border: none;
  width: 40rem;
  padding: 1rem 2rem;
  border-bottom: 3px solid transparent;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  border-radius: 3px;
  -webkit-box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
  -moz-box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
  box-shadow: 0 1rem 2rem rgba(00, 00, 00, 0.1);
  transition: all 0.5s ease;

  &:focus {
    outline: none;
    border-bottom: 3px solid #008080;
    -webkit-box-shadow: 0 0.5rem 1.5rem rgba(00, 00, 00, 0.075);
    -moz-box-shadow: 0 0.5rem 1.5rem rgba(00, 00, 00, 0.075);
    box-shadow: 0 0.5rem 1.5rem rgba(00, 00, 00, 0.075);
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
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

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.bgBtnAdd};
  color: ${({ theme }) => theme.textAdd};
  border-radius: 5px;
  font-size: 1.4rem;
  margin-top: 2rem;
  outline-color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.7;
    letter-spacing: 3px;
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #ff0000;
  font-weight: 400;
  font-size: 1.4rem;
`;

export default Login;
