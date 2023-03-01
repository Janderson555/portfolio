import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  console.log(window.location.pathname);

  useEffect(() => {
    window.location.pathname.includes('/') && navigate('/about')
  })
}
