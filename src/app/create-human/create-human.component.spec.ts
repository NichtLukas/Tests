import { CreateHumanComponent } from './create-human.component';
import {render, screen, fireEvent} from '@testing-library/angular'
import '@testing-library/jest-dom/extend-expect'
import { AngularMaterialModule } from './create-human.module';

describe('CreateHumanComponent', () => {

  it('should render CreateHumanComponent', async () => {
    await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,]});

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should submit example text', async () =>{

    const submitSpy = jest.fn();
    await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
      componentProperties:{
        emitFormValue:submitSpy,
      }
    });

    const submit = screen.getByText('Add');
    fireEvent.click(submit);
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not be able to submit because inputfield "nameInput" is empty', async () =>{
    const submitSpy = jest.fn();
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
      componentProperties:{
        emitFormValue:submitSpy,
      }
    });

    const input = rendered.getByLabelText('nameInput');
    fireEvent.change(input,{target: {value: null}});
    
    const submit = screen.getByText('Add');
    fireEvent.click(submit);
    expect(submitSpy).toHaveBeenCalled();
  });

  
  it('should not be able to submit because inputfield "ageInput" is empty', async () =>{
    const submitSpy = jest.fn();
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
      componentProperties:{
        emitFormValue:submitSpy,
      }
    });

    const input = rendered.getByLabelText('ageInput');
    fireEvent.change(input,{target: {value: null}});
    
    const submit = screen.getByText('Add');
    fireEvent.click(submit);
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not be able to put letters in "ageInput" field', async () =>{
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
    });

    const input = rendered.getByLabelText('ageInput');

    fireEvent.change(input,{target: {value: null}});
    fireEvent.change(input,{target: {value: "these are some letters"}});
    expect(input.innerHTML).toBe("")
  });

  it('it should show error message when "nameInput" is empty after tabbing out of "nameInput"', async () =>{
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
    });

    const submit = screen.getByText('Add');
    fireEvent.click(submit);
    
    const inputName = rendered.getByLabelText('nameInput');
    const inputAge = rendered.getByLabelText('ageInput');

    fireEvent.click(inputName);
    fireEvent.click(inputAge);

    const errorMessage = rendered.getByLabelText('errorMessageName');
    expect(errorMessage.innerHTML).toBe(" This is required! ")
  });

  it('it should show error message when "ageInput" is empty after tabbing out of "ageInput"', async () =>{
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
    });

    const submit = screen.getByText('Add');
    fireEvent.click(submit);
    
    const inputName = rendered.getByLabelText('nameInput');
    const inputAge = rendered.getByLabelText('ageInput');

    fireEvent.click(inputAge);
    fireEvent.click(inputName);

    const errorMessage = rendered.getByLabelText('errorMessageAge');
    expect(errorMessage.innerHTML).toBe(" This is required! ");
  });

  it('input field "nameInput" and "ageInput" should be empty after "submit"', async () =>{
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
    });

    const submit = screen.getByText('Add');
    fireEvent.click(submit);

    const inputName = rendered.getByLabelText('nameInput');
    const inputAge = rendered.getByLabelText('ageInput');

    expect(inputAge.innerHTML).toBe("");
    expect(inputName.innerHTML).toBe("");

  });

  it('input field "nameInput" should be empty after delete', async ()=>{
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
    });
    const inputNameReset = rendered.getByLabelText('nameInputReset');
    const inputName = rendered.getByLabelText('nameInput');

    fireEvent.click(inputNameReset);
    expect(inputName.innerHTML).toBe("");
  });

  it('input field "inputAge" should be empty after delete', async ()=>{
    const rendered = await render(CreateHumanComponent, {
      imports:[ AngularMaterialModule,],
    });
    const inputAgeReset = rendered.getByLabelText('ageInputReset');
    const inputAge = rendered.getByLabelText('ageInput');

    fireEvent.click(inputAgeReset);
    expect(inputAge.innerHTML).toBe("");
  });

});
