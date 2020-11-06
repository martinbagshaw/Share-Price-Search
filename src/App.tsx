import React, { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
declare const module: any;

import { buttonMixin, containerMixin, colors, font } from './styles';
import Header from './components/Header';
// TODO:
// 1. API call and test (stock candles)
// - get api token
// - save as an evironment variable
// - convert company name into something you can enter in a search box
// - probably need an autocomplete
// - test this shit

// 2. UI
// - search bar (and list)
// - date picker
// - some sort of charting library

// - prevent re-render of text input
// - try use memo
// - split things up well, keep file sizes small

const Section = styled.section`
  ${containerMixin};
  padding-top: 5.5rem;
`;

const H2 = styled.h2`
  font-family: ${font};
  font-size: 1.25rem;
  color: ${colors.darkBlue};
  line-height: 1.4;
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  margin: 2rem 0;
  background-color: ${colors.greyLight};
  border: 1px solid ${colors.greyMid};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${colors.blueDark};
  line-height: 1.4;
`;

const SearchBar = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  font-family: ${font};
  font-size: 1rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  border: 1px solid ${colors.greyMid};
  &:focus {
    outline: none;
    border: 1px solid ${colors.blueLight};
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const Submit = styled.input`
  ${buttonMixin};
  align-self: flex-end;
`;

const App: FC = (): JSX.Element => {
  const [input, setInput] = useState<string>('');

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('you have to implement a search now...');
  };

  return (
    <Fragment>
      <Header />
      <Section>
        <H2>Search for a company and retrieve its share data:</H2>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="search">Search</Label>
          <SearchBar
            id="search"
            type="text"
            placeholder="Search by company code..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <Submit type="submit" value="Submit" />
        </Form>
      </Section>
    </Fragment>
  );
};

export default hot(module)(App);
