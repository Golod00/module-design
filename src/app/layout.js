import 'reset-css';
import '@/styles/globals.scss';

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <body>
                {children}
            </body>
        </html>
    );
}