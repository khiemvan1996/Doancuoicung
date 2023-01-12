import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setLoginMessage('Đăng nhập thành công!');
    } else {
      setLoginMessage('Tên đăng nhập hoặc mật khẩu sai');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Tên đăng nhập:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Mật khẩu:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Đăng nhập</button>
    </form>
    {loginMessage && <p>{loginMessage}</p>}
    </>
  );
}

export default LoginPage;
