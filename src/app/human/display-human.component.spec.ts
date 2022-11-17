import { HttpClient } from '@angular/common/http';
import { render, RenderResult, screen } from '@testing-library/angular';
import '@testing-library/jest-dom/extend-expect';
import { Human } from '../human/human.model';
import { HumanService } from '../human/human.service';
import { DisplayHumanComponent } from './display-human.component';



describe('DisplayHumanComponent with fireEvent', ()=>{
  let rendered:RenderResult<DisplayHumanComponent, DisplayHumanComponent>
  let submitSpy: jest.Mock<any,any>
  let humanService: HumanService;
  let httpClient: HttpClient;
  

  beforeEach(async () =>{
    submitSpy = jest.fn();
    humanService = new HumanService(httpClient);
    rendered = await render(DisplayHumanComponent, {
      imports:[DisplayHumanComponent,],
      componentProperties:{
        onDelete:submitSpy,
      }
    });
 
  });

  it('should delete Human from table after clicking on delete', async () =>{
    let humans:Human[] = [];
    let humanID = '';
    humanService.humans$.subscribe((value:Human[])=>{
      humans = value; 
    });
    expect(humans).not.toBe([]);

    humanID = 'delete:' + humans[0].id;

    //TODO: right GET

    //const deleteButton = screen.(humanID);
    //fireEvent.click(deleteButton);

    expect(submitSpy).toBeCalled();
    
    expect(screen.getByText(humanID)).not.toBeInTheDocument();

  });



});

describe('DisplayHumanComponent without fireEvent', ()=>{

  let rendered:RenderResult<DisplayHumanComponent, DisplayHumanComponent>

  beforeEach(async () =>{
    rendered = await render(DisplayHumanComponent, {
      imports:[DisplayHumanComponent,]
    });
  });

  it('should render DisplayHumanComponent', async () =>{
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();

  });
  it('should show new added Humans in table', async () =>{
    
  });

  it('should show all information about one Humans in the right row', async () =>{
    
  });

});

