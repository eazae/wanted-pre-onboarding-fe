import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/authAPI';
import { Button, Input, TextButton, Title } from '../../commons';

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const login = async (email, password) => {
    const response = await signIn(email, password);
    // console.log(response);
    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    setValidEmail(email.includes('@'));
  }, [email]);

  useEffect(() => {
    setValidPassword(password.length >= 8);
  }, [password]);

  return (
    <>
      <Title>로그인</Title>
      {/* <form> */}
      <Input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="비밀번호"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        // type="button"
        onClick={() => login(email, password)}
        disabled={!validEmail || !validPassword}
      >
        로그인
      </Button>
      {/* </form> */}

      <TextButton onClick={() => navigate('/signup', { replace: true })}>회원가입하기 </TextButton>
    </>
  );
};
