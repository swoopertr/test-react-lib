import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
describe('simple tests', () => {
  test('renders learn react link', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerAElement = screen.getByTestId('app-header-a');
    expect(headerAElement).toHaveTextContent('Learn React');

  });

  test('renders checkbox element', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerCheckBox = screen.getByTestId('app-header-checkbox');
    expect(headerCheckBox).toBeInTheDocument();
    expect(headerCheckBox).not.toBeChecked();

  });


  test('changing title', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();

    const headerH1 = screen.getByTestId('app-header-h1');
    expect(headerH1).toBeInTheDocument();
    expect(headerH1).toHaveTextContent('DENEME TITLE');
    headerH1.innerHTML = 'Yeni başlık';
    expect(headerH1).toHaveTextContent('Yeni başlık');
    
  });

  test('changing text input', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    

    const headerTextInput = screen.getByTestId('app-header-text');
    expect(headerTextInput).toBeInTheDocument();
    expect(headerTextInput).toHaveValue('');
    headerTextInput.value = 'Yeni başlık';
    screen.debug();
    expect(headerTextInput).toHaveValue('Yeni başlık');
    
  });

  test('renders checkbox element clicked', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerCheckBox = screen.getByTestId('app-header-checkbox');
    expect(headerCheckBox).toBeInTheDocument();
    expect(headerCheckBox).not.toBeChecked();
    
    fireEvent.click(headerCheckBox);
    expect(headerCheckBox).toBeChecked();

  });

  test('changing text input with userEvent', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    

    const headerTextInput = screen.getByTestId('app-header-text');
    expect(headerTextInput).toBeInTheDocument();
    userEvent.type(headerTextInput, 'yeni value');
    expect(headerTextInput).toHaveValue('yeni value');
    headerTextInput.value= '';
    userEvent.type(headerTextInput, 'Yeni başlık');
    screen.debug();
    expect(headerTextInput).toHaveValue('Yeni başlık');
    
  });

  test('renders checkbox element clicked userEvent', () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerCheckBox = screen.getByTestId('app-header-checkbox');
    expect(headerCheckBox).toBeInTheDocument();
    expect(headerCheckBox).not.toBeChecked();
    
    act(async ()=>{
      userEvent.click(headerCheckBox);
    });
    
    expect(headerCheckBox).toBeChecked();

  });



});
