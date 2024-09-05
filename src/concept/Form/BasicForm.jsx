const BasicForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };
  return (
    <>
      <h1 className="text-lg font-medium text-center">
        This is simple form practice
      </h1>
      <div className="flex items-center justify-center mb-10 my-5">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border rounded-lg p-2 w-[250px]"
            name="name"
          />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border rounded-lg p-2 mt-3 w-[250px]"
            name="email"
          />
          <br />

          <input
            type="submit"
            value="submit"
            className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-3"
          />
        </form>
      </div>
    </>
  );
};

export default BasicForm;
