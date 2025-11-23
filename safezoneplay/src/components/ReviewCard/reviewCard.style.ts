
import { styled } from '@styles/stitches.config';

export const Card = styled('li', {
  listStyle: 'none',
  display: 'flex',
  background: '#18172B',
  borderRadius: '20px',
  padding: '16px 24px',
  gap: '24px',
  color: '#fff',
  maxWidth: '900px',
  width: '100%',

  cursor: 'pointer',
  transition: 'transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.45)',
    background: '#1E1D34'
  },

  '&:active': {
    transform: 'translateY(0)'
  }
});

export const Cover = styled('div', {
  width: '120px',
  minWidth: '120px',
  height: '180px',
  borderRadius: '4px',

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  backgroundColor: '#dfdfdf',
  color: '#555',
  fontSize: '14px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1
});

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '8px'
});

export const Title = styled('h2', {
  margin: 0,
  marginBottom: '4px',
  fontSize: '20px'
});

export const Stars = styled('div', {
  display: 'flex',
  gap: '2px',
  fontSize: '16px',
  color: '#FFE600'
});

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

export const Avatar = styled('img', {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover',
  background: '#d9d9d9'
});

export const Username = styled('span', {
  fontSize: '14px'
});

export const Description = styled('p', {
  marginTop: '8px',
  marginBottom: '16px',
  fontSize: '14px',
  lineHeight: 1.5,

  display: '-webkit-box',
  WebkitLineClamp: '3',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  wordBreak: 'break-word',
  overflowWrap: 'break-word'
});

export const Footer = styled('footer', {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '12px'
});

export const PublishDate = styled('span', {
  color: '#B7B7CC'
});

export const LikeButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',

  padding: '6px 10px',
  borderRadius: '999px',
  background: 'transparent',
  border: '1px solid #fff',
  color: '#fff',
  cursor: 'pointer',

  transition: '0.2s',

  '&:hover': {
    background: '#ffffff20'
  }
});

export const LikeCount = styled('span', {
  fontSize: '13px'
});
