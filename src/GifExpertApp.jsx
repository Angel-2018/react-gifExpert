import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Spider-man', 'Batman']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // Valorant
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
      {/* Gif Item */}
    </>
  );
};
