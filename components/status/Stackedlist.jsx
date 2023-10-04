export default function Stackedlist({ headers }) {
  // console.log(headers);

  const headerElements = Object.entries(headers).map(([key, values]) => (
    <li key={key} className="flex lg:gap-52 justify-start py-3">
      <div className="flex w-28">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{key}</p>
        </div>
      </div>
      <div className="px-10">
        <p className="text-sm leading-6 text-gray-900">{values}</p>
      </div>
    </li>
  ));


  return (
    <ul role="list" className="mt-8 rounded-lg shadow-2xl shadow-gray-300  bg-white p-6">
      <h1 className="lg:text-lg font-bold text-gray-500">Response Headers</h1>
      {headerElements}
    </ul>
  )
}