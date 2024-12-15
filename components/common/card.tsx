import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
