import { ToolbarComponent } from './toolbar.component';
import {render, screen, fireEvent} from '@testing-library/angular'

describe('ToolbarComponent', () => {

  it('should render ToolbarComponent', async () => {
    await render(ToolbarComponent)
    expect(screen.getByText('Human Manager')).toBeInTheDocument();
  })
});
