This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Python CLI Integration

This project includes a Python package (`python/eigencluster`) for generating cluster data that can be integrated with the TypeScript frontend:

### Installation

```bash
cd python
pip install -e .
```

### Usage

1. Generate clusters using the Python CLI or API:

```bash
# Generate eigenclusters
eigencluster eigenclusters --start-year 1990 --end-year 2020 --output eigenclusters.json

# Export to TypeScript
eigencluster export-ts --input eigenclusters.json --preset-id "my-clusters" --preset-name "My Clusters" --preset-desc "Custom analysis" --ts-dir src/lib/presets
```

2. Run the example script for a complete workflow:

```bash
cd python
python examples/export_to_typescript.py --ts-dir ../src/lib/presets
```

See the `python/README.md` file for detailed documentation.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
