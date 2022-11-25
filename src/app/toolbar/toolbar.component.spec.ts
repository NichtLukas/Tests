import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom/extend-expect';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {

  it('should render ToolbarComponent', async () => {
    await render(ToolbarComponent)
    expect(screen.getByText('Human Manager')).toBeInTheDocument();
  })
});
