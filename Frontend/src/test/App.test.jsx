import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App.jsx';

function getSkillRowCount(container) {
  return container.querySelectorAll('.skills-page-row').length;
}

describe('App core flows', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  test('main profile skills preview renders expected two skills', () => {
    render(<App />);

    expect(screen.getByText('Game Development')).toBeInTheDocument();
    expect(screen.getByText('Multiplayer Systems')).toBeInTheDocument();
    expect(screen.getByText('Endorsed by Peter Sui and 6 colleagues at PixelForge Studio')).toBeInTheDocument();
    expect(screen.getByText('Endorsed by Marcus Chen and 1 other highly skilled at this')).toBeInTheDocument();
  });

  test('show all skills opens skills page with full list', () => {
    const { container } = render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Show all 24 skills/i }));

    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    expect(getSkillRowCount(container)).toBe(24);
  });

  test('skills category filters reduce rows by category', () => {
    const { container } = render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Show all 24 skills/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Industry Knowledge' }));
    expect(getSkillRowCount(container)).toBe(7);

    fireEvent.click(screen.getByRole('button', { name: 'Interpersonal Skills' }));
    expect(getSkillRowCount(container)).toBe(4);
  });

  test('switching profiles updates URL and browser back returns to Leo', async () => {
    const { container } = render(<App />);

    fireEvent.click(screen.getByText('Dario Amodei'));

    expect(window.location.search).toContain('profile=dario-amodei');
    expect(container.querySelector('.profile-name')).toHaveTextContent('Dario Amodei');

    act(() => {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });

    await waitFor(() => {
      expect(container.querySelector('.profile-name')).toHaveTextContent('Leo Martinez');
    });
  });
});
