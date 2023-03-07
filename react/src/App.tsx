const App = () => (
  <div className="flex row justify-center items-center mt-4 w-full">
    <a href="/Orders">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Orders
      </button>
    </a>
    <a href="user/orders" className="ml-4">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        User Orders
      </button>
    </a>
  </div>
);

export default App;
