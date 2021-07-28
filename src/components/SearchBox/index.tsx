import React, { useEffect, useState } from 'react';
import { Container, Input } from './styles';
import useDebounce from '../../hooks/useDebounce';


interface SearchBoxProps {
  value: string;
  onChange: (event: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  const [displayValue, setDisplayValue] = useState(value);

  const debounceChange = useDebounce(onChange, 2000);


    function handleSearch(event) {
      setDisplayValue(event.target.value);
      debounceChange(event.target.value);

    }
    return (
      <Container>
        <Input
          value={displayValue}
          placeholder="Escolha seu filme"
          type="text"
          onChange={handleSearch}
        />
      </Container>
    );
  };