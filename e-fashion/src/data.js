const data = {
    products: [
      {
        id: '1',
        name: 'T-shirt',
        price: 650,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDl6nCzQLT2Ppfr4oYZOqXXC3PMTEm7h1og&usqp=CAU',
      },
      {
        id: '2',
        name: 'Denim jeans',
        price: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREvVsTBKAPedyPMT5jJ80GbH_0mJQhbkIVA&usqp=CAU',
      },
      {
        id: '3',
        name: 'Sneakers',
        price: 900,
        image: 'data:image/jpeg;base64,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',
      },
    ],
  };
  export default data;
  