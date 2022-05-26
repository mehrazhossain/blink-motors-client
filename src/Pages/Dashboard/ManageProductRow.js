import React from 'react';

const ManageProductRow = ({ product, index, setProductDeleteConfirmation }) => {
  return (
    <tr key={product._id}>
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={product.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{product.title}</div>
          </div>
        </div>
      </td>
      <td>{product.stock} Pieces</td>
      <th>
        <label
          onClick={setProductDeleteConfirmation}
          for="product-delete-modal"
          class="text-error cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnssvgjs="http://svgjs.com/svgjs"
            width="30"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve"
            class=""
          >
            <g>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m170.8 14.221a14.21 14.21 0 0 1 14.2-14.207l141.991-.008a14.233 14.233 0 0 1 14.2 14.223v35.117h-170.391zm233.461 477.443a21.75 21.75 0 0 1 -21.856 20.33h-254.451a21.968 21.968 0 0 1 -21.854-20.416l-21.774-318.518h343.174l-23.234 318.6zm56.568-347.452h-409.658v-33a33.035 33.035 0 0 1 33.005-33.012l343.644-.011a33.051 33.051 0 0 1 33 33.02v33zm-270.79 291.851a14.422 14.422 0 1 0 28.844 0v-202.247a14.42 14.42 0 0 0 -28.839-.01v202.257zm102.9 0a14.424 14.424 0 1 0 28.848 0v-202.247a14.422 14.422 0 0 0 -28.843-.01z"
                fill="#C72528"
                fill-rule="evenodd"
                data-original="#C72528"
                class=""
              ></path>
            </g>
          </svg>
        </label>
      </th>
    </tr>
  );
};

export default ManageProductRow;
