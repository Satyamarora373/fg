import ReactSearchBox from "react-search-box";

export default function SearchBar() {
  return (
    <ReactSearchBox
      placeholder="Search FG.."
      data={[
        {
          key: "Home",
          value: "JHome Page"
        },
        {
          key: "About",
          value: "About Us"
        },
        {
          key: "Contact",
          value: "Contact Us"
        },
        {
          key: "Legal",
          value: "Legal"
        },
        {
          key: "Services",
          value: "Services"
        }
      ]}
      
      onChange={(value) => console.log(value)}
      autoFocus
      iconBoxSize="48px"
    />
  );
}
