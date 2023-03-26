export default function IconButton(props) {
  return (
    <div
      {...props}
      className={`active: h-8 w-8 cursor-pointer rounded-full bg-white 
      bg-opacity-10 p-1 text-white ring-white transition-all
      
      hover:bg-opacity-20 
      active:scale-95 active:bg-opacity-10`}
    >
      {props.children}
    </div>
  );
}
