import React from 'react'

const ProductCard=({item})=> {
  return (
    <div
  className="block max-w-[12rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      className="rounded-t-md"
      src={item.image_url}
      alt="" />
  </div>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight">{item.name}</h5>
    <p className="text-base">
      {item.description}
    </p>
  </div>
</div>
  )
}

export default ProductCard
