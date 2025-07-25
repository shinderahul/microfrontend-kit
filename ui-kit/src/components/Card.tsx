import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

const Card = ({ title, description, children }: CardProps) => {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        padding: '20px',
        background: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        maxWidth: '400px',
        margin: '20px auto',
      }}
    >
      {title && <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '20px' }}>{title}</h3>}
      {description && <p style={{ color: '#555' }}>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
