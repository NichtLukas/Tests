import { fireEvent, render, RenderResult, screen } from '@testing-library/angular';
import '@testing-library/jest-dom/extend-expect';
import { DisplayHumanComponent } from './display-human.component';


describe('DisplayHumanComponent without fireEvent', ()=>{

  let rendered:RenderResult<DisplayHumanComponent, DisplayHumanComponent>
  const submitSpy = jest.fn();


  beforeEach(async () =>{
    rendered = await render(DisplayHumanComponent, {
      imports:[DisplayHumanComponent,],
      componentProperties:{
        humans:[
          {name:"test1",age:73,uuid:1},
          {name:"test2",age:74,uuid:2},
          {name:"test3",age:75,uuid:3}
        ],
        onDelete:submitSpy,
      }
    });
  });

  it('should render DisplayHumanComponent', async () =>{
    expect(screen.getByText('Persons')).toBeInTheDocument();
    expect(screen.getByText('test1 (73)')).toBeInTheDocument();
    expect(screen.getByText('test2 (74)')).toBeInTheDocument();
    expect(screen.getByText('test3 (75)')).toBeInTheDocument();
  });

  it('should call onDelete if icon is clicked', async () => {
    const deleteButton = screen.getByTestId('delete:' + 1)
    fireEvent.click(deleteButton);
    expect(submitSpy).toBeCalledTimes(1);
  });

  


});

