import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useRoutes: () => mockedUsedNavigate,
  useLocation: () => mockedUsedNavigate
}));

describe("App", () => {
  it("renders", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // expect(mockedUsedNavigate).toHaveBeenCalledWith('/post-1');
  });
});
