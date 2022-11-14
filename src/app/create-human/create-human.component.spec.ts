import { CreateHumanComponent } from './create-human.component';
import {render, screen, fireEvent} from '@testing-library/angular'

describe('CreateHumanComponent', () => {

  it('should render CreateHumanComponent', async () => {
    await render(CreateHumanComponent)
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    
  });




  

});
