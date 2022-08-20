function Box(props) {
  return (
    <div className="w-full bg-gray-100 overflow-hidden">{props.children}</div>
  );
}

export default Box;
