# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

1. **Do NOT** open a public GitHub issue for security vulnerabilities
2. Email the maintainer directly: **iam@ramonloganjr.com**
3. Include in your report:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution Timeline**: Depends on severity, typically 14-30 days

### What to Expect

- Confirmation of receipt
- Regular updates on investigation progress
- Credit in release notes (if desired) after fix is deployed
- Notification when the vulnerability is patched

## Security Considerations

### Third-Party Services

This application uses the following external services:

- **Stadia Maps / OpenMapTiles**: Map tile provider (no user data transmitted)
- **Wikipedia Links**: External links to destination information

### Data Privacy

- This application does not collect, store, or transmit any user data
- No cookies or tracking mechanisms are used
- No authentication or personal information is required
- All destination data is static and publicly available

### Content Security

- All external resources are loaded over HTTPS
- Map tiles are sourced from trusted providers
- Images are self-hosted (no external image loading)

## Best Practices for Contributors

When contributing code:

1. Do not commit sensitive data (API keys, credentials)
2. Validate any user inputs if adding interactive features
3. Use HTTPS for all external resources
4. Keep dependencies updated
5. Review security advisories for dependencies

## Contact

**Ramon Logan Jr.**
- Security Reports: iam@ramonloganjr.com
- Website: www.ramonloganjr.com
- LinkedIn: https://www.linkedin.com/in/ramon-logan-jr
