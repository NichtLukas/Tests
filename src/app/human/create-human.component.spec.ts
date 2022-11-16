import { fireEvent, render, RenderResult, screen } from '@testing-library/angular';
import '@testing-library/jest-dom/extend-expect';
import { CreateHumanComponent } from './create-human.component';


describe('CreateHumanComponent with Forms', ()=>{
  let inputName:HTMLElement;
  let inputAge:HTMLElement;
  let inputAgeReset:HTMLElement;
  let inputNameReset:HTMLElement;
  let rendered:RenderResult<CreateHumanComponent, CreateHumanComponent>
  let submitSpy: jest.Mock<any,any>

  beforeEach(async()=>{
    
    submitSpy = jest.fn();
    rendered = await render(CreateHumanComponent, {
      
      componentProperties:{
        emitFormValue:submitSpy,
    }});
   
    inputName = rendered.getByLabelText('nameInput');
    inputNameReset = rendered.getByLabelText('nameInputReset');
    inputAge = rendered.getByLabelText('ageInput');
    inputAgeReset = rendered.getByLabelText('ageInputReset');
  });


  
  it('should submit example text', async () =>{
    const submit = screen.getByText('Add');
    fireEvent.click(submit);

    expect(submitSpy).toBeTruthy();
  });

  it('should not be able to submit because inputfield "nameInput" is empty', async () =>{

    fireEvent.click(inputNameReset);
    const submit = screen.getByText('Add');
    fireEvent.click(submit);

    expect(submitSpy).toBeFalsy;
  });

})

describe('CreateHumanComponent without Forms', () => {

  let inputName:HTMLElement;
  let inputAge:HTMLElement;
  let inputAgeReset:HTMLElement;
  let inputNameReset:HTMLElement;
  let rendered:RenderResult<CreateHumanComponent, CreateHumanComponent>

  //     const inputName = rendered.getByLabelText('nameInput');
//     const inputAge = rendered.getByLabelText('ageInput');

  beforeEach(async()=>{
      rendered =await render(CreateHumanComponent,);
      inputName = rendered.getByLabelText('nameInput');
      inputNameReset = rendered.getByLabelText('nameInputReset');
      inputAge = rendered.getByLabelText('ageInput');
      inputAgeReset = rendered.getByLabelText('ageInputReset');
  })

  it('should render CreateHumanComponent', async () => {

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });


  it('input field "inputAge" should be empty after delete', async ()=>{
    fireEvent.click(inputAgeReset);
    expect(inputAge.innerHTML).toBe("");
  });

  it('input field "nameInput" should be empty after delete', async ()=>{
    fireEvent.click(inputNameReset);
    expect(inputName.innerHTML).toBe("");
  });

  it('input field "nameInput" and "ageInput" should be empty after "submit"', async () =>{
    const submit = screen.getByText('Add');
    fireEvent.click(submit);

    expect(inputAge.innerHTML).toBe("");
    expect(inputName.innerHTML).toBe("");
  });

  it('it should show error message when "ageInput" is empty after tabbing out of "ageInput"', async () =>{
    const submit = screen.getByText('Add');
    fireEvent.click(submit);

    fireEvent.click(inputAge);
    fireEvent.click(inputName);
    const errorMessageAge = rendered.getByLabelText("errorMessageAge");

    expect(errorMessageAge.innerHTML).toBe(" This is required! ");
  });

  it('it should show error message when "nameInput" is empty after tabbing out of "nameInput"', async () =>{
    const submit = screen.getByText('Add');
    fireEvent.click(submit);
    
    fireEvent.click(inputName);
    fireEvent.click(inputAge);

    const errorMessage = rendered.getByLabelText('errorMessageName');
    expect(errorMessage.innerHTML).toBe(" This is required! ")
  });
  
  it('should not be able to put letters in "ageInput" field', async () =>{
    fireEvent.change(inputAge,{target: {value: null}});
    fireEvent.change(inputAge,{target: {value: "these are some letters"}});
    expect(inputAge.innerHTML).toBe("");
  });
 
});
