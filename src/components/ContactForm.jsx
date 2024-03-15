import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './actions'; // 액션 생성자를 임포트합니다.

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch(); // useDispatch 훅을 사용해 dispatch 함수를 가져옵니다.

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone })); // addContact 액션을 디스패치하여 연락처를 추가합니다.
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">전화번호:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default ContactForm;
