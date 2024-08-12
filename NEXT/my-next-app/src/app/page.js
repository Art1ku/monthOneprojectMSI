

export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const res = await data.json()

  console.log(data, 'data')

  return (
    <>
    <div className="flex items-center gap-[20px] mt-[40px] flex-col">
      <p className="text-[36px]">{res.title}</p>   
      <p className="text-xl">some content</p>
      </div>
    </>
  );
}