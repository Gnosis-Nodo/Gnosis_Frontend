import CodeEditor from "./CodeEditor";

export default function Playground() {
  return (
    <div className="flex place-content-around mt-10">
      <div className="InfoContainer w-1/5 ml-20">
        <h1 className="mx-5 my-5 text-2xl font-bold">Playground</h1>
        <h3 className="my-5 text-xl">Instructions</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum soluta corporis cumque. Deleniti, temporibus animi est quas at totam sequi pariatur fuga aliquam, debitis eligendi corrupti itaque quasi sapiente! lore</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum soluta corporis cumque. Deleniti, temporibus animi est quas at totam sequi pariatur fuga aliquam, debitis eligendi corrupti itaque quasi sapiente! lore</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum soluta corporis cumque. Deleniti, temporibus animi est quas at totam sequi pariatur fuga aliquam, debitis eligendi corrupti itaque quasi sapiente! lore</p>
      </div>
      <CodeEditor />
    </div>
  )
}