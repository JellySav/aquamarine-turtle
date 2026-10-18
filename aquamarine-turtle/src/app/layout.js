import './globals.css';

export const metadata = {
  title: 'Aquamarine Turtle | Diario de exploración oceánica',
  description:
    'Explora costas, corrientes pelágicas, altamar y arrecifes profundos en una expedición marina interactiva.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}