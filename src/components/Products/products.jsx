// import React from 'react';
// import Product from './product';

// const Products = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// };

// export default Products;
import React from 'react';
import Product from './product';

const Products = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
