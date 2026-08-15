# Contributing to TokenOrbit

Thank you for your interest in contributing to TokenOrbit! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs
- Check if the bug already exists in GitHub Issues
- Provide a clear description and steps to reproduce
- Include your environment details (OS, browser, Node version)

### Suggesting Features
- Check existing issues and discussions first
- Provide clear use cases and examples
- Explain how it fits with TokenOrbit's mission of transparency and privacy

### Submitting Changes

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the project's code style
4. Test locally:
   ```bash
   npm run dev        # Test the app
   npm run lint       # Check code quality
   npm run build      # Verify production build
   npm run validate:pricing  # If you changed pricing data
   ```
5. Commit with clear messages:
   ```bash
   git commit -m "Add clear description of changes"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a Pull Request with a clear description

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Use React functional components with hooks
- Keep components focused and reusable
- Add comments for complex logic

### Pricing Data Changes
- Always verify with provider's official documentation
- Include source URLs and update dates
- Run validation: `npm run validate:pricing`
- Never add pricing from memory

### Adding Guides
- Keep content clear and accessible
- Cite sources where appropriate
- Add to `app/guides-data.ts` and `app/guides/[slug]/page.tsx`

### Documentation
- Update README.md for significant changes
- Include examples where appropriate
- Document new environment variables

## Testing

Before submitting:
- Test locally with `npm run dev`
- Build for production with `npm run build`
- Check for any console errors or warnings
- Test on mobile if UI changes were made

## Pull Request Process

1. Update documentation as needed
2. Ensure all tests pass
3. Keep commits atomic and well-described
4. Be responsive to feedback

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Report harassment or inappropriate behavior

## Questions?

- Open an issue for questions
- Email: hello@tokenorbit.io
- Check existing documentation and guides

Thanks for contributing to TokenOrbit!
