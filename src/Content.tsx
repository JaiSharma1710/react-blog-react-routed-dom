import BlogCard from "./components/BlogCard/BlogCard";

export default function Content() {
  return (
    <div className="main">
      <button className="add-btn">Add Blog</button>
      <div id="blogs-container">
        {
          Array(10).fill("_").map((_,index)=><BlogCard key={index} index={index}/>)
        }
      </div>
    </div>
  );
}
