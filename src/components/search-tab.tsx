import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import "./styles/input.scss"

type SearchItem = {
  name: string;
  path: string;
};


const searchItems: SearchItem[] = [
  { name: "User Details", path: "/users-details" },
  { name: "users", path: "/user" },
];


export function SearchItem({ item }: { item: string}) {
    return <Link to={`/${item}`}>
        { item }
    </Link>
} 






export const SearchComponent = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    if (!value) {
      setOptions([]);
    } else {
     
      const filteredOptions = searchItems.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      ).map(item => ({
        value: item.path,
        label: item.name
      }));

      setOptions(filteredOptions);
    }
  };

  const onSelect = (value: unknown) => {
    navigate({to: `/${value}`});
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="Search for anything..." enterButton />
    </AutoComplete>
  );
};
